import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceMark, { stageInk } from '@/components/ServiceMark';
import type { Service } from '@/content/projects';

/**
 * /services, built from the Applications board of the same name. Two groups,
 * six lines, the two stage rules the only colour on the page.
 */

export const metadata: Metadata = {
  title: 'Services',
  description: 'Two lines produce a thing in design and build. Four hold a responsibility in operate, and that group is the business.',
};

const BUILT: [Service, string, string][] = [
  ['brand', 'brand', 'The identity, and the document set an institution is handed. Built once in the design stage, then kept current as part of operating.'],
  ['web', 'web', 'The public surface and what sits behind it: the site a vendor-risk reader checks, the portals a function uses.'],
];

const RUN: [Service, string, string][] = [
  ['systems', 'systems', 'The operational systems the function runs on, monitored and kept up; a stated allowance of change work per month; incident response within a stated window; code and credentials held in your name.'],
  ['intel', 'intelligence', 'The reporting layer kept running and read: dashboards maintained, a monthly analysis in plain words, models retrained on a stated schedule.'],
  ['content', 'content', 'What the function publishes and sends, produced in your voice against a calendar texxen keeps, with the measurement of each piece.'],
  ['demand', 'demand', 'Channels run and spend managed inside a budget you set, with weekly reporting and a monthly recommendation on where the next peso goes. Never a percentage of spend.'],
];

function Lines({ items }: { items: [Service, string, string][] }) {
  return (
    <div className="glines">
      {items.map(([k, name, body]) => (
        <div key={k}>
          <div className="nm">
            <ServiceMark service={k} size={20} weight={1.75} />
            {name}
          </div>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <div className="art">
      <section className="routetop">
        <h1 className="boardh1" style={{ maxWidth: '20ch' }}>What is built, and what is run.</h1>
        <p className="boarddek">
          Two headings, not six, and they are stages of the pipeline. Two lines produce a thing in
          design and build. Four hold a responsibility in operate, and that group is the business.
          No line has a colour of its own; the stage does. There are no tiers, no packages and no
          price table for engagements; the scope, the cadence, the term and the exit are published
          instead.
        </p>
      </section>

      <section className="sec">
        <div className="groups">
          <div>
            <h2 className="sechead grule" style={{ ['--rule' as string]: stageInk('design') }}>
              Built, in the design and build stages
            </h2>
            <Lines items={BUILT} />
            <p className="bcap-s" style={{ marginTop: 24 }}>
              The front of the pipeline. Built in the design stage, beside the architecture.
            </p>
          </div>
          <div>
            <h2 className="sechead grule" style={{ ['--rule' as string]: stageInk('operate') }}>
              Run, in the operate stage
            </h2>
            <Lines items={RUN} />
            <p className="bcap-s" style={{ marginTop: 24 }}>
              Every operated line carries a weekly note and a monthly review.
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <h2 className="sechead">Three ways an engagement is paid for</h2>
        <div className="g3">
          <div>
            <h3 className="bui" style={{ margin: 0 }}>The build fee</h3>
            <p className="bcap" style={{ marginTop: 9 }}>
              Scoped from the diagnostic and set at the proposal. Not published. Covers the design
              and build stages against a signed scope.
            </p>
          </div>
          <div>
            <h3 className="bui" style={{ margin: 0 }}>The operated retainer</h3>
            <p className="bcap" style={{ marginTop: 9 }}>
              A fixed monthly fee scoped to what is covered, never to headcount or spend. For
              institutions the term is annual or longer, with continuity and exit obligations.{' '}
              <span className="brk">[institutional terms, question 4]</span>
            </p>
          </div>
          <div>
            <h3 className="bui" style={{ margin: 0 }}>A product deployment</h3>
            <p className="bcap" style={{ marginTop: 9 }}>
              A starting price per deployment into your own cloud account, published on the
              product’s own site. From <span className="brk">[PHP amount]</span>. texxen operates it
              there on the retainer, which is the standard shape; self-run where your policy
              requires it, priced separately.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 80 }}>
        <div className="g2">
          <div>
            <h3 className="sechead">How an engagement starts</h3>
            <p className="bcap" style={{ fontSize: 14 }}>
              With the diagnostic: two to three weeks, a fixed fee, and a document that pairs every
              defect with its fix and names the layers worth doing after the first. It can end
              there.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 20 }}>
              <a href="mailto:luiscabmadrid@gmail.com?subject=Starting%20the%20pipeline" className="pill">
                start the pipeline
              </a>
              <Link href="/pipeline/" className="tlink">the five stages</Link>
            </div>
          </div>
          <div>
            <h3 className="sechead">Ownership, on every engagement</h3>
            <ul>
              <li className="bcap" style={{ padding: '11px 0', borderTop: '1px solid var(--color-hairline)' }}>
                Code and credentials for what is built are held in your name.
              </li>
              <li className="bcap" style={{ padding: '11px 0', borderTop: '1px solid var(--color-hairline)' }}>
                On a product, the instance runs in your own cloud account and is yours, with your
                data, your configuration and your extensions. texxen keeps the product core.{' '}
                <span className="brk">[proposed, awaiting confirmation]</span>
              </li>
              <li className="bcap" style={{ padding: '11px 0', borderTop: '1px solid var(--color-hairline)' }}>
                Source code escrow where your risk function requires it.
              </li>
              <li className="bcap" style={{ padding: '11px 0', borderTop: '1px solid var(--color-hairline)' }}>
                An exit that works: the record and the running systems leave with you.{' '}
                <span className="brk">[exit obligations, question 4]</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
