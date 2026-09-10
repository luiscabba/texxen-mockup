'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slides, productRail, record } from '@/content/caseStudies';

const DWELL = 7000;

/**
 * The first screen: the split layout, direction B.
 *
 * Two things the boards had are deliberately gone. The opening headline came
 * out, so the first claim on the page is the case study itself and the two
 * figures rather than a sentence about them. The section rail came out too: it
 * was six links to sections that mostly do not exist yet, and on a phone it
 * pushed everything below the fold before a reader saw anything.
 *
 * The cover is left at 1.35 and the slide's own text is stacked right, which
 * lands the whole screen in roughly 880px and collapses to cover-then-text on
 * a phone with nothing to reflow.
 *
 * Motion is entry 21: a 200ms cross-fade, a seven second dwell, controls that
 * are always visible, rotation that stops for good on interaction, and none at
 * all under prefers-reduced-motion. It starts by itself at two slides.
 */
export default function CaseCarousel() {
  const [i, setI] = useState(0);
  const [stopped, setStopped] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const many = slides.length > 1;

  useEffect(() => {
    if (!many || stopped) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer.current = setInterval(() => setI((n) => (n + 1) % slides.length), DWELL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [many, stopped]);

  function go(n: number) {
    setStopped(true);
    if (timer.current) clearInterval(timer.current);
    setI(((n % slides.length) + slides.length) % slides.length);
  }

  const s = slides[i];

  return (
    <div className="first">
      <div className="firstsplit">
        <figure className="fcover" key={s.name}>
          {s.cover.src ? (
            <Image
              src={s.cover.src}
              alt={s.cover.caption}
              fill
              sizes="(max-width: 900px) 100vw, 640px"
              style={{ objectFit: 'cover', objectPosition: 'left top' }}
              priority
            />
          ) : (
            <span className="t-meta brk" style={{ fontSize: 12, padding: '0 32px', textAlign: 'center' }}>
              {s.cover.caption}
            </span>
          )}
        </figure>

        <div className="fbody">
          <div className="h5bar">
            <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'inline-block', width: 40, height: 2, background: 'var(--color-operate-ink)' }} />
              <span className="t-meta" style={{ fontSize: 12, color: 'var(--color-operate-ink)' }}>
                In production, one at a time
              </span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {many ? (
                <span className="cctrl">
                  <button type="button" onClick={() => go(i - 1)} aria-label="Previous case study">&larr;</button>
                  <button type="button" onClick={() => go(i + 1)} aria-label="Next case study">&rarr;</button>
                </span>
              ) : null}
              <span className="t-meta t-num" style={{ fontSize: 12, color: 'var(--color-muted)' }}>
                {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </span>
          </div>

          <h1 className="fname">
            {s.href ? <Link href={s.href}>{s.name}</Link> : s.name}
          </h1>
          <p className="fline">{s.line}</p>

          <dl className="ffigs">
            <div>
              <dt className="t-disp t-num">{record.systems}</dt>
              <dd>systems in production</dd>
            </div>
            <div>
              <dt className="t-disp t-num">{record.countries}</dt>
              <dd>countries&rsquo; operations</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="h5rail2">
        {productRail.map((p, n) => (
          <div key={`${p.name}-${n}`} className="pcard" aria-current={p.name === s.name ? 'true' : undefined}>
            <div className="top" />
            <div className="in">
              <div className={`t${p.bracket ? ' brk' : ''}`}>{p.name}</div>
              <div className="by">by texxen</div>
            </div>
          </div>
        ))}
      </div>

      <p className="bcap" style={{ fontSize: 13, margin: 0 }}>{s.disclosure}</p>
    </div>
  );
}
