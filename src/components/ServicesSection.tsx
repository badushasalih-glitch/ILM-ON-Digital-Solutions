'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileCheck,
  FileText,
  Layers,
  Compass,
  Linkedin,
  Globe,
  Search,
  Sparkles,
  Award,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
  UserCheck,
} from 'lucide-react';
import { CAREER_SERVICES, ServicePackage } from '@/lib/pricing';

const ICON_MAP: Record<string, React.ReactNode> = {
  FileCheck: <FileCheck className="w-5 h-5 text-vivid-blue" />,
  FileText: <FileText className="w-5 h-5 text-vivid-blue" />,
  Layers: <Layers className="w-5 h-5 text-teal-accent" />,
  Compass: <Compass className="w-5 h-5 text-vivid-blue" />,
  Linkedin: <Linkedin className="w-5 h-5 text-[#0A66C2]" />,
  Globe: <Globe className="w-5 h-5 text-teal-accent" />,
  Search: <Search className="w-5 h-5 text-[#003A9B]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
  Award: <Award className="w-5 h-5 text-amber-500" />,
};

type CategoryFilter = 'all' | 'cv' | 'profile' | 'bundle';
type Currency = 'INR' | 'AED' | 'USD';

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [currency, setCurrency] = useState<Currency>('INR');

  const filteredServices = CAREER_SERVICES.filter((svc) => {
    if (activeCategory === 'all') return true;
    return svc.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 sm:py-24 bg-surface-light border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>CORE CAREER SERVICES</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Everything You Need to <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#0284F5]">Strengthen Your Career Profile.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every document is engineered by specialized career consultants to maximize clarity, parser compliance, and recruiter engagement across India, the GCC, and international markets.
          </p>

          {/* Market / Currency Switcher */}
          <div className="mt-6 inline-flex flex-wrap justify-center items-center gap-1.5 p-1.5 rounded-xl bg-slate-200/60 border border-slate-300/70 text-xs font-bold text-slate-600 max-w-full">
            <span className="px-2 text-[11px] uppercase tracking-wider text-slate-500 font-extrabold">Market Currency:</span>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1 rounded-lg transition-all ${
                currency === 'INR'
                  ? 'bg-white text-dark-950 shadow-xs font-black'
                  : 'hover:text-dark-950'
              }`}
            >
              India (₹ INR)
            </button>
            <button
              onClick={() => setCurrency('AED')}
              className={`px-3 py-1 rounded-lg transition-all ${
                currency === 'AED'
                  ? 'bg-white text-dark-950 shadow-xs font-black'
                  : 'hover:text-dark-950'
              }`}
            >
              UAE / GCC (AED د.إ)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-lg transition-all ${
                currency === 'USD'
                  ? 'bg-white text-dark-950 shadow-xs font-black'
                  : 'hover:text-dark-950'
              }`}
            >
              International ($ USD)
            </button>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white border border-surface-border shadow-sm max-w-xl mx-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-dark-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-dark-950 hover:bg-slate-50'
              }`}
            >
              All Services ({CAREER_SERVICES.length})
            </button>
            <button
              onClick={() => setActiveCategory('cv')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'cv'
                  ? 'bg-dark-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-dark-950 hover:bg-slate-50'
              }`}
            >
              CV & Resumes
            </button>
            <button
              onClick={() => setActiveCategory('profile')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'profile'
                  ? 'bg-dark-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-dark-950 hover:bg-slate-50'
              }`}
            >
              Profile Optimization
            </button>
            <button
              onClick={() => setActiveCategory('bundle')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'bundle'
                  ? 'bg-dark-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-dark-950 hover:bg-slate-50'
              }`}
            >
              Value Bundles
            </button>
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service: ServicePackage) => {
            const isDubaiDesk = service.desk === 'uae';

            // Currency formatting
            let displayPrice = `₹${service.priceINR}`;
            if (currency === 'AED') {
              displayPrice = `AED ${service.priceAED}`;
            } else if (currency === 'USD') {
              displayPrice = `$${service.priceUSD || 10}`;
            }

            return (
              <div
                key={service.id}
                className={`rounded-2xl border transition-all flex flex-col justify-between bg-white shadow-card hover:shadow-elevated relative overflow-hidden group ${
                  service.popular
                    ? 'border-vivid-blue/40 ring-2 ring-vivid-blue/10'
                    : 'border-surface-border'
                }`}
              >
                <div className="p-5 sm:p-7">
                  {/* Top Header Row: Icon on left, Badge on right */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-50 border border-surface-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {ICON_MAP[service.iconName] || <FileCheck className="w-5 h-5 text-vivid-blue" />}
                    </div>
                    {service.badge && (
                      <span
                        className={`inline-flex shrink-0 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                          service.badge === 'MOST POPULAR'
                            ? 'bg-vivid-light text-vivid-blue border border-vivid-blue/20'
                            : service.badge === 'BEST VALUE COMBO'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : service.badge === 'GCC ESSENTIAL' || service.badge === 'DUBAI & GULF SUITE'
                            ? 'bg-teal-light text-teal-dark border border-teal-accent/20'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Turnaround */}
                  <div className="mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-dark-950 leading-snug">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                      <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{service.deliveryTime} turnaround</span>
                    </div>
                  </div>

                  {/* Benefit Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Suitable For */}
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 mb-4 text-[11px] text-slate-600">
                    <div className="flex items-center gap-1.5 font-bold text-dark-950 uppercase text-[10px] tracking-wider mb-0.5">
                      <UserCheck className="w-3.5 h-3.5 text-[#0284F5]" />
                      <span>Best Suited For:</span>
                    </div>
                    <span className="leading-snug">{service.suitableFor}</span>
                  </div>

                  {/* What is Included (Bullet Points) */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      What is Included:
                    </div>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing, Learn More & CTA Bar */}
                <div className="p-5 sm:p-7 pt-4 bg-slate-50/80 border-t border-surface-border mt-auto space-y-3.5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        {service.isProvisional ? 'Provisional Rate*' : 'Confirmed Standard Price'}
                      </div>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-xl sm:text-2xl font-black text-dark-950">
                          {displayPrice}
                        </span>
                        {currency === 'INR' && (
                          <span className="text-xs font-semibold text-slate-500">
                            / AED {service.priceAED}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-[10px] text-right font-medium text-slate-500">
                      {service.revisions}
                    </div>
                  </div>

                  {/* Action Buttons: Dynamic WhatsApp Routing by Market Currency */}
                  <div className="space-y-2">
                    <a
                      href={
                        currency === 'AED'
                          ? 'https://wa.me/971562958907?text=Hello%20ILM%20ON%20Digital%20Solutions,%20I%20would%20like%20an%20ATS%20CV%20consultation%20for%20the%20UAE/Gulf%20market.'
                          : `https://wa.me/9192929406522?text=${encodeURIComponent(
                              `Hello ILM ON Digital Solutions, I would like to get an ATS-friendly CV consultation for ${service.name}.`
                            )}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 text-center inline-flex items-center justify-center gap-2 group/btn ${
                        service.popular
                          ? 'bg-[#0B1B3D] hover:bg-[#11285A] text-white shadow-sm'
                          : 'bg-[#0284F5] hover:bg-[#0274da] text-white shadow-xs'
                      }`}
                    >
                      <span>
                        {currency === 'AED' ? 'Order via UAE Desk' : 'Order Service'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>

                    <Link
                      href={service.routeUrl}
                      className="w-full py-1.5 px-3 rounded-lg text-[11px] font-bold text-slate-500 hover:text-[#0B1B3D] text-center inline-flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>View Full Service Scope</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote Disclaimers */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
            <span>
              *ATS CV + Cover Letter is confirmed at ₹999. Other rates shown are provisional standard estimates confirmed during consultation based on candidate seniority.
            </span>
          </div>
          <Link
            href="/pricing"
            className="text-vivid-blue font-bold hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>View Full Pricing Matrix</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
