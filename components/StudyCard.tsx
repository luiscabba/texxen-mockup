import type { Study } from '@/content/studies';

/**
 * The front card on a study page. One flooded panel carrying the figure that
 * matters, the stages engaged, and the fact that texxen still operates it.
 *
 * Colour: the ground takes the stage the study is about, which is a full-bleed
 * hue and therefore a deliberate addition to entry 23's six permitted uses.
 * Because the ground carries the colour, nothing inside the card does: the
 * stages are plain slash-separated text rather than coloured marks.
 *
 * Every piece of type is full paper, never a dimmed tone. Paper on the four
 * grounds measures 5.17 (diagnose), 6.02 (design), 6.45 (build) and 5.20
 * (operate), all AA; a dimmed tone drops to 4.19 on amber and 4.16 on green,
 * which is why hierarchy here is size and weight only.
 */
export default function StudyCard({ card }: { card: Study['card'] }) {
  return (
    <section className="studycard" data-hue={card.hue}>
      <p className="sc-eyebrow t-meta">
        {card.sector} <span aria-hidden="true">&nbsp;&middot;&nbsp;</span> {card.countries}
      </p>

      <div className="sc-head">
        <span className="sc-fig t-disp t-num">{card.figure}</span>
        <span className="sc-figlabel">{card.figureLabel}</span>
      </div>

      <dl className="sc-support">
        {card.support.map((f) => (
          <div key={f.value}>
            <dt className="t-disp t-num">{f.value}</dt>
            <dd>{f.label}</dd>
          </div>
        ))}
      </dl>

      <hr className="sc-rule" />

      <p className="sc-stages t-meta">
        {card.stages.join(' / ')} <span className="sc-running">{card.running}</span>
      </p>

      <div className="sc-body">
        <p className="sc-summary">{card.summary}</p>
        <div className="sc-side">
          <p className="sc-lines">
            {card.lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </p>
          <p className="sc-running-line">
            Operated by texxen. Releases on a published cadence, a weekly operating note, a monthly
            review.
          </p>
        </div>
      </div>

      <p className="sc-rp">{card.relatedParty}</p>
    </section>
  );
}
