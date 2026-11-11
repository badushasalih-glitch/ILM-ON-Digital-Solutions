'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileCheck2,
  Clock,
  RefreshCw,
  ShieldCheck,
  Check,
  Building2,
  Phone,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  CreditCard,
  Lock,
} from 'lucide-react';
import { BUSINESS_POLICIES } from '@/lib/pricing';

interface ExpectationPillar {
  id: string;
  badge: string;
  title: string;
  description: string;
  guarantee: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

const PILLARS: ExpectationPillar[] = [
  {
    id: 'drafting',
    badge: 'SPECIALIST FOCUS',
    title: 'Role-Aligned Drafting',
    description:
      'Every CV, cover letter, and profile is structured for your specific role requirements and regional recruiter expectations.',
    guarantee: 'Target role keyword alignment & quantified achievements',
    icon: FileCheck2,
    iconBg: 'bg-blue-50 border-blue-200/80',
    iconColor: 'text-[#0284F5]',
  },
  {
    id: 'turnaround',
    badge: 'DELIVERY TIMELINE',
    title: '24–48h Delivery in Word + PDF',
    description:
      'Standard orders delivered within 24 to 48 hours (12–24h express available on WhatsApp). Delivered in both high-res PDF and editable Microsoft Word (.docx).',
    guarantee: 'Full lifetime ownership to modify and adapt files',
    icon: Clock,
    iconBg: 'bg-amber-50 border-amber-200/80',
    iconColor: 'text-amber-600',
  },
  {
    id: 'revisions',
    badge: 'REVISION WINDOW',
    title: '7-Day Free Revision Window',
    description:
      'Test your draft against live job vacancies. Request refinements within 7 days with up to 2 comprehensive revision rounds included at no added cost.',
    guarantee: 'Minor wording tweaks handled within 24h of request',
    icon: RefreshCw,
    iconBg: 'bg-teal-50 border-teal-200/80',
    iconColor: 'text-teal-600',
  },
  {
    id: 'payments',
    badge: 'PAYMENT SECURITY',
    title: 'Transparent, One-Time Pricing',
    description:
      'Clear, upfront quotes with zero monthly subscriptions or paywalls. Supported payments via UPI & NetBanking (India / INR) and UAE Bank Transfer / Link (AED).',
    guarantee: 'Zero hidden fees or recurring subscriptions',
    icon: ShieldCheck,
    iconBg: 'bg-emerald-50 border-emerald-200/80',
    iconColor: 'text-emerald-600',
  },
];

export default function ServiceExpectationsSection() {
  return (
    <section
      id="expectations"
      className="py-20 sm:py-24 bg-white border-t border-surface-border relative scroll-mt-20"
      aria-label="Service Expectations and Transparency"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>TRANSPARENCY, TIMELINES & STANDARDS</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Clear Expectations. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#0284F5]">Absolute Transparency.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We operate with straightforward policies, reliable delivery formats, and direct communication across our India and Dubai operations.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.id}
                className="p-6 sm:p-7 rounded-3xl bg-surface-light border border-surface-border shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform ${pillar.iconBg}`}
                    >
                      <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-dark-950 mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-start gap-2 text-xs font-semibold text-slate-800">
                  <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                  <span className="leading-snug">{pillar.guarantee}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment to Honesty & Transparency Box */}
        <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 p-8 sm:p-10 shadow-elevated">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3.5">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>OUR COMMITMENT TO AUTHENTICITY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                No Artificial Guarantees. <span className="text-[#0284F5]">Just Exceptional Craft.</span>
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                We never make unrealistic claims like &ldquo;guaranteed job placements&rdquo; or &ldquo;100% interview calls,&rdquo; because ultimate hiring selections remain strictly at employer discretion.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                What we promise is a rigorously researched, ATS-compliant, recruiter-aligned presentation that eliminates formatting rejection, highlights your commercial value, and ensures your experience is judged on merit.
              </p>
            </div>

            {/* Direct Dual-Desk Advisory Links */}
            <div className="shrink-0 w-full lg:w-auto bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-3">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Direct Career Consultation:
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 text-xs">
                <a
                  href="https://wa.me/919292940652?text=Hello%20ILM%20ON%20Digital%20Solutions,%20I%20would%20like%20to%20get%20an%20ATS-friendly%20CV%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-700/80 border border-slate-700 transition-all text-white font-medium group"
                >
                  <div className="flex items-center gap-2">
                    <span>🇮🇳</span>
                    <span>India Desk: +91 9292940652</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0284F5] group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="https://wa.me/971562958907?text=Hello%20ILM%20ON%20Digital%20Solutions,%20I%20would%20like%20an%20ATS%20CV%20consultation%20for%20the%20UAE/Gulf%20market."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-700/80 border border-slate-700 transition-all text-white font-medium group"
                >
                  <div className="flex items-center gap-2">
                    <span>🇦🇪</span>
                    <span>Dubai Desk: +971 56 295 8907</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-300 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
