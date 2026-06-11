import { ExerciseRecord } from "@/lib/exercise-types";

export const manualRainbow: ExerciseRecord = {
  display: {
    id: "manual-rainbow",
    slug: "manual-rainbow",
    name: "Rainbow",
    summary: "Manual-source side-facing exercise from the side-lying hip / leg work category.",
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
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Glute medius, adductors, obliques",
    stabilizersText: "Deep core stabilizers, pelvic stabilizers",
    primaryMuscleIds: ["obliques", "adductors", "glutes"],
    stabilizerMuscleIds: ["transversus-abdominis", "multifidus"],
    regions: ["Deep Core", "Anterior Core", "Posterior Chain", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage"],
    overlay: {
      primary: ["obliques", "adductors", "glutes"],
      secondary: [],
      stabilizers: ["transversus-abdominis", "multifidus"],
      preferredView: "both"
    }
  },
  teaching: {
    setup: "Lie side-facing with the underside waist gently lifted and the pelvis stacked.",
    execution: "Move the top leg through a controlled arc while keeping the trunk quiet and supported.",
    breathPattern: "Inhale prepare. Exhale through the leg sweep and return with control.",
    cues: ["Keep the pelvis stacked and think of the leg moving from a stable center."],
    commonMistakes: ["Rolling backward, collapsing the waist, or turning it into lateral trunk bending."],
    modifications: ["Decrease the range or bend the knee."],
    progressions: ["Add larger arcs or longer lever length while maintaining trunk control."]
  },
  programming: {
    sequenceNotes: "Manual-source exercise from the side-facing side-lying hip / leg work block."
  }
};
