import Link from "next/link";
import { PrototypeLabel } from "@/components/prototype-label";

export default function HomePage() {
  return (
    <main className="landing-shell">
      <section className="hero-panel">
        <p className="eyebrow">Pilates Education MVP</p>
        <div className="label-row">
          <PrototypeLabel>Sample content</PrototypeLabel>
          <PrototypeLabel>Simplified anatomy</PrototypeLabel>
        </div>
        <h1>Core 360 review prototype</h1>
        <p className="hero-copy">
          This early prototype explores an anatomy-forward Pilates education
          platform for instructors. It is meant to review structure, content
          priorities, and navigation before final design, imagery, or production
          content are created.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" href="/exercises">
            Browse Exercise Library
          </Link>
          <Link className="secondary-button" href="/feedback-guide">
            Review Feedback Guide
          </Link>
        </div>
      </section>

      <section className="prototype-grid">
        <article className="info-card">
          <p className="eyebrow">Core 360 Concept</p>
          <h2>An exercise library for teaching context.</h2>
          <p className="detail-summary">
            The working concept is a structured Pilates exercise library with
            anatomy emphasis, teaching notes, programming context, and a simpler
            client-facing layer later.
          </p>
        </article>

        <article className="info-card">
          <p className="eyebrow">Instructor Focus</p>
          <h2>Built around instructor education.</h2>
          <p className="detail-summary">
            This version focuses on how instructors review an exercise:
            classifications, anatomy emphasis, execution notes, teaching cues,
            common mistakes, and programming context.
          </p>
        </article>

        <article className="info-card">
          <p className="eyebrow">Mode Split</p>
          <h2>Instructor View vs Client View</h2>
          <p className="detail-summary">
            Each exercise has a detailed instructor view and a simpler client
            view. The goal is to test whether that content split feels useful
            before adding more exercises.
          </p>
        </article>

        <article className="info-card">
          <p className="eyebrow">Prototype Limits</p>
          <h2>Useful for review, not final design.</h2>
          <p className="detail-summary">
            Exercise copy is sample content, anatomy is simplified and not
            medical-grade, and images are placeholders. The purpose is to review
            the product structure, not final visuals or clinical accuracy.
          </p>
        </article>
      </section>
    </main>
  );
}
