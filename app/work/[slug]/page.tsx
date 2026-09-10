import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProject, publishedProjects, stagesEngaged } from '@/content/projects';
import ServiceMark, { SERVICE } from '@/components/ServiceMark';
import StageRail from '@/components/StageRail';
import SystemDiagram from '@/components/SystemDiagram';
import Plate from '@/components/Plate';

// Static export: without both of these the route fails the build.
export const dynamicParams = false;

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.dek };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = publishedProjects.filter((p) => p.slug !== project.slug);
  const next = others.length ? others[publishedProjects.indexOf(project) % others.length] : null;
  const hero = project.hero;

  return (
    <article>
      <header className="phead art">
        <Link href="/" className="back t-ui">&larr; the works</Link>
        <h1>{project.title}</h1>
        <p className="dek">{project.dek}</p>

        <dl className="factrail">
          <div className="fact">
            <dt className="t-meta">field</dt>
            <dd>{project.industry}</dd>
          </div>
          <div className="fact">
            <dt className="t-meta">year</dt>
            <dd className="t-num">{project.year}</dd>
          </div>
          <div className="fact">
            <dt className="t-meta">scope</dt>
            <dd className="marks">
              {project.services.map((s) => (
                <span key={s}>
                  <ServiceMark service={s} size={15} weight={1.9} />
                  {SERVICE[s].name}
                </span>
              ))}
            </dd>
          </div>
          <div className="fact">
            <dt className="t-meta">status</dt>
            <dd>
              {project.live ? <span className="livedot" /> : null}
              {project.status}
            </dd>
          </div>
        </dl>
      </header>

      <div className="art">
        {'blank' in hero ? (
          <>
            <div className="plate blank" style={{ backgroundColor: project.card.bg, color: project.card.fg }}>
              <div className="nm">{project.title}</div>
            </div>
            <p className="cap">{hero.caption}</p>
          </>
        ) : (
          <>
            <div className="plate">
              <Image src={hero.src} alt={hero.caption} width={1400} height={1050} priority sizes="(max-width: 1160px) 100vw, 1040px" />
            </div>
            <p className="cap">{hero.caption}</p>
          </>
        )}
      </div>

      <section className="brief art">
        <div className="measure">
          {project.brief.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* The rail sits after the brief: the problem has to land before the
          shape of the response means anything. */}
      <StageRail project={project} />

      {project.stageBlocks.map((block) => (
        <section className="stage art" id={`stage-${block.stage}`} key={block.stage}>
          <div>
            <span className="eyebrow t-meta">{block.stage}</span>
            <h3>{block.heading}</h3>
            <p>{block.body}</p>
          </div>
          <div className="shipped">
            <div className="lab t-meta">shipped</div>
            <ul>
              {block.shipped.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          {block.media.length > 0 && (
            <div className="plates">
              {block.media.map((m) => (
                <Plate media={m} key={m.src} />
              ))}
            </div>
          )}
        </section>
      ))}

      {project.systemDiagram && (
        <section className="sys art">
          <h2>What now exists</h2>
          <div className="sysbox">
            <SystemDiagram id={project.systemDiagram} />
          </div>
        </section>
      )}

      <section className="nums art">
        <h2>In numbers</h2>
        <ol>
          {project.outcomes.map((o) => (
            <li key={o.label}>
              <span className="v">{o.value}</span>
              <span className="l">{o.label}</span>
              <span className="w">{o.window}</span>
            </li>
          ))}
        </ol>
      </section>

      {project.live && project.operatingNow && (
        <section className="oper art">
          <h2>Operating now</h2>
          <p className="operlede">
            Still on the account. This is what texxen runs for them every month, and how often.
          </p>
          <ul>
            {project.operatingNow.map((o) => (
              <li key={o.what}>
                <span>{o.what}</span>
                <span className="cad">{o.cadence}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="ptail art">
        <dl className="credits">
          {project.credits.map((c) => (
            <div key={c.role}>
              <dt>{c.role}</dt>
              <dd>{c.name}</dd>
            </div>
          ))}
        </dl>

        {next && (
          <Link href={`/work/${next.slug}/`} className="nextcard">
            <span>
              <span className="k">next project</span>
              <div className="t">{next.title}</div>
            </span>
            <span className="ar" aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </section>
    </article>
  );
}
