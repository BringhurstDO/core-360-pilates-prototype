export const APPARATUS = [
  "Mat",
  "Reformer",
  "Cadillac",
  "Chair",
  "Barrel"
] as const;

export const LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export const BODY_POSITIONS = [
  "Supine",
  "Prone",
  "Seated",
  "Kneeling",
  "Standing",
  "Side-lying"
] as const;

export const MOVEMENT_CATEGORIES = [
  "Core Articulation",
  "Hip Stability",
  "Spinal Extension",
  "Upper Body Support",
  "Lateral Flexion",
  "Rotation"
] as const;

export const MUSCLE_GROUPS = [
  "abdominals",
  "obliques",
  "hip-flexors",
  "quadriceps",
  "adductors",
  "glutes",
  "hamstrings",
  "calves",
  "spinal-erectors",
  "lats",
  "deltoids",
  "triceps",
  "biceps",
  "pecs",
  "shoulder-stabilizers"
] as const;

export const AUDIENCE_MODES = ["instructor", "client", "both"] as const;

export type Apparatus = (typeof APPARATUS)[number];
export type ExerciseLevel = (typeof LEVELS)[number];
export type BodyPosition = (typeof BODY_POSITIONS)[number];
export type MovementCategory = (typeof MOVEMENT_CATEGORIES)[number];
export type MuscleGroupId = (typeof MUSCLE_GROUPS)[number];
export type AudienceMode = (typeof AUDIENCE_MODES)[number];
export type AnatomyViewMode = "front" | "back" | "both";

export const muscleGroupLabels: Record<MuscleGroupId, string> = {
  abdominals: "Abdominals",
  obliques: "Obliques",
  "hip-flexors": "Hip Flexors",
  quadriceps: "Quadriceps",
  adductors: "Adductors",
  glutes: "Glutes",
  hamstrings: "Hamstrings",
  calves: "Calves",
  "spinal-erectors": "Spinal Erectors",
  lats: "Lats",
  deltoids: "Deltoids",
  triceps: "Triceps",
  biceps: "Biceps",
  pecs: "Pecs",
  "shoulder-stabilizers": "Shoulder Stabilizers"
};

export function formatMuscleGroup(muscleGroup: MuscleGroupId) {
  return muscleGroupLabels[muscleGroup];
}

export type ExerciseImage = {
  id: string;
  label: string;
  alt: string;
  kind: "placeholder";
};

export type ExerciseRecord = {
  display: {
    id: string;
    slug: string;
    name: string;
    summary: string;
    audienceMode: AudienceMode;
  };
  classification: {
    apparatus: Apparatus;
    level: ExerciseLevel;
    bodyPosition: BodyPosition;
    movementCategory: MovementCategory;
    muscleGroups: MuscleGroupId[];
  };
  anatomy: {
    primaryMuscles: string[];
    secondaryMuscles: string[];
    stabilizers: string[];
    overlay: {
      primary: MuscleGroupId[];
      secondary: MuscleGroupId[];
      stabilizers: MuscleGroupId[];
      preferredView?: AnatomyViewMode;
    };
    whereYouShouldFeelIt: string;
    whereYouShouldNotFeelIt: string;
  };
  instructorEducation: {
    executionSteps: string[];
    teachingCues: string[];
    commonMistakes: string[];
    progressions: string[];
    programming: {
      focus: string;
      useCase: string;
      pairsWellWith: string[];
    };
  };
  clientSafety: {
    entryGuidance: string;
    regressions: string[];
    precautions: string[];
    clientContent: {
      setup: string;
      simpleSteps: string[];
      helpfulAdjustments: string[];
      safetyNotes: string[];
    };
  };
  media: {
    images: ExerciseImage[];
  };
  futureExpansion: {
    instructorNotes?: string;
    clientSummary?: string;
    videoId?: string;
    subscriptionTier?: "free" | "pro";
    flowTags?: string[];
    anatomyLayerVersion?: "basic" | "expanded";
  };
};
