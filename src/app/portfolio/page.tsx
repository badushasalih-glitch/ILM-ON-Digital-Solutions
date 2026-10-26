'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Briefcase,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Megaphone,
  CheckCircle2,
  Building2,
  FileText,
  Globe2,
} from 'lucide-react';
import CareerPortfolioShowcase from '@/components/CareerPortfolioShowcase';

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-20 bg-[#f8fafc] min-h-screen text-slate-900">
      {/* 1. Page Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>ILM-ON DIGITAL SOLUTIONS • WORK PORTFOLIO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Verified Deliverables. <br />
            <span className="text-blue-600">Structured with Precision.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore authentic samples of our ATS resume transformations, genuine client feedback, multi-platform profile configurations, and corporate digital growth deliverables.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <span>Explore Career Services Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Digital%20Solutions,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20consult%20with%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-bold bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
            >
              Quick Consultation
            </a>
          </div>
        </div>
      </section>

      {/* 2. Interactive Career Services Portfolio Showcase (5 Categories, Sliding Carousel, Lightbox) */}
      <CareerPortfolioShowcase />

      {/* 3. Division Highlights — Recruitment & Digital Marketing Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              CROSS-DIVISION CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">
              Recruitment & Digital Growth Portfolios
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Beyond individual career trajectories, ILM-ON drives enterprise hiring mandates and commercial marketing campaigns across India and the GCC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recruitment Deliverable Card */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
                  DIVISION 02 • RECRUITMENT SOLUTIONS
                </span>
                <h3 className="text-2xl font-bold text-slate-950 mt-1 mb-3">
                  Corporate Talent Sourcing & Placement Mandates
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Pre-screened executive talent pipelines for leading commercial and engineering enterprises across Dubai, Abu Dhabi, Saudi Arabia, and India. Zero upfront fee for job candidates.
                </p>

                <div className="space-y-2.5 border-t border-slate-200 pt-5">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Technical assessment & cultural alignment screening</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cross-border GCC mobilization & visa readiness</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tier-1 corporate hiring partnerships in UAE & KSA</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href="/recruitment"
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs text-center transition-colors block"
                >
                  Explore Recruitment Solutions
                </Link>
              </div>
            </div>

            {/* Digital Growth Deliverable Card */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                  <Megaphone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">
                  DIVISION 03 • ADS ON / DIGITAL MARKETING
                </span>
                <h3 className="text-2xl font-bold text-slate-950 mt-1 mb-3">
                  Creative Campaign Architecture & Performance Ads
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Full-funnel digital marketing campaigns, high-impact Meta & Google ad creative, and social brand positioning designed to switch on inbound commercial customer acquisition.
                </p>

                <div className="space-y-2.5 border-t border-slate-200 pt-5">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Performance Meta & Google Ads creative sets</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp business inbound lead generation funnels</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Strategic corporate positioning for GCC markets</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href="/digital-marketing"
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs text-center transition-colors block"
                >
                  Explore ADS ON Creative Suite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final Consultation Action Bar */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Switch On Your Potential?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Contact our advisory team directly on WhatsApp or submit your current documents for an honest, confidential evaluation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Digital%20Solutions,%20I%20want%20to%20get%20started%20with%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <span>Instant WhatsApp Discussion</span>
            </a>
            <Link
              href="/pricing"
              className="px-8 py-3.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <span>View Packages & Pricing</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
