import { ExerciseRecord } from "@/lib/exercise-types";

export const manualBridge: ExerciseRecord = {
  display: {
    id: "manual-bridge",
    slug: "manual-bridge",
    name: "Bridge",
    summary: "Manual-source supine exercise from the bridging category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 27,
    section: "Supine",
    originalName: "Bridge",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Bridging",
    bodyPosition: "Supine",
    movementCompass: ["Extension", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Bilateral",
    supportType: ["Closed Chain"]
  },
  anatomy: {
    primaryMusclesText: "Gluteals, hamstrings, posterior chain",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["glutes", "hamstrings", "spinal-erectors"],
    stabilizerMuscleIds: ["transversus-abdominis", "multifidus"],
    regions: ["Deep Core", "Posterior Chain"],
    bodyScanFocus: ["Feet and ankles", "Knees", "Pelvis", "Rib cage"],
    overlay: {
      primary: ["glutes", "hamstrings", "spinal-erectors"],
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
    sequenceNotes: "Manual-source exercise from the supine bridging block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-bridge-teaching",
      title: "Bridge",
      description: "Generated muscle-emphasis teaching diagram for Bridge.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-bridge.png",
      imageAlt: "Bridge teaching diagram with highlighted muscles"
    }
  }
};
