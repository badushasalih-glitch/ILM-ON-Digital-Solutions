'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  FileCheck2,
  FileText,
  Linkedin,
  CheckCircle2,
} from 'lucide-react';

const ROLES_TO_CYCLE = [
  'Procurement Coordinator in UAE',
  'Sales Executive in Kerala',
  'Supply Chain & Logistics Lead',
  'Digital Marketing Specialist',
  'Senior Accountant in Dubai',
  'HR Operations Executive',
];

export default function SkilleazeHeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);
  const shouldReduceMotion = useReducedMotion();

  // Smooth typewriter effect cycling through targeted Gulf and Indian roles
  useEffect(() => {
    const fullRole = ROLES_TO_CYCLE[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullRole.length) {
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(60);
        }
      } else {
        setDisplayedText(fullRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES_TO_CYCLE.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(30);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  const whatsappUrl =
    'https://wa.me/9192929406522?text=' +
    encodeURIComponent('Hello ILM ON Digital Solutions, I would like to get an ATS-friendly CV consultation.');

  const reviewModalUrl =
    'https://wa.me/9192929406522?text=' +
    encodeURIComponent('Hello ILM ON Digital Solutions, I would like to request a Free CV Review for my current resume.');

  return (
    <section className="relative pt-12 sm:pt-16 pb-20 sm:pb-24 bg-[#F8FAFC] border-b border-surface-border overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#0284F5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0B1B3D] border border-slate-200/90 shadow-2xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0284F5]" />
            <span>ILM-ON DIGITAL SOLUTIONS • CAREER ACCELERATION</span>
          </div>

          {/* Primary Editorial Serif Headline */}
          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B1B3D] tracking-tight leading-[1.12] mb-6">
            Your experience is valuable.{' '}
            <span className="italic font-normal block sm:inline text-[#0284F5]">
              Let your resume prove it.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            ATS resumes, strategic cover letters, and profile positioning tailored for Gulf, European, and Indian hiring teams.
          </p>

          {/* Interactive Dynamic Focus Card */}
          <div className="w-full max-w-xl mx-auto mb-10">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-left relative overflow-hidden group">
              {/* Header Indicator */}
              <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0284F5]" />
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                    BUILT FOR YOUR NEXT ROLE AS
                  </span>
                </div>
                <span className="text-[10px] font-bold text-teal-accent bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 rounded-full uppercase shrink-0">
                  ATS-Ready
                </span>
              </div>

              {/* Dynamic Cycling Role Line */}
              <div className="min-h-[44px] flex items-center">
                <span className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1B3D] tracking-tight">
                  {displayedText}
                </span>
                <span className="inline-block w-0.5 h-6 bg-[#0284F5] ml-1 motion-safe:animate-pulse" />
              </div>

              {/* Badges inside card */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-700">
                    <FileCheck2 className="w-3.5 h-3.5 text-[#0284F5]" />
                    ATS Resume
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-700">
                    <FileText className="w-3.5 h-3.5 text-teal-600" />
                    Cover Letter
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-700">
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    LinkedIn Overhaul
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>from your real experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button Group (Neutral arrows cleanly used; WhatsApp logo reserved strictly for the floating contact button) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-lg mb-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full font-bold text-xs sm:text-sm bg-[#0B1B3D] hover:bg-[#11285A] text-white shadow-xl shadow-blue-950/20 hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2.5 group active:scale-98"
            >
              <span>Start on WhatsApp — Chat with our consultant</span>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={reviewModalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full font-bold text-xs sm:text-sm bg-white hover:bg-slate-50 text-[#0B1B3D] border border-slate-300 transition-all inline-flex items-center justify-center gap-2 active:scale-98 shadow-2xs"
            >
              <span>Request Free CV Review</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>

          {/* Text Anchor Link */}
          <div className="mb-10">
            <a
              href="#services"
              className="text-xs font-bold text-slate-500 hover:text-[#0B1B3D] underline underline-offset-4 transition-colors"
            >
              Browse services &amp; pricing details ↓
            </a>
          </div>

          {/* Clean Redesigned Official Brand Logo & Entry-Level Starting Price Lockup */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:px-6 sm:py-5 shadow-[0_8px_24px_rgba(11,27,61,0.06)] flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              {/* Official Brand Logo Asset preserving proportions and brand colors */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-[#1206A8] shadow-sm ring-1 ring-slate-200/80">
                <Image
                  src="/assets/brand/ilm-on-logo.png"
                  alt="ILM-ON Digital Solutions Official Logo"
                  fill
                  priority
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              {/* Balanced Entry Pricing Breakdown */}
              <div className="flex-1 text-center sm:text-left min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  ILM-ON Digital Solutions • CVs Starting From
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5 text-xs sm:text-sm font-black text-[#0B1B3D]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50/90 border border-blue-200/70">
                    <span className="text-[11px] font-semibold text-slate-600">India</span>
                    <span className="text-[#0284F5]">₹499</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-600">UAE</span>
                    <span>AED 25</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-600">International</span>
                    <span>$7</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Horizontal Ticker Marquee Ribbon */}
      <div className="mt-14 bg-[#0B1B3D] text-white py-3.5 overflow-hidden border-y border-white/10 select-none">
        <div className="animate-marquee-scroll flex items-center gap-8 whitespace-nowrap text-xs font-extrabold uppercase tracking-widest text-slate-200">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284F5]" />
            ATS RESUME
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            EUROPASS FORMAT
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            GULF &amp; UAE STANDARDS
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            LINKEDIN OPTIMIZATION
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            24–48H FAST DELIVERY
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            EDITABLE WORD + PDF
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            7-DAY FREE REVISIONS
          </span>
          <span className="text-slate-500">•</span>

          {/* Duplicate set for seamless infinite scroll */}
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284F5]" />
            ATS RESUME
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            EUROPASS FORMAT
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            GULF &amp; UAE STANDARDS
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            LINKEDIN OPTIMIZATION
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            24–48H FAST DELIVERY
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            EDITABLE WORD + PDF
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            7-DAY FREE REVISIONS
          </span>
        </div>
      </div>
    </section>
  );
}
