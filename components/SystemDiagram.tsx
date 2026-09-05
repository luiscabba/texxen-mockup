/**
 * System views are vector, monochrome plus one service colour. Required on any
 * project whose services include systems or intelligence. One id per diagram,
 * keyed from the project's `systemDiagram` field.
 */
export default function SystemDiagram({ id }: { id: DiagramId }) {
  if (id === 'two-sided-model') return <TwoSidedModel />;
  if (id !== 'case-pipeline') return null;
  return (
    <svg
      viewBox="0 0 880 258"
      width="880"
      height="258"
      role="img"
      aria-label="An intake form, an email and WhatsApp feed and an agent portal all write to one case record, which drives a document checker, a throughput dashboard and a review queue that holds flagged cases only."
    >
      <defs>
        <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 10 5 0 10z" fill="#C2BFB5" />
        </marker>
      </defs>
      <g fontFamily="var(--font-ui)" fontSize="13" fontWeight="500">
        <g fill="#FCFCFA" stroke="#111110" strokeWidth="1.2">
          <rect x="8" y="26" width="150" height="46" rx="8" />
          <rect x="8" y="106" width="150" height="46" rx="8" />
          <rect x="8" y="186" width="150" height="46" rx="8" />
        </g>
        <g fill="#111110" textAnchor="middle">
          <text x="83" y="54">Intake form</text>
          <text x="83" y="134">Email and WhatsApp</text>
          <text x="83" y="214">Agent portal</text>
        </g>
        <rect x="286" y="86" width="176" height="86" rx="8" fill="#FCFCFA" stroke="#0A7A55" strokeWidth="1.6" />
        <text x="374" y="123" fill="#0A7A55" textAnchor="middle">Case record</text>
        <text x="374" y="144" fill="#6E6C66" textAnchor="middle" fontSize="11.5">one row per application</text>
        <g fill="#FCFCFA" stroke="#0A7A55" strokeWidth="1.6">
          <rect x="584" y="16" width="172" height="46" rx="8" />
          <rect x="584" y="106" width="172" height="46" rx="8" />
        </g>
        <rect x="584" y="196" width="172" height="46" rx="8" fill="#FCFCFA" stroke="#111110" strokeWidth="1.2" />
        <g textAnchor="middle">
          <text x="670" y="44" fill="#0A7A55">Document checker</text>
          <text x="670" y="134" fill="#0A7A55">Throughput dashboard</text>
          <text x="670" y="224" fill="#111110">Review queue</text>
        </g>
        <g stroke="#C2BFB5" strokeWidth="1.3" fill="none" markerEnd="url(#ar)">
          <path d="M158 49h64q12 0 12 12v18q0 12 12 12h34" />
          <path d="M158 129h122" />
          <path d="M158 209h64q12 0 12-12v-18q0-12 12-12h34" />
          <path d="M462 118h56q12 0 12-12V51q0-12 12-12h34" />
          <path d="M462 129h114" />
          <path d="M462 140h56q12 0 12 12v57q0 12 12 12h34" />
        </g>
        <text x="670" y="186" fill="#6E6C66" fontSize="11" textAnchor="middle">flagged only</text>
      </g>
    </svg>
  );
}

/** Ids every diagram in this file answers to. Widen with the union in content/projects.ts. */
export type DiagramId = 'case-pipeline' | 'two-sided-model';

/**
 * Two routes into the same obligation: a government requirement arrives stated,
 * an originated idea has to find an investor first, and both end in the same
 * build-then-operate commitment.
 */
function TwoSidedModel() {
  return (
    <svg
      viewBox="0 0 880 258"
      width="880"
      height="258"
      role="img"
      aria-label="A government requirement and an originated idea both reach the same build step, the idea by way of an investor who funds or buys it, and both routes end in Smart UAE operating the system it built."
    >
      <defs>
        <marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 10 5 0 10z" fill="#C2BFB5" />
        </marker>
      </defs>
      <g fontFamily="var(--font-ui)" fontSize="13" fontWeight="500">
        <g fill="#FCFCFA" stroke="#111110" strokeWidth="1.2">
          <rect x="8" y="26" width="176" height="46" rx="8" />
          <rect x="8" y="186" width="176" height="46" rx="8" />
          <rect x="252" y="186" width="168" height="46" rx="8" />
        </g>
        <g fill="#111110" textAnchor="middle">
          <text x="96" y="54">Government requirement</text>
          <text x="96" y="214">Originated idea</text>
          <text x="336" y="214">Investor funds or buys</text>
        </g>
        <g fill="#FCFCFA" stroke="#0A7A55" strokeWidth="1.6">
          <rect x="470" y="100" width="150" height="58" rx="8" />
          <rect x="690" y="100" width="182" height="58" rx="8" />
        </g>
        <g textAnchor="middle">
          <text x="545" y="124" fill="#0A7A55">Build</text>
          <text x="545" y="144" fill="#6E6C66" fontSize="11.5">to stated requirements</text>
          <text x="781" y="124" fill="#0A7A55">Operate</text>
          <text x="781" y="144" fill="#6E6C66" fontSize="11.5">the years after launch</text>
        </g>
        <g stroke="#C2BFB5" strokeWidth="1.3" fill="none" markerEnd="url(#ar2)">
          <path d="M184 49h150q12 0 12 12v47q0 12 12 12h112" />
          <path d="M184 209h60" />
          <path d="M420 209h14q12 0 12-12v-47q0-12 12-12h12" />
          <path d="M620 129h70" />
        </g>
        <text x="440" y="250" fill="#6E6C66" fontSize="11" textAnchor="middle">as modelled; neither route has run end to end yet</text>
      </g>
    </svg>
  );
}
