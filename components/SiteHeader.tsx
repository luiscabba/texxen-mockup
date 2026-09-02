import Link from 'next/link';

/**
 * Nav is a three column grid: links left, wordmark centred, links plus CTA
 * right. Only the routes that exist are listed. Services, pipeline, studio and
 * journal go back in as each of those routes is built.
 */
export default function SiteHeader() {
  return (
    <div className="wrap">
      <nav className="sitenav">
        <div className="left t-ui">
          <Link href="/work/" className="navlink">work</Link>
        </div>
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
