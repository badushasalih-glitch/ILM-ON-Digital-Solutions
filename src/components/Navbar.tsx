'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Briefcase, FileText, TrendingUp, Users, Instagram, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionDropdown, setDivisionDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Divisions',
      dropdown: [
        {
          name: 'Career Services',
          href: '/career-services',
          desc: 'ATS Resumes, International CVs & Profile Optimization',
          icon: FileText,
        },
        {
          name: 'Recruitment',
          href: '/recruitment',
          desc: 'Talent Sourcing, CV Screening & Employer Connection',
          icon: Users,
        },
        {
          name: 'Digital Marketing',
          href: '/digital-marketing',
          desc: 'Meta Ads, Lead Generation & Social Media Growth',
          icon: TrendingUp,
        },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Client Stories', href: '/client-stories' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-surface-border shadow-subtle py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official ILM-ON Logo: Vivid Blue + White, high-contrast, clearly visible */}
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
              <span className="text-base sm:text-lg font-black tracking-tight text-dark-950 leading-tight">
                ILM-ON
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-widest text-vivid-blue uppercase leading-none">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isDivActive =
                  pathname.startsWith('/career-services') ||
                  pathname.startsWith('/recruitment') ||
                  pathname.startsWith('/digital-marketing');

                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDivisionDropdown(true)}
                    onMouseLeave={() => setDivisionDropdown(false)}
                  >
                    <button
                      className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-colors ${
                        isDivActive
                          ? 'text-vivid-blue bg-vivid-light'
                          : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          divisionDropdown ? 'rotate-180 text-vivid-blue' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Clean Corporate Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-80 pt-2 transition-all duration-150 ${
                        divisionDropdown
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1'
                      }`}
                    >
                      <div className="bg-white border border-surface-border rounded-xl p-2 shadow-card">
                        {link.dropdown.map((subItem) => {
                          const Icon = subItem.icon;
                          const isActive = pathname === subItem.href;

                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                                isActive
                                  ? 'bg-vivid-light text-vivid-blue'
                                  : 'hover:bg-surface-light text-dark-950'
                              }`}
                            >
                              <div
                                className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                                  isActive
                                    ? 'bg-vivid-blue text-white'
                                    : 'bg-surface-light text-dark-800'
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-sm leading-tight text-dark-950">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-slate-500 mt-1 leading-snug">
                                  {subItem.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-vivid-blue bg-vivid-light'
                      : 'text-dark-900 hover:text-vivid-blue hover:bg-surface-light'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Master Top-Right CTA: Social + Official WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://www.instagram.com/ilmon_digitalsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ILM-ON Instagram"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-vivid-light text-slate-700 hover:text-vivid-blue border border-slate-200 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/ilm-on-digital-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ILM-ON LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-vivid-light text-slate-700 hover:text-vivid-blue border border-slate-200 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Digital%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-sm hover:shadow transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/919292940652"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-dark-900 hover:text-vivid-blue rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-surface-border px-4 pt-3 pb-6 shadow-card animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                pathname === '/' ? 'text-vivid-blue bg-vivid-light' : 'text-dark-900'
              }`}
            >
              Home
            </Link>

            <div className="pt-2 pb-1 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Three Divisions
            </div>
            <Link
              href="/career-services"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-5 pr-3 py-2 rounded-lg text-sm text-dark-800 hover:bg-surface-light font-medium"
            >
              01 • Career Services (ATS Resumes & Profiling)
            </Link>
            <Link
              href="/recruitment"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-5 pr-3 py-2 rounded-lg text-sm text-dark-800 hover:bg-surface-light font-medium"
            >
              02 • Recruitment Support & Consultancy
            </Link>
            <Link
              href="/digital-marketing"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-5 pr-3 py-2 rounded-lg text-sm text-dark-800 hover:bg-surface-light font-medium"
            >
              03 • Ads & Digital Marketing
            </Link>

            <div className="pt-2 pb-1 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Company
            </div>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-dark-900"
            >
              About ILM-ON
            </Link>
            <Link
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-dark-900"
            >
              Leadership Team
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-dark-900"
            >
              Work Portfolio
            </Link>
            <Link
              href="/client-stories"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-dark-900"
            >
              Client Stories & Audio
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-dark-900"
            >
              Pricing & Packages
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-dark-900"
            >
              Contact Us
            </Link>

            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/ilmon_digitalsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/ilm-on-digital-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <a
                href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Digital%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-sm"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
