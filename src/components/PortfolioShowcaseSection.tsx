'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FileText,
  Eye,
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

interface PortfolioSample {
  id: string;
  title: string;
  category:
    | 'ats'
    | 'designed'
    | 'europass'
    | 'canadian'
    | 'international'
    | 'cover-letter'
    | 'linkedin'
    | 'naukri'
    | 'indeed';
  image: string;
  tag: string;
  description: string;
  features: string[];
}

const SAMPLES: PortfolioSample[] = [
  {
    id: 'ats-1',
    title: 'ATS-Friendly Executive Format',
    category: 'ats',
    image: '/assets/career-services/ats-sample-faizal.jpeg',
    tag: 'ATS SINGLE-COLUMN',
    description: 'Clean single-column structure formatted for seamless applicant tracking software parsing with role-targeted keyword density.',
    features: ['Parser-safe typography', 'Action verb bullet points', 'Quantifiable impact metrics'],
  },
  {
    id: 'ats-2',
    title: 'Technical Professional ATS CV',
    category: 'ats',
    image: '/assets/career-services/ats-sample-estelle.jpeg',
    tag: 'TECHNICAL RESUME',
    description: 'Structured layout emphasizing technical core competencies, project scopes, and engineering certifications.',
    features: ['Technical skills taxonomy', 'Chronological career progression', 'ATS-compliant headings'],
  },
  {
    id: 'designed-1',
    title: 'Professional Designed Modern CV',
    category: 'designed',
    image: '/assets/ILM - ON MODERN CV SAMPLES - NEW.png',
    tag: 'CONTEMPORARY EXECUTIVE',
    description: 'Aesthetic executive resume format engineered for direct human review, executive recruiters, and networking submissions.',
    features: ['Dual-tone visual accent', 'Executive leadership summary', 'Core strengths quadrant'],
  },
  {
    id: 'europass-1',
    title: 'Europass EU-Standard CV (Page 1)',
    category: 'europass',
    image: '/assets/cv-europass-1.png',
    tag: 'EUROPEAN UNION STANDARD',
    description: 'Aligned with European Commission formatting standards for applications across Germany, Ireland, Malta, and Poland.',
    features: ['CEFR language proficiency scale', 'Digital skills matrix', 'EU employer recognized'],
  },
  {
    id: 'europass-2',
    title: 'Europass EU-Standard CV (Page 2)',
    category: 'europass',
    image: '/assets/cv-europass-2.png',
    tag: 'EU RECOGNIZED',
    description: 'Comprehensive multi-page Europass layout with international educational equivalence and EU mobility compliance.',
    features: ['Formal EU typography', 'Institutional credentials', 'EU visa documentation ready'],
  },
  {
    id: 'canadian-1',
    title: 'Canadian Anti-Bias Standard Format',
    category: 'canadian',
    image: '/assets/cv-canadian-1.jpg',
    tag: 'NORTH AMERICAN STANDARD',
    description: 'Photo-free, reverse-chronological North American format adhering strictly to Canadian hiring conventions and anti-bias protocols.',
    features: ['Anti-bias photo-free structure', 'Reverse chronological layout', 'Core competency highlights'],
  },
  {
    id: 'canadian-2',
    title: 'Canadian Corporate Career Credential',
    category: 'canadian',
    image: '/assets/cv-canadian-2.jpg',
    tag: 'CANADIAN IMMIGRATION',
    description: 'Engineered for Canadian immigration Express Entry point scoring and corporate recruiters in Toronto, Vancouver, and Calgary.',
    features: ['Immigration point alignment', 'Clean margin spacing', 'Quantified Canadian achievements'],
  },
  {
    id: 'international-1',
    title: 'International Cross-Border Executive Resume',
    category: 'international',
    image: '/assets/career-services/ats-sample-faizal.jpeg',
    tag: 'GLOBAL EXECUTIVE',
    description: 'Cross-border resume designed for multinational roles across Singapore, UK, Australia, and GCC regions.',
    features: ['Cross-border regulatory alignment', 'Global currency metrics', 'Multi-region compliance'],
  },
  {
    id: 'cover-1',
    title: 'Tailored Strategic Cover Letter',
    category: 'cover-letter',
    image: '/assets/poster-cv-sept2026.png',
    tag: 'ROLE TAILORED',
    description: 'Persuasive executive cover letter crafted to address prospective employer pain points and highlight immediate organizational value.',
    features: ['Custom letterhead matching CV', 'Compelling storytelling hook', 'Interview request closing call'],
  },
  {
    id: 'linkedin-1',
    title: 'LinkedIn Executive Profile Optimization',
    category: 'linkedin',
    image: '/assets/career-services/linkedin-profile-optimization.jpeg',
    tag: 'RECRUITER MAGNET',
    description: 'Complete profile revamp: strategic headline with high-search keywords, first-person narrative About section, and skill taxonomy alignment.',
    features: ['Search algorithm keyword alignment', 'Top 50 skills taxonomy', 'Executive personal branding'],
  },
  {
    id: 'naukri-1',
    title: 'Naukri Gulf Profile Optimization',
    category: 'naukri',
    image: '/assets/career-services/naukri-profile-optimization.jpeg',
    tag: 'GCC & DUBAI SPECIALIZED',
    description: 'Engineered specifically for the UAE and GCC job boards by experienced Gulf HR specialists to maximize search visibility.',
    features: ['Prominent GCC visa & notice period setup', 'Gulf industry keyword engineering', 'Dubai desk HR reviewed'],
  },
  {
    id: 'indeed-1',
    title: 'Indeed Profile Optimization Showcase',
    category: 'indeed',
    image: '/assets/career-services/indeed-profile-optimization.jpeg',
    tag: 'HIGH-VOLUME HIRING',
    description: 'Structured for seamless resume parsing on Indeed UAE, GCC, and International boards so hiring managers spot qualifications fast.',
    features: ['Direct parser compliance', 'Standardized job titles', 'Assessment readiness'],
  },
];

type CategoryFilter =
  | 'all'
  | 'ats'
  | 'designed'
  | 'europass'
  | 'canadian'
  | 'international'
  | 'cover-letter'
  | 'linkedin'
  | 'naukri'
  | 'indeed';

export default function PortfolioShowcaseSection() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>('all');
  const [selectedSample, setSelectedSample] = useState<PortfolioSample | null>(null);

  const filtered = SAMPLES.filter((s) => {
    if (activeTab === 'all') return true;
    return s.category === activeTab;
  });

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-white border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80 mb-3 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>AUTHENTIC CLIENT WORK SAMPLES • ZERO EXPOSED PII</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060814] tracking-tight leading-tight">
            See the Difference. <br className="hidden sm:inline" />
            <span className="text-[#0284F5]">Explore Our Work.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Browse genuine work samples across ATS, Designed Modern, Europass, Canadian, Cover Letter, LinkedIn, and Gulf job portal formats. All client private details are rigorously protected.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-50 border border-surface-border shadow-sm max-w-4xl mx-auto">
            {[
              { id: 'all', label: `All (${SAMPLES.length})` },
              { id: 'ats', label: 'ATS-Friendly CV' },
              { id: 'designed', label: 'Designed Modern CV' },
              { id: 'europass', label: 'Europass CV' },
              { id: 'canadian', label: 'Canadian CV' },
              { id: 'international', label: 'International CV' },
              { id: 'cover-letter', label: 'Cover Letters' },
              { id: 'linkedin', label: 'LinkedIn' },
              { id: 'naukri', label: 'Naukri Gulf' },
              { id: 'indeed', label: 'Indeed' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CategoryFilter)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-dark-950 text-white shadow-xs'
                    : 'text-slate-600 hover:text-dark-950 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((sample) => (
            <div
              key={sample.id}
              className="rounded-2xl border border-surface-border bg-white overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
            >
              {/* Image Preview Window */}
              <div
                className="relative aspect-[16/10] sm:aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer"
                onClick={() => setSelectedSample(sample)}
              >
                <Image
                  src={sample.image}
                  alt={`${sample.title} - ILM-ON Digital Solutions Work Sample`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 text-dark-950 text-xs font-bold backdrop-blur-sm shadow-md">
                    <ZoomIn className="w-3.5 h-3.5 text-vivid-blue" />
                    <span>Click to Zoom</span>
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-dark-950/80 text-white backdrop-blur-sm shadow-xs">
                    {sample.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-dark-950 leading-snug mb-2">
                    {sample.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {sample.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {sample.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedSample(sample)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-vivid-blue hover:text-blue-700 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Sample</span>
                  </button>

                  <WhatsAppCTA
                    desk="both"
                    message={`Hello ILM-ON, I would like to order a format like: ${sample.title}`}
                    label="Order Similar"
                    variant="secondary"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-surface-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-vivid-blue/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-vivid-blue" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-dark-950">Looking for a specific industry or country format?</h4>
              <p className="text-xs text-slate-600">
                Our consultants have authored CVs for 30+ industries across UAE, Saudi Arabia, UK, Canada, and India.
              </p>
            </div>
          </div>
          <Link
            href="/cv-templates"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-dark-950 hover:bg-slate-800 text-white transition-all shrink-0 inline-flex items-center gap-1.5 shadow-sm"
          >
            <span>Browse 35+ CV Templates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedSample && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedSample(null)}
        >
          <div
            className="relative bg-white text-dark-950 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-vivid-blue">
                  {selectedSample.tag}
                </span>
                <h3 className="text-xl font-bold text-dark-950">{selectedSample.title}</h3>
              </div>
              <button
                onClick={() => setSelectedSample(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Close Sample Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 mb-5">
              <Image
                src={selectedSample.image}
                alt={selectedSample.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain object-center"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
              {selectedSample.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
              <div className="text-xs font-bold text-dark-950 uppercase tracking-wider mb-2">
                Format Standards & Inclusions:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {selectedSample.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500">
                Delivered in Editable Word (.docx) + Print-Ready PDF
              </span>
              <WhatsAppCTA
                desk="both"
                message={`Hello ILM-ON, I would like to order a format like: ${selectedSample.title}`}
                label="Order This Format"
                variant="primary"
                size="md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
