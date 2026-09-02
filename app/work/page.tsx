import type { Metadata } from 'next';
import WorkIndex from '@/components/WorkIndex';

export const metadata: Metadata = {
  title: 'The Works',
  description: 'What we built, and what is still on our schedule.',
};

export default function WorkPage() {
  return <WorkIndex />;
}
