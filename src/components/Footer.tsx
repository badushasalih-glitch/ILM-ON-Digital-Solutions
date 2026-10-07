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
              href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Digital%20Solutions,%20I%20would%20like%20to%20consult%20with%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-sm transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 transition-all"
            >
              <span>Send Message</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
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

          {/* Three Divisions */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Three Divisions</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/career-services" className="hover:text-vivid-blue transition-colors">
                  01 • Career Services
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="hover:text-vivid-blue transition-colors">
                  02 • Recruitment Support
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" className="hover:text-vivid-blue transition-colors">
                  03 • Ads & Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-vivid-blue transition-colors">
                  Pricing & Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-vivid-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-vivid-blue transition-colors">Leadership Team</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-vivid-blue transition-colors">Work Portfolio</Link>
              </li>
              <li>
                <Link href="/client-stories" className="hover:text-vivid-blue transition-colors">Client Stories</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-vivid-blue transition-colors">Contact</Link>
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
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">India Desk:</div>
                  <a href="https://wa.me/919292940652" className="text-slate-300 hover:text-vivid-blue font-medium">+91 9292940652</a> / <a href="https://wa.me/919526240652" className="text-slate-300 hover:text-vivid-blue font-medium">9526240652</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-vivid-blue shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">UAE / Gulf Desk:</div>
                  <a href="https://wa.me/971562528518" className="text-slate-300 hover:text-vivid-blue font-medium">+971 562528518 (Dubai)</a>
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
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Locations:</div>
                  <span className="text-slate-300">Dubai, UAE & Malappuram, Kerala - 676307</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ILM-ON Digital Solutions. All rights reserved. “Switch On Your Potential”.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <a href="https://www.ilmondigitalsolutions.online" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              ilmondigitalsolutions.online
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
