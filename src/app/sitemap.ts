import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ilmondigitalsolutions.online';
  const routes = [
    '',
    '/career-services',
    '/ats-cv',
    '/cover-letter',
    '/europass-cv',
    '/linkedin-optimization',
    '/naukri-gulf-optimization',
    '/indeed-optimization',
    '/cv-templates',
    '/pricing',
    '/recruitment',
    '/digital-marketing',
    '/portfolio',
    '/client-stories',
    '/about',
    '/team',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority:
      route === ''
        ? 1.0
        : [
            '/career-services',
            '/ats-cv',
            '/cover-letter',
            '/recruitment',
            '/digital-marketing',
          ].includes(route)
        ? 0.9
        : 0.8,
  }));
}
