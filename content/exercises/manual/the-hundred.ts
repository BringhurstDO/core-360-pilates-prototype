import { ExerciseRecord } from "@/lib/exercise-types";

export const manualTheHundred: ExerciseRecord = {
  display: {
    id: "manual-the-hundred",
    slug: "manual-the-hundred",
    name: "The Hundred",
    summary: "Manual-source supine exercise from the abdominals / forward flexion category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 18,
    section: "Supine",
    originalName: "The Hundred",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Intermediate",
    movementCategory: "Abdominals / Forward Flexion",
    bodyPosition: "Supine",
    movementCompass: ["Forward Flexion", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Rectus abdominis, obliques, hip flexors",
    stabilizersText: "Deep core stabilizers, scapular support",
    primaryMuscleIds: ["abdominals", "obliques", "hip-flexors"],
    stabilizerMuscleIds: ["transversus-abdominis", "multifidus", "shoulder-stabilizers"],
    regions: ["Deep Core", "Anterior Core", "Shoulder Stabilizers", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Head and neck"],
    overlay: {
      primary: ["abdominals", "obliques", "hip-flexors"],
      secondary: [],
      stabilizers: ["transversus-abdominis", "multifidus", "shoulder-stabilizers"],
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
    sequenceNotes: "Manual-source exercise from the supine abdominals / forward flexion block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-the-hundred-teaching",
      title: "The Hundred",
      description: "Generated muscle-emphasis teaching diagram for The Hundred.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-the-hundred.png",
      imageAlt: "The Hundred teaching diagram with highlighted muscles"
    }
  }
};
