import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ivanravic.com';
  return [
    '', '/about', '/contact', '/projects',
    '/projects/portfolio_v2', '/projects/gaginislatkisi',
    '/projects/fundations', '/projects/e-commerce',
  ].map((p) => ({ url: base + p, lastModified: new Date() }));
}
