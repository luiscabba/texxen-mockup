import type { Metadata } from 'next';
import Link from 'next/link';

/**
 * /company. Neutral throughout: no hue on this route (entry 23 as applied to
 * the Company board). It carries what a procuring entity or a vendor-risk
 * reader needs to classify texxen.
 *
 * Deliberately not published yet, because none of it is settled: the
 * registered name, registration number, TIN and year (no placeholder goes on
 * the page that a risk reader is reading for exactly those fields), Julius
 * Tuliao's title, the continuity statement (downstream of the institutional
 * operated terms, question 4), and the four portraits.
 */

export const metadata: Metadata = {
  title: 'Company',
  description: 'texxen. Registered in Makati. Who is accountable, and the group it belongs to.',
};

const PEOPLE = [
  { name: 'Ian Madrid', role: 'Founder. Owns allocation: which accounts are staffed, and how.' },
  { name: 'Khalid Punzalan', role: 'Enterprise Architect' },
  { name: 'Paul Ador', role: 'IT and Infrastructure Specialist' },
]

// Julius Tuliao is held back until his title is confirmed. A name with no role
// on the page a risk reader opens to check accountability reads as an omission,
// which is worse than waiting a day for the title.;

export default function Company() {
  return (
    <>
      <section className="phead art">
        <h1>texxen. Registered in Makati. Accountable by name.</h1>
        <p className="dek" style={{ maxWidth: '54ch' }}>
          What a procuring entity or a vendor-risk reader needs to classify texxen: the address,
          the people accountable, and the group it belongs to.
        </p>
      </section>

      <section className="art block">
        <h2 className="blockhead">What texxen does, in one paragraph</h2>
        <p className="bodyp" style={{ fontSize: '1.1875rem' }}>
          For banks, lenders and public-sector collecting entities whose recovery depends on systems
          assembled from parts nobody owns end to end, texxen runs the pipeline from diagnosis
          through to operating. The systems it built are in production across three countries&rsquo;
          operations today.
        </p>
      </section>

      <section className="art block">
        <h2 className="blockhead">Address</h2>
        <p className="bodyp">
          17th Floor Chatham House, Rufino St., Salcedo Village, Makati City 1226, Philippines.
        </p>
        <p className="groupnote" style={{ marginTop: 20 }}>
          Registered name, registration number and tax identification are in the document set, on
          request.
        </p>
      </section>

      <section className="art block">
        <h2 className="blockhead">Who is accountable</h2>
        <ul className="people">
          {PEOPLE.map((p) => (
            <li key={p.name}>
              <span className="pn">{p.name}</span>
              {p.role ? <span className="pr">{p.role}</span> : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="art block">
        <h2 className="blockhead">The group</h2>
        <div className="twoup">
          <div className="wrapitem">
            <h3>texxen</h3>
            <p>
              Operates systems. Diagnoses, designs, builds, launches and runs them, and is S.P.
              Madrid&rsquo;s delivery for its own.
            </p>
          </div>
          <div className="wrapitem">
            <h3>S.P. Madrid</h3>
            <p>
              Operates people. A collections business across eight service lines, in the
              Philippines, Dubai and Singapore, under regulatory constraint.
            </p>
          </div>
        </div>
        <p className="bodyp" style={{ marginTop: 26 }}>
          Two halves of one group, and each is the other&rsquo;s capability. The relationship is a
          related-party fact and is stated wherever the operating record appears. Group capacity is
          not used on regulated accounts, which are staffed by texxen directly. The outsourced
          customer experience offer belongs to S.P. Madrid and is not texxen&rsquo;s to sell.
        </p>
        <p className="bodyp" style={{ marginTop: 18 }}>
          <Link href="/pipeline/" className="footlink">how the work runs</Link>
        </p>
      </section>
    </>
  );
}
