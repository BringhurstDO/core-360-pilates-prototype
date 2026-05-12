import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="info-card">
        <p className="eyebrow">Not Found</p>
        <h1>Exercise not found</h1>
        <p className="detail-summary">
          This exercise entry does not exist in the current seed library.
        </p>
        <Link className="primary-button" href="/exercises">
          Return to library
        </Link>
      </section>
    </main>
  );
}
