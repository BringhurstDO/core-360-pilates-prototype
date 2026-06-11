import { ExerciseRecord } from "@/lib/exercise-types";

export const manualDart: ExerciseRecord = {
  display: {
    id: "manual-dart",
    slug: "manual-dart",
    name: "Dart",
    summary: "Manual-source prone / extension exercise from the spinal extension category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 60,
    section: "Prone / Extension",
    originalName: "Dart",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner",
    movementCategory: "Spinal Extension",
    bodyPosition: "Prone / Extension",
    movementCompass: ["Extension", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Prone",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Erector spinae, posterior shoulder, gluteals",
    stabilizersText: "Deep trunk stabilizers",
    primaryMuscleIds: ["glutes", "spinal-erectors", "shoulder-stabilizers"],
    stabilizerMuscleIds: ["transversus-abdominis", "multifidus"],
    regions: ["Deep Core", "Posterior Chain", "Shoulder Stabilizers"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle"],
    overlay: {
      primary: ["glutes", "spinal-erectors", "shoulder-stabilizers"],
      secondary: [],
      stabilizers: ["transversus-abdominis", "multifidus"],
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
    sequenceNotes: "Manual-source exercise from the prone / extension spinal extension block."
  }
};
