import type { Metadata } from 'next';
import { stageInk } from '@/components/ServiceMark';

/**
 * /pipeline, built from the Applications board of the same name. Section
 * order, copy, type sizes and the bracketed values are the board's.
 */

export const metadata: Metadata = {
  title: 'Pipeline',
  description: 'Five stages, one responsibility. How a texxen engagement runs, and what is signed at each stage.',
};

const STAGE_BLOCKS = [
  {
    n: '1 diagnose', weeks: '2 to 3 wk', stage: 'diagnose' as const,
    who: 'texxen, with the function owner and the people who live with the systems',
    in: 'access, and a fixed fee',
    out: 'the diagnostic: what runs now, what nobody owns end to end, every defect paired with its fix; the first layer scoped, later layers named',
    signed: 'the diagnostic, on its own',
  },
  {
    n: '2 design', weeks: '[wk]', stage: 'design' as const,
    who: 'texxen; IT and information security review the architecture',
    in: 'the diagnostic, the integration and hosting constraints',
    out: 'an architecture both sides can sign, and the identity and public surface around it',
    signed: 'the scope and the term',
  },
  {
    n: '3 build', weeks: '[wk]', stage: 'build' as const,
    who: 'texxen accountable end to end',
    in: 'signed scope, access',
    out: 'a product deployed into your own environment where one fits, built where none does; signed off against the scoped output',
    signed: 'acceptance against the scope',
  },
  {
    n: '4 launch', weeks: '[wk]', stage: 'launch' as const,
    who: 'texxen with the function’s own team',
    in: 'the accepted build',
    out: 'cutover, the first month’s cadence, the first weekly note',
    signed: 'the operated term begins',
  },
  {
    n: '5 operate', weeks: 'and running', stage: 'operate' as const,
    who: 'texxen, staffed directly on regulated accounts',
    in: 'the retainer, access to the instance in your environment, the cadence',
    out: 'a weekly operating note, a monthly review, releases applied on the published cadence, and the record that names the next layer',
    signed: 'annual or longer, with continuity and exit obligations',
  },
];

const WRAPPERS = [
  ['Vendor assessment, before any scope exists', 'Vendor management runs it; texxen answers. Financials, controls, continuity, audit rights. It can end the process here, which is why the document set is written before it is asked for.'],
  ['Security and architecture review', 'IT and information security, at the design stage. Integration, data handling, hosting, access. The output is an architecture both sides can sign.'],
  ['Pilot', 'A bounded scope with a result the institution can measure, before the full term is signed.'],
  ['Contracting', 'Procurement, on the institution’s paper where required. Annual or longer, with continuity and exit obligations attached.'],
];

export default function Pipeline() {
  return (
    <div className="art">
      <section className="routetop">
        <h1 className="boardh1">How the work runs.</h1>
        <p className="boarddek">
          Five stages, one responsibility. Four carry a colour and launch is the cut-over between
          them. The same pipeline whether it ends in a product deployed or a system built, and it
          does not stop at handover. Week counts are published per engagement on the work index,
          not as a table.
        </p>
      </section>

      <ol className="stagecols">
        {STAGE_BLOCKS.map((b) => (
          <li key={b.n}>
            <span className="snum">{b.n}</span>
            <div
              className="sbar"
              style={
                b.stage === 'operate'
                  ? { background: `repeating-linear-gradient(90deg, ${stageInk('operate')} 0 9px, transparent 9px 15px)` }
                  : { background: stageInk(b.stage) }
              }
            />
            <span className="swk">{b.weeks === '[wk]' ? <span className="brk">[wk]</span> : b.weeks}</span>
            <span className="who" style={{ marginTop: 12 }}>{b.who}</span>
            <dl>
              <dt>in</dt>
              <dd>{b.in}</dd>
              <dt>out</dt>
              <dd>{b.out}</dd>
              <dt>signed</dt>
              <dd>{b.signed}</dd>
            </dl>
          </li>
        ))}
      </ol>

      <p className="bcap" style={{ maxWidth: '92ch', paddingTop: 8 }}>
        Each stage carries its own hue, which is the symbol rule applied to the rail: the solid bar
        is diagnose, the two dashes are design and build, and the tail that runs off the edge is
        operate. Launch sits between them in ink. The dashed operate stage keeps its colour and
        still does not animate.
      </p>

      <section className="sec">
        <h2 className="sechead">Inside an institution, four more steps wrap the pipeline</h2>
        <div className="g4">
          {WRAPPERS.map(([head, body]) => (
            <div key={head}>
              <h3 className="bui" style={{ margin: 0 }}>{head}</h3>
              <p className="bcap" style={{ marginTop: 9 }}>
                {body}
                {head === 'Contracting' ? (
                  <>
                    {' '}
                    <span className="brk">[operated terms for institutional contracting, question 4]</span>
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 80 }}>
        <div className="g3">
          <div>
            <h3 className="sechead">Where brand and web sit</h3>
            <p className="bcap" style={{ fontSize: 13.5 }}>
              In the design stage, as the front of the pipeline. The identity and the public surface
              are built there, beside the architecture, not offered beside it.
            </p>
          </div>
          <div>
            <h3 className="sechead">The stage that does not end</h3>
            <p className="bcap" style={{ fontSize: 13.5 }}>
              Operating is what the pipeline ends in. A deployed product is operated in your own
              environment on the same footing as a system built for you. A year in, the weekly notes
              are a record of the function nobody pitching could have. That record is what names the
              next layer, and each layer is signed on its own.
            </p>
          </div>
          <div>
            <h3 className="sechead">Public procurement</h3>
            <p className="bcap" style={{ fontSize: 13.5 }}>
              A procuring entity does not begin with a conversation. It begins with documents, and a
              bids and awards committee assesses them rather than texxen. That path is on the
              contact page.
            </p>
            <p style={{ marginTop: 14 }}>
              <span className="tlink brk">the public path</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
