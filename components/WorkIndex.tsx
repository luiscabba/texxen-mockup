'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { industries, projects, type Service } from '@/content/projects';
import ServiceMark, { SERVICE } from './ServiceMark';

const SERVICES = Object.keys(SERVICE) as Service[];

/** Six marks in soft colours, static, cropped at the hero edges. Never over the type. */
const SCATTER: { service: Service; size: number; pos: React.CSSProperties; weight: number }[] = [
  { service: 'brand', size: 58, pos: { left: '2%', top: '13%' }, weight: 1.5 },
  { service: 'demand', size: 46, pos: { left: '34%', top: '1%' }, weight: 1.7 },
  { service: 'content', size: 32, pos: { left: '58%', top: '5%' }, weight: 2.0 },
  { service: 'web', size: 70, pos: { right: '0.5%', top: '19%' }, weight: 1.4 },
  { service: 'systems', size: 40, pos: { left: '9%', top: '73%' }, weight: 1.8 },
  { service: 'intel', size: 44, pos: { right: '12%', top: '69%' }, weight: 1.7 },
];

export default function WorkIndex() {
  const [bySvc, setBySvc] = useState<Set<Service>>(new Set());
  const [byInd, setByInd] = useState<Set<string>>(new Set());

  const shown = useMemo(
    () =>
      projects.filter((p) => {
        const okS = bySvc.size === 0 || [...bySvc].every((s) => p.services.includes(s));
        const okI = byInd.size === 0 || byInd.has(p.industry);
        return okS && okI;
      }),
    [bySvc, byInd],
  );

  const cols = shown.length < 3 ? 2 : 3;
  const columns: (typeof projects)[] = Array.from({ length: cols }, () => []);
  shown.forEach((p, i) => columns[i % cols].push(p));

  function toggle<T>(set: Set<T>, value: T, apply: (next: Set<T>) => void) {
    const next = new Set(set);
    if (!next.delete(value)) next.add(value);
    apply(next);
  }

  return (
    <div className="wrap">
      <section className="workhero">
        <h1>The Works</h1>
        <div className="scatter" aria-hidden="true">
          {SCATTER.map((m) => (
            <ServiceMark key={m.service} service={m.service} size={m.size} weight={m.weight} tone="soft" style={m.pos} />
          ))}
        </div>
        <p className="lede">What we built, and what is still on our schedule.</p>
      </section>

      <section className="filters">
        <div className="fgroup">
          <div className="lab t-meta">by service</div>
          <div className="chips t-ui">
            {SERVICES.map((s) => (
              <button
                key={s}
                type="button"
                className="chip"
                aria-pressed={bySvc.has(s)}
                onClick={() => toggle(bySvc, s, setBySvc)}
              >
                <ServiceMark service={s} size={18} />
                {SERVICE[s].name}
              </button>
            ))}
          </div>
        </div>

        <div className="fgroup">
          <div className="lab t-meta">by industry</div>
          <div className="chips t-ui">
            {industries.map((n) => (
              <button
                key={n}
                type="button"
                className="chip ind"
                aria-pressed={byInd.has(n)}
                onClick={() => toggle(byInd, n, setByInd)}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="clearall t-ui"
          onClick={() => {
            setBySvc(new Set());
            setByInd(new Set());
          }}
        >
          clear all
        </button>
      </section>

      {shown.length === 0 ? (
        <p className="noresults">Nothing matches those filters yet. Clear one and try again.</p>
      ) : (
        <section className={cols === 2 ? 'grid two' : 'grid'}>
          {columns.map((col, i) => (
            <div className="col" key={i}>
              {col.map((p) => (
                <Link href={`/work/${p.slug}/`} className="card" key={p.slug}>
                  <div
                    className="field"
                    style={{
                      // backgroundColor, never the `background` shorthand: the
                      // shorthand resets background-size and the cover image
                      // renders at natural size instead of filling the field.
                      backgroundColor: p.card.bg,
                      color: p.card.fg,
                      height: p.card.height,
                      backgroundImage: p.card.cover ? `url(${p.card.cover})` : undefined,
                      backgroundSize: p.card.cover ? 'cover' : undefined,
                      backgroundPosition: p.card.position ?? 'center',
                    }}
                  >
                    {p.card.cover ? null : <div className="name">{p.title}</div>}
                  </div>
                  <div className="svcs">
                    {p.services.map((s) => (
                      <span className="svc" key={s}>
                        <ServiceMark service={s} size={17} />
                        <span>{SERVICE[s].name}</span>
                      </span>
                    ))}
                  </div>
                  <div className="ind">{p.industry}</div>
                  <h3>{p.title}</h3>
                  <div className="out">{p.outcome}</div>
                </Link>
              ))}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
