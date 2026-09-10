import type { Metadata } from 'next';
import CaseCarousel from '@/components/CaseCarousel';

/**
 * The home page: the decided case-study carousel (entry 21), in the split
 * layout picked on 10 September.
 *
 * Two departures from Home5B, both deliberate: the opening headline and the
 * six-item section rail are gone. The rail pointed at sections that mostly do
 * not exist, and on a phone the two of them pushed the proof off the screen.
 */

export const metadata: Metadata = {
  description:
    'texxen runs the pipeline from diagnosis through to operating, for banks, lenders and public-sector collecting entities.',
};

export default function Home() {
  return (
    <div className="art">
      <CaseCarousel />
    </div>
  );
}
