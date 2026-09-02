import Link from 'next/link';

/**
 * Three column grid: wordmark centred, CTA right. The left column is empty
 * while the only route is the work index, which the wordmark already goes to.
 * Services, pipeline, studio and journal go back in as those routes are built.
 */
export default function SiteHeader() {
  return (
    <div className="wrap">
      <nav className="sitenav">
        <div className="left t-ui" />
        <Link href="/" className="t-mark wordmark">texxen</Link>
        <div className="right t-ui">
          <a href="mailto:luiscabmadrid@gmail.com?subject=Starting%20the%20pipeline" className="cta">
            start the pipeline
          </a>
        </div>
      </nav>
    </div>
  );
}
