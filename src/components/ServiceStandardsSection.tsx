'use client';

import React from 'react';
import {
  Check,
  FileCheck2,
  FileCode,
  Clock,
  RefreshCw,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

interface StandardItem {
  title: string;
  detail: string;
  benefit: string;
  icon: React.ReactNode;
}

const STANDARDS: StandardItem[] = [
  {
    title: 'Handcrafted Human Drafting',
    detail: 'Every career document is written from scratch by human career writers who understand employer parsing and industry expectations.',
    benefit: 'No automated bot phrasing or rigid template cut-outs',
    icon: <FileCheck2 className="w-5 h-5 text-vivid-blue" />,
  },
  {
    title: 'Full Dual-Format Delivery',
    detail: 'You receive both a high-resolution, print-ready PDF and a fully editable Microsoft Word (.docx) file for future updates.',
    benefit: 'You maintain full lifetime ownership of your files',
    icon: <FileCode className="w-5 h-5 text-teal-accent" />,
  },
  {
    title: 'Reliable 24–48h Turnaround',
    detail: 'Standard orders are delivered within 24 to 48 hours. Urgent 12–24h express delivery is available upon WhatsApp request.',
    benefit: 'Fast turnaround to meet critical job application deadlines',
    icon: <Clock className="w-5 h-5 text-amber-500" />,
  },
  {
    title: '7-Day Free Revision Window',
    detail: 'Receive your first draft and test it against your target jobs. Request refinements within 7 days at no additional cost.',
    benefit: 'Peace of mind with up to 2 comprehensive revision rounds',
    icon: <RefreshCw className="w-5 h-5 text-indigo-600" />,
  },
  {
    title: 'Direct WhatsApp Communication',
    detail: 'Message directly with our career desk throughout the drafting process. Ask questions, clarify details, and get live updates.',
    benefit: 'No waiting on ticket portals or generic email queues',
    icon: <MessageCircle className="w-5 h-5 text-emerald-500" />,
  },
  {
    title: 'Upfront Transparent Pricing',
    detail: 'We provide a clear quote before you pay. No hidden recurring subscriptions, no fees to download files, and no surprise add-ons.',
    benefit: 'Clear one-time fee with zero hidden commitments',
    icon: <ShieldCheck className="w-5 h-5 text-teal-dark" />,
  },
];

export default function ServiceStandardsSection() {
  return (
    <section className="py-20 sm:py-24 bg-surface-light border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200/80 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>OUR QUALITY COMMITMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060814] tracking-tight leading-tight">
            Our Service Standards. <br className="hidden sm:inline" />
            <span className="text-[#0284F5]">What You Receive with Every Order.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We hold ourselves to strict quality benchmarks. Here is what is guaranteed with every CV, cover letter, and profile optimization service we deliver.
          </p>
        </div>

        {/* 6 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STANDARDS.map((std, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-surface-border shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-surface-border flex items-center justify-center mb-5 shrink-0">
                  {std.icon}
                </div>
                <h3 className="text-base font-bold text-dark-950 mb-2">
                  {std.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {std.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-xs font-semibold text-teal-dark">
                <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                <span>{std.benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
