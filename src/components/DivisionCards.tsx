'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, FileText, Users, TrendingUp, Sparkles } from 'lucide-react';

const divisions = [
  {
    id: 'career-services',
    tag: 'DIVISION 01',
    title: 'ILM-ON Career Services',
    subtitle: 'ATS-Friendly CVs & Profile Optimization',
    logo: '/assets/brand/ILM - ON Career Services Official Logo NEW.png',
    description:
      'Professional CV writing, modern executive resume design, and targeted online profile optimization for competitive international job markets.',
    image: '/assets/career-services/complete-career-branding-poster.png',
    href: '/career-services',
    accentTag: '1 Working Day Delivery',
    tagColor: 'bg-vivid-light text-vivid-blue border-vivid-blue/20',
    icon: FileText,
    services: [
      'ATS-Friendly CV Writing',
      'Professional CV Design',
      'Cover Letter Writing',
      'Physical Interview CV with Passport Photo',
      'LinkedIn Profile Optimization',
      'Indeed Profile Optimization',
      'Naukri Gulf Profile Optimization',
      'Bayt.com & GulfTalent Optimization',
    ],
    ctaText: 'Explore Career Services',
  },
  {
    id: 'recruitment',
    tag: 'DIVISION 02',
    title: 'ILM-ON Recruitment',
    subtitle: 'Connecting Talent with Opportunity',
    logo: '/assets/brand/ILM ON Recruitment OFFICIAL Logo.png',
    description:
      'Structured recruitment solutions connecting businesses with suitable professionals across India & the GCC through systematic sourcing and screening.',
    image: '/assets/recruitment/posters/1.png',
    href: '/recruitment',
    accentTag: 'Zero Upfront Candidate Fee',
    tagColor: 'bg-teal-light text-teal-accent border-teal-accent/20',
    icon: Users,
    services: [
      'Recruitment & Talent Sourcing',
      'Candidate Screening & Shortlisting',
      'Job Vacancy Promotion',
      'Employer–Candidate Coordination',
      'Interview Coordination',
      'India & GCC Job Opportunities',
      'Corporate Hiring Advisory',
    ],
    ctaText: 'Explore Recruitment Solutions',
    feeNote: 'Free to submit CV. Consultancy fee is 20% of first month salary only after joining & receiving first salary.',
  },
  {
    id: 'digital-marketing',
    tag: 'DIVISION 03',
    title: 'ADS ON — Powered by ILM-ON',
    subtitle: 'Creative Advertising Agency • Turn Your Brand ON',
    logo: '/assets/brand/ADS ON OFFICIAL LOGO.png',
    description:
      'Creative advertising and performance marketing built to turn ideas into attention and attention into growth across Meta, Google, and digital feeds.',
    image: '/assets/marketing/office-team-work.jpg',
    href: '/digital-marketing',
    accentTag: 'Creative Advertising Suite',
    tagColor: 'bg-vivid-light text-vivid-blue border-vivid-blue/20',
    icon: TrendingUp,
    services: [
      'Meta Ads (Facebook & Instagram Ads)',
      'Google Ads & Search Campaigns',
      'Social Media Management & Branding',
      'Poster, Banner & Creative Design',
      'Reels & Video Ads Production',
      'Personal Portfolio Websites',
      'Website Design & Scroll Animations',
      'Search Engine Optimization (SEO)',
    ],
    ctaText: 'Explore ADS ON',
  },
];

export default function DivisionCards() {
  return (
    <section id="divisions" className="py-24 bg-surface-light border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-vivid-blue" />
            <span>THREE SPECIALIZED DIVISIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-950 tracking-tight">
            Professional Solutions Under One Brand
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether developing your professional career profile, sourcing talent for your enterprise, or accelerating commercial visibility, ILM-ON delivers structured, dependable execution.
          </p>
        </div>

        {/* Division Cards Grid: Equal Visual Importance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((div) => {
            const Icon = div.icon;

            return (
              <div
                key={div.id}
                className="bg-white border border-surface-border rounded-3xl overflow-hidden flex flex-col justify-between shadow-card hover:shadow-elevated transition-all duration-300 group"
              >
                <div>
                  {/* Visual Header */}
                  <div className="relative h-64 w-full bg-slate-900 overflow-hidden border-b border-surface-border">
                    <Image
                      src={div.image}
                      alt={div.title}
                      fill
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border bg-white/95 backdrop-blur-sm shadow-xs ${div.tagColor}`}>
                        {div.accentTag}
                      </span>
                    </div>

                    {/* Official Sub-Brand Logo Badge Overlay */}
                    <div className="absolute bottom-3 right-3 z-10 h-10 w-28 bg-dark-950/85 backdrop-blur-md border border-white/15 rounded-xl p-1.5 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={div.logo}
                          alt={`${div.title} Logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <Icon className="w-3.5 h-3.5 text-vivid-blue" />
                      <span>{div.tag}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-dark-950 mb-1">
                      {div.title}
                    </h3>
                    <p className="text-xs font-bold text-vivid-blue mb-3">
                      {div.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {div.description}
                    </p>

                    {/* Services Checklist */}
                    <div className="border-t border-slate-100 pt-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-dark-950 mb-3">
                        Key Capabilities:
                      </h4>
                      <ul className="space-y-2">
                        {div.services.map((svc, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-teal-accent shrink-0 mt-0.5" />
                            <span>{svc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {div.feeNote && (
                      <div className="mt-4 p-3 rounded-xl bg-teal-50 border border-teal-200 text-[11px] text-teal-900 font-medium leading-relaxed">
                        {div.feeNote}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    href={div.href}
                    className="w-full py-3.5 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm hover:scale-[1.01]"
                  >
                    <span>{div.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
