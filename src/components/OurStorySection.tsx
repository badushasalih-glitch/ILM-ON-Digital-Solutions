'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  HeartHandshake, 
  FileText, 
  Sparkles, 
  Globe2, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import Link from 'next/link';

const storyMilestones = [
  {
    step: '01',
    phase: 'UAE ROOTS & HR EXPERTISE',
    title: 'Real-World GCC Foundations',
    icon: Building2,
    desc: 'The journey began in the United Arab Emirates, where our core team worked in Human Resources, Recruitment, and Administrative roles for several years. Through this hands-on work, strong relationships were built with a wide network of HR professionals across the UAE, creating a team of HR experts with 5+ years of direct industry experience.',
    accentColor: 'text-vivid-blue',
    bgBadge: 'bg-vivid-light text-vivid-blue border-vivid-blue/20',
  },
  {
    step: '02',
    phase: 'GRASSROOTS SPARK',
    title: 'Helping Friends & Roommates',
    icon: HeartHandshake,
    desc: 'What started informally by helping roommates, close friends, and acquaintances with ATS-compliant CVs, strategic interview preparation, and job search coaching quickly revealed a deeper calling. Their remarkable success and word-of-mouth referrals brought more job seekers, and demand continued to grow organically.',
    accentColor: 'text-teal-accent',
    bgBadge: 'bg-teal-light text-teal-dark border-teal-accent/20',
  },
  {
    step: '03',
    phase: 'PURPOSE & ESTABLISHMENT',
    title: 'The Birth of ILM-ON Digital Solutions',
    icon: Sparkles,
    desc: 'What started as small acts of help became a defined purpose. Inspired by deep client trust and heartfelt appreciation, ILM-ON Digital Solutions was officially established as a remote digital services company dedicated to making professional career advancement dependable and accessible.',
    accentColor: 'text-vivid-blue',
    bgBadge: 'bg-vivid-light text-vivid-blue border-vivid-blue/20',
  },
  {
    step: '04',
    phase: 'EXPANSION & GLOBAL REACH',
    title: 'Creative Synergy & Worldwide Partnerships',
    icon: Globe2,
    desc: 'We expanded our service spectrum by collaborating with talented graphic designers, web presence specialists, and performance digital marketers. Today, ILM-ON Digital Solutions provides high-quality, reliable, and affordable solutions to clients worldwide—focused on building lasting partnerships and turning your vision ON.',
    accentColor: 'text-teal-accent',
    bgBadge: 'bg-teal-light text-teal-dark border-teal-accent/20',
  },
];

export default function OurStorySection() {
  return (
    <section className="py-24 bg-white border-t border-surface-border relative overflow-hidden" id="our-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Strictly OUR JOURNEY */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTIC EXPANSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-950 tracking-tight leading-tight">
            OUR JOURNEY
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Built from real-world GCC experience, professional expertise, and a genuine passion for helping people and businesses switch on their full potential.
          </p>
        </motion.div>

        {/* 2-Column Story Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Story Card with Full Usable Director Portrait Graphic */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden border border-surface-border shadow-elevated bg-white group">
              {/* Full Usable Graphic: Exact Aspect Ratio, Zero Cropping of Founder's Face, Beard, or Typography */}
              <div className="relative aspect-[3375/4219] w-full bg-slate-50">
                <Image
                  src="/assets/team/MEET THE FOUNDER - ILM ON.png"
                  alt="Meet The Founder - Badusha Salih, Founder & CEO of ILM-ON Digital Solutions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
              </div>

              {/* Clean Founder Overview Below Image: 100% Unobstructed Visual */}
              <div className="p-6 bg-surface-light border-t border-surface-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-vivid-blue">
                    EXECUTIVE LEADERSHIP
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold">UAE &amp; India Network</span>
                </div>
                <h4 className="text-base font-bold text-dark-950 leading-snug">
                  Badusha Salih — Founder, Director &amp; CEO
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Directing ILM-ON&apos;s strategic vision with 5+ years in corporate sales, digital marketing, and international recruitment advisory.
                </p>
              </div>
            </div>

            {/* Quick Impact Highlight Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-surface-light border border-surface-border text-center">
                <div className="text-lg font-black text-vivid-blue">5+ Yrs</div>
                <div className="text-[10px] font-bold text-slate-600 uppercase mt-0.5">UAE HR Roots</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-surface-light border border-surface-border text-center">
                <div className="text-lg font-black text-teal-accent">1,200+</div>
                <div className="text-[10px] font-bold text-slate-600 uppercase mt-0.5">CVs Delivered</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-surface-light border border-surface-border text-center">
                <div className="text-lg font-black text-dark-950">Dual Hub</div>
                <div className="text-[10px] font-bold text-slate-600 uppercase mt-0.5">India &amp; Dubai</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Progressive Step Timeline with Apple-style smooth reveal */}
          <div className="lg:col-span-7 space-y-4">
            {storyMilestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-2xl bg-surface-light border border-surface-border transition-all duration-200 hover:border-slate-300 hover:shadow-subtle group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-surface-border shadow-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${m.accentColor}`} />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${m.bgBadge}`}>
                          {m.phase}
                        </span>
                        <span className="text-xs font-black text-slate-400">
                          {m.step}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-dark-950">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom CTA bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-vivid-light/60 border border-vivid-blue/20">
              <div className="text-xs text-slate-700">
                <strong className="text-dark-950 block font-bold">Ready to take the next step in your career or digital growth?</strong>
                Connect directly with our leadership and certified HR specialists.
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/about"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-vivid-blue bg-white border border-vivid-blue/30 hover:bg-white/80 transition-all shadow-xs"
                >
                  Read Full About Us
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-vivid-blue hover:bg-vivid-hover transition-all shadow-xs flex items-center gap-1.5"
                >
                  <span>Consult With Us</span>
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
