'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Building2, Sparkles, CheckCircle2, Globe2 } from 'lucide-react';

export interface CompanyLogoItem {
  id: string;
  name: string;
  country: string;
  flag: string;
  sector: string;
  logo: string;
  isPng?: boolean;
}

export const gccCompanies: CompanyLogoItem[] = [
  // 🇦🇪 UAE
  {
    id: 'emaar',
    name: 'Emaar Properties',
    country: 'UAE',
    flag: '🇦🇪',
    sector: 'Real Estate & Hospitality',
    logo: '/assets/companies/emaar.svg',
  },
  {
    id: 'emirates-nbd',
    name: 'Emirates NBD',
    country: 'UAE',
    flag: '🇦🇪',
    sector: 'Banking & Financial Services',
    logo: '/assets/companies/emirates-nbd.png',
    isPng: true,
  },
  {
    id: 'aramco',
    name: 'Saudi Aramco',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    sector: 'Energy & Global Petroleum',
    logo: '/assets/companies/aramco.svg',
  },
  {
    id: 'qnb',
    name: 'QNB Group',
    country: 'Qatar',
    flag: '🇶🇦',
    sector: 'Banking & Financial Group',
    logo: '/assets/companies/qnb.svg',
  },
  {
    id: 'stc',
    name: 'stc Group',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    sector: 'Telecom & Digital Infrastructure',
    logo: '/assets/companies/stc.svg',
  },
  {
    id: 'fab',
    name: 'First Abu Dhabi Bank',
    country: 'UAE',
    flag: '🇦🇪',
    sector: 'Banking & Asset Management',
    logo: '/assets/companies/fab.svg',
  },
  {
    id: 'kfh',
    name: 'Kuwait Finance House',
    country: 'Kuwait',
    flag: '🇰🇼',
    sector: 'Islamic Banking & Finance',
    logo: '/assets/companies/kfh.svg',
  },
  {
    id: 'adnoc',
    name: 'ADNOC Group',
    country: 'UAE',
    flag: '🇦🇪',
    sector: 'Energy & Petrochemicals',
    logo: '/assets/companies/adnoc.svg',
  },
  {
    id: 'sabic',
    name: 'SABIC',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    sector: 'Chemicals & Advanced Materials',
    logo: '/assets/companies/sabic.svg',
  },
  {
    id: 'ooredoo',
    name: 'Ooredoo',
    country: 'Qatar',
    flag: '🇶🇦',
    sector: 'Telecommunications & ICT',
    logo: '/assets/companies/ooredoo.svg',
  },
  {
    id: 'nbk',
    name: 'National Bank of Kuwait',
    country: 'Kuwait',
    flag: '🇰🇼',
    sector: 'Commercial Banking',
    logo: '/assets/companies/nbk.svg',
  },
  {
    id: 'almarai',
    name: 'Almarai',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    sector: 'Consumer Goods & Food Production',
    logo: '/assets/companies/almarai.svg',
  },
  {
    id: 'qatarenergy',
    name: 'QatarEnergy',
    country: 'Qatar',
    flag: '🇶🇦',
    sector: 'LNG & Integrated Energy',
    logo: '/assets/companies/qatarenergy.svg',
  },
  {
    id: 'zain',
    name: 'Zain Group',
    country: 'Kuwait',
    flag: '🇰🇼',
    sector: 'Mobile & Data Telephony',
    logo: '/assets/companies/zain.svg',
  },
  {
    id: 'alba',
    name: 'Alba (Aluminium Bahrain)',
    country: 'Bahrain',
    flag: '🇧🇭',
    sector: 'Industrial Metal & Aluminium',
    logo: '/assets/companies/alba.svg',
  },
  {
    id: 'bank-muscat',
    name: 'Bank Muscat',
    country: 'Oman',
    flag: '🇴🇲',
    sector: 'Financial Services & Corporate Banking',
    logo: '/assets/companies/bank-muscat.svg',
  },
  {
    id: 'aldar',
    name: 'Aldar Properties',
    country: 'UAE',
    flag: '🇦🇪',
    sector: 'Real Estate & Infrastructure',
    logo: '/assets/companies/aldar.png',
    isPng: true,
  },
  {
    id: 'batelco',
    name: 'Batelco',
    country: 'Bahrain',
    flag: '🇧🇭',
    sector: 'Digital Telecommunications',
    logo: '/assets/companies/batelco.svg',
  },
  {
    id: 'omantel',
    name: 'Omantel',
    country: 'Oman',
    flag: '🇴🇲',
    sector: 'Integrated Telecom Solutions',
    logo: '/assets/companies/omantel.svg',
  },
  {
    id: 'dewa',
    name: 'DEWA',
    country: 'UAE',
    flag: '🇦🇪',
    sector: 'Power & Clean Energy Utility',
    logo: '/assets/companies/dewa.png',
    isPng: true,
  },
  {
    id: 'oq',
    name: 'OQ',
    country: 'Oman',
    flag: '🇴🇲',
    sector: 'Global Integrated Energy',
    logo: '/assets/companies/oq.svg',
  },
];

export default function CandidatesHiredSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  // Seamless infinite loop: duplicate array
  const duplicatedCompanies = [...gccCompanies, ...gccCompanies];

  return (
    <section
      ref={sectionRef}
      aria-label="Candidates Hired In - GCC Companies and Employers"
      className="py-16 sm:py-24 bg-white border-y border-surface-border relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,140,255,0.03),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal-dark border border-teal-accent/25 mb-4 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-teal-accent" />
            <span>GCC TALENT RECRUITMENT & OPPORTUNITY NETWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-950 tracking-tight">
            Candidates Hired in
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Market-leading enterprises, multinational conglomerates, and esteemed corporate employers across our India & GCC recruitment and candidate placement ecosystem.
          </p>

          {/* GCC Coverage Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {[
              { flag: '🇦🇪', label: 'UAE' },
              { flag: '🇸🇦', label: 'Saudi Arabia' },
              { flag: '🇶🇦', label: 'Qatar' },
              { flag: '🇰🇼', label: 'Kuwait' },
              { flag: '🇧🇭', label: 'Bahrain' },
              { flag: '🇴🇲', label: 'Oman' },
            ].map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-50 border border-slate-200/80 text-slate-700 shadow-xs hover:border-teal-accent/30 transition-colors"
              >
                <span>{c.flag}</span>
                <span>{c.label}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full-width Automatic Horizontal Logo Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full overflow-hidden py-3"
      >
        {/* Soft edge gradient fades for smooth card entry and exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Continuous ticker track */}
        <div
          className="animate-marquee-scroll flex items-center gap-5 sm:gap-6 px-4"
          style={{ willChange: 'transform' }}
        >
          {duplicatedCompanies.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[240px] sm:w-[270px] h-[160px] sm:h-[175px] bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(0,107,91,0.14)] hover:border-teal-accent/40 transition-all duration-300 group p-5 flex flex-col items-center justify-between shrink-0 select-none cursor-pointer"
            >
              {/* Country & Industry Flag Tag */}
              <div className="w-full flex items-center justify-between text-[10px] font-semibold text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="text-xs">{item.flag}</span>
                  <span className="uppercase tracking-wider font-bold text-slate-600">{item.country}</span>
                </span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100/90 text-slate-500 font-medium text-[9px] uppercase tracking-wide">
                  GCC Employer
                </span>
              </div>

              {/* Logo Area */}
              <div className="w-full h-16 flex items-center justify-center p-1 relative">
                <Image
                  src={item.logo}
                  alt={`${item.name} official corporate logo - GCC recruitment network`}
                  width={item.isPng ? 130 : 150}
                  height={50}
                  className="max-h-12 max-w-[170px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Company Name & Sector */}
              <div className="w-full text-center border-t border-slate-100 pt-2.5">
                <div className="text-xs font-bold text-dark-950 truncate group-hover:text-teal-accent transition-colors">
                  {item.name}
                </div>
                <div className="text-[10px] text-slate-500 truncate mt-0.5">
                  {item.sector}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Trust & Assurance Note */}
      <div className="max-w-4xl mx-auto px-4 mt-8 sm:mt-10 text-center">
        <p className="text-xs text-slate-500 leading-relaxed flex items-center justify-center flex-wrap gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-accent shrink-0" />
          <span>
            Connecting talent across Banking, Energy, Telecommunications, Real Estate, Technology, and Industrial conglomerates in the GCC.
          </span>
        </p>
      </div>
    </section>
  );
}
