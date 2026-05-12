import Link from "next/link";
import { ExerciseRecord } from "@/lib/exercise-types";

type ExerciseCardProps = {
  exercise: ExerciseRecord;
};

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Link className="card" href={`/exercises/${exercise.display.slug}`}>
      <div className="card-top">
        <div>
          <h2>{exercise.display.name}</h2>
          <p className="card-copy">{exercise.display.summary}</p>
        </div>
        <span className="mini-chip">{exercise.classification.level}</span>
      </div>

      <div className="card-meta">
        <span className="mini-chip">{exercise.classification.apparatus}</span>
        <span className="mini-chip">{exercise.classification.bodyPosition}</span>
        <span className="mini-chip">{exercise.classification.movementCategory}</span>
      </div>

      <p className="muscle-line">
        <strong>Primary:</strong> {exercise.anatomy.primaryMuscles.join(", ")}
      </p>

      <div className="card-footer">
        <span className="muscle-line">{exercise.instructorEducation.programming.focus}</span>
        <span className="link-arrow">Open detail</span>
      </div>
    </Link>
  );
}
