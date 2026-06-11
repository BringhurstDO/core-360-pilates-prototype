import { ExerciseRecord } from "@/lib/exercise-types";

export const manualFullPlank: ExerciseRecord = {
  display: {
    id: "manual-full-plank",
    slug: "manual-full-plank",
    name: "Full Plank",
    summary: "Manual-source plank / closed chain exercise from the planking category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 70,
    section: "Plank / Closed Chain",
    originalName: "Full Plank",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Planking",
    bodyPosition: "Plank / Closed Chain",
    movementCompass: ["Core Stability", "Rib-Pelvis Alignment", "Integration"],
    programmingWheelSlot: "Plank",
    laterality: "Bilateral",
    supportType: ["Closed Chain", "Weight Bearing", "Shoulder Support"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "abdominals", "glutes", "shoulder-stabilizers"],
    stabilizerMuscleIds: ["multifidus"],
    regions: ["Deep Core", "Anterior Core", "Posterior Chain", "Shoulder Stabilizers"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle", "Wrist/hand support"],
    overlay: {
      primary: ["transversus-abdominis", "abdominals", "glutes", "shoulder-stabilizers"],
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
    sequenceNotes: "Manual-source exercise from the plank / closed chain planking block."
  }
};
