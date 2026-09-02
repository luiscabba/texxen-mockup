import type { Service } from '@/content/projects';

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

export const SERVICE: Record<Service, { name: string; ink: string; soft: string }> = {
  brand: { name: 'brand', ink: '#C4441B', soft: '#FF6A3D' },
  web: { name: 'web', ink: '#1F4FD8', soft: '#3D7BFF' },
  content: { name: 'content', ink: '#B3246E', soft: '#F0479B' },
  demand: { name: 'demand', ink: '#9A6B00', soft: '#FFC22E' },
  systems: { name: 'systems', ink: '#0A7A55', soft: '#12D68F' },
  intel: { name: 'intelligence', ink: '#6229C7', soft: '#9B6BFF' },
};

export default function ServiceMark({
  service,
  size = 18,
  weight = 2,
  tone = 'ink',
  style,
}: {
  service: Service;
  size?: number;
  weight?: number;
  /** soft is for fills and mark bodies only, never for type on paper */
  tone?: 'ink' | 'soft';
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={SERVICE[service][tone]}
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
