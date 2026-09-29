'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  TrendingUp,
  BarChart3,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Check,
  Megaphone,
  Palette,
  Search,
  Share2,
} from 'lucide-react';

const marketingServices = [
  {
    title: 'Meta Ads (Facebook & Instagram)',
    desc: 'Targeted audience segmentation, creative testing, and retargeting architectures designed to generate qualified business leads.',
    icon: Target,
  },
  {
    title: 'Lead Generation Campaigns',
    desc: 'High-intent lead generation funnels combining engaging ad copy, direct WhatsApp routing, and frictionless inquiry capture.',
    icon: TrendingUp,
  },
  {
    title: 'Social Media Management & Branding',
    desc: 'Consistent brand storytelling, visual identity alignment, and community engagement to establish authority in your sector.',
    icon: Share2,
  },
  {
    title: 'Content Creation & Creative Design',
    desc: 'Modern visual creatives, promotional banners, carousels, and video edits crafted specifically for short-attention social feeds.',
    icon: Palette,
  },
  {
    title: 'Google Business Profile & Local SEO',
    desc: 'Setup, verification, and local optimization of your Google Business presence to attract nearby customers actively searching for your service.',
    icon: Search,
  },
  {
    title: 'Website & Digital Setup',
    desc: 'End-to-end configuration of your digital presence, domain setup, landing page consultation, and tracking pixel integration.',
    icon: Layers,
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      {/* 1. Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-4">
            <Megaphone className="w-3.5 h-3.5" />
            <span>DIVISION 03 • DIGITAL GROWTH & ADS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-950 tracking-tight">
            Strategic Digital Presence. <br />
            <span className="text-vivid-blue">Targeted Ads & Business Branding.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Helping businesses build stronger digital foundations, reach relevant audiences, and drive sustainable inquiry volume across Meta, Google, and social platforms.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Digital,%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold bg-vivid-blue hover:bg-vivid-blue/90 text-white shadow-md transition-all"
            >
              <span>Consult with Ad Specialist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold bg-white text-dark-950 border border-surface-border hover:bg-slate-50 transition-all shadow-sm"
            >
              <span>View Marketing Packages</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Visual Photography & Creative Studio Feature */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real Creative Team Studio Image */}
            <div className="lg:col-span-7">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-surface-border shadow-elevated bg-slate-100">
                <Image
                  src="/assets/marketing/team-work-studio.jpg"
                  alt="ILM-ON Digital Marketing Strategy & Creative Studio"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                  <div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-vivid-blue text-white mb-2 inline-block">
                      Creative Execution
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Hands-On Media & Campaign Architecture
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-lg">
                      Every campaign is backed by authentic creative production, strategic audience segmentation, and transparent metric tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Marketing Mockup Graphic */}
            <div className="lg:col-span-5">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-surface-border shadow-elevated bg-white p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue block mb-1">
                    PERFORMANCE FRAMEWORK
                  </span>
                  <h3 className="text-2xl font-extrabold text-dark-950">
                    Transparent Digital Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    We eliminate guesswork and vanity metrics. Our team plans campaigns with clear deliverables, dedicated creative variations, and transparent weekly reporting.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                      <span>Dedicated ad campaign manager and creative designer</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                      <span>Custom audience targeting based on real buyer behavior</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                      <span>Direct WhatsApp business lead routing for immediate conversion</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                      <span>Clear weekly cost-per-lead and engagement reporting</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border">
                  <div className="text-[11px] text-slate-500 font-medium">
                    Led by Badusha Mohamed Salih • 5+ Years in Digital Marketing & Sales Strategies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Growth Capabilities Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-y border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              SERVICES SUITE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              Comprehensive Digital Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Strategic, technical, and creative execution working together to build real brand equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-surface-light border border-surface-border hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-vivid-light text-vivid-blue flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-dark-950 mb-2">{svc.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-teal-accent border-t border-slate-200 pt-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Structured execution & review</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Personal Portfolio Website Dedicated Service (CHANGE 04) */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white border border-surface-border shadow-card p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SPECIALIZED DIGITAL SERVICE</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-950 tracking-tight leading-tight">
                  Personal Portfolio Website
                </h2>
                
                <p className="text-base sm:text-lg text-slate-700 font-medium">
                  Build a professional online presence that showcases your experience, skills, projects and achievements.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored specifically for professionals, freelancers, job seekers, creators, consultants, and entrepreneurs seeking an authoritative personal brand that makes an immediate, lasting impression on corporate recruiters and clients.
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-dark-950 mb-3.5">
                    Included Capabilities & Specifications:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Professional personal portfolio website',
                      'Personal branding & aesthetic alignment',
                      'About Me / Professional Profile section',
                      'Skills & Core Expertise showcase',
                      'Work Experience & Career milestones',
                      'Projects & Case Studies showcase',
                      'Downloadable Resume / CV integration',
                      'Services & Offerings section',
                      'Direct Contact & WhatsApp integration',
                      'Responsive mobile-friendly design',
                      'Modern professional UI architecture',
                      'Custom domain integration support',
                      'Basic SEO-friendly structure & fast load',
                    ].map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-teal-accent shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & CTA Card */}
              <div className="lg:col-span-5">
                <div className="p-8 rounded-2xl bg-dark-950 text-white border border-white/10 shadow-elevated flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-vivid-blue block mb-1">
                      INVESTMENT & DELIVERABLES
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Custom Quotation
                    </h3>
                    <div className="text-xs text-teal-light font-medium mt-1">
                      Contact us for pricing
                    </div>
                    <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                      Every professional portfolio is uniquely designed to reflect your individual career achievements, target industry, and branding preferences.
                    </p>
                  </div>

                  <div className="space-y-3 py-2 border-y border-white/10 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>1-on-1 discovery consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Custom design preview & approval</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Full domain & hosting setup guidance</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a
                      href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Digital,%20I%20would%20like%20a%20Custom%20Quote%20for%20a%20Personal%20Portfolio%20Website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-vivid-blue hover:bg-vivid-blue/90 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href="/contact"
                      className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center border border-white/15 transition-all text-center"
                    >
                      Contact Our Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Digital Presence & Consultation CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-dark-950 text-white p-8 sm:p-12 shadow-elevated text-center">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-vivid-blue/20 text-vivid-blue border border-vivid-blue/30 mb-4">
            COMMERCIAL GROWTH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Build a Stronger Digital Footprint?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Schedule a direct consultation with our digital team in India or Dubai. We review your current channels and propose a clean, structured growth plan.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20would%20like%20to%20schedule%20a%20digital%20presence%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold bg-vivid-blue hover:bg-vivid-blue/90 text-white shadow-md transition-all"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
            >
              <span>Explore Pricing & Plans</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
