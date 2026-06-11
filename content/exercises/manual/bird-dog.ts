import { ExerciseRecord } from "@/lib/exercise-types";

export const manualBirdDog: ExerciseRecord = {
  display: {
    id: "manual-bird-dog",
    slug: "manual-bird-dog",
    name: "Bird Dog",
    summary: "Manual-source quadruped / kneeling exercise from the quadruped / kneeling category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 51,
    section: "Quadruped / Kneeling",
    originalName: "Bird Dog",
    sourceStatus: "manual-source"
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Quadruped / Kneeling",
    bodyPosition: "Quadruped / Kneeling",
    movementCompass: ["Core Stability", "Rib-Pelvis Alignment", "Extension"],
    programmingWheelSlot: "Quadruped / Kneeling",
    laterality: "Alternating",
    supportType: ["Closed Chain", "Weight Bearing", "Shoulder Support"]
  },
  anatomy: {
    primaryMusclesText: "Posterior chain, gluteals, scapular stabilizers",
    stabilizersText: "Deep core stabilizers, scapular support",
    primaryMuscleIds: ["glutes", "hamstrings", "spinal-erectors", "shoulder-stabilizers"],
    stabilizerMuscleIds: ["transversus-abdominis", "multifidus"],
    regions: ["Deep Core", "Posterior Chain", "Shoulder Stabilizers"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle", "Wrist/hand support"],
    overlay: {
      primary: ["glutes", "hamstrings", "spinal-erectors", "shoulder-stabilizers"],
      secondary: [],
      stabilizers: ["transversus-abdominis", "multifidus"],
      preferredView: "both"
    }
  },
  teaching: {
    setup: "Begin in quadruped with hands under shoulders and knees under hips.",
    execution: "Reach the opposite arm and leg long without shifting the trunk or pelvis.",
    breathPattern: "Inhale prepare. Exhale to reach and organize. Inhale to return.",
    cues: ["Lengthen rather than lift high, and keep the ribs from dropping or flaring."],
    commonMistakes: ["Overextending the spine, shifting weight heavily to one side, or locking the elbows."],
    modifications: ["Reach only the arm or only the leg."],
    progressions: ["Add holds, pulses, or an unstable support challenge."]
  },
  programming: {
    sequenceNotes: "Manual-source exercise from the quadruped / kneeling quadruped / kneeling block."
  }
};
