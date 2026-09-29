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
    'Switch On Your Potential',
    'ATS Friendly CV Dubai',
    'Gulf Recruitment Agency',
    'Naukri Certified HR UAE',
    'Career Services Kerala',
    'Digital Marketing Agency Dubai',
    'Meta Ads Specialists',
    'International CV Formats',
    'Badusha Salih',
    'Fathima Shefeek',
    'Mohamed Sanif',
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
  return (
    <html lang="en">
      <body className="bg-surface-light text-dark-950 antialiased selection:bg-vivid-blue selection:text-white">
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
