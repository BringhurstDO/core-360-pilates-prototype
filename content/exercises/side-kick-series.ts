import { ExerciseRecord } from "@/lib/exercise-types";

export const sideKickSeries: ExerciseRecord = {
  display: {
    id: "ex-side-kick",
    slug: "side-kick-series",
    name: "Side Kick Series",
    summary:
      "Side-facing stability work for lateral line organization and hip dissociation.",
    audienceMode: "both"
  },
  classification: {
    apparatus: "Mat",
    level: "Intermediate",
    bodyPosition: "Side Facing",
    movementCategory: "Side-Lying",
    muscleGroups: ["glutes", "obliques", "hip-flexors"]
  },
  anatomy: {
    primaryMuscles: ["Gluteus medius", "Obliques"],
    secondaryMuscles: ["Adductors", "Hip flexors"],
    stabilizers: ["Shoulder stabilizers", "Quadratus lumborum"],
    overlay: {
      primary: ["glutes", "obliques"],
      secondary: ["adductors", "hip-flexors"],
      stabilizers: ["shoulder-stabilizers"],
      preferredView: "both"
    },
    whereYouShouldFeelIt:
      "Outer hip work on the top leg side with deep waist support through the trunk.",
    whereYouShouldNotFeelIt:
      "Pinching in the low back, neck tension, or shearing at the front of the hip."
  },
  instructorEducation: {
    executionSteps: [
      "Set up in one long side-facing line with the lower waist lifted.",
      "Sweep the top leg forward with a small pulse while keeping the pelvis stacked.",
      "Reach the leg long to the back without rolling the torso.",
      "Repeat smoothly before layering in circles or series variations."
    ],
    teachingCues: [
      "Kick from a stable trunk.",
      "Reach the leg out of the hip before moving it.",
      "Keep both sides of the waist equally long."
    ],
    commonMistakes: [
      "Pelvis rolling backward.",
      "Collapsing into the support shoulder.",
      "Using momentum instead of controlled dissociation."
    ],
    progressions: [
      "Add larger circles or bicycle variations.",
      "Reduce hand support with a hand-behind-head setup."
    ],
    programming: {
      focus: "Unilateral hip control with lateral trunk stability.",
      useCase: "Mid-session when students are ready for more dissociation work.",
      pairsWellWith: ["Shoulder Bridge", "Leg Pull Side Prep", "Standing Side Splits"]
    }
  },
  clientSafety: {
    entryGuidance:
      "Make the kicks smaller if the trunk starts rocking or the top hip feels pinchy.",
    regressions: [
      "Bend the bottom knee for a wider base.",
      "Keep the top hand more active for support."
    ],
    precautions: [
      "Avoid forcing the back reach from the low back.",
      "Shorten the set if the neck begins to grip."
    ],
    clientContent: {
      setup:
        "Lie on one side in a long line and support yourself with the lower arm and top hand.",
      simpleSteps: [
        "Lift the top leg to hip height.",
        "Swing it gently forward and then reach it back.",
        "Keep the waist long and the trunk steady.",
        "Repeat with control instead of speed."
      ],
      helpfulAdjustments: [
        "Bend the bottom knee if balance feels shaky.",
        "Make the leg movement smaller if the low back joins in."
      ],
      safetyNotes: [
        "Keep the neck relaxed.",
        "Avoid rolling backward as the leg reaches behind you."
      ]
    }
  },
  media: {
    images: [
      { id: "sidekick-1", label: "Long line", alt: "Side Kick long body setup", kind: "placeholder" },
      { id: "sidekick-2", label: "Front kick", alt: "Side Kick forward phase", kind: "placeholder" },
      { id: "sidekick-3", label: "Back reach", alt: "Side Kick backward phase", kind: "placeholder" }
    ]
  },
  futureExpansion: {
    flowTags: ["lateral-line", "hip-stability"],
    anatomyLayerVersion: "basic"
  }
};
