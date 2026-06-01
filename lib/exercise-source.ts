import { ExerciseRecord, SourceStatus } from "@/lib/exercise-types";

export const SOURCE_CONTENT_FILTERS = [
  "All",
  "Core 360 Manual",
  "Prototype/Sample Content",
  "Needs Stacey Review"
] as const;

export type SourceContentFilter = (typeof SOURCE_CONTENT_FILTERS)[number];

export type ExerciseSourceBadge = {
  label: string;
  tone: "manual" | "sample" | "review";
};

export function isCore360ManualExercise(exercise: ExerciseRecord) {
  return (
    exercise.source.sourceStatus === "manual-source" ||
    exercise.source.sourceStatus === "needs-stacey-review"
  );
}

export function hasStaceyReviewQuestions(exercise: ExerciseRecord) {
  return (
    exercise.source.sourceStatus === "needs-stacey-review" ||
    (exercise.source.reviewQuestions?.length ?? 0) > 0
  );
}

export function matchesSourceContentFilter(
  exercise: ExerciseRecord,
  filter: SourceContentFilter
) {
  if (filter === "All") {
    return true;
  }

  if (filter === "Core 360 Manual") {
    return isCore360ManualExercise(exercise);
  }

  if (filter === "Prototype/Sample Content") {
    return !isCore360ManualExercise(exercise);
  }

  return hasStaceyReviewQuestions(exercise);
}

export function getExerciseSourceBadges(exercise: ExerciseRecord): ExerciseSourceBadge[] {
  const badges: ExerciseSourceBadge[] = [
    isCore360ManualExercise(exercise)
      ? { label: "Core 360 Manual", tone: "manual" }
      : { label: "Prototype Sample", tone: "sample" }
  ];

  if (hasStaceyReviewQuestions(exercise)) {
    badges.push({ label: "Needs Review", tone: "review" });
  }

  return badges;
}

export function formatSourceStatus(status: SourceStatus) {
  const labels: Record<SourceStatus, string> = {
    "manual-source": "Manual source",
    "manual-adapted": "Manual adapted sample",
    "prototype-only": "Prototype only",
    "needs-stacey-review": "Needs Stacey review"
  };

  return labels[status];
}

export function getSourceFidelityNote(exercise: ExerciseRecord) {
  if (exercise.source.sourceStatus === "manual-source") {
    return "Manual source fields preserve Stacey's text; summaries, normalized anatomy, movement compass, programming wheel, laterality, support type, and UI badges are derived app taxonomy.";
  }

  if (exercise.source.sourceStatus === "needs-stacey-review") {
    return "This record needs Stacey review before it should be treated as final manual content; app taxonomy remains derived.";
  }

  return "This is prototype or adapted sample content for reviewing the product experience; it should not be treated as exact manual text.";
}
