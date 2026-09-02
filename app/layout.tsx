import type { Metadata } from 'next';
import localFont from 'next/font/local';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const boska = localFont({
  variable: '--f-boska',
  display: 'block',
  src: [
    { path: '../public/fonts/Boska.woff2', weight: '100 900', style: 'normal' },
    { path: '../public/fonts/Boska-Italic.woff2', weight: '100 900', style: 'italic' },
  ],
});

const erode = localFont({
  variable: '--f-erode',
  display: 'block',
  src: [{ path: '../public/fonts/Erode.woff2', weight: '100 900', style: 'normal' }],
});

const satoshi = localFont({
  variable: '--f-satoshi',
  display: 'block',
  src: [{ path: '../public/fonts/Satoshi.woff2', weight: '100 900', style: 'normal' }],
});

// Stardom ships one cut. Never synthesise a weight or a slant from it.
const stardom = localFont({
  variable: '--f-stardom',
  display: 'block',
  src: [{ path: '../public/fonts/Stardom.woff2', weight: '400', style: 'normal' }],
});

export const metadata: Metadata = {
  title: { default: 'texxen', template: '%s, texxen' },
  description: 'Brand systems that ship, and keep shipping.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${boska.variable} ${erode.variable} ${satoshi.variable} ${stardom.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
