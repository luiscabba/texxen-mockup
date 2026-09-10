import type { NextConfig } from 'next';

/**
 * Vercel runs Next natively, so the site is no longer a static export.
 * That buys back next/image optimization, which matters here: the project
 * pages carry four or five full-width plates each.
 *
 * `trailingSlash` stays because every internal Link is written with one. The
 * /work to / redirect is gone: /work is its own route again, the four-category
 * index the board draws, and / is the case-study carousel.
 * `generateStaticParams` and `dynamicParams = false` also stay on /work/[slug]:
 * they are no longer required by the platform, but they keep the project pages
 * prerendered at build time and 404 anything that is not a real slug.
 */
const nextConfig: NextConfig = {
  trailingSlash: true,
};

export default nextConfig;
