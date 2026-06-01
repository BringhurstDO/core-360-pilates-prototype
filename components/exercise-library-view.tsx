"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AUDIENCE_MODES,
  BODY_POSITIONS,
  EQUIPMENT,
  LEVELS,
  MOVEMENT_COMPASS_TAGS,
  MOVEMENT_CATEGORIES,
  PROGRAMMING_WHEEL_SLOTS,
  ExerciseRecord,
  formatMuscleGroup,
  MuscleGroupId
} from "@/lib/exercise-types";
import {
  matchesSourceContentFilter,
  SOURCE_CONTENT_FILTERS,
  SourceContentFilter
} from "@/lib/exercise-source";
import { ExerciseCard } from "@/components/exercise-card";

type ExerciseLibraryViewProps = {
  exercises: ExerciseRecord[];
};

type FilterState = {
  search: string;
  sourceContent: SourceContentFilter;
  equipment: string;
  bodyPosition: string;
  level: string;
  movementCategory: string;
  movementCompass: string;
  programmingWheelSlot: string;
  muscleGroup: string;
  audienceMode: string;
};

const initialFilters: FilterState = {
  search: "",
  sourceContent: "All",
  equipment: "All",
  bodyPosition: "All",
  level: "All",
  movementCategory: "All",
  movementCompass: "All",
  programmingWheelSlot: "All",
  muscleGroup: "All",
  audienceMode: "All"
};

export function ExerciseLibraryView({ exercises }: ExerciseLibraryViewProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const muscleGroups = useMemo<MuscleGroupId[]>(() => {
    return Array.from(
      new Set(
        exercises.flatMap((exercise) => [
          ...(exercise.anatomy.primaryMuscleIds ?? []),
          ...(exercise.anatomy.secondaryMuscleIds ?? []),
          ...(exercise.anatomy.stabilizerMuscleIds ?? [])
        ])
      )
    ).sort();
  }, [exercises]);

  const filteredExercises = useMemo(() => {
    const normalizedSearch = filters.search.trim().toLowerCase();

    return exercises.filter((exercise) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [
          exercise.display.name,
          exercise.display.summary ?? "",
          exercise.source.originalName,
          exercise.source.section,
          exercise.classification.equipment.join(" "),
          exercise.classification.bodyPosition,
          exercise.classification.level,
          exercise.classification.movementCategory,
          exercise.classification.movementCompass.join(" "),
          exercise.classification.programmingWheelSlot ?? "",
          exercise.display.audienceMode ?? "both",
          exercise.anatomy.primaryMusclesText,
          exercise.anatomy.stabilizersText,
          exercise.teaching.breathPattern,
          exercise.source.manual,
          exercise.source.sourceStatus,
          ...(exercise.source.reviewQuestions ?? []),
          ...(exercise.anatomy.primaryMuscleIds ?? []).map(formatMuscleGroup),
          ...(exercise.anatomy.secondaryMuscleIds ?? []).map(formatMuscleGroup),
          ...(exercise.anatomy.stabilizerMuscleIds ?? []).map(formatMuscleGroup)
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesEquipment =
        filters.equipment === "All" ||
        (exercise.classification.equipment as readonly string[]).includes(filters.equipment);
      const matchesSourceContent = matchesSourceContentFilter(
        exercise,
        filters.sourceContent
      );
      const matchesPosition =
        filters.bodyPosition === "All" ||
        exercise.classification.bodyPosition === filters.bodyPosition;
      const matchesLevel =
        filters.level === "All" || exercise.classification.level === filters.level;
      const matchesCategory =
        filters.movementCategory === "All" ||
        exercise.classification.movementCategory === filters.movementCategory;
      const matchesCompass =
        filters.movementCompass === "All" ||
        (exercise.classification.movementCompass as readonly string[]).includes(
          filters.movementCompass
        );
      const matchesWheel =
        filters.programmingWheelSlot === "All" ||
        exercise.classification.programmingWheelSlot === filters.programmingWheelSlot;
      const selectedMuscleGroup = muscleGroups.find(
        (group) => formatMuscleGroup(group) === filters.muscleGroup
      );
      const matchesMuscleGroup =
        filters.muscleGroup === "All" ||
        (selectedMuscleGroup
          ? [
              ...(exercise.anatomy.primaryMuscleIds ?? []),
              ...(exercise.anatomy.secondaryMuscleIds ?? []),
              ...(exercise.anatomy.stabilizerMuscleIds ?? [])
            ].includes(selectedMuscleGroup)
          : false);
      const exerciseAudienceMode = exercise.display.audienceMode ?? "both";
      const matchesAudienceMode =
        filters.audienceMode === "All" ||
        exerciseAudienceMode === "both" ||
        exerciseAudienceMode === filters.audienceMode;

      return (
        matchesSearch &&
        matchesSourceContent &&
        matchesEquipment &&
        matchesPosition &&
        matchesLevel &&
        matchesCategory &&
        matchesCompass &&
        matchesWheel &&
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
            <h1>Browse the exercise review library.</h1>
            <p className="detail-summary">
              Review exact Core 360 manual imports separately from prototype
              sample content before the next category import.
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
          Search and filter exercises by source status, teaching context,
          equipment, position, level, Core 360 movement category, and anatomy
          emphasis.
        </div>
        <div className="filters-grid">
          <label className="field-group">
            <span className="field-label">Search</span>
            <input
              className="text-input"
              type="search"
              placeholder="Search exercises, muscles, or equipment"
              value={filters.search}
              onChange={(event) => updateFilter("search", event.target.value)}
            />
          </label>

          <FilterSelect
            label="Source status"
            value={filters.sourceContent}
            options={SOURCE_CONTENT_FILTERS}
            onChange={(value) =>
              updateFilter("sourceContent", value as SourceContentFilter)
            }
          />
          <FilterSelect
            label="Equipment"
            value={filters.equipment}
            options={["All", ...EQUIPMENT]}
            onChange={(value) => updateFilter("equipment", value)}
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
            label="Movement compass"
            value={filters.movementCompass}
            options={["All", ...MOVEMENT_COMPASS_TAGS]}
            onChange={(value) => updateFilter("movementCompass", value)}
          />
          <FilterSelect
            label="Programming wheel"
            value={filters.programmingWheelSlot}
            options={["All", ...PROGRAMMING_WHEEL_SLOTS]}
            onChange={(value) => updateFilter("programmingWheelSlot", value)}
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
