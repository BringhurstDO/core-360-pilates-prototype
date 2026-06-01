"use client";

import { useState } from "react";
import { AnatomyTeachingPanel } from "@/components/anatomy-teaching-panel";
import { ExerciseImageGallery } from "@/components/exercise-image-gallery";
import { ExerciseTeachingDiagram } from "@/components/exercise-teaching-diagram";
import { PrototypeLabel } from "@/components/prototype-label";
import { ExerciseRecord } from "@/lib/exercise-types";

type ExerciseDetailModesProps = {
  exercise: ExerciseRecord;
};

type DetailMode = "instructor" | "client";

export function ExerciseDetailModes({ exercise }: ExerciseDetailModesProps) {
  const [mode, setMode] = useState<DetailMode>(
    exercise.display.audienceMode === "client" ? "client" : "instructor"
  );

  return (
    <div className="content-panel">
      <section className="info-card">
        <div className="detail-mode-header">
          <div>
            <p className="eyebrow">Content Mode</p>
            <div className="label-row">
              <PrototypeLabel>Instructor View vs Client View</PrototypeLabel>
            </div>
            <h2 className="mode-title">Review the exercise from two content angles.</h2>
          </div>
          <div
            className="mode-toggle"
            role="tablist"
            aria-label="Exercise content mode"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "instructor"}
              className={`mode-button${mode === "instructor" ? " is-active" : ""}`}
              onClick={() => setMode("instructor")}
            >
              Instructor View
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "client"}
              className={`mode-button${mode === "client" ? " is-active" : ""}`}
              onClick={() => setMode("client")}
            >
              Client View
            </button>
          </div>
        </div>
      </section>

      <ExerciseImageGallery images={exercise.media?.images} />

      {mode === "instructor" ? (
        <InstructorDetail exercise={exercise} />
      ) : (
        <ClientDetail exercise={exercise} />
      )}
    </div>
  );
}

function InstructorDetail({ exercise }: ExerciseDetailModesProps) {
  const executionSteps = exercise.teaching.executionSteps?.length
    ? exercise.teaching.executionSteps
    : [exercise.teaching.execution];
  const pairsWellWith = exercise.programming?.pairsWellWith ?? [];
  const precautions = exercise.safety?.precautions ?? [];

  return (
    <>
      <ExerciseTeachingDiagram exercise={exercise} />

      <section className="info-card">
        <h2>Anatomy</h2>
        <AnatomyTeachingPanel anatomy={exercise.anatomy} />
      </section>

      <section className="info-card">
        <h2>Execution Details</h2>
        <ol className="instruction-list">
          {executionSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="taxonomy-block">
          <h3>Breath pattern</h3>
          <p>{exercise.teaching.breathPattern}</p>
        </div>
      </section>

      <section className="info-card">
        <h2>Teaching Notes</h2>
        <div className="two-column-sections">
          <div>
            <h3>Teaching cues</h3>
            <ul className="instruction-list unordered">
              {exercise.teaching.cues.map((cue) => (
                <li key={cue}>{cue}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Programming context</h3>
            <div className="taxonomy-block">
              <h3>Focus</h3>
              <p>{exercise.programming?.focus ?? "Not specified yet."}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Use it when</h3>
              <p>{exercise.programming?.useCase ?? "Not specified yet."}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Core 360 sequence</h3>
              <p>{exercise.programming?.sequenceNotes ?? "Not specified yet."}</p>
            </div>
            <div className="taxonomy-block">
              <h3>Pairs well with</h3>
              <p>{pairsWellWith.length ? pairsWellWith.join(", ") : "Not specified yet."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-card">
        <h2>Common Mistakes</h2>
        <ul className="instruction-list unordered">
          {exercise.teaching.commonMistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </section>

      <div className="two-column-sections">
        <section className="info-card">
          <h2>Progressions & Regressions</h2>
          <div className="taxonomy-block">
            <h3>Progressions</h3>
            <ul className="instruction-list unordered">
              {exercise.teaching.progressions.map((progression) => (
                <li key={progression}>{progression}</li>
              ))}
            </ul>
          </div>
          <div className="taxonomy-block">
            <h3>Modifications</h3>
            <ul className="instruction-list unordered">
              {exercise.teaching.modifications.map((modification) => (
                <li key={modification}>{modification}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="info-card">
          <h2>Client Guidance Reference</h2>
          <div className="taxonomy-block">
            <h3>Entry guidance</h3>
            <p>{exercise.safety?.entryGuidance ?? "Not specified yet."}</p>
          </div>
          <div className="taxonomy-block">
            <h3>Precautions</h3>
            <ul className="instruction-list unordered">
              {precautions.length > 0 ? (
                precautions.map((precaution) => (
                  <li key={precaution}>{precaution}</li>
                ))
              ) : (
                <li>No specific precautions recorded yet.</li>
              )}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

function ClientDetail({ exercise }: ExerciseDetailModesProps) {
  const clientSetup = exercise.clientContent?.setup ?? exercise.teaching.setup;
  const simpleSteps = exercise.clientContent?.simpleSteps?.length
    ? exercise.clientContent.simpleSteps
    : exercise.teaching.executionSteps ?? [exercise.teaching.execution];
  const helpfulAdjustments = exercise.clientContent?.helpfulAdjustments?.length
    ? exercise.clientContent.helpfulAdjustments
    : exercise.teaching.modifications;
  const safetyNotes = exercise.clientContent?.safetyNotes ?? exercise.safety?.precautions ?? [];

  return (
    <>
      <section className="info-card">
        <h2>Setup</h2>
        <p>{clientSetup}</p>
      </section>

      <section className="info-card">
        <h2>Simple Steps</h2>
        <ol className="instruction-list">
          {simpleSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <div className="two-column-sections">
        <section className="info-card">
          <h2>How It Should Feel</h2>
          <div className="taxonomy-block">
            <h3>Where you should feel it</h3>
            <p>{exercise.anatomy.whereYouShouldFeelIt ?? exercise.anatomy.primaryMusclesText}</p>
          </div>
          <div className="taxonomy-block">
            <h3>Where you should not feel it</h3>
            <p>{exercise.anatomy.whereYouShouldNotFeelIt ?? "Not specified yet."}</p>
          </div>
        </section>

        <section className="info-card">
          <h2>Helpful Adjustments</h2>
          <ul className="instruction-list unordered">
            {helpfulAdjustments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="info-card">
        <h2>Safety Notes & Modifications</h2>
        <div className="two-column-sections">
          <div>
            <h3>Safety notes</h3>
            <ul className="instruction-list unordered">
              {safetyNotes.length > 0 ? (
                safetyNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))
              ) : (
                <li>No specific safety notes recorded yet.</li>
              )}
            </ul>
          </div>
          <div>
            <h3>Modifications</h3>
            <ul className="instruction-list unordered">
              {exercise.teaching.modifications.map((modification) => (
                <li key={modification}>{modification}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
