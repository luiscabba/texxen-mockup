import Link from 'next/link';

/**
 * The four column footer every route board carries: the mark, the registered
 * address, the vendor assessment path with the related-party line, and the
 * colophon. Bracketed exactly where the boards bracket.
 */
export default function SiteFooter() {
  return (
    <div className="wrap">
      <footer className="sitefoot">
        <div className="footcols">
          <div>
            <div className="t-mark" style={{ fontSize: 40, lineHeight: 1 }}>texxen</div>
            <div className="t-meta" style={{ fontSize: 10, color: 'var(--color-muted)', marginTop: 8 }}>
              Design. Build. Operate
            </div>
          </div>

          <div>
            <div className="t-meta foothead" style={{ fontSize: 10 }}>Registered in Makati</div>
            <p className="footp">17th Floor Chatham House, Rufino St., Salcedo Village, Makati City 1226</p>
            <p className="footp brk">[registered name and registration number]</p>
          </div>

          <div>
            <div className="t-meta foothead" style={{ fontSize: 10 }}>For a vendor assessment</div>
            <p className="footp">
              security &nbsp;&middot;&nbsp; <Link href="/company/" className="footlink">company</Link>
              &nbsp;&middot;&nbsp; the document set, on request
            </p>
            <p className="footp" style={{ marginTop: 14 }}>
              The operating record cited on this site is S.P. Madrid, a company in the same group as
              texxen, and is stated as a related party.
            </p>
          </div>

          <div>
            <div className="t-meta foothead" style={{ fontSize: 10 }}>Colophon</div>
            <p className="footp">Set in Boska, Erode, Satoshi and Stardom by the Indian Type Foundry.</p>
            <p className="footp">Amounts in PHP.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
