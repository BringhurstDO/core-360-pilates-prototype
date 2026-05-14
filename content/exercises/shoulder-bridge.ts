import { ExerciseRecord } from "@/lib/exercise-types";

export const shoulderBridge: ExerciseRecord = {
  display: {
    id: "ex-bridge",
    slug: "shoulder-bridge",
    name: "Shoulder Bridge",
    summary:
      "Posterior-chain organization for hip extension, pelvic control, and trunk stability.",
    audienceMode: "both"
  },
  classification: {
    apparatus: "Mat",
    level: "Beginner",
    bodyPosition: "Supine",
    movementCategory: "Bridging",
    muscleGroups: ["glutes", "hamstrings", "abdominals"]
  },
  anatomy: {
    primaryMuscles: ["Gluteus maximus", "Hamstrings"],
    secondaryMuscles: ["Adductors", "Spinal extensors"],
    stabilizers: ["Obliques", "Scapular stabilizers"],
    overlay: {
      primary: ["glutes", "hamstrings"],
      secondary: ["adductors", "spinal-erectors"],
      stabilizers: ["abdominals", "obliques", "shoulder-stabilizers"],
      preferredView: "both"
    },
    whereYouShouldFeelIt:
      "Strong glute and hamstring work with steady abdominal support under the ribs.",
    whereYouShouldNotFeelIt:
      "Compression in the low back, knee discomfort, or hamstring cramping taking over."
  },
  instructorEducation: {
    executionSteps: [
      "Lie with feet parallel and arms long by the sides.",
      "Exhale to curl the pelvis and lift into a bridge.",
      "Pause at the top with even weight through both feet and shoulders.",
      "Roll back down from the upper spine through the sacrum."
    ],
    teachingCues: [
      "Press the mat away through the heels.",
      "Reach the knees forward as the ribs stay soft.",
      "Open the back body without flaring the front ribs."
    ],
    commonMistakes: [
      "Driving the lift from the lumbar spine.",
      "Letting the knees drift wide.",
      "Clenching the glutes so hard that articulation disappears."
    ],
    progressions: [
      "Add marching in bridge.",
      "Transition into single-leg bridge variations."
    ],
    programming: {
      focus: "Hip extension with pelvic control and posterior chain recruitment.",
      useCase: "Before standing or unilateral work that needs stronger back-line support.",
      pairsWellWith: ["Footwork", "Side Kicks", "Leg Pull Prep"]
    }
  },
  clientSafety: {
    entryGuidance:
      "Lift only as high as you can keep the ribs quiet and the knees tracking forward.",
    regressions: [
      "Smaller pelvic curl.",
      "Place a soft ball between the knees for midline feedback."
    ],
    precautions: [
      "Shorten the range if the hamstrings cramp repeatedly.",
      "Avoid pushing into pain at the knees."
    ],
    clientContent: {
      setup:
        "Lie on your back with the knees bent and feet parallel, about hip-width apart.",
      simpleSteps: [
        "Press into the feet and gently lift the hips.",
        "Pause when the front of the body feels open but steady.",
        "Lower the spine down with control.",
        "Repeat without rushing."
      ],
      helpfulAdjustments: [
        "Lift less high if the hamstrings cramp.",
        "Place a small prop between the knees if the legs feel wobbly."
      ],
      safetyNotes: [
        "Keep the knees pointing forward.",
        "Stop if the low back feels compressed."
      ]
    }
  },
  media: {
    images: [
      { id: "bridge-1", label: "Neutral setup", alt: "Shoulder Bridge setup", kind: "placeholder" },
      { id: "bridge-2", label: "Lift", alt: "Shoulder Bridge lifted pelvis", kind: "placeholder" },
      { id: "bridge-3", label: "Articulate down", alt: "Shoulder Bridge roll down", kind: "placeholder" }
    ]
  },
  futureExpansion: {
    flowTags: ["bridge-series", "pelvic-control"],
    anatomyLayerVersion: "basic"
  }
};
