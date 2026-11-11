'use client';

import React from 'react';

const TICKER_ITEMS = [
  'ATS CV WRITING',
  'COVER LETTERS',
  'EUROPASS CV',
  'LINKEDIN OPTIMIZATION',
  'NAUKRI GULF',
  'INDEED PROFILE',
  'GCC CAREER SUPPORT',
];

export default function ServiceTicker() {
  // Repeating items ensures continuous looping without empty space on any resolution
  const repeatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      role="region"
      aria-label="Core Services Marquee Ticker"
      className="relative w-full bg-[#060814] text-white py-3 sm:py-3.5 border-y border-white/10 overflow-hidden select-none z-20"
    >
      {/* Subtle Side Edge Fade Gradients for visual elegance */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#060814] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#060814] to-transparent z-10 pointer-events-none" />

      {/* Marquee Wrapper with Pause on Hover */}
      <div className="flex overflow-hidden">
        <div className="anim-ticker-marquee flex items-center gap-6 sm:gap-10 shrink-0">
          {repeatedItems.map((item, idx) => (
            <div
              key={`ticker-1-${idx}`}
              className="inline-flex items-center gap-3 sm:gap-4 shrink-0 text-xs sm:text-sm font-extrabold tracking-wider text-slate-200 hover:text-white transition-colors"
            >
              <span>{item}</span>
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#0284F5] shadow-[0_0_8px_#0284F5]"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Duplicate stream for 100% seamless infinite looping */}
        <div
          className="anim-ticker-marquee flex items-center gap-6 sm:gap-10 shrink-0"
          aria-hidden="true"
        >
          {repeatedItems.map((item, idx) => (
            <div
              key={`ticker-2-${idx}`}
              className="inline-flex items-center gap-3 sm:gap-4 shrink-0 text-xs sm:text-sm font-extrabold tracking-wider text-slate-200 hover:text-white transition-colors"
            >
              <span>{item}</span>
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#0284F5] shadow-[0_0_8px_#0284F5]"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
