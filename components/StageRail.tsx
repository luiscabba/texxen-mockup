import { STAGES, stageServices, stagesEngaged, type Project } from '@/content/projects';
import ServiceMark from './ServiceMark';

/**
 * Stages engaged, not process. It describes scope, not progress.
 *
 * Segment width maps to weeks on the account, so every project gets its own
 * silhouette. Skipped stages collapse to a fixed narrow token with a hairline
 * outline and no fill. Entry 23: each segment carries its own stage hue, so
 * the rail is the symbol rule applied along a line, and launch stays ink.
 * A live retainer never terminates: on a live project the
 * operate segment runs off the right edge as a dashed continuation, which is
 * the two pixel decision the whole positioning rests on.
 */
export default function StageRail({ project }: { project: Project }) {
  const engaged = stagesEngaged(project);

  return (
    <section className="railsec art" aria-labelledby="stages-engaged">
      <div className="railhead">
        <h2 id="stages-engaged" className="t-meta">stages engaged</h2>
        <span className="n t-num">{engaged} of 5</span>
      </div>

      <div className="railband">
        <ol className="rail">
          {STAGES.map((stage, i) => {
            const weeks = project.stageWeeks[i];
            const runs = project.live && stage === 'operate';

            if (weeks === 0) {
              return (
                <li key={stage} className="skipped" data-stage={stage}>
                  <span className="lab t-meta">{stage}</span>
                  <div className="bar" />
                  <span className="wk">skipped</span>
                  <div className="dock" />
                </li>
              );
            }

            const style = runs
              ? { flex: `${Math.max(weeks / 6, 2.6)} 1 0`, minWidth: 140, marginRight: -96 }
              : { flex: `${weeks} 1 0` };

            return (
              <li key={stage} className={runs ? 'runs' : undefined} data-stage={stage} style={style}>
                <a href={`#stage-${stage}`} aria-current={i === 0 ? 'step' : undefined}>
                  <span className="lab t-meta">{stage}</span>
                  <div className="bar" />
                  <span className="wk">{runs ? `${weeks}wk and running` : `${weeks}wk`}</span>
                  <div className="dock">
                    {stageServices(project, stage).map((s) => (
                      <ServiceMark key={s} service={s} size={15} weight={1.9} stage={stage} tone="ink" />
                    ))}
                  </div>
                </a>
              </li>
            );
          })}
        </ol>
      </div>

      <p className="railnote">
        Segment width is weeks on the account.{' '}
        {project.live
          ? 'The operate segment runs dashed off the edge because the retainer has no end date.'
          : 'Every segment is capped: the engagement closed.'}
      </p>
    </section>
  );
}
