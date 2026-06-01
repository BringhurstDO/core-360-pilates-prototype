import { ExerciseRecord } from "@/lib/exercise-types";
import { getExerciseSourceBadges } from "@/lib/exercise-source";

type ExerciseSourceBadgesProps = {
  exercise: ExerciseRecord;
};

export function ExerciseSourceBadges({ exercise }: ExerciseSourceBadgesProps) {
  const badges = getExerciseSourceBadges(exercise);

  return (
    <div className="source-badge-row">
      {badges.map((badge) => (
        <span
          className={`source-badge source-badge-${badge.tone}`}
          key={badge.label}
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}
