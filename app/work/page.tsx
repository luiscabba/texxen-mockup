import type { Metadata } from 'next';
import Link from 'next/link';

/**
 * /work, built from the Applications board of the same name. Four categories,
 * each named for what it is, so a reader can tell evidence from referral work
 * without reading the fine print.
 *
 * OpenCI sits under products in use and links to the products route, since its
 * own product page is not built yet.
 */

export const metadata: Metadata = {
  title: 'Work',
  description: 'What has been done, and for whom. In-sector work, the operating record, products in use and referral work.',
};

function Tile({
  name,
  body,
  meta,
  href,
  bracket,
}: {
  name: string;
  body: string;
  meta?: string;
  href?: string;
  bracket?: boolean;
}) {
  const inner = (
    <>
      <span className={`tname${bracket ? ' brk' : ''}`}>{name}</span>
      <span className="bcap" style={{ marginTop: 10, display: 'block' }}>{body}</span>
      {meta ? <span className="tmeta brk">{meta}</span> : null}
    </>
  );
  return href ? (
    <Link href={href} className="wtile link">{inner}</Link>
  ) : (
    <div className="wtile">{inner}</div>
  );
}

export default function Work() {
  return (
    <div className="art">
      <section className="routetop">
        <h1 className="boardh1">What has been done, and for whom.</h1>
        <p className="boarddek">
          Four categories, each named for what it is. In-sector work is the evidence of what texxen
          is for. Referral work is real, and it is not the same claim.
        </p>
      </section>

      <section className="sec">
        <h2 className="sechead">In sector: banking, fintech and public-sector receivables</h2>
        <div className="g3">
          <Tile
            name="[first in-sector engagement]"
            bracket
            body="Nothing is listed here until it is real. The first arm’s length regulated account appears with its week counts and its outcome, on the same terms as everything else on this page."
          />
        </div>
      </section>

      <section className="sec">
        <h2 className="sechead">The operating record</h2>
        <div className="g2" style={{ gridTemplateColumns: '2fr 1fr' }}>
          <Tile
            name="S.P. Madrid"
            body="Twelve systems built and run in production across Philippines, Dubai and Singapore operations, on eight service lines, under regulatory constraint."
            meta="[week counts per stage]"
          />
          <div>
            <p className="bcap-s">
              A company in the same group as texxen. The deepest record texxen holds, and not an
              arm’s length client. Stated as a related party wherever it appears.
            </p>
            <p className="bcap" style={{ marginTop: 16 }}>
              The full case study, with documents and images, follows once both can be published.
              Until then the name and the twelve systems stand on their own.
            </p>
            <p style={{ marginTop: 16 }}>
              <Link href="/systems/" className="tlink">the twelve systems</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <h2 className="sechead">Products in use</h2>
        <div className="g3">
          <Tile
            name="OpenCI"
            href="/products/"
            body="The field data collection infrastructure a credit investigation operation runs on. In production across the Philippines, Dubai and Singapore operations of S.P. Madrid, a related party."
            meta="[first outside deployment]"
          />
          <Tile
            name="[company]"
            bracket
            body="A company that bought a product and nothing else appears here as well, with the product named and the deployment dated. It is a shorter claim than an engagement, and it is stated as one."
          />
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 80 }}>
        <p className="bcap-s">
          Work that arrives by referral and personal network, in any industry whose need falls under
          the positioned capabilities, is taken and is not published as evidence of the named
          sectors.
        </p>
      </section>
    </div>
  );
}
