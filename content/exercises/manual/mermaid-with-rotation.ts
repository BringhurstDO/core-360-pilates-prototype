import { ExerciseRecord } from "@/lib/exercise-types";

export const manualMermaidWithRotation: ExerciseRecord = {
  display: {
    id: "manual-mermaid-with-rotation",
    slug: "manual-mermaid-with-rotation",
    name: "Mermaid with Rotation",
    summary: "Manual-source side-facing seated exercise from the lateral flexion category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 45,
    section: "Side-Facing Seated",
    originalName: "Mermaid with Rotation",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Lateral Flexion",
    bodyPosition: "Side-Facing Seated",
    movementCompass: ["Lateral Flexion", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Side-Lying / Side-Facing",
    laterality: "Side 1",
    supportType: ["Closed Chain", "Shoulder Support"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["multifidus", "obliques"],
    stabilizerMuscleIds: ["transversus-abdominis"],
    regions: ["Deep Core", "Anterior Core", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle"],
    overlay: {
      primary: ["multifidus", "obliques"],
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
    sequenceNotes: "Manual-source exercise from the side-facing seated lateral flexion block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-mermaid-with-rotation-teaching",
      title: "Mermaid with Rotation",
      description: "Generated muscle-emphasis teaching diagram for Mermaid with Rotation.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-mermaid-with-rotation.png",
      imageAlt: "Mermaid with Rotation teaching diagram with highlighted muscles"
    }
  }
};
