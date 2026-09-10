import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceMark from '@/components/ServiceMark';
import { stageInk } from '@/components/ServiceMark';
import type { Service } from '@/content/projects';

/**
 * /services. Two headings, not six, and they are stages of the pipeline.
 *
 * Colour: the six lines nest under the stages and take no hue of their own
 * (entry 23), so the only coloured elements here are the two group rules, one
 * per stage group. The marks stay ink, which is their default.
 *
 * No price table for engagements: the scope, the cadence, the term and the
 * exit are published instead. The product starting price lives on the
 * product's own site, so no figure is printed here.
 */

export const metadata: Metadata = {
  title: 'Services',
  description: 'Two lines produce a thing in design and build. Four hold a responsibility in operate, and that group is the business.',
};

const BUILT: { key: Service; body: string }[] = [
  {
    key: 'brand',
    body: 'The identity, and the document set an institution is handed. Built once in the design stage, then kept current as part of operating.',
  },
  {
    key: 'web',
    body: 'The public surface and what sits behind it: the site a vendor-risk reader checks, the portals a function uses.',
  },
];

const RUN: { key: Service; body: string }[] = [
  {
    key: 'systems',
    body: 'The operational systems the function runs on, monitored and kept up; a stated allowance of change work per month; incident response within a stated window; code and credentials held in your name.',
  },
  {
    key: 'intel',
    body: 'The reporting layer kept running and read: dashboards maintained, a monthly analysis in plain words, models retrained on a stated schedule.',
  },
  {
    key: 'content',
    body: 'What the function publishes and sends, produced in your voice against a calendar texxen keeps, with the measurement of each piece.',
  },
  {
    key: 'demand',
    body: 'Channels run and spend managed inside a budget you set, with weekly reporting and a monthly recommendation on where the next peso goes. Never a percentage of spend.',
  },
];

const NAMES: Record<Service, string> = {
  brand: 'brand',
  web: 'web',
  content: 'content',
  demand: 'demand',
  systems: 'systems',
  intel: 'intelligence',
};

function Lines({ items }: { items: { key: Service; body: string }[] }) {
  return (
    <ul className="lines">
      {items.map((l) => (
        <li key={l.key}>
          <div className="linehead">
            <ServiceMark service={l.key} size={20} weight={1.75} />
            <h3>{NAMES[l.key]}</h3>
          </div>
          <p>{l.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  return (
    <>
      <section className="phead art">
        <h1>What is built, and what is run.</h1>
        <p className="dek" style={{ maxWidth: '54ch' }}>
          Two headings, not six, and they are stages of the pipeline. Two lines produce a thing in
          design and build. Four hold a responsibility in operate, and that group is the business.
        </p>
        <p className="bodyp" style={{ marginTop: 26 }}>
          No line has a colour of its own; the stage does. There are no tiers, no packages and no
          price table for engagements. The scope, the cadence, the term and the exit are published
          instead.
        </p>
      </section>

      <section className="art block">
        <h2 className="grouphead" style={{ ['--rule' as string]: stageInk('design') }}>
          Built, in the design and build stages
        </h2>
        <Lines items={BUILT} />
        <p className="groupnote">
          The front of the pipeline. Built in the design stage, beside the architecture.
        </p>
      </section>

      <section className="art block">
        <h2 className="grouphead" style={{ ['--rule' as string]: stageInk('operate') }}>
          Run, in the operate stage
        </h2>
        <Lines items={RUN} />
        <p className="groupnote">Every operated line carries a weekly note and a monthly review.</p>
      </section>

      <section className="art block">
        <h2 className="blockhead">Three ways an engagement is paid for</h2>
        <div className="wrapgrid">
          <div className="wrapitem">
            <h3>The build fee</h3>
            <p>
              Scoped from the diagnostic and set at the proposal. Not published. Covers the design
              and build stages against a signed scope.
            </p>
          </div>
          <div className="wrapitem">
            <h3>The operated retainer</h3>
            <p>
              A fixed monthly fee scoped to what is covered, never to headcount or spend. For
              institutions the term is annual or longer, with continuity and exit obligations.
            </p>
          </div>
          <div className="wrapitem">
            <h3>A product deployment</h3>
            <p>
              A starting price per deployment into your own cloud account, published on the
              product&rsquo;s own site. texxen operates it there on the retainer, which is the
              standard shape; self-run where your policy requires it, priced separately.
            </p>
          </div>
        </div>
      </section>

      <section className="art block">
        <div className="twoup">
          <div>
            <h3 className="subhead">Ownership, on every engagement</h3>
            <ul className="ticks">
              <li>Code and credentials for what is built are held in your name.</li>
              <li>
                On a product, the instance runs in your own cloud account and is yours, with your
                data, your configuration and your extensions. texxen keeps the product core.
              </li>
              <li>Customer data stays inside your perimeter and never reaches texxen.</li>
            </ul>
          </div>
          <div>
            <h3 className="subhead">How an engagement starts</h3>
            <p className="bodyp">
              With the diagnostic: two to three weeks, a fixed fee, and a document that pairs every
              defect with its fix and names the layers worth doing after the first. It can end
              there.
            </p>
            <p className="bodyp" style={{ marginTop: 18 }}>
              <Link href="/pipeline/" className="footlink">the five stages</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
