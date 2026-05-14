import { ExerciseRecord } from "@/lib/exercise-types";

export const mermaid: ExerciseRecord = {
  display: {
    id: "ex-mermaid",
    slug: "mermaid",
    name: "Mermaid",
    summary:
      "Lateral flexion work that opens the side body while organizing the pelvis and support shoulder.",
    audienceMode: "both"
  },
  classification: {
    apparatus: "Chair",
    level: "Beginner",
    bodyPosition: "Seated",
    movementCategory: "Side-Lying",
    muscleGroups: ["obliques", "lats", "shoulder-stabilizers"]
  },
  anatomy: {
    primaryMuscles: ["Obliques", "Latissimus dorsi"],
    secondaryMuscles: ["Intercostals", "Deltoids"],
    stabilizers: ["Gluteals", "Scapular stabilizers"],
    overlay: {
      primary: ["obliques", "lats"],
      secondary: ["deltoids"],
      stabilizers: ["glutes", "shoulder-stabilizers"],
      preferredView: "both"
    },
    whereYouShouldFeelIt:
      "Length and effort through the side waist, underarm line, and support shoulder.",
    whereYouShouldNotFeelIt:
      "Low-back pinching, compression at the support wrist, or neck gripping."
  },
  instructorEducation: {
    executionSteps: [
      "Sit with one shin folded and the opposite hand on the chair pedal or floor support.",
      "Ground the sitting bones and reach the free arm overhead.",
      "Arc into side bend while keeping both sides of the waist long.",
      "Return upright with control from the side body."
    ],
    teachingCues: [
      "Lift up before you arc sideways.",
      "Keep the lower ribs buoyant.",
      "Anchor the pelvis as the spine bends."
    ],
    commonMistakes: [
      "Dumping into the lower side waist.",
      "Shrugging the support shoulder.",
      "Twisting instead of side bending."
    ],
    progressions: [
      "Add rotation through the side bend shape.",
      "Take the pattern onto the reformer."
    ],
    programming: {
      focus: "Side-body mobility with organized shoulder and pelvic support.",
      useCase: "A useful transition between stronger flexion and extension blocks.",
      pairsWellWith: ["Side Kick Series", "Saw", "Standing Side Splits"]
    }
  },
  clientSafety: {
    entryGuidance:
      "Stay taller with a smaller arc if the support side starts collapsing.",
    regressions: [
      "Sit on a cushion for better pelvic organization.",
      "Reduce the side bend depth."
    ],
    precautions: [
      "Do not force range through the low back.",
      "Back off if the support wrist becomes loaded."
    ],
    clientContent: {
      setup:
        "Sit comfortably with the legs folded and one hand resting on a support surface.",
      simpleSteps: [
        "Reach the free arm up.",
        "Bend gently to the side while staying long through both waists.",
        "Return upright with control.",
        "Repeat without collapsing into the support side."
      ],
      helpfulAdjustments: [
        "Sit on a cushion if the hips feel uneven.",
        "Keep the side bend smaller if the low back starts to pinch."
      ],
      safetyNotes: [
        "Let the movement stay smooth and spacious.",
        "Do not force the range through the ribs or lower back."
      ]
    }
  },
  media: {
    images: [
      { id: "mermaid-1", label: "Seat setup", alt: "Mermaid seated setup", kind: "placeholder" },
      { id: "mermaid-2", label: "Side bend", alt: "Mermaid lateral reach", kind: "placeholder" },
      { id: "mermaid-3", label: "Return", alt: "Mermaid return to upright", kind: "placeholder" }
    ]
  },
  futureExpansion: {
    flowTags: ["lateral-flexion", "mobility"],
    anatomyLayerVersion: "basic"
  }
};
