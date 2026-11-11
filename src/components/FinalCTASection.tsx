'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_POLICIES } from '@/lib/pricing';
import WhatsAppCTA from './WhatsAppCTA';

export default function FinalCTASection() {
  return (
    <section className="py-20 sm:py-28 bg-dark-950 text-white relative overflow-hidden border-t border-white/10">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-vivid-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0284F5]/20 text-[#0284F5] border border-[#0284F5]/30 mb-6">
          <span>SWITCH ON YOUR POTENTIAL TODAY</span>
        </div>

        <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Present <br />
          <span className="italic font-normal text-[#0284F5]">Your Potential?</span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us your career goal. Our team will help you identify the right service, format standards, and strategic next steps.
        </p>

        {/* Dual Desk WhatsApp Action Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          {/* 1. India Career Desk */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-vivid-blue/40 transition-all flex flex-col justify-between group backdrop-blur-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vivid-blue">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>KERALA & INDIA DESK</span>
                </div>
                <span className="text-[10px] font-semibold text-slate-400">IST Support</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {BUSINESS_POLICIES.contacts.indiaDesk.displayPhone}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Direct consultation for domestic Indian opportunities, fresh graduates, IT professionals, and cross-border relocations.
              </p>
            </div>
            <WhatsAppCTA
              desk="india"
              message="Hello ILM-ON India Desk, I would like to consult on my CV and career presentation."
              label="Chat with India Desk"
              variant="primary"
              size="md"
              className="w-full"
            />
          </div>

          {/* 2. Dubai & GCC Career Desk */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-accent/40 transition-all flex flex-col justify-between group backdrop-blur-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-accent">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>DUBAI & GCC DESK</span>
                </div>
                <span className="text-[10px] font-semibold text-slate-400">GST Support</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {BUSINESS_POLICIES.contacts.uaeDesk.displayPhone}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Specialized advisory for UAE, Saudi Arabia, and Qatar job markets, including visa prominence and Naukri Gulf strategy.
              </p>
            </div>
            <WhatsAppCTA
              desk="uae"
              message="Hello ILM-ON Dubai Desk, I would like to consult on GCC job seeker opportunities."
              label="Chat with Dubai Desk"
              variant="primary"
              size="md"
              className="w-full"
            />
          </div>
        </div>

        {/* Secondary Navigation & Support Contact */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-vivid-blue" />
            <span>{BUSINESS_POLICIES.contacts.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-accent" />
            <span>Responsive India &amp; Dubai Advisory Desks</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Confidential Career Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
