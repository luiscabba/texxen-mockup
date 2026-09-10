'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * The header as every Applications board draws it: links left in muted, the
 * active one in ink with a hairline under it; the wordmark centred at 48px
 * with the descriptor beneath; one call to action right.
 *
 * The bar the boards drew was systems, products, pipeline, services, work,
 * company. Studies took the systems slot and the register moved to /work under
 * the operating record; products came out entirely. Both are deliberate
 * departures from the boards.
 *
 * All six render whether or not the route is built, because that is what the
 * boards specify. Unbuilt routes are not linked, so nothing 404s.
 */
const NAV = [
  { label: 'studies', href: '/studies/' },
  { label: 'pipeline', href: '/pipeline/' },
  { label: 'services', href: '/services/' },
  { label: 'work', href: '/work/' },
  { label: 'company', href: '/company/' },
];

export default function SiteHeader() {
  const path = usePathname();

  return (
    <div className="wrap">
      <nav className="sitenav">
        <div className="left t-ui">
          {NAV.map((n) => {
            const on = n.href && path.startsWith(n.href.replace(/\/$/, ''));
            const cls = `navlink${on ? ' on' : ''}`;
            return n.href ? (
              <Link key={n.label} href={n.href} className={cls} aria-current={on ? 'page' : undefined}>
                {n.label}
              </Link>
            ) : (
              <span key={n.label} className="navlink">{n.label}</span>
            );
          })}
        </div>
        <Link href="/" className="markblock" aria-label="texxen, home">
          <span className="t-mark wordmark">texxen</span>
          <span className="descriptor t-meta">Design. Build. Operate</span>
        </Link>
        <div className="right t-ui">
          <a href="mailto:luiscabmadrid@gmail.com?subject=Starting%20the%20pipeline" className="cta">
            start the pipeline
          </a>
        </div>
      </nav>
    </div>
  );
}
