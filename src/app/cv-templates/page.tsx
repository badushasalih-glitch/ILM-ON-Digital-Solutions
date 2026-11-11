'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FileText,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Download,
  ArrowRight,
  Globe2,
  ShieldCheck,
  Award,
} from 'lucide-react';

import { CV_TEMPLATES, type CVTemplate, CATEGORIES } from '@/data/cv-templates';

export default function CVTemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<CVTemplate | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredTemplates =
    activeCategory === 'all'
      ? CV_TEMPLATES
      : CV_TEMPLATES.filter((t) => t.category === activeCategory);

  // Manual scroll left/right
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Automatic horizontal sliding (every 5.5 seconds)
  useEffect(() => {
    if (isPaused || selectedTemplate !== null) return;

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft >= maxScroll - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const step = clientWidth * 0.75;
        scrollContainerRef.current.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, selectedTemplate, activeCategory]);

  // Keyboard navigation for modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedTemplate) return;
      if (e.key === 'Escape') {
        setSelectedTemplate(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredTemplates.findIndex((t) => t.id === selectedTemplate.id);
        if (currentIndex < filteredTemplates.length - 1) {
          setSelectedTemplate(filteredTemplates[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredTemplates.findIndex((t) => t.id === selectedTemplate.id);
        if (currentIndex > 0) {
          setSelectedTemplate(filteredTemplates[currentIndex - 1]);
        }
      }
    },
    [selectedTemplate, filteredTemplates]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Reset scroll on category filter change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <div className="pt-24 pb-20 bg-[#f8fafc] min-h-screen text-slate-900">
      {/* 1. Page Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-4 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>ILM-ON CV TEMPLATE COLLECTION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Professional CV Templates
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore professional CV layouts designed to present your experience, skills, and qualifications clearly. All formats are tailored to pass corporate applicant tracking systems and impress hiring managers.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#slider"
              className="px-6 py-3 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <span>Explore Templates Showcase</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/career-services"
              className="px-6 py-3 rounded-full text-xs font-bold bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
            >
              View CV Creation Packages
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Interactive Sliding CV Templates Showcase */}
      <section id="slider" className="px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto">
          {/* Category Navigation Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shadow-sm shrink-0 border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-blue-500/20 shadow-md scale-[1.02]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-950 hover:border-slate-300'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Carousel Wrapper */}
          <div
            className="relative group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Left Arrow Button */}
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-800 border border-slate-200 shadow-lg items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-800 border border-slate-200 shadow-lg items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel Track */}
            <div
              ref={scrollContainerRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 px-1 snap-x snap-mandatory scroll-smooth focus:outline-none"
              style={{ scrollbarWidth: 'thin' }}
            >
              {filteredTemplates.map((template, index) => (
                <div
                  key={template.id}
                  className="snap-start shrink-0 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group w-[300px] sm:w-[360px] md:w-[400px]"
                >
                  <div>
                    {/* Template Preview Image */}
                    <div
                      onClick={() => setSelectedTemplate(template)}
                      className="relative w-full aspect-[1.42] cursor-pointer overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center p-2"
                    >
                      <Image
                        src={template.image}
                        alt={template.name}
                        fill
                        sizes="(max-width: 640px) 300px, 400px"
                        loading={index < 4 ? 'eager' : 'lazy'}
                        className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                        <span className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-md flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-3.5 h-3.5 text-blue-600" />
                          <span>Click to Inspect Full Size</span>
                        </span>
                      </div>

                      {/* Format Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-blue-700 border border-slate-200 shadow-sm backdrop-blur-sm">
                          {template.format}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {template.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {template.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                        {template.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="p-5 sm:p-6 pt-0">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedTemplate(template)}
                        className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Template</span>
                      </button>
                      <a
                        href={`https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20my%20CV%20using%20the%20${encodeURIComponent(template.name)}%20template.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1 hover:scale-105 active:scale-95"
                        title="Order this template on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span className="hidden sm:inline">Order</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="sm:hidden flex items-center justify-center gap-2 mt-2 text-xs text-slate-500 font-medium">
              <span>Swipe horizontally to browse all templates</span>
              <span className="animate-pulse">👉</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing & Ordering Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>OFFICIAL ILM-ON PRICING & GUARANTEE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Get Any Template Written for Just ₹599 / AED 25 / SAR 25
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Choose any template from our collection. Our team will completely rewrite and format your CV with targeted ATS keywords, industry achievements, and 24-hour turnaround in Word and PDF formats.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0 justify-center">
              <a
                href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20have%20selected%20a%20CV%20template%20and%20want%20to%20order%20my%20resume%20writing."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp (₹599 / AED 25)</span>
              </a>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs text-center border border-white/20 transition-all"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FULL-SIZE LIGHTBOX MODAL */}
      {/* ============================================================ */}
      {selectedTemplate && (
        <div
          onClick={() => setSelectedTemplate(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[94vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-200"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3 pr-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                  {selectedTemplate.format}
                </span>
                <span className="text-sm font-bold text-slate-950 truncate max-w-xs sm:max-w-md md:max-w-xl">
                  {selectedTemplate.name}
                </span>
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 flex items-center justify-center transition-colors shrink-0"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 min-h-[50vh] sm:min-h-[60vh] max-h-[70vh] w-full bg-slate-900 flex items-center justify-center p-4">
              <Image
                src={selectedTemplate.image}
                alt={selectedTemplate.name}
                fill
                priority
                className="object-contain"
              />

              {/* Prev Button inside Modal */}
              <button
                onClick={() => {
                  const currentIndex = filteredTemplates.findIndex((t) => t.id === selectedTemplate.id);
                  if (currentIndex > 0) {
                    setSelectedTemplate(filteredTemplates[currentIndex - 1]);
                  }
                }}
                disabled={filteredTemplates.findIndex((t) => t.id === selectedTemplate.id) === 0}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-all"
                aria-label="Previous template"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button inside Modal */}
              <button
                onClick={() => {
                  const currentIndex = filteredTemplates.findIndex((t) => t.id === selectedTemplate.id);
                  if (currentIndex < filteredTemplates.length - 1) {
                    setSelectedTemplate(filteredTemplates[currentIndex + 1]);
                  }
                }}
                disabled={
                  filteredTemplates.findIndex((t) => t.id === selectedTemplate.id) ===
                  filteredTemplates.length - 1
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-all"
                aria-label="Next template"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-6 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="max-w-xl">
                <div className="text-xs font-bold text-slate-900">{selectedTemplate.format}</div>
                <div className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {selectedTemplate.description}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-end">
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  Close (ESC)
                </button>
                <a
                  href={`https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20my%20CV%20written%20in%20this%20template:%20${encodeURIComponent(selectedTemplate.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order with This Template</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
