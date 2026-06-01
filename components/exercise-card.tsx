import Link from "next/link";
import { ExerciseSourceBadges } from "@/components/exercise-source-badges";
import { ExerciseRecord } from "@/lib/exercise-types";

type ExerciseCardProps = {
  exercise: ExerciseRecord;
};

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const equipment = exercise.classification.equipment.join(", ");
  const summary =
    exercise.display.summary ??
    exercise.clientContent?.summary ??
    exercise.teaching.execution;
  const focus =
    exercise.programming?.focus ??
    exercise.programming?.sequenceNotes ??
    exercise.teaching.breathPattern;

  return (
    <Link className="card" href={`/exercises/${exercise.display.slug}`}>
      <ExerciseSourceBadges exercise={exercise} />

      <div className="card-top">
        <div>
          <h2>{exercise.display.name}</h2>
          <p className="card-copy">{summary}</p>
        </div>
        <span className="mini-chip">{exercise.classification.level}</span>
      </div>

      <div className="card-meta">
        <span className="mini-chip">{equipment}</span>
        <span className="mini-chip">{exercise.classification.bodyPosition}</span>
        <span className="mini-chip">{exercise.classification.movementCategory}</span>
      </div>

      <p className="muscle-line">
        <strong>Primary:</strong> {exercise.anatomy.primaryMusclesText}
      </p>

      <div className="card-footer">
        <span className="muscle-line">{focus}</span>
        <span className="link-arrow">Open detail</span>
      </div>
    </Link>
  );
}
