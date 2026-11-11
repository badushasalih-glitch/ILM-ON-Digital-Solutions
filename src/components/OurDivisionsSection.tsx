'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileText,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface DivisionCardData {
  id: string;
  divisionNumber: string;
  name: string;
  subtitle: string;
  href: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  logo: string;
  description: string;
  features: string[];
  ctaLabel: string;
  badgeText: string;
  badgeStyle: string;
}

const DIVISIONS: DivisionCardData[] = [
  {
    id: 'career-services',
    divisionNumber: 'DIVISION 01',
    name: 'Career Services',
    subtitle: 'ATS CVs & Profile Optimization',
    href: '/career-services',
    icon: FileText,
    iconBg: 'bg-blue-50 border-blue-200/80',
    iconColor: 'text-[#0284F5]',
    logo: '/assets/brand/ILM - ON Career Services Official Logo NEW.png',
    badgeText: 'Individual & Executive',
    badgeStyle: 'bg-blue-50 text-[#0284F5] border-blue-200',
    description:
      'ATS-compliant CV writing, tailored cover letters, and multi-platform profile positioning engineered to help professionals stand out to hiring teams.',
    features: [
      'Single-column ATS-compliant formatting',
      'Tailored cover letters & LinkedIn setup',
      'Word (.docx) + PDF delivery within 24–48h',
    ],
    ctaLabel: 'Explore Career Services',
  },
  {
    id: 'recruitment',
    divisionNumber: 'DIVISION 02',
    name: 'Recruitment Support',
    subtitle: 'Connecting Talent with Opportunity',
    href: '/recruitment',
    icon: Users,
    iconBg: 'bg-emerald-50 border-emerald-200/80',
    iconColor: 'text-teal-accent',
    logo: '/assets/brand/ILM ON Recruitment OFFICIAL Logo.png',
    badgeText: 'Corporate Staffing',
    badgeStyle: 'bg-teal-light text-teal-dark border-teal-accent/20',
    description:
      'Structured talent sourcing and candidate screening connecting growing enterprises with qualified professionals across India and the GCC—backed by rigorous vetting and interview coordination.',
    features: [
      'Systematic talent sourcing & talent pipelines',
      'Rigorous candidate screening & shortlisting',
      'Employer–candidate interview coordination',
      'Zero upfront fee for job-seeking candidates',
    ],
    ctaLabel: 'Explore Recruitment Support',
  },
  {
    id: 'digital-marketing',
    divisionNumber: 'DIVISION 03',
    name: 'Ads & Digital Marketing',
    subtitle: 'ADS ON • Creative Advertising Agency',
    href: '/digital-marketing',
    icon: TrendingUp,
    iconBg: 'bg-indigo-50 border-indigo-200/80',
    iconColor: 'text-indigo-600',
    logo: '/assets/brand/ADS ON OFFICIAL LOGO.png',
    badgeText: 'Brand Growth',
    badgeStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description:
      'Performance advertising and brand storytelling built to turn attention into measurable growth across Meta Ads, Google Ads, creative video production, and high-converting web experiences.',
    features: [
      'Meta (Facebook/Instagram) & Google Ads',
      'Social media management & branding',
      'Promotional video ads & reels production',
      'Custom website & executive portfolio design',
    ],
    ctaLabel: 'Explore Ads & Marketing',
  },
];

export default function OurDivisionsSection() {
  return (
    <section
      id="divisions"
      className="py-20 sm:py-24 bg-white border-b border-surface-border relative scroll-mt-20"
      aria-label="Our Three Specialized Divisions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284F5] shrink-0" />
            <span>CORE PILLARS OF ILM-ON DIGITAL SOLUTIONS</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Our Three <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#0284F5]">Specialized Divisions.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Whether advancing your individual career trajectory, building an enterprise team, or scaling digital market reach, ILM-ON provides focused execution across three distinct divisions.
          </p>
        </div>

        {/* Responsive Grid of 3 Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {DIVISIONS.map((division) => {
            const Icon = division.icon;

            return (
              <div
                key={division.id}
                className="rounded-3xl border border-surface-border bg-surface-light p-6 sm:p-8 flex flex-col justify-between shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Card Header Row: Icon & Division Tag */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105 ${division.iconBg}`}
                    >
                      <Icon className={`w-6 h-6 ${division.iconColor}`} />
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 whitespace-nowrap shrink-0">
                        {division.divisionNumber}
                      </span>
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border whitespace-nowrap shrink-0 ${division.badgeStyle}`}
                      >
                        {division.badgeText}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-black text-dark-950 tracking-tight leading-snug">
                    {division.name}
                  </h3>
                  <div className="text-xs font-bold text-[#0284F5] mt-1 mb-4">
                    {division.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {division.description}
                  </p>

                  {/* Capabilities Checklist */}
                  <div className="pt-5 border-t border-slate-200/80 space-y-2.5 mb-8">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-dark-950 mb-2">
                      Key Capabilities:
                    </div>
                    {division.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-slate-200/80">
                  <Link
                    href={division.href}
                    className="w-full py-3.5 px-4 rounded-xl bg-dark-950 hover:bg-[#0284F5] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 shadow-sm group-hover:shadow-md"
                  >
                    <span>{division.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
