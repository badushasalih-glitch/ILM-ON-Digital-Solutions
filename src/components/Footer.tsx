import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight, Check, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-slate-300 border-t border-neutral-800">
      {/* Top Banner: Direct Connect */}
      <div className="border-b border-neutral-800/80 bg-neutral-900/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              ILM-ON DIGITAL SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Switch On Your Potential
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Professional solutions for career development, talent acquisition support, and digital business growth.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/9192929406522?text=Hello%20ILM%20ON%20Digital%20Solutions,%20I%20would%20like%20to%20consult%20with%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-sm transition-all"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 transition-all"
            >
              <span>Contact Desks</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-11 w-44">
              <Image
                src="/assets/brand/ilm-on-logo.png"
                alt="ILM-ON Digital Solutions"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              ILM-ON Digital Solutions provides dedicated Career Services, Recruitment Support & Consultancy, and Ads & Digital Marketing across India and the GCC.
            </p>
            <div className="text-xs font-bold text-vivid-blue tracking-wide uppercase pt-1">
              CAREER • RECRUITMENT • DIGITAL GROWTH
            </div>

            {/* Official Social Media Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://www.instagram.com/ilmon_digitalsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ILM-ON Digital Solutions Instagram"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-vivid-blue hover:text-white text-slate-300 border border-white/10 flex items-center justify-center transition-all shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/ilm-on-digital-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ILM-ON Digital Solutions LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-vivid-blue hover:text-white text-slate-300 border border-white/10 flex items-center justify-center transition-all shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Career Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/ats-cv" className="hover:text-vivid-blue transition-colors">
                  ATS-Friendly CV Writing
                </Link>
              </li>
              <li>
                <Link href="/cover-letter" className="hover:text-emerald-400 font-semibold transition-colors">
                  ATS CV + Cover Letter (₹999)
                </Link>
              </li>
              <li>
                <Link href="/europass-cv" className="hover:text-vivid-blue transition-colors">
                  Europass Standard CV
                </Link>
              </li>
              <li>
                <Link href="/linkedin-optimization" className="hover:text-vivid-blue transition-colors">
                  LinkedIn Optimization
                </Link>
              </li>
              <li>
                <Link href="/naukri-gulf-optimization" className="hover:text-vivid-blue transition-colors">
                  Naukri Gulf Optimization
                </Link>
              </li>
              <li>
                <Link href="/indeed-optimization" className="hover:text-vivid-blue transition-colors">
                  Indeed Profile Optimization
                </Link>
              </li>
              <li>
                <Link href="/cv-templates" className="hover:text-vivid-blue transition-colors">
                  35+ CV Templates Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Three Divisions & Portals */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Divisions & Pages</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/career-services" className="hover:text-vivid-blue transition-colors">
                  01 • Career Services Hub
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="hover:text-teal-300 transition-colors">
                  02 • Recruitment Support
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" className="hover:text-indigo-300 transition-colors">
                  03 • Ads & Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-vivid-blue transition-colors">
                  Pricing & Market Calculator
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-vivid-blue transition-colors">
                  Portfolio Showcase
                </Link>
              </li>
              <li>
                <Link href="/client-stories" className="hover:text-vivid-blue transition-colors">
                  Client Audio Feedback
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-vivid-blue transition-colors">
                  About ILM-ON
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Direct Desks</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-vivid-blue shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">India Desk (Primary):</div>
                  <a href="https://wa.me/9192929406522" className="text-slate-300 hover:text-vivid-blue font-medium">
                    +91 92929406522
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">UAE / Gulf Support Desk:</div>
                  <a href="https://wa.me/971562958907" className="text-slate-300 hover:text-teal-400 font-medium">
                    +971 56 295 8907 (Dubai)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-vivid-blue shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Email:</div>
                  <a href="mailto:info@ilmondigitalsolutions.online" className="text-slate-300 hover:text-vivid-blue">
                    info@ilmondigitalsolutions.online
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-vivid-blue shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Offices:</div>
                  <span className="text-slate-300">Dubai, UAE & Malappuram, Kerala - 676307</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Policies */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ILM-ON Digital Solutions. All rights reserved. “Switch On Your Potential”.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Strict Data Privacy • Zero Disclosed PII</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
