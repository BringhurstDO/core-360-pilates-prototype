import { ExerciseRecord } from "@/lib/exercise-types";

export const manualSpineStretchForward: ExerciseRecord = {
  display: {
    id: "manual-spine-stretch-forward",
    slug: "manual-spine-stretch-forward",
    name: "Spine Stretch Forward",
    summary: "Manual-source seated exercise from the seated spinal work category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 76,
    section: "Seated",
    originalName: "Spine Stretch Forward",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Seated Spinal Work",
    bodyPosition: "Seated",
    movementCompass: ["Core Stability", "Rib-Pelvis Alignment", "Forward Flexion"],
    programmingWheelSlot: "Seated",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Abdominals, deep spinal stabilizers",
    stabilizersText: "Pelvic floor, deep trunk stabilizers",
    primaryMuscleIds: ["multifidus", "abdominals"],
    stabilizerMuscleIds: ["transversus-abdominis"],
    regions: ["Deep Core", "Anterior Core"],
    bodyScanFocus: ["Pelvis", "Rib cage"],
    overlay: {
      primary: ["multifidus", "abdominals"],
      secondary: [],
      stabilizers: ["transversus-abdominis"],
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
    sequenceNotes: "Manual-source exercise from the seated seated spinal work block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-spine-stretch-forward-teaching",
      title: "Spine Stretch Forward",
      description: "Generated muscle-emphasis teaching diagram for Spine Stretch Forward.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-spine-stretch-forward.png",
      imageAlt: "Spine Stretch Forward teaching diagram with highlighted muscles"
    }
  }
};
