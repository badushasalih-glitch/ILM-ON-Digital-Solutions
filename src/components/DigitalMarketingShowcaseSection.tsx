'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  TrendingUp,
  Target,
  Search,
  Palette,
  Share2,
  Video,
  Layers,
  ArrowRight,
  CheckCircle2,
  Globe,
} from 'lucide-react';

const MARKETING_SERVICES = [
  {
    title: 'Meta Ads (Facebook & Instagram)',
    audience: 'Businesses & Direct-to-Consumer Brands',
    description:
      'Targeted audience segmentation, creative testing, and retargeting campaign structures designed to attract relevant customer inquiries and business leads.',
    deliverables: ['Audience targeting & ad sets', 'Ad creative & copywriting'],
    icon: Target,
  },
  {
    title: 'Google Ads & Search Campaigns',
    audience: 'Service Providers & Regional Enterprises',
    description:
      'Capture prospective buyers actively searching for your offerings through structured search campaigns and conversion-oriented landing experiences.',
    deliverables: ['High-intent keyword grouping', 'Search ad & extension setup'],
    icon: Search,
  },
  {
    title: 'Social Media Management & Branding',
    audience: 'Growing Businesses & Corporate Accounts',
    description:
      'Cohesive visual identity alignment, content scheduling, and consistent brand storytelling to build audience visibility and credibility.',
    deliverables: ['Visual branding & feed layout', 'Content calendar execution'],
    icon: Share2,
  },
  {
    title: 'Poster, Banner & Creative Design',
    audience: 'Retail, Events & Service Promotions',
    description:
      'Commercial campaign posters, carousel graphics, and promotional visuals tailored for clarity across mobile and desktop feeds.',
    deliverables: ['Campaign posters & carousels', 'Platform-sized visual kits'],
    icon: Palette,
  },
  {
    title: 'Reels, Video Ads & Motion Content',
    audience: 'Modern Digital & Social Campaigns',
    description:
      'Short-form video concepts, promotional scripting, and edited motion visuals designed to communicate your offer quickly in social feeds.',
    deliverables: ['Reels editing & motion graphics', 'Short-form ad structuring'],
    icon: Video,
  },
  {
    title: 'Websites, Scroll Experiences & SEO',
    audience: 'Businesses, Consultants & Professionals',
    description:
      'Responsive websites, landing pages, technical SEO setup, and dedicated Personal Portfolio Websites for professionals, freelancers, consultants, and entrepreneurs.',
    deliverables: ['Business & portfolio websites', 'Responsive layout & on-page SEO'],
    icon: Layers,
  },
];

const CAMPAIGN_STEPS = [
  {
    step: '01',
    title: 'Share Goals & Market',
    desc: 'Outline your product, service, target region (India or UAE/GCC), and audience focus.',
  },
  {
    step: '02',
    title: 'Define Creative Scope',
    desc: 'Select individual services such as Meta/Google Ads, video reels, posters, or website design.',
  },
  {
    step: '03',
    title: 'Launch & Track',
    desc: 'Deploy structured creatives and monitor performance metrics for ongoing campaign refinement.',
  },
];

export default function DigitalMarketingShowcaseSection() {
  const marketingWhatsapp =
    'https://wa.me/919292940652?text=' +
    encodeURIComponent(
      'Hello ILM-ON ADS ON Desk, I would like to inquire about digital marketing or web services.'
    );

  return (
    <section
      id="marketing-division"
      className="py-20 sm:py-24 bg-surface-light border-t border-surface-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-indigo-700 border border-indigo-200/80 mb-3 shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
              <span>DIVISION 03 • ADS ON CREATIVE ADVERTISING</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              Ads That Get Attention.{' '}
              <span className="italic font-normal text-[#0284F5] block sm:inline">
                Digital That Gets Results.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Operating under our creative advertising sub-brand <strong>ADS ON</strong>, we serve businesses, entrepreneurs, and individual professionals across India and the UAE with coordinated ad campaigns, visual design, video production, and custom web development.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 p-2.5 rounded-2xl bg-[#0B1B3D] text-white border border-slate-800 shrink-0">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black shrink-0">
              <Image
                src="/assets/brand/ADS ON OFFICIAL LOGO.png"
                alt="ADS ON Official Logo — Powered by ILM-ON"
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>
            <div className="pr-2 text-xs">
              <div className="font-bold text-white">ADS ON Agency</div>
              <div className="text-[11px] text-slate-300 font-medium">Powered by ILM-ON</div>
            </div>
          </div>
        </div>

        {/* 6 Individual Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12">
          {MARKETING_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-surface-border shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group hover:border-indigo-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-surface-border flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200/70 px-2.5 py-0.5 rounded-full">
                      ADS ON
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] mb-1.5 leading-snug">
                    {srv.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#0284F5] mb-3">
                    For: {srv.audience}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="space-y-1">
                    {srv.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 flex items-center justify-end">
                    <Link
                      href="/digital-marketing"
                      className="text-xs font-bold text-[#0284F5] hover:underline inline-flex items-center gap-1"
                    >
                      <span>View Service Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Getting Started & Agency Highlights Box */}
        <div className="rounded-3xl bg-[#0B1B3D] p-7 sm:p-10 text-white border border-white/10 shadow-elevated space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0284F5]/20 text-cyan-300 border border-[#0284F5]/30">
                <Globe className="w-3.5 h-3.5" />
                <span>INDIA &amp; UAE COMMERCIAL DESK</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Start a Campaign or Digital Build
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Whether you are launching paid Meta or Google campaigns for a business or building a Personal Portfolio Website to present your career credentials, our creative and digital team scopes the project clearly before work begins.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center justify-end gap-3">
              <a
                href={marketingWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-bold bg-[#0284F5] hover:bg-blue-600 text-white transition-all text-center inline-flex items-center justify-center gap-2 shadow-md"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/digital-marketing"
                className="px-6 py-3.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Explore ADS ON Suite</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CAMPAIGN_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-[11px] font-black text-cyan-300 font-mono mb-1">
                  STEP {item.step}
                </div>
                <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
