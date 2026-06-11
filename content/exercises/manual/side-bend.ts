import { ExerciseRecord } from "@/lib/exercise-types";

export const manualSideBend: ExerciseRecord = {
  display: {
    id: "manual-side-bend",
    slug: "manual-side-bend",
    name: "Side Bend",
    summary: "Manual-source side-facing exercise from the lateral flexion category.",
    audienceMode: "instructor"
  },
  source: {
    manual: "Core 360 Mat Manual",
    page: 47,
    section: "Side-Facing",
    originalName: "Side Bend",
    sourceStatus: "needs-stacey-review",
    reviewQuestions: ["Manual lists Primary Muscles as Varies; confirm or replace with Stacey-approved primary muscle emphasis.", "Should the generic setup/execution language remain exact manual text or be expanded in a Stacey-reviewed teaching pass?"]
  },
  classification: {
    equipment: ["Mat"],
    level: "Beginner–Intermediate",
    movementCategory: "Lateral Flexion",
    bodyPosition: "Side-Facing",
    movementCompass: ["Lateral Flexion", "Rib-Pelvis Alignment", "Core Stability"],
    programmingWheelSlot: "Side-Lying / Side-Facing",
    laterality: "Side 1",
    supportType: ["Closed Chain", "Shoulder Support", "Weight Bearing"]
  },
  anatomy: {
    primaryMusclesText: "Varies",
    stabilizersText: "Deep core stabilizers",
    primaryMuscleIds: ["multifidus", "obliques", "shoulder-stabilizers"],
    stabilizerMuscleIds: ["transversus-abdominis"],
    regions: ["Deep Core", "Anterior Core", "Shoulder Stabilizers", "Lateral System"],
    bodyScanFocus: ["Pelvis", "Rib cage", "Shoulder girdle"],
    overlay: {
      primary: ["multifidus", "obliques", "shoulder-stabilizers"],
      secondary: [],
      stabilizers: ["transversus-abdominis"],
      preferredView: "both"
    }
  },
  teaching: {
    setup: "Establish alignment and prepare breath.",
    execution: "Move with controlled tempo while maintaining organization and support.",
    breathPattern: "Inhale to prepare, exhale through the effort.",
    cues: ["Encourage length, control, and rib-pelvis organization."],
    commonMistakes: ["Losing alignment, gripping unnecessary muscles, or using momentum."],
    modifications: ["Reduce range, shorten lever length, or add support as needed."],
    progressions: ["Increase lever length, complexity, or challenge only when control is maintained."]
  },
  programming: {
    sequenceNotes: "Manual-source exercise from the side-facing lateral flexion block."
  }
};
