'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp,
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
  Video,
  Instagram,
  Linkedin,
  MessageSquare,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import AdsOnPosterShowcase from '@/components/AdsOnPosterShowcase';

const adsOnServices = [
  {
    title: 'Meta Ads (Facebook & Instagram)',
    desc: 'Targeted audience segmentation, creative testing, and high-converting retargeting architectures designed to generate qualified business leads.',
    icon: Target,
  },
  {
    title: 'Google Ads & Search Campaigns',
    desc: 'Capture high-intent buyers actively searching for your products and services with optimized keywords and conversion-focused landing experiences.',
    icon: Search,
  },
  {
    title: 'Social Media Management & Branding',
    desc: 'Consistent brand storytelling, visual identity alignment, and community engagement to establish commercial authority in your sector.',
    icon: Share2,
  },
  {
    title: 'Poster, Banner & Creative Design',
    desc: 'Modern visual creatives, commercial campaign posters, carousels, and promotional graphics crafted specifically for short-attention feeds.',
    icon: Palette,
  },
  {
    title: 'Reels, Video Ads & Creative Production',
    desc: 'Engaging video concepts, motion graphics, and short-form video ads scripted and edited for maximum watch-time and audience conversion.',
    icon: Video,
  },
  {
    title: 'Websites, Scroll Animations & SEO',
    desc: 'Bespoke web applications, high-converting landing pages, scroll animations, and technical search engine optimization to establish permanent digital equity.',
    icon: Layers,
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="pt-24 pb-20 bg-surface-light min-h-screen text-dark-950 overflow-x-hidden">
      {/* 1. Hero Header — ADS ON Division Identity */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative overflow-hidden bg-white border-b border-surface-border">
        {/* Subtle ambient gradient */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-vivid-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Brand Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Division Badge & Official Sub-Brand Logo */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-blue text-white shadow-xs">
                  <Megaphone className="w-3.5 h-3.5" />
                  <span>DIVISION 03 • CREATIVE ADVERTISING</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  Powered by ILM-ON Digital Solutions
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark-950 tracking-tight leading-[1.08]">
                  Ads that get attention. <br />
                  <span className="text-vivid-blue">Digital that gets results.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 font-medium">
                  Meta Ads • Google Ads • SEO • Social Media • Content • Websites • Creative Production
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                ADS ON is a creative advertising and digital marketing agency built to turn ideas into attention and attention into growth. We bring strategy, creativity, and technology together under one roof. We don’t just create ads — we create reasons to be noticed.
              </p>

              {/* CTAs & Social Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919292940652?text=Hello%20ADS%20ON,%20I%20want%20to%20discuss%20a%20creative%20advertising%20campaign%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold bg-vivid-blue hover:bg-vivid-blue/90 text-white shadow-md transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Turn Your Brand ON</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold bg-white text-dark-950 border border-surface-border hover:bg-slate-50 transition-all shadow-sm"
                >
                  <span>View Advertising Plans</span>
                </Link>

                <div className="flex items-center gap-2 pl-2">
                  <a
                    href="https://www.instagram.com/ilmon_digitalsolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow ILM-ON on Instagram"
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-vivid-light text-slate-700 hover:text-vivid-blue border border-slate-200 flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ilm-on-digital-solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with ILM-ON on LinkedIn"
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-vivid-light text-slate-700 hover:text-vivid-blue border border-slate-200 flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Official ADS ON Brand Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="p-8 sm:p-10 rounded-3xl bg-dark-950 text-white border border-white/10 shadow-elevated relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-vivid-blue/20 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Official ADS ON Logo Graphic */}
                  <div className="relative h-16 w-52 bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center justify-center">
                    <Image
                      src="/assets/brand/ADS ON OFFICIAL LOGO.png"
                      alt="ADS ON — Powered by ILM-ON Official Logo"
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-vivid-blue block mb-1">
                      CREATIVE ADVERTISING AGENCY
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      One Brand. One Creative Partner. One Switch.
                    </h3>
                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                      Every campaign, design, video, website, and digital experience we create is built to help your brand stand out and move forward.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <Zap className="w-4 h-4 text-vivid-blue shrink-0" />
                      <span>Creative in thinking • Ideas that capture attention</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Target className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Strategic in execution • Campaigns built around goals</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Performance focused • Continuous data optimization</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>India &amp; UAE Commercial Desk</span>
                  <span className="font-bold text-vivid-blue">ADS ON • Powered by ILM-ON</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE SIX OFFICIAL ADS ON CAROUSEL POSTERS — Interactive Framer Motion Storytelling */}
      <AdsOnPosterShowcase />

      {/* 3. About ADS ON, Our Story, Commitment & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Our Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AGENCY STORY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 tracking-tight">
                Our Story: Great Brands Deserve to Be Seen.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ADS ON was created from a simple idea: Great brands deserve to be seen. What started with digital creativity and marketing evolved into a complete creative advertising solution — combining advertising, content, design, technology, and digital strategy.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Today, ADS ON helps businesses turn their ideas into campaigns, content, experiences, and growth. Your brand has potential. We turn it ON.
              </p>

              <div className="p-6 rounded-2xl bg-surface-light border border-surface-border">
                <div className="text-xs font-bold text-vivid-blue uppercase tracking-wider mb-1">
                  OUR VISION
                </div>
                <p className="text-xs sm:text-sm text-dark-950 font-semibold leading-relaxed">
                  To become a creative digital partner for ambitious brands — where ideas, technology, and advertising come together to create meaningful digital growth. We envision a world where every great idea gets the attention it deserves.
                </p>
              </div>
            </div>

            {/* Right: Why ADS ON? & Our Commitment */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal-dark border border-teal-accent/25">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-accent" />
                <span>WHY ADS ON?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 tracking-tight">
                Because Ordinary Marketing Gets Ignored.
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: 'Creative Thinking',
                    desc: 'Ideas designed to capture attention and stand out from generic clutter.',
                  },
                  {
                    title: 'Strategic Advertising',
                    desc: 'Campaigns built around clear commercial goals and audience intent.',
                  },
                  {
                    title: 'Creative Production',
                    desc: 'From scripts and shoots to editing, graphic design, and final content.',
                  },
                  {
                    title: 'Digital Experiences',
                    desc: 'Websites, scroll animations, SEO, and social optimization.',
                  },
                  {
                    title: 'Performance Focused',
                    desc: 'Creative backed by data, clear tracking, and continuous improvement.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-dark-950">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comprehensive Services Suite */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              SERVICES SUITE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              Creative Advertising &amp; Digital Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Strategic, technical, and creative execution working together to build real brand equity across India &amp; the GCC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adsOnServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-surface-border hover:border-vivid-blue/40 shadow-xs hover:shadow-card transition-all flex flex-col justify-between"
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
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-teal-accent border-t border-slate-100 pt-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Structured execution &amp; weekly reporting</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Personal Portfolio Website Dedicated Service */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-surface-light border border-surface-border shadow-card p-8 sm:p-12 lg:p-16">
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
                  Build a professional online presence that showcases your experience, skills, projects, and achievements.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored specifically for professionals, freelancers, job seekers, creators, consultants, and entrepreneurs seeking an authoritative personal brand that makes an immediate, lasting impression on corporate recruiters and clients.
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-dark-950 mb-3.5">
                    Included Capabilities &amp; Specifications:
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
                      INVESTMENT &amp; DELIVERABLES
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Custom Quotation
                    </h3>
                    <div className="text-xs text-teal-light font-medium mt-1">
                      Contact us for custom scope &amp; timeline
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
                      <span>Custom design preview &amp; approval</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Full domain &amp; hosting setup guidance</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a
                      href="https://wa.me/919292940652?text=Hello%20ADS%20ON,%20I%20would%20like%20a%20Custom%20Quote%20for%20a%20Personal%20Portfolio%20Website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-vivid-blue hover:bg-vivid-blue/90 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
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

      {/* 6. Commercial Consultation CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-dark-950 text-white p-8 sm:p-12 shadow-elevated text-center relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-vivid-blue/15 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-vivid-blue/20 text-vivid-blue border border-vivid-blue/30 mb-4">
            COMMERCIAL GROWTH &bull; ADS ON
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Turn Your Brand ON?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Schedule a direct consultation with our creative digital team in India or Dubai. We review your current channels, assess your audience, and propose a high-impact growth strategy.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/919292940652?text=Hello%20ADS%20ON,%20I%20would%20like%20to%20schedule%20a%20digital%20campaign%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold bg-vivid-blue hover:bg-vivid-blue/90 text-white shadow-md transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
            >
              <span>Explore Pricing &amp; Plans</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
