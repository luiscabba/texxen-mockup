import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="art" style={{ padding: '120px 40px 160px' }}>
      <h1 className="t-disp" style={{ fontSize: '3rem', margin: 0, letterSpacing: '-.025em' }}>
        Nothing at this address.
      </h1>
      <p style={{ color: 'var(--color-muted)', fontSize: '1.0625rem', marginTop: 16 }}>
        The page you asked for is not on the site.
      </p>
      <p style={{ marginTop: 28 }}>
        <Link href="/work/" className="cta t-ui">see the work</Link>
      </p>
    </div>
  );
}
