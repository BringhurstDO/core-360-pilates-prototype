import { ExerciseRecord } from "@/lib/exercise-types";

export const manualSingleLegKick: ExerciseRecord = {
  display: {
    id: "manual-single-leg-kick",
    slug: "manual-single-leg-kick",
    name: "Single Leg Kick",
    summary: "Manual-source prone / extension exercise from the spinal extension category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 63,
    section: "Prone / Extension",
    originalName: "Single Leg Kick",
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
    laterality: "Unilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["multifidus", "glutes", "hamstrings", "spinal-erectors"],
    stabilizerMuscleIds: ["transversus-abdominis"],
    regions: ["Deep Core", "Posterior Chain"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle"],
    overlay: {
      primary: ["multifidus", "glutes", "hamstrings", "spinal-erectors"],
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
      id: "manual-single-leg-kick-teaching",
      title: "Single Leg Kick",
      description: "Generated muscle-emphasis teaching diagram for Single Leg Kick.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-single-leg-kick.png",
      imageAlt: "Single Leg Kick teaching diagram with highlighted muscles"
    }
  }
};
