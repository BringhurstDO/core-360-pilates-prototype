import { ExerciseRecord } from "@/lib/exercise-types";

export const teaserPrep: ExerciseRecord = {
  display: {
    id: "ex-teaser-prep",
    slug: "teaser-prep",
    name: "Teaser Prep",
    summary:
      "Controlled balance prep introducing teaser mechanics with smaller levers and clear spinal sequencing.",
    audienceMode: "instructor"
  },
  classification: {
    apparatus: "Mat",
    level: "Advanced",
    bodyPosition: "Supine",
    movementCategory: "Core Articulation",
    muscleGroups: ["abdominals", "obliques", "hip-flexors"]
  },
  anatomy: {
    primaryMuscles: ["Abdominals", "Obliques", "Hip flexors"],
    secondaryMuscles: ["Quadriceps", "Adductors"],
    stabilizers: ["Spinal extensors", "Scapular stabilizers"],
    overlay: {
      primary: ["abdominals", "obliques", "hip-flexors"],
      secondary: ["quadriceps", "adductors"],
      stabilizers: ["spinal-erectors", "shoulder-stabilizers"],
      preferredView: "both"
    },
    whereYouShouldFeelIt:
      "Precise abdominal work with integrated hip support and a feeling of spinal lift.",
    whereYouShouldNotFeelIt:
      "Jolting in the low back, neck strain, or dominating hip-flexor gripping."
  },
  instructorEducation: {
    executionSteps: [
      "Start in tabletop with the trunk lightly curled and the arms reaching long.",
      "Exhale to deepen the scoop and balance into a compact V shape.",
      "Reach the chest through the arms while the legs stay buoyant.",
      "Roll back down with the same controlled shape."
    ],
    teachingCues: [
      "Think up and back at the same time.",
      "Keep the shape compact before making it bigger.",
      "Lift the waist behind the navel."
    ],
    commonMistakes: [
      "Throwing the legs for momentum.",
      "Collapsing into the chest at the top.",
      "Overgripping the quads."
    ],
    progressions: [
      "Extend the legs toward a fuller teaser shape.",
      "Add arm circles while maintaining the balance."
    ],
    programming: {
      focus: "Bridge foundational articulation into advanced balance control.",
      useCase: "Late in class after adequate warm-up and sequencing.",
      pairsWellWith: ["Roll Up", "Open Leg Rocker Prep", "Hip Circles"]
    }
  },
  clientSafety: {
    entryGuidance:
      "Keep one foot down or stay in the transition phase until the balance shape stays compact.",
    regressions: [
      "One foot on the mat.",
      "Practice only the roll-up to balance transition."
    ],
    precautions: [
      "Avoid chasing a full V shape before trunk control is present.",
      "Pause if the neck or low back begins to take over."
    ],
    clientContent: {
      setup:
        "Start on your back with the knees bent in and the arms reaching long.",
      simpleSteps: [
        "Curl up and lift into a small balance shape.",
        "Keep the legs close in if that feels more controlled.",
        "Pause briefly, then roll back down slowly.",
        "Focus on balance and smooth control rather than size."
      ],
      helpfulAdjustments: [
        "Keep one foot on the mat if the balance feels too intense.",
        "Make the shape smaller if the hip flexors start taking over."
      ],
      safetyNotes: [
        "Avoid forcing a big V position.",
        "Stop if the neck or low back begins to strain."
      ]
    }
  },
  media: {
    images: [
      { id: "teaser-1", label: "Tabletop start", alt: "Teaser Prep tabletop position", kind: "placeholder" },
      { id: "teaser-2", label: "Balance", alt: "Teaser Prep balanced V shape", kind: "placeholder" },
      { id: "teaser-3", label: "Controlled lower", alt: "Teaser Prep lowering phase", kind: "placeholder" }
    ]
  },
  futureExpansion: {
    flowTags: ["advanced-mat", "balance"],
    anatomyLayerVersion: "basic"
  }
};
