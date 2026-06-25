import Link from "next/link";
import { notFound } from "next/navigation";
import { ExerciseDetailModes } from "@/components/exercise-detail-modes";
import { ExerciseReviewFeedbackForm } from "@/components/exercise-review-feedback-form";
import { ExerciseSourceBadges } from "@/components/exercise-source-badges";
import {
  getAllExerciseSlugs,
  getExerciseBySlug
} from "@/content/exercises";
import {
  formatSourceStatus,
  getSourceFidelityNote
} from "@/lib/exercise-source";

type ExerciseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllExerciseSlugs().map((slug) => ({ slug }));
}

export default async function ExerciseDetailPage({
  params
}: ExerciseDetailPageProps) {
  const { slug } = await params;
  const exercise = getExerciseBySlug(slug);

  if (!exercise) {
    notFound();
  }

  const equipment = exercise.classification.equipment.join(", ");
  const audienceMode = exercise.display.audienceMode ?? "both";

  return (
    <main className="page-shell">
      <div className="page-header">
        <Link className="back-link" href="/exercises">
          Back to library
        </Link>
        <p className="eyebrow">Exercise Detail</p>
        <ExerciseSourceBadges exercise={exercise} />
        <h1>{exercise.display.name}</h1>
        <div className="chip-row">
          <span className="chip">{equipment}</span>
          <span className="chip">{exercise.classification.level}</span>
          <span className="chip">{exercise.classification.bodyPosition}</span>
          <span className="chip">{exercise.classification.movementCategory}</span>
          <span className="chip">{audienceMode}</span>
        </div>
        <p className="detail-summary">
          {exercise.display.summary ?? exercise.teaching.execution}
        </p>
      </div>

      <section className="detail-grid">
        <ExerciseDetailModes exercise={exercise} />

        <aside className="sidebar-stack">
          <section className="info-card sticky-card">
            <h2>Classification</h2>
            <div className="taxonomy-block">
              <h3>Equipment</h3>
              <p>{equipment}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Level</h3>
              <p>{exercise.classification.level}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Body position</h3>
              <p>{exercise.classification.bodyPosition}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Movement category</h3>
              <p>{exercise.classification.movementCategory}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Movement compass</h3>
              <p>{exercise.classification.movementCompass.join(", ")}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Programming wheel</h3>
              <p>{exercise.classification.programmingWheelSlot ?? "Not specified"}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Support type</h3>
              <p>{exercise.classification.supportType?.join(", ") ?? "Not specified"}</p>
            </div>
          </section>

          <section className="info-card">
            <h2>Source Review</h2>
            <div className="taxonomy-block">
              <h3>Manual/source name</h3>
              <p>{exercise.source.manual}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Source page</h3>
              <p>{exercise.source.page ? `p. ${exercise.source.page}` : "Not specified"}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Source section</h3>
              <p>{exercise.source.section}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Original exercise name</h3>
              <p>{exercise.source.originalName}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Source status</h3>
              <p>{formatSourceStatus(exercise.source.sourceStatus)}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Manual text vs app taxonomy</h3>
              <p>{getSourceFidelityNote(exercise)}</p>
            </div>
          </section>

          {exercise.source.reviewQuestions?.length ? (
            <section className="info-card review-card">
              <h2>Review Questions</h2>
              <ul className="instruction-list unordered">
                {exercise.source.reviewQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <ExerciseReviewFeedbackForm exercise={exercise} />
        </aside>
      </section>
    </main>
  );
}
