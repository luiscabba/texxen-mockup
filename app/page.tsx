import type { Metadata } from 'next';
import Link from 'next/link';

/**
 * INTERIM HOME, phase 0.
 *
 * The decided home is Home5B, the case-study carousel (entry 21), and it is
 * blocked on questions 36, 37 and 44: the product list, the product names and
 * the case-study covers. This page is the Home5B structure with the carousel
 * and the product rail taken out, so the front door states the position and
 * carries the operating record while those questions close. Replacing it is a
 * one file change: nothing else on the site links into its internals.
 *
 * What the front page used to be, and is not any more: the work index, leading
 * with OKPO, DaddyDappy and Smart UAE. Those are referral work, which the
 * pivot rule says is never published as evidence, so they are unpublished in
 * content/projects.ts rather than deleted.
 */

/** Question 45, still open. The candidates are on the Opening board; this is
 *  the recommended one, held in one place so swapping it is one line. */
const OPENING = 'We build the systems a recovery operation runs on. Then we operate them.';

export const metadata: Metadata = {
  description:
    'texxen runs the pipeline from diagnosis through to operating, for banks, lenders and public-sector collecting entities.',
};

export default function Home() {
  return (
    <>
      <section className="hometop art">
        <h1 className="opening t-disp">{OPENING}</h1>
        <p className="standfirst">
          For banks, lenders and public-sector collecting entities whose recovery depends on systems
          assembled from parts nobody owns end to end. The proof that the pipeline ends in something
          that keeps running is that it already has.
        </p>
      </section>

      <section className="record art" aria-labelledby="the-record">
        <h2 id="the-record" className="t-meta foothead">The record</h2>
        <dl className="figures">
          <div>
            <dt className="fignum t-num">12</dt>
            <dd>systems in production</dd>
          </div>
          <div>
            <dt className="fignum t-num">3</dt>
            <dd>countries&rsquo; operations</dd>
          </div>
        </dl>
        <p className="figcap">
          Built for and run at S.P. Madrid, in the same group. Related party. The register of what
          runs, and where, is being written for the systems route.
        </p>
      </section>

      <nav className="routes art" aria-label="Where to go next">
        <Link href="/pipeline/" className="routecard">
          <span className="k t-meta">Pipeline</span>
          <span className="t">How the work runs, stage by stage</span>
          <span className="d">Five stages, one responsibility, and the four steps an institution wraps around them.</span>
        </Link>
        <Link href="/services/" className="routecard">
          <span className="k t-meta">Services</span>
          <span className="t">What is built, and what is run</span>
          <span className="d">Two lines produce a thing. Four hold a responsibility, and that group is the business.</span>
        </Link>
        <Link href="/company/" className="routecard">
          <span className="k t-meta">Company</span>
          <span className="t">Registered, and accountable by name</span>
          <span className="d">Registration, address, the people accountable, and the group texxen belongs to.</span>
        </Link>
      </nav>

      <section className="startline art">
        <p>
          An engagement starts with the diagnostic: two to three weeks, a fixed fee, and a document
          that pairs every defect with its fix and names the layers worth doing after the first. It
          can end there.
        </p>
        <a
          href="mailto:luiscabmadrid@gmail.com?subject=Starting%20the%20pipeline"
          className="cta t-ui"
        >
          start the pipeline
        </a>
      </section>
    </>
  );
}
