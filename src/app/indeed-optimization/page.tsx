import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Zap,
} from 'lucide-react';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Indeed Profile Optimization Services | Recruiter Search Ranking | ILM-ON',
  description:
    'Optimize your Indeed profile for automated resume parsing, standard job titles, and high-volume recruiter searches across India, UAE, and GCC.',
  keywords: [
    'Indeed profile optimization services',
    'Indeed resume parser',
    'Indeed job application optimization',
    'Indeed profile setup India',
    'Indeed Dubai UAE jobs',
    'ILM-ON Indeed optimization',
  ],
  alternates: {
    canonical: 'https://www.ilmondigitalsolutions.online/indeed-optimization',
  },
  openGraph: {
    title: 'Indeed Profile Optimization Services | ILM-ON Digital Solutions',
    description:
      'Structured for seamless resume parsing on Indeed UAE, GCC, and International boards so hiring managers spot your qualifications immediately.',
    url: 'https://www.ilmondigitalsolutions.online/indeed-optimization',
    siteName: 'ILM-ON Digital Solutions',
    type: 'website',
  },
};

export default function IndeedOptimizationPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Indeed Profile Optimization Service',
    provider: {
      '@type': 'Organization',
      name: 'ILM-ON Digital Solutions',
      url: 'https://www.ilmondigitalsolutions.online',
    },
    description:
      'Structured for resume parsing on Indeed UAE, GCC, and International boards.',
    serviceType: 'Career Services',
    areaServed: ['IN', 'AE', 'Global'],
  };

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#003A9B] border border-blue-200">
                <Search className="w-3.5 h-3.5 text-[#003A9B]" />
                <span>HIGH-VOLUME RECRUITER SEARCH OPTIMIZATION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-dark-950 tracking-tight leading-tight">
                Indeed Optimization. <br />
                <span className="text-[#003A9B]">Streamlined for Instant Applications.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Indeed’s resume-matching algorithms score your uploaded resume against open requisitions in real time. We standardize your job titles, skill tags, and assessment profiles so you match employer criteria on Indeed India, Indeed UAE, and international boards.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <WhatsAppCTA
                  desk="both"
                  message="Hello ILM-ON, I would like to optimize my Indeed Profile."
                  label="Optimize Indeed on WhatsApp"
                  variant="primary"
                  size="md"
                />
                <Link
                  href="/pricing"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-dark-950 border border-slate-300 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Explore All Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-vivid-blue" />
                  24–48 Hours Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Instant Apply Ready
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  Parsing Verification
                </span>
              </div>
            </div>

            {/* Right Hero Preview */}
            <div className="lg:col-span-5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-surface-border shadow-elevated">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-slate-200">
                  <Image
                    src="/assets/career-services/indeed-profile-optimization.jpeg"
                    alt="Indeed Profile Optimization Sample - ILM-ON Digital Solutions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
                  <span className="font-bold text-dark-950">Indeed Algorithm Alignment</span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 text-[#003A9B]">
                    High Match Score
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package & Pricing */}
      <section className="py-16 bg-white border-y border-surface-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-slate-50 border border-surface-border shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-200 pb-5 gap-2">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#003A9B]">
                  HIGH-VOLUME APPLICATION SUITE
                </span>
                <h3 className="text-2xl font-black text-dark-950 mt-1">
                  Indeed Profile Optimization
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-3xl font-black text-dark-950">₹499</span>
                <span className="text-xs text-slate-500 block">/ AED 20 provisional*</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-6">
              {[
                'Clean parsing alignment for the Indeed algorithm',
                'Standardized job titles & keyword skill tags',
                'Indeed resume upload formatting verification',
                'Indeed skill assessment readiness guidance',
                'Recruiter search appearance boost checklist',
                '7 days of revision support',
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                *Provisional rate. Confirmed during WhatsApp consultation.
              </span>
              <WhatsAppCTA
                desk="both"
                message="Hello ILM-ON, I would like to optimize my Indeed Profile."
                label="Order Indeed Optimization"
                variant="primary"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
