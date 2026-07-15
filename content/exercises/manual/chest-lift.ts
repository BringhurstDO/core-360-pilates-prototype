import { ExerciseRecord } from "@/lib/exercise-types";

export const manualChestLift: ExerciseRecord = {
  display: {
    id: "manual-chest-lift",
    slug: "manual-chest-lift",
    name: "Chest Lift",
    summary: "Manual-source supine exercise from the abdominals / forward flexion category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 13,
    section: "Supine",
    originalName: "Chest Lift",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
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
    regions: ["Anterior Core", "Shoulder Stabilizers", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Head and neck"],
    overlay: {
      primary: ["abdominals", "obliques"],
      secondary: [],
      stabilizers: ["shoulder-stabilizers"],
      preferredView: "front"
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
    sequenceNotes: "Manual-source exercise from the supine abdominals / forward flexion block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-chest-lift-teaching",
      title: "Chest Lift",
      description: "Generated muscle-emphasis teaching diagram for Chest Lift.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-chest-lift.png",
      imageAlt: "Chest Lift teaching diagram with highlighted muscles"
    }
  }
};
