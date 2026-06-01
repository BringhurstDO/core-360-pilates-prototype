import { ExerciseRecord } from "@/lib/exercise-types";

export const manualRainbow: ExerciseRecord = {
  display: {
    id: "manual-rainbow",
    slug: "manual-rainbow",
    name: "Rainbow",
    summary:
      "Manual-source side-facing hip exercise for leg arc control from a stable trunk.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 42,
    section: "Side-Facing",
    originalName: "Rainbow",
    sourceStatus: "manual-source"
  },
  classification: {
    equipment: ["Mat"],
    level: "Intermediate",
    movementCategory: "Side-Lying Hip / Leg Work",
    bodyPosition: "Side-Facing",
    movementCompass: ["Core Stability", "Rib-Pelvis Alignment", "Integration"],
    programmingWheelSlot: "Side-Lying / Side-Facing",
    laterality: "Side 1",
    supportType: ["Open Chain", "Shoulder Support"]
  },
  anatomy: {
    primaryMusclesText: "Glute medius, adductors, obliques",
    stabilizersText: "Deep core stabilizers, pelvic stabilizers",
    primaryMuscleIds: ["glutes", "adductors", "obliques"],
    stabilizerMuscleIds: ["abdominals", "obliques"],
    regions: ["Lateral System", "Deep Core", "Anterior Core"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle"],
    overlay: {
      primary: ["glutes", "adductors", "obliques"],
      secondary: [],
      stabilizers: ["abdominals", "obliques"],
      preferredView: "both"
    }
  },
  teaching: {
    setup:
      "Lie side-facing with the underside waist gently lifted and the pelvis stacked.",
    execution:
      "Move the top leg through a controlled arc while keeping the trunk quiet and supported.",
    breathPattern:
      "Inhale prepare. Exhale through the leg sweep and return with control.",
    cues: [
      "Keep the pelvis stacked and think of the leg moving from a stable center."
    ],
    commonMistakes: [
      "Rolling backward, collapsing the waist, or turning it into lateral trunk bending."
    ],
    modifications: [
      "Decrease the range or bend the knee."
    ],
    progressions: [
      "Add larger arcs or longer lever length while maintaining trunk control."
    ]
  },
  programming: {
    sequenceNotes:
      "Manual-source exercise from the side-facing hip / leg work block."
  }
};
