import { ExerciseRecord } from "@/lib/exercise-types";

export const manualSeatedSideBend: ExerciseRecord = {
  display: {
    id: "manual-seated-side-bend",
    slug: "manual-seated-side-bend",
    name: "Seated Side Bend",
    summary: "Manual-source seated exercise from the seated spinal work category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 80,
    section: "Seated",
    originalName: "Seated Side Bend",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Seated Spinal Work",
    bodyPosition: "Seated",
    movementCompass: ["Core Stability", "Rib-Pelvis Alignment", "Lateral Flexion"],
    programmingWheelSlot: "Seated",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "multifidus", "abdominals", "obliques"],
    stabilizerMuscleIds: [],
    regions: ["Deep Core", "Anterior Core", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage"],
    overlay: {
      primary: ["transversus-abdominis", "multifidus", "abdominals", "obliques"],
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
    sequenceNotes: "Manual-source exercise from the seated seated spinal work block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-seated-side-bend-teaching",
      title: "Seated Side Bend",
      description: "Generated muscle-emphasis teaching diagram for Seated Side Bend.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-seated-side-bend.png",
      imageAlt: "Seated Side Bend teaching diagram with highlighted muscles"
    }
  }
};
