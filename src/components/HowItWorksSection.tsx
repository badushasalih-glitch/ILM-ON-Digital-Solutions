'use client';

import React from 'react';
import {
  MessageSquare,
  Compass,
  FileCheck2,
  PenTool,
  Send,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Start a Conversation',
    subtitle: 'Direct WhatsApp Contact',
    description: 'Contact our team directly on WhatsApp. Share your current CV, LinkedIn link, or career goal without complex portal sign-ups.',
    icon: <MessageSquare className="w-5 h-5 text-[#0284F5]" />,
  },
  {
    step: '02',
    title: 'Understand Your Goal',
    subtitle: 'Target Role & Market',
    description: 'We clarify your target industry, seniority level, country format (India, GCC, European, or North American), and career milestones.',
    icon: <Compass className="w-5 h-5 text-teal-accent" />,
  },
  {
    step: '03',
    title: 'Confirm Your Package',
    subtitle: 'Transparent Scope & Pricing',
    description: 'We recommend the right service (e.g. ₹999 ATS CV + Cover Letter combo), confirm transparent pricing, and set the delivery timeline.',
    icon: <FileCheck2 className="w-5 h-5 text-indigo-500" />,
  },
  {
    step: '04',
    title: 'Professional Preparation',
    subtitle: 'Keyword Tuning & Structure',
    description: 'Our career specialists organize your document, tuning parser compliance, narrative strength, and quantifiable achievements.',
    icon: <PenTool className="w-5 h-5 text-amber-500" />,
  },
  {
    step: '05',
    title: 'Final Delivery',
    subtitle: 'Word (.docx) + PDF Formats',
    description: 'Receive your print-ready PDF and fully editable Word files with up to 7 days of complimentary revision support.',
    icon: <Send className="w-5 h-5 text-emerald-500" />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-24 bg-surface-light border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Simple Process. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#0284F5]">Personal Support.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We keep your career progression transparent, structured, and timely. From initial WhatsApp chat to final interview-ready documents in 24–48 hours.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {STEPS.map((s, idx) => (
            <div
              key={s.step}
              className="p-6 rounded-2xl bg-white border border-surface-border shadow-card hover:shadow-elevated transition-all flex flex-col justify-between relative group"
            >
              {/* Step Top Bar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-200 group-hover:text-vivid-blue transition-colors">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-surface-border flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-vivid-blue mb-2.5">
                  {s.subtitle}
                </div>

                <h3 className="text-base font-bold text-dark-950 mb-2">
                  {s.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Progress Connector Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                <span>Step {s.step} of 05</span>
                {idx < STEPS.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 hidden lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Track Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-surface-border shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-teal-accent shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-dark-950">
                Ready to take the first step towards your next career milestone?
              </h4>
              <p className="text-xs text-slate-500">
                Direct WhatsApp consultation with an ILM-ON Career Specialist. No obligations.
              </p>
            </div>
          </div>
          <WhatsAppCTA
            desk="both"
            message="Hello ILM-ON, I would like to start step 1 of my career consultation."
            label="Start Your Consultation"
            variant="primary"
            size="md"
          />
        </div>
      </div>
    </section>
  );
}
