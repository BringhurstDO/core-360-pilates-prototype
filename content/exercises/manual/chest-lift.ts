import { ExerciseRecord } from "@/lib/exercise-types";

export const manualChestLift: ExerciseRecord = {
  display: {
    id: "manual-chest-lift",
    slug: "manual-chest-lift",
    name: "Chest Lift",
    summary:
      "Manual-source forward-flexion exercise for abdominal support and rib-pelvis organization.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 13,
    section: "Supine",
    originalName: "Chest Lift",
    sourceStatus: "manual-source"
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner",
    movementCategory: "Abdominals / Forward Flexion",
    bodyPosition: "Supine",
    movementCompass: ["Forward Flexion", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Rectus abdominis, obliques",
    stabilizersText: "Deep neck flexors, scapular stabilizers",
    primaryMuscleIds: ["abdominals", "obliques"],
    stabilizerMuscleIds: ["shoulder-stabilizers"],
    regions: ["Anterior Core", "Deep Core", "Shoulder Stabilizers"],
    bodyScanFocus: ["Head and neck", "Rib cage", "Pelvis"],
    overlay: {
      primary: ["abdominals", "obliques"],
      secondary: [],
      stabilizers: ["shoulder-stabilizers"],
      preferredView: "front"
    }
  },
  teaching: {
    setup: "Establish alignment and prepare breath.",
    execution:
      "Move with controlled tempo while maintaining organization and support.",
    breathPattern: "Inhale to prepare, exhale through the effort.",
    cues: [
      "Encourage length, control, and rib-pelvis organization."
    ],
    commonMistakes: [
      "Losing alignment, gripping unnecessary muscles, or using momentum."
    ],
    modifications: [
      "Reduce range, shorten lever length, or add support as needed."
    ],
    progressions: [
      "Increase lever length, complexity, or challenge only when control is maintained."
    ]
  },
  programming: {
    sequenceNotes:
      "Manual-source exercise from the supine abdominals / forward flexion block."
  }
};
