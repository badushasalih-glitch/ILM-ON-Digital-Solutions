import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickySupportPill from '@/components/StickySupportPill';

export const metadata: Metadata = {
  title: 'Best ATS Friendly CV & Resume Writing Services | ILM ON Digital Solutions',
  description:
    'Get shortlisted with ATS-compliant resumes, Gulf & Europass formats, and executive LinkedIn optimization. Direct support via WhatsApp (+91 92929406522) and UAE (+971 56 295 8907).',
  keywords: [
    'ATS Friendly CV Services',
    'ATS Resume Writing Service',
    'Best ATS CV Maker',
    'Professional CV Writing UAE',
    'Dubai Resume Writing Services',
    'Gulf Format CV',
    'Dubai ATS Resume',
    'Europass CV Maker',
    'Europass CV Builder',
    'International Resume Consultant',
    'Executive LinkedIn Optimization',
    'Top Rated CV Writers',
    'ILM ON Digital Solutions',
    'Switch On Your Potential',
  ],
  authors: [{ name: 'ILM ON Digital Solutions' }],
  metadataBase: new URL('https://www.ilmondigitalsolutions.online'),
  alternates: {
    canonical: 'https://www.ilmondigitalsolutions.online/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Best ATS Friendly CV & Resume Writing Services | ILM ON Digital Solutions',
    description:
      'Get shortlisted with ATS-compliant resumes, Gulf & Europass formats, and executive LinkedIn optimization. Direct support via WhatsApp (+91 92929406522) and UAE (+971 56 295 8907).',
    url: 'https://www.ilmondigitalsolutions.online/',
    siteName: 'ILM ON Digital Solutions',
    images: [
      {
        url: '/assets/brand/ilm-on-logo.png',
        width: 1200,
        height: 630,
        alt: 'ILM ON Digital Solutions - Career Acceleration',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best ATS Friendly CV & Resume Writing Services | ILM ON Digital Solutions',
    description:
      'Get shortlisted with ATS-compliant resumes, Gulf & Europass formats, and executive LinkedIn optimization. Direct support via WhatsApp (+91 92929406522) and UAE (+971 56 295 8907).',
    images: ['/assets/brand/ilm-on-logo.png'],
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': 'https://www.ilmondigitalsolutions.online/#business',
        name: 'ILM ON Digital Solutions',
        url: 'https://www.ilmondigitalsolutions.online',
        logo: 'https://www.ilmondigitalsolutions.online/assets/brand/ilm-on-logo.png',
        image: 'https://www.ilmondigitalsolutions.online/assets/brand/ilm-on-logo.png',
        telephone: '+9192929406522',
        priceRange: '$$',
        currenciesAccepted: 'INR, AED, USD',
        paymentAccepted: 'UPI, NetBanking, UAE Bank Transfer, Credit Card, Payment Link',
        slogan: 'Switch On Your Potential',
        description:
          'ILM ON Digital Solutions provides specialized ATS-compliant CV writing, Gulf & Europass format resumes, LinkedIn profile overhauls, and executive career consulting.',
        areaServed: ['IN', 'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'Global', 'Worldwide'],
        address: [
          {
            '@type': 'PostalAddress',
            addressLocality: 'Malappuram',
            addressRegion: 'Kerala',
            postalCode: '676307',
            addressCountry: 'IN',
          },
          {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressCountry: 'AE',
          },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+9192929406522',
            contactType: 'customer service',
            areaServed: ['IN', 'Worldwide'],
            availableLanguage: ['English', 'Hindi', 'Malayalam'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+971562958907',
            contactType: 'recruitment & regional desk',
            areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
            availableLanguage: ['English', 'Arabic', 'Hindi', 'Malayalam'],
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '240',
          bestRating: '5',
          worstRating: '1',
        },
        sameAs: [
          'https://www.instagram.com/ilmon_digitalsolutions/',
          'https://www.linkedin.com/company/ilm-on-digital-solutions/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.ilmondigitalsolutions.online/#website',
        url: 'https://www.ilmondigitalsolutions.online',
        name: 'ILM ON Digital Solutions',
        publisher: {
          '@id': 'https://www.ilmondigitalsolutions.online/#business',
        },
      },
      {
        '@type': ['Organization', 'HiringOrganization'],
        '@id': 'https://www.ilmondigitalsolutions.online/#recruitment-network',
        name: 'ILM ON GCC Talent Recruitment & Opportunity Network',
        url: 'https://www.ilmondigitalsolutions.online/#candidates-hired',
        description:
          'Recruitment partner and candidate placement ecosystem connecting Indian and GCC talent with enterprise employers across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.',
        parentOrganization: {
          '@id': 'https://www.ilmondigitalsolutions.online/#business',
        },
        areaServed: ['AE', 'IN', 'SA', 'QA', 'KW', 'OM', 'BH', 'Global'],
        knowsAbout: [
          'First Abu Dhabi Bank (FAB)',
          'Kuwait Finance House (KFH)',
          'ADNOC Group',
          'SABIC',
          'Ooredoo',
          'National Bank of Kuwait (NBK)',
          'Almarai',
          'QatarEnergy',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.ilmondigitalsolutions.online/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What makes an ATS-friendly CV different from a regular CV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An ATS-friendly CV uses a clean single-column structure, standard section headings, and parse-safe typography that recruitment software can read without losing information or jumbling layout.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast will I receive my first draft?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Standard delivery turnaround is 24 to 48 hours from receipt of consultation details. Express 12 to 24 hour turnaround is available upon request on WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'What file formats do I receive upon delivery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You receive both a high-resolution print-ready PDF and a fully editable Microsoft Word (.docx) file, ensuring full lifetime ownership to update your document in the future.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you optimize my resume specifically for Dubai and the GCC market?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Our active Dubai desk configures prominent GCC visa status, notice periods, and industry-specific Gulf keywords verified for Naukri Gulf, Indeed UAE, and regional recruiters.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do revisions work if I need adjustments?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You receive a 7-day free revision window with up to 2 comprehensive revision rounds included at no additional cost.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body className="bg-surface-light text-dark-950 antialiased selection:bg-vivid-blue selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickySupportPill />
      </body>
    </html>
  );
}
