'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, Eye, Maximize2, X } from 'lucide-react';

export interface AdsPoster {
  id: number;
  title: string;
  tagline: string;
  image: string;
  width: number;
  height: number;
}

export const ADS_ON_POSTERS: AdsPoster[] = [
  {
    id: 1,
    title: 'Creative Campaign Architecture',
    tagline: 'Turn Your Brand ON • Attention That Drives Growth',
    image: '/assets/ads-on/1.png',
    width: 3656,
    height: 4875,
  },
  {
    id: 2,
    title: 'High-Impact Visual Production',
    tagline: 'Meta & Google Ads • Creative That Demands Action',
    image: '/assets/ads-on/2.png',
    width: 3656,
    height: 4875,
  },
  {
    id: 3,
    title: 'Strategic Brand Positioning',
    tagline: 'Social Media & Content • Reasons To Be Noticed',
    image: '/assets/ads-on/3.png',
    width: 3656,
    height: 4875,
  },
  {
    id: 4,
    title: 'Performance Digital Growth',
    tagline: 'Lead Generation Funnels • Data Backed Creative',
    image: '/assets/ads-on/4.png',
    width: 3656,
    height: 4875,
  },
  {
    id: 5,
    title: 'Commercial Presence & Reach',
    tagline: 'Cross-Platform Authority • India & GCC Markets',
    image: '/assets/ads-on/5.png',
    width: 3656,
    height: 4875,
  },
  {
    id: 6,
    title: 'Integrated Digital Solutions',
    tagline: 'One Switch. One Creative Partner. ADS ON.',
    image: '/assets/ads-on/6.png',
    width: 3656,
    height: 4875,
  },
];

export default function AdsOnPosterShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxPoster, setLightboxPoster] = useState<AdsPoster | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePoster = ADS_ON_POSTERS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ADS_ON_POSTERS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + ADS_ON_POSTERS.length) % ADS_ON_POSTERS.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxPoster) {
        if (e.key === 'Escape') setLightboxPoster(null);
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        return;
      }
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPoster]);

  return (
    <section 
      ref={containerRef}
      className="py-20 sm:py-28 bg-dark-950 text-white relative overflow-hidden"
      aria-label="ADS ON Creative Works - Official Campaign Posters"
    >
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-vivid-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-blue/20 text-vivid-light border border-vivid-blue/30 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-vivid-blue" />
            <span>ADS ON — CREATIVE SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Campaign Works That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vivid-blue via-sky-400 to-teal-accent">
              Turn Brands ON.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The six official ADS ON creative campaign posters — conceived, designed, and executed to capture attention and deliver tangible commercial impact across Meta, Google, and digital feeds.
          </p>
        </motion.div>

        {/* Showcase Stage Grid: Interactive Storytelling Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Story Navigator (Desktop) */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center justify-between">
              <span>OFFICIAL POSTER SERIES</span>
              <span>0{activeIndex + 1} / 0{ADS_ON_POSTERS.length}</span>
            </div>

            <div className="space-y-2.5">
              {ADS_ON_POSTERS.map((poster, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={poster.id}
                    onClick={() => setActiveIndex(idx)}
                    type="button"
                    className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                      isActive
                        ? 'bg-white/10 border-vivid-blue/60 shadow-lg text-white translate-x-1'
                        : 'bg-white/5 border-white/10 hover:bg-white/8 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold px-2 py-1 rounded-md ${
                        isActive ? 'bg-vivid-blue text-white' : 'bg-white/10 text-slate-400'
                      }`}>
                        0{poster.id}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-bold tracking-tight">
                          {poster.title}
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">
                          {poster.tagline}
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-vivid-blue animate-pulse shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Actions & Navigation Controls */}
            <div className="pt-4 flex items-center justify-between border-t border-white/10">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  type="button"
                  aria-label="Previous Poster"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  aria-label="Next Poster"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => setLightboxPoster(activePoster)}
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-vivid-blue" />
                <span>Full View</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual (Center Stage) */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col items-center">
            <div className="relative w-full max-w-xl mx-auto">
              {/* Active Poster Display Frame with Exact 3:4 Aspect Ratio */}
              <div className="relative aspect-[3656/4875] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePoster.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setLightboxPoster(activePoster)}
                  >
                    <Image
                      src={activePoster.image}
                      alt={`ADS ON Official Campaign Poster ${activePoster.id} - ${activePoster.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 640px"
                      priority={activePoster.id === 1}
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    
                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-dark-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-dark-950/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-2 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-vivid-blue" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white uppercase tracking-wider">
                    Poster 0{activePoster.id} of 06
                  </span>
                </div>
              </div>

              {/* Mobile Carousel Indicators */}
              <div className="flex items-center justify-center gap-2 mt-4 lg:hidden">
                {ADS_ON_POSTERS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    type="button"
                    aria-label={`Go to poster ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex ? 'w-6 bg-vivid-blue' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Crystal-Clear Detail */}
      <AnimatePresence>
        {lightboxPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxPoster(null)}
          >
            <div 
              className="relative max-w-2xl max-h-[92vh] aspect-[3656/4875] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxPoster(null)}
                type="button"
                aria-label="Close Preview"
                className="absolute -top-12 right-0 sm:-right-12 sm:top-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
              >
                <X className="w-5 h-5" />
              </button>

              <Image
                src={lightboxPoster.image}
                alt={`ADS ON Poster ${lightboxPoster.id}`}
                fill
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-contain"
                priority
              />

              <div className="absolute -bottom-10 left-0 right-0 text-center text-xs text-slate-400">
                <span>Use Left / Right arrow keys or Esc to close</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
