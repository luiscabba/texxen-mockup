import type { Metadata } from 'next';
import WorkIndex from '@/components/WorkIndex';

/**
 * The work index is the home page. There is no separate landing page: the
 * argument for texxen is the work, so the front door opens straight onto it.
 * /work redirects here (see next.config.ts). Project pages keep /work/[slug].
 */
export const metadata: Metadata = {
  description: 'What we built, and what is still on our schedule.',
};

export default function Home() {
  return <WorkIndex />;
}
