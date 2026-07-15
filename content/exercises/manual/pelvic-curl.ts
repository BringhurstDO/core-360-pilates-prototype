import { ExerciseRecord } from "@/lib/exercise-types";

export const manualPelvicCurl: ExerciseRecord = {
  display: {
    id: "manual-pelvic-curl",
    slug: "manual-pelvic-curl",
    name: "Pelvic Curl",
    summary: "Manual-source supine exercise from the bridging category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 26,
    section: "Supine",
    originalName: "Pelvic Curl",
    sourceStatus: "manual-source"
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Bridging",
    bodyPosition: "Supine",
    movementCompass: ["Extension", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Bilateral",
    supportType: ["Closed Chain"]
  },
  anatomy: {
    primaryMusclesText: "Gluteals, hamstrings, posterior chain, abdominals",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["abdominals", "glutes", "hamstrings", "spinal-erectors"],
    stabilizerMuscleIds: ["transversus-abdominis", "multifidus"],
    regions: ["Deep Core", "Anterior Core", "Posterior Chain"],
    bodyScanFocus: ["Feet and ankles", "Knees", "Pelvis", "Rib cage"],
    overlay: {
      primary: ["abdominals", "glutes", "hamstrings", "spinal-erectors"],
      secondary: [],
      stabilizers: ["transversus-abdominis", "multifidus"],
      preferredView: "both"
    }
  },
  teaching: {
    setup: "Begin supine with feet grounded, pelvis level, and shoulders relaxed.",
    execution: "Articulate the pelvis and spine off the mat one segment at a time, then lower with control.",
    breathPattern: "Inhale prepare. Exhale to curl and lift. Inhale at the top. Exhale to lower.",
    cues: ["Press evenly through both feet and lengthen the knees away from the ribs."],
    commonMistakes: ["Pushing into the neck, flaring the ribs, or rolling up too high without support."],
    modifications: ["Perform a smaller lift or hold a neutral bridge without articulation."],
    progressions: ["Add marching, longer lever work, or single-leg challenge."]
  },
  programming: {
    sequenceNotes: "Manual-source exercise from the supine bridging block."
  }
,
  media: {
    teachingDiagram: {
      id: "manual-pelvic-curl-teaching",
      title: "Pelvic Curl",
      description: "Generated muscle-emphasis teaching diagram for Pelvic Curl.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "/teaching-diagrams/manual-pelvic-curl.png",
      imageAlt: "Pelvic Curl teaching diagram with highlighted muscles"
    }
  }
};
