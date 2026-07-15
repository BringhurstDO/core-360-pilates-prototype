import { ExerciseRecord } from "@/lib/exercise-types";

export const manualBridgeWithMarch: ExerciseRecord = {
  display: {
    id: "manual-bridge-with-march",
    slug: "manual-bridge-with-march",
    name: "Bridge with March",
    summary: "Manual-source supine exercise from the bridging category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 28,
    section: "Supine",
    originalName: "Bridge with March",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Bridging",
    bodyPosition: "Supine",
    movementCompass: ["Extension", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Alternating",
    supportType: ["Closed Chain"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "multifidus", "glutes", "hamstrings"],
    stabilizerMuscleIds: [],
    regions: ["Deep Core", "Posterior Chain"],
    bodyScanFocus: ["Feet and ankles", "Knees", "Pelvis", "Rib cage"],
    overlay: {
      primary: ["transversus-abdominis", "multifidus", "glutes", "hamstrings"],
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
    sequenceNotes: "Manual-source exercise from the supine bridging block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-bridge-with-march-teaching",
      title: "Bridge with March",
      description: "Generated muscle-emphasis teaching diagram for Bridge with March.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-bridge-with-march.png",
      imageAlt: "Bridge with March teaching diagram with highlighted muscles"
    }
  }
};
