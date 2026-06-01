import { ExerciseRecord } from "@/lib/exercise-types";

export const mermaid: ExerciseRecord = {
  display: {
    id: "ex-mermaid",
    slug: "mermaid",
    name: "Mermaid",
    summary:
      "Lateral flexion work that opens the side body while organizing the pelvis and support shoulder.",
    audienceMode: "both"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 44,
    section: "Side-Facing",
    originalName: "Mermaid",
    sourceStatus: "manual-adapted"
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Lateral Flexion",
    bodyPosition: "Side-Facing Seated",
    movementCompass: ["Lateral Flexion", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Side-Lying / Side-Facing",
    laterality: "Side 1",
    supportType: ["Shoulder Support", "Assisted"]
  },
  anatomy: {
    primaryMusclesText: "Obliques, quadratus lumborum, lateral line",
    secondaryMusclesText: "Latissimus dorsi, intercostals, deltoids",
    stabilizersText: "Pelvic floor, deep trunk stabilizers, scapular stabilizers",
    primaryMuscleIds: ["obliques", "lats"],
    secondaryMuscleIds: ["deltoids"],
    stabilizerMuscleIds: ["glutes", "shoulder-stabilizers"],
    regions: ["Lateral System", "Deep Core", "Shoulder Stabilizers"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle"],
    overlay: {
      primary: ["obliques", "lats"],
      secondary: ["deltoids"],
      stabilizers: ["glutes", "shoulder-stabilizers"],
      preferredView: "both"
    },
    whereYouShouldFeelIt:
      "Length and effort through the side waist, underarm line, and support shoulder.",
    whereYouShouldNotFeelIt:
      "Low-back pinching, compression at the support wrist, or neck gripping."
  },
  teaching: {
    setup:
      "Sit in a comfortable side-facing seat with weight grounded evenly through the pelvis.",
    execution:
      "Reach into side bend without collapsing, then return through the center with control.",
    breathPattern: "Inhale to lengthen. Exhale to organize and return.",
    cues: [
      "Lift up before you arc sideways.",
      "Keep the lower ribs buoyant.",
      "Anchor the pelvis as the spine bends."
    ],
    commonMistakes: [
      "Shrugging.",
      "Collapsing into the supporting arm.",
      "Over-rotating the trunk."
    ],
    modifications: [
      "Sit on a cushion for better pelvic organization.",
      "Reduce the side bend depth."
    ],
    progressions: [
      "Add rotation through the side bend shape.",
      "Move into a longer side support transition."
    ],
    executionSteps: [
      "Sit with weight grounded evenly through the pelvis.",
      "Reach the free arm overhead.",
      "Arc into side bend while keeping both sides of the waist long.",
      "Return upright with control from the side body."
    ]
  },
  programming: {
    focus: "Side-body mobility with organized shoulder and pelvic support.",
    useCase: "A useful transition between stronger flexion and extension blocks.",
    sequenceNotes:
      "Fits the lateral-flexion side-facing block and can be repeated on the second side.",
    templateFits: ["Beginner class emphasis", "Gentle / restorative emphasis"],
    pairsWellWith: ["Side Kick Series", "Saw", "Standing Side Bend"]
  },
  safety: {
    entryGuidance:
      "Stay taller with a smaller arc if the support side starts collapsing.",
    precautions: [
      "Do not force range through the low back.",
      "Back off if the support wrist becomes loaded."
    ]
  },
  clientContent: {
    setup:
      "Sit comfortably with the legs folded and one hand resting on a support surface.",
    simpleSteps: [
      "Reach the free arm up.",
      "Bend gently to the side while staying long through both waists.",
      "Return upright with control.",
      "Repeat without collapsing into the support side."
    ],
    helpfulAdjustments: [
      "Sit on a cushion if the hips feel uneven.",
      "Keep the side bend smaller if the low back starts to pinch."
    ],
    safetyNotes: [
      "Let the movement stay smooth and spacious.",
      "Do not force the range through the ribs or lower back."
    ]
  },
  media: {
    images: [
      { id: "mermaid-1", label: "Seat setup", alt: "Mermaid seated setup", kind: "placeholder" },
      { id: "mermaid-2", label: "Side bend", alt: "Mermaid lateral reach", kind: "placeholder" },
      { id: "mermaid-3", label: "Return", alt: "Mermaid return to upright", kind: "placeholder" }
    ]
  }
};
