import { ExerciseRecord } from "@/lib/exercise-types";

export const hundred: ExerciseRecord = {
  display: {
    id: "ex-hundred",
    slug: "hundred",
    name: "Hundred",
    summary:
      "Foundational trunk endurance work for breath rhythm, abdominal support, and whole-body organization.",
    audienceMode: "both"
  },
  classification: {
    apparatus: "Mat",
    level: "Beginner",
    bodyPosition: "Supine",
    movementCategory: "Breathing",
    muscleGroups: ["abdominals", "hip-flexors", "shoulder-stabilizers"]
  },
  anatomy: {
    primaryMuscles: ["Rectus abdominis", "Transversus abdominis", "Hip flexors"],
    secondaryMuscles: ["Serratus anterior", "Quadriceps"],
    stabilizers: ["Scapular stabilizers", "Deep neck flexors"],
    overlay: {
      primary: ["abdominals", "hip-flexors"],
      secondary: ["quadriceps"],
      stabilizers: ["shoulder-stabilizers"],
      preferredView: "front"
    },
    whereYouShouldFeelIt:
      "Deep abdominal support with warmth through the front body and steady arm energy.",
    whereYouShouldNotFeelIt:
      "Neck gripping, low-back strain, or pinching at the front of the hips."
  },
  instructorEducation: {
    executionSteps: [
      "Set up supine, draw in one knee at a time, and curl the head and shoulders up.",
      "Extend the legs to the chosen height while keeping the ribs quiet and the pelvis steady.",
      "Pump the arms with a five-count inhale and five-count exhale rhythm.",
      "Complete ten breath cycles without losing trunk lift."
    ],
    teachingCues: [
      "Float the sternum toward the thighs without pulling on the neck.",
      "Pump from the shoulders, not from the wrists.",
      "Expand the breath into the side ribs."
    ],
    commonMistakes: [
      "Overgripping the hip flexors.",
      "Flattening the breath into the throat.",
      "Lowering the legs past available trunk support."
    ],
    progressions: [
      "Lower the legs closer to the floor while maintaining trunk lift.",
      "Increase tempo clarity without changing the trunk shape."
    ],
    programming: {
      focus: "Center-line support and breath-driven trunk endurance.",
      useCase: "Early in class to organize the trunk before larger movement patterns.",
      pairsWellWith: ["Roll Up", "Single Leg Stretch", "Short Spine Prep"]
    }
  },
  clientSafety: {
    entryGuidance:
      "Keep the legs higher or the feet down if you cannot keep the ribs and pelvis quiet.",
    regressions: [
      "Keep both feet on the mat.",
      "Support the head or lower it down between sets."
    ],
    precautions: [
      "Reduce the curl if cervical flexion is poorly tolerated.",
      "Shorten the set if breath quality collapses."
    ],
    clientContent: {
      setup:
        "Lie on your back, bring the knees in, and lift the head and shoulders only as much as you can stay comfortable.",
      simpleSteps: [
        "Reach the arms long by your sides.",
        "Lift the legs to a height you can control or keep the feet down.",
        "Pump the arms while taking steady breaths.",
        "Stop before the neck or low back starts taking over."
      ],
      helpfulAdjustments: [
        "Keep the knees bent if the low back feels strained.",
        "Rest the head down if the neck gets tired."
      ],
      safetyNotes: [
        "Breathe steadily instead of holding tension.",
        "Choose a smaller shape if you cannot stay comfortable through the neck and hips."
      ]
    }
  },
  media: {
    images: [
      { id: "hundred-1", label: "Setup", alt: "Hundred setup position", kind: "placeholder" },
      { id: "hundred-2", label: "Pump phase", alt: "Hundred arm pumping phase", kind: "placeholder" },
      { id: "hundred-3", label: "Breath rhythm", alt: "Hundred breathing rhythm", kind: "placeholder" }
    ]
  },
  futureExpansion: {
    instructorNotes: "Good benchmark for breath endurance and trunk organization.",
    clientSummary: "Arm pumps with lifted abdominal support.",
    flowTags: ["warm-up", "abdominal-series"],
    anatomyLayerVersion: "basic"
  }
};
