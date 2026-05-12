import Link from "next/link";
import { notFound } from "next/navigation";
import { ExerciseDetailModes } from "@/components/exercise-detail-modes";
import { PrototypeLabel } from "@/components/prototype-label";
import {
  getAllExerciseSlugs,
  getExerciseBySlug
} from "@/content/exercises";

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

  return (
    <main className="page-shell">
      <div className="page-header">
        <Link className="back-link" href="/exercises">
          Back to library
        </Link>
        <p className="eyebrow">Exercise Detail</p>
        <div className="label-row">
          <PrototypeLabel>Sample content</PrototypeLabel>
          <PrototypeLabel>Simplified anatomy</PrototypeLabel>
        </div>
        <h1>{exercise.display.name}</h1>
        <div className="chip-row">
          <span className="chip">{exercise.classification.apparatus}</span>
          <span className="chip">{exercise.classification.level}</span>
          <span className="chip">{exercise.classification.bodyPosition}</span>
          <span className="chip">{exercise.classification.movementCategory}</span>
          <span className="chip">{exercise.display.audienceMode}</span>
        </div>
        <p className="detail-summary">{exercise.display.summary}</p>
      </div>

      <section className="detail-grid">
        <ExerciseDetailModes exercise={exercise} />

        <aside className="sidebar-stack">
          <section className="info-card sticky-card">
            <h2>Classification</h2>
            <div className="taxonomy-block">
              <h3>Apparatus</h3>
              <p>{exercise.classification.apparatus}</p>
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
          </section>

          <section className="info-card">
            <h2>Prototype Notes</h2>
            <div className="taxonomy-block">
              <h3>Review focus</h3>
              <p>Use this page to review structure, content split, and teaching flow.</p>
            </div>
            <div className="taxonomy-block">
              <h3>Current limits</h3>
              <p>Images are placeholders, anatomy is simplified, and content is sample copy.</p>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
