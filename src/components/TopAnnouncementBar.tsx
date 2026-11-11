'use client';

import React from 'react';
import { Sparkles, X } from 'lucide-react';

export default function TopAnnouncementBar() {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) return null;

  return (
    <div
      className="mt-[69px] sm:mt-[73px] bg-[#0B1B3D] border-b border-white/10 text-white py-2.5 sm:py-2 px-9 sm:px-6 text-xs relative z-40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3.5 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] text-sky-200 font-semibold text-[11px] tracking-wide border border-white/15 shrink-0">
            <Sparkles className="w-3 h-3 text-[#38BDF8] shrink-0" />
            <span>Launch Offer | 50% Off</span>
          </span>

          <span className="hidden sm:block h-3.5 w-px bg-white/15 shrink-0" aria-hidden="true" />

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-[11.5px] sm:text-xs">
            <a
              href="https://wa.me/9192929406522?text=Hello%20ILM%20ON%20Digital%20Solutions,%20I%20would%20like%20to%20get%20an%20ATS-friendly%20CV%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-emerald-400/45 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] shrink-0" aria-hidden="true" />
              <span className="text-slate-300 font-medium">WhatsApp (Primary):</span>
              <span className="text-white font-semibold tabular-nums">+91 92929406522</span>
            </a>
            <a
              href="https://wa.me/971562958907?text=Hello%20ILM%20ON%20Digital%20Solutions,%20I%20would%20like%20to%20get%20an%20ATS%20CV%20consultation%20for%20the%20UAE/Gulf%20market."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-sky-400/45 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden="true" />
              <span className="text-slate-300 font-medium">UAE Support:</span>
              <span className="text-white font-semibold tabular-nums">+971 56 295 8907</span>
            </a>
          </div>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-2 sm:static text-slate-400 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
