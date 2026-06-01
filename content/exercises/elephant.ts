import { ExerciseRecord } from "@/lib/exercise-types";

export const elephant: ExerciseRecord = {
  display: {
    id: "ex-elephant",
    slug: "elephant",
    name: "Elephant",
    summary:
      "Standing reformer inversion pattern integrating trunk support, shoulder loading, and posterior chain control.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Prototype sample content",
    section: "Reformer / Prototype",
    originalName: "Elephant",
    sourceStatus: "prototype-only"
  },
  classification: {
    equipment: ["Reformer"],
    level: "Intermediate",
    movementCategory: "Planking",
    bodyPosition: "Standing Integration",
    movementCompass: ["Forward Flexion", "Core Stability", "Integration"],
    programmingWheelSlot: "Standing",
    laterality: "Bilateral",
    supportType: ["Closed Chain", "Shoulder Support", "Loaded Apparatus"]
  },
  anatomy: {
    primaryMusclesText: "Abdominals, hamstrings, serratus anterior",
    secondaryMusclesText: "Lats, gluteals",
    stabilizersText: "Wrist stabilizers, triceps, shoulder stabilizers",
    primaryMuscleIds: ["abdominals", "hamstrings"],
    secondaryMuscleIds: ["lats", "glutes"],
    stabilizerMuscleIds: ["triceps", "shoulder-stabilizers"],
    regions: ["Deep Core", "Posterior Chain", "Shoulder Stabilizers"],
    bodyScanFocus: ["Rib cage", "Pelvis", "Shoulder girdle", "Wrist/hand support"],
    overlay: {
      primary: ["abdominals", "hamstrings"],
      secondary: ["lats", "glutes"],
      stabilizers: ["triceps", "shoulder-stabilizers"],
      preferredView: "both"
    },
    whereYouShouldFeelIt:
      "Strong abdominal lift, hamstring length, and supported work through the shoulder girdle.",
    whereYouShouldNotFeelIt:
      "Dumping into the wrists, pinching in the shoulders, or low-back compression."
  },
  teaching: {
    setup:
      "Stand on the reformer with heels to the shoulder blocks and hands on the footbar.",
    execution:
      "Round the spine deeply and press the carriage out from the hip crease. Pull the carriage home by lifting the abdominals and drawing the femurs back without changing the trunk shape.",
    breathPattern: "Inhale to prepare. Exhale to draw the carriage home from the center.",
    cues: [
      "Lift the carriage from your center.",
      "Hover the ribs away from the thighs.",
      "Push the bar away to keep the shoulders supported."
    ],
    commonMistakes: [
      "Shifting too much weight into the wrists.",
      "Losing lumbar flexion as the carriage moves.",
      "Driving only from the knees."
    ],
    modifications: [
      "Decrease carriage range.",
      "Raise the hands if hamstring tension pulls the spine out of shape."
    ],
    progressions: [
      "Move into flat-back Elephant.",
      "Explore one-leg variations with supervision."
    ],
    executionSteps: [
      "Stand on the reformer with heels to the shoulder blocks and hands on the footbar.",
      "Round the spine deeply and press the carriage out from the hip crease.",
      "Pull the carriage home by lifting the abdominals and drawing the femurs back.",
      "Repeat without changing the trunk shape."
    ]
  },
  programming: {
    focus: "Loaded shoulder support coordinated with deep center control.",
    useCase: "Mid-to-late reformer work after footwork and spinal warm-up.",
    sequenceNotes:
      "Prototype equipment content retained to test non-mat equipment in the source-aligned model.",
    pairsWellWith: ["Round Back Rowing", "Long Stretch Prep", "Short Spine"]
  },
  safety: {
    entryGuidance:
      "Keep the carriage range smaller until the shoulders and trunk stay equally supported.",
    precautions: [
      "Avoid dumping into the wrists.",
      "Use supervision if shoulder loading is new."
    ]
  },
  clientContent: {
    setup:
      "Stand on the reformer with the hands on the bar and the spine rounded into a supported shape.",
    simpleSteps: [
      "Press the carriage away a small amount.",
      "Pull it back in using the center of the body.",
      "Keep the shoulders broad and the heels grounded.",
      "Work in a small, controlled range."
    ],
    helpfulAdjustments: [
      "Shorten the range if the shoulders or wrists feel overloaded.",
      "Raise the hands if the hamstrings pull the back shape apart."
    ],
    safetyNotes: [
      "This works best with supervision if you are new to reformer loading.",
      "Stop if the wrists, shoulders, or low back start taking the strain."
    ]
  },
  media: {
    images: [
      { id: "elephant-1", label: "Round setup", alt: "Elephant round back setup", kind: "placeholder" },
      { id: "elephant-2", label: "Carriage out", alt: "Elephant pushing carriage", kind: "placeholder" },
      { id: "elephant-3", label: "Draw in", alt: "Elephant return phase", kind: "placeholder" }
    ]
  }
};
