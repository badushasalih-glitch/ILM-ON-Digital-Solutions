'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  FileCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { CV_TEMPLATES, CVTemplate } from '@/data/cv-templates';

// Featured authorized CV templates representing each core format
const FEATURED_SLIDES = CV_TEMPLATES.slice(0, 8);

export default function AtsCvSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalSample, setActiveModalSample] = useState<CVTemplate | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Responsive items-per-view calculation
  useEffect(() => {
    function updateItemsPerView() {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        // Mobile view shows ~1.2 cards (peek effect)
        setItemsPerView(1.22);
      }
    }

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, Math.ceil(FEATURED_SLIDES.length - Math.floor(itemsPerView)));

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const isSwipe = Math.abs(distance) > 40;

    if (isSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Autoplay with IntersectionObserver and prefers-reduced-motion check
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let observer: IntersectionObserver | null = null;
    let isVisible = true;

    if (containerRef.current && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0.25 }
      );
      observer.observe(containerRef.current);
    }

    const interval = setInterval(() => {
      if (!isPaused && isVisible && !activeModalSample) {
        handleNext();
      }
    }, 4500);

    return () => {
      clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, [isPaused, activeModalSample, handleNext]);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalSample) {
        setActiveModalSample(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalSample]);

  // Calculate slide offset percentage
  const offsetPercentage = currentIndex * (100 / itemsPerView);

  return (
    <section
      id="cv-samples"
      ref={containerRef}
      className="py-20 sm:py-24 bg-surface-light border-t border-surface-border relative overflow-hidden"
      aria-label="ATS CV and International Resume Sample Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
              <FileCheck className="w-3.5 h-3.5 text-[#0284F5]" />
              <span>ATS-OPTIMIZED PORTFOLIO SAMPLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#060814] tracking-tight">
              Verified ATS Resumes & <br className="hidden sm:inline" />
              <span className="text-[#0284F5]">Global Format Showcase.</span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore our real authorized CV templates. Each document features strict single/dual-column parser compatibility, role-aligned keyword density, and human-recruiter aesthetic hierarchy.
            </p>
          </div>

          {/* Desktop / Tablet Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <Link
              href="/cv-templates"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-dark-950 border border-surface-border hover:bg-slate-50 transition-colors shadow-xs"
            >
              <span>View All 35+ Templates</span>
              <ArrowRight className="w-3.5 h-3.5 text-vivid-blue" />
            </Link>

            <button
              onClick={handlePrev}
              aria-label="Previous CV sample"
              className="w-10 h-10 rounded-xl bg-white border border-surface-border flex items-center justify-center text-slate-700 hover:text-dark-950 hover:bg-slate-50 transition-colors shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next CV sample"
              className="w-10 h-10 rounded-xl bg-white border border-surface-border flex items-center justify-center text-slate-700 hover:text-dark-950 hover:bg-slate-50 transition-colors shadow-xs active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated Slider Track */}
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translate3d(-${offsetPercentage}%, 0, 0)`,
            }}
          >
            {FEATURED_SLIDES.map((template) => {
              const whatsappOrderUrl =
                'https://wa.me/9192929406522?text=' +
                encodeURIComponent(
                  `Hello ILM-ON, I would like to order the ${template.name} (${template.format}).`
                );

              return (
                <div
                  key={template.id}
                  className="shrink-0 px-2.5 sm:px-3 w-[82%] sm:w-[50%] lg:w-[33.333%]"
                >
                  <div className="bg-white rounded-2xl border border-surface-border shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col h-full overflow-hidden group">
                    {/* Image Mockup Container */}
                    <div
                      className="relative w-full aspect-[1/1.22] bg-slate-100 overflow-hidden cursor-pointer"
                      onClick={() => setActiveModalSample(template)}
                    >
                      <Image
                        src={template.image}
                        alt={template.name}
                        fill
                        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 text-dark-950 shadow-md backdrop-blur-xs border border-slate-200">
                          {template.categoryLabel}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[9.5px] font-extrabold bg-[#0284F5] text-white shadow-xs">
                          {template.format}
                        </span>
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <button
                          type="button"
                          className="px-4 py-2.5 rounded-xl bg-white text-dark-950 font-bold text-xs shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform"
                        >
                          <Eye className="w-4 h-4 text-vivid-blue" />
                          <span>Inspect Full Sample</span>
                        </button>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-bold text-dark-950 text-base leading-snug line-clamp-1 mb-1.5 group-hover:text-vivid-blue transition-colors">
                          {template.name}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                          {template.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {template.tags.slice(0, 2).map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Row */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                        <button
                          onClick={() => setActiveModalSample(template)}
                          className="text-xs font-bold text-slate-700 hover:text-vivid-blue inline-flex items-center gap-1 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </button>

                        <a
                          href={whatsappOrderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0284F5] text-white hover:bg-[#0274d9] transition-colors shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Order on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="mt-6 sm:hidden text-center">
          <Link
            href="/cv-templates"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-white text-dark-950 border border-surface-border shadow-xs hover:bg-slate-50 transition-colors"
          >
            <span>View All 35+ CV Templates</span>
            <ArrowRight className="w-3.5 h-3.5 text-vivid-blue" />
          </Link>
        </div>

        {/* Carousel Pagination Indicators (Dots) */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-[#0284F5]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX PREVIEW MODAL
          - Accessible Dialog with Focus Trap & Escape key dismissal
          ========================================================================= */}
      {activeModalSample && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cv-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalSample(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalSample(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-dark-950/70 hover:bg-dark-950 text-white flex items-center justify-center transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image View */}
            <div className="relative w-full md:w-3/5 bg-slate-900 min-h-[320px] md:min-h-[500px] flex items-center justify-center p-4 overflow-y-auto">
              <div className="relative w-full aspect-[1/1.3] max-w-[420px] shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src={activeModalSample.image}
                  alt={activeModalSample.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Modal Details Sidebar */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-3">
                  <span>{activeModalSample.categoryLabel}</span>
                </div>

                <h3
                  id="modal-cv-title"
                  className="text-xl sm:text-2xl font-black text-dark-950 leading-snug mb-2"
                >
                  {activeModalSample.name}
                </h3>

                <div className="text-xs font-bold text-vivid-blue mb-4">
                  Standard Format: {activeModalSample.format}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {activeModalSample.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Document Engineering Specifications:
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                      <span>Single & Dual Column ATS Algorithm Pass Rates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                      <span>Editable Word (.docx) & High-Resolution PDF</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                      <span>Tailored keyword mapping for GCC & India targets</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {activeModalSample.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href={
                    'https://wa.me/9192929406522?text=' +
                    encodeURIComponent(
                      `Hello ILM-ON, I would like to order the ${activeModalSample.name} (${activeModalSample.format}).`
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm bg-[#0284F5] hover:bg-[#0274d9] text-white shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Order This Template on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
