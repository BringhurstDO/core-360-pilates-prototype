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
    fill: "rgba(31, 92, 87, 0.74)",
    stroke: "#123f3b",
    className: "region-primary",
    label: "Primary"
  },
  secondary: {
    fill: "rgba(200, 117, 77, 0.66)",
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
    front: ["M82 112 C88 102 116 102 122 112 L116 176 C110 184 94 184 88 176 Z"]
  },
  obliques: {
    front: [
      "M69 116 C77 111 84 113 89 124 L86 174 C80 176 73 171 68 160 Z",
      "M135 116 C127 111 120 113 115 124 L118 174 C124 176 131 171 136 160 Z"
    ],
    back: [
      "M276 118 C286 111 294 116 296 128 L292 174 C284 175 278 168 274 158 Z",
      "M335 118 C325 111 317 116 315 128 L319 174 C327 175 333 168 337 158 Z"
    ]
  },
  "hip-flexors": {
    front: ["M83 178 C91 170 113 170 121 178 L116 203 L102 195 L88 203 Z"]
  },
  quadriceps: {
    front: [
      "M78 200 C88 195 99 199 101 214 L97 314 L75 314 Z",
      "M105 214 C107 199 118 195 128 200 L131 314 L109 314 Z"
    ]
  },
  adductors: {
    front: [
      "M98 204 C103 210 105 232 103 306 L93 306 C93 250 94 220 98 204 Z",
      "M108 204 C113 220 114 250 113 306 L103 306 C101 232 103 210 108 204 Z"
    ]
  },
  glutes: {
    back: [
      "M283 174 C292 166 304 168 307 181 L306 204 C298 214 285 207 282 194 Z",
      "M309 181 C312 168 324 166 333 174 L334 194 C331 207 318 214 310 204 Z"
    ]
  },
  hamstrings: {
    back: [
      "M282 204 C293 199 304 204 304 220 L299 318 L277 318 Z",
      "M312 220 C312 204 323 199 334 204 L339 318 L317 318 Z"
    ]
  },
  calves: {
    front: [
      "M76 314 C88 309 98 318 95 342 L91 352 L76 352 Z",
      "M111 342 C108 318 118 309 130 314 L130 352 L115 352 Z"
    ],
    back: [
      "M277 314 C289 307 301 318 298 342 L292 352 L277 352 Z",
      "M318 342 C315 318 327 307 339 314 L339 352 L324 352 Z"
    ]
  },
  "spinal-erectors": {
    back: [
      "M296 82 C302 88 303 118 302 170 L300 226 C294 218 292 188 292 150 C292 113 292 92 296 82 Z",
      "M314 82 C318 92 318 113 318 150 C318 188 316 218 310 226 L308 170 C307 118 308 88 314 82 Z"
    ]
  },
  lats: {
    back: [
      "M270 92 C282 88 295 100 296 118 L292 180 C281 176 272 160 266 136 Z",
      "M340 92 C328 88 315 100 314 118 L318 180 C329 176 338 160 344 136 Z"
    ]
  },
  deltoids: {
    front: [
      "M50 82 C62 72 75 78 79 91 C72 104 60 108 50 99 Z",
      "M154 82 C142 72 129 78 125 91 C132 104 144 108 154 99 Z"
    ],
    back: [
      "M254 82 C266 72 280 78 283 91 C276 104 264 108 254 99 Z",
      "M356 82 C344 72 330 78 327 91 C334 104 346 108 356 99 Z"
    ]
  },
  triceps: {
    back: [
      "M251 104 C263 108 269 120 267 140 L261 181 C251 174 247 154 248 132 Z",
      "M359 104 C347 108 341 120 343 140 L349 181 C359 174 363 154 362 132 Z"
    ]
  },
  biceps: {
    front: [
      "M49 104 C61 108 67 121 64 142 L58 180 C49 173 46 154 47 132 Z",
      "M155 104 C143 108 137 121 140 142 L146 180 C155 173 158 154 157 132 Z"
    ]
  },
  pecs: {
    front: [
      "M72 84 C84 76 100 79 102 94 L99 120 C86 120 76 112 70 100 Z",
      "M132 84 C120 76 104 79 102 94 L105 120 C118 120 128 112 134 100 Z"
    ]
  },
  "shoulder-stabilizers": {
    front: [
      "M64 98 C73 103 78 116 76 134 L68 150 C61 139 59 118 64 98 Z",
      "M140 98 C131 103 126 116 128 134 L136 150 C143 139 145 118 140 98 Z"
    ],
    back: [
      "M268 95 C280 100 289 113 288 132 L277 151 C268 140 264 116 268 95 Z",
      "M342 95 C330 100 321 113 322 132 L333 151 C342 140 346 116 342 95 Z"
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
