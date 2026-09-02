export default function SiteFooter() {
  return (
    <div className="wrap">
      <footer className="sitefoot">
        <div>
          <div className="t-disp" style={{ fontSize: '2.25rem', lineHeight: 1.1, maxWidth: '18ch' }}>
            Brand systems that ship, and keep shipping.
          </div>
          <a
            href="mailto:luiscabmadrid@gmail.com?subject=Starting%20the%20pipeline"
            className="cta t-ui"
            style={{ marginTop: 24 }}
          >
            start the pipeline
          </a>
        </div>
        <div className="t-meta" style={{ color: 'var(--color-faint)' }}>texxen &middot; 2026</div>
      </footer>
    </div>
  );
}
