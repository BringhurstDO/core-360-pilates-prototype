import { ExerciseRecord } from "@/lib/exercise-types";

export const manualForearmPlank: ExerciseRecord = {
  display: {
    id: "manual-forearm-plank",
    slug: "manual-forearm-plank",
    name: "Forearm Plank",
    summary: "Manual-source plank / closed chain exercise from the planking category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 69,
    section: "Plank / Closed Chain",
    originalName: "Forearm Plank",
    sourceStatus: "manual-source"
  },
  classification: {
    equipment: ["Mat"],
    level: "Intermediate",
    movementCategory: "Planking",
    bodyPosition: "Plank / Closed Chain",
    movementCompass: ["Core Stability", "Rib-Pelvis Alignment", "Integration"],
    programmingWheelSlot: "Plank",
    laterality: "Bilateral",
    supportType: ["Closed Chain", "Weight Bearing", "Shoulder Support"]
  },
  anatomy: {
    primaryMusclesText: "Abdominals, serratus anterior, shoulders, gluteals",
    stabilizersText: "Deep core stabilizers, shoulder stabilizers",
    primaryMuscleIds: ["abdominals", "glutes", "shoulder-stabilizers"],
    stabilizerMuscleIds: ["transversus-abdominis", "multifidus"],
    regions: ["Deep Core", "Anterior Core", "Posterior Chain", "Shoulder Stabilizers"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle", "Wrist/hand support"],
    overlay: {
      primary: ["abdominals", "glutes", "shoulder-stabilizers"],
      secondary: [],
      stabilizers: ["transversus-abdominis", "multifidus"],
      preferredView: "both"
    }
  },
  teaching: {
    setup: "Place forearms parallel and step the legs back into one long line.",
    execution: "Maintain a steady trunk with active shoulders and long legs.",
    breathPattern: "Breathe steadily without losing abdominal support.",
    cues: ["Press the floor away, lift the front body, and keep the neck long."],
    commonMistakes: ["Sagging through the lumbar spine, hiking the hips, or collapsing between the shoulders."],
    modifications: ["Drop to the knees or shorten the hold."],
    progressions: ["Add shoulder taps, leg lifts, or longer duration."]
  },
  programming: {
    sequenceNotes: "Manual-source exercise from the plank / closed chain planking block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-forearm-plank-teaching",
      title: "Forearm Plank",
      description: "Generated muscle-emphasis teaching diagram for Forearm Plank.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-forearm-plank.png",
      imageAlt: "Forearm Plank teaching diagram with highlighted muscles"
    }
  }
};
