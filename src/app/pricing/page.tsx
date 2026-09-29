'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, HelpCircle, FileText, Globe, Users, Briefcase } from 'lucide-react';

type Currency = 'INR' | 'AED' | 'USD';

interface PriceItem {
  id: string;
  name: string;
  category: 'cv' | 'profile';
  tag?: string;
  popular?: boolean;
  prices: {
    INR: string;
    AED: string;
    USD: string;
  };
  delivery: string;
  description: string;
  features: string[];
  ctaUrl: string;
}

const cvPackages: PriceItem[] = [
  {
    id: 'normal-cv',
    name: 'Normal Professional CV',
    category: 'cv',
    tag: 'STANDARD ENTRY',
    prices: {
      INR: '₹499',
      AED: 'AED 20',
      USD: '$6',
    },
    delivery: 'Within 24 Hours',
    description: 'Clean visual resume designed for direct hiring manager review, walk-in interviews, and local corporate applications.',
    features: [
      'Clean professional typography & layout',
      'Option for passport-size photo insertion',
      'Editable Word (.docx) & High-Resolution PDF',
      'Optimized section hierarchy & contact details',
      '1 free round of revision adjustments',
    ],
    ctaUrl: 'https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20the%20Normal%20Professional%20CV%20(499%20INR%20/%2020%20AED).',
  },
  {
    id: 'ats-cv',
    name: 'ATS-Friendly CV',
    category: 'cv',
    tag: 'MOST POPULAR',
    popular: true,
    prices: {
      INR: '₹599',
      AED: 'AED 25',
      USD: '$7',
    },
    delivery: 'Within 24 Hours',
    description: 'Algorithm-optimized CV engineered to pass automated applicant tracking systems (Workday, Taleo, Greenhouse, Naukri Gulf).',
    features: [
      'Full ATS keyword density optimization',
      'International GCC / India / Europe standard format',
      'Industry-specific competencies & achievement bulleting',
      'Clean parseable single/double column structure',
      'Editable Word (.docx) & High-Res PDF formats',
      'Free revision support until satisfied',
    ],
    ctaUrl: 'https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20the%20ATS-Friendly%20CV%20(599%20INR%20/%2025%20AED).',
  },
  {
    id: 'ats-cv-cover',
    name: 'ATS-Friendly CV + Cover Letter',
    category: 'cv',
    tag: 'BEST VALUE',
    prices: {
      INR: '₹999',
      AED: 'AED 40',
      USD: '$11',
    },
    delivery: 'Within 24-48 Hours',
    description: 'The complete executive application combination. Maximizes recruiter interest with a targeted, persuasive cover letter.',
    features: [
      'Complete ATS-Optimized Professional Resume',
      'Custom tailored corporate Cover Letter',
      'Editable template adaptable for multiple applications',
      'Direct Gulf & international recruiter alignment',
      'Editable Word (.docx) & High-Res PDF formats',
      'Priority delivery & revision guarantee',
    ],
    ctaUrl: 'https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20the%20ATS-Friendly%20CV%20+%20Cover%20Letter%20(999%20INR%20/%2040%20AED).',
  },
];

const profileServices: PriceItem[] = [
  {
    id: 'indeed-opt',
    name: 'Indeed Profile Optimization',
    category: 'profile',
    tag: 'SEARCH RANKING',
    prices: {
      INR: '₹499',
      AED: 'AED 20',
      USD: '$6',
    },
    delivery: '1-2 Working Days',
    description: 'Complete overhaul of your Indeed account to appear in employer searches for your target job title and location.',
    features: [
      'Target job title & location keyword tuning',
      'Work experience achievement re-writing',
      'Assessment tests alignment guidance',
      'Indeed resume upload & formatting check',
      'Recruiter visibility setting verification',
    ],
    ctaUrl: 'https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20Indeed%20Profile%20Optimization%20(499%20INR%20/%2020%20AED).',
  },
  {
    id: 'naukri-opt',
    name: 'Naukri Gulf Profile Optimization',
    category: 'profile',
    tag: 'GULF SPECIALIZED',
    popular: true,
    prices: {
      INR: '₹799',
      AED: 'AED 35',
      USD: '$9',
    },
    delivery: '1-2 Working Days',
    description: 'Designed specifically for the UAE, Saudi Arabia, and Qatar markets to ensure recruiters discover your profile first.',
    features: [
      'Naukri Gulf algorithm search ranking optimization',
      'Key skills & functional area categorization',
      'UAE / GCC visa status & location prominence',
      'Recruiter search appearance boost strategy',
      'Reviewed by certified UAE HR specialists',
    ],
    ctaUrl: 'https://wa.me/971562528518?text=Hello%20ILM-ON,%20I%20want%20to%20order%20Naukri%20Gulf%20Profile%20Optimization%20(799%20INR%20/%2035%20AED).',
  },
  {
    id: 'linkedin-opt',
    name: 'LinkedIn Profile Optimization',
    category: 'profile',
    tag: 'GLOBAL REACH',
    prices: {
      INR: '₹970',
      AED: 'AED 40',
      USD: '$11',
    },
    delivery: '2-3 Working Days',
    description: 'Transform your LinkedIn into a high-converting inbound opportunity magnet for executive headhunters and recruiters worldwide.',
    features: [
      'Magnetic headline crafted for recruiter search algorithms',
      'Engaging first-person "About" narrative & brand story',
      'Experience section re-written with quantified impact',
      'Top 50 skills matrix for algorithmic matching',
      'Banner & featured section guidance',
    ],
    ctaUrl: 'https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20LinkedIn%20Profile%20Optimization%20(970%20INR%20/%2040%20AED).',
  },
];

const faqs = [
  {
    q: 'Why are ILM-ON prices so competitive compared to other agencies?',
    a: 'We believe professional career growth should be accessible to all genuine job seekers. Founded with the mission "Switch On Your Potential", we maintain lean, certified in-house teams in Kerala and Dubai to deliver international-standard quality without agency markups.',
  },
  {
    q: 'How fast will I receive my finished CV?',
    a: 'Normal Professional and ATS-Friendly CVs are delivered within 24 hours. Profile optimizations typically take 1 to 2 working days because they involve meticulous keyword indexing.',
  },
  {
    q: 'What file formats are provided?',
    a: 'You receive both an editable Microsoft Word document (.docx) so you can make future personal updates, and a pristine, high-resolution PDF formatted for online upload and printing.',
  },
  {
    q: 'How does the Recruitment fee model work?',
    a: 'For candidates, submitting your CV and receiving interview coordination is 100% free with zero upfront charges. Our consultancy fee is 20% of your first month salary, payable ONLY after you are selected, join the company, and receive your first paycheck.',
  },
  {
    q: 'Can I pay in AED or USD instead of INR?',
    a: 'Yes. We accept direct UAE bank transfers, UPI, Google Pay, and international cards. Simply choose your currency and message our WhatsApp desk.',
  },
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [activeTab, setActiveTab] = useState<'career' | 'recruitment' | 'marketing'>('career');

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-950 tracking-tight">
            Clear, Direct Pricing. <br />
            <span className="text-vivid-blue">Zero Hidden Charges.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Choose verified international services with full multi-currency transparency across India, UAE, and global markets.
          </p>

          {/* Currency Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white border border-surface-border shadow-sm">
            <span className="text-xs font-bold text-slate-500 px-3">Currency:</span>
            {(['INR', 'AED', 'USD'] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  currency === curr
                    ? 'bg-dark-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-dark-950'
                }`}
              >
                {curr === 'INR' ? '₹ INR' : curr === 'AED' ? 'AED (د.إ)' : '$ USD'}
              </button>
            ))}
          </div>

          {/* Division Selector Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('career')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'career'
                  ? 'bg-vivid-blue text-white shadow-md'
                  : 'bg-white text-slate-700 border border-surface-border hover:border-slate-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Career Services & Profiles</span>
            </button>
            <button
              onClick={() => setActiveTab('recruitment')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'recruitment'
                  ? 'bg-vivid-blue text-white shadow-md'
                  : 'bg-white text-slate-700 border border-surface-border hover:border-slate-300'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Recruitment Solutions</span>
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'marketing'
                  ? 'bg-vivid-blue text-white shadow-md'
                  : 'bg-white text-slate-700 border border-surface-border hover:border-slate-300'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Digital Marketing Plans</span>
            </button>
          </div>
        </div>
      </section>

      {/* Career Services Tab */}
      {activeTab === 'career' && (
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* 1. CV Writing Packages */}
            <div>
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
                  RESUME CREATION PACKAGES
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-950 mt-1">
                  Professional CV & Cover Letter Services
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Fast turnaround with editable Word doc and high-resolution PDF included.
                </p>
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
                        Recommended
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
                          <span className="text-xs font-semibold text-slate-400">
                            / single profile
                          </span>
                        </div>
                        <div className="text-xs text-teal-accent font-semibold mt-1">
                          Delivery: {pkg.delivery}
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

            {/* 2. Profile Optimization Services */}
            <div className="pt-8 border-t border-surface-border">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-accent">
                  ALGORITHM REPUTATION MANAGEMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-950 mt-1">
                  Online Profile Optimization Services
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Maximize recruiter search appearances on top regional and global employment platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {profileServices.map((svc) => (
                  <div
                    key={svc.id}
                    className={`relative rounded-2xl bg-white border p-7 flex flex-col justify-between transition-all duration-200 shadow-card ${
                      svc.popular
                        ? 'border-teal-accent ring-2 ring-teal-accent/20 -translate-y-1'
                        : 'border-surface-border hover:border-slate-300'
                    }`}
                  >
                    {svc.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-teal-accent text-white shadow-sm">
                        Gulf Essential
                      </div>
                    )}

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-teal-accent mb-1">
                        {svc.tag}
                      </div>
                      <h3 className="text-xl font-bold text-dark-950 mb-2">{svc.name}</h3>
                      <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                        {svc.description}
                      </p>

                      <div className="mb-6 pb-6 border-b border-surface-border">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-extrabold text-dark-950">
                            {svc.prices[currency]}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">
                            / single profile
                          </span>
                        </div>
                        <div className="text-xs text-teal-accent font-semibold mt-1">
                          Delivery: {svc.delivery}
                        </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        {svc.features.map((f, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={svc.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-xl text-center text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        svc.popular
                          ? 'bg-teal-accent hover:bg-teal-accent/90 text-white shadow-md'
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
          </div>
        </section>
      )}

      {/* Recruitment Tab */}
      {activeTab === 'recruitment' && (
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Candidate Policy Box */}
            <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-card">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-light text-teal-dark border border-teal-accent/20 mb-3">
                    FOR JOB SEEKERS & CANDIDATES
                  </span>
                  <h3 className="text-2xl font-extrabold text-dark-950">Zero Upfront Fee Candidate Model</h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
                    Submitting your CV to the ILM-ON talent pool is completely free. We do not charge advance registration, documentation, or processing fees.
                  </p>
                  <div className="mt-4 p-4 rounded-xl bg-surface-light border border-surface-border text-xs text-slate-700 leading-relaxed">
                    <strong className="text-dark-950">Official Policy: </strong>
                    Our consultancy fee is <strong>20% of your first month salary</strong>, payable strictly <strong>AFTER</strong> you are successfully selected, complete joining formalities, and receive your first month salary from your employer.
                  </div>
                </div>

                <a
                  href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Recruitment,%20I%20would%20like%20to%20submit%20my%20CV%20for%20vacancies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-teal-accent hover:bg-teal-accent/90 text-white font-bold text-xs shrink-0 transition-all shadow-md text-center"
                >
                  Submit CV for Free
                </a>
              </div>
            </div>

            {/* Employer Staffing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-card flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-vivid-blue mb-1 block">
                    FOR CORPORATE EMPLOYERS
                  </span>
                  <h3 className="text-xl font-bold text-dark-950 mb-2">Contingency Recruitment Support</h3>
                  <p className="text-xs text-slate-600 mb-6">
                    Structured talent shortlisting for commercial, technical, and executive roles.
                  </p>
                  <div className="text-2xl font-extrabold text-dark-950 mb-4">
                    Success-Fee Basis
                  </div>
                  <div className="space-y-3 mb-8 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>CV screening & initial video vetting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Zero upfront fee until candidate successfully joins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Replacement guarantee period per corporate agreement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>UAE & India labor compliance alignment</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/971562528518?text=Hello%20ILM-ON%20Dubai%20Desk,%20we%20want%20to%20discuss%20corporate%20staffing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white font-bold text-xs text-center transition-colors block"
                >
                  Consult with Dubai Desk
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-card flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-accent mb-1 block">
                    HR ADVISORY
                  </span>
                  <h3 className="text-xl font-bold text-dark-950 mb-2">Talent Sourcing & Screening Support</h3>
                  <p className="text-xs text-slate-600 mb-6">
                    Hands-on assistance in defining position descriptions, salary benchmarks, and interview coordination.
                  </p>
                  <div className="text-2xl font-extrabold text-dark-950 mb-4">
                    Custom Mandate
                  </div>
                  <div className="space-y-3 mb-8 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Dedicated recruiter point of contact</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>GCC market salary compensation benchmarking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Interview scheduling and feedback loops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Transparent candidate background checks</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20we%20would%20like%20to%20discuss%20talent%20sourcing%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white font-bold text-xs text-center transition-colors block"
                >
                  Discuss Hiring Requirements
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Marketing Tab */}
      {activeTab === 'marketing' && (
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Digital Setup */}
            <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-vivid-blue mb-1 block">
                  BRAND FOUNDATION
                </span>
                <h3 className="text-xl font-bold text-dark-950 mb-2">Digital Setup & Presence</h3>
                <p className="text-xs text-slate-600 mb-6">
                  Complete setup of foundational business digital assets to start attracting and converting customers.
                </p>
                <div className="text-2xl font-extrabold text-dark-950 mb-4">
                  Custom Quotation
                </div>
                <div className="space-y-3 mb-8 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Google Business Profile creation & verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Social media channel setup & visual branding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Meta Business Manager & ad account architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>High-converting landing page consultation</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20discuss%20Digital%20Setup%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white font-bold text-xs text-center transition-colors block"
              >
                Inquire on Digital Setup
              </a>
            </div>

            {/* 2. Personal Portfolio Website (CHANGE 04) */}
            <div className="relative p-8 rounded-2xl bg-white border border-vivid-blue ring-2 ring-vivid-blue/20 shadow-card flex flex-col justify-between -translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-vivid-blue text-white shadow-sm">
                Specialized Service
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-vivid-blue mb-1 block">
                  PERSONAL BRANDING
                </span>
                <h3 className="text-xl font-bold text-dark-950 mb-2">Personal Portfolio Website</h3>
                <p className="text-xs text-slate-600 mb-6">
                  Build a professional online presence that showcases your experience, skills, projects and achievements.
                </p>
                <div className="mb-4">
                  <div className="text-2xl font-extrabold text-dark-950">
                    Custom Quote
                  </div>
                  <div className="text-xs text-teal-accent font-semibold mt-1">
                    Contact us for pricing
                  </div>
                </div>
                <div className="space-y-3 mb-8 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Personal branding & About Me profile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Skills, work experience & projects showcase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Resume / CV showcase with download link</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Direct contact & WhatsApp integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Responsive mobile design & custom domain setup</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20request%20a%20pricing%20quote%20for%20a%20Personal%20Portfolio%20Website."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-vivid-blue hover:bg-vivid-blue/90 text-white font-bold text-xs text-center transition-colors block shadow-md"
              >
                Inquire on WhatsApp
              </a>
            </div>

            {/* 3. Meta Ads Retainer */}
            <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-accent mb-1 block">
                  PAID ACQUISITION
                </span>
                <h3 className="text-xl font-bold text-dark-950 mb-2">Meta Ads & Paid Campaigns</h3>
                <p className="text-xs text-slate-600 mb-6">
                  Targeted lead generation and brand campaigns on Facebook and Instagram with transparent reporting.
                </p>
                <div className="text-2xl font-extrabold text-dark-950 mb-4">
                  Monthly Retainer
                </div>
                <div className="space-y-3 mb-8 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Audience targeting & campaign copywriting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Creative graphic and video ad formats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Continuous budget optimization & A/B testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span>Clear weekly lead metrics & spend reporting</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20discuss%20Meta%20Ads%20Management."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white font-bold text-xs text-center transition-colors block"
              >
                Request Ad Proposal
              </a>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-t border-surface-border mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-dark-950 mt-1">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">Everything you need to know about our pricing and execution.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface-light border border-surface-border">
                <h3 className="text-sm font-bold text-dark-950 mb-2">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
