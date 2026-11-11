'use client';

import React from 'react';
import {
  UserCheck,
  Search,
  Building2,
  MessageCircle,
  Lock,
  Tag,
  ShieldAlert,
  CheckCircle2,
  Award,
} from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

interface Strength {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STRENGTHS: Strength[] = [
  {
    title: 'Handcrafted by Humans, Not Generic AI',
    description: 'We do not run your career through unreviewed automated template bots. Every summary, skill taxonomy, and achievement is personally drafted by experienced career consultants.',
    icon: <UserCheck className="w-5 h-5 text-vivid-blue" />,
  },
  {
    title: 'Target Role Keyword Alignment',
    description: 'We align your CV with actual ATS scanning criteria, matching your work history to the exact skills and keywords recruitment algorithms search for.',
    icon: <Search className="w-5 h-5 text-teal-accent" />,
  },
  {
    title: 'Dual India & Dubai Career Desks',
    description: 'Direct local presence in Kerala (India) and Dubai (UAE). Our Dubai desk provides specialized regional insights for UAE, Saudi, and Qatar job seekers.',
    icon: <Building2 className="w-5 h-5 text-indigo-600" />,
  },
  {
    title: 'Direct WhatsApp Collaboration',
    description: 'No complicated ticket queues or rigid contact forms. Chat directly with your assigned career writer over WhatsApp for instant updates and questions.',
    icon: <MessageCircle className="w-5 h-5 text-emerald-500" />,
  },
  {
    title: 'Strict Document Confidentiality',
    description: 'Your personal data, salary history, contact information, and documents remain strictly private and confidential. We never share or sell candidate information.',
    icon: <Lock className="w-5 h-5 text-amber-500" />,
  },
  {
    title: 'Transparent & Accessible Pricing',
    description: 'Clear, upfront quotes before any work begins. No hidden monthly subscription fees, no locked file paywalls, and no surprise charges.',
    icon: <Tag className="w-5 h-5 text-rose-500" />,
  },
];

export default function WhyIlmOnSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>AUTHENTIC CAREER PARTNERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060814] tracking-tight leading-tight">
            Professional Support. <br className="hidden sm:inline" />
            <span className="text-[#0284F5]">Personal Attention.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We focus on authentic strengths: rigorous drafting, transparent pricing, and personal collaboration that positions your background for senior-level attention.
          </p>
        </div>

        {/* Strengths 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {STRENGTHS.map((s, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl border border-surface-border bg-surface-light shadow-card hover:shadow-elevated transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-surface-border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-dark-950 mb-2">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment to Honesty Box (Zero Fake Claims) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-elevated relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                <span>OUR COMMITMENT TO TRANSPARENCY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                No Fake Guarantees. <span className="text-vivid-blue">Just Exceptional Craft.</span>
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                We do not sell impossible promises like &ldquo;100% interview callbacks&rdquo; or &ldquo;guaranteed job placements&rdquo;—because hiring decisions remain solely at the discretion of employers and recruiters. 
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                What we promise is a meticulously researched, ATS-compliant, recruiter-aligned presentation that eliminates formatting disqualifications and showcases your value with absolute clarity.
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <WhatsAppCTA
                desk="both"
                message="Hello ILM-ON, I appreciate your transparent approach and would like to review my CV."
                label="Chat with Our Team"
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
