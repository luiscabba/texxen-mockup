import Link from 'next/link';

/**
 * The shared footer, four columns, lifted from the route boards. It carries
 * three things no other surface guarantees: the registered address, the route
 * a vendor-risk reader takes, and the related-party line, which travels with
 * every page on which the operating record is cited.
 */
export default function SiteFooter() {
  return (
    <div className="wrap">
      <footer className="sitefoot">
        <div className="footcols">
          <div>
            <div className="t-mark" style={{ fontSize: '2.5rem', lineHeight: 1 }}>texxen</div>
            <div className="t-meta" style={{ color: 'var(--color-muted)', marginTop: 10 }}>
              Design. Build. Operate
            </div>
          </div>

          <div>
            <div className="t-meta foothead">Registered in Makati</div>
            <p className="footp">
              17th Floor Chatham House, Rufino St.,
              <br />
              Salcedo Village, Makati City 1226
            </p>
          </div>

          <div>
            <div className="t-meta foothead">For a vendor assessment</div>
            <p className="footp">
              <Link href="/company/" className="footlink">company</Link>
              {' · '}
              the document set, on request
            </p>
          </div>

          <div>
            <div className="t-meta foothead">Colophon</div>
            <p className="footp">
              Set in Boska, Erode, Satoshi and Stardom by the Indian Type Foundry.
              <br />
              Amounts in PHP.
            </p>
          </div>
        </div>

        <p className="relparty">
          The operating record cited on this site is S.P. Madrid, a company in the same group as
          texxen, and is stated as a related party.
        </p>
      </footer>
    </div>
  );
}
