'use client';

import React from 'react';
import {
  Clock,
  RefreshCw,
  CreditCard,
  Building,
  FileCheck,
  ShieldCheck,
  QrCode,
} from 'lucide-react';
import { BUSINESS_POLICIES } from '@/lib/pricing';
import WhatsAppCTA from './WhatsAppCTA';

export default function TrustPaymentSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>TRANSPARENCY, TIMELINES & PAYMENT SECURITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060814] tracking-tight leading-tight">
            Turnaround, Revisions & <br className="hidden sm:inline" />
            <span className="text-[#0284F5]">Payment Transparency.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We operate with clear timelines and flexible, verified payment methods across India and the GCC. No surprises, no hidden recurring charges.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {/* 1. Turnaround Card */}
          <div className="p-7 rounded-2xl bg-surface-light border border-surface-border shadow-card flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white border border-surface-border flex items-center justify-center mb-5 shrink-0 shadow-sm">
                <Clock className="w-5 h-5 text-vivid-blue" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-vivid-blue mb-1">
                DELIVERY TIMELINE
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-3">
                {BUSINESS_POLICIES.standardTurnaround}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Standard turnaround for CVs and cover letters is {BUSINESS_POLICIES.standardTurnaround}.
              </p>
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">
                ⚡ Express 12–24h delivery available upon WhatsApp request.
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-200 text-[11px] text-slate-500">
              Timelines start once consultation details are received.
            </div>
          </div>

          {/* 2. Revision Policy Card */}
          <div className="p-7 rounded-2xl bg-surface-light border border-surface-border shadow-card flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white border border-surface-border flex items-center justify-center mb-5 shrink-0 shadow-sm">
                <RefreshCw className="w-5 h-5 text-teal-accent" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-dark mb-1">
                REVISION WINDOW
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-3">
                {BUSINESS_POLICIES.revisionWindow}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Test your draft against live job applications and request refinements within 7 days.
              </p>
              <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-[11px] text-teal-900 font-medium">
                ✓ Up to 2 comprehensive rounds included free of charge.
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-200 text-[11px] text-slate-500">
              Minor wording adjustments handled within 24h of request.
            </div>
          </div>

          {/* 3. India Payment Methods Card */}
          <div className="p-7 rounded-2xl bg-surface-light border border-surface-border shadow-card flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white border border-surface-border flex items-center justify-center mb-5 shrink-0 shadow-sm">
                <QrCode className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
                INDIA PAYMENTS (INR)
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-3">
                UPI & Bank Transfer
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                {BUSINESS_POLICIES.paymentMethodsIndia.map((method, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-200 text-[11px] text-slate-500">
              Instant invoice and confirmation receipt sent on WhatsApp.
            </div>
          </div>

          {/* 4. UAE & GCC Payment Methods Card */}
          <div className="p-7 rounded-2xl bg-surface-light border border-surface-border shadow-card flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white border border-surface-border flex items-center justify-center mb-5 shrink-0 shadow-sm">
                <Building className="w-5 h-5 text-teal-accent" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-dark mb-1">
                UAE & GCC PAYMENTS (AED)
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-3">
                Local Transfer & Link
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                {BUSINESS_POLICIES.paymentMethodsUAE.map((method, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-200 text-[11px] text-slate-500">
              Supported by Dubai Desk for UAE, Saudi, and Qatar clients.
            </div>
          </div>
        </div>

        {/* Deliverable Formats Banner */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-surface-border flex items-center justify-center text-vivid-blue shrink-0 shadow-sm">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-dark-950">
                Delivered in Print PDF + Fully Editable Microsoft Word (.docx)
              </div>
              <div className="text-xs text-slate-500">
                You retain full lifetime ownership to edit, update, and tailor your document for future roles.
              </div>
            </div>
          </div>
          <WhatsAppCTA
            desk="both"
            message="Hello ILM-ON, I would like to confirm pricing and turnaround for an order."
            label="Confirm Order Details"
            variant="outline"
            size="sm"
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
