import { ExerciseRecord } from "@/lib/exercise-types";

export const manualStandingSquat: ExerciseRecord = {
  display: {
    id: "manual-standing-squat",
    slug: "manual-standing-squat",
    name: "Standing Squat",
    summary: "Manual-source standing integration exercise from the standing integration category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 83,
    section: "Standing Integration",
    originalName: "Standing Squat",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Standing Integration",
    bodyPosition: "Standing Integration",
    movementCompass: ["Integration", "Core Stability", "Rib-Pelvis Alignment"],
    programmingWheelSlot: "Standing",
    laterality: "Bilateral",
    supportType: ["Closed Chain", "Weight Bearing"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "multifidus", "quadriceps", "glutes", "hamstrings"],
    stabilizerMuscleIds: [],
    regions: ["Deep Core", "Posterior Chain"],
    bodyScanFocus: ["Feet and ankles", "Knees", "Pelvis", "Rib cage"],
    overlay: {
      primary: ["transversus-abdominis", "multifidus", "quadriceps", "glutes", "hamstrings"],
      secondary: [],
      stabilizers: [],
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
    sequenceNotes: "Manual-source exercise from the standing integration standing integration block."
  }
};
