import { ExerciseRecord } from "@/lib/exercise-types";

export const swanPrep: ExerciseRecord = {
  display: {
    id: "ex-swan-prep",
    slug: "swan-prep",
    name: "Swan Prep",
    summary:
      "Introductory extension work for thoracic opening, scapular support, and spinal length.",
    audienceMode: "both"
  },
  classification: {
    apparatus: "Mat",
    level: "Beginner",
    bodyPosition: "Prone",
    movementCategory: "Spinal Extension",
    muscleGroups: ["spinal-erectors", "glutes", "triceps"]
  },
  anatomy: {
    primaryMuscles: ["Thoracic extensors", "Spinal erectors"],
    secondaryMuscles: ["Gluteals", "Triceps"],
    stabilizers: ["Lower trapezius", "Abdominals"],
    overlay: {
      primary: ["spinal-erectors"],
      secondary: ["glutes", "triceps"],
      stabilizers: ["abdominals", "shoulder-stabilizers"],
      preferredView: "back"
    },
    whereYouShouldFeelIt:
      "Work through the mid-back and back line with openness across the chest.",
    whereYouShouldNotFeelIt:
      "Pinching in the low back, pressure at the neck base, or shoulder joint strain."
  },
  instructorEducation: {
    executionSteps: [
      "Set up prone with the pubic bone grounded and the hands slightly forward of the shoulders.",
      "Lengthen the legs and lightly draw the low abdominals away from the mat.",
      "Inhale to float the head and chest by reaching the sternum forward and up.",
      "Exhale to lower without collapsing the neck or shoulders."
    ],
    teachingCues: [
      "Slide the heart forward before lifting it.",
      "Let the upper back initiate the extension.",
      "Keep the neck long as the front body opens."
    ],
    commonMistakes: [
      "Jamming into lumbar extension.",
      "Hiking the shoulders toward the ears.",
      "Throwing the chin forward for extra height."
    ],
    progressions: [
      "Move into fuller Swan with more arm support.",
      "Add rocking prep once extension control is consistent."
    ],
    programming: {
      focus: "Safe extension mechanics and upper-back awareness.",
      useCase: "After flexion work to restore extension and chest opening.",
      pairsWellWith: ["Breast Stroke Prep", "Single Leg Kick", "Pulling Straps"]
    }
  },
  clientSafety: {
    entryGuidance:
      "Keep the lift small and long if the low back starts to compress.",
    regressions: [
      "Hands stacked under the forehead for mini thoracic lifts.",
      "Reduce the range and focus on reaching long."
    ],
    precautions: [
      "Avoid forcing height.",
      "Pause if the shoulders or neck begin taking over."
    ],
    clientContent: {
      setup:
        "Lie on your stomach with the hands lightly under or just in front of the shoulders.",
      simpleSteps: [
        "Lengthen the legs back and keep the belly lightly supported.",
        "Lift the head and chest a little as the breastbone reaches forward.",
        "Lower back down smoothly.",
        "Think of length more than height."
      ],
      helpfulAdjustments: [
        "Keep the lift very small if the low back feels crowded.",
        "Rest the forehead down between repetitions if the neck gets tired."
      ],
      safetyNotes: [
        "Do not force a big backbend.",
        "Keep the shoulders away from the ears."
      ]
    }
  },
  media: {
    images: [
      { id: "swan-1", label: "Prone setup", alt: "Swan Prep starting position", kind: "placeholder" },
      { id: "swan-2", label: "Thoracic lift", alt: "Swan Prep lifted chest", kind: "placeholder" },
      { id: "swan-3", label: "Lengthen down", alt: "Swan Prep return phase", kind: "placeholder" }
    ]
  },
  futureExpansion: {
    flowTags: ["extension-series"],
    anatomyLayerVersion: "basic"
  }
};
