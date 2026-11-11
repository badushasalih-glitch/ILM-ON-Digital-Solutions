import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  Check,
  MapPin,
  Building2,
  Award,
} from 'lucide-react';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Naukri Gulf Profile Optimization | UAE & GCC Jobs | ILM-ON',
  description:
    'Specialized Naukri Gulf profile optimization engineered for Dubai, UAE, Saudi Arabia, and Qatar recruitment. GCC visa status setup, keyword engineering, Dubai HR reviewed.',
  keywords: [
    'Naukri Gulf profile optimization',
    'Dubai job portal optimization',
    'UAE recruitment Naukri Gulf',
    'Saudi Arabia jobs Naukri',
    'GCC CV search optimization',
    'ILM-ON Dubai desk',
  ],
  alternates: {
    canonical: 'https://www.ilmondigitalsolutions.online/naukri-gulf-optimization',
  },
  openGraph: {
    title: 'Naukri Gulf Profile Optimization | ILM-ON Digital Solutions',
    description:
      'Engineered specifically for the GCC job market by UAE-experienced HR professionals to maximize recruiter search visibility across Dubai, Abu Dhabi, Doha, and Riyadh.',
    url: 'https://www.ilmondigitalsolutions.online/naukri-gulf-optimization',
    siteName: 'ILM-ON Digital Solutions',
    type: 'website',
  },
};

export default function NaukriGulfOptimizationPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Naukri Gulf Profile Optimization Service',
    provider: {
      '@type': 'Organization',
      name: 'ILM-ON Digital Solutions',
      url: 'https://www.ilmondigitalsolutions.online',
    },
    description:
      'Engineered for GCC recruitment algorithms on Naukri Gulf with visa prominence and keyword indexing.',
    serviceType: 'Career Services',
    areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>DUBAI & GCC RECRUITMENT DESK</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-dark-950 tracking-tight leading-tight">
                Naukri Gulf Optimization. <br />
                <span className="text-teal-accent">Rank High for GCC Recruiters.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Naukri Gulf is the dominant job portal for the United Arab Emirates, Saudi Arabia, and Qatar. Gulf recruiters search for specific parameters: visa status, notice period, GCC experience, and functional domain tags. Our Dubai desk configures your profile to rank at the top of hiring manager queries.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <WhatsAppCTA
                  desk="uae"
                  message="Hello ILM-ON Dubai Desk, I would like to optimize my Naukri Gulf profile."
                  label="Contact Dubai Desk on WhatsApp"
                  variant="primary"
                  size="md"
                />
                <Link
                  href="/pricing"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-dark-950 border border-slate-300 transition-all inline-flex items-center gap-1.5"
                >
                  <span>GCC Job Seeker Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-vivid-blue" />
                  48 Hours Turnaround
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  Dubai HR Reviewed
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  GCC Visa Status Optimization
                </span>
              </div>
            </div>

            {/* Right Hero Preview */}
            <div className="lg:col-span-5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-surface-border shadow-elevated">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-slate-200">
                  <Image
                    src="/assets/career-services/naukri-profile-optimization.jpeg"
                    alt="Naukri Gulf Profile Optimization Sample - ILM-ON Digital Solutions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
                  <span className="font-bold text-dark-950">Naukri Gulf Search Algorithm Setup</span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                    GCC Essential
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gulf Recruiter Search Factors */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
            REGIONAL DYNAMICS
          </span>
          <h2 className="text-3xl font-extrabold text-dark-950 tracking-tight mt-1">
            What Gulf Recruiters Actually Filter For
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Generic resumes fail on Naukri Gulf because recruiter filters prioritize logistics and availability above generic job titles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-accent flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">Visa Status & Notice Period</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Employers in UAE and Saudi Arabia filter aggressively by current visa (Visit Visa, Employment Visa, Golden Visa, Cancelled Visa) and immediate availability (15 days vs 2 months).
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-vivid-blue flex items-center justify-center mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">Gulf Keyword Engineering</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We configure functional areas, role tags, and industry skills matching current hiring mandates across Dubai, Abu Dhabi, Doha, and Riyadh.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">Dubai Desk HR Guidance</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Reviewed by our on-ground Dubai team with direct knowledge of local labor regulations, driving license value, and salary benchmark norms.
            </p>
          </div>
        </div>
      </section>

      {/* Package & Pricing */}
      <section className="py-16 bg-white border-y border-surface-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-slate-50 border border-surface-border shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-200 pb-5 gap-2">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700">
                  GULF RECRUITMENT PACKAGE
                </span>
                <h3 className="text-2xl font-black text-dark-950 mt-1">
                  Naukri Gulf Profile Optimization
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-3xl font-black text-dark-950">₹799</span>
                <span className="text-xs text-slate-500 block">/ AED 35 provisional*</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-6">
              {[
                'Naukri Gulf search algorithm ranking optimization',
                'Prominent GCC visa status & notice period setup',
                'Key skills & functional area categorization',
                'Target job title and Gulf industry alignment',
                'Step-by-step update guide or direct account assistance',
                'Reviewed by certified Dubai desk HR advisory',
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                *Provisional rate. Direct WhatsApp coordination with Dubai desk.
              </span>
              <WhatsAppCTA
                desk="uae"
                message="Hello ILM-ON Dubai Desk, I would like to optimize my Naukri Gulf profile."
                label="Order via Dubai Desk"
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
