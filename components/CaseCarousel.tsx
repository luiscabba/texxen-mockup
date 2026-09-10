'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slides, productRail, record } from '@/content/caseStudies';

const DWELL = 7000;

/**
 * The first screen, entry 21. Rotation only ever starts when there is more
 * than one slide, and stops for good the first time someone touches a control.
 */
export default function CaseCarousel() {
  const [i, setI] = useState(0);
  const [stopped, setStopped] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const many = slides.length > 1;

  useEffect(() => {
    if (!many || stopped) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;
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
    <div className="h5main">
      <h1 className="h5open">
        Recovery runs on systems assembled from parts nobody owns end to end. We run the pipeline
        from diagnosis through to operating.{' '}
        <span className="brk" style={{ fontSize: 17 }}>
          [opening line reopened, question 45. Candidates on Opening]
        </span>
      </h1>

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

      <div className="h5cover" key={s.name} aria-live="polite">
        {s.cover.src ? (
          <Image src={s.cover.src} alt={s.cover.caption} fill sizes="(max-width: 760px) 100vw, 1000px" style={{ objectFit: 'cover' }} priority />
        ) : (
          <span className="t-meta brk" style={{ fontSize: 12, textAlign: 'center', padding: '0 40px' }}>
            {s.cover.caption}
          </span>
        )}
      </div>
      {s.cover.src ? (
        <p className="bcap" style={{ fontSize: 12, margin: '-8px 0 0' }}>{s.cover.caption}</p>
      ) : null}

      <div className="h5slidefoot">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div className="t-disp" style={{ fontSize: 34, lineHeight: 1.1 }}>
            {s.href ? <Link href={s.href}>{s.name}</Link> : s.name}
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.5, maxWidth: '44ch', color: 'var(--color-muted)' }}>
            {s.line}
          </div>
          <div className="t-ui" style={{ fontSize: 15, marginTop: 4 }}>
            {s.status.split(/(\[[^\]]+\])/).map((part, n) =>
              part.startsWith('[') ? <span key={n} className="brk">{part}</span> : <span key={n}>{part}</span>,
            )}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
          <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span className="t-disp t-num" style={{ fontSize: 34 }}>{record.systems}</span>
            <span className="bcap" style={{ fontSize: 14 }}>systems in production</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span className="t-disp t-num" style={{ fontSize: 34 }}>{record.countries}</span>
            <span className="bcap" style={{ fontSize: 14 }}>countries&rsquo; operations</span>
          </span>
        </div>
      </div>

      <div className="h5rail2">
        {productRail.map((p, n) => (
          <div key={`${p.name}-${n}`} className="pcard" aria-current={p.name === s.name ? 'true' : undefined}>
            <div className="top" />
            <div className="in">
              <div className={`t${p.bracket ? ' brk' : ''}`}>{p.name}</div>
              <div className="by">by texxen</div>
              {p.name === s.name ? (
                <div className="prog"><i style={{ width: '46%' }} /></div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <p className="bcap" style={{ fontSize: 14, margin: 0 }}>{s.disclosure}</p>
    </div>
  );
}
