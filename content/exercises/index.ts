import { AudienceMode, ExerciseRecord } from "@/lib/exercise-types";
import { elephant } from "@/content/exercises/elephant";
import { hundred } from "@/content/exercises/hundred";
import { mermaid } from "@/content/exercises/mermaid";
import { rollUp } from "@/content/exercises/roll-up";
import { shoulderBridge } from "@/content/exercises/shoulder-bridge";
import { sideKickSeries } from "@/content/exercises/side-kick-series";
import { swanPrep } from "@/content/exercises/swan-prep";
import { teaserPrep } from "@/content/exercises/teaser-prep";
import { manualLateralBreathing } from "@/content/exercises/manual/lateral-breathing";
import { manualPelvicTilt } from "@/content/exercises/manual/pelvic-tilt";
import { manualNeutralPelvisHold } from "@/content/exercises/manual/neutral-pelvis-hold";
import { manualChestLift } from "@/content/exercises/manual/chest-lift";
import { manualChestLiftWithRotation } from "@/content/exercises/manual/chest-lift-with-rotation";
import { manualChestLiftWithReach } from "@/content/exercises/manual/chest-lift-with-reach";
import { manualChestLiftWithLegLift } from "@/content/exercises/manual/chest-lift-with-leg-lift";
import { manualHundredPrep } from "@/content/exercises/manual/hundred-prep";
import { manualTheHundred } from "@/content/exercises/manual/the-hundred";
import { manualSingleLegStretch } from "@/content/exercises/manual/single-leg-stretch";
import { manualDoubleLegStretch } from "@/content/exercises/manual/double-leg-stretch";
import { manualSingleStraightLegStretch } from "@/content/exercises/manual/single-straight-leg-stretch";
import { manualDoubleStraightLegLower } from "@/content/exercises/manual/double-straight-leg-lower";
import { manualCrissCross } from "@/content/exercises/manual/criss-cross";
import { manualToeTaps } from "@/content/exercises/manual/toe-taps";
import { manualTabletopHold } from "@/content/exercises/manual/tabletop-hold";
import { manualPelvicCurl } from "@/content/exercises/manual/pelvic-curl";
import { manualBridge } from "@/content/exercises/manual/bridge";
import { manualBridgeWithMarch } from "@/content/exercises/manual/bridge-with-march";
import { manualBridgeWithLegExtension } from "@/content/exercises/manual/bridge-with-leg-extension";
import { manualRollUp } from "@/content/exercises/manual/roll-up";
import { manualHalfRollBack } from "@/content/exercises/manual/half-roll-back";
import { manualRollLikeABall } from "@/content/exercises/manual/roll-like-a-ball";
import { manualOpenLegRocker } from "@/content/exercises/manual/open-leg-rocker";
import { manualSideLyingAlignmentHold } from "@/content/exercises/manual/side-lying-alignment-hold";
import { manualSideLyingLegLift } from "@/content/exercises/manual/side-lying-leg-lift";
import { manualSideLyingLowerLift } from "@/content/exercises/manual/side-lying-lower-lift";
import { manualSideLyingFrontBackKick } from "@/content/exercises/manual/side-lying-front-back-kick";
import { manualSideLyingCircles } from "@/content/exercises/manual/side-lying-circles";
import { manualSideLyingBicycle } from "@/content/exercises/manual/side-lying-bicycle";
import { manualSideLyingInnerThighLift } from "@/content/exercises/manual/side-lying-inner-thigh-lift";
import { manualSideLyingDeveloppe } from "@/content/exercises/manual/side-lying-developpe";
import { manualRainbow } from "@/content/exercises/manual/rainbow";
import { manualSideLyingLegBeats } from "@/content/exercises/manual/side-lying-leg-beats";
import { manualMermaid } from "@/content/exercises/manual/mermaid";
import { manualMermaidWithRotation } from "@/content/exercises/manual/mermaid-with-rotation";
import { manualSideBendPrep } from "@/content/exercises/manual/side-bend-prep";
import { manualSideBend } from "@/content/exercises/manual/side-bend";
import { manualStarSidePlankVariation } from "@/content/exercises/manual/star-side-plank-variation";
import { manualQuadrupedNeutralHold } from "@/content/exercises/manual/quadruped-neutral-hold";
import { manualCatCow } from "@/content/exercises/manual/cat-cow";
import { manualBirdDog } from "@/content/exercises/manual/bird-dog";
import { manualBirdDogWithReach } from "@/content/exercises/manual/bird-dog-with-reach";
import { manualDonkeyKick } from "@/content/exercises/manual/donkey-kick";
import { manualFireHydrant } from "@/content/exercises/manual/fire-hydrant";
import { manualKneelingArmReach } from "@/content/exercises/manual/kneeling-arm-reach";
import { manualKneelingRotation } from "@/content/exercises/manual/kneeling-rotation";
import { manualKneelingSideBend } from "@/content/exercises/manual/kneeling-side-bend";
import { manualKneelingPlankPrep } from "@/content/exercises/manual/kneeling-plank-prep";
import { manualProneBreathing } from "@/content/exercises/manual/prone-breathing";
import { manualDart } from "@/content/exercises/manual/dart";
import { manualSwimmingPrep } from "@/content/exercises/manual/swimming-prep";
import { manualSwimming } from "@/content/exercises/manual/swimming";
import { manualSingleLegKick } from "@/content/exercises/manual/single-leg-kick";
import { manualDoubleLegKick } from "@/content/exercises/manual/double-leg-kick";
import { manualSwanPrep } from "@/content/exercises/manual/swan-prep";
import { manualSwan } from "@/content/exercises/manual/swan";
import { manualBabySwan } from "@/content/exercises/manual/baby-swan";
import { manualProneArmLift } from "@/content/exercises/manual/prone-arm-lift";
import { manualForearmPlank } from "@/content/exercises/manual/forearm-plank";
import { manualFullPlank } from "@/content/exercises/manual/full-plank";
import { manualKneePlank } from "@/content/exercises/manual/knee-plank";
import { manualPlankShoulderTap } from "@/content/exercises/manual/plank-shoulder-tap";
import { manualPlankLegLift } from "@/content/exercises/manual/plank-leg-lift";
import { manualPlankStepBack } from "@/content/exercises/manual/plank-step-back";
import { manualMountainClimber } from "@/content/exercises/manual/mountain-climber";
import { manualSpineStretchForward } from "@/content/exercises/manual/spine-stretch-forward";
import { manualSpineTwist } from "@/content/exercises/manual/spine-twist";
import { manualSeatedTwistReach } from "@/content/exercises/manual/seated-twist-reach";
import { manualSaw } from "@/content/exercises/manual/saw";
import { manualSeatedSideBend } from "@/content/exercises/manual/seated-side-bend";
import { manualSeal } from "@/content/exercises/manual/seal";
import { manualStandingRollDown } from "@/content/exercises/manual/standing-roll-down";
import { manualStandingSquat } from "@/content/exercises/manual/standing-squat";
import { manualStandingLunge } from "@/content/exercises/manual/standing-lunge";
import { manualStandingRotation } from "@/content/exercises/manual/standing-rotation";
import { manualStandingSideBend } from "@/content/exercises/manual/standing-side-bend";
import { manualStandingBalanceReach } from "@/content/exercises/manual/standing-balance-reach";

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
  manualChestLift,
  manualChestLiftWithRotation,
  manualChestLiftWithReach,
  manualChestLiftWithLegLift,
  manualHundredPrep,
  manualTheHundred,
  manualSingleLegStretch,
  manualDoubleLegStretch,
  manualSingleStraightLegStretch,
  manualDoubleStraightLegLower,
  manualCrissCross,
  manualToeTaps,
  manualTabletopHold,
  manualPelvicCurl,
  manualBridge,
  manualBridgeWithMarch,
  manualBridgeWithLegExtension,
  manualRollUp,
  manualHalfRollBack,
  manualRollLikeABall,
  manualOpenLegRocker,
  manualSideLyingAlignmentHold,
  manualSideLyingLegLift,
  manualSideLyingLowerLift,
  manualSideLyingFrontBackKick,
  manualSideLyingCircles,
  manualSideLyingBicycle,
  manualSideLyingInnerThighLift,
  manualSideLyingDeveloppe,
  manualRainbow,
  manualSideLyingLegBeats,
  manualMermaid,
  manualMermaidWithRotation,
  manualSideBendPrep,
  manualSideBend,
  manualStarSidePlankVariation,
  manualQuadrupedNeutralHold,
  manualCatCow,
  manualBirdDog,
  manualBirdDogWithReach,
  manualDonkeyKick,
  manualFireHydrant,
  manualKneelingArmReach,
  manualKneelingRotation,
  manualKneelingSideBend,
  manualKneelingPlankPrep,
  manualProneBreathing,
  manualDart,
  manualSwimmingPrep,
  manualSwimming,
  manualSingleLegKick,
  manualDoubleLegKick,
  manualSwanPrep,
  manualSwan,
  manualBabySwan,
  manualProneArmLift,
  manualForearmPlank,
  manualFullPlank,
  manualKneePlank,
  manualPlankShoulderTap,
  manualPlankLegLift,
  manualPlankStepBack,
  manualMountainClimber,
  manualSpineStretchForward,
  manualSpineTwist,
  manualSeatedTwistReach,
  manualSaw,
  manualSeatedSideBend,
  manualSeal,
  manualStandingRollDown,
  manualStandingSquat,
  manualStandingLunge,
  manualStandingRotation,
  manualStandingSideBend,
  manualStandingBalanceReach
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
