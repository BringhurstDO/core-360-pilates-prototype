import { ExerciseRecord } from "@/lib/exercise-types";

export const manualKneelingArmReach: ExerciseRecord = {
  display: {
    id: "manual-kneeling-arm-reach",
    slug: "manual-kneeling-arm-reach",
    name: "Kneeling Arm Reach",
    summary: "Manual-source quadruped / kneeling exercise from the quadruped / kneeling category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 55,
    section: "Quadruped / Kneeling",
    originalName: "Kneeling Arm Reach",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Quadruped / Kneeling",
    bodyPosition: "Quadruped / Kneeling",
    movementCompass: ["Core Stability", "Rib-Pelvis Alignment"],
    programmingWheelSlot: "Quadruped / Kneeling",
    laterality: "Bilateral",
    supportType: ["Closed Chain", "Weight Bearing"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "multifidus"],
    stabilizerMuscleIds: [],
    regions: ["Deep Core"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle"],
    overlay: {
      primary: ["transversus-abdominis", "multifidus"],
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
    sequenceNotes: "Manual-source exercise from the quadruped / kneeling quadruped / kneeling block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-kneeling-arm-reach-teaching",
      title: "Kneeling Arm Reach",
      description: "Generated muscle-emphasis teaching diagram for Kneeling Arm Reach.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-kneeling-arm-reach.png",
      imageAlt: "Kneeling Arm Reach teaching diagram with highlighted muscles"
    }
  }
};
