import { ExerciseRecord } from "@/lib/exercise-types";

export const manualChestLiftWithRotation: ExerciseRecord = {
  display: {
    id: "manual-chest-lift-with-rotation",
    slug: "manual-chest-lift-with-rotation",
    name: "Chest Lift with Rotation",
    summary: "Manual-source supine exercise from the twisting / rotation category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 14,
    section: "Supine",
    originalName: "Chest Lift with Rotation",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Twisting / Rotation",
    bodyPosition: "Supine",
    movementCompass: ["Rotation", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "multifidus", "obliques"],
    stabilizerMuscleIds: [],
    regions: ["Deep Core", "Anterior Core", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Head and neck"],
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
    sequenceNotes: "Manual-source exercise from the supine twisting / rotation block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-chest-lift-with-rotation-teaching",
      title: "Chest Lift with Rotation",
      description: "Generated muscle-emphasis teaching diagram for Chest Lift with Rotation.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-chest-lift-with-rotation.png",
      imageAlt: "Chest Lift with Rotation teaching diagram with highlighted muscles"
    }
  }
};
