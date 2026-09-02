import Link from 'next/link';
import { STAGES } from '@/content/projects';

/**
 * Holding page. The designed home (pipeline rail, six service cards, what we
 * run, client directory, journal) replaces this once those sections are
 * settled. Credibility first is the standing instruction for that page.
 *
 * The stage row stays monochrome: services carry colour, stages never do.
 */
export default function Home() {
  return (
    <div className="wrap">
      <section className="homehero">
        <h1 className="mk">texxen</h1>
        <p className="line t-disp">Brand systems that ship, and keep shipping.</p>
        <p className="sub">
          Strategy and identity at the front, then the sites, campaigns, systems and dashboards that keep
          the brand running after the deck is closed.
        </p>
        <div className="go">
          <Link href="/work/" className="cta t-ui">see the work</Link>
        </div>
      </section>

      <ol className="pipeline" aria-label="The five stages of the pipeline">
        {STAGES.map((stage, i) => (
          <li key={stage} style={{ display: 'contents' }}>
            {i > 0 && <span className="dash" aria-hidden="true" />}
            <span className="step">
              <span className="nm">{stage}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
