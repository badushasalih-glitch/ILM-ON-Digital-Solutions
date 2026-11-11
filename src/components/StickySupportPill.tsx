'use client';

import React, { useState } from 'react';
import { X, ChevronRight, Globe2, ShieldCheck } from 'lucide-react';

export default function StickySupportPill() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Click-away backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-dark-950/20 backdrop-blur-2xs"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none">
        {/* Expanded Drawer */}
        {isOpen && (
          <div className="mb-3 w-84 max-w-[calc(100vw-2rem)] bg-white border border-slate-200/90 rounded-3xl p-5 shadow-2xl pointer-events-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" aria-hidden="true" />
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#0B1B3D]">
                    ILM ON Career Desk
                  </h4>
                  <div className="text-[10px] text-slate-600 font-semibold">Direct WhatsApp Support</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-dark-950 p-1 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-600 leading-relaxed">
              Connect directly with our regional career consultants for document audits, pricing confirmation, or Gulf job requirements:
            </p>

            {/* Direct Desk Buttons */}
            <div className="mt-4 space-y-2.5">
              {/* India Desk */}
              <a
                href="https://wa.me/919292940652?text=Hello%20ILM%20ON%20Digital%20Solutions,%20I%20would%20like%20to%20get%20an%20ATS-friendly%20CV%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-[#F8FAFC] hover:bg-blue-50/70 border border-slate-200/80 hover:border-[#0284F5]/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/70 text-[11px] font-black text-[#0B1B3D]">
                    IN
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#0B1B3D] group-hover:text-[#0284F5]">
                      Primary WhatsApp Desk
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium tabular-nums">
                      +91 9292940652 (Main Line)
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0284F5] group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* UAE Desk */}
              <a
                href="https://wa.me/971562958907?text=Hello%20ILM%20ON%20Digital%20Solutions,%20I%20would%20like%20an%20ATS%20CV%20consultation%20for%20the%20UAE/Gulf%20market."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-[#F8FAFC] hover:bg-teal-50/70 border border-slate-200/80 hover:border-teal-accent/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-teal-50 border border-teal-200/70 text-[11px] font-black text-teal-800">
                    AE
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#0B1B3D] group-hover:text-teal-accent">
                      UAE Regional Support Desk
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium tabular-nums">
                      +971 56 295 8907 (Dubai &amp; GCC)
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-accent group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Globe2 className="w-3 h-3 text-[#0284F5]" />
                India &amp; UAE Advisory
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-teal-600" />
                Confidential Handling
              </span>
            </div>
          </div>
        )}

        {/* Sticky Assistant Floating Pill with Authentic WhatsApp Logo */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`pointer-events-auto pl-3 pr-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 group active:scale-95 ${
            isOpen
              ? 'bg-[#0B1B3D] text-white ring-2 ring-white/20'
              : 'bg-[#0B1B3D] hover:bg-[#11285A] text-white shadow-blue-950/30'
          }`}
          aria-label={isOpen ? 'Close WhatsApp support desks' : 'Open WhatsApp support desks'}
          aria-expanded={isOpen}
        >
          {/* Recognizable WhatsApp Logo */}
          <div className="relative w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>

          {/* Neutral Label */}
          <div className="text-left text-xs font-bold leading-tight">
            <span>WhatsApp Support</span>
            <span className="block text-[10px] font-medium text-slate-300">
              India &amp; UAE Desks
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
