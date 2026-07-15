import { ExerciseRecord } from "@/lib/exercise-types";

export const manualChestLiftWithReach: ExerciseRecord = {
  display: {
    id: "manual-chest-lift-with-reach",
    slug: "manual-chest-lift-with-reach",
    name: "Chest Lift with Reach",
    summary: "Manual-source supine exercise from the abdominals / forward flexion category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 15,
    section: "Supine",
    originalName: "Chest Lift with Reach",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Abdominals / Forward Flexion",
    bodyPosition: "Supine",
    movementCompass: ["Forward Flexion", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "abdominals", "obliques"],
    stabilizerMuscleIds: ["multifidus"],
    regions: ["Deep Core", "Anterior Core", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Head and neck"],
    overlay: {
      primary: ["transversus-abdominis", "abdominals", "obliques"],
      secondary: [],
      stabilizers: ["multifidus"],
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
      id: "manual-chest-lift-with-reach-teaching",
      title: "Chest Lift with Reach",
      description: "Generated muscle-emphasis teaching diagram for Chest Lift with Reach.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-chest-lift-with-reach.png",
      imageAlt: "Chest Lift with Reach teaching diagram with highlighted muscles"
    }
  }
};
