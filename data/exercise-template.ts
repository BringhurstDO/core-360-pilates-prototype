import { ExerciseRecord } from "@/lib/exercise-types";

export const exerciseTemplate: ExerciseRecord = {
  display: {
    id: "ex-your-exercise-id",
    slug: "your-exercise-slug",
    name: "Exercise Name",
    summary: "One concise sentence describing the exercise and why it matters.",
    audienceMode: "both"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 10,
    section: "Supine",
    originalName: "Exercise Name",
    sourceStatus: "needs-stacey-review"
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Breathing / Pelvic Tilts",
    bodyPosition: "Supine",
    movementCompass: ["Breath Mechanics", "Rib-Pelvis Alignment"],
    programmingWheelSlot: "Supine",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Primary muscle text from the source table.",
    secondaryMusclesText: "Optional secondary muscle text.",
    stabilizersText: "Stabilizer text from the source table.",
    primaryMuscleIds: ["abdominals"],
    secondaryMuscleIds: [],
    stabilizerMuscleIds: [],
    regions: ["Deep Core"],
    bodyScanFocus: ["Pelvis", "Rib cage"],
    overlay: {
      primary: ["abdominals"],
      secondary: [],
      stabilizers: [],
      preferredView: "both"
    },
    whereYouShouldFeelIt: "Optional client-facing sensation guidance.",
    whereYouShouldNotFeelIt: "Optional red-flag sensations or compensations."
  },
  teaching: {
    setup: "Setup text from the manual.",
    execution: "Execution text from the manual.",
    breathPattern: "Breath pattern text from the manual.",
    cues: ["Cue 1", "Cue 2"],
    commonMistakes: ["Mistake 1", "Mistake 2"],
    modifications: ["Modification 1"],
    progressions: ["Progression 1"],
    executionSteps: ["Optional step 1", "Optional step 2"]
  },
  programming: {
    focus: "What this exercise is training.",
    useCase: "Where it fits in a session or series.",
    sequenceNotes: "How this supports the Core 360 programming wheel.",
    templateFits: ["Beginner class emphasis"],
    pairsWellWith: ["Exercise A", "Exercise B"]
  },
  safety: {
    entryGuidance: "Simple client-facing setup or self-check guidance.",
    precautions: ["Precaution 1"]
  },
  clientContent: {
    setup: "Optional simplified client setup.",
    simpleSteps: ["Simple step 1", "Simple step 2"],
    helpfulAdjustments: ["Helpful adjustment 1"],
    safetyNotes: ["Safety note 1"]
  },
  media: {
    images: [
      {
        id: "exercise-1",
        label: "Setup",
        alt: "Describe the setup image",
        kind: "placeholder"
      }
    ],
    teachingDiagram: {
      id: "your-exercise-teaching-plate",
      title: "Teaching Diagram",
      description:
        "Optional Stacey-style teaching plate notes. Use this for pose, equipment, arrows, and annotation labels that should appear with the exercise.",
      poseNotes: [
        "Body position or equipment setup note",
        "Movement direction or load note"
      ],
      annotationLabels: [
        "Primary anatomy label",
        "Cue or compensation label"
      ],
      kind: "placeholder"
    }
  }
};
