import type { Metadata } from 'next';
import Link from 'next/link';

/**
 * /products, built from the Applications board of the same name.
 *
 * Colour: products are neutral, per entry 23. The board still carries the
 * older "a product takes the colour of its line" block, which entry 23
 * superseded a day later; that block is drawn here in ink and is flagged as
 * open rather than settled.
 *
 * OpenCI's line is filled from the case study. The rest of the list is
 * question 36, and the prices question 37.
 */

export const metadata: Metadata = {
  title: 'Products',
  description: 'Deployable now. Systems texxen already built and already runs, deployed into your own cloud account and operated by texxen.',
};

const PRODUCTS = [
  {
    name: 'OpenCI',
    line: 'The field data collection infrastructure a credit investigation operation runs on.',
    since: '[year]',
  },
  {
    name: 'repo AI',
    line: '[one sentence on what it does, in the words the buyer’s own team uses]',
    since: '[year]',
    bracketLine: true,
  },
];

const HOW = [
  ['Where it runs', 'In your own cloud account, not ours. The data stays inside your perimeter and never reaches texxen, which answers a vendor assessment before it is asked.'],
  ['Operated by texxen', 'The standard shape. texxen runs the instance for you on a monthly engagement, with the same weekly note as any operated line. Self-run where your policy requires it, priced separately.'],
  ['Priced upfront, by the deployment', 'A starting price per deployment is published on each product’s site, and operating it is a separate monthly engagement. Not per seat, not per case.'],
  ['One version, everyone', 'Every instance runs the current release or the one before it. Nobody is left on a frozen copy, which is what makes the roadmap worth anything.'],
  ['Configuration, not a private version', 'Differences between clients are settings: workflow rules, thresholds, templates, hours. Anything genuinely unique attaches at a defined edge and never touches the core.'],
  ['What you own, and how you leave', 'The instance, your data, your configuration, and any extension built for you. texxen keeps the product core.'],
];

export default function Products() {
  return (
    <div className="art">
      <section className="routetop">
        <h1 className="boardh1">Deployable now.</h1>
        <p className="boarddek">
          A product is a system texxen has already built and already runs, deployed into your own
          cloud account and operated by texxen from there.
        </p>
      </section>

      <section className="sec">
        <div className="g3">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="pbox">
              <div className="t-disp" style={{ fontSize: 28, lineHeight: 1.1 }}>{p.name}</div>
              <div className="t-meta" style={{ fontSize: 9, color: 'var(--color-muted)', marginTop: 6 }}>by texxen</div>
              <p className={`bcap${p.bracketLine ? ' brk' : ''}`} style={{ marginTop: 16 }}>{p.line}</p>
              <p className="bcap-s" style={{ marginTop: 14 }}>
                In production since <span className="brk">{p.since}</span>. Running across
                Philippines, Dubai and Singapore operations.
              </p>
              <p className="bui" style={{ fontSize: 13.5, marginTop: 16 }}>
                from <span className="brk">[PHP amount]</span> per deployment
              </p>
              <div style={{ display: 'flex', gap: 20, marginTop: 18, flexWrap: 'wrap' }}>
                <span className="tlink brk">scope and deployment</span>
                <span className="tlink brk">its own site</span>
              </div>
            </div>
          ))}
          <div className="pbox" style={{ borderStyle: 'dashed' }}>
            <div className="t-disp brk" style={{ fontSize: 22, lineHeight: 1.2 }}>[further products]</div>
            <p className="bcap-s" style={{ marginTop: 14 }}>
              Which of the twelve systems in production become products is question 36. The two
              working labels shown are not final names; naming is question 37.
            </p>
            <p style={{ marginTop: 16 }}>
              <Link href="/systems/" className="tlink">the twelve systems</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <h2 className="sechead">How a product is bought</h2>
        <div className="g3">
          {HOW.map(([head, body]) => (
            <div key={head}>
              <h3 className="bui" style={{ margin: 0 }}>{head}</h3>
              <p className="bcap" style={{ marginTop: 9 }}>
                {body}
                {head === 'What you own, and how you leave' ? (
                  <> <span className="brk">[proposed, awaiting confirmation]</span></>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 80 }}>
        <div className="g2">
          <div>
            <h3 className="sechead">A product carries no colour</h3>
            <p className="bcap" style={{ fontSize: 14 }}>
              Products are told apart by name, not by hue. Sector, where it is shown at all, is an
              ink text chip: banking, fintech, public-sector receivables.
            </p>
            <p className="bcap-s brk" style={{ marginTop: 12 }}>
              [open: the board still says a product takes the colour of its line, which entry 23
              superseded. Left neutral here and kept open]
            </p>
          </div>
          <div>
            <h3 className="sechead">When no product fits</h3>
            <p className="bcap" style={{ fontSize: 14 }}>
              The pipeline builds where nothing deployable exists. Diagnosis comes first either way,
              and a diagnostic can end with a product rather than a build.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 20, flexWrap: 'wrap' }}>
              <a href="mailto:luiscabmadrid@gmail.com?subject=Starting%20the%20pipeline" className="pill">
                start the pipeline
              </a>
              <Link href="/pipeline/" className="tlink">how the work runs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
