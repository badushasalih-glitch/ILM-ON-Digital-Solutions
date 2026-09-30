'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  FileText,
  Sparkles,
  ExternalLink,
  Search,
  Check,
  Award,
} from 'lucide-react';

type Currency = 'INR' | 'AED' | 'USD';

const cvPackages = [
  {
    id: 'normal-cv',
    name: 'Normal Professional CV',
    tag: 'STANDARD ENTRY',
    prices: { INR: '₹499', AED: 'AED 20', USD: '$6' },
    delivery: 'Within 24 Hours',
    description: 'Clean visual resume designed for direct hiring manager review, walk-in interviews, and local corporate applications.',
    features: [
      'Clean professional layout & typography',
      'Optional passport-size photo insertion for UAE/India formats',
      'Editable Word (.docx) & High-Resolution PDF included',
      'Logical section hierarchy highlighting core experience',
      '1 free round of revision adjustments',
    ],
    ctaUrl: 'https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20the%20Normal%20Professional%20CV%20(499%20INR%20/%2020%20AED).',
  },
  {
    id: 'ats-cv',
    name: 'ATS-Friendly CV',
    tag: 'MOST POPULAR',
    popular: true,
    prices: { INR: '₹599', AED: 'AED 25', USD: '$7' },
    delivery: 'Within 24 Hours (1 Working Day)',
    description: 'Algorithm-optimized CV engineered to pass automated applicant tracking systems (Workday, Taleo, Greenhouse, Naukri Gulf).',
    features: [
      'Full ATS keyword density optimization for target industry',
      'Compliant formats: GCC / UAE, Canada, New Zealand, Europe Europass, India',
      'Quantified achievement bulleting (CAR format: Context-Action-Result)',
      'Clean single or dual-column parseable layout',
      'Editable Word (.docx) & High-Res PDF formats',
      'Free revision support until satisfied',
    ],
    ctaUrl: 'https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20the%20ATS-Friendly%20CV%20(599%20INR%20/%2025%20AED).',
  },
  {
    id: 'ats-cv-cover',
    name: 'ATS-Friendly CV + Cover Letter',
    tag: 'BEST VALUE',
    prices: { INR: '₹999', AED: 'AED 40', USD: '$11' },
    delivery: 'Within 24-48 Hours',
    description: 'The complete executive application combination. Maximizes recruiter interest with a targeted, persuasive corporate cover letter.',
    features: [
      'Complete ATS-Optimized Professional Resume',
      'Custom tailored corporate Cover Letter matching company tone',
      'Editable template adaptable for multiple applications',
      'Direct Gulf & international recruiter alignment',
      'Editable Word (.docx) & High-Res PDF formats',
      'Priority delivery & revision guarantee',
    ],
    ctaUrl: 'https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20the%20ATS-Friendly%20CV%20+%20Cover%20Letter%20(999%20INR%20/%2040%20AED).',
  },
];

const profileServices = [
  {
    id: 'indeed-opt',
    name: 'Indeed Profile Optimization',
    prices: { INR: '₹499', AED: 'AED 20', USD: '$6' },
    image: '/assets/career-services/indeed-profile-optimization.jpeg',
    description: 'Complete overhaul of your Indeed account to rank high in employer searches for your target job title.',
    features: [
      'Target job title & location keyword tuning',
      'Work experience achievement re-writing',
      'Indeed resume upload & formatting verification',
      'Recruiter visibility setting optimization',
    ],
    ctaUrl: 'https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20Indeed%20Profile%20Optimization%20(499%20INR%20/%2020%20AED).',
  },
  {
    id: 'naukri-opt',
    name: 'Naukri Gulf Profile Optimization',
    popular: true,
    prices: { INR: '₹799', AED: 'AED 35', USD: '$9' },
    image: '/assets/career-services/naukri-profile-optimization.jpeg',
    description: 'Essential for the UAE, Saudi Arabia, and Qatar markets to ensure Gulf recruiters discover your profile first.',
    features: [
      'Naukri Gulf algorithm search ranking optimization',
      'Key skills & functional area categorization',
      'UAE / GCC visa status & location prominence',
      'Reviewed by certified UAE HR specialists',
    ],
    ctaUrl: 'https://wa.me/971562528518?text=Hello%20ILM-ON,%20I%20want%20Naukri%20Gulf%20Profile%20Optimization%20(799%20INR%20/%2035%20AED).',
  },
  {
    id: 'linkedin-opt',
    name: 'LinkedIn Profile Optimization',
    prices: { INR: '₹970', AED: 'AED 40', USD: '$11' },
    image: '/assets/career-services/linkedin-profile-optimization.jpeg',
    description: 'Transform your LinkedIn into a high-converting inbound opportunity magnet for executive headhunters worldwide.',
    features: [
      'Magnetic headline crafted for recruiter search algorithms',
      'Engaging first-person "About" narrative & brand story',
      'Experience section re-written with quantified impact',
      'Top 50 skills matrix for algorithmic matching',
    ],
    ctaUrl: 'https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20LinkedIn%20Profile%20Optimization%20(970%20INR%20/%2040%20AED).',
  },
];

export default function CareerServicesPage() {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [activeModalSample, setActiveModalSample] = useState<string | null>(null);

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      {/* 1. Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>DIVISION 01 • CAREER ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-950 tracking-tight">
            ATS-Friendly CV Within 24 Hours. <br />
            <span className="text-vivid-blue">Engineered for International Shortlists.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stop losing job opportunities to automated parsing bots. We construct precision-engineered ATS resumes and LinkedIn profiles tailored for Canada, New Zealand, Europe, the GCC, and India.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20get%20my%20CV%20rebuilt%20today."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold bg-vivid-blue hover:bg-vivid-blue/90 text-white shadow-md transition-all"
            >
              <span>Get Your CV Within 24 Hours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold bg-white text-dark-950 border border-surface-border hover:bg-slate-50 transition-all shadow-sm"
            >
              <span>View Packages & Pricing</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Official Visual Posters Showcase (Authentic Master Assets) */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Poster 1: ATS Friendly CV Poster */}
            <div
              onClick={() => setActiveModalSample('/assets/career-services/ats-friendly-cv-poster.jpeg')}
              className="cursor-pointer group relative rounded-2xl overflow-hidden border border-surface-border bg-white shadow-card hover:shadow-elevated transition-all"
            >
              <div className="relative h-[480px] w-full bg-slate-50">
                <Image
                  src="/assets/career-services/ats-friendly-cv-poster.jpeg"
                  alt="ILM-ON Official ATS Friendly CV Poster - ₹599 / AED 25"
                  fill
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white border-t border-surface-border flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-dark-950">Official ATS CV Package</div>
                  <div className="text-[11px] text-teal-accent font-semibold">₹599 | AED 25 • 1 Working Day Delivery</div>
                </div>
                <span className="text-xs text-vivid-blue font-bold flex items-center gap-1 group-hover:underline">
                  Click to View Full Size
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Poster 2: Complete Career Branding Poster */}
            <div
              onClick={() => setActiveModalSample('/assets/career-services/complete-career-branding-poster.png')}
              className="cursor-pointer group relative rounded-2xl overflow-hidden border border-surface-border bg-white shadow-card hover:shadow-elevated transition-all"
            >
              <div className="relative h-[480px] w-full bg-slate-50">
                <Image
                  src="/assets/career-services/complete-career-branding-poster.png"
                  alt="ILM-ON Complete Career Branding Poster"
                  fill
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white border-t border-surface-border flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-dark-950">Complete Career Branding Suite</div>
                  <div className="text-[11px] text-teal-accent font-semibold">CV + Cover Letter + Profile Optimization</div>
                </div>
                <span className="text-xs text-vivid-blue font-bold flex items-center gap-1 group-hover:underline">
                  Click to View Full Size
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Flags Banner & Regional Compliance */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-surface-border bg-white p-6 sm:p-10 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative aspect-[3/4] max-w-sm sm:max-w-md mx-auto w-full rounded-2xl overflow-hidden bg-slate-100 border border-surface-border shadow-md">
                <Image
                  src="/assets/career-services/ats-global-flags-banner.jpeg"
                  alt="ATS Friendly CV Formats - Canada, New Zealand, Europass, GCC, India"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20">
                  <Globe className="w-3.5 h-3.5" />
                  <span>INTERNATIONAL COMPLIANCE SUITE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-950">
                  Tailored to Country-Specific Hiring Standards
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Different jurisdictions evaluate candidates with distinct criteria. A European Europass differs completely from a Canadian Resume or a Gulf executive dossier:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border text-xs">
                    <strong className="text-vivid-blue block mb-0.5">GCC & UAE Market:</strong>
                    Visa status, notice period, Gulf experience prominence & Naukri Gulf indexing.
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border text-xs">
                    <strong className="text-vivid-blue block mb-0.5">Canada & North America:</strong>
                    Strict anti-discrimination compliance (no photo, no marital status), accomplishment metrics.
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border text-xs">
                    <strong className="text-vivid-blue block mb-0.5">Europe & UK (Europass):</strong>
                    Standardized competency frameworks, language proficiency levels (CEFR), mobility readiness.
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border text-xs">
                    <strong className="text-vivid-blue block mb-0.5">Australia & New Zealand:</strong>
                    In-depth functional responsibility breakdowns and verified local reference structure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Educational Guide: What is an ATS-Friendly CV? */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white border-y border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal-dark border border-teal-accent/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ALGORITHMIC SHORTLISTING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 tracking-tight leading-tight">
                What Exactly is an ATS-Friendly CV?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Over 75% of resumes are discarded by Applicant Tracking Systems (Workday, Taleo, Greenhouse, Lever, SAP SuccessFactors) before a human recruiter ever sees them.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-surface-border">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-dark-950">Machine-Readable Formatting</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Zero unparseable tables, graphics, text boxes, or ornate styling that breaks automated optical character recognition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-surface-border">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-dark-950">Targeted Keyword Engineering</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Exact hard and soft skill phrasing mapped directly to industry job descriptions for maximum match percentage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-surface-border">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-dark-950">High Scannability for Human Eyes</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Once past the bots, executive recruiters take just 6 seconds to scan your career trajectory and quantifiable achievements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                onClick={() => setActiveModalSample('/assets/career-services/what-is-ats-cv-guide.jpeg')}
                className="cursor-pointer group relative rounded-2xl overflow-hidden border border-surface-border bg-slate-50 shadow-card p-4 hover:shadow-elevated transition-all"
              >
                <div className="relative h-[480px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/assets/career-services/what-is-ats-cv-guide.jpeg"
                    alt="What is an ATS-Friendly CV infographic guide"
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="mt-2 text-center text-xs text-vivid-blue font-bold group-hover:underline">
                  Click to inspect full infographic guide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Live Resume Samples Gallery */}
      <section id="samples" className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              LIVE CV GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              Real ILM-ON ATS Formats
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Click to view high-resolution samples of actual resumes engineered for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sample 1: Mohamed Faizal Villan */}
            <div
              onClick={() => setActiveModalSample('/assets/career-services/ats-sample-faizal.jpeg')}
              className="cursor-pointer group rounded-2xl bg-white border border-surface-border p-4 transition-all shadow-card hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="relative h-96 w-full rounded-xl overflow-hidden bg-slate-50">
                <Image
                  src="/assets/career-services/ats-sample-faizal.jpeg"
                  alt="Mohamed Faizal Villan ATS CV Model"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-dark-950 text-base">Mohamed Faizal Villan</h3>
                <p className="text-xs text-vivid-blue font-medium mt-0.5">Operations & Project Specialist Format (GCC Standard)</p>
              </div>
            </div>

            {/* Sample 2: Estelle Darcy */}
            <div
              onClick={() => setActiveModalSample('/assets/career-services/ats-sample-estelle.jpeg')}
              className="cursor-pointer group rounded-2xl bg-white border border-surface-border p-4 transition-all shadow-card hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="relative h-96 w-full rounded-xl overflow-hidden bg-slate-50">
                <Image
                  src="/assets/career-services/ats-sample-estelle.jpeg"
                  alt="Estelle Darcy ATS Resume Model"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-dark-950 text-base">Estelle Darcy</h3>
                <p className="text-xs text-vivid-blue font-medium mt-0.5">Corporate & Media Specialist Format (International Standard)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing Packages Section (MANDATORY EXACT PRICING) */}
      <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-y border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              TRANSPARENT VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              CV Creation Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Invest in your career transformation with exact pricing and 1-day delivery.
            </p>

            {/* Currency Toggle */}
            <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-surface-light border border-surface-border">
              {(['INR', 'AED', 'USD'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currency === c ? 'bg-dark-950 text-white shadow-sm' : 'text-slate-600 hover:text-dark-950'
                  }`}
                >
                  {c === 'INR' ? '₹ INR' : c === 'AED' ? 'AED (د.إ)' : '$ USD'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cvPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl bg-white border p-7 flex flex-col justify-between transition-all duration-200 shadow-card ${
                  pkg.popular
                    ? 'border-vivid-blue ring-2 ring-vivid-blue/20 -translate-y-1'
                    : 'border-surface-border hover:border-slate-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-vivid-blue text-white shadow-sm">
                    Recommended Choice
                  </div>
                )}

                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-vivid-blue mb-1">
                    {pkg.tag}
                  </div>
                  <h3 className="text-xl font-bold text-dark-950 mb-2">{pkg.name}</h3>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-surface-border">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-dark-950">
                        {pkg.prices[currency]}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">/ package</span>
                    </div>
                    <div className="text-xs text-teal-accent font-semibold mt-1">
                      Turnaround: {pkg.delivery}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={pkg.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl text-center text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-vivid-blue hover:bg-vivid-blue/90 text-white shadow-md'
                      : 'bg-dark-950 hover:bg-vivid-blue text-white'
                  }`}
                >
                  <span>Order on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Profile Optimization Platform Matrix */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-accent">
              ONLINE REPUTATION MANAGEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              Multi-Platform Profile Optimization
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Transform your digital profiles into magnetizing recruiter magnets across LinkedIn, Naukri Gulf, and Indeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profileServices.map((svc) => (
              <div
                key={svc.id}
                className="rounded-2xl bg-white border border-surface-border overflow-hidden shadow-card flex flex-col justify-between hover:shadow-elevated transition-all"
              >
                <div>
                  <div
                    onClick={() => setActiveModalSample(svc.image)}
                    className="relative aspect-square w-full bg-slate-50 cursor-pointer overflow-hidden group p-2 border-b border-surface-border"
                  >
                    <Image
                      src={svc.image}
                      alt={svc.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-dark-950/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-white text-dark-950 font-bold text-[11px] shadow-md border border-slate-200">
                        View Full Poster
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-dark-950">{svc.name}</h3>
                      <span className="text-sm font-extrabold text-teal-accent">
                        {svc.prices[currency]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      {svc.description}
                    </p>

                    <div className="space-y-2 border-t border-surface-border pt-4">
                      {svc.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-teal-accent shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={svc.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white font-bold text-xs text-center block transition-colors"
                  >
                    Order Optimization
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for enlarged preview */}
      {activeModalSample && (
        <div
          onClick={() => setActiveModalSample(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-2xl p-4 overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between pb-3 border-b border-surface-border">
              <span className="text-xs font-bold text-dark-950">ILM-ON Verified Master Asset</span>
              <button
                onClick={() => setActiveModalSample(null)}
                className="px-3 py-1 rounded-lg bg-surface-light hover:bg-slate-200 text-dark-950 text-xs font-bold transition-colors"
              >
                Close (ESC)
              </button>
            </div>
            <div className="relative h-[78vh] w-full mt-2">
              <Image
                src={activeModalSample}
                alt="Enlarged Asset Preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
