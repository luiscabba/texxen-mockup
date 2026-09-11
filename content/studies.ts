/**
 * Case studies. One per entry, and the same shape carries a product
 * deployment and a client engagement without changing, which is the rule the
 * project page template sets.
 *
 * OpenCI's content is the TX OpenCI case study document, verbatim in
 * substance: no figure here is inferred.
 */

export type Figure = {
  /** Under /public. Every capture is from a staging environment on mock data. */
  src: string;
  caption: string;
  w: number;
  h: number;
};

/** A section is a run of paragraphs and figure groups, in reading order. */
export type Block =
  | { t: 'p'; text: string }
  | { t: 'fig'; layout: 'wide' | 'pair' | 'phones'; items: Figure[] };

export type Study = {
  slug: string;
  /** Published name. */
  name: string;
  /** "by texxen" for a product; the client's name for an engagement. */
  attribution: string;
  /** One sentence of standfirst, never two. */
  standfirst: string;
  /**
   * The front card. One dominant figure, the stages engaged, one paragraph of
   * summary and the service lines. Everything on it runs full width.
   */
  card: {
    sector: string;
    countries: string;
    figure: string;
    figureLabel: string;
    /** Plain text, slash separated on the page. No colour: the ground has it. */
    stages: string[];
    running: string;
    lines: string[];
    summary: string;
    /** Which stage hue the card takes. Operate for a study about running something. */
    hue: 'diagnose' | 'design' | 'build' | 'operate';
  };
  sections: { n: string; title: string; pull?: string; blocks: Block[] }[];
  /** The ink band before the outcome. */
  resolution: { line: string; body: string };
  outcomes: { value: string; label: string; window: string }[];
  /** Travels with the study wherever it appears. */
  disclosure: string;
};

export const studies: Study[] = [
  {
    slug: 'openci',
    name: 'OpenCI',
    attribution: 'by texxen',
    standfirst:
      'The field data collection infrastructure a credit investigation operation runs on.',
    card: {
      sector: 'Collections and credit investigation',
      countries: 'Philippines, Dubai, Singapore',
      figure: '978',
      figureLabel: 'field agents working on the platform across S.P. Madrid operations',
      stages: ['diagnose', 'design', 'build', 'launch', 'operate'],
      running: 'and running',
      lines: ['systems', 'intelligence'],
      summary:
        'S.P. Madrid runs credit investigation in the field, where the office cannot see it. texxen built the capture, the command center, the configurable form and report layer and the audit engine, in that order. The record now starts at the address rather than at the desk.',
      hue: 'operate',
    },
    sections: [
      {
        n: '01',
        title: 'Problem',
        pull: 'Credit investigation happens where the office cannot see it.',
        blocks: [
          { t: 'fig', layout: 'wide', items: [
            { src: '/studies/openci/cap-map-national.jpg', caption: 'Fig. 1. 835 of the 978 field agents, live on the map. Staging environment, mock data.', w: 1000, h: 550 },
          ] },
          { t: 'p', text: 'An investigation is a field job. Someone has to stand at an address, speak to a neighbour, photograph a house and form a judgement about whether a borrower is who and where they say they are. Under S.P. Madrid’s operations, 978 of them work across the country at the same time.' },
          { t: 'p', text: 'The moment the investigator leaves the office, the operation goes blind. It stays blind until paperwork comes back, sometimes days later, and what comes back is a description of the visit rather than the visit itself.' },
          { t: 'p', text: 'Blindness of that size does not stay a management inconvenience. It becomes a credibility problem, because a recorded visit and an actual visit look identical on paper. The operation could not reliably separate a slow route from a route that was never driven.' },
          { t: 'p', text: 'That puts fraud exposure on the lending institution and leaves honest investigators under the same suspicion as everyone else.' },
        ],
      },
      {
        n: '02',
        title: 'Challenge',
        pull: 'Visibility is easy to buy for ten people and impossible to buy for 978.',
        blocks: [
          { t: 'fig', layout: 'wide', items: [
            { src: '/studies/openci/dia-supervision.png', caption: 'Fig. 2. The supervisory answer, and what replaced it. Drawn.', w: 1386, h: 516 },
          ] },
          { t: 'p', text: 'The obvious answer is supervision, and it does not survive contact with the numbers. Supervisors scale linearly with headcount, cost linearly with headcount, and produce a report of a report rather than evidence. The layer meant to solve the blindness becomes another place information gets lost.' },
          { t: 'p', text: 'The second problem is where proof has to come from. Evidence of a visit is only worth anything if it is captured at the moment of the visit, and that is exactly the moment nobody is watching and the investigator has every reason to keep moving.' },
          { t: 'p', text: 'Any verification that costs the fieldman extra time gets worked around, and a verification that gets worked around is worse than none, because it looks like assurance.' },
          { t: 'p', text: 'So the requirement was narrow and awkward: make 978 people legible to the office in real time, without inserting a layer of people between the field and the decision, and make the proof a by-product of doing the job.' },
        ],
      },
      {
        n: '03',
        title: 'Journey',
        pull: 'The order the work happened in is the argument.',
        blocks: [
          { t: 'fig', layout: 'wide', items: [
            { src: '/studies/openci/dia-phases.png', caption: 'Fig. 3. Four phases. Each one a precondition for the next. Drawn.', w: 1386, h: 384 },
          ] },
          { t: 'p', text: 'The app came first. Nothing downstream can be trusted if the input is a description written after the fact, so the work started at the point of capture. The design constraint was that filling the form had to be faster than writing the report by hand. Verification came along as a consequence of that rather than as an addition to it, which is the only version of it that survives contact with a working fieldman.' },
          { t: 'p', text: 'Then the office. With capture structured, the command center could be built around the record the app already produced. Building the office view first would have produced a dashboard fed by whatever the field happened to send. Building it second meant it could be fed by a record with a known shape.' },
          { t: 'p', text: 'Then the configurable shape. Different institutions want the investigation in different shapes: different fields, different criteria, different report formats. Every client-specific accommodation becomes a variant, and every variant becomes a special case someone has to remember. Seen from the client’s end it is a flexibility problem; seen from the operation’s end it is a standardisation problem. They are the same problem, and one answer closes both: make the shape itself configurable, and push that logic back into the form and rating builders, so a new investigation type is defined rather than released.' },
          { t: 'fig', layout: 'wide', items: [
            { src: '/studies/openci/dia-shapes.png', caption: 'Fig. 4. A report per client, and one configurable shape. Drawn.', w: 1386, h: 510 },
          ] },
          { t: 'fig', layout: 'wide', items: [
            { src: '/studies/openci/cap-form.jpg', caption: 'Fig. 5. The form builder that made the configurable shape possible: a new investigation type is defined rather than released. Staging environment, mock data.', w: 1000, h: 405 },
          ] },
          { t: 'p', text: 'Then integrity. Anomaly detection was last because it needs a baseline, and the baseline is the accumulated history of what real visits look like. Calibration ran roughly two to three months.' },
          { t: 'p', text: 'Then sideways. The same infrastructure carried the adjacent work: demand letters, skips and collect, litigation, TeleCI.' },
        ],
      },
      {
        n: '04',
        title: 'Solution',
        pull: 'The record starts at the address, not at the desk.',
        blocks: [
          { t: 'p', text: 'A mobile app for iOS and Android. Agents receive and accept assignments, then work each task through a fixed sequence: driving, transfer presentation, disposition, complete. Fields are structured and validated at the point of capture. Photographs are geotagged. Time on task is recorded as the work happens rather than reported afterwards.' },
          { t: 'fig', layout: 'phones', items: [
            { src: '/studies/openci/cap-route.jpg', caption: 'Fig. 6. One agent’s route as the office sees it.', w: 860, h: 621 },
            { src: '/studies/openci/cap-m-tp.jpg', caption: 'The same task on the phone: transfer presentation.', w: 430, h: 899 },
            { src: '/studies/openci/cap-m-disp.jpg', caption: 'And disposition. Staging environment, mock data.', w: 430, h: 899 },
          ] },
          { t: 'p', text: 'The investigator fills the form because it is the fastest way to finish the job. The evidence is what falls out of that: the geotag, the timestamp, the activity log, the distance driven between one address and the next. The office sees the same record at the same moment. Nothing is retold, so nothing is lost in the retelling.' },
          { t: 'p', text: 'In the office: live task tracking with position, route, distance and ETA, grouped by contract. Bulk assignment and endorsement upload. A report builder where every field is shown or hidden per report, with saved layouts and exportable presets. Written assessment aggregated from captured fields. In-app delivery, composed and sent from inside the platform, compressed and encrypted. Workforce management. An audit trail carrying every change with operator, timestamp and before-and-after values. New investigation types and criteria defined by the operation itself.' },
          { t: 'fig', layout: 'wide', items: [
            { src: '/studies/openci/cap-dl.jpg', caption: 'Fig. 8. Endorsement management across the whole book. Borrower fields are masked at source. Staging environment, mock data.', w: 1000, h: 506 },
          ] },
          { t: 'p', text: 'A short-cut visit gives itself away three ways: a disposition closed far from the target address, a run of tasks closed impossibly fast, and no movement between two separate addresses. None proves anything alone. Each raises a ticket with the evidence attached, and a person reads it.' },
          { t: 'fig', layout: 'pair', items: [
            { src: '/studies/openci/cap-anomaly.jpg', caption: 'Fig. 9. The concern queue. Every flag is a ticket a person reads.', w: 1000, h: 439 },
            { src: '/studies/openci/cap-gpsmetric.jpg', caption: 'One ticket, opened: the threshold, the measurement and the gap between them.', w: 900, h: 310 },
          ] },
          { t: 'p', text: 'Detection is the easy half. The hard half is choosing where the line sits. A threshold set too tight floods the queue with honest work until reviewers stop opening it, and a system nobody reads is worse than no system, because it looks like assurance. Set too loose it catches nothing and looks identical from the outside. Every rule is a number the operation owns, with a history of who changed it, which is why calibration ran two to three months rather than two to three weeks.' },
          { t: 'fig', layout: 'wide', items: [
            { src: '/studies/openci/dia-threshold.png', caption: 'Fig. 7. Filled marks are tickets raised. The calibration question is never how much it detects, but how much a reviewer will still open. Illustrative, not measured.', w: 1386, h: 276 },
          ] },
          { t: 'fig', layout: 'wide', items: [
            { src: '/studies/openci/cap-thresholds.jpg', caption: 'Fig. 10. Every rule is a number the operation owns, with a history of who changed it. Staging environment, mock data.', w: 900, h: 459 },
          ] },
        ],
      },
    ],
    resolution: {
      line: 'The office sees 835 agents in real time without a supervisory layer.',
      body: 'Visibility became a property of the record rather than of someone watching: 835 of the 978 agents on the platform report their position as they work. Proof is captured as a by-product: the investigator fills the form because it is the fastest way to finish the job, and the geotag, the timestamp and the activity log come with it.',
    },
    outcomes: [
      { value: '780,000', label: 'accounts completed', window: 'worked and closed since launch' },
      { value: '30,000 to 40,000', label: 'field visits a week', window: 'all services, around 5,000 a day' },
      { value: '10 to 25', label: 'visits per agent', window: 'in a single day' },
    ],
    disclosure:
      'S.P. Madrid operations, across all OpenCI services. A company in the same group as texxen, stated as a related party. Screens are captured from a staging environment carrying mock data, and diagrams are drawn. No production record appears here.',
  },
];

export function getStudy(slug: string) {
  return studies.find((s) => s.slug === slug);
}
