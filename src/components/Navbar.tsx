'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Briefcase,
  FileText,
  TrendingUp,
  Users,
  FileCheck,
  Compass,
  Linkedin,
  Globe,
  Search,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionDropdown, setDivisionDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDivisionDropdown(false);
    setServicesDropdown(false);
  }, [pathname]);

  const serviceLinks = [
    {
      name: 'ATS-Friendly CV',
      href: '/ats-cv',
      desc: 'Engineered for recruitment software & human scanners',
      icon: FileCheck,
    },
    {
      name: 'ATS CV + Cover Letter (₹999)',
      href: '/cover-letter',
      desc: 'Complete application combo with matching letterhead',
      icon: Sparkles,
      badge: '₹999 COMBO',
    },
    {
      name: 'Europass Standard CV',
      href: '/europass-cv',
      desc: 'Official European Commission CEFR standard format',
      icon: Compass,
    },
    {
      name: 'LinkedIn Profile Optimization',
      href: '/linkedin-optimization',
      desc: 'Executive personal branding & search keyword indexing',
      icon: Linkedin,
    },
    {
      name: 'Naukri Gulf Optimization',
      href: '/naukri-gulf-optimization',
      desc: 'Specialized for Dubai, UAE & Saudi Arabia recruiters',
      icon: Globe,
    },
    {
      name: 'Indeed Profile Optimization',
      href: '/indeed-optimization',
      desc: 'High-volume job board parsing & application readiness',
      icon: Search,
    },
  ];

  const divisionLinks = [
    {
      name: 'Career Services',
      href: '/career-services',
      desc: 'ATS Resumes, International CVs & Profile Optimization',
      icon: FileText,
    },
    {
      name: 'Recruitment Support',
      href: '/recruitment',
      desc: 'Talent Sourcing, CV Screening & Employer Connection',
      icon: Users,
    },
    {
      name: 'Ads & Digital Marketing',
      href: '/digital-marketing',
      desc: 'Meta Ads, Lead Generation & Social Media Growth',
      icon: TrendingUp,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-surface-border shadow-subtle py-3'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official ILM-ON Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-vivid-blue border border-vivid-blue/20 transition-transform group-hover:scale-105">
              <Image
                src="/assets/brand/ilm-on-official-badge.png"
                alt="ILM-ON Digital Solutions Official Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-lg sm:text-xl font-black tracking-tight text-dark-950 leading-tight">
                ILM ON
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-widest text-vivid-blue uppercase leading-none">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/'
                  ? 'text-vivid-blue bg-vivid-light'
                  : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
              }`}
            >
              Home
            </Link>

            {/* Divisions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDivisionDropdown(true)}
              onMouseLeave={() => setDivisionDropdown(false)}
            >
              <button
                className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/career-services') ||
                  pathname.startsWith('/recruitment') ||
                  pathname.startsWith('/digital-marketing')
                    ? 'text-vivid-blue bg-vivid-light'
                    : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
                }`}
              >
                Divisions
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    divisionDropdown ? 'rotate-180 text-vivid-blue' : 'text-slate-400'
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 w-80 pt-2 transition-all duration-150 ${
                  divisionDropdown
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <div className="bg-white border border-surface-border rounded-xl p-2 shadow-card">
                  {divisionLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-light text-dark-950 transition-all"
                      >
                        <div className="w-8 h-8 rounded-md bg-surface-light text-vivid-blue flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-sm leading-tight text-dark-950">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-500 mt-1 leading-snug">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/ats-cv') ||
                  pathname.startsWith('/cover-letter') ||
                  pathname.startsWith('/europass-cv') ||
                  pathname.startsWith('/linkedin-optimization') ||
                  pathname.startsWith('/naukri-gulf-optimization') ||
                  pathname.startsWith('/indeed-optimization')
                    ? 'text-vivid-blue bg-vivid-light'
                    : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
                }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdown ? 'rotate-180 text-vivid-blue' : 'text-slate-400'
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 w-96 pt-2 transition-all duration-150 ${
                  servicesDropdown
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <div className="bg-white border border-surface-border rounded-xl p-2 shadow-card grid grid-cols-1 gap-1">
                  {serviceLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-light text-dark-950 transition-all"
                      >
                        <div className="w-8 h-8 rounded-md bg-blue-50 text-vivid-blue flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs sm:text-sm text-dark-950">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/portfolio'
                  ? 'text-vivid-blue bg-vivid-light'
                  : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/cv-templates"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/cv-templates'
                  ? 'text-vivid-blue bg-vivid-light'
                  : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
              }`}
            >
              Templates
            </Link>

            <Link
              href="/client-stories"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/client-stories'
                  ? 'text-vivid-blue bg-vivid-light'
                  : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
              }`}
            >
              Stories
            </Link>

            <Link
              href="/pricing"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/pricing'
                  ? 'text-vivid-blue bg-vivid-light'
                  : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/about'
                  ? 'text-vivid-blue bg-vivid-light'
                  : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/contact'
                  ? 'text-vivid-blue bg-vivid-light'
                  : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Direct WhatsApp Header Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/9192929406522?text=Hello%20ILM-ON,%20I%20would%20like%20to%20consult%20with%20a%20career%20specialist."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#0B1B3D] hover:bg-[#11285A] text-white shadow-xs transition-all active:scale-98"
            >
              <span>WhatsApp Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/9192929406522"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Consultation"
              className="w-9 h-9 rounded-lg bg-[#0B1B3D] text-white flex items-center justify-center shadow-xs"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-dark-950 hover:bg-surface-light transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-surface-border px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-elevated animate-fadeIn">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-dark-950 rounded-lg hover:bg-slate-50"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <span className="px-3 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                Divisions
              </span>
              <div className="mt-1 space-y-0.5">
                {divisionLinks.map((d) => (
                  <Link
                    key={d.name}
                    href={d.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <span className="px-3 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                Core Services
              </span>
              <div className="mt-1 space-y-0.5">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
                  >
                    <span>{s.name}</span>
                    {s.badge && (
                      <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        {s.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 pb-1 border-t border-slate-100 space-y-0.5">
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
              >
                Portfolio Gallery
              </Link>
              <Link
                href="/cv-templates"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
              >
                35+ CV Templates
              </Link>
              <Link
                href="/client-stories"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
              >
                Client Stories & Audio Reviews
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
              >
                Pricing Calculator
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
              >
                About ILM-ON
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
              >
                Contact & Office Locations
              </Link>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <a
              href="https://wa.me/9192929406522"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-xs font-bold bg-[#0B1B3D] text-white flex items-center justify-center gap-2 shadow-xs"
            >
              <span>India Desk (+91 92929406522)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/971562958907"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-xs font-bold bg-slate-800 text-white flex items-center justify-center gap-2"
            >
              <span>UAE Desk (+971 56 295 8907)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
