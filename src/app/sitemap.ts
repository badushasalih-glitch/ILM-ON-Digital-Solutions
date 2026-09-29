import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ilmondigitalsolutions.online';
  const routes = [
    '',
    '/career-services',
    '/recruitment',
    '/digital-marketing',
    '/about',
    '/team',
    '/portfolio',
    '/client-stories',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/career-services') || route.startsWith('/recruitment') || route.startsWith('/digital-marketing') ? 0.9 : 0.8,
  }));
}
