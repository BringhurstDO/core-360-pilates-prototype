import { ExerciseRecord } from "@/lib/exercise-types";

export const manualProneArmLift: ExerciseRecord = {
  display: {
    id: "manual-prone-arm-lift",
    slug: "manual-prone-arm-lift",
    name: "Prone Arm Lift",
    summary: "Manual-source prone / extension exercise from the spinal extension category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 68,
    section: "Prone / Extension",
    originalName: "Prone Arm Lift",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Spinal Extension",
    bodyPosition: "Prone / Extension",
    movementCompass: ["Extension", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Prone",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["multifidus", "glutes", "spinal-erectors", "shoulder-stabilizers"],
    stabilizerMuscleIds: ["transversus-abdominis"],
    regions: ["Deep Core", "Posterior Chain", "Shoulder Stabilizers"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle"],
    overlay: {
      primary: ["multifidus", "glutes", "spinal-erectors", "shoulder-stabilizers"],
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
    sequenceNotes: "Manual-source exercise from the prone / extension spinal extension block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-prone-arm-lift-teaching",
      title: "Prone Arm Lift",
      description: "Generated muscle-emphasis teaching diagram for Prone Arm Lift.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-prone-arm-lift.png",
      imageAlt: "Prone Arm Lift teaching diagram with highlighted muscles"
    }
  }
};
