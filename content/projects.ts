/**
 * Single source of truth for every project on the site.
 *
 * The work index, its two filter axes and every project detail page read from
 * this file. Never hardcode project data into a page component: the filters are
 * derived from what is here, and hardcoding desynchronises them.
 *
 * Adding a project: append to `projects`. Adding an industry needs no code.
 */

export type Service = 'brand' | 'web' | 'content' | 'demand' | 'systems' | 'intel';

export type Stage = 'diagnose' | 'design' | 'build' | 'launch' | 'operate';

export const STAGES: Stage[] = ['diagnose', 'design', 'build', 'launch', 'operate'];

export type Media = {
  /** Path under /public, e.g. "/projects/okpo/app-mockup.jpg" */
  src: string;
  /** Doubles as the alt text. Every plate needs one. */
  caption: string;
};

export type Project = {
  /** URL segment: /work/[slug]. Must not collide with RESERVED_SLUGS. */
  slug: string;
  title: string;
  /** Single value, drives the industry filter on the work index. */
  industry: string;
  year: string;
  services: Service[];
  /**
   * Weeks spent per stage, in stage order. 0 means the stage was not engaged.
   * The single source of truth for the stage rail and the "n of 5" count.
   * Do not store a separate stagesEngaged array.
   */
  stageWeeks: [number, number, number, number, number];
  /** True while texxen is still on retainer. Drives the open-ended rail tail
   *  and the "Operating now" block. */
  live: boolean;
  /** How the engagement stands, in plain words. Shown in the fact rail. */
  status: string;
  /** One line, on the work index card. Carries a number or a mechanism. */
  outcome: string;
  /** One line under the title on the detail page. Longer than `outcome`. */
  dek: string;
  /** The business problem in the client's terms. Two short paragraphs. */
  brief: string[];
  /** One per engaged stage, in stage order. */
  stageBlocks: {
    stage: Stage;
    heading: string;
    body: string;
    shipped: string[];
    media: Media[];
  }[];
  /** The plate directly under the header. */
  hero: Media | { blank: true; caption: string };
  /** Required on any project whose services include systems or intel. */
  systemDiagram?: 'case-pipeline';
  /** At least three, each with the measurement window stated honestly.
   *  A project without numbers does not go on the site. */
  outcomes: { value: string; label: string; window: string }[];
  /** Renders only when live is true. */
  operatingNow?: { what: string; cadence: string }[];
  credits: { role: string; name: string }[];
  /** Work index presentation. Heights vary deliberately: uniform kills the grid. */
  card: { height: number; bg: string; fg: string; cover?: string;
    /** background-position for the cover, when centring crops the wrong part. */
    position?: string };
};

/** Names a project must never use, because a static route already owns them. */
export const RESERVED_SLUGS = ['work', 'services', 'pipeline', 'studio', 'journal', 'contact', 'careers'];

export const projects: Project[] = [
  {
    slug: 'okpo',
    title: 'OKPO',
    industry: 'Creator economy',
    year: '2024',
    services: ['brand', 'web'],
    stageWeeks: [2, 6, 0, 0, 0],
    live: false,
    status: 'handed over at concept close',
    outcome: 'A brand, a community site and five app flows, handed over as one system.',
    dek: 'A brand, a community site and a member loan app, drawn as one system for a Filipino creator platform.',
    brief: [
      'OkPo wanted a home for Filipino creators and esports communities, with a financing arm that let members borrow against what they were already building. At the point the work started there was a business model on a whiteboard and no visual language to test it with.',
      'The brief had to do two jobs at once: give the founders something concrete enough to pitch, and leave behind a system an in-house team could build on later without starting the design over.',
    ],
    hero: {
      src: '/projects/okpo/website-v2.jpg',
      caption: 'The V2 community site, shown beside the component breakdown it was built from.',
    },
    stageBlocks: [
      {
        stage: 'diagnose',
        heading: 'Settling what the loan arm was for',
        body: 'Worked through the model with the founders before anything was drawn. Who borrows, against what, and what the platform has to know about a member before it lends. That question decided most of the app.',
        shipped: ['Product and business-model concepts', 'Feature set for the loan arm', 'Member states the app has to represent'],
        media: [],
      },
      {
        stage: 'design',
        heading: 'One brand carried across a site and an app',
        body: 'A logo tested on three grounds rather than one, so it survives a yellow header, a black app bar and a white deck. The design system that came out of it fixes colour, a Jockey One and Poppins scale, and primary and alternate button states, which is what let the site and the app be drawn to the same rules.',
        shipped: [
          'Logo lockups on white, brand yellow and black',
          'Design system: colour, type scale, button states',
          'V2 community site with a full component breakdown',
          'Five app flows drawn end to end',
        ],
        media: [
          { src: '/projects/okpo/logo-variations.jpg', caption: 'Logo variations across the three brand grounds.' },
          { src: '/projects/okpo/design-system.jpg', caption: 'The design system sheet: #F8D557, #221F20 and #D4D0C5, a Jockey One and Poppins scale, and both button states.' },
          { src: '/projects/okpo/app-mockup.jpg', caption: 'Login, loan dashboard and member chat, all set from the same system.' },
          { src: '/projects/okpo/app-concepts.jpg', caption: 'The full screen flow: onboarding variants, dashboard, add loan, transactions and chat.' },
        ],
      },
    ],
    outcomes: [
      { value: '5', label: 'app flows drawn end to end: onboarding, loan dashboard, loan application, transactions, chat', window: 'delivered 2024' },
      { value: '3', label: 'logo lockups tested, one per brand ground, so the mark holds on all three', window: 'delivered 2024' },
      { value: '2', label: 'site versions, with V2 handed over as a full component breakdown', window: 'delivered 2024' },
      { value: '1', label: 'design system: colour, a Jockey One and Poppins scale, and both button states', window: 'handed over at close' },
    ],
    credits: [
      { role: 'Strategy and design', name: 'Luis Cabb' },
      { role: 'Client', name: 'OkPo' },
    ],
    card: { height: 420, bg: '#221F20', fg: '#F5F0E6', cover: '/projects/okpo/app-mockup.jpg' },
  },
  {
    slug: 'daddydappy',
    title: 'DaddyDappy',
    industry: 'Web3',
    year: '2022',
    services: ['brand', 'web', 'content'],
    stageWeeks: [3, 10, 5, 4, 0],
    live: false,
    status: 'closed at launch',
    outcome: '18 drawn characters, five feature UIs and a landing page shipped on Wix.',
    dek: 'Brand, characters, feature UI and a shipped landing page for a token-gated community boardroom.',
    brief: [
      'Crypto communities gather on Discord, Telegram and Twitter, and none of those can prove who actually holds the token. Founders end up talking past bots, and the holders who do hold get no more access than anyone who wandered in.',
      'DaddyDappy answered that with a token-gated boardroom: part forum, part channel list, with leaderboards, reward gifting and public listings so communities could compete for a top spot. Everything the project showed the public had to explain that in one pass.',
    ],
    hero: {
      src: '/projects/daddydappy/landing-mockups.jpg',
      caption: 'The landing page and the public rankings screen, where boardrooms compete on rewards, activity and members.',
    },
    stageBlocks: [
      {
        stage: 'diagnose',
        heading: 'What the gate actually has to prove',
        body: 'The concept only works if holding the token buys something a Discord role cannot. Mapping that with the founders is what turned a gate into a boardroom: rewards you can only receive inside it, messaging only holders can open, and a public ranking that gives the whole thing a scoreboard.',
        shipped: ['Boardroom concept', 'Feature set: leaderboards, rewards, holder-only messaging', 'Public ranking model'],
        media: [],
      },
      {
        stage: 'design',
        heading: 'A mascot that could carry a whitepaper and a feed',
        body: 'Green and yellow, and a Daddy mascot drawn to survive both a 40 by 40 avatar and a full-page whitepaper spread. The Tribute Collection extended it to 18 hand-drawn pop-culture characters, which gave the community something to hold before the product existed.',
        shipped: ['Brand direction: logo, palette, the Daddy mascot', '18 hand-drawn Tribute Collection characters', 'Use-case UI for five boardroom features'],
        media: [
          { src: '/projects/daddydappy/usecase-ui.jpg', caption: 'Use-case UI iterations: boardrooms, leaderboards, community rewards, holder-only messaging and social integration.' },
        ],
      },
      {
        stage: 'build',
        heading: 'The page, built and shipped on Wix',
        body: 'The landing page was designed and then built by the same hand, on Wix, which kept the gap between the comp and the live page down to what the platform could not do rather than what got lost in handover.',
        shipped: ['Landing page designed and shipped', 'Public rankings screen'],
        media: [
          { src: '/projects/daddydappy/laptop-mockup.jpg', caption: 'The shipped landing page: open and ready-to-use community boardroom dapp.' },
        ],
      },
      {
        stage: 'launch',
        heading: 'Whitepaper, cover to roadmap',
        body: 'The whitepaper had to carry the argument to people who would never see a demo, so it was set in the same green and the same mascot rather than a separate document identity.',
        shipped: ['Whitepaper, cover to roadmap', 'Tribute Collection reveal pages'],
        media: [
          { src: '/projects/daddydappy/whitepaper.jpg', caption: 'Whitepaper pages: cover, contents, the 2022 to 2023 roadmap, and the 18-piece Tribute collection.' },
        ],
      },
    ],
    outcomes: [
      { value: '18', label: 'hand-drawn characters in the Tribute Collection', window: 'delivered Q2 2022' },
      { value: '5', label: 'boardroom features given use-case UI: boardrooms, leaderboards, messaging, rewards, social', window: 'Q2 to Q3 2022' },
      { value: '2', label: 'public assets shipped: the Wix landing page and the whitepaper', window: 'live Q4 2022' },
      { value: '9 mo', label: 'from first brand direction to the page going live', window: 'Q1 to Q4 2022' },
    ],
    credits: [
      { role: 'Product and UI/UX design', name: 'Luis Cabb' },
      { role: 'Client', name: 'DaddyDappy' },
    ],
    card: { height: 300, bg: '#101711', fg: '#EAF3EC', cover: '/projects/daddydappy/laptop-mockup.jpg' },
  },
];

/*
 * Waiting on real numbers before they go public. Both are real engagements; the
 * figures and stage weeks from the mockup loop were invented and must be
 * replaced with measured ones before either is uncommented.
 *
 * {
 *   slug: 'visa-services-group',
 *   title: 'Visa services group',      // name pending client permission
 *   industry: 'Immigration',
 *   year: '2025',
 *   services: ['web', 'systems', 'intel'],
 *   stageWeeks: [?, ?, ?, 0, ?],       // real weeks on the account
 *   live: true,
 *   systemDiagram: 'case-pipeline',    // required: services include systems and intel
 *   outcomes: [...],                   // at least three, each with a real window
 *   operatingNow: [...],               // required while live is true
 *   card: { height: 360, bg: '#14161B', fg: '#F1EFE8' },
 * },
 * {
 *   slug: 'government-software-trading',
 *   title: 'Government software trading',
 *   industry: 'Public sector',
 *   year: '2025',
 *   services: ['brand', 'systems', 'demand'],
 *   stageWeeks: [?, ?, ?, ?, ?],
 *   live: true,
 *   systemDiagram: 'case-pipeline',
 *   card: { height: 440, bg: '#F4F3EF', fg: '#111110' },
 * },
 */

export const industries = [...new Set(projects.map((p) => p.industry))].sort();

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function stagesEngaged(p: Project) {
  return p.stageWeeks.filter((w) => w > 0).length;
}

/** Which services were active in a given stage, for the chips docked under the rail. */
export function stageServices(p: Project, stage: Stage): Service[] {
  const weight: Record<Stage, Service[]> = {
    diagnose: ['brand', 'intel'],
    design: ['brand', 'web'],
    build: ['web', 'systems'],
    launch: ['content', 'demand'],
    operate: ['systems', 'intel', 'content', 'demand'],
  };
  const hit = p.services.filter((s) => weight[stage].includes(s));
  return hit.length ? hit : p.services.slice(0, 1);
}
