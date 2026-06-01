import { ExerciseRecord } from "@/lib/exercise-types";

export const rollUp: ExerciseRecord = {
  display: {
    id: "ex-roll-up",
    slug: "roll-up",
    name: "Roll Up",
    summary:
      "Segmental spinal articulation linking breath, abdominal control, and posterior chain length.",
    audienceMode: "both"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 30,
    section: "Supine",
    originalName: "Roll Up",
    sourceStatus: "manual-adapted"
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Abdominals / Forward Flexion",
    bodyPosition: "Supine",
    movementCompass: ["Forward Flexion", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Supine",
    laterality: "Bilateral",
    supportType: ["Open Chain"]
  },
  anatomy: {
    primaryMusclesText: "Rectus abdominis, obliques",
    secondaryMusclesText: "Hip flexors, lats",
    stabilizersText: "Hamstrings, inner thighs",
    primaryMuscleIds: ["abdominals", "obliques"],
    secondaryMuscleIds: ["hip-flexors", "lats"],
    stabilizerMuscleIds: ["hamstrings", "adductors"],
    regions: ["Anterior Core", "Deep Core", "Posterior Chain"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Head and neck"],
    overlay: {
      primary: ["abdominals", "obliques"],
      secondary: ["hip-flexors", "lats"],
      stabilizers: ["hamstrings", "adductors"],
      preferredView: "both"
    },
    whereYouShouldFeelIt:
      "A deep abdominal scoop with length through the back of the legs and the spine.",
    whereYouShouldNotFeelIt:
      "Sharp low-back pulling, neck strain, or jamming in the front of the hips."
  },
  teaching: {
    setup: "Begin long on the mat with active legs and overhead arms.",
    execution:
      "Exhale to nod the chin and peel the spine away from the mat one segment at a time. Reach over the legs without collapsing the chest, then reverse the curve and lower back down with control.",
    breathPattern: "Inhale to prepare, exhale through the rolling effort.",
    cues: [
      "Peel away one vertebra at a time.",
      "Press the backs of the legs down for opposition.",
      "Reach forward without losing width across the low back."
    ],
    commonMistakes: [
      "Throwing the shoulders to gain momentum.",
      "Locking the knees and overusing the quads.",
      "Dropping through the lumbar spine on the way down."
    ],
    modifications: [
      "Use a bent-knee setup.",
      "Use a strap around the feet for assistance."
    ],
    progressions: [
      "Pause in the top shape before rolling down.",
      "Add a light weighted pole for shoulder organization."
    ],
    executionSteps: [
      "Begin long on the mat with active legs and overhead arms.",
      "Exhale to nod the chin and peel the spine away from the mat one segment at a time.",
      "Reach over the legs without collapsing the chest.",
      "Reverse the curve and lower back down with control."
    ]
  },
  programming: {
    focus: "Spinal sequencing and flexion control against gravity.",
    useCase: "After the warm-up when the body is ready for longer lever control.",
    sequenceNotes:
      "Belongs in the supine forward-flexion block and can bridge into seated spinal work.",
    templateFits: ["Intermediate flow emphasis"],
    pairsWellWith: ["Hundred", "Spine Stretch Forward", "Teaser Prep"]
  },
  safety: {
    entryGuidance:
      "Use a bent-knee setup if the full straight-leg version pulls you off center.",
    precautions: [
      "Reduce range if the movement becomes jerky.",
      "Skip the overhead arm reach if the ribs cannot stay organized."
    ]
  },
  clientContent: {
    setup:
      "Start on your back with the legs long or softly bent if that feels more supported.",
    simpleSteps: [
      "Reach the arms forward and begin curling up slowly.",
      "Roll up only as far as you can stay smooth.",
      "Reach forward over the legs without forcing.",
      "Roll back down one piece at a time."
    ],
    helpfulAdjustments: [
      "Bend the knees if the back of the legs feels too tight.",
      "Use a smaller range and focus on smooth control."
    ],
    safetyNotes: [
      "Avoid jerking yourself upright.",
      "Back off if the front of the hips or the low back feels pinched."
    ]
  },
  media: {
    images: [
      { id: "rollup-1", label: "Reach", alt: "Roll Up overhead reach", kind: "placeholder" },
      { id: "rollup-2", label: "Peel up", alt: "Roll Up segmental lift", kind: "placeholder" },
      { id: "rollup-3", label: "Stack tall", alt: "Roll Up seated finish", kind: "placeholder" }
    ]
  }
};
