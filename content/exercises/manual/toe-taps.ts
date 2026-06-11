import { ExerciseRecord } from "@/lib/exercise-types";

export const manualToeTaps: ExerciseRecord = {
  display: {
    id: "manual-toe-taps",
    slug: "manual-toe-taps",
    name: "Toe Taps",
    summary: "Manual-source supine exercise from the breathing / pelvic tilts category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 24,
    section: "Supine",
    originalName: "Toe Taps",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Breathing / Pelvic Tilts",
    bodyPosition: "Supine",
    movementCompass: ["Breath Mechanics", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Alternating",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Transversus abdominis, hip flexors, multifidus",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "multifidus", "hip-flexors"],
    stabilizerMuscleIds: [],
    regions: ["Deep Core", "Anterior Core"],
    bodyScanFocus: ["Pelvis", "Rib cage"],
    overlay: {
      primary: ["transversus-abdominis", "multifidus", "hip-flexors"],
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
    sequenceNotes: "Manual-source exercise from the supine breathing / pelvic tilts block."
  }
};
