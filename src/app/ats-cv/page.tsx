import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  FileCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  HelpCircle,
  MessageCircle,
  FileText,
  Layers,
  Zap,
} from 'lucide-react';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'ATS-Friendly CV Writing Services | Pass Recruiter Parsers | ILM-ON',
  description:
    'Professional ATS CV writing engineered to pass applicant tracking systems (Workday, Taleo, Greenhouse, Naukri Gulf). Role-aligned keywords, parse-safe structure, editable Word & PDF.',
  keywords: [
    'ATS CV writing services',
    'ATS friendly resume',
    'applicant tracking system resume',
    'ATS CV India',
    'ATS CV Dubai UAE',
    'parse safe resume format',
    'ILM-ON Digital Solutions ATS CV',
  ],
  alternates: {
    canonical: 'https://www.ilmondigitalsolutions.online/ats-cv',
  },
  openGraph: {
    title: 'ATS-Friendly CV Writing Services | ILM-ON Digital Solutions',
    description:
      'Engineered for applicant tracking algorithms and human recruiters. Pass initial digital screening with optimized keyword density.',
    url: 'https://www.ilmondigitalsolutions.online/ats-cv',
    siteName: 'ILM-ON Digital Solutions',
    type: 'website',
  },
};

export default function AtsCvPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ATS-Friendly CV Writing Service',
    provider: {
      '@type': 'Organization',
      name: 'ILM-ON Digital Solutions',
      url: 'https://www.ilmondigitalsolutions.online',
    },
    description:
      'Professional ATS CV writing service engineered for applicant tracking systems with role-aligned keywords and quantifiable achievements.',
    serviceType: 'Career Services',
    areaServed: ['IN', 'AE', 'SA', 'QA'],
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-vivid-blue border border-blue-200">
                <FileCheck className="w-3.5 h-3.5" />
                <span>APPLICANT TRACKING SYSTEM SPECIALIZATION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-dark-950 tracking-tight leading-tight">
                ATS-Friendly CV Writing. <br />
                <span className="text-vivid-blue">Engineered to Pass Parsers.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Over 75% of online corporate applications are screened by Applicant Tracking Systems before a human recruiter ever sees them. We structure your CV to pass automated algorithmic filters with role-aligned keyword density and clean, parse-safe architecture.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <WhatsAppCTA
                  desk="both"
                  message="Hello ILM-ON, I would like to order an ATS-Friendly CV."
                  label="Order ATS CV on WhatsApp"
                  variant="primary"
                  size="md"
                />
                <Link
                  href="/cover-letter"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-all inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Combo Offer: ATS CV + Cover Letter (₹999)</span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-vivid-blue" />
                  24–48 Hours Turnaround
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  Free 7-Day Revisions
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  Word (.docx) + PDF Delivery
                </span>
              </div>
            </div>

            {/* Right Hero Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-surface-border shadow-elevated bg-slate-50 p-4">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white border border-slate-200">
                  <Image
                    src="/assets/career-services/ats-sample-faizal.jpeg"
                    alt="ATS-Friendly CV Sample Blueprint - ILM-ON Digital Solutions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
                  <span className="font-bold text-dark-950">ATS Executive Template Blueprint</span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    100% Parser Safe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ATS & Why it Matters */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-vivid-blue flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">Zero Parser Obstacles</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Fancy columns, floating icons, tables, and graphic text boxes cause standard ATS software (Workday, Taleo, Greenhouse) to fail during text parsing, resulting in automatic rejection.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-accent flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">Target Keyword Density</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We extract and align hard skills, functional competencies, and recognized industry terminology from your target job descriptions so your match index score ranks high.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">Compelling to Human Reviewers</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Passing the parser is only step one. Once your document reaches the hiring team, our quantifiable Context-Action-Result (CAR) bullet points immediately demonstrate your business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Who Needs an ATS CV */}
      <section className="py-16 bg-white border-y border-surface-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              SUITABILITY CRITERIA
            </span>
            <h2 className="text-3xl font-extrabold text-dark-950 tracking-tight mt-1">
              Who Should Choose an ATS-Friendly CV?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              If your job search involves online portal submissions, an ATS format is mandatory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Corporate Portal Applicants',
                desc: 'Applying directly via Workday, Taleo, iCIMS, Greenhouse, or corporate career sites where automated parsing is enforced.',
              },
              {
                title: 'GCC & Dubai Job Seekers',
                desc: 'Submitting resumes across Naukri Gulf, Bayt, and multinational Gulf corporations in UAE, Qatar, and Saudi Arabia.',
              },
              {
                title: 'Tech & Engineering Experts',
                desc: 'Requiring rigorous keyword indexing for specific programming languages, frameworks, systems, and engineering standards.',
              },
              {
                title: 'Career Switchers & Transitioners',
                desc: 'Highlighting transferable skill taxonomies and relevant domain credentials to overcome algorithm mismatches.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-surface-border">
                <CheckCircle2 className="w-5 h-5 text-teal-accent mb-3" />
                <h3 className="text-sm font-bold text-dark-950 mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Receive (Deliverables) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              COMPLETE DELIVERABLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 tracking-tight">
              What Is Included In Your ATS CV Package
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every document is drafted from the ground up by an experienced career consultant. We do not use unreviewed AI text or rigid auto-fill software.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Single-column, parser-safe layout tested against standard ATS engines',
                'Comprehensive career summary with role-aligned keywords',
                'Context-Action-Result (CAR) bullet points with quantifiable metrics',
                'Core competencies and technical skills taxonomy section',
                'Editable Microsoft Word document (.docx) for future updates',
                'High-resolution, print-ready PDF for instant job applications',
                'Complimentary 7-day revision window for edits and fine-tuning',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-white border border-surface-border shadow-card space-y-6">
              <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-400">Standard Package</span>
                  <h3 className="text-2xl font-black text-dark-950 mt-0.5">ATS-Friendly CV</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-dark-950">₹599</span>
                  <span className="text-xs text-slate-500 block">/ AED 25 provisional*</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-dark-950 block">Recommended Upgrade:</span>
                  <span className="text-xs text-slate-600">Pair with a Strategic Cover Letter</span>
                </div>
                <span className="text-sm font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                  ₹999 Confirmed Combo
                </span>
              </div>

              <WhatsAppCTA
                desk="both"
                message="Hello ILM-ON, I want to order the ATS-Friendly CV (₹599 / AED 25)."
                label="Order ATS CV via WhatsApp"
                variant="primary"
                size="md"
                className="w-full"
              />

              <p className="text-[11px] text-slate-500 text-center">
                *Provisional estimate. Confirmed during initial WhatsApp consultation. ₹999 combo price is official.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-16 bg-white border-t border-surface-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-950">
              ATS CV Frequently Asked Questions
            </h2>
          </div>

          {[
            {
              q: 'Can I edit the ATS CV myself after receiving it?',
              a: 'Yes. You receive both the print-ready PDF and a fully editable Microsoft Word (.docx) file so you can update dates, add new projects, or adapt text for future roles at any time.',
            },
            {
              q: 'Does ATS software reject CVs with colors or photos?',
              a: 'Standard ATS software cannot parse photos, and graphics frequently scramble section order. In markets like the US, Canada, and UK, photos are discouraged due to anti-bias standards. For UAE/India applications where photos are customary, we provide dual formats.',
            },
            {
              q: 'How fast will I receive my finished ATS CV?',
              a: 'Standard delivery is within 24 to 48 hours from the time we receive your career history. Express 12 to 24-hour delivery is also available upon WhatsApp request.',
            },
            {
              q: 'Do you guarantee that I will get shortlisted?',
              a: 'No. Hiring decisions depend entirely on employer hiring criteria, vacancy competition, and market conditions. What we guarantee is an ATS-engineered, parser-compliant format with role-targeted keyword density that eliminates algorithmic rejection.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-surface-border bg-slate-50">
              <h3 className="text-sm font-bold text-dark-950 mb-2">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-dark-950 mb-3">
          Ready to Make Your CV Pass Recruiter Parsers?
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Chat directly with our career specialists on WhatsApp to get your profile reviewed.
        </p>
        <WhatsAppCTA
          desk="both"
          message="Hello ILM-ON, I would like to get my CV reviewed for ATS compliance."
          label="Consult on WhatsApp"
          variant="primary"
          size="md"
        />
      </section>
    </div>
  );
}
