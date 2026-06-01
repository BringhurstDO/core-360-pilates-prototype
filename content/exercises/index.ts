import { AudienceMode, ExerciseRecord } from "@/lib/exercise-types";
import { elephant } from "@/content/exercises/elephant";
import { hundred } from "@/content/exercises/hundred";
import { mermaid } from "@/content/exercises/mermaid";
import { manualBirdDog } from "@/content/exercises/manual/bird-dog";
import { manualChestLift } from "@/content/exercises/manual/chest-lift";
import { manualLateralBreathing } from "@/content/exercises/manual/lateral-breathing";
import { manualNeutralPelvisHold } from "@/content/exercises/manual/neutral-pelvis-hold";
import { manualPelvicCurl } from "@/content/exercises/manual/pelvic-curl";
import { manualPelvicTilt } from "@/content/exercises/manual/pelvic-tilt";
import { manualRainbow } from "@/content/exercises/manual/rainbow";
import { manualTabletopHold } from "@/content/exercises/manual/tabletop-hold";
import { manualToeTaps } from "@/content/exercises/manual/toe-taps";
import { rollUp } from "@/content/exercises/roll-up";
import { shoulderBridge } from "@/content/exercises/shoulder-bridge";
import { sideKickSeries } from "@/content/exercises/side-kick-series";
import { swanPrep } from "@/content/exercises/swan-prep";
import { teaserPrep } from "@/content/exercises/teaser-prep";

const authoredExercises: ExerciseRecord[] = [
  hundred,
  rollUp,
  shoulderBridge,
  swanPrep,
  sideKickSeries,
  elephant,
  mermaid,
  teaserPrep,
  manualLateralBreathing,
  manualPelvicTilt,
  manualNeutralPelvisHold,
  manualToeTaps,
  manualTabletopHold,
  manualChestLift,
  manualPelvicCurl,
  manualRainbow,
  manualBirdDog
];

type ValidationIssue = {
  level: "error" | "warning";
  message: string;
};

function validateExercises(exercises: ExerciseRecord[]) {
  const issues: ValidationIssue[] = [];
  const seenSlugs = new Set<string>();

  for (const exercise of exercises) {
    const name = exercise.display.name.trim();
    const slug = exercise.display.slug.trim();
    const primaryMuscles = exercise.anatomy.primaryMusclesText.trim();
    const sourceName = exercise.source.originalName.trim();

    if (!slug) {
      issues.push({
        level: "error",
        message: `Missing slug for exercise "${name || exercise.display.id}".`
      });
    }

    if (!name) {
      issues.push({
        level: "error",
        message: `Missing title for exercise with id "${exercise.display.id}".`
      });
    }

    if (slug) {
      if (seenSlugs.has(slug)) {
        issues.push({
          level: "error",
          message: `Duplicate slug detected: "${slug}".`
        });
      }
      seenSlugs.add(slug);
    }

    if (!sourceName) {
      issues.push({
        level: "error",
        message: `Missing source originalName for "${name || slug || exercise.display.id}".`
      });
    }

    if (!primaryMuscles) {
      issues.push({
        level: "error",
        message: `Missing primary muscles for "${name || slug || exercise.display.id}".`
      });
    }

    if (!exercise.teaching.setup.trim() || !exercise.teaching.execution.trim()) {
      issues.push({
        level: "error",
        message: `Missing teaching setup or execution for "${name || slug || exercise.display.id}".`
      });
    }

    const images = exercise.media?.images ?? [];

    if (images.length > 0 && !images.some((image) => image.kind === "placeholder")) {
      issues.push({
        level: "warning",
        message: `No placeholder image found for "${name || slug || exercise.display.id}".`
      });
    }
  }

  return issues;
}

const validationIssues = validateExercises(authoredExercises);
const validationErrors = validationIssues.filter((issue) => issue.level === "error");

if (validationErrors.length > 0) {
  throw new Error(
    `Exercise content validation failed:\n${validationErrors
      .map((issue) => `- ${issue.message}`)
      .join("\n")}`
  );
}

export const exerciseValidationIssues = validationIssues;
export const exercises = authoredExercises;

export function getExerciseBySlug(slug: string) {
  return exercises.find((exercise) => exercise.display.slug === slug);
}

export function getAllExerciseSlugs() {
  return exercises.map((exercise) => exercise.display.slug);
}

export function getExercisesByAudienceMode(mode: AudienceMode) {
  if (mode === "both") {
    return exercises.filter((exercise) => (exercise.display.audienceMode ?? "both") === "both");
  }

  return exercises.filter(
    (exercise) =>
      exercise.display.audienceMode === mode ||
      (exercise.display.audienceMode ?? "both") === "both"
  );
}
