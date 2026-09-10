import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getStudy, studies } from '@/content/studies';
import StudyCard from '@/components/StudyCard';

/**
 * /studies/[slug], built to the slot model on the project pages canvas:
 * header and breadcrumb, identity block, the front card, meta row, the
 * numbered narrative, an ink resolution band, then the outcome.
 *
 * The front card replaced the at-a-glance panel on 10 September: one flooded
 * panel in the study's stage hue carrying the figure, the stages engaged and
 * the operating claim. Status came out of the meta row with it, since the
 * card's own line says the same thing.
 *
 * The stage rail the template calls for is deliberately omitted (10
 * September): with no published week counts it was five equal bars and four
 * [wk] brackets, which is decoration rather than information, and it put all
 * four stage hues on a page whose only other colour is none.
 *
 * The same eight slots carry a product deployment and a client engagement
 * without changing shape.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getStudy(slug);
  return s ? { title: s.name, description: s.standfirst } : {};
}

export default async function Study({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getStudy(slug);
  if (!s) notFound();

  return (
    <>
      <div className="art">
        <nav className="crumb">
          <Link href="/studies/" className="tlink">studies</Link>
          <span className="sep">/</span>
          <span>{s.name}</span>
        </nav>

        <header className="idblock">
          <h1 className="studyname">{s.name}</h1>
          <div className="t-meta" style={{ fontSize: 10, color: 'var(--color-muted)', marginTop: 8 }}>
            {s.attribution}
          </div>
          <p className="studylede">{s.standfirst}</p>
        </header>

        <StudyCard card={s.card} />

        <section className="metarow">
          {s.meta.map((m) => (
            <div key={m.k}>
              <dt className="t-meta">{m.k}</dt>
              <dd>{m.v}</dd>
            </div>
          ))}
        </section>

        {s.sections.map((sec) => (
          <section key={sec.n} className="studysec" id={`s-${sec.n}`}>
            <div className="studysec-h">
              <span className="t-meta t-num sn">{sec.n}</span>
              <span className="t-meta">{sec.title}</span>
            </div>
            {sec.pull ? <p className="pull">{sec.pull}</p> : null}
            <div className="prose">
              {sec.blocks.map((b, i) =>
                b.t === 'p' ? (
                  <p key={i}>{b.text}</p>
                ) : (
                  <div key={i} className={`figrun ${b.layout}`}>
                    {b.items.map((f) => (
                      <figure key={f.src}>
                        <Image src={f.src} alt={f.caption} width={f.w} height={f.h} />
                        <figcaption>{f.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                ),
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="resband">
        <div className="art">
          <p className="resline">{s.resolution.line}</p>
          <p className="resbody">{s.resolution.body}</p>
        </div>
      </section>

      <div className="art">
        <section className="studysec">
          <div className="studysec-h">
            <span className="t-meta t-num sn">05</span>
            <span className="t-meta">Outcome</span>
          </div>
          <ol className="outcomes">
            {s.outcomes.map((o) => (
              <li key={o.label}>
                <span className="v t-num">{o.value}</span>
                <span className="l">{o.label}</span>
                <span className="w t-meta">{o.window}</span>
              </li>
            ))}
          </ol>
          <p className="bcap-s" style={{ marginTop: 22, maxWidth: '78ch' }}>{s.disclosure}</p>
        </section>

        <section className="sec" style={{ paddingBottom: 80 }}>
          <Link href="/work/" className="tlink">what has been done, and for whom</Link>
        </section>
      </div>
    </>
  );
}
