import type { Metadata } from 'next';
import Link from 'next/link';
import { studies } from '@/content/studies';

/**
 * /studies. The case study index: one card per study, linking to the
 * narrative at /studies/[slug].
 *
 * This route took the systems slot in the nav. The twelve-systems register
 * moved to /work under the operating record, where it is evidence about an
 * account rather than a page of its own.
 */

export const metadata: Metadata = {
  title: 'Studies',
  description: 'Case studies: what the problem was, what made it hard, the order the work happened in, and what it resolves.',
};

export default function Studies() {
  return (
    <div className="art">
      <section className="routetop">
        <h1 className="boardh1">What the work actually was.</h1>
        <p className="boarddek">
          One study per engagement or product: the condition in the client’s terms, what made it
          hard to solve, the order the work happened in, and the numbers with the window they were
          measured over. Sequence is the argument, so each one is read rather than skimmed.
        </p>
      </section>

      <section className="sec" style={{ paddingBottom: 80 }}>
        <div className="g2">
          {studies.map((s) => (
            <Link key={s.slug} href={`/studies/${s.slug}/`} className="wtile link">
              <span className="tname">{s.name}</span>
              <span className="t-meta" style={{ display: 'block', fontSize: 9, color: 'var(--color-muted)', marginTop: 6 }}>
                {s.attribution}
              </span>
              <span className="bcap" style={{ marginTop: 14, display: 'block', fontSize: 15 }}>
                {s.standfirst}
              </span>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 20 }}>
                <span className="t-disp t-num" style={{ fontSize: 34 }}>{s.glance.value}</span>
                <span className="bcap" style={{ fontSize: 13, maxWidth: '30ch' }}>{s.glance.label}</span>
              </span>
            </Link>
          ))}

          <div className="wtile" style={{ borderStyle: 'dashed' }}>
            <span className="tname brk">[next study]</span>
            <span className="bcap" style={{ marginTop: 14, display: 'block' }}>
              A study goes up when the figures and the images can both be published. Until then the
              engagement appears on the work index by name only.
            </span>
            <span style={{ display: 'block', marginTop: 18 }}>
              <Link href="/work/" className="tlink">what has been done, and for whom</Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
