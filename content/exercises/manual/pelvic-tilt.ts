import { ExerciseRecord } from "@/lib/exercise-types";

export const manualPelvicTilt: ExerciseRecord = {
  display: {
    id: "manual-pelvic-tilt",
    slug: "manual-pelvic-tilt",
    name: "Pelvic Tilt",
    summary: "Manual-source supine exercise from the breathing / pelvic tilts category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 11,
    section: "Supine",
    originalName: "Pelvic Tilt",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner",
    movementCategory: "Breathing / Pelvic Tilts",
    bodyPosition: "Supine",
    movementCompass: ["Breath Mechanics", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Transversus abdominis, internal and external obliques, multifidus",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "multifidus", "obliques"],
    stabilizerMuscleIds: [],
    regions: ["Deep Core", "Anterior Core", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage"],
    overlay: {
      primary: ["transversus-abdominis", "multifidus", "obliques"],
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
,
  media: {
    teachingDiagram: {
      id: "manual-pelvic-tilt-teaching",
      title: "Pelvic Tilt",
      description: "Generated muscle-emphasis teaching diagram for Pelvic Tilt.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-pelvic-tilt.png",
      imageAlt: "Pelvic Tilt teaching diagram with highlighted muscles"
    }
  }
};
