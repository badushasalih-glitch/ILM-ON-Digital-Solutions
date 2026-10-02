import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ILM-ON Career Services | ATS-Friendly CV & Profile Optimization | UAE & GCC',
  description: 'Precision-engineered ATS resumes delivered within 24 hours. Specialized LinkedIn, Indeed, and Naukri Gulf profile optimization for UAE, GCC, Europe, and India.',
  keywords: [
    'ILM-ON Career Services',
    'ATS CV Resume services',
    'ATS Friendly CV Dubai',
    'Resume Writing UAE',
    'LinkedIn profile optimization',
    'Naukri Gulf Profile Optimization',
    'Indeed Resume Formatting',
    'GCC jobs CV formatting',
    'Executive CV Dubai',
    'Cover Letter Writing',
  ],
  alternates: {
    canonical: 'https://www.ilmondigitalsolutions.online/career-services',
  },
  openGraph: {
    title: 'ILM-ON Career Services | ATS Resumes & Profile Optimization',
    description: 'Precision-engineered ATS resumes delivered within 24 hours. Compliant with UAE, GCC, and international applicant tracking systems.',
    url: 'https://www.ilmondigitalsolutions.online/career-services',
    siteName: 'ILM-ON Digital Solutions',
    images: [
      {
        url: '/assets/brand/ILM - ON Career Services Official Logo NEW.png',
        width: 1200,
        height: 630,
        alt: 'ILM-ON Career Services',
      },
    ],
  },
};

export default function CareerServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Career Architecture & ATS Resume Writing',
    provider: {
      '@type': 'Organization',
      name: 'ILM-ON Digital Solutions',
      url: 'https://www.ilmondigitalsolutions.online',
    },
    areaServed: ['IN', 'AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
    description: 'Professional ATS CV writing, cover letters, and profile optimization for LinkedIn, Indeed, and Naukri Gulf.',
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
