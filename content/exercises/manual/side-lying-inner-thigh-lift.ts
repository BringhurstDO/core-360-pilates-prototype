import { ExerciseRecord } from "@/lib/exercise-types";

export const manualSideLyingInnerThighLift: ExerciseRecord = {
  display: {
    id: "manual-side-lying-inner-thigh-lift",
    slug: "manual-side-lying-inner-thigh-lift",
    name: "Side-Lying Inner Thigh Lift",
    summary: "Manual-source side-facing exercise from the side-lying hip / leg work category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 40,
    section: "Side-Facing",
    originalName: "Side-Lying Inner Thigh Lift",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Side-Lying Hip / Leg Work",
    bodyPosition: "Side-Facing",
    movementCompass: ["Core Stability", "Rib-Pelvis Alignment", "Integration"],
    programmingWheelSlot: "Side-Lying / Side-Facing",
    laterality: "Side 1",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "obliques", "adductors", "glutes"],
    stabilizerMuscleIds: ["multifidus"],
    regions: ["Deep Core", "Anterior Core", "Posterior Chain", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage"],
    overlay: {
      primary: ["transversus-abdominis", "obliques", "adductors", "glutes"],
      secondary: [],
      stabilizers: ["multifidus"],
      preferredView: "both"
    }
  },
  teaching: {
    setup: "Establish alignment and prepare breath.",
    execution: "Move with controlled tempo while maintaining organization and support.",
    breathPattern: "Inhale to prepare, exhale through the effort.",
    cues: ["Encourage length, control, and rib-pelvis organization."],
    commonMistakes: ["Losing alignment, gripping unnecessary muscles, or using momentum."],
    modifications: ["Reduce range, shorten lever length, or add support as needed."],
    progressions: ["Increase lever length, complexity, or challenge only when control is maintained."]
  },
  programming: {
    sequenceNotes: "Manual-source exercise from the side-facing side-lying hip / leg work block."
  }
};
