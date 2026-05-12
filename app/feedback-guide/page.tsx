import Link from "next/link";
import { PrototypeLabel } from "@/components/prototype-label";

export default function FeedbackGuidePage() {
  return (
    <main className="page-shell">
      <section className="page-header">
        <p className="eyebrow">Feedback Guide</p>
        <div className="label-row">
          <PrototypeLabel>Review prototype</PrototypeLabel>
        </div>
        <h1>Review the structure, not the final design.</h1>
        <p className="detail-summary">
          Please use this guide to react to the product direction, page
          organization, and content model. The current copy, images, and anatomy
          are intentionally provisional.
        </p>
        <div className="header-actions">
          <Link className="primary-button" href="/exercises">
            Go to Exercise Library
          </Link>
          <Link className="secondary-button" href="/">
            Return Home
          </Link>
        </div>
      </section>

      <section className="prototype-grid">
        <article className="info-card">
          <h2>Exercise Page Layout</h2>
          <p className="detail-summary">
            Does the page feel easy to scan? Are the most important teaching
            sections in the right order?
          </p>
        </article>

        <article className="info-card">
          <h2>Instructor vs Client Split</h2>
          <p className="detail-summary">
            Does the toggle feel useful? Is the instructor content deep enough,
            and is the client mode simple enough without losing important safety
            guidance?
          </p>
        </article>

        <article className="info-card">
          <h2>Anatomy Overlay Usefulness</h2>
          <p className="detail-summary">
            The current anatomy is simplified and not medical-grade. Is it still
            useful for teaching structure? What would make it clearer?
          </p>
        </article>

        <article className="info-card">
          <h2>Filter Categories</h2>
          <p className="detail-summary">
            Are apparatus, body position, level, movement category, muscle
            group, and audience mode the right starting filters?
          </p>
        </article>

        <article className="info-card">
          <h2>Missing Content Sections</h2>
          <p className="detail-summary">
            What important teaching or client-facing sections feel absent? Are
            there notes that should appear on every exercise?
          </p>
        </article>

        <article className="info-card">
          <h2>Visual Style Preferences</h2>
          <p className="detail-summary">
            Does the current look feel appropriately educational, premium, calm,
            clinical, warm, or too minimal? What direction should the visual
            identity move next?
          </p>
        </article>

        <article className="info-card">
          <h2>Priority Features</h2>
          <p className="detail-summary">
            After reviewing the prototype, what should come next: more exercises,
            better anatomy, videos, flow building, a client area, or content
            authoring improvements?
          </p>
        </article>
      </section>
    </main>
  );
}
