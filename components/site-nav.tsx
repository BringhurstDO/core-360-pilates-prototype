import Link from "next/link";

export function SiteNav() {
  return (
    <header className="site-nav-shell">
      <div className="site-nav">
        <Link className="site-brand" href="/">
          Core 360 Prototype
        </Link>
        <nav className="site-links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/exercises">Exercise Library</Link>
          <Link href="/feedback-guide">Feedback Guide</Link>
        </nav>
      </div>
    </header>
  );
}
