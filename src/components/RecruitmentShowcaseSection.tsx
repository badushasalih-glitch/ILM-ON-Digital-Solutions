'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  Search,
  UserCheck,
  Briefcase,
  FileCheck,
  Globe2,
  Building2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const RECRUITMENT_CAPABILITIES = [
  {
    title: 'Recruitment & Talent Sourcing',
    description:
      'Targeted sourcing across regional and international talent pipelines to align skills, experience, and role requirements.',
    icon: Search,
  },
  {
    title: 'Candidate Screening & Shortlisting',
    description:
      'Detailed evaluation of candidate profiles, work history, certifications, and practical suitability for each open role.',
    icon: UserCheck,
  },
  {
    title: 'Job Vacancy Promotion',
    description:
      'Targeted positioning of active employer openings across relevant industry networks and regional talent communities.',
    icon: Briefcase,
  },
  {
    title: 'Employer–Candidate Coordination',
    description:
      'Clear communication of role expectations, notice periods, and mutual requirements between employers and applicants.',
    icon: Users,
  },
  {
    title: 'Interview Coordination',
    description:
      'Structured scheduling, candidate briefings, and interview follow-up support across every hiring stage.',
    icon: FileCheck,
  },
  {
    title: 'India & GCC Coverage',
    description:
      'Recruitment support spanning India and key Gulf markets including the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.',
    icon: Globe2,
  },
];

const RECRUITMENT_STEPS = [
  { step: '01', title: 'Understand', desc: 'Clarify employer hiring criteria and role expectations.' },
  { step: '02', title: 'Source', desc: 'Attract suitable candidates via targeted promotion.' },
  { step: '03', title: 'Screen', desc: 'Review work history, skills, and role fit.' },
  { step: '04', title: 'Shortlist', desc: 'Present relevant candidates matching the brief.' },
  { step: '05', title: 'Connect', desc: 'Coordinate interviews between both parties.' },
  { step: '06', title: 'Support', desc: 'Maintain structured follow-ups through hiring.' },
];

export default function RecruitmentShowcaseSection() {
  const uaeEmployerWhatsapp =
    'https://wa.me/971562958907?text=' +
    encodeURIComponent('Hello ILM-ON Recruitment Desk, we have a hiring requirement for our company.');

  const candidateWhatsapp =
    'https://wa.me/9192929406522?text=' +
    encodeURIComponent('Hello ILM-ON Recruitment, I am a candidate looking for opportunities in India or the GCC.');

  return (
    <section id="recruitment-division" className="py-20 sm:py-24 bg-white border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-3 shadow-2xs">
              <Briefcase className="w-3.5 h-3.5 text-teal-600" />
              <span>DIVISION 02 • ILM-ON RECRUITMENT</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              Connecting Talent{' '}
              <span className="italic font-normal text-teal-600 block sm:inline">with Opportunity.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Operating across India and our active GCC advisory desk in Dubai, ILM-ON Recruitment delivers structured candidate sourcing, screening, and interview coordination for hiring teams and job-seeking professionals.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 p-2.5 rounded-2xl bg-[#006B5B]/10 border border-teal-200/70 shrink-0">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#007B68] shrink-0">
              <Image
                src="/assets/brand/ILM ON Recruitment OFFICIAL Logo.png"
                alt="ILM-ON Recruitment Official Logo"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="pr-2 text-xs">
              <div className="font-bold text-[#0B1B3D]">ILM-ON Recruitment</div>
              <div className="text-[11px] text-teal-800 font-medium">India &amp; GCC Talent Advisory</div>
            </div>
          </div>
        </div>

        {/* 6 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {RECRUITMENT_CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/90 border border-surface-border shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group hover:border-teal-300"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-surface-border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B3D] mb-2 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Intended Customers: Dedicated Pathways for Employers & Job Seekers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* For Employers */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#0B1B3D] text-white border border-white/10 shadow-elevated flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-teal-400/20 text-teal-300 border border-teal-400/30 mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>FOR EMPLOYERS &amp; HIRING TEAMS</span>
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-white mb-2">
                Streamline Your Hiring Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Share your open requisitions in the UAE, Saudi Arabia, Qatar, or India. Our team handles vacancy promotion, CV screening, shortlist preparation, and interview scheduling.
              </p>
              <div className="space-y-2 mb-6 text-xs text-slate-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Role profile alignment &amp; salary range briefing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Preliminary screening &amp; shortlist delivery</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Transparent hiring terms &amp; coordinated follow-up</span>
                </div>
              </div>
            </div>

            <a
              href={uaeEmployerWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-white transition-all text-center inline-flex items-center justify-center gap-2 shadow-md"
            >
              <span>Share Employer Requirement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* For Candidates */}
          <div className="p-7 sm:p-8 rounded-3xl bg-surface-light border border-surface-border shadow-card flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/80 mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>FOR CANDIDATES &amp; PROFESSIONALS</span>
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-[#0B1B3D] mb-2">
                Explore India &amp; GCC Openings
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Professionals seeking roles across India, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman can submit profiles for skill-aligned openings without any upfront candidate fee.
              </p>
              <div className="space-y-2 mb-6 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284F5] shrink-0 mt-0.5" />
                  <span>Zero upfront registration or listing fee for job seekers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284F5] shrink-0 mt-0.5" />
                  <span>Role matching based on actual qualifications &amp; experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284F5] shrink-0 mt-0.5" />
                  <span>Clear coordination directly with employer interviews</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={candidateWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl text-xs font-bold bg-[#0B1B3D] hover:bg-[#11285A] text-white transition-all text-center inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Submit Candidate Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/recruitment"
                className="py-3.5 px-4 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-[#0B1B3D] border border-slate-300 transition-all text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* How to Get Started — 6-Step Recruitment Workflow */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-surface-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700">
                HOW TO GET STARTED
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B1B3D]">
                Our 6-Step Recruitment Workflow
              </h3>
            </div>
            <Link
              href="/recruitment"
              className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
            >
              <span>Full Recruitment Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {RECRUITMENT_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs"
              >
                <div className="text-xs font-black text-teal-600 font-mono mb-1">{item.step}</div>
                <div className="text-xs font-bold text-[#0B1B3D] mb-1">{item.title}</div>
                <p className="text-[11px] text-slate-600 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
