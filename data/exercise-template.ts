import { ExerciseRecord } from "@/lib/exercise-types";

export const exerciseTemplate: ExerciseRecord = {
  display: {
    id: "ex-your-exercise-id",
    slug: "your-exercise-slug",
    name: "Exercise Name",
    summary: "One concise sentence describing the exercise and why it matters.",
    audienceMode: "both"
  },
  classification: {
    apparatus: "Mat",
    level: "Beginner",
    bodyPosition: "Supine",
    movementCategory: "Breathing",
    muscleGroups: ["abdominals"]
  },
  anatomy: {
    primaryMuscles: ["Primary muscle 1"],
    secondaryMuscles: ["Secondary muscle 1"],
    stabilizers: ["Stabilizer 1"],
    overlay: {
      primary: ["abdominals"],
      secondary: [],
      stabilizers: [],
      preferredView: "both"
    },
    whereYouShouldFeelIt: "Describe the desired effort or sensation.",
    whereYouShouldNotFeelIt: "Describe red-flag sensations or compensations."
  },
  instructorEducation: {
    executionSteps: [
      "Step 1",
      "Step 2",
      "Step 3"
    ],
    teachingCues: [
      "Cue 1",
      "Cue 2"
    ],
    commonMistakes: [
      "Mistake 1",
      "Mistake 2"
    ],
    progressions: [
      "Progression 1"
    ],
    programming: {
      focus: "What this exercise is training.",
      useCase: "Where it fits in a session or series.",
      pairsWellWith: ["Exercise A", "Exercise B"]
    }
  },
  clientSafety: {
    entryGuidance: "Simple client-facing setup or self-check guidance.",
    regressions: [
      "Regression 1"
    ],
    precautions: [
      "Precaution 1"
    ],
    clientContent: {
      setup: "Simple setup description for a client.",
      simpleSteps: [
        "Simple step 1",
        "Simple step 2"
      ],
      helpfulAdjustments: [
        "Helpful adjustment 1"
      ],
      safetyNotes: [
        "Safety note 1"
      ]
    }
  },
  media: {
    images: [
      {
        id: "exercise-1",
        label: "Setup",
        alt: "Describe the setup image",
        kind: "placeholder"
      },
      {
        id: "exercise-2",
        label: "Mid phase",
        alt: "Describe the middle phase image",
        kind: "placeholder"
      },
      {
        id: "exercise-3",
        label: "Finish",
        alt: "Describe the finish image",
        kind: "placeholder"
      }
    ],
    teachingDiagram: {
      id: "your-exercise-teaching-plate",
      title: "Teaching Diagram",
      description:
        "Optional Stacey-style teaching plate notes. Use this for pose, apparatus, arrows, and annotation labels that should appear with the exercise.",
      poseNotes: [
        "Body position or apparatus setup note",
        "Movement direction or spring/load note"
      ],
      annotationLabels: [
        "Primary anatomy label",
        "Cue or compensation label"
      ],
      kind: "placeholder"
    }
  },
  futureExpansion: {
    instructorNotes: "Optional private note for internal teaching context.",
    clientSummary: "Optional simplified client-facing summary.",
    videoId: "optional-video-id",
    subscriptionTier: "free",
    flowTags: ["tag-one"],
    anatomyLayerVersion: "basic"
  }
};
