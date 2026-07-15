import { ExerciseRecord } from "@/lib/exercise-types";

export const manualSingleStraightLegStretch: ExerciseRecord = {
  display: {
    id: "manual-single-straight-leg-stretch",
    slug: "manual-single-straight-leg-stretch",
    name: "Single Straight Leg Stretch",
    summary: "Manual-source supine exercise from the abdominals / forward flexion category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 21,
    section: "Supine",
    originalName: "Single Straight Leg Stretch",
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
    laterality: "Unilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "abdominals", "hip-flexors"],
    stabilizerMuscleIds: ["multifidus"],
    regions: ["Deep Core", "Anterior Core"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Head and neck"],
    overlay: {
      primary: ["transversus-abdominis", "abdominals", "hip-flexors"],
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
      id: "manual-single-straight-leg-stretch-teaching",
      title: "Single Straight Leg Stretch",
      description: "Generated muscle-emphasis teaching diagram for Single Straight Leg Stretch.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-single-straight-leg-stretch.png",
      imageAlt: "Single Straight Leg Stretch teaching diagram with highlighted muscles"
    }
  }
};
