"use client";

import { useMemo, useState } from "react";
import { ExerciseRecord } from "@/lib/exercise-types";
import { formatSourceStatus } from "@/lib/exercise-source";

type ExerciseReviewFeedbackFormProps = {
  exercise: ExerciseRecord;
};

type FeedbackFields = {
  primaryMuscles: string;
  setup: string;
  execution: string;
  breathPattern: string;
  teachingCues: string;
  commonMistakes: string;
  modifications: string;
  progressions: string;
  notes: string;
};

const officeEmail = "office@bringhurstdo.com";

const initialFeedback: FeedbackFields = {
  primaryMuscles: "",
  setup: "",
  execution: "",
  breathPattern: "",
  teachingCues: "",
  commonMistakes: "",
  modifications: "",
  progressions: "",
  notes: ""
};

export function ExerciseReviewFeedbackForm({
  exercise
}: ExerciseReviewFeedbackFormProps) {
  const [feedback, setFeedback] = useState<FeedbackFields>(initialFeedback);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const emailBody = useMemo(
    () => buildFeedbackBody(exercise, feedback),
    [exercise, feedback]
  );

  const emailSubject = `Core 360 review: ${exercise.display.name}`;
  const mailtoHref = `mailto:${officeEmail}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  function updateField(field: keyof FeedbackFields, value: string) {
    setFeedback((current) => ({ ...current, [field]: value }));
    setCopyState("idle");
  }

  async function copyFeedback() {
    try {
      await navigator.clipboard.writeText(emailBody);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <section className="info-card review-feedback-card">
      <h2>Review Feedback</h2>
      <p className="detail-summary">
        Type only what needs to change. If a field is correct, leave it blank or
        write OK as-is. The email button opens a draft addressed to {officeEmail}.
      </p>

      <div className="review-feedback-form">
        <ReviewTextarea
          label="Primary muscles"
          value={feedback.primaryMuscles}
          placeholder="OK as-is, or type corrected primary muscles"
          onChange={(value) => updateField("primaryMuscles", value)}
        />
        <ReviewTextarea
          label="Setup"
          value={feedback.setup}
          placeholder="OK as-is, or type corrected setup wording"
          onChange={(value) => updateField("setup", value)}
        />
        <ReviewTextarea
          label="Execution"
          value={feedback.execution}
          placeholder="OK as-is, or type corrected execution wording"
          onChange={(value) => updateField("execution", value)}
        />
        <ReviewTextarea
          label="Breath pattern"
          value={feedback.breathPattern}
          placeholder="OK as-is, or type corrected breath pattern"
          onChange={(value) => updateField("breathPattern", value)}
        />
        <ReviewTextarea
          label="Teaching cues"
          value={feedback.teachingCues}
          placeholder="OK as-is, or type corrected cues"
          onChange={(value) => updateField("teachingCues", value)}
        />
        <ReviewTextarea
          label="Common mistakes"
          value={feedback.commonMistakes}
          placeholder="OK as-is, or type corrections"
          onChange={(value) => updateField("commonMistakes", value)}
        />
        <ReviewTextarea
          label="Modifications"
          value={feedback.modifications}
          placeholder="OK as-is, or type corrections"
          onChange={(value) => updateField("modifications", value)}
        />
        <ReviewTextarea
          label="Progressions"
          value={feedback.progressions}
          placeholder="OK as-is, or type corrections"
          onChange={(value) => updateField("progressions", value)}
        />
        <ReviewTextarea
          label="Notes"
          value={feedback.notes}
          placeholder="Anything else we should know"
          onChange={(value) => updateField("notes", value)}
        />
      </div>

      <div className="review-feedback-actions">
        <a className="primary-button" href={mailtoHref}>
          Email this feedback
        </a>
        <button className="secondary-button" type="button" onClick={copyFeedback}>
          Copy feedback
        </button>
      </div>

      {copyState === "copied" ? (
        <p className="review-feedback-status">Feedback copied.</p>
      ) : null}
      {copyState === "failed" ? (
        <p className="review-feedback-status">
          Copy did not work in this browser. Use Email this feedback instead.
        </p>
      ) : null}
    </section>
  );
}

type ReviewTextareaProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

function ReviewTextarea({
  label,
  value,
  placeholder,
  onChange
}: ReviewTextareaProps) {
  return (
    <label className="field-group">
      <span className="field-label">{label}</span>
      <textarea
        className="textarea-input"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        rows={3}
      />
    </label>
  );
}

function buildFeedbackBody(exercise: ExerciseRecord, feedback: FeedbackFields) {
  const currentUrl =
    typeof window === "undefined" ? "" : window.location.href;
  const reviewQuestions = exercise.source.reviewQuestions ?? [];

  return [
    "Core 360 Exercise Review",
    "",
    `Exercise: ${exercise.display.name}`,
    `Original manual name: ${exercise.source.originalName}`,
    `Manual/source: ${exercise.source.manual}`,
    `Source page: ${exercise.source.page ? `p. ${exercise.source.page}` : "Not specified"}`,
    `Source section: ${exercise.source.section}`,
    `Source status: ${formatSourceStatus(exercise.source.sourceStatus)}`,
    currentUrl ? `App page: ${currentUrl}` : "",
    "",
    "Review questions:",
    reviewQuestions.length
      ? reviewQuestions.map((question) => `- ${question}`).join("\n")
      : "- No specific review questions listed.",
    "",
    "Feedback:",
    `Primary muscles: ${feedback.primaryMuscles || "[blank]"}`,
    `Setup: ${feedback.setup || "[blank]"}`,
    `Execution: ${feedback.execution || "[blank]"}`,
    `Breath pattern: ${feedback.breathPattern || "[blank]"}`,
    `Teaching cues: ${feedback.teachingCues || "[blank]"}`,
    `Common mistakes: ${feedback.commonMistakes || "[blank]"}`,
    `Modifications: ${feedback.modifications || "[blank]"}`,
    `Progressions: ${feedback.progressions || "[blank]"}`,
    `Notes: ${feedback.notes || "[blank]"}`
  ]
    .filter(Boolean)
    .join("\n");
}
