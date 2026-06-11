import { ExerciseRecord } from "@/lib/exercise-types";

export const manualMermaid: ExerciseRecord = {
  display: {
    id: "manual-mermaid",
    slug: "manual-mermaid",
    name: "Mermaid",
    summary: "Manual-source side-facing seated exercise from the lateral flexion category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 44,
    section: "Side-Facing Seated",
    originalName: "Mermaid",
    sourceStatus: "manual-source"
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Lateral Flexion",
    bodyPosition: "Side-Facing Seated",
    movementCompass: ["Lateral Flexion", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Side-Lying / Side-Facing",
    laterality: "Side 1",
    supportType: ["Closed Chain", "Shoulder Support"]
  },
  anatomy: {
    primaryMusclesText: "Obliques, quadratus lumborum, lateral line",
    stabilizersText: "Pelvic floor, deep trunk stabilizers",
    primaryMuscleIds: ["obliques", "lats"],
    stabilizerMuscleIds: ["transversus-abdominis", "multifidus"],
    regions: ["Deep Core", "Anterior Core", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle"],
    overlay: {
      primary: ["obliques", "lats"],
      secondary: [],
      stabilizers: ["transversus-abdominis", "multifidus"],
      preferredView: "both"
    }
  },
  teaching: {
    setup: "Sit in a comfortable side-facing seat with weight grounded evenly through the pelvis.",
    execution: "Reach into side bend without collapsing, then return through the center with control.",
    breathPattern: "Inhale to lengthen. Exhale to organize and return.",
    cues: ["Create space on both sides of the waist and keep the bottom shoulder relaxed."],
    commonMistakes: ["Shrugging, collapsing into the supporting arm, or over-rotating the trunk."],
    modifications: ["Sit on a cushion or reduce the side bend range."],
    progressions: ["Add rotation or a longer side support transition."]
  },
  programming: {
    sequenceNotes: "Manual-source exercise from the side-facing seated lateral flexion block."
  }
};
