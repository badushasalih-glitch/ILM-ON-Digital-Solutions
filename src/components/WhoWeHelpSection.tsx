'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  TrendingUp,
  Award,
  Globe2,
  Shuffle,
  CheckCircle2,
  Users,
  ArrowRight,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

interface AudiencePathway {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  painPoint: string;
  solution: string;
  deliverables: string[];
  recommendedService: string;
  recommendedRoute: string;
}

const AUDIENCE_PATHWAYS: AudiencePathway[] = [
  {
    id: 'freshers',
    tabLabel: 'Fresh Graduates',
    title: 'Fresh Graduates & Entry-Level',
    subtitle: 'From College Projects to Corporate Hire',
    icon: GraduationCap,
    painPoint: 'Limited formal work history often makes entry-level resumes appear empty or uncompetitive.',
    solution: 'We highlight academic capstones, internships, practical toolsets, and transferable competencies.',
    deliverables: [
      'Project-centric skills breakdown',
      'Entry-level ATS keyword integration',
      'Clean, recruiter-ready objective narrative',
    ],
    recommendedService: 'ATS-Friendly CV + Cover Letter Combo (₹999)',
    recommendedRoute: '/career-services/cover-letter-combo',
  },
  {
    id: 'mid-career',
    tabLabel: 'Mid-Career',
    title: 'Mid-Career Professionals',
    subtitle: 'Step Up to Senior Roles & Higher Pay',
    icon: TrendingUp,
    painPoint: 'Resumes read like generic daily task descriptions rather than measurable commercial achievements.',
    solution: 'We reframe your trajectory around quantifiable revenue, team leadership, and major milestones.',
    deliverables: [
      'Quantified KPI achievements and commercial impact',
      'Cohesive career progression narrative',
      'Target senior role keyword optimization',
    ],
    recommendedService: 'ATS-Friendly CV or Complete Career Suite',
    recommendedRoute: '/career-services/ats-cv',
  },
  {
    id: 'executives',
    tabLabel: 'Senior Leaders',
    title: 'Senior Leaders & Executives',
    subtitle: 'Board-Level Impact & Strategic Vision',
    icon: Award,
    painPoint: 'Dense, multi-page CVs fail to communicate high-level executive vision to board directors and search firms.',
    solution: 'We craft concise executive briefs emphasizing governance, P&L stewardship, and organizational turnaround.',
    deliverables: [
      'Executive summary & leadership philosophy',
      'P&L, scale, and digital transformation metrics',
      'Executive LinkedIn alignment for search partners',
    ],
    recommendedService: 'Executive Designed Modern CV & Personal Brand',
    recommendedRoute: '/career-services/executive-modern-cv',
  },
  {
    id: 'gulf-seekers',
    tabLabel: 'Gulf & Relocation',
    title: 'Gulf & International Job Seekers',
    subtitle: 'Relocation & GCC Market Compliance',
    icon: Globe2,
    painPoint: 'Applying from outside the GCC with standard domestic formats that get immediately filtered by Gulf recruiters.',
    solution: 'Engineered specifically for UAE and Gulf recruiters with prominent visa status, notice period, and Gulf ATS tags.',
    deliverables: [
      'Gulf-compliant visa & relocation metadata setup',
      'Naukri Gulf & GCC industry keyword engineering',
      'Advisory backed by our active Dubai operational desk',
    ],
    recommendedService: 'UAE & GCC Relocation Career Kit (Dubai Desk)',
    recommendedRoute: '/career-services/gcc-relocation-kit',
  },
  {
    id: 'career-changers',
    tabLabel: 'Career Changers',
    title: 'Career & Industry Changers',
    subtitle: 'Pivot Successfully to a New Field',
    icon: Shuffle,
    painPoint: 'Previous job titles pigeonhole you into an old sector, obscuring your adaptability to a new industry.',
    solution: 'We re-architect your resume around functional competencies, transferable leadership, and domain pivot points.',
    deliverables: [
      'Functional skill taxonomy grouping',
      'Transferable leadership & problem-solving narrative',
      'Strategic career pivot cover letter explaining your transition',
    ],
    recommendedService: 'Tailored Cover Letter & Hybrid ATS Resume',
    recommendedRoute: '/career-services/cover-letter',
  },
];

export default function WhoWeHelpSection() {
  const [activeTab, setActiveTab] = useState<string>('freshers');
  const currentPathway = AUDIENCE_PATHWAYS.find((p) => p.id === activeTab) || AUDIENCE_PATHWAYS[0];
  const Icon = currentPathway.icon;

  return (
    <section
      id="audience"
      className="py-16 sm:py-20 bg-surface-light border-t border-surface-border relative scroll-mt-20"
      aria-label="Tailored Career Pathways"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>TAILORED CAREER PATHWAYS</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Every Career Stage Has <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#0284F5]">A Unique Strategy.</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Select your career stage to see how we position your experience for maximum recruiter relevance.
          </p>
        </div>

        {/* Compact Audience Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl mx-auto">
          {AUDIENCE_PATHWAYS.map((pathway) => {
            const TabIcon = pathway.icon;
            const isActive = activeTab === pathway.id;

            return (
              <button
                key={pathway.id}
                onClick={() => setActiveTab(pathway.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-dark-950 text-white shadow-sm ring-2 ring-[#0284F5]/30'
                    : 'bg-white text-slate-600 hover:text-dark-950 border border-surface-border hover:bg-slate-50'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-[#0284F5]' : 'text-slate-400'}`} />
                <span>{pathway.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pathway Detail Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-surface-border p-6 sm:p-8 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Column: Heading & Challenge / Solution */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#0284F5]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-dark-950 leading-snug">
                    {currentPathway.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#0284F5]">
                    {currentPathway.subtitle}
                  </div>
                </div>
              </div>

              {/* Challenge Box */}
              <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100/80 text-xs text-rose-950 leading-relaxed">
                <div className="flex items-center gap-1.5 font-bold uppercase text-[10px] tracking-wider text-rose-700 mb-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>The Challenge:</span>
                </div>
                <p>{currentPathway.painPoint}</p>
              </div>

              {/* Solution Box */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100/80 text-xs text-emerald-950 leading-relaxed">
                <div className="flex items-center gap-1.5 font-bold uppercase text-[10px] tracking-wider text-emerald-700 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Our Approach:</span>
                </div>
                <p>{currentPathway.solution}</p>
              </div>
            </div>

            {/* Right Column: Deliverables & Recommendation CTA */}
            <div className="md:col-span-5 bg-surface-light rounded-2xl p-5 border border-surface-border flex flex-col justify-between space-y-4">
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                  Strategic Deliverables:
                </div>
                <div className="space-y-2">
                  {currentPathway.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-2">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Recommended Solution:
                </div>
                <div className="text-xs font-bold text-dark-950">
                  {currentPathway.recommendedService}
                </div>
                <Link
                  href={currentPathway.recommendedRoute}
                  className="w-full py-2.5 px-3 rounded-xl bg-dark-950 hover:bg-[#0284F5] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs mt-2"
                >
                  <span>View Package Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
