import { ExerciseRecord } from "@/lib/exercise-types";

export const manualStandingBalanceReach: ExerciseRecord = {
  display: {
    id: "manual-standing-balance-reach",
    slug: "manual-standing-balance-reach",
    name: "Standing Balance Reach",
    summary: "Manual-source standing integration exercise from the standing integration category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 87,
    section: "Standing Integration",
    originalName: "Standing Balance Reach",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Intermediate",
    movementCategory: "Standing Integration",
    bodyPosition: "Standing Integration",
    movementCompass: ["Integration", "Core Stability", "Rib-Pelvis Alignment"],
    programmingWheelSlot: "Standing",
    laterality: "Unilateral",
    supportType: ["Closed Chain", "Weight Bearing", "Balance"]
  },
  anatomy: {
    primaryMusclesText: "Glute medius, foot stabilizers, trunk stabilizers",
    stabilizersText: "Ankle stabilizers, hip stabilizers, deep core",
    primaryMuscleIds: ["transversus-abdominis", "multifidus", "glutes", "calves"],
    stabilizerMuscleIds: [],
    regions: ["Deep Core", "Posterior Chain"],
    bodyScanFocus: ["Feet and ankles", "Knees", "Pelvis", "Rib cage"],
    overlay: {
      primary: ["transversus-abdominis", "multifidus", "glutes", "calves"],
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
