import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Layers,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  HelpCircle,
  FileText,
  FileCheck,
  Check,
  Award,
} from 'lucide-react';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Strategic Cover Letter Writing Services & ₹999 Combo | ILM-ON',
  description:
    'Tailored corporate cover letter writing paired with an ATS-friendly CV for ₹999 (AED 40). Persuasive executive letterhead, editable Word & PDF, delivered in 24-48 hours.',
  keywords: [
    'Cover letter writing services',
    'ATS CV and Cover Letter combo ₹999',
    'Professional cover letter India',
    'Cover letter Dubai UAE',
    'Executive cover letter writer',
    'ILM-ON cover letter service',
  ],
  alternates: {
    canonical: 'https://www.ilmondigitalsolutions.online/cover-letter',
  },
  openGraph: {
    title: 'Strategic Cover Letter Writing Services & ₹999 Combo | ILM-ON',
    description:
      'Persuasive, role-tailored cover letter and ATS CV combination pack for ₹999. Crafted to highlight your motivations and immediate organizational value.',
    url: 'https://www.ilmondigitalsolutions.online/cover-letter',
    siteName: 'ILM-ON Digital Solutions',
    type: 'website',
  },
};

export default function CoverLetterPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Strategic Cover Letter & ATS CV Combo Service',
    provider: {
      '@type': 'Organization',
      name: 'ILM-ON Digital Solutions',
      url: 'https://www.ilmondigitalsolutions.online',
    },
    description:
      'Professional tailored corporate cover letter paired with an ATS-friendly CV combo package for job applications.',
    offers: {
      '@type': 'Offer',
      price: '999',
      priceCurrency: 'INR',
    },
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>CONFIRMED COMBO PACKAGE • ₹999 / AED 40</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-dark-950 tracking-tight leading-tight">
                Strategic Cover Letters. <br />
                <span className="text-teal-accent">Your Persuasive Advantage.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                A strong resume establishes what you have accomplished; a tailored cover letter explains <em>why you are the ideal person</em> for this specific organization. Pair your ATS-compliant CV with a strategic, persuasive cover letter designed to capture decision-maker interest.
              </p>

              {/* Confirmed Price Highlight Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 block">
                    OFFICIALLY CONFIRMED PRICE:
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl font-black text-dark-950">₹999</span>
                    <span className="text-sm font-bold text-slate-600">/ AED 40</span>
                    <span className="text-xs text-slate-500 font-medium">Complete Application Combo</span>
                  </div>
                  <span className="text-xs text-slate-600 block mt-1">
                    Includes Full ATS CV + Tailored Strategic Cover Letter
                  </span>
                </div>

                <WhatsAppCTA
                  desk="both"
                  message="Hello ILM-ON, I would like to order the ATS CV + Cover Letter combo package (₹999 / AED 40)."
                  label="Order ₹999 Combo"
                  variant="primary"
                  size="md"
                  className="shrink-0"
                />
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-vivid-blue" />
                  24–48 Hours Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  7-Day Revision Guarantee
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  Matching Letterhead Design
                </span>
              </div>
            </div>

            {/* Right Hero Graphic Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-slate-50 border border-surface-border shadow-elevated space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-left space-y-3 font-serif">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 font-sans">
                    <div>
                      <div className="text-[10px] font-extrabold text-vivid-blue uppercase tracking-wider">
                        Executive Letterhead
                      </div>
                      <div className="text-sm font-bold text-dark-950">Candidate Name</div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">Dubai / India</span>
                  </div>
                  <div className="text-xs text-slate-700 italic leading-relaxed pt-1">
                    &ldquo;Dear Hiring Committee, Having steered regional cross-border operations for over 9 years, I am eager to contribute my experience in operational restructuring and supply chain governance to your upcoming expansion...&rdquo;
                  </div>
                  <div className="text-[11px] font-sans text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span>Structured Value Proposition</span>
                    <span className="text-emerald-700 font-bold">100% Customized</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs font-bold text-dark-950">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-vivid-blue" />
                    <span>ATS-Friendly CV Included</span>
                  </div>
                  <span className="text-emerald-600 font-extrabold">✓ Full Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cover Letters Still Win Interviews */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
            STRATEGIC ADVANTAGE
          </span>
          <h2 className="text-3xl font-extrabold text-dark-950 tracking-tight mt-1">
            Why A Cover Letter Sets You Apart
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            When recruiters review multiple candidates with identical qualifications, the cover letter reveals culture fit, communication skills, and personal motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-vivid-blue flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">Narrative Storytelling</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your resume lists facts and dates; your cover letter connects those facts into a coherent narrative of professional progression and future value.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-accent flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">Company Pain-Point Alignment</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We address the specific challenges highlighted in the job requisition, positioning your past achievements as direct solutions for the prospective employer.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-surface-border shadow-card">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-dark-950 mb-2">Executive Visual Identity</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Formatted with matching letterhead, fonts, and brand colors to pair seamlessly with your ILM-ON ATS CV, presenting an institutional standard of professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Combo Inclusions */}
      <section className="py-16 bg-white border-y border-surface-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              BEST VALUE COMBO BREAKDOWN
            </span>
            <h2 className="text-3xl font-extrabold text-dark-950 tracking-tight mt-1">
              Everything Included in the ₹999 Combo
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Full ATS-Friendly CV (Valued at ₹599)',
                desc: 'Single-column parser-friendly layout with role keyword optimization, action verbs, and quantifiable achievements.',
              },
              {
                title: 'Strategic Role-Tailored Cover Letter (Valued at ₹500+)',
                desc: 'Compelling opening hook, company alignment paragraph, core competency evidence, and confident interview closing call.',
              },
              {
                title: 'Matching Executive Letterhead Design',
                desc: 'Cohesive typography, margins, and contact headers across both documents for an institutional presentation.',
              },
              {
                title: 'Adaptable Template Structure for Future Roles',
                desc: 'Easily modify company names and target details for subsequent job applications without losing document formatting.',
              },
              {
                title: 'Dual Formats: Word (.docx) + High-Res PDF',
                desc: 'Fully editable Microsoft Word format for your personal archive plus pristine PDF for online job portal submissions.',
              },
              {
                title: '7 Days of Free Revision Adjustments',
                desc: 'Review the drafts with our career team and request fine-tuning until you are completely satisfied.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-surface-border bg-slate-50 flex items-start gap-3.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-dark-950">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <WhatsAppCTA
              desk="both"
              message="Hello ILM-ON, I would like to order the ATS CV + Cover Letter combo (₹999 / AED 40)."
              label="Order Combo Package via WhatsApp (₹999)"
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-950 text-center mb-8">
          Cover Letter Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: 'Can I reuse this cover letter for different job applications?',
              a: 'Yes. We deliver your cover letter in an editable Microsoft Word (.docx) document with clearly highlighted bracketed sections so you can quickly swap company names and role specifics for future applications.',
            },
            {
              q: 'Is the ₹999 price confirmed for clients in India?',
              a: 'Yes. The ATS CV + Strategic Cover Letter combo is officially confirmed at ₹999 in India (and AED 40 for clients paying in the UAE). There are zero hidden fees.',
            },
            {
              q: 'What information do I need to share to start?',
              a: 'Simply share your current CV or career summary, plus the job description or industry you are targeting. You can send this directly over WhatsApp.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-surface-border bg-white shadow-xs">
              <h3 className="text-sm font-bold text-dark-950 mb-1.5">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
