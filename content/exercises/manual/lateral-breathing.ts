import { ExerciseRecord } from "@/lib/exercise-types";

export const manualLateralBreathing: ExerciseRecord = {
  display: {
    id: "manual-lateral-breathing",
    slug: "manual-lateral-breathing",
    name: "Lateral Breathing",
    summary: "Manual-source supine exercise from the breathing / pelvic tilts category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 10,
    section: "Supine",
    originalName: "Lateral Breathing",
    sourceStatus: "manual-source"
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner",
    movementCategory: "Breathing / Pelvic Tilts",
    bodyPosition: "Supine",
    movementCompass: ["Breath Mechanics", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Diaphragm, transverse abdominis, pelvic floor, obliques",
    stabilizersText: "Deep core stabilizers, cervical flexor support, scapular stabilizers",
    primaryMuscleIds: ["transversus-abdominis", "obliques"],
    stabilizerMuscleIds: ["multifidus", "shoulder-stabilizers"],
    regions: ["Deep Core", "Anterior Core", "Shoulder Stabilizers", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage"],
    overlay: {
      primary: ["transversus-abdominis", "obliques"],
      secondary: [],
      stabilizers: ["multifidus", "shoulder-stabilizers"],
      preferredView: "both"
    }
  },
  teaching: {
    setup: "Find a comfortable supine position with the pelvis level and ribs soft.",
    execution: "Direct the inhale into the sides and back of the rib cage without lifting the chest aggressively.",
    breathPattern: "Inhale to expand the ribs. Exhale to organize the abdominals and pelvis.",
    cues: ["Keep the neck relaxed and the feet grounded without gripping."],
    commonMistakes: ["Rib flare, jaw tension, over-bracing, or flattening the spine excessively."],
    modifications: ["Support the head or keep the knees bent if needed."],
    progressions: ["Add arm motion, leg slides, or longer exhalation control."]
  },
  programming: {
    sequenceNotes: "Manual-source exercise from the supine breathing / pelvic tilts block."
  }
};
