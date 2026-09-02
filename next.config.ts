import type { NextConfig } from 'next';

/**
 * Vercel runs Next natively, so the site is no longer a static export.
 * That buys back next/image optimization, which matters here: the project
 * pages carry four or five full-width plates each.
 *
 * `trailingSlash` stays because every internal Link is written with one.
 * `generateStaticParams` and `dynamicParams = false` also stay on /work/[slug]:
 * they are no longer required by the platform, but they keep the project pages
 * prerendered at build time and 404 anything that is not a real slug.
 */
const nextConfig: NextConfig = {
  trailingSlash: true,

  // The work index moved to /. Anything still pointing at /work follows it,
  // permanently. /work/[slug] is untouched.
  async redirects() {
    return [{ source: '/work', destination: '/', permanent: true }];
  },
};

export default nextConfig;
