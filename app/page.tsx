import type { Metadata } from 'next';
import CaseCarousel from '@/components/CaseCarousel';

/**
 * The home page, built from Home5B on the Applications board: the decided
 * first screen (entry 21, the case-study carousel).
 *
 * The section rail is here; the carousel itself is CaseCarousel, which carries
 * the entry 21 motion. Slides come from content/caseStudies.ts: one today, and
 * rotation starts by itself when a second is added.
 */

export const metadata: Metadata = {
  description:
    'texxen runs the pipeline from diagnosis through to operating, for banks, lenders and public-sector collecting entities.',
};

const SECTIONS = ['case studies', 'who this is for', 'what runs', 'how the work runs', 'assessment', 'the record'];

export default function Home() {
  return (
    <div className="art">
      <div className="h5">
        <ol className="h5rail">
          {SECTIONS.map((s, i) => (
            <li key={s} aria-current={i === 0 ? 'true' : undefined}>
              <span className="tick" />
              {s}
            </li>
          ))}
          <li style={{ display: 'block', marginTop: 10 }}>
            <span className="bcap" style={{ fontSize: 13 }}>
              The section in view. Nothing else moves on scroll.
            </span>
          </li>
        </ol>

        <CaseCarousel />
      </div>
      <div style={{ height: 96 }} />
    </div>
  );
}
