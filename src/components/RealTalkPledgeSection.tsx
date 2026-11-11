'use client';

import React from 'react';
import { Check, X, ShieldAlert, Sparkles, Lock, ArrowRight } from 'lucide-react';

const ALWAYS_LIST = [
  'Tailor your resume to your specific target roles and destination market requirements.',
  'Engineer clean single-column ATS layouts verified to pass enterprise parsing algorithms.',
  'Deliver both high-resolution PDF and fully editable Microsoft Word (.docx) files for lifetime ownership.',
  'Provide a 7-day free revision window with up to 2 comprehensive rounds included at no added cost.',
  'Offer clear, upfront one-time pricing before work starts with zero hidden fees or recurring subscriptions.',
  'Maintain strict candidate confidentiality—your personal data, salary, and documents are never shared.',
];

const NEVER_LIST = [
  'Never make fake 100% interview callbacks or guaranteed placement promises—hiring choices rest with employers.',
  'Never use unreviewed generic template exports that fail parser screening or misrepresent your background.',
  'Never trap you in monthly software subscription billing or charge fees to download your own files.',
  'Never sell or share your contact details, resume content, or work history with third-party advertisers.',
  'Never deliver locked or non-editable formats that prevent you from customizing your CV for future roles.',
  'Never disappear after delivery—our India and Dubai operational desks remain reachable via WhatsApp.',
];

export default function RealTalkPledgeSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-surface-border relative" id="pledge">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/80 mb-3 shadow-2xs">
            <ShieldAlert className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>UNCOMPROMISING INTEGRITY</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            The &ldquo;Real Talk&rdquo; Pledge.{' '}
            <span className="italic font-normal text-[#0284F5]">Always vs. Never.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We built ILM ON Digital Solutions on straightforward honesty. Here is our public standard for every client document we produce.
          </p>
        </div>

        {/* 2-Column Commitment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: What We ALWAYS Do */}
          <div className="rounded-3xl bg-white border border-emerald-200/80 p-7 sm:p-9 shadow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500" />
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
                  <Check className="w-4 h-4 text-emerald-700" />
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0B1B3D]">
                  What We Always Do
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {ALWAYS_LIST.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600 font-bold" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-100 text-xs font-semibold text-emerald-900 bg-emerald-50/60 p-3.5 rounded-2xl flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Standard baseline included with every order.</span>
            </div>
          </div>

          {/* Column 2: What We NEVER Do */}
          <div className="rounded-3xl bg-white border border-rose-200/80 p-7 sm:p-9 shadow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-rose-500" />
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-black">
                  <X className="w-4 h-4 text-rose-600" />
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0B1B3D]">
                  What We Never Do
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {NEVER_LIST.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-rose-600 font-bold" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-100 text-xs font-semibold text-rose-900 bg-rose-50/60 p-3.5 rounded-2xl flex items-center gap-2">
              <Lock className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Zero compromises on ethical representation.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
