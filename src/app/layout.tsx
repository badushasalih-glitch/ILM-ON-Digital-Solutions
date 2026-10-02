import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'ILM-ON Digital Solutions | Switch On Your Potential | Career • Recruitment • Digital Growth',
  description: 'ILM-ON Digital Solutions is an international career and business accelerator operating across Dubai, UAE and India. Specializing in ATS-Friendly Resumes, Gulf Executive Recruitment, and High-Performance Digital Marketing.',
  keywords: [
    'ILM-ON Digital Solutions',
    'Career Services',
    'Recruitment',
    'ADS ON',
    'Digital Marketing',
    'GCC recruitment',
    'UAE recruitment',
    'Saudi Arabia recruitment',
    'Qatar recruitment',
    'Kuwait recruitment',
    'Bahrain recruitment',
    'Oman recruitment',
    'ATS CV Resume services',
    'LinkedIn profile optimization',
    'GCC jobs',
    'talent sourcing',
    'candidate recruitment',
    'Meta Ads',
    'Google Ads',
    'SEO',
    'social media marketing',
    'Switch On Your Potential',
  ],
  authors: [{ name: 'ILM-ON Digital Solutions' }],
  metadataBase: new URL('https://www.ilmondigitalsolutions.online'),
  openGraph: {
    title: 'ILM-ON Digital Solutions | Switch On Your Potential',
    description: 'We build careers, not just CVs. Connecting talent with global opportunity and scaling enterprises digitally.',
    url: 'https://www.ilmondigitalsolutions.online',
    siteName: 'ILM-ON Digital Solutions',
    images: [
      {
        url: '/assets/brand/ilm-on-logo.png',
        width: 1200,
        height: 630,
        alt: 'ILM-ON Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/assets/brand/ilm-on-official-badge.png',
    shortcut: '/assets/brand/ilm-on-official-badge.png',
    apple: '/assets/brand/ilm-on-official-badge.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.ilmondigitalsolutions.online/#organization',
        name: 'ILM-ON Digital Solutions',
        url: 'https://www.ilmondigitalsolutions.online',
        logo: 'https://www.ilmondigitalsolutions.online/assets/brand/ilm-on-logo.png',
        slogan: 'Switch On Your Potential',
        description: 'ILM-ON Digital Solutions provides dedicated Career Services, Recruitment Support & Consultancy, and Ads & Digital Marketing across India and the GCC.',
        sameAs: [
          'https://www.instagram.com/ilmon_digitalsolutions/',
          'https://www.linkedin.com/company/ilm-on-digital-solutions/',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91-9292940652',
            contactType: 'customer service',
            areaServed: ['IN', 'AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
            availableLanguage: ['English', 'Hindi', 'Malayalam', 'Arabic'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+971-562528518',
            contactType: 'recruitment desk',
            areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
            availableLanguage: ['English', 'Arabic', 'Hindi', 'Malayalam'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.ilmondigitalsolutions.online/#website',
        url: 'https://www.ilmondigitalsolutions.online',
        name: 'ILM-ON Digital Solutions',
        publisher: {
          '@id': 'https://www.ilmondigitalsolutions.online/#organization',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body className="bg-surface-light text-dark-950 antialiased selection:bg-vivid-blue selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
