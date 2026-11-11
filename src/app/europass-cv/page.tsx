import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe2,
  FileText,
  FileCheck,
  Check,
  Award,
} from 'lucide-react';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Europass CV Writing Services | European Commission Standard | ILM-ON',
  description:
    'Official Europass CV format structured for applications across Germany, Ireland, Malta, Poland, and EU-wide employment or study. CEFR language grid & EU mobility compliance.',
  keywords: [
    'Europass CV writing services',
    'European Union CV format',
    'Europass CV Germany Ireland Poland Malta',
    'CEFR language scale resume',
    'European Commission CV format',
    'ILM-ON Europass CV',
  ],
  alternates: {
    canonical: 'https://www.ilmondigitalsolutions.online/europass-cv',
  },
  openGraph: {
    title: 'Europass CV Writing Services | ILM-ON Digital Solutions',
    description:
      'Official European Union standardized format adhering to European Commission protocols and CEFR language scales.',
    url: 'https://www.ilmondigitalsolutions.online/europass-cv',
    siteName: 'ILM-ON Digital Solutions',
    type: 'website',
  },
};

export default function EuropassCvPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Europass CV Writing Service',
    provider: {
      '@type': 'Organization',
      name: 'ILM-ON Digital Solutions',
      url: 'https://www.ilmondigitalsolutions.online',
    },
    description:
      'Official Europass standard CV formatting aligned with European Commission guidelines for EU job and visa applications.',
    serviceType: 'Career Services',
    areaServed: ['EU', 'IN', 'AE'],
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#003399] border border-blue-200">
                <Compass className="w-3.5 h-3.5" />
                <span>EUROPEAN COMMISSION COMPLIANCE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-dark-950 tracking-tight leading-tight">
                Official Europass CV. <br />
                <span className="text-[#003399]">Recognized Across the EU.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Applying for jobs, research fellowships, or university programs in Germany, Ireland, Malta, Poland, or anywhere in the European Union? The official Europass curriculum vitae format is the European standard for cross-border recruitment and qualification equivalence.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <WhatsAppCTA
                  desk="both"
                  message="Hello ILM-ON, I would like to order an official Europass Standard CV."
                  label="Order Europass CV on WhatsApp"
                  variant="primary"
                  size="md"
                />
                <Link
                  href="/portfolio"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-dark-950 border border-slate-300 transition-all inline-flex items-center gap-1.5"
                >
                  <span>View Europass Samples</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-vivid-blue" />
                  24–48 Hours Turnaround
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-[#003399]" />
                  27 EU Member States
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  CEFR Language Grid Included
                </span>
              </div>
            </div>

            {/* Right Hero Sample */}
            <div className="lg:col-span-5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-surface-border shadow-elevated">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white border border-slate-200">
                  <Image
                    src="/assets/cv-europass-1.png"
                    alt="Official Europass Curriculum Vitae Sample - ILM-ON Digital Solutions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
                  <span className="font-bold text-dark-950">Official Europass Framework</span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 text-[#003399]">
                    EU Recognized
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European Commission Distinctive Standards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#003399]">
            EUROPEAN DIRECTIVES
          </span>
          <h2 className="text-3xl font-extrabold text-dark-950 tracking-tight mt-1">
            Why Europass Requires Precision Formatting
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            The European Union established Europass to establish cross-border transparency of skills and qualifications. Standard commercial resumes do not conform to these specific guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#003399] flex items-center justify-center mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">CEFR Language Framework</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standardized European language self-assessment matrix (Listening, Reading, Spoken Interaction, Spoken Production, Writing from A1 to C2 mastery level).
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-accent flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">Digital Competences Grid</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Structured reporting of information and data literacy, communication and collaboration, digital content creation, safety, and problem-solving competences.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">EU Work Visa Readiness</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Required by German EU Blue Card authorities, Polish work visa sponsors, Irish employment bureaus, and Maltese healthcare recruiters.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables & Pricing */}
      <section className="py-16 bg-white border-y border-surface-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-slate-50 border border-surface-border shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-200 pb-5 gap-2">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#003399]">
                  OFFICIAL EU PACKAGE
                </span>
                <h3 className="text-2xl font-black text-dark-950 mt-1">
                  Europass Standard Curriculum Vitae
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-3xl font-black text-dark-950">₹899</span>
                <span className="text-xs text-slate-500 block">/ AED 35 provisional*</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-6">
              {[
                'Standard European Commission layout and typography',
                'Mother tongue & language proficiency matrix (CEFR)',
                'Digital competence & technical skill inventory',
                'Institutional educational equivalence alignment',
                'Delivered in editable Word (.docx) & official PDF',
                '7 days of free revisions with an EU career specialist',
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
                message="Hello ILM-ON, I would like to order a Europass Standard CV."
                label="Order Europass CV on WhatsApp"
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
