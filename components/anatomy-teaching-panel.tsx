"use client";

import { useMemo, useState } from "react";
import {
  formatMuscleGroup,
  MuscleGroupId,
  ExerciseRecord
} from "@/lib/exercise-types";
import {
  AnatomyOverlay,
  AnatomyRole,
  getAnatomyRole
} from "@/components/anatomy-overlay";
import { PrototypeLabel } from "@/components/prototype-label";

type AnatomyTeachingPanelProps = {
  anatomy: ExerciseRecord["anatomy"];
};

export function AnatomyTeachingPanel({ anatomy }: AnatomyTeachingPanelProps) {
  const [hoveredMuscle, setHoveredMuscle] = useState<MuscleGroupId | null>(null);
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroupId | null>(null);

  const emphasizedMuscle = hoveredMuscle ?? selectedMuscle;
  const primaryMuscles = anatomy.overlay?.primary ?? anatomy.primaryMuscleIds ?? [];
  const secondaryMuscles =
    anatomy.overlay?.secondary ?? anatomy.secondaryMuscleIds ?? [];
  const stabilizers =
    anatomy.overlay?.stabilizers ?? anatomy.stabilizerMuscleIds ?? [];

  const activeRole = useMemo(
    () =>
      emphasizedMuscle
        ? getAnatomyRole(emphasizedMuscle, {
            primaryMuscles,
            secondaryMuscles,
            stabilizers
          })
        : null,
    [emphasizedMuscle, primaryMuscles, secondaryMuscles, stabilizers]
  );

  function toggleMuscle(muscle: MuscleGroupId) {
    setSelectedMuscle((current) => (current === muscle ? null : muscle));
  }

  return (
    <div className="anatomy-panel">
      <div className="two-column-sections anatomy-panel-grid">
        <div className="anatomy-visual-stack">
          <div className="label-row">
            <PrototypeLabel>Simplified anatomy</PrototypeLabel>
          </div>
          <AnatomyOverlay
            primaryMuscles={primaryMuscles}
            secondaryMuscles={secondaryMuscles}
            stabilizers={stabilizers}
            viewMode={anatomy.overlay?.preferredView}
            emphasizedMuscle={emphasizedMuscle}
            selectedMuscle={selectedMuscle}
            onMuscleEnter={setHoveredMuscle}
            onMuscleLeave={() => setHoveredMuscle(null)}
            onMuscleToggle={toggleMuscle}
          />

          <div className="anatomy-callout" aria-live="polite">
            {emphasizedMuscle && activeRole ? (
              <>
                <p className="eyebrow">Active Region</p>
                <p className="anatomy-callout-title">
                  {formatMuscleGroup(emphasizedMuscle)}
                </p>
                <p className="detail-summary">
                  {roleLabel(activeRole)} emphasis
                </p>
              </>
            ) : (
              <>
                <p className="eyebrow">Interactive Anatomy</p>
                <p className="detail-summary">
                  Select a highlighted region or list item to compare the
                  anatomy emphasis for this exercise. This diagram is simplified
                  and not medical-grade.
                </p>
              </>
            )}
          </div>
        </div>

        <div className="anatomy-text-stack">
          <AnatomyGroupList
            title="Primary muscle groups"
            role="primary"
            muscles={primaryMuscles}
            emphasizedMuscle={emphasizedMuscle}
            selectedMuscle={selectedMuscle}
            onEnter={setHoveredMuscle}
            onLeave={() => setHoveredMuscle(null)}
            onToggle={toggleMuscle}
          />
          <AnatomyGroupList
            title="Secondary muscle groups"
            role="secondary"
            muscles={secondaryMuscles}
            emphasizedMuscle={emphasizedMuscle}
            selectedMuscle={selectedMuscle}
            onEnter={setHoveredMuscle}
            onLeave={() => setHoveredMuscle(null)}
            onToggle={toggleMuscle}
          />
          <AnatomyGroupList
            title="Stabilizer groups"
            role="stabilizer"
            muscles={stabilizers}
            emphasizedMuscle={emphasizedMuscle}
            selectedMuscle={selectedMuscle}
            onEnter={setHoveredMuscle}
            onLeave={() => setHoveredMuscle(null)}
            onToggle={toggleMuscle}
          />
        </div>
      </div>

      <div className="two-column-sections anatomy-notes-grid">
        <div className="taxonomy-block">
          <h3>Primary muscles</h3>
          <p>{anatomy.primaryMusclesText}</p>
        </div>
        <div className="taxonomy-block">
          <h3>Secondary muscles</h3>
          <p>{anatomy.secondaryMusclesText ?? "Not specified in source."}</p>
        </div>
        <div className="taxonomy-block">
          <h3>Stabilizers</h3>
          <p>{anatomy.stabilizersText}</p>
        </div>
        <div className="taxonomy-block">
          <h3>Core 360 anatomy regions</h3>
          <p>{anatomy.regions.join(", ") || "Not specified."}</p>
        </div>
        <div className="taxonomy-block">
          <h3>Body scan focus</h3>
          <p>{anatomy.bodyScanFocus?.join(", ") ?? "Not specified."}</p>
        </div>
        <div className="taxonomy-block">
          <h3>Where you should feel it</h3>
          <p>{anatomy.whereYouShouldFeelIt ?? "Not specified yet."}</p>
        </div>
        <div className="taxonomy-block">
          <h3>Where you should not feel it</h3>
          <p>{anatomy.whereYouShouldNotFeelIt ?? "Not specified yet."}</p>
        </div>
      </div>
    </div>
  );
}

type AnatomyGroupListProps = {
  title: string;
  role: AnatomyRole;
  muscles: MuscleGroupId[];
  emphasizedMuscle: MuscleGroupId | null;
  selectedMuscle: MuscleGroupId | null;
  onEnter: (muscle: MuscleGroupId) => void;
  onLeave: () => void;
  onToggle: (muscle: MuscleGroupId) => void;
};

function AnatomyGroupList({
  title,
  role,
  muscles,
  emphasizedMuscle,
  selectedMuscle,
  onEnter,
  onLeave,
  onToggle
}: AnatomyGroupListProps) {
  return (
    <div className="taxonomy-block">
      <h3>{title}</h3>
      <div className="muscle-list">
        {muscles.map((muscle) => {
          const isActive = emphasizedMuscle === muscle;
          const isSelected = selectedMuscle === muscle;

          return (
            <button
              key={`${role}-${muscle}`}
              type="button"
              className={`muscle-item muscle-item-${role}${
                isActive ? " is-active" : ""
              }${isSelected ? " is-selected" : ""}`}
              onMouseEnter={() => onEnter(muscle)}
              onMouseLeave={onLeave}
              onFocus={() => onEnter(muscle)}
              onBlur={onLeave}
              onClick={() => onToggle(muscle)}
              aria-pressed={isSelected}
            >
              <span className="muscle-item-name">{formatMuscleGroup(muscle)}</span>
              <span className="muscle-item-role">{roleLabel(role)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function roleLabel(role: AnatomyRole) {
  if (role === "stabilizer") {
    return "Stabilizer";
  }

  return role === "primary" ? "Primary" : "Secondary";
}
