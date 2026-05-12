"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  APPARATUS,
  AUDIENCE_MODES,
  BODY_POSITIONS,
  LEVELS,
  MOVEMENT_CATEGORIES,
  ExerciseRecord,
  formatMuscleGroup,
  MuscleGroupId
} from "@/lib/exercise-types";
import { ExerciseCard } from "@/components/exercise-card";
import { PrototypeLabel } from "@/components/prototype-label";

type ExerciseLibraryViewProps = {
  exercises: ExerciseRecord[];
};

type FilterState = {
  search: string;
  apparatus: string;
  bodyPosition: string;
  level: string;
  movementCategory: string;
  muscleGroup: string;
  audienceMode: string;
};

const initialFilters: FilterState = {
  search: "",
  apparatus: "All",
  bodyPosition: "All",
  level: "All",
  movementCategory: "All",
  muscleGroup: "All",
  audienceMode: "All"
};

export function ExerciseLibraryView({ exercises }: ExerciseLibraryViewProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const muscleGroups = useMemo<MuscleGroupId[]>(() => {
    return Array.from(
      new Set(exercises.flatMap((exercise) => exercise.classification.muscleGroups))
    ).sort();
  }, [exercises]);

  const filteredExercises = useMemo(() => {
    const normalizedSearch = filters.search.trim().toLowerCase();

    return exercises.filter((exercise) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [
          exercise.display.name,
          exercise.display.summary,
          exercise.classification.apparatus,
          exercise.classification.bodyPosition,
          exercise.classification.level,
          exercise.classification.movementCategory,
          exercise.display.audienceMode,
          ...exercise.anatomy.primaryMuscles,
          ...exercise.classification.muscleGroups.map(formatMuscleGroup)
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesApparatus =
        filters.apparatus === "All" ||
        exercise.classification.apparatus === filters.apparatus;
      const matchesPosition =
        filters.bodyPosition === "All" ||
        exercise.classification.bodyPosition === filters.bodyPosition;
      const matchesLevel =
        filters.level === "All" || exercise.classification.level === filters.level;
      const matchesCategory =
        filters.movementCategory === "All" ||
        exercise.classification.movementCategory === filters.movementCategory;
      const selectedMuscleGroup = muscleGroups.find(
        (group) => formatMuscleGroup(group) === filters.muscleGroup
      );
      const matchesMuscleGroup =
        filters.muscleGroup === "All" ||
        (selectedMuscleGroup
          ? exercise.classification.muscleGroups.includes(selectedMuscleGroup)
          : false);
      const matchesAudienceMode =
        filters.audienceMode === "All" ||
        exercise.display.audienceMode === "both" ||
        exercise.display.audienceMode === filters.audienceMode;

      return (
        matchesSearch &&
        matchesApparatus &&
        matchesPosition &&
        matchesLevel &&
        matchesCategory &&
        matchesMuscleGroup &&
        matchesAudienceMode
      );
    });
  }, [exercises, filters]);

  function updateFilter<K extends keyof FilterState>(key: K, value: FilterState[K]) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function resetFilters() {
    setFilters(initialFilters);
  }

  return (
    <main className="page-shell">
      <section className="page-header">
        <div className="library-topbar">
          <div>
            <p className="eyebrow">Structured Exercise Library</p>
            <div className="label-row">
              <PrototypeLabel>Sample content</PrototypeLabel>
            </div>
            <h1>Browse the sample exercise library.</h1>
            <p className="detail-summary">
              This small set is here to review the library structure, filters,
              and exercise detail format before the full Core 360 content set is
              created.
            </p>
          </div>
          <div className="header-actions">
            <Link className="secondary-button" href="/">
              Overview
            </Link>
            <button className="primary-button" type="button" onClick={resetFilters}>
              Reset filters
            </button>
          </div>
        </div>
      </section>

      <section className="filters-panel">
        <div className="filter-caption">
          Search and filter the sample exercises by teaching context, apparatus,
          position, level, movement category, and anatomy emphasis.
        </div>
        <div className="filters-grid">
          <label className="field-group">
            <span className="field-label">Search</span>
            <input
              className="text-input"
              type="search"
              placeholder="Search exercises, muscles, or apparatus"
              value={filters.search}
              onChange={(event) => updateFilter("search", event.target.value)}
            />
          </label>

          <FilterSelect
            label="Apparatus"
            value={filters.apparatus}
            options={["All", ...APPARATUS]}
            onChange={(value) => updateFilter("apparatus", value)}
          />
          <FilterSelect
            label="Body position"
            value={filters.bodyPosition}
            options={["All", ...BODY_POSITIONS]}
            onChange={(value) => updateFilter("bodyPosition", value)}
          />
          <FilterSelect
            label="Level"
            value={filters.level}
            options={["All", ...LEVELS]}
            onChange={(value) => updateFilter("level", value)}
          />
          <FilterSelect
            label="Movement category"
            value={filters.movementCategory}
            options={["All", ...MOVEMENT_CATEGORIES]}
            onChange={(value) => updateFilter("movementCategory", value)}
          />
        </div>
        <div
          className="filters-grid"
          style={{ marginTop: "0.9rem", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
        >
          <FilterSelect
            label="Muscle group"
            value={filters.muscleGroup}
            options={["All", ...muscleGroups.map(formatMuscleGroup)]}
            onChange={(value) => updateFilter("muscleGroup", value)}
          />
          <FilterSelect
            label="Audience mode"
            value={filters.audienceMode}
            options={["All", ...AUDIENCE_MODES]}
            onChange={(value) => updateFilter("audienceMode", value)}
          />
        </div>
      </section>

      {filteredExercises.length > 0 ? (
        <section className="exercise-grid">
          {filteredExercises.map((exercise) => (
            <ExerciseCard key={exercise.display.id} exercise={exercise} />
          ))}
        </section>
      ) : (
        <section className="info-card empty-state">
          <h2>No exercises match the current filters.</h2>
          <p>
            Try clearing a filter or searching more broadly. This prototype only
            includes a small sample set, so some combinations will not have a
            match yet.
          </p>
          <button className="secondary-button" type="button" onClick={resetFilters}>
            Clear all filters
          </button>
        </section>
      )}
    </main>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="field-group">
      <span className="field-label">{label}</span>
      <select
        className="select-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
