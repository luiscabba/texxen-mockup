import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getStudy, studies } from '@/content/studies';
import { STAGES, type Stage } from '@/content/projects';
import { stageInk } from '@/components/ServiceMark';

/**
 * /studies/[slug], built to the slot model on the project pages canvas:
 * header and breadcrumb, identity block, at-a-glance panel, stage rail, meta
 * row, the numbered narrative, an ink resolution band, then the outcome.
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

        <section className="glance">
          <div>
            <div className="t-disp t-num" style={{ fontSize: 62, lineHeight: 1, letterSpacing: '-.03em' }}>
              {s.glance.value}
            </div>
            <div className="bcap" style={{ fontSize: 15, marginTop: 10, maxWidth: '34ch' }}>{s.glance.label}</div>
          </div>
          <p className="bcap-s" style={{ maxWidth: '46ch' }}>{s.glance.note}</p>
        </section>

        <section className="railsec" aria-labelledby="stages-engaged" style={{ paddingTop: 56 }}>
          <div className="railhead">
            <h2 id="stages-engaged" className="t-meta">stages engaged</h2>
            <span className="n t-num">
              {STAGES.filter((st) => s.stages[st]).length} of 5
            </span>
          </div>
          <div className="railband">
            <ol className="rail">
              {STAGES.map((st: Stage) => {
                const on = s.stages[st];
                const runs = on && st === 'operate' && s.live;
                if (!on) {
                  return (
                    <li key={st} className="skipped">
                      <span className="lab t-meta">{st}</span>
                      <div className="bar" />
                      <span className="wk">skipped</span>
                    </li>
                  );
                }
                return (
                  <li key={st} className={runs ? 'runs' : undefined} data-stage={st} style={{ flex: runs ? 1.6 : 1 }}>
                    <span className="lab t-meta">{st}</span>
                    <div className="bar" style={runs ? undefined : { background: stageInk(st) }} />
                    <span className="wk">{runs ? 'and running' : <span className="brk">[wk]</span>}</span>
                  </li>
                );
              })}
            </ol>
          </div>
          <p className="railnote">
            Every stage was engaged and operate has no end date, so it runs off the edge. Week
            counts per stage are not published for this account.
          </p>
        </section>

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
              {sec.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
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
