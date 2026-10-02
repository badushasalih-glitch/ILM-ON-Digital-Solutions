import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADS ON — Powered by ILM-ON | Creative Advertising Agency | Turn Your Brand ON',
  description: 'Ads that get attention. Digital that gets results. Meta Ads, Google Ads, SEO, Social Media, Content, Websites, and Creative Production across India & the GCC.',
  keywords: [
    'ADS ON',
    'ADS ON Powered by ILM ON',
    'Digital Marketing',
    'Meta Ads',
    'Google Ads',
    'SEO',
    'social media marketing',
    'Creative Advertising Agency Dubai',
    'Lead generation campaigns',
    'Personal Portfolio Website',
    'Website Design and scroll animations',
  ],
  alternates: {
    canonical: 'https://www.ilmondigitalsolutions.online/digital-marketing',
  },
  openGraph: {
    title: 'ADS ON — Powered by ILM-ON | Creative Advertising Agency',
    description: 'Turn Your Brand ON. Creative advertising and digital marketing agency delivering strategic campaigns across Meta, Google, and digital feeds.',
    url: 'https://www.ilmondigitalsolutions.online/digital-marketing',
    siteName: 'ILM-ON Digital Solutions',
    images: [
      {
        url: '/assets/brand/ADS ON OFFICIAL LOGO.png',
        width: 1200,
        height: 630,
        alt: 'ADS ON — Powered by ILM-ON',
      },
    ],
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Creative Advertising & Digital Marketing',
    provider: {
      '@type': 'Organization',
      name: 'ADS ON — Powered by ILM-ON',
      url: 'https://www.ilmondigitalsolutions.online',
    },
    areaServed: ['IN', 'AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
    description: 'Comprehensive creative advertising, Meta & Google Ads management, SEO, social media, and bespoke web architecture.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
