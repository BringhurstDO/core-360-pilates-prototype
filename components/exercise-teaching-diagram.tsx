import { PrototypeLabel } from "@/components/prototype-label";
import {
  ExerciseRecord,
  formatMuscleGroup,
  MuscleGroupId
} from "@/lib/exercise-types";

type ExerciseTeachingDiagramProps = {
  exercise: ExerciseRecord;
};

export function ExerciseTeachingDiagram({
  exercise
}: ExerciseTeachingDiagramProps) {
  const diagram = exercise.media?.teachingDiagram;
  const primaryMuscles =
    exercise.anatomy.overlay?.primary ?? exercise.anatomy.primaryMuscleIds ?? [];
  const primaryLabels = primaryMuscles
    .slice(0, 3)
    .map((muscle) => formatMuscleGroup(muscle));
  const equipment = exercise.classification.equipment.join(", ");

  return (
    <section className="info-card teaching-diagram-card">
      <div className="teaching-diagram-header">
        <div>
          <p className="eyebrow">Teaching Plate</p>
          <h2>{diagram?.title ?? "Exercise-Specific Teaching Diagram"}</h2>
          <p className="detail-summary">
            {diagram?.description ??
              "Placeholder for Stacey-style movement diagrams that combine body position, equipment context, cue arrows, and anatomy emphasis."}
          </p>
        </div>
        <PrototypeLabel>Diagram placeholder</PrototypeLabel>
      </div>

      {diagram?.kind === "uploaded" && diagram.imageSrc ? (
        <img
          className="teaching-diagram-image"
          src={diagram.imageSrc}
          alt={diagram.imageAlt ?? diagram.title}
        />
      ) : (
        <TeachingPlateSvg
          exerciseName={exercise.display.name}
          equipment={equipment}
          bodyPosition={exercise.classification.bodyPosition}
          primaryMuscles={primaryMuscles}
        />
      )}

      <div className="teaching-diagram-notes">
        <div>
          <h3>What this plate should clarify</h3>
          <ul className="instruction-list unordered">
            {(diagram?.poseNotes ?? [
              `${exercise.classification.bodyPosition} setup and exercise shape`,
              `${equipment} context or support surface`,
              "Direction of effort, support, and common compensation points"
            ]).map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Annotation targets</h3>
          <div className="teaching-label-list">
            {(diagram?.annotationLabels.length
              ? diagram.annotationLabels
              : primaryLabels
            ).map((label) => (
              <span key={label} className="legend-pill">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type TeachingPlateSvgProps = {
  exerciseName: string;
  equipment: string;
  bodyPosition: string;
  primaryMuscles: MuscleGroupId[];
};

function TeachingPlateSvg({
  exerciseName,
  equipment,
  bodyPosition,
  primaryMuscles
}: TeachingPlateSvgProps) {
  const mainMuscle = primaryMuscles[0]
    ? formatMuscleGroup(primaryMuscles[0])
    : "Primary emphasis";

  return (
    <svg
      className="teaching-plate-svg"
      viewBox="0 0 780 360"
      role="img"
      aria-label={`${exerciseName} teaching diagram placeholder`}
    >
      <defs>
        <marker
          id="cue-arrow"
          markerHeight="10"
          markerWidth="10"
          orient="auto"
          refX="8"
          refY="3"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#1f5c57" />
        </marker>
        <linearGradient id="plate-paper" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fffaf2" />
          <stop offset="100%" stopColor="#efe4d5" />
        </linearGradient>
      </defs>

      <rect
        x="16"
        y="16"
        width="748"
        height="328"
        rx="24"
        fill="url(#plate-paper)"
        stroke="rgba(96,79,55,0.18)"
      />
      <line x1="80" y1="258" x2="670" y2="258" stroke="#8f7f6d" strokeWidth="5" />
      <rect x="92" y="238" width="238" height="24" rx="8" fill="#d8c7b5" />
      <line x1="330" y1="250" x2="650" y2="180" stroke="#8f7f6d" strokeWidth="3" />
      <circle cx="666" cy="176" r="10" fill="#8f7f6d" />

      <g fill="none" stroke="#5f5143" strokeLinecap="round" strokeWidth="9">
        <path d="M210 214 C250 185 306 180 356 200" />
        <path d="M356 200 C406 216 464 210 520 178" />
        <path d="M282 188 C254 156 238 128 220 92" />
        <path d="M284 190 C266 230 254 254 234 282" />
        <path d="M515 180 C560 188 600 190 632 178" />
        <path d="M516 178 C540 142 570 118 612 96" />
      </g>

      <circle cx="205" cy="82" r="25" fill="#fff8ed" stroke="#5f5143" strokeWidth="8" />

      <g fill="rgba(200,117,77,0.72)" stroke="#925437" strokeWidth="2">
        <path d="M246 175 C276 160 322 166 356 198 C318 202 280 204 246 175 Z" />
        <path d="M360 200 C390 211 426 210 464 196 C438 222 390 228 360 200 Z" />
      </g>

      <g fill="rgba(31,92,87,0.72)" stroke="#184842" strokeWidth="2">
        <path d="M214 104 C232 126 246 150 256 178 C238 171 224 150 210 116 Z" />
      </g>

      <path
        d="M584 92 C532 120 482 151 432 188"
        fill="none"
        markerEnd="url(#cue-arrow)"
        stroke="#1f5c57"
        strokeDasharray="8 7"
        strokeWidth="4"
      />
      <path
        d="M140 98 C165 126 190 150 225 172"
        fill="none"
        markerEnd="url(#cue-arrow)"
        stroke="#c8754d"
        strokeDasharray="8 7"
        strokeWidth="4"
      />

      <g className="teaching-plate-label">
        <path d="M250 146 L156 118" stroke="#5f5143" />
        <rect x="40" y="92" width="140" height="44" rx="14" />
        <text x="110" y="119">{mainMuscle}</text>
      </g>

      <g className="teaching-plate-label">
        <path d="M436 190 L574 138" stroke="#5f5143" />
        <rect x="564" y="112" width="154" height="52" rx="14" />
        <text x="641" y="133">Cue arrow</text>
        <text x="641" y="150">and effort line</text>
      </g>

      <g className="teaching-plate-label">
        <path d="M140 258 L104 304" stroke="#5f5143" />
        <rect x="58" y="296" width="178" height="38" rx="14" />
        <text x="147" y="320">{equipment} context</text>
      </g>

      <text className="teaching-plate-title" x="40" y="54">
        {exerciseName}
      </text>
      <text className="teaching-plate-subtitle" x="40" y="76">
        {bodyPosition} teaching diagram placeholder
      </text>
    </svg>
  );
}
