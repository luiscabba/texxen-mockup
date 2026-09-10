import type { Metadata } from 'next';

/**
 * /company, built from the Applications board of the same name. Neutral
 * throughout, bracketed where the board brackets.
 */

export const metadata: Metadata = {
  title: 'Company',
  description: 'texxen. Registered in Makati. Who is accountable, and the group it belongs to.',
};

const PEOPLE: [string, string, boolean][] = [
  ['Ian Madrid', 'Founder. Owns allocation: which accounts are staffed, and how.', false],
  ['Julius Tuliao', '[title]', true],
  ['Khalid Punzalan', 'Enterprise Architect', false],
  ['Paul Ador', 'IT and Infrastructure Specialist', false],
];

export default function Company() {
  return (
    <div className="art">
      <section className="routetop">
        <h1 className="boardh1" style={{ maxWidth: '22ch' }}>
          texxen. Registered in Makati. Accountable by name.
        </h1>
        <p className="boarddek">
          The company page carries what a procuring entity or a vendor-risk reader needs to classify
          texxen: registration, address, the people accountable, the group it belongs to, and what
          happens if it cannot continue.
        </p>
      </section>

      <section className="sec">
        <div className="g3">
          <div>
            <h2 className="sechead">Registration</h2>
            <dl className="reg">
              <dt>Registered name</dt>
              <dd className="brk">[registered name]</dd>
              <dt>Registration</dt>
              <dd className="brk">[registration number]</dd>
              <dt>Tax identification</dt>
              <dd className="brk">[TIN]</dd>
              <dt>Registered since</dt>
              <dd className="brk">[year]</dd>
              <dt>Address</dt>
              <dd>17th Floor Chatham House, Rufino St., Salcedo Village, Makati City 1226</dd>
            </dl>
          </div>

          <div>
            <h2 className="sechead">Who is accountable</h2>
            <ul className="who4">
              {PEOPLE.map(([name, role, bracket]) => (
                <li key={name}>
                  <div className="n">{name}</div>
                  <div className={`r${bracket ? ' brk' : ''}`}>{role}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="sechead">What texxen does, in one paragraph</h2>
            <p className="bcap" style={{ fontSize: 14 }}>
              For banks, lenders and public-sector collecting entities whose recovery depends on
              systems assembled from parts nobody owns end to end, texxen runs the pipeline from
              diagnosis through to operating. The systems it built are in production across three
              countries’ operations today.
            </p>
            <p className="bcap-s brk" style={{ marginTop: 14 }}>
              [boilerplate, both lengths, downstream of the statement]
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="g2" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
          <div>
            <h2 className="sechead">The group</h2>
            <div className="g2" style={{ gridTemplateColumns: '1fr 1fr', gap: 34 }}>
              <div>
                <div className="t-mark" style={{ fontSize: 30, lineHeight: 1 }}>texxen</div>
                <p className="bcap-s" style={{ marginTop: 10 }}>
                  Operates systems. Diagnoses, designs, builds, launches and runs them, and is
                  S.P. Madrid’s delivery for its own.
                </p>
              </div>
              <div>
                <div className="t-disp" style={{ fontSize: 26, lineHeight: 1.1 }}>S.P. Madrid</div>
                <p className="bcap-s" style={{ marginTop: 10 }}>
                  Operates people. A collections business across eight service lines, in the
                  Philippines, Dubai and Singapore, under regulatory constraint.
                </p>
              </div>
            </div>
            <p className="bcap" style={{ marginTop: 24 }}>
              Two halves of one group, and each is the other’s capability. The relationship is a
              related-party fact and is stated wherever the operating record appears. Group capacity
              is not used on regulated accounts, which are staffed by texxen directly. The
              outsourced customer experience offer belongs to S.P. Madrid and is not texxen’s to
              sell.
            </p>
          </div>

          <div>
            <h2 className="sechead">If texxen cannot continue</h2>
            <p className="bcap brk">
              [continuity statement: what happens to a running account, who holds the code and
              credentials, that a deployed product already runs in the institution’s own account and
              stays there, how escrow releases, and the notice period on exit]
            </p>
            <p className="bcap-s" style={{ marginTop: 14 }}>
              Downstream of the operated terms for institutional contracting, question 4. The
              sentence “you will not outgrow us” depends on an exit that functions, so it is written
              here rather than implied.
            </p>
            <div style={{ display: 'flex', gap: 24, marginTop: 20, flexWrap: 'wrap' }}>
              <span className="tlink brk">security and the document set</span>
              <span className="tlink brk">the twelve systems</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 80 }}>
        <h2 className="sechead">The people, at work</h2>
        <div className="portraits">
          {PEOPLE.map(([name]) => (
            <figure key={name} style={{ margin: 0 }}>
              <div className="slot">
                <span className="t-meta brk" style={{ fontSize: 11 }}>4:5</span>
              </div>
              <figcaption className="nm">{name}</figcaption>
            </figure>
          ))}
        </div>
        <p className="bcap-s" style={{ marginTop: 16 }}>
          Unposed, at work, eye level. Consent is already held for all four. This is the only route
          where people lead, because it is the only route where a reader is assessing whether they
          exist.
        </p>
      </section>
    </div>
  );
}
