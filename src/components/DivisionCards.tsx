'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, FileText, Users, TrendingUp } from 'lucide-react';

const divisions = [
  {
    id: 'career-services',
    tag: 'DIVISION 01',
    title: 'ILM-ON Career Services',
    subtitle: 'ATS-Friendly CVs & Profile Optimization',
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
      'Physical Interview CV with Passport-Size Photo',
      'LinkedIn Profile Optimization',
      'Indeed Profile Optimization',
      'Naukri Gulf Profile Optimization',
      'Bayt.com & GulfTalent Profile Optimization',
    ],
    ctaText: 'Explore Career Services',
  },
  {
    id: 'recruitment',
    tag: 'DIVISION 02',
    title: 'ILM-ON Recruitment',
    subtitle: 'Recruitment Support & Talent Consultancy',
    description:
      'We support employers in understanding talent requirements and connect them with qualified candidates through structured screening and shortlisting.',
    image: '/assets/recruitment/recruiter-consultation.jpg',
    href: '/recruitment',
    accentTag: 'Zero Upfront Candidate Fee',
    tagColor: 'bg-teal-light text-teal-accent border-teal-accent/20',
    icon: Users,
    services: [
      'Candidate Sourcing & Outreach',
      'CV Screening & Initial Vetting',
      'Candidate Shortlisting',
      'Interview Coordination',
      'Employer Requirement Understanding',
      'Talent-Employer Connection',
      'Recruitment Support & Advisory',
    ],
    ctaText: 'Explore Recruitment Solutions',
    feeNote: 'Free to submit CV. Consultancy fee is 20% of first month salary only after joining & receiving first salary.',
  },
  {
    id: 'digital-marketing',
    tag: 'DIVISION 03',
    title: 'ILM-ON Ads & Digital Marketing',
    subtitle: 'Branding, Paid Campaigns & Digital Presence',
    description:
      'Helping businesses build stronger digital presence, reach relevant audiences, and drive sustainable growth across Meta, search, and social media.',
    image: '/assets/marketing/office-team-work.jpg',
    href: '/digital-marketing',
    accentTag: 'Comprehensive Digital Setup',
    tagColor: 'bg-vivid-light text-vivid-blue border-vivid-blue/20',
    icon: TrendingUp,
    services: [
      'Meta Ads (Facebook & Instagram Ads)',
      'Lead Generation Campaigns',
      'Social Media Management & Branding',
      'Content Creation & Creative Design',
      'Personal Portfolio Website Creation',
      'Google Business Profile Setup',
      'Website & Digital Presence Setup',
      'Performance Marketing & Strategy',
    ],
    ctaText: 'Explore Digital Marketing',
  },
];

export default function DivisionCards() {
  return (
    <section id="divisions" className="py-24 bg-surface-light border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
            THREE SPECIALIZED DIVISIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-950 mt-2">
            Professional Solutions Under One Brand
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Whether developing your professional career profile, sourcing talent for your business, or expanding your digital reach, ILM-ON provides structured, dependable execution.
          </p>
        </div>

        {/* Division Cards Grid: Equal Visual Importance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((div) => {
            const Icon = div.icon;

            return (
              <div
                key={div.id}
                className="bg-white border border-surface-border rounded-2xl overflow-hidden flex flex-col justify-between shadow-card hover:shadow-elevated transition-all duration-200"
              >
                <div>
                  {/* Visual Header */}
                  <div className="relative h-60 w-full bg-slate-100 overflow-hidden border-b border-surface-border">
                    <Image
                      src={div.image}
                      alt={div.title}
                      fill
                      className={`object-cover hover:scale-[1.02] transition-transform duration-300 ${
                        div.id === 'digital-marketing' ? 'object-center' : 'object-top'
                      }`}
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border bg-white/95 backdrop-blur-sm ${div.tagColor}`}>
                        {div.accentTag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <Icon className="w-3.5 h-3.5 text-vivid-blue" />
                      <span>{div.tag}</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark-950 mb-1">
                      {div.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">
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
                      <div className="mt-4 p-3 rounded-lg bg-teal-light/50 border border-teal-accent/20 text-[11px] text-teal-dark font-medium leading-relaxed">
                        {div.feeNote}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    href={div.href}
                    className="w-full py-3 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
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
