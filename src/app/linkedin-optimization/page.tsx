import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Linkedin,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  Check,
  TrendingUp,
  UserCheck,
} from 'lucide-react';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'LinkedIn Profile Optimization Services | Recruiter Magnet | ILM-ON',
  description:
    'Transform your LinkedIn presence into an inbound recruiter magnet. Search algorithm keyword optimization, compelling narrative About section, top 50 skills taxonomy.',
  keywords: [
    'LinkedIn profile optimization services',
    'LinkedIn makeover India',
    'LinkedIn optimization Dubai UAE',
    'recruiter search algorithm LinkedIn',
    'executive LinkedIn branding',
    'ILM-ON LinkedIn services',
  ],
  alternates: {
    canonical: 'https://www.ilmondigitalsolutions.online/linkedin-optimization',
  },
  openGraph: {
    title: 'LinkedIn Profile Optimization Services | ILM-ON Digital Solutions',
    description:
      'Engineered for recruiter search algorithms. Professional headline, story-driven About narrative, and top 50 skills indexing.',
    url: 'https://www.ilmondigitalsolutions.online/linkedin-optimization',
    siteName: 'ILM-ON Digital Solutions',
    type: 'website',
  },
};

export default function LinkedInOptimizationPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'LinkedIn Profile Optimization Service',
    provider: {
      '@type': 'Organization',
      name: 'ILM-ON Digital Solutions',
      url: 'https://www.ilmondigitalsolutions.online',
    },
    description:
      'Professional LinkedIn profile optimization service engineered for recruiter search algorithms and executive personal branding.',
    serviceType: 'Career Services',
    areaServed: ['Global', 'IN', 'AE', 'SA'],
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0A66C2] border border-blue-200">
                <Linkedin className="w-3.5 h-3.5 fill-[#0A66C2]" />
                <span>EXECUTIVE PERSONAL BRANDING & ALGORITHM INDEXING</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-dark-950 tracking-tight leading-tight">
                LinkedIn Optimization. <br />
                <span className="text-[#0A66C2]">Turn Views Into Inbound Calls.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Recruiters and executive headhunters use LinkedIn Recruiter search algorithms every day to source talent. We rewrite your headline, narrative About section, and top 50 skills matrix so your profile indexes at the top of relevant candidate searches.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <WhatsAppCTA
                  desk="both"
                  message="Hello ILM-ON, I want to optimize my LinkedIn Profile."
                  label="Optimize Profile on WhatsApp"
                  variant="primary"
                  size="md"
                />
                <Link
                  href="/pricing"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-dark-950 border border-slate-300 transition-all inline-flex items-center gap-1.5"
                >
                  <span>View Career Boost Bundle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-vivid-blue" />
                  48 Hours Turnaround
                </span>
                <span className="flex items-center gap-1.5">
                  <Search className="w-4 h-4 text-[#0A66C2]" />
                  Top 50 Skills Taxonomy
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  1-on-1 Consultant Review
                </span>
              </div>
            </div>

            {/* Right Hero Preview */}
            <div className="lg:col-span-5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-surface-border shadow-elevated">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-slate-200">
                  <Image
                    src="/assets/career-services/linkedin-profile-optimization.jpeg"
                    alt="LinkedIn Profile Optimization Work Sample - ILM-ON Digital Solutions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
                  <span className="font-bold text-dark-950">Recruiter-Magnetic Structure</span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-sky-100 text-[#0A66C2]">
                    High Visibility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Optimization */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A66C2]">
            OUR METHODOLOGY
          </span>
          <h2 className="text-3xl font-extrabold text-dark-950 tracking-tight mt-1">
            How We Transform Your Profile
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A complete overhaul covering algorithmic discovery and human relationship building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Magnetic Search Headline',
              desc: 'Combining target job titles, domain specializations, industry certifications, and key search terms within 220 characters.',
            },
            {
              title: 'First-Person Story Narrative',
              desc: 'A compelling "About" section that articulates your leadership ethos, major career inflection points, and core value proposition.',
            },
            {
              title: 'Experience Re-framing',
              desc: 'Transforming passive task lists into quantifiable achievement bullets highlighting business revenue, cost savings, or efficiency.',
            },
            {
              title: 'Top 50 Skills Taxonomy',
              desc: 'Populating LinkedIn’s 50-skill limit with the exact terminology verified in corporate recruiter search filters.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-surface-border shadow-card">
              <CheckCircle2 className="w-5 h-5 text-[#0A66C2] mb-3" />
              <h3 className="text-sm font-bold text-dark-950 mb-1.5">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Package Deliverables & Pricing */}
      <section className="py-16 bg-white border-y border-surface-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-slate-50 border border-surface-border shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-200 pb-5 gap-2">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0A66C2]">
                  PROFILE OVERHAUL SUITE
                </span>
                <h3 className="text-2xl font-black text-dark-950 mt-1">
                  LinkedIn Profile Optimization
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-3xl font-black text-dark-950">₹970</span>
                <span className="text-xs text-slate-500 block">/ AED 40 provisional*</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-6">
              {[
                'Search-algorithm keyword engineered headline',
                'Compelling first-person "About" narrative & career story',
                'Experience section rewriting with quantified metrics',
                'Top 50 skills taxonomy alignment for recruiter search filters',
                'Step-by-step PDF implementation guide or direct update',
                'Comprehensive 1-on-1 review with a career consultant',
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
                message="Hello ILM-ON, I want to optimize my LinkedIn Profile."
                label="Enquire via WhatsApp"
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
