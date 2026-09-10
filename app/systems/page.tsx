import type { Metadata } from 'next';
import Link from 'next/link';

/**
 * /systems, built from the Applications board of the same name: the register
 * of what texxen built and runs in production.
 *
 * Nine rows. The three applied AI systems are deliberately one entry that says
 * it covers three, which is how the count reaches twelve. Every system is
 * described by what it does, never by a product name.
 */

export const metadata: Metadata = {
  title: 'Systems',
  description: 'Twelve systems in production, built by texxen and in daily use across three countries’ operations.',
};

const SECTIONS = ['twelve in production', 'four of them, running', 'what runs', 'seeing one run'];

const FIGURES: [string, string, boolean][] = [
  ['12', 'systems in production', false],
  ['3', 'countries’ operations', false],
  ['8', 'service lines running on them', false],
  ['[year]', 'earliest still in production', true],
];

const CAPTURES = [
  'Case queue, at the real interface',
  'Field application, offline state',
  'Extraction, before and after',
  'Analytics, one operation',
];

const REGISTER: [string, string][] = [
  ['Customer management with integrated telephony', 'Case records and dialler in one system, used by agents on live calls'],
  ['Offline-capable field application', 'Route optimisation, geocoding, live tracking and model-based success scoring, for teams working away from connectivity'],
  ['Messaging infrastructure', 'SMS on a registered sender ID and branded business messaging'],
  ['Inbound and continuity telephony', 'A fixed-cost inbound line with a metered failover path'],
  ['API integration layer', 'Real-time synchronisation with client systems'],
  ['Three applied AI systems', 'Response drafting and categorisation, information retrieval at scale, audio-documented process narration'],
  ['Assessment and training AI', 'Scenario-based scoring of staff performance against a defined rubric'],
  ['Document extraction AI', 'Structured data pulled from unstructured PDFs'],
  ['Central analytics repository', 'Call and message log analytics, idle time and signal metrics, exposed to management and to clients'],
];

export default function Systems() {
  return (
    <div className="art">
      <div className="h5" style={{ paddingTop: 40 }}>
        <ol className="h5rail">
          {SECTIONS.map((s, i) => (
            <li key={s} aria-current={i === 0 ? 'true' : undefined}>
              <span className="tick" />
              <a href={`#sec-${i}`}>{s}</a>
            </li>
          ))}
          <li style={{ display: 'block', marginTop: 10 }}>
            <span className="bcap" style={{ fontSize: 13 }}>
              The section in view. Nothing else moves on scroll.
            </span>
          </li>
        </ol>

        <div className="h5main">
          <section id="sec-0">
            <h1 className="boardh1">Twelve systems in production.</h1>
            <p className="boarddek">
              Built by texxen and in daily use across the Philippines, Dubai and Singapore
              operations of S.P. Madrid, a collections business in the same group. Described by what
              each one does, never by a product name.
            </p>

            <div className="g4" style={{ marginTop: 40 }}>
              {FIGURES.map(([v, l, bracket]) => (
                <div key={l}>
                  <div className={`t-disp t-num${bracket ? ' brk' : ''}`} style={{ fontSize: 44, lineHeight: 1 }}>{v}</div>
                  <div className="bcap" style={{ marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="sec-1" className="sec">
            <h2 className="sechead">Four of them, running</h2>
            <div className="g4">
              {CAPTURES.map((c) => (
                <figure key={c} style={{ margin: 0 }}>
                  <div className="capslot"><span className="t-meta brk" style={{ fontSize: 10 }}>16:10</span></div>
                  <figcaption className="bcap" style={{ fontSize: 12, marginTop: 8 }}>{c}</figcaption>
                </figure>
              ))}
            </div>
            <p className="bcap" style={{ fontSize: 12, marginTop: 16 }}>
              Redacted at source. Counts, states and the shape of the workload stay; anything
              identifying a person or an account does not reach the image.
            </p>
          </section>

          <section id="sec-2" className="sec">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20 }}>
              <h2 className="sechead" style={{ margin: 0 }}>What runs, by what it does</h2>
              <span className="bcap" style={{ fontSize: 12 }}>Names first. Hover a row for what it does.</span>
            </div>

            <div className="reg-head">
              <span className="t-meta">System</span>
              <span className="t-meta">In production</span>
              <span className="t-meta">Runs in</span>
            </div>
            <ul className="register">
              {REGISTER.map(([name, does]) => (
                <li key={name}>
                  <div>
                    <span className="rn">{name}</span>
                    <span className="rd">{does}</span>
                  </div>
                  <span className="bcap-s t-num">since <span className="brk">[year]</span></span>
                  <span className="bcap-s">PH &middot; Dubai &middot; Singapore</span>
                </li>
              ))}
            </ul>
            <p className="bcap" style={{ fontSize: 12, marginTop: 16 }}>
              The three applied AI systems are one entry covering three, which is how nine rows
              carry twelve systems. systems: runs an operation. intelligence: reads and reports.
            </p>
          </section>

          <section id="sec-3" className="sec" style={{ paddingBottom: 80 }}>
            <div className="g2" style={{ gridTemplateColumns: '1fr 1.1fr' }}>
              <div>
                <h2 className="sechead">Seeing one run</h2>
                <p className="bcap" style={{ fontSize: 14 }}>
                  A walkthrough at the real interface, with live data redacted at the source rather
                  than in the image. Counts, states and the shape of the workload stay.
                </p>
                <p className="bcap" style={{ marginTop: 14 }}>
                  Which of the twelve are deployable on their own is on the products page. The rest
                  are built into an engagement through the pipeline.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 20, flexWrap: 'wrap' }}>
                  <a href="mailto:luiscabmadrid@gmail.com?subject=A%20walkthrough" className="pill">
                    ask for a walkthrough
                  </a>
                  <Link href="/products/" className="tlink">deployable products</Link>
                </div>
              </div>
              <div>
                <p className="bcap-s">
                  S.P. Madrid is a company in the same group as texxen. The record above is the
                  deepest one texxen holds, and it is not an arm’s length client relationship.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
