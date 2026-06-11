import { PrototypeLabel } from "@/components/prototype-label";
import {
  BodyPosition,
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
  const secondaryMuscles =
    exercise.anatomy.overlay?.secondary ??
    exercise.anatomy.secondaryMuscleIds ??
    [];
  const stabilizerMuscles =
    exercise.anatomy.overlay?.stabilizers ??
    exercise.anatomy.stabilizerMuscleIds ??
    [];
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
              "Position-aware movement diagram combining body position, a cue arrow, and anatomy emphasis."}
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
          bodyPosition={exercise.classification.bodyPosition}
          primaryMuscles={primaryMuscles}
          secondaryMuscles={secondaryMuscles}
          stabilizerMuscles={stabilizerMuscles}
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

type AnatomyRole = "primary" | "secondary" | "stabilizer";

const ROLE_STYLES: Record<
  AnatomyRole,
  { fill: string; stroke: string; label: string; dashed?: boolean }
> = {
  primary: { fill: "rgba(31,92,87,0.62)", stroke: "#123f3b", label: "Primary" },
  secondary: {
    fill: "rgba(200,117,77,0.56)",
    stroke: "#925437",
    label: "Secondary"
  },
  stabilizer: {
    fill: "rgba(72,112,142,0.30)",
    stroke: "#486f8c",
    label: "Stabilizer",
    dashed: true
  }
};

const ROLE_PRIORITY: Record<AnatomyRole, number> = {
  stabilizer: 0,
  secondary: 1,
  primary: 2
};

type BodyZone =
  | "core"
  | "back"
  | "hip"
  | "thigh"
  | "lowerLeg"
  | "shoulderArm";

const MUSCLE_ZONE: Record<MuscleGroupId, BodyZone> = {
  "transversus-abdominis": "core",
  abdominals: "core",
  obliques: "core",
  "hip-flexors": "core",
  multifidus: "back",
  "spinal-erectors": "back",
  lats: "back",
  glutes: "hip",
  quadriceps: "thigh",
  adductors: "thigh",
  hamstrings: "thigh",
  calves: "lowerLeg",
  deltoids: "shoulderArm",
  triceps: "shoulderArm",
  biceps: "shoulderArm",
  pecs: "shoulderArm",
  "shoulder-stabilizers": "shoulderArm"
};

type Pt = [number, number];
type Segment = { from: Pt; to: Pt; width: number; faint?: boolean };
type Ellipse = { cx: number; cy: number; rx: number; ry: number; rot: number };

type Pose = {
  segments: Segment[];
  trunk: string;
  neck: Segment;
  head: { cx: number; cy: number; r: number };
  surface: { x: number; y: number; w: number } | null;
  cue?: string;
  altLine?: string;
  zones: Partial<Record<BodyZone, Ellipse>>;
};

function seg(from: Pt, to: Pt, ry: number, pad = 0.82): Ellipse {
  const cx = (from[0] + to[0]) / 2;
  const cy = (from[1] + to[1]) / 2;
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const len = Math.hypot(dx, dy);
  return {
    cx,
    cy,
    rx: (len / 2) * pad,
    ry,
    rot: (Math.atan2(dy, dx) * 180) / Math.PI
  };
}

const POSES: Record<string, Pose> = {
  supine: {
    segments: [
      { from: [472, 284], to: [590, 228], width: 38 },
      { from: [590, 228], to: [626, 292], width: 30 },
      { from: [626, 292], to: [654, 296], width: 18 },
      { from: [316, 256], to: [374, 272], width: 24 },
      { from: [374, 272], to: [452, 270], width: 20 }
    ],
    trunk:
      "M302 234 C294 250 298 268 316 276 C362 290 422 292 474 286 C494 284 498 266 486 252 C472 238 432 234 386 234 C354 234 322 230 302 234 Z",
    neck: { from: [308, 250], to: [288, 234], width: 22 },
    head: { cx: 272, cy: 226, r: 25 },
    surface: { x: 120, y: 300, w: 540 },
    cue: "M252 276 C264 250 282 230 310 220",
    zones: {
      core: { cx: 394, cy: 262, rx: 80, ry: 15, rot: 10 },
      back: { cx: 394, cy: 280, rx: 80, ry: 12, rot: 10 },
      hip: { cx: 474, cy: 280, rx: 22, ry: 16, rot: -25 },
      thigh: seg([472, 284], [590, 228], 16),
      lowerLeg: seg([590, 228], [626, 292], 13),
      shoulderArm: seg([316, 256], [374, 272], 13, 0.9)
    }
  },
  prone: {
    segments: [
      { from: [440, 288], to: [552, 292], width: 36 },
      { from: [552, 292], to: [646, 290], width: 28 },
      { from: [646, 290], to: [672, 286], width: 16 },
      { from: [306, 256], to: [306, 290], width: 22 },
      { from: [306, 290], to: [362, 294], width: 18 }
    ],
    trunk:
      "M300 240 C290 252 296 270 318 280 C360 292 410 294 452 288 C470 285 470 268 458 256 C440 242 400 240 360 238 C338 238 314 234 300 240 Z",
    neck: { from: [306, 250], to: [286, 236], width: 20 },
    head: { cx: 272, cy: 228, r: 24 },
    surface: { x: 120, y: 300, w: 560 },
    cue: "M258 220 C268 240 280 256 300 268",
    zones: {
      back: { cx: 378, cy: 252, rx: 78, ry: 14, rot: 4 },
      core: { cx: 378, cy: 280, rx: 78, ry: 12, rot: 4 },
      hip: { cx: 448, cy: 284, rx: 22, ry: 15, rot: 0 },
      thigh: seg([440, 288], [552, 292], 15),
      lowerLeg: seg([552, 292], [646, 290], 12),
      shoulderArm: seg([306, 256], [306, 290], 11, 0.9)
    }
  },
  plank: {
    segments: [
      { from: [278, 252], to: [254, 292], width: 22 },
      { from: [458, 284], to: [548, 290], width: 32 },
      { from: [548, 290], to: [612, 294], width: 26 },
      { from: [612, 294], to: [632, 288], width: 14 }
    ],
    trunk:
      "M270 244 C262 252 264 264 280 270 C340 280 410 286 458 288 C470 289 472 278 462 270 C410 258 344 250 292 244 C284 243 276 240 270 244 Z",
    neck: { from: [276, 250], to: [258, 248], width: 20 },
    head: { cx: 244, cy: 248, r: 22 },
    surface: { x: 120, y: 300, w: 540 },
    altLine: "M360 318 C420 320 470 320 520 318",
    zones: {
      core: { cx: 366, cy: 272, rx: 88, ry: 13, rot: 4 },
      back: { cx: 366, cy: 260, rx: 88, ry: 11, rot: 4 },
      hip: { cx: 456, cy: 284, rx: 20, ry: 14, rot: 0 },
      thigh: seg([458, 284], [548, 290], 14),
      lowerLeg: seg([548, 290], [612, 294], 12),
      shoulderArm: seg([278, 252], [254, 292], 11, 0.9)
    }
  },
  quadruped: {
    segments: [
      { from: [312, 240], to: [304, 292], width: 22 },
      { from: [488, 246], to: [498, 292], width: 30 },
      { from: [498, 292], to: [556, 294], width: 22 }
    ],
    trunk:
      "M308 226 C300 226 298 238 308 246 C360 254 430 256 488 252 C500 251 500 234 488 228 C430 220 360 218 308 226 Z",
    neck: { from: [310, 244], to: [292, 252], width: 18 },
    head: { cx: 278, cy: 256, r: 22 },
    surface: { x: 160, y: 300, w: 460 },
    zones: {
      back: { cx: 398, cy: 230, rx: 84, ry: 13, rot: 0 },
      core: { cx: 398, cy: 250, rx: 84, ry: 11, rot: 0 },
      hip: { cx: 492, cy: 250, rx: 20, ry: 15, rot: 0 },
      thigh: seg([488, 246], [498, 292], 14),
      lowerLeg: seg([498, 292], [556, 294], 11),
      shoulderArm: seg([312, 240], [304, 292], 11, 0.9)
    }
  },
  sideLying: {
    segments: [
      { from: [472, 284], to: [560, 286], width: 30 },
      { from: [560, 286], to: [636, 288], width: 24 },
      { from: [636, 288], to: [660, 286], width: 14 },
      { from: [470, 272], to: [566, 252], width: 30 },
      { from: [566, 252], to: [640, 244], width: 24 },
      { from: [640, 244], to: [662, 244], width: 14 },
      { from: [306, 256], to: [300, 292], width: 22 }
    ],
    trunk:
      "M302 248 C294 256 298 270 316 278 C364 290 424 292 474 286 C492 284 494 266 482 256 C466 244 426 244 380 244 C350 244 318 244 302 248 Z",
    neck: { from: [306, 252], to: [290, 238], width: 20 },
    head: { cx: 276, cy: 230, r: 24 },
    surface: { x: 120, y: 300, w: 560 },
    cue: "M500 250 C520 244 540 248 552 256",
    zones: {
      core: { cx: 392, cy: 264, rx: 80, ry: 14, rot: 4 },
      back: { cx: 392, cy: 280, rx: 80, ry: 12, rot: 4 },
      hip: { cx: 476, cy: 272, rx: 22, ry: 16, rot: -12 },
      thigh: seg([470, 272], [566, 252], 15),
      lowerLeg: seg([566, 252], [640, 244], 12),
      shoulderArm: seg([306, 256], [300, 292], 11, 0.9)
    }
  },
  seated: {
    segments: [
      { from: [332, 286], to: [456, 288], width: 32 },
      { from: [456, 288], to: [584, 288], width: 26 },
      { from: [584, 288], to: [598, 270], width: 14 },
      { from: [338, 220], to: [388, 234], width: 22 },
      { from: [388, 234], to: [448, 252], width: 18 }
    ],
    trunk:
      "M318 208 C312 210 314 226 320 236 C326 254 330 272 332 288 L352 288 C354 270 352 250 350 232 C348 222 348 210 342 206 C334 202 324 203 318 208 Z",
    neck: { from: [332, 208], to: [332, 192], width: 20 },
    head: { cx: 332, cy: 184, r: 23 },
    surface: { x: 150, y: 300, w: 470 },
    cue: "M396 232 C440 238 480 240 520 236",
    zones: {
      core: { cx: 344, cy: 250, rx: 12, ry: 44, rot: 4 },
      back: { cx: 322, cy: 250, rx: 12, ry: 44, rot: -4 },
      hip: { cx: 338, cy: 284, rx: 20, ry: 14, rot: 0 },
      thigh: seg([332, 286], [456, 288], 14),
      lowerLeg: seg([456, 288], [584, 288], 12),
      shoulderArm: seg([338, 220], [388, 234], 11, 0.9)
    }
  },
  sideSeated: {
    segments: [
      { from: [388, 286], to: [330, 290], width: 28 },
      { from: [330, 290], to: [286, 286], width: 22 },
      { from: [404, 222], to: [356, 280], width: 18 },
      { from: [414, 212], to: [440, 170], width: 20 },
      { from: [440, 170], to: [470, 134], width: 17 }
    ],
    trunk:
      "M398 208 C400 210 406 224 410 234 C416 254 414 274 404 288 L384 288 C378 270 380 248 386 230 C390 220 392 210 398 208 Z",
    neck: { from: [410, 214], to: [420, 198], width: 20 },
    head: { cx: 426, cy: 188, r: 23 },
    surface: { x: 200, y: 300, w: 380 },
    cue: "M452 150 C470 132 492 124 512 124",
    zones: {
      core: { cx: 388, cy: 252, rx: 13, ry: 44, rot: 8 },
      back: { cx: 404, cy: 250, rx: 11, ry: 42, rot: 8 },
      hip: { cx: 388, cy: 286, rx: 20, ry: 13, rot: 0 },
      thigh: seg([388, 286], [330, 290], 13),
      lowerLeg: seg([330, 290], [286, 286], 11),
      shoulderArm: seg([414, 212], [440, 170], 11, 0.9)
    }
  },
  standing: {
    segments: [
      { from: [398, 198], to: [402, 246], width: 32 },
      { from: [402, 246], to: [400, 292], width: 26 },
      { from: [400, 292], to: [424, 294], width: 14 },
      { from: [398, 128], to: [410, 98], width: 20 },
      { from: [410, 98], to: [418, 62], width: 16 }
    ],
    trunk:
      "M380 120 C374 122 378 142 384 162 C390 180 394 190 396 200 L416 200 C416 188 412 176 410 158 C408 140 410 126 404 118 C396 112 386 114 380 120 Z",
    neck: { from: [396, 118], to: [396, 102], width: 20 },
    head: { cx: 396, cy: 94, r: 23 },
    surface: { x: 300, y: 300, w: 200 },
    cue: "M450 90 C440 110 432 130 428 150",
    zones: {
      core: { cx: 406, cy: 162, rx: 11, ry: 42, rot: -4 },
      back: { cx: 388, cy: 162, rx: 11, ry: 42, rot: 4 },
      hip: { cx: 400, cy: 200, rx: 18, ry: 14, rot: 0 },
      thigh: seg([398, 198], [402, 246], 14),
      lowerLeg: seg([402, 246], [400, 292], 12),
      shoulderArm: seg([398, 128], [410, 98], 10, 0.9)
    }
  }
};

const BODY_POSITION_POSE: Record<BodyPosition, keyof typeof POSES> = {
  Supine: "supine",
  "Side-Facing": "sideLying",
  "Side-Facing Seated": "sideSeated",
  "Quadruped / Kneeling": "quadruped",
  "Prone / Extension": "prone",
  "Plank / Closed Chain": "plank",
  Seated: "seated",
  "Standing Integration": "standing"
};

const ZONE_ORDER: BodyZone[] = [
  "core",
  "back",
  "hip",
  "thigh",
  "lowerLeg",
  "shoulderArm"
];

type TeachingPlateSvgProps = {
  exerciseName: string;
  bodyPosition: BodyPosition;
  primaryMuscles: MuscleGroupId[];
  secondaryMuscles: MuscleGroupId[];
  stabilizerMuscles: MuscleGroupId[];
};

function TeachingPlateSvg({
  exerciseName,
  bodyPosition,
  primaryMuscles,
  secondaryMuscles,
  stabilizerMuscles
}: TeachingPlateSvgProps) {
  const pose = POSES[BODY_POSITION_POSE[bodyPosition] ?? "supine"];

  const zoneRole = new Map<BodyZone, AnatomyRole>();
  const assign = (muscles: MuscleGroupId[], role: AnatomyRole) => {
    for (const muscle of muscles) {
      const zone = MUSCLE_ZONE[muscle];
      const current = zoneRole.get(zone);
      if (!current || ROLE_PRIORITY[role] > ROLE_PRIORITY[current]) {
        zoneRole.set(zone, role);
      }
    }
  };
  // Lowest priority first so higher roles win on shared zones.
  assign(stabilizerMuscles, "stabilizer");
  assign(secondaryMuscles, "secondary");
  assign(primaryMuscles, "primary");

  const overlays = ZONE_ORDER.map((zone) => {
    const role = zoneRole.get(zone);
    const anchor = pose.zones[zone];
    if (!role || !anchor) {
      return null;
    }
    return { zone, role, anchor };
  })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => ROLE_PRIORITY[a.role] - ROLE_PRIORITY[b.role]);

  const activeRoles = new Set(overlays.map((item) => item.role));

  return (
    <svg
      className="teaching-plate-svg"
      viewBox="0 0 780 360"
      role="img"
      aria-label={`${exerciseName} ${bodyPosition} teaching diagram`}
    >
      <defs>
        <marker
          id="cue-arrow"
          markerHeight="9"
          markerWidth="9"
          orient="auto"
          refX="7"
          refY="3"
        >
          <path d="M0,0 L0,6 L8,3 z" fill="#1f5c57" />
        </marker>
        <linearGradient id="plate-paper" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fffaf2" />
          <stop offset="100%" stopColor="#efe4d5" />
        </linearGradient>
        <linearGradient id="plate-body" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#7c8b86" />
          <stop offset="100%" stopColor="#5d6b67" />
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

      {pose.surface ? (
        <g>
          <rect
            x={pose.surface.x}
            y={pose.surface.y}
            width={pose.surface.w}
            height="16"
            rx="8"
            fill="#d8c7b5"
          />
          <rect
            x={pose.surface.x}
            y={pose.surface.y - 4}
            width={pose.surface.w}
            height="6"
            rx="3"
            fill="#e7dac9"
          />
        </g>
      ) : null}

      <g
        fill="none"
        stroke="url(#plate-body)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {pose.segments.map((s, index) => (
          <path
            key={`seg-${index}`}
            d={`M${s.from[0]} ${s.from[1]} L${s.to[0]} ${s.to[1]}`}
            strokeWidth={s.width}
            opacity={s.faint ? 0.9 : 1}
          />
        ))}
      </g>
      <path d={pose.trunk} fill="url(#plate-body)" />
      <path
        d={`M${pose.neck.from[0]} ${pose.neck.from[1]} L${pose.neck.to[0]} ${pose.neck.to[1]}`}
        stroke="url(#plate-body)"
        strokeWidth={pose.neck.width}
        strokeLinecap="round"
      />
      <circle
        cx={pose.head.cx}
        cy={pose.head.cy}
        r={pose.head.r}
        fill="url(#plate-body)"
      />

      {overlays.map(({ zone, role, anchor }) => {
        const style = ROLE_STYLES[role];
        return (
          <ellipse
            key={`zone-${zone}`}
            cx={anchor.cx}
            cy={anchor.cy}
            rx={anchor.rx}
            ry={anchor.ry}
            transform={`rotate(${anchor.rot} ${anchor.cx} ${anchor.cy})`}
            fill={style.fill}
            stroke={style.stroke}
            strokeWidth={2}
            strokeDasharray={style.dashed ? "4 3" : undefined}
          />
        );
      })}

      {pose.cue ? (
        <path
          d={pose.cue}
          fill="none"
          markerEnd="url(#cue-arrow)"
          stroke="#1f5c57"
          strokeDasharray="8 7"
          strokeWidth="4"
        />
      ) : null}
      {pose.altLine ? (
        <path
          d={pose.altLine}
          fill="none"
          stroke="#1f5c57"
          strokeDasharray="8 7"
          strokeWidth="3"
          opacity="0.6"
        />
      ) : null}

      <g>
        {(["primary", "secondary", "stabilizer"] as AnatomyRole[])
          .filter((role) => activeRoles.has(role))
          .map((role, index) => {
            const style = ROLE_STYLES[role];
            const y = 40 + index * 22;
            return (
              <g key={`legend-${role}`}>
                <rect
                  x="636"
                  y={y - 11}
                  width="18"
                  height="14"
                  rx="4"
                  fill={style.fill}
                  stroke={style.stroke}
                  strokeWidth="1.5"
                  strokeDasharray={style.dashed ? "3 2" : undefined}
                />
                <text className="teaching-plate-legend" x="662" y={y}>
                  {style.label}
                </text>
              </g>
            );
          })}
      </g>

      <text className="teaching-plate-title" x="40" y="54">
        {exerciseName}
      </text>
      <text className="teaching-plate-subtitle" x="40" y="76">
        {bodyPosition}
      </text>
    </svg>
  );
}
