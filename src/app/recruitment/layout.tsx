import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ILM-ON Recruitment | Connecting Talent with Opportunity | India & GCC',
  description: 'Structured candidate sourcing, screening, shortlisting, and interview coordination across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and India.',
  keywords: [
    'ILM-ON Recruitment',
    'GCC recruitment',
    'UAE recruitment',
    'Saudi Arabia recruitment',
    'Qatar recruitment',
    'Kuwait recruitment',
    'Bahrain recruitment',
    'Oman recruitment',
    'GCC jobs',
    'talent sourcing',
    'candidate recruitment',
    'executive search Dubai',
    'India GCC recruitment',
  ],
  alternates: {
    canonical: 'https://www.ilmondigitalsolutions.online/recruitment',
  },
  openGraph: {
    title: 'ILM-ON Recruitment | Connecting Talent with Opportunity',
    description: 'Recruitment solutions connecting corporate employers with suitable professionals across India and the GCC.',
    url: 'https://www.ilmondigitalsolutions.online/recruitment',
    siteName: 'ILM-ON Digital Solutions',
    images: [
      {
        url: '/assets/brand/ILM ON Recruitment OFFICIAL Logo.png',
        width: 1200,
        height: 630,
        alt: 'ILM-ON Recruitment',
      },
    ],
  },
};

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Executive Search & Talent Recruitment',
    provider: {
      '@type': 'Organization',
      name: 'ILM-ON Digital Solutions',
      url: 'https://www.ilmondigitalsolutions.online',
    },
    areaServed: ['IN', 'AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
    description: 'Connecting businesses with suitable candidates across India and the GCC through structured talent sourcing, screening, and interview coordination.',
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
