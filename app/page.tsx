import type { Metadata } from 'next';

/**
 * The home page, built from Home5B on the Applications board: the decided
 * first screen (entry 21, the case-study carousel).
 *
 * The board draws one state of the carousel and brackets the rest, so this is
 * that state: the section rail, the opening line, the slide, the product rail
 * and the related-party caption. Rotation is not wired up yet, because there
 * is no second slide to rotate to; the motion terms recorded at entry 21 go in
 * with the second case study.
 */

export const metadata: Metadata = {
  description:
    'texxen runs the pipeline from diagnosis through to operating, for banks, lenders and public-sector collecting entities.',
};

const SECTIONS = ['case studies', 'who this is for', 'what runs', 'how the work runs', 'assessment', 'the record'];

const PRODUCTS = ['Open CI', 'repo AI', '[product]', '[product]', '[product]', '[product]'];

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

        <div className="h5main">
          <h1 className="h5open">
            Recovery runs on systems assembled from parts nobody owns end to end. We run the
            pipeline from diagnosis through to operating.{' '}
            <span className="brk" style={{ fontSize: 17 }}>
              [opening line reopened, question 45. Candidates on Opening]
            </span>
          </h1>

          <div className="h5bar">
            <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'inline-block', width: 40, height: 2, background: 'var(--color-operate-ink)' }} />
              <span className="t-meta" style={{ fontSize: 12, color: 'var(--color-operate-ink)' }}>
                In production, one at a time
              </span>
            </span>
            <span className="t-meta t-num" style={{ fontSize: 12, color: 'var(--color-muted)' }}>01 / 06</span>
          </div>

          <div className="h5cover">
            <span style={{ position: 'absolute', left: 28, top: 24, display: 'flex', gap: 10 }}>
              <span style={{ display: 'inline-block', width: 132, height: 14, background: 'var(--color-faint)' }} />
              <span style={{ display: 'inline-block', width: 82, height: 14, background: 'var(--color-faint)' }} />
            </span>
            <span className="t-meta brk" style={{ fontSize: 12 }}>
              [CASE STUDY COVER &middot; 16:6.4 &middot; REDACTED AT SOURCE &middot; Q44]
            </span>
          </div>

          <div className="h5slidefoot">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div className="t-disp" style={{ fontSize: 34, lineHeight: 1.1 }}>Open CI</div>
              <div className="brk" style={{ fontSize: 18, lineHeight: 1.5, maxWidth: '44ch' }}>
                [what it does, in the buyer’s words]
              </div>
              <div className="t-ui" style={{ fontSize: 15, marginTop: 4 }}>
                In production since <span className="brk">[year]</span> &middot; PH, Dubai, Singapore
              </div>
            </div>
            <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span className="t-disp t-num" style={{ fontSize: 34 }}>12</span>
                <span className="bcap" style={{ fontSize: 14 }}>systems in production</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span className="t-disp t-num" style={{ fontSize: 34 }}>3</span>
                <span className="bcap" style={{ fontSize: 14 }}>countries’ operations</span>
              </span>
            </div>
          </div>

          <div className="h5rail2">
            {PRODUCTS.map((p, i) => (
              <div key={`${p}-${i}`} className="pcard" aria-current={i === 0 ? 'true' : undefined}>
                <div className="top" />
                <div className="in">
                  <div className={`t${p.startsWith('[') ? ' brk' : ''}`}>{p}</div>
                  <div className="by">by texxen</div>
                  {i === 0 ? (
                    <div className="prog">
                      <i style={{ width: '46%' }} />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <p className="bcap" style={{ fontSize: 14, margin: 0 }}>
            Built for and run at S.P. Madrid, in the same group. Related party. Every cover on this
            carousel is the same operation, so the line travels with every slide, not with the set.
          </p>
        </div>
      </div>
      <div style={{ height: 96 }} />
    </div>
  );
}
