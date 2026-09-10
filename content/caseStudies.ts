/**
 * The home carousel's slides, and the product rail beneath it.
 *
 * One slide today. The carousel rotates from two, on the terms recorded at
 * entry 21: a 200ms cross-fade, a seven second dwell, manual controls that are
 * always visible, rotation that stops for good on interaction, and no rotation
 * at all under prefers-reduced-motion. Adding a second case study here is what
 * turns the motion on; nothing in the component changes.
 */

export type Slide = {
  /** Product or client name, as published. */
  name: string;
  /** One line, in the buyer's words. Bracketed until it is written. */
  line: string;
  /** Under the name: production status and where it runs. */
  status: string;
  /** The cover image slot. Bracketed until the capture is placed. */
  cover: { src?: string; caption: string };
  /** Travels with every slide, never with the set. */
  disclosure: string;
  href?: string;
};

export const slides: Slide[] = [
  {
    name: 'OpenCI',
    line: 'The field data collection infrastructure a credit investigation operation runs on.',
    status: 'In production since [year] · PH, Dubai, Singapore',
    cover: {
      src: '/studies/openci/cap-map-national.jpg',
      caption: '835 of the 978 field agents, live on the map. Staging environment, mock data.',
    },
    disclosure:
      'Built for and run at S.P. Madrid, in the same group. Related party. Every cover on this carousel is the same operation, so the line travels with every slide, not with the set.',
    href: '/studies/openci/',
  },
];

/** The rail under the carousel, as the board draws it: two named, four open. */
export const productRail: { name: string; bracket?: boolean }[] = [
  { name: 'OpenCI' },
  { name: 'repo AI' },
  { name: '[product]', bracket: true },
  { name: '[product]', bracket: true },
  { name: '[product]', bracket: true },
  { name: '[product]', bracket: true },
];

/** The two figures in the caption. */
export const record = { systems: 12, countries: 3 };
