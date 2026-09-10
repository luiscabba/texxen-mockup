import Link from 'next/link';

/**
 * Three column grid: links left, wordmark centred with the descriptor beneath,
 * links plus the single call to action right. The Sitemap2 bar is systems,
 * products, pipeline, services, work, company. Only routes that exist are
 * rendered: a dead nav link is worse than a missing one, and each goes back in
 * as its route lands. Security stays in the footer and on /company by design.
 */
export default function SiteHeader() {
  return (
    <div className="wrap">
      <nav className="sitenav">
        <div className="left t-ui">
          <Link href="/pipeline/" className="navlink">pipeline</Link>
          <Link href="/services/" className="navlink">services</Link>
        </div>
        <Link href="/" className="markblock" aria-label="texxen, home">
          <span className="t-mark wordmark">texxen</span>
          <span className="descriptor t-meta">Design. Build. Operate</span>
        </Link>
        <div className="right t-ui">
          <Link href="/company/" className="navlink">company</Link>
          <a href="mailto:luiscabmadrid@gmail.com?subject=Starting%20the%20pipeline" className="cta">
            start the pipeline
          </a>
        </div>
      </nav>
    </div>
  );
}
