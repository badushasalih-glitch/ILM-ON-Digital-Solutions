'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MessageCircle,
  FileText,
  FileCheck,
  Compass,
  Linkedin,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  MapPin,
  CheckCircle2,
  Check,
  Layers,
  Award,
  Eye,
  X,
} from 'lucide-react';

interface PreviewTab {
  id: 'ats' | 'cover' | 'europass' | 'linkedin';
  label: string;
  icon: React.ElementType;
  badge: string;
}

const PREVIEW_TABS: PreviewTab[] = [
  { id: 'ats', label: 'ATS CV', icon: FileCheck, badge: 'PARSER COMPLIANT' },
  { id: 'cover', label: 'Cover Letter', icon: FileText, badge: 'ROLE TAILORED' },
  { id: 'europass', label: 'Europass CV', icon: Compass, badge: 'EU COMMISSION' },
  { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, badge: 'RECRUITER MAGNET' },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'ats' | 'cover' | 'europass' | 'linkedin'>('ats');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const whatsappIndiaUrl =
    'https://wa.me/9192929406522?text=' +
    encodeURIComponent('Hello ILM-ON, I would like to know more about your career services.');

  const whatsappUaeUrl =
    'https://wa.me/971562958907?text=' +
    encodeURIComponent('Hello ILM-ON Dubai Desk, I would like to know more about your career services.');

  // Cycle preview tabs automatically unless reduced motion is preferred
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveTab((current) => {
        const order: ('ats' | 'cover' | 'europass' | 'linkedin')[] = ['ats', 'cover', 'europass', 'linkedin'];
        const nextIndex = (order.indexOf(current) + 1) % order.length;
        return order[nextIndex];
      });
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[640px] lg:min-h-[760px] flex items-center overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 border-b border-surface-border bg-gradient-to-b from-[#030712] via-[#050C1F] to-[#060814] text-white">
      {/* Background Corporate Pattern & Subtle Ambient Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/assets/hero/hero-corporate-bg.jpg"
          alt="ILM-ON Digital Solutions - Professional Career Consultation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 anim-hero-bg mix-blend-luminosity"
        />
        {/* Navy Brand Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#050C1F]/95 to-[#060814]/90" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0284F5]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060814] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* =========================================================================
              LEFT COLUMN: HERO COPY & CALLS TO ACTION
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Small Eyebrow Badge */}
            <div className="anim-hero-rise-1">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/15 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0284F5] animate-pulse" />
                <span>ILM-ON DIGITAL SOLUTIONS | CAREER & PROFESSIONAL GROWTH</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="anim-hero-rise-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Your Career Deserves a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284F5] via-sky-300 to-teal-300">
                  Stronger Presentation.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <div className="anim-hero-rise-3">
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Professional CV writing, ATS-friendly resumes, cover letters, LinkedIn optimization and digital solutions to help individuals and businesses present their potential with confidence.
              </p>
            </div>

            {/* Division Quick Switch Pills */}
            <div className="anim-hero-rise-4 pt-1">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-2">
                Specialized Divisions:
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <Link
                  href="/career-services"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 transition-all hover:border-[#0284F5]/50"
                >
                  <FileText className="w-3.5 h-3.5 text-[#0284F5]" />
                  <span>Career Services</span>
                </Link>
                <Link
                  href="/recruitment"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 transition-all hover:border-teal-400/50"
                >
                  <Users className="w-3.5 h-3.5 text-teal-300" />
                  <span>Recruitment Support</span>
                </Link>
                <Link
                  href="/digital-marketing"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 transition-all hover:border-indigo-400/50"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-300" />
                  <span>Ads & Digital Marketing</span>
                </Link>
              </div>
            </div>

            {/* CTAs */}
            <div className="anim-hero-rise-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={whatsappIndiaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl font-bold text-sm bg-[#0284F5] hover:bg-[#0274da] text-white shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Talk to a Career Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="px-7 py-4 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-sm transition-all inline-flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Trust Bar with Dual-Desk Contacts */}
            <div className="anim-hero-rise-5 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0284F5] shrink-0" />
                <span>
                  India Desk:{' '}
                  <a
                    href="tel:+9192929406522"
                    className="font-bold text-white hover:text-sky-300 transition-colors"
                  >
                    +91 92929406522
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>
                  UAE Desk:{' '}
                  <a
                    href="tel:+971562958907"
                    className="font-bold text-white hover:text-teal-300 transition-colors"
                  >
                    +971 56 295 8907
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Privacy & Parser Compliance</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: SOPHISTICATED INTERACTIVE DOCUMENT PREVIEW SHOWCASE
              ========================================================================= */}
          <div className="lg:col-span-5 anim-hero-rise-3">
            <div className="relative rounded-3xl p-4 sm:p-5 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl">
              {/* Floating Top Pill Badge */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-200">
                    Interactive Portfolio Deck
                  </span>
                </div>
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-300 hover:text-sky-200 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Detail</span>
                </button>
              </div>

              {/* Format Tabs Switcher */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-black/40 rounded-xl mb-4 border border-white/10">
                {PREVIEW_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all text-center ${
                        isActive
                          ? 'bg-[#0284F5] text-white shadow-md font-bold'
                          : 'text-slate-400 hover:text-white hover:bg-white/5 font-medium'
                      }`}
                    >
                      <Icon className="w-4 h-4 mb-1" />
                      <span className="text-[10px] leading-none tracking-tight">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Document Showcase Window */}
              <div className="relative rounded-2xl overflow-hidden bg-white text-dark-950 p-5 sm:p-6 shadow-inner min-h-[380px] sm:min-h-[410px] flex flex-col justify-between border border-slate-200 transition-all">
                {/* 1. ATS CV TAB */}
                {activeTab === 'ats' && (
                  <div className="space-y-3.5 text-left animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
                          Applicant Tracking System Architecture
                        </div>
                        <h4 className="text-base sm:text-lg font-black text-dark-950">
                          Alexander Vance
                        </h4>
                        <div className="text-[11px] text-slate-500 font-medium">
                          Senior Operations & Project Delivery Director • Dubai, UAE
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                        98% ATS MATCH
                      </span>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 text-[11px] text-slate-600 leading-relaxed">
                      <strong className="text-dark-950">Professional Summary:</strong> High-impact
                      Operations Leader with 9+ years managing EPC portfolios, cross-border supply chains,
                      and multi-discipline engineering teams across UAE and Saudi Arabia.
                    </div>

                    <div>
                      <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                        Core Competencies & Keyword Taxonomy:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {['P&L Governance', 'EPC Contracting', 'Aramco Standards', 'Agile & PMP®', 'Lean Six Sigma', 'Cost Optimization'].map(
                          (tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-blue-50 text-vivid-blue text-[10px] font-bold border border-blue-100"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                        Verifiable Achievement Bullets:
                      </div>
                      <div className="text-[11px] text-slate-700 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>Restructured regional logistics loops, reducing material lag by 22% across 4 mega-projects.</span>
                      </div>
                      <div className="text-[11px] text-slate-700 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>Delivered AED 48M commercial expansion under budget with 100% GCC safety compliance.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. COVER LETTER TAB */}
                {activeTab === 'cover' && (
                  <div className="space-y-3 text-left animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-teal-600">
                          Strategic Executive Cover Letter
                        </div>
                        <h4 className="text-base sm:text-lg font-black text-dark-950">
                          Tailored Value Proposition
                        </h4>
                        <div className="text-[11px] text-slate-500">
                          Addressed to: Hiring Director & Search Committee
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-teal-50 text-teal-700 border border-teal-200 shrink-0">
                        ROLE ALIGNED
                      </span>
                    </div>

                    <div className="space-y-2 text-[11px] text-slate-700 leading-relaxed font-serif italic border-l-2 border-[#0284F5] pl-3 py-1">
                      <p>
                        &ldquo;Dear Hiring Committee, Having steered cross-border operations across the GCC for over nine years, I have consistently aligned capital allocations with rapid execution milestones...&rdquo;
                      </p>
                      <p className="font-sans not-italic text-[10px] text-slate-500">
                        Includes clear strategic hooks, quantified accomplishments, and a tailored closing CTA requesting interview dialogue.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-1">
                      <div className="text-[10px] font-bold text-dark-950 uppercase tracking-wider">
                        Key Deliverable Highlights:
                      </div>
                      <div className="text-[11px] text-slate-600 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Formatted on matching letterhead with your ATS CV</span>
                      </div>
                      <div className="text-[11px] text-slate-600 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Editable Word (.docx) + Print-Ready PDF</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. EUROPASS CV TAB */}
                {activeTab === 'europass' && (
                  <div className="space-y-3 text-left animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#003399]">
                          European Commission Standard
                        </div>
                        <h4 className="text-base sm:text-lg font-black text-dark-950">
                          Official Europass Structure
                        </h4>
                        <div className="text-[11px] text-slate-500">
                          Recognized across Germany, Ireland, Poland, Malta & EU
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-blue-50 text-[#003399] border border-blue-200 shrink-0">
                        EU CEFR STANDARD
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-slate-50 border border-slate-200">
                        <div className="font-bold text-dark-950 text-[10px] uppercase">Language Grid</div>
                        <div className="text-slate-600 text-[10px] mt-0.5">CEFR C2 Mastery / C1 Professional</div>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-200">
                        <div className="font-bold text-dark-950 text-[10px] uppercase">EU Mobility</div>
                        <div className="text-slate-600 text-[10px] mt-0.5">Work Visa & Study Recognized</div>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-slate-700">
                      <div className="font-bold text-dark-950 text-[10px] uppercase tracking-wider">
                        EU Formatting Inclusions:
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>Official European Union chronological work history</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>Digital Competences & Technical Skill Matrix</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>Mother Tongue & Language Proficiency Scale</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. LINKEDIN TAB */}
                {activeTab === 'linkedin' && (
                  <div className="space-y-3 text-left animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#0A66C2]">
                          Executive Profile Optimization
                        </div>
                        <h4 className="text-base sm:text-lg font-black text-dark-950">
                          Recruiter-Magnetic Architecture
                        </h4>
                        <div className="text-[11px] text-slate-500">
                          Search Keyword Indexing & Personal Branding
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-sky-50 text-[#0A66C2] border border-sky-200 shrink-0">
                        ALGORITHM TUNED
                      </span>
                    </div>

                    <div className="p-2.5 bg-blue-50/60 rounded-lg border border-blue-100 text-[11px]">
                      <div className="text-[10px] font-bold text-[#0A66C2] uppercase mb-0.5">
                        Headline Blueprint:
                      </div>
                      <div className="font-semibold text-slate-800 leading-snug">
                        Senior Project Manager | PMP® | Operations Turnaround Leader | Cross-Border GCC & International Delivery
                      </div>
                    </div>

                    <div className="space-y-1 text-[11px] text-slate-700">
                      <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                        Optimization Matrix:
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Compelling 1st-person &ldquo;About&rdquo; narrative</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Top 50 skills aligned to corporate recruiter filters</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Banner, featured section & credential strategy</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Bottom Micro-Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-[#0284F5]" />
                    <span>Delivered in Word (.docx) & PDF</span>
                  </div>
                  <Link
                    href="/portfolio"
                    className="text-[11px] font-extrabold text-[#0284F5] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Gallery</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Bottom Quick Switch Indicator Dots */}
              <div className="flex items-center justify-center gap-2 mt-3">
                {PREVIEW_TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    aria-label={`View ${t.label} sample`}
                    className={`h-1.5 rounded-full transition-all ${
                      activeTab === t.id ? 'w-6 bg-[#0284F5]' : 'w-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Inspection Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative bg-white text-dark-950 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-vivid-blue" />
                <h3 className="text-lg font-bold text-dark-950">ILM-ON Document Format Blueprint</h3>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Close Inspection Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Every career document delivered by ILM-ON Digital Solutions is hand-crafted by human career specialists adhering to international recruitment guidelines:
              </p>
              <ul className="space-y-2 pl-4 list-disc text-slate-600">
                <li>
                  <strong className="text-dark-950">ATS Compliance:</strong> Tested across major parser engines to eliminate layout errors, tables, and inaccessible graphics.
                </li>
                <li>
                  <strong className="text-dark-950">Dual Format Delivery:</strong> Fully editable Microsoft Word document (.docx) + high-resolution print-ready PDF.
                </li>
                <li>
                  <strong className="text-dark-950">Confidentiality Guarantee:</strong> Client data is strictly protected under our zero-disclosure privacy standard.
                </li>
                <li>
                  <strong className="text-dark-950">Confirmed ₹999 Combo Price:</strong> ATS CV + Cover Letter combo is fixed at ₹999 in India.
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Need personal guidance?</span>
              <a
                href={whatsappIndiaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0284F5] hover:bg-blue-600 text-white transition-all text-center inline-flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
