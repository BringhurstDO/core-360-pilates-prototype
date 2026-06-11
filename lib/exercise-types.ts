export const EQUIPMENT = [
  "Mat",
  "Reformer",
  "Cadillac",
  "Chair",
  "Barrel",
  "Barre"
] as const;

export const LEVELS = [
  "Beginner",
  "Beginner–Intermediate",
  "Intermediate",
  "Advanced"
] as const;

export const BODY_POSITIONS = [
  "Supine",
  "Side-Facing",
  "Side-Facing Seated",
  "Quadruped / Kneeling",
  "Prone / Extension",
  "Plank / Closed Chain",
  "Seated",
  "Standing Integration"
] as const;

export const MOVEMENT_CATEGORIES = [
  "Breathing / Pelvic Tilts",
  "Bridging",
  "Abdominals / Forward Flexion",
  "Twisting / Rotation",
  "Side-Lying Hip / Leg Work",
  "Lateral Flexion",
  "Quadruped / Kneeling",
  "Spinal Extension",
  "Planking",
  "Seated Spinal Work",
  "Standing Integration"
] as const;

export const MOVEMENT_COMPASS_TAGS = [
  "Core Stability",
  "Breath Mechanics",
  "Rib-Pelvis Alignment",
  "Forward Flexion",
  "Extension",
  "Rotation",
  "Lateral Flexion",
  "Integration"
] as const;

export const PROGRAMMING_WHEEL_SLOTS = [
  "Supine",
  "Side-Lying / Side-Facing",
  "Quadruped / Kneeling",
  "Prone",
  "Plank",
  "Side-Lying (Second Side)",
  "Seated",
  "Standing"
] as const;

export const LATERALITY = [
  "None",
  "Bilateral",
  "Unilateral",
  "Alternating",
  "Side 1",
  "Side 2"
] as const;

export const SUPPORT_TYPES = [
  "Open Chain",
  "Closed Chain",
  "Weight Bearing",
  "Shoulder Support",
  "Balance",
  "Loaded Apparatus",
  "Assisted"
] as const;

export const ANATOMY_REGIONS = [
  "Deep Core",
  "Anterior Core",
  "Posterior Chain",
  "Shoulder Stabilizers",
  "Lateral System"
] as const;

export const BODY_SCAN_FOCUS = [
  "Feet and ankles",
  "Knees",
  "Pelvis",
  "Rib cage",
  "Head and neck",
  "Shoulder girdle",
  "Wrist/hand support"
] as const;

export const CLASS_TEMPLATES = [
  "Beginner class emphasis",
  "Intermediate flow emphasis",
  "Gentle / restorative emphasis"
] as const;

export const SOURCE_STATUSES = [
  "manual-source",
  "manual-adapted",
  "prototype-only",
  "needs-stacey-review"
] as const;

export const MUSCLE_GROUPS = [
  "transversus-abdominis",
  "multifidus",
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

export type Equipment = (typeof EQUIPMENT)[number];
export type ExerciseLevel = (typeof LEVELS)[number];
export type BodyPosition = (typeof BODY_POSITIONS)[number];
export type MovementCategory = (typeof MOVEMENT_CATEGORIES)[number];
export type MovementCompassTag = (typeof MOVEMENT_COMPASS_TAGS)[number];
export type ProgrammingWheelSlot = (typeof PROGRAMMING_WHEEL_SLOTS)[number];
export type Laterality = (typeof LATERALITY)[number];
export type SupportType = (typeof SUPPORT_TYPES)[number];
export type AnatomyRegion = (typeof ANATOMY_REGIONS)[number];
export type BodyScanFocus = (typeof BODY_SCAN_FOCUS)[number];
export type ClassTemplate = (typeof CLASS_TEMPLATES)[number];
export type SourceStatus = (typeof SOURCE_STATUSES)[number];
export type MuscleGroupId = (typeof MUSCLE_GROUPS)[number];
export type AudienceMode = (typeof AUDIENCE_MODES)[number];
export type AnatomyViewMode = "front" | "back" | "both";

export const muscleGroupLabels: Record<MuscleGroupId, string> = {
  "transversus-abdominis": "Transversus Abdominis",
  multifidus: "Multifidus",
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
  kind: "placeholder" | "uploaded";
  src?: string;
};

export type ExerciseTeachingDiagram = {
  id: string;
  title: string;
  description: string;
  poseNotes: string[];
  annotationLabels: string[];
  kind: "placeholder" | "uploaded";
  imageSrc?: string;
  imageAlt?: string;
};

export type ExerciseRecord = {
  display: {
    id: string;
    slug: string;
    name: string;
    summary?: string;
    audienceMode?: AudienceMode;
    aliases?: string[];
  };
  source: {
    manual: string;
    page?: number;
    section: string;
    originalName: string;
    sourceStatus: SourceStatus;
    reviewQuestions?: string[];
  };
  classification: {
    equipment: Equipment[];
    level: ExerciseLevel;
    movementCategory: MovementCategory;
    bodyPosition: BodyPosition;
    movementCompass: MovementCompassTag[];
    programmingWheelSlot?: ProgrammingWheelSlot;
    laterality?: Laterality;
    supportType?: SupportType[];
  };
  anatomy: {
    primaryMusclesText: string;
    stabilizersText: string;
    secondaryMusclesText?: string;
    primaryMuscleIds?: MuscleGroupId[];
    stabilizerMuscleIds?: MuscleGroupId[];
    secondaryMuscleIds?: MuscleGroupId[];
    regions: AnatomyRegion[];
    bodyScanFocus?: BodyScanFocus[];
    overlay?: {
      primary?: MuscleGroupId[];
      secondary?: MuscleGroupId[];
      stabilizers?: MuscleGroupId[];
      preferredView?: AnatomyViewMode;
    };
    whereYouShouldFeelIt?: string;
    whereYouShouldNotFeelIt?: string;
  };
  teaching: {
    setup: string;
    execution: string;
    breathPattern: string;
    cues: string[];
    commonMistakes: string[];
    modifications: string[];
    progressions: string[];
    executionSteps?: string[];
  };
  programming?: {
    focus?: string;
    useCase?: string;
    sequenceNotes?: string;
    templateFits?: ClassTemplate[];
    pairsWellWith?: string[];
  };
  safety?: {
    entryGuidance?: string;
    precautions?: string[];
  };
  clientContent?: {
    setup?: string;
    simpleSteps?: string[];
    helpfulAdjustments?: string[];
    safetyNotes?: string[];
    summary?: string;
  };
  media?: {
    images?: ExerciseImage[];
    teachingDiagram?: ExerciseTeachingDiagram;
  };
};
