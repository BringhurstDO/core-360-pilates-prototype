"use client";

import {
  AnatomyViewMode,
  formatMuscleGroup,
  MuscleGroupId
} from "@/lib/exercise-types";

type AnatomyOverlayProps = {
  primaryMuscles: MuscleGroupId[];
  secondaryMuscles: MuscleGroupId[];
  stabilizers: MuscleGroupId[];
  viewMode?: AnatomyViewMode;
  emphasizedMuscle?: MuscleGroupId | null;
  selectedMuscle?: MuscleGroupId | null;
  onMuscleEnter?: (muscle: MuscleGroupId) => void;
  onMuscleLeave?: () => void;
  onMuscleToggle?: (muscle: MuscleGroupId) => void;
};

export type AnatomyRole = "primary" | "secondary" | "stabilizer";
type AnatomyView = "front" | "back";
type RegionDefinition = Partial<Record<AnatomyView, string[]>>;

const anatomySourceUrl =
  "https://commons.wikimedia.org/wiki/File:Muscles_front_and_back.svg";
const anatomyLicenseUrl = "https://creativecommons.org/licenses/by-sa/4.0/";

const anatomyAsset = {
  href: "/muscles-front-and-back.svg",
  width: 406.99026,
  height: 354.43411,
  viewBoxes: {
    front: "0 0 203.49513 354.43411",
    back: "203.49513 0 203.49513 354.43411"
  }
} as const;

const roleStyles: Record<
  AnatomyRole,
  { fill: string; stroke: string; className: string; label: string }
> = {
  primary: {
    fill: "rgba(31, 92, 87, 0.62)",
    stroke: "#123f3b",
    className: "region-primary",
    label: "Primary"
  },
  secondary: {
    fill: "rgba(200, 117, 77, 0.56)",
    stroke: "#925437",
    className: "region-secondary",
    label: "Secondary"
  },
  stabilizer: {
    fill: "rgba(72, 112, 142, 0.28)",
    stroke: "#486f8c",
    className: "region-stabilizer",
    label: "Stabilizer"
  }
};

const regionMap: Record<MuscleGroupId, RegionDefinition> = {
  abdominals: {
    front: [
      "M89 104 C94 100 101 99 103 104 L103 168 C99 174 92 172 89 165 Z",
      "M104 104 C106 99 114 100 119 104 L119 165 C116 172 108 174 104 168 Z"
    ]
  },
  obliques: {
    front: [
      "M75 111 C82 110 87 119 88 132 L85 164 C80 163 75 157 72 145 Z",
      "M133 111 C126 110 121 119 120 132 L123 164 C128 163 133 157 136 145 Z"
    ],
    back: [
      "M283 112 C290 111 294 119 295 132 L292 164 C287 163 282 157 279 145 Z",
      "M328 112 C321 111 317 119 316 132 L319 164 C324 163 329 157 332 145 Z"
    ]
  },
  "hip-flexors": {
    front: [
      "M88 169 C94 165 101 168 102 176 L99 199 C92 196 88 185 88 169 Z",
      "M119 169 C113 165 106 168 105 176 L108 199 C115 196 119 185 119 169 Z"
    ]
  },
  quadriceps: {
    front: [
      "M82 199 C91 195 98 202 99 218 L95 297 C91 307 82 307 78 297 Z",
      "M109 218 C110 202 117 195 126 199 L130 297 C126 307 117 307 113 297 Z"
    ]
  },
  adductors: {
    front: [
      "M96 203 C101 214 103 238 101 294 L94 294 C93 247 93 220 96 203 Z",
      "M111 203 C114 220 114 247 113 294 L106 294 C104 238 106 214 111 203 Z"
    ]
  },
  glutes: {
    back: [
      "M286 171 C294 165 304 169 306 181 L305 198 C299 207 288 204 285 193 Z",
      "M310 181 C312 169 322 165 330 171 L331 193 C328 204 317 207 311 198 Z"
    ]
  },
  hamstrings: {
    back: [
      "M284 204 C293 200 301 207 301 223 L297 306 C293 314 284 314 280 305 Z",
      "M314 223 C314 207 322 200 331 204 L335 305 C331 314 322 314 318 306 Z"
    ]
  },
  calves: {
    front: [
      "M80 303 C90 300 96 311 94 333 L90 349 L80 349 Z",
      "M114 333 C112 311 118 300 128 303 L128 349 L118 349 Z"
    ],
    back: [
      "M281 303 C291 299 298 311 296 333 L291 349 L281 349 Z",
      "M319 333 C317 311 324 299 334 303 L334 349 L324 349 Z"
    ]
  },
  "spinal-erectors": {
    back: [
      "M299 83 C303 99 303 128 302 166 L300 220 C296 212 294 186 294 152 C294 115 295 92 299 83 Z",
      "M312 83 C316 92 317 115 317 152 C317 186 315 212 311 220 L309 166 C308 128 308 99 312 83 Z"
    ]
  },
  lats: {
    back: [
      "M274 94 C284 91 293 102 294 119 L291 171 C282 168 275 154 270 136 Z",
      "M337 94 C327 91 318 102 317 119 L320 171 C329 168 336 154 341 136 Z"
    ]
  },
  deltoids: {
    front: [
      "M55 82 C64 75 75 80 78 91 C72 100 61 103 54 96 Z",
      "M152 82 C143 75 132 80 129 91 C135 100 146 103 153 96 Z"
    ],
    back: [
      "M258 82 C267 75 278 80 281 91 C275 100 264 103 257 96 Z",
      "M353 82 C344 75 333 80 330 91 C336 100 347 103 354 96 Z"
    ]
  },
  triceps: {
    back: [
      "M255 104 C263 109 267 121 265 139 L260 174 C253 168 250 151 251 132 Z",
      "M355 104 C347 109 343 121 345 139 L350 174 C357 168 360 151 359 132 Z"
    ]
  },
  biceps: {
    front: [
      "M54 104 C62 110 65 122 63 140 L58 174 C51 168 49 151 50 132 Z",
      "M153 104 C145 110 142 122 144 140 L149 174 C156 168 158 151 157 132 Z"
    ]
  },
  pecs: {
    front: [
      "M76 85 C86 79 99 82 101 95 L98 116 C88 116 80 109 75 99 Z",
      "M130 85 C120 79 107 82 105 95 L108 116 C118 116 126 109 131 99 Z"
    ]
  },
  "shoulder-stabilizers": {
    front: [
      "M68 97 C75 103 78 115 76 130 L69 144 C64 135 63 116 68 97 Z",
      "M138 97 C131 103 128 115 130 130 L137 144 C142 135 143 116 138 97 Z"
    ],
    back: [
      "M273 96 C282 101 288 113 287 129 L278 145 C271 136 268 116 273 96 Z",
      "M337 96 C328 101 322 113 323 129 L332 145 C339 136 342 116 337 96 Z"
    ]
  }
};

export function AnatomyOverlay({
  primaryMuscles,
  secondaryMuscles,
  stabilizers,
  viewMode = "both",
  emphasizedMuscle = null,
  selectedMuscle = null,
  onMuscleEnter,
  onMuscleLeave,
  onMuscleToggle
}: AnatomyOverlayProps) {
  const visibleViews: AnatomyView[] =
    viewMode === "both" ? ["front", "back"] : [viewMode];

  const groupedLegend = [
    { role: "primary" as const, items: primaryMuscles },
    { role: "secondary" as const, items: secondaryMuscles },
    { role: "stabilizer" as const, items: stabilizers }
  ];

  return (
    <div className="anatomy-shell">
      <div className="anatomy-legend">
        {groupedLegend.map(({ role }) => (
          <div key={role} className="legend-key">
            <span className={`legend-swatch ${roleStyles[role].className}`} />
            <span>{roleStyles[role].label}</span>
          </div>
        ))}
      </div>

      <div
        className="anatomy-grid"
        style={{
          gridTemplateColumns:
            visibleViews.length === 1
              ? "minmax(0, 1fr)"
              : "repeat(2, minmax(0, 1fr))"
        }}
      >
        {visibleViews.map((view) => (
          <AnatomyFigure
            key={view}
            view={view}
            primaryMuscles={primaryMuscles}
            secondaryMuscles={secondaryMuscles}
            stabilizers={stabilizers}
            emphasizedMuscle={emphasizedMuscle}
            selectedMuscle={selectedMuscle}
            onMuscleEnter={onMuscleEnter}
            onMuscleLeave={onMuscleLeave}
            onMuscleToggle={onMuscleToggle}
          />
        ))}
      </div>

      <div className="legend-group-list">
        {groupedLegend.map(({ role, items }) => (
          <div key={role} className="legend-group">
            <h3>{roleStyles[role].label}</h3>
            <div className="legend-list">
              {items.length > 0 ? (
                items.map((muscleId) => (
                  <span key={`${role}-${muscleId}`} className="legend-pill">
                    {formatMuscleGroup(muscleId)}
                  </span>
                ))
              ) : (
                <span className="legend-pill subdued-pill">None selected</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="anatomy-source-note">
        Anatomy base adapted from{" "}
        <a href={anatomySourceUrl} target="_blank" rel="noreferrer">
          Muscles front and back.svg
        </a>{" "}
        by OpenStax, Tomas Kebert, and umimeto.org, licensed under{" "}
        <a href={anatomyLicenseUrl} target="_blank" rel="noreferrer">
          CC BY-SA 4.0
        </a>
        . Highlight regions are simplified for prototype review.
      </p>
    </div>
  );
}

type AnatomyFigureProps = {
  view: AnatomyView;
  primaryMuscles: MuscleGroupId[];
  secondaryMuscles: MuscleGroupId[];
  stabilizers: MuscleGroupId[];
  emphasizedMuscle?: MuscleGroupId | null;
  selectedMuscle?: MuscleGroupId | null;
  onMuscleEnter?: (muscle: MuscleGroupId) => void;
  onMuscleLeave?: () => void;
  onMuscleToggle?: (muscle: MuscleGroupId) => void;
};

function AnatomyFigure({
  view,
  primaryMuscles,
  secondaryMuscles,
  stabilizers,
  emphasizedMuscle,
  selectedMuscle,
  onMuscleEnter,
  onMuscleLeave,
  onMuscleToggle
}: AnatomyFigureProps) {
  return (
    <div className="figure-card">
      <h3>{view === "front" ? "Front View" : "Back View"}</h3>
      <svg
        className="figure-svg"
        viewBox={anatomyAsset.viewBoxes[view]}
        role="img"
        aria-label={`${view} anatomy diagram`}
      >
        <image
          href={anatomyAsset.href}
          width={anatomyAsset.width}
          height={anatomyAsset.height}
          preserveAspectRatio="xMidYMid meet"
          className="anatomy-base-image"
        />

        <MuscleLayer
          view={view}
          muscles={stabilizers}
          role="stabilizer"
          emphasizedMuscle={emphasizedMuscle}
          selectedMuscle={selectedMuscle}
          onMuscleEnter={onMuscleEnter}
          onMuscleLeave={onMuscleLeave}
          onMuscleToggle={onMuscleToggle}
        />
        <MuscleLayer
          view={view}
          muscles={secondaryMuscles}
          role="secondary"
          emphasizedMuscle={emphasizedMuscle}
          selectedMuscle={selectedMuscle}
          onMuscleEnter={onMuscleEnter}
          onMuscleLeave={onMuscleLeave}
          onMuscleToggle={onMuscleToggle}
        />
        <MuscleLayer
          view={view}
          muscles={primaryMuscles}
          role="primary"
          emphasizedMuscle={emphasizedMuscle}
          selectedMuscle={selectedMuscle}
          onMuscleEnter={onMuscleEnter}
          onMuscleLeave={onMuscleLeave}
          onMuscleToggle={onMuscleToggle}
        />
      </svg>
    </div>
  );
}

type MuscleLayerProps = {
  view: AnatomyView;
  muscles: MuscleGroupId[];
  role: AnatomyRole;
  emphasizedMuscle?: MuscleGroupId | null;
  selectedMuscle?: MuscleGroupId | null;
  onMuscleEnter?: (muscle: MuscleGroupId) => void;
  onMuscleLeave?: () => void;
  onMuscleToggle?: (muscle: MuscleGroupId) => void;
};

function MuscleLayer({
  view,
  muscles,
  role,
  emphasizedMuscle,
  selectedMuscle,
  onMuscleEnter,
  onMuscleLeave,
  onMuscleToggle
}: MuscleLayerProps) {
  const style = roleStyles[role];

  return (
    <>
      {muscles.flatMap((muscleId) => {
        const paths = regionMap[muscleId][view] ?? [];

        return paths.map((path, index) => (
          <path
            key={`${role}-${view}-${muscleId}-${index}`}
            d={path}
            fill={style.fill}
            stroke={style.stroke}
            strokeWidth={
              emphasizedMuscle === muscleId
                ? role === "stabilizer"
                  ? 2.2
                  : 1.7
                : role === "stabilizer"
                  ? 1.2
                  : 0.9
            }
            strokeDasharray={role === "stabilizer" ? "2.5 2" : undefined}
            opacity={
              emphasizedMuscle && emphasizedMuscle !== muscleId ? 0.22 : 1
            }
            className={`${style.className} anatomy-region${
              emphasizedMuscle === muscleId ? " is-emphasized" : ""
            }${selectedMuscle === muscleId ? " is-selected" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={`${formatMuscleGroup(muscleId)} (${style.label}) on ${view} view`}
            aria-pressed={selectedMuscle === muscleId}
            onMouseEnter={() => onMuscleEnter?.(muscleId)}
            onMouseLeave={() => onMuscleLeave?.()}
            onFocus={() => onMuscleEnter?.(muscleId)}
            onBlur={() => onMuscleLeave?.()}
            onClick={() => onMuscleToggle?.(muscleId)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onMuscleToggle?.(muscleId);
              }
            }}
          >
            <title>
              {formatMuscleGroup(muscleId)} - {style.label}
            </title>
          </path>
        ));
      })}
    </>
  );
}

export function getAnatomyRole(
  muscle: MuscleGroupId,
  groups: {
    primaryMuscles: MuscleGroupId[];
    secondaryMuscles: MuscleGroupId[];
    stabilizers: MuscleGroupId[];
  }
): AnatomyRole | null {
  if (groups.primaryMuscles.includes(muscle)) {
    return "primary";
  }

  if (groups.secondaryMuscles.includes(muscle)) {
    return "secondary";
  }

  if (groups.stabilizers.includes(muscle)) {
    return "stabilizer";
  }

  return null;
}
