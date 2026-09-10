import type { Metadata } from 'next';
import Link from 'next/link';
import { STAGES, type Stage } from '@/content/projects';
import { stageInk } from '@/components/ServiceMark';

/**
 * /pipeline. The page that separates texxen from a creative studio, which is
 * why it is a page and not a section on /services: it is an argument.
 *
 * Colour: this is one of the three surfaces where the whole pipeline is the
 * subject, so all four hues are permitted together (entry 23). The rail at the
 * top carries them once; after that a stage block colours its number and
 * nothing else, so no viewport holds more than two coloured elements.
 *
 * Week counts are published per engagement on the work index, not as a table.
 * Only the diagnostic has a fixed published duration; the others are scoped,
 * so no figure is printed where none is settled.
 */

export const metadata: Metadata = {
  title: 'Pipeline',
  description: 'Five stages, one responsibility. How a texxen engagement runs, and what is signed at each stage.',
};

type Block = {
  stage: Stage;
  weeks?: string;
  who: string;
  in: string;
  out: string;
  signed: string;
};

const BLOCKS: Block[] = [
  {
    stage: 'diagnose',
    weeks: '2 to 3 weeks',
    who: 'texxen, with the function owner and the people who live with the systems',
    in: 'access, and a fixed fee',
    out: 'the diagnostic: what runs now, what nobody owns end to end, every defect paired with its fix; the first layer scoped, later layers named',
    signed: 'the diagnostic, on its own',
  },
  {
    stage: 'design',
    who: 'texxen; IT and information security review the architecture',
    in: 'the diagnostic, the integration and hosting constraints',
    out: 'an architecture both sides can sign, and the identity and public surface around it',
    signed: 'the scope and the term',
  },
  {
    stage: 'build',
    who: 'texxen accountable end to end',
    in: 'signed scope, access',
    out: 'a product deployed into your own environment where one fits, built where none does; signed off against the scoped output',
    signed: 'acceptance against the scope',
  },
  {
    stage: 'launch',
    who: 'texxen with the function’s own team',
    in: 'the accepted build',
    out: 'cutover, the first month’s cadence, the first weekly note',
    signed: 'the operated term begins',
  },
  {
    stage: 'operate',
    weeks: 'and running',
    who: 'texxen, staffed directly on regulated accounts',
    in: 'the retainer, access to the instance in your environment, the cadence',
    out: 'a weekly operating note, a monthly review, releases applied on the published cadence, and the record that names the next layer',
    signed: 'annual or longer, with continuity and exit obligations',
  },
];

const WRAPPERS = [
  {
    head: 'Vendor assessment, before any scope exists',
    body: 'Vendor management runs it; texxen answers. Financials, controls, continuity, audit rights. It can end the process here, which is why the document set is written before it is asked for.',
  },
  {
    head: 'Security and architecture review',
    body: 'IT and information security, at the design stage. Integration, data handling, hosting, access. The output is an architecture both sides can sign.',
  },
  {
    head: 'Pilot',
    body: 'A bounded scope with a result the institution can measure, before the full term is signed.',
  },
  {
    head: 'Contracting',
    body: 'Procurement, on the institution’s paper where required. Annual or longer, with continuity and exit obligations attached.',
  },
];

/** Proportional, not to scale: the shape of the pipeline, with operate running
 *  off the right edge because the stage that does not end never terminates. */
const SHAPE: Record<Stage, number> = { diagnose: 20, design: 14, build: 26, launch: 6, operate: 34 };

export default function Pipeline() {
  return (
    <>
      <section className="phead art">
        <h1>How the work runs.</h1>
        <p className="dek" style={{ maxWidth: '52ch' }}>
          Five stages, one responsibility. Four carry a colour and launch is the cut-over between
          them. The same pipeline whether it ends in a product deployed or a system built, and it
          does not stop at handover.
        </p>

        <ol className="stagebar" aria-label="The five stages">
          {STAGES.map((stage) => (
            <li key={stage} style={{ flex: SHAPE[stage] }}>
              <a href={`#stage-${stage}`}>
                <span className="lab t-meta">{stage}</span>
                <span
                  className={`seg${stage === 'operate' ? ' runs' : ''}`}
                  style={{ ['--seg' as string]: stageInk(stage) }}
                />
              </a>
            </li>
          ))}
        </ol>
        <p className="railnote">
          Each stage carries its own hue, which is the symbol rule applied to the rail: the solid
          bar is diagnose, the two dashes are design and build, and the tail that runs off the edge
          is operate. Launch sits between them in ink. Bar widths are the shape of an engagement,
          not a schedule: week counts are published per engagement, never as a table.
        </p>
      </section>

      <section className="art">
        {BLOCKS.map((b, i) => (
          <article key={b.stage} id={`stage-${b.stage}`} className="pstage">
            <div className="pstage-head">
              <span className="pnum t-num" style={{ color: stageInk(b.stage) }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2>{b.stage}</h2>
              {b.weeks ? <span className="pwk t-ui">{b.weeks}</span> : null}
            </div>
            <p className="pwho">{b.who}</p>
            <dl className="pio">
              <div>
                <dt className="t-meta">in</dt>
                <dd>{b.in}</dd>
              </div>
              <div>
                <dt className="t-meta">out</dt>
                <dd>{b.out}</dd>
              </div>
              <div>
                <dt className="t-meta">signed</dt>
                <dd>{b.signed}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <section className="art block">
        <h2 className="blockhead">Inside an institution, four more steps wrap the pipeline</h2>
        <div className="wrapgrid">
          {WRAPPERS.map((w) => (
            <div key={w.head} className="wrapitem">
              <h3>{w.head}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="art block">
        <div className="twoup">
          <div>
            <h3 className="subhead">Where brand and web sit</h3>
            <p className="bodyp">
              In the design stage, as the front of the pipeline. The identity and the public surface
              are built there, beside the architecture, not offered beside it.
            </p>
          </div>
          <div>
            <h3 className="subhead">The stage that does not end</h3>
            <p className="bodyp">
              Operating is what the pipeline ends in. A deployed product is operated in your own
              environment on the same footing as a system built for you. A year in, the weekly notes
              are a record of the function nobody pitching could have. That record is what names the
              next layer, and each layer is signed on its own.
            </p>
          </div>
        </div>
      </section>

      <section className="art block">
        <h3 className="subhead">Public procurement</h3>
        <p className="bodyp">
          A procuring entity does not begin with a conversation. It begins with documents, and a
          bids and awards committee assesses them rather than texxen. The document set is available
          on request while the contact route is being built.
        </p>
        <p className="bodyp" style={{ marginTop: 18 }}>
          <Link href="/services/" className="footlink">what is built and what is run</Link>
        </p>
      </section>
    </>
  );
}
