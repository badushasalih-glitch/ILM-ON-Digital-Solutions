'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Eye,
  X,
  Sparkles,
  ArrowRight,
  ZoomIn,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface WorkSample {
  id: string;
  title: string;
  subtitle: string;
  category: 'ats' | 'global';
  categoryLabel: string;
  image: string;
  badge: string;
  badgeStyle: string;
  description: string;
  features: string[];
}

const SAMPLES: WorkSample[] = [
  {
    id: 'ats-gcc-sample',
    title: 'GCC Single-Column ATS Resume',
    subtitle: 'Procurement & Retail Supply Chain',
    category: 'ats',
    categoryLabel: 'ATS & GCC Formats',
    image: '/assets/ILM - ON MODERN CV SAMPLES - NEW.png',
    badge: 'ANONYMIZED SAMPLE',
    badgeStyle: 'bg-blue-50 text-[#0284F5] border-blue-200',
    description:
      'Redacted ILM-ON ATS CV work sample built with single-column hierarchy, categorized skills, and clear chronological experience for Qatar and Gulf roles.',
    features: [
      'Standardized single-column ATS section headings',
      'Contact details masked for portfolio privacy',
      'Clean typography formatted for Word (.docx) & PDF',
    ],
  },
  {
    id: 'canadian-doctor',
    title: 'North American & Canadian Format',
    subtitle: 'Healthcare & Medical Practitioners',
    category: 'global',
    categoryLabel: 'Global & EU Formats',
    image: '/assets/cv-canadian-1.jpg',
    badge: 'NORTH AMERICAN FORMAT',
    badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description:
      'Photo-free reverse-chronological CV structured according to Canadian and North American hiring conventions.',
    features: [
      'Photo-free layout aligned with anti-bias norms',
      'Clinical responsibility & outcome-focused bullets',
      'Illustrative sample contact header for privacy',
    ],
  },
  {
    id: 'nursing-clinical',
    title: 'Structured Two-Column Healthcare CV',
    subtitle: 'Registered Nursing & Clinical Care',
    category: 'ats',
    categoryLabel: 'ATS & GCC Formats',
    image: '/assets/cv-canadian-2.jpg',
    badge: 'CLINICAL FORMAT',
    badgeStyle: 'bg-teal-50 text-teal-800 border-teal-200',
    description:
      'Clean clinical resume highlighting acute care proficiencies, hospital systems experience, and medical certifications.',
    features: [
      'Structured competencies, certifications & education',
      'Cross-regional Gulf & India hospital clarity',
      'Demo contact placeholder used for display',
    ],
  },
  {
    id: 'europass-eu',
    title: 'Europass EU Standard CV',
    subtitle: 'European Union & Engineering',
    category: 'global',
    categoryLabel: 'Global & EU Formats',
    image: '/assets/cv-europass-2.png',
    badge: 'EUROPASS STANDARD',
    badgeStyle: 'bg-sky-50 text-sky-700 border-sky-200',
    description:
      'Structured to European Commission Europass guidelines with standardized CEFR language proficiency grading.',
    features: [
      'CEFR language skills grid (Listening, Reading, Writing)',
      'Digital skills & academic qualification hierarchy',
      'Template placeholder header for client privacy',
    ],
  },
];

type GalleryFilter = 'all' | 'ats' | 'global';

export default function CuratedWorkGallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);

  const filteredSamples = SAMPLES.filter((sample) => {
    if (activeFilter === 'all') return true;
    return sample.category === activeFilter;
  });

  return (
    <section
      id="gallery"
      className="py-20 sm:py-24 bg-white border-t border-surface-border relative scroll-mt-20"
      aria-label="Curated Work Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>DOCUMENT FORMATS &amp; SAMPLES</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Work Gallery &amp;{' '}
            <span className="italic font-normal text-[#0284F5]">Regional Formats.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Inspect anonymized CV layouts and regional document standards formatted for ATS screening across India, the GCC, Europe, and North America.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-surface-light border border-surface-border shadow-xs max-w-lg mx-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-dark-950 hover:bg-white/80'
              }`}
            >
              All Formats
            </button>
            <button
              onClick={() => setActiveFilter('ats')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'ats'
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-dark-950 hover:bg-white/80'
              }`}
            >
              ATS &amp; GCC Formats
            </button>
            <button
              onClick={() => setActiveFilter('global')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'global'
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-dark-950 hover:bg-white/80'
              }`}
            >
              Global &amp; EU Formats
            </button>
          </div>
        </div>

        {/* Balanced 2x2 / 4-Sample Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              className="rounded-3xl border border-surface-border bg-surface-light overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame */}
                <div
                  className="relative w-full aspect-[4/3] bg-white border-b border-surface-border cursor-pointer overflow-hidden"
                  onClick={() => setSelectedSample(sample)}
                >
                  <Image
                    src={sample.image}
                    alt={`${sample.title} - ILM-ON Format Sample`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-3 sm:p-4 transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3.5 py-1.5 rounded-full bg-dark-950/90 text-white text-xs font-bold flex items-center gap-1.5 shadow-md backdrop-blur-xs">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Inspect Sample</span>
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border shadow-2xs backdrop-blur-xs ${sample.badgeStyle}`}
                    >
                      {sample.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="text-[11px] font-bold text-[#0284F5] uppercase tracking-wider mb-1">
                    {sample.subtitle}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] leading-snug mb-2">
                    {sample.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {sample.description}
                  </p>

                  {/* Key Features Checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-200/80">
                    {sample.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Bar */}
              <div className="p-5 sm:p-6 pt-3 border-t border-surface-border bg-white">
                <button
                  onClick={() => setSelectedSample(sample)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0B1B3D] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-600" />
                  <span>Inspect Full Sample</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#0B1B3D] text-white border border-slate-800 shadow-elevated flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Portfolio &amp; Template Library</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Looking for a Specific Industry or Country Format?
            </h3>
            <p className="mt-1 text-xs text-slate-300 leading-relaxed">
              Explore additional resume formats or inspect our regional template styles tailored for Gulf, European, and domestic portals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/portfolio"
              className="px-6 py-3.5 rounded-xl text-xs font-bold bg-[#0284F5] hover:bg-[#0274da] text-white text-center transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>View Work Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/cv-templates"
              className="px-6 py-3.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white text-center border border-white/15 transition-all"
            >
              Browse CV Templates
            </Link>
          </div>
        </div>

        {/* Privacy Footnote */}
        <div className="mt-4 text-center text-[11px] text-slate-500">
          Client personal contact details are masked or replaced with illustrative placeholders across public sample previews to protect privacy.
        </div>
      </div>

      {/* Lightbox Modal for Inspection */}
      {selectedSample && (
        <div
          className="fixed inset-0 z-50 bg-dark-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedSample(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedSample.title}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-surface-border flex items-center justify-between bg-surface-light">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-[#0284F5] tracking-wider">
                  {selectedSample.badge} • {selectedSample.categoryLabel}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D]">
                  {selectedSample.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSample(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[440px] bg-slate-100 p-4 overflow-auto flex items-center justify-center">
              <div className="relative w-full h-[400px] sm:h-[500px]">
                <Image
                  src={selectedSample.image}
                  alt={selectedSample.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-surface-border bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-xs text-slate-600 leading-relaxed max-w-lg">
                {selectedSample.description}
              </p>
              <Link
                href="/career-services"
                className="px-5 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#0284F5] text-white text-xs font-bold transition-all shrink-0 w-full sm:w-auto text-center"
                onClick={() => setSelectedSample(null)}
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
