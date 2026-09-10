import type { Service, Stage } from '@/content/projects';

/**
 * The six service marks. Path data lives here and nowhere else: every mark on
 * the site, at every size, is drawn from this one map.
 */
export const MARK_PATH: Record<Service, string> = {
  brand: 'M12 21V4M12 9.2 16.4 5.6M12 9.2 7.6 5.6M12 14 17 10.4M12 14 7 10.4M12 18.8 17 15.2M12 18.8 7 15.2',
  web: 'M4 4.5h16M4 19.5h16M9 4.5v15M15 4.5v15',
  content: 'M3 9.5c3.5-5 6.5-5 9 0 2.5-5 5.5-5 9 0M3 17c3.5-5 6.5-5 9 0 2.5-5 5.5-5 9 0',
  demand: 'M14.4 3.4a9 9 0 1 0 5.2 11.8 9 9 0 0 1-5.2-11.8Z',
  systems: 'M12 3.5v17M12 7 7.4 5.2M12 7l4.6-1.8M12 12 7 10.2M12 12l5-1.8M12 17 7.4 15.2M12 17l4.6-1.8',
  intel: 'M7 3.5v17M17 3.5v17M7 8h10M7 12h10M7 16h10',
};

/**
 * Entry 23: a hue means a pipeline stage. Launch carries no hue and is drawn
 * in ink, which is why it is absent from this map.
 */
export const STAGE_COLOUR: Record<Exclude<Stage, 'launch'>, { ink: string; soft: string }> = {
  diagnose: { ink: 'var(--color-diagnose-ink)', soft: 'var(--color-diagnose-soft)' },
  design: { ink: 'var(--color-design-ink)', soft: 'var(--color-design-soft)' },
  build: { ink: 'var(--color-build-ink)', soft: 'var(--color-build-soft)' },
  operate: { ink: 'var(--color-operate-ink)', soft: 'var(--color-operate-soft)' },
};

/** Ink for any stage, including launch, which is ink by rule. */
export function stageInk(stage: Stage) {
  return stage === 'launch' ? 'var(--color-ink)' : STAGE_COLOUR[stage].ink;
}

/** The line each service nests under. No line carries a hue of its own. */
export const SERVICE_STAGE: Record<Service, Stage> = {
  brand: 'design',
  web: 'build',
  content: 'operate',
  demand: 'operate',
  systems: 'operate',
  intel: 'operate',
};

export const SERVICE: Record<Service, { name: string }> = {
  brand: { name: 'brand' },
  web: { name: 'web' },
  content: { name: 'content' },
  demand: { name: 'demand' },
  systems: { name: 'systems' },
  intel: { name: 'intelligence' },
};

export default function ServiceMark({
  service,
  size = 18,
  weight = 2,
  tone = 'neutral',
  stage,
  style,
}: {
  service: Service;
  size?: number;
  weight?: number;
  /**
   * Entry 23: neutral is the default and is correct almost everywhere. A mark
   * only takes a hue when it sits inside a section about one stage, and then
   * it takes that stage's hue, not the line's. `soft` is a fill tone: never
   * set it as type on paper.
   */
  tone?: 'neutral' | 'ink' | 'soft';
  /** Overrides the line's own stage when the mark sits in a stage section. */
  stage?: Stage;
  style?: React.CSSProperties;
}) {
  const key = stage ?? SERVICE_STAGE[service];
  const stroke =
    tone === 'neutral'
      ? 'currentColor'
      : key === 'launch'
        ? 'var(--color-ink)'
        : STAGE_COLOUR[key][tone];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      <path d={MARK_PATH[service]} />
    </svg>
  );
}
