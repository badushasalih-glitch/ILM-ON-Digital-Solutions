'use client';

import React from 'react';
import { X, Check, Sparkles, LayoutGrid, UserCheck, ArrowRight } from 'lucide-react';

interface ComparisonRow {
  dimension: string;
  freeAiTool: string;
  ilmOnService: string;
}

const COMPARISONS: ComparisonRow[] = [
  {
    dimension: 'ATS Parser Compliance',
    freeAiTool: 'Complex tables, multi-column designs, and text boxes that break and jumble text inside ATS software.',
    ilmOnService: 'Single-column linear architecture engineered to parse reliably on Taleo, Workday, and Greenhouse.',
  },
  {
    dimension: 'Writing Depth & Voice',
    freeAiTool: 'Vague buzzwords and repetitive generic cliches that lack quantifiable context.',
    ilmOnService: 'Quantified achievements, career impact, and industry-specific keywords aligned with your target role.',
  },
  {
    dimension: 'Gulf & International Standards',
    freeAiTool: 'Domestic templates that omit GCC visa status, notice period clarity, or Europass CEFR language frameworks.',
    ilmOnService: 'Specialized formats engineered by Dubai and India desks for UAE, Saudi Arabia, Qatar, and European compliance.',
  },
  {
    dimension: 'File Ownership & Deliverables',
    freeAiTool: 'Locked PDF exports, recurring monthly subscription paywalls, and surprise download fees.',
    ilmOnService: 'Print-ready PDF plus fully editable Microsoft Word (.docx) with lifetime ownership and zero recurring charges.',
  },
  {
    dimension: 'Personal Consultation & Support',
    freeAiTool: 'Automated chatbots and ticket portals with no opportunity to clarify nuance or discuss your background.',
    ilmOnService: 'Direct WhatsApp communication with your career consultant, with up to 2 comprehensive revision rounds within 7 days.',
  },
];

export default function ComparisonSection() {
  const whatsappUrl =
    'https://wa.me/919292940652?text=' +
    encodeURIComponent('Hello ILM-ON, I would like to consult with a career specialist about my CV.');

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-surface-border relative" id="comparison">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/80 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>THE SERVICE DIFFERENCE</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Generic Free Templates vs.{' '}
            <span className="italic font-normal text-[#0284F5]">ILM ON Career Consulting.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Standard online builders often produce multi-column designs and generic phrasing that fail ATS screening. Here is how specialized career documentation compares.
          </p>
        </div>

        {/* Responsive Comparison Table */}
        <div className="rounded-3xl border border-surface-border overflow-hidden shadow-card bg-surface-light">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-surface-border text-xs sm:text-sm font-bold bg-white">
            <div className="p-4 sm:p-5 md:col-span-4 text-slate-400 uppercase tracking-wider text-[11px] font-extrabold flex items-center">
              Evaluation Criteria
            </div>
            <div className="p-4 sm:p-5 md:col-span-4 bg-slate-50/70 border-t md:border-t-0 md:border-l border-surface-border text-slate-600 flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Generic Builders &amp; Templates</span>
            </div>
            <div className="p-4 sm:p-5 md:col-span-4 bg-[#0B1B3D] text-white border-t md:border-t-0 md:border-l border-white/10 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-cyan-300 shrink-0" />
              <span>ILM ON Career Solutions</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-surface-border">
            {COMPARISONS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 transition-colors hover:bg-white/80"
              >
                {/* Feature Name */}
                <div className="p-4 sm:p-5 md:col-span-4 font-bold text-dark-950 text-xs sm:text-sm flex items-center">
                  {row.dimension}
                </div>

                {/* Free Builder Column */}
                <div className="p-4 sm:p-5 md:col-span-4 bg-slate-50/40 md:border-l border-surface-border text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </span>
                  <span>{row.freeAiTool}</span>
                </div>

                {/* ILM ON Solution Column */}
                <div className="p-4 sm:p-5 md:col-span-4 bg-blue-50/30 md:border-l border-blue-100 text-xs text-dark-950 leading-relaxed font-medium flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-700 font-black" />
                  </span>
                  <span>{row.ilmOnService}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Banner */}
          <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">
                Ensure your document matches your target market.
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Consult directly with a dedicated career specialist who understands your industry and destination market.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-bold bg-[#0284F5] hover:bg-[#0274da] text-white flex items-center gap-2 transition-all shadow-md shrink-0"
            >
              <span>Consult with a Specialist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
