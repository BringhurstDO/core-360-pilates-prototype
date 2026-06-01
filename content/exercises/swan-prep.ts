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
  source: {
    manual: "Core 360 Mat Manual",
    page: 65,
    section: "Prone / Extension",
    originalName: "Swan Prep",
    sourceStatus: "manual-adapted"
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Spinal Extension",
    bodyPosition: "Prone / Extension",
    movementCompass: ["Extension", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Prone",
    laterality: "Bilateral",
    supportType: ["Weight Bearing", "Shoulder Support"]
  },
  anatomy: {
    primaryMusclesText: "Thoracic extensors, spinal erectors",
    secondaryMusclesText: "Gluteals, triceps",
    stabilizersText: "Lower trapezius, abdominals",
    primaryMuscleIds: ["spinal-erectors"],
    secondaryMuscleIds: ["glutes", "triceps"],
    stabilizerMuscleIds: ["abdominals", "shoulder-stabilizers"],
    regions: ["Posterior Chain", "Shoulder Stabilizers", "Deep Core"],
    bodyScanFocus: ["Rib cage", "Head and neck", "Shoulder girdle"],
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
  teaching: {
    setup:
      "Set up prone with the pubic bone grounded and the hands slightly forward of the shoulders.",
    execution:
      "Lengthen the legs and lightly draw the low abdominals away from the mat. Inhale to float the head and chest by reaching the sternum forward and up, then exhale to lower without collapsing the neck or shoulders.",
    breathPattern: "Inhale to lengthen and lift. Exhale to lower with control.",
    cues: [
      "Slide the heart forward before lifting it.",
      "Let the upper back initiate the extension.",
      "Keep the neck long as the front body opens."
    ],
    commonMistakes: [
      "Jamming into lumbar extension.",
      "Hiking the shoulders toward the ears.",
      "Throwing the chin forward for extra height."
    ],
    modifications: [
      "Stack the hands under the forehead for mini thoracic lifts.",
      "Reduce the range and focus on reaching long."
    ],
    progressions: [
      "Move into fuller Swan with more arm support.",
      "Add rocking prep once extension control is consistent."
    ],
    executionSteps: [
      "Set up prone with the pubic bone grounded and the hands slightly forward of the shoulders.",
      "Lengthen the legs and lightly draw the low abdominals away from the mat.",
      "Inhale to float the head and chest by reaching the sternum forward and up.",
      "Exhale to lower without collapsing the neck or shoulders."
    ]
  },
  programming: {
    focus: "Safe extension mechanics and upper-back awareness.",
    useCase: "After flexion work to restore extension and chest opening.",
    sequenceNotes:
      "Fits the prone extension slot after quadruped/kneeling work in the Core 360 wheel.",
    templateFits: ["Beginner class emphasis", "Intermediate flow emphasis"],
    pairsWellWith: ["Breast Stroke Prep", "Single Leg Kick", "Pulling Straps"]
  },
  safety: {
    entryGuidance:
      "Keep the lift small and long if the low back starts to compress.",
    precautions: [
      "Avoid forcing height.",
      "Pause if the shoulders or neck begin taking over."
    ]
  },
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
  },
  media: {
    images: [
      { id: "swan-1", label: "Prone setup", alt: "Swan Prep starting position", kind: "placeholder" },
      { id: "swan-2", label: "Thoracic lift", alt: "Swan Prep lifted chest", kind: "placeholder" },
      { id: "swan-3", label: "Lengthen down", alt: "Swan Prep return phase", kind: "placeholder" }
    ]
  }
};
