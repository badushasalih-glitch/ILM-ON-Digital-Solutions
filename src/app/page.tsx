import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimationCanvas from '@/components/ScrollAnimationCanvas';
import StatisticsCounter from '@/components/StatisticsCounter';
import OurStorySection from '@/components/OurStorySection';
import DivisionCards from '@/components/DivisionCards';
import TeamSection from '@/components/TeamSection';
import TestimonialSection from '@/components/TestimonialSection';
import { ArrowRight, CheckCircle2, Shield, Globe, Sparkles, Building2, MapPin, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-surface-light">
      {/* 1. Cinematic Scroll Canvas Experience (240 High-Res Frames) */}
      <ScrollAnimationCanvas />

      {/* 2. Global Metric Trust Bar (Animated Counters on Viewport Entry) */}
      <StatisticsCounter />

      {/* 3. Authentic Company Origin & Expansion (OUR STORY / OUR JOURNEY) */}
      <OurStorySection />

      {/* 4. Three Core Divisions */}
      <DivisionCards />

      {/* 5. Gulf Career Acceleration & Multi-Platform Profile Optimization Suite */}
      <section className="py-24 bg-white border-t border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-3">
              <Globe className="w-3.5 h-3.5 text-vivid-blue" />
              <span>GULF CAREER ACCELERATION & PLATFORM MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-950 tracking-tight leading-tight">
              Targeting Opportunities in Dubai & the Gulf?
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              The GCC employment market demands specialized compliance: targeted ATS keywords, Gulf-standard formatting, and optimized visibility on Naukri Gulf, LinkedIn, and Indeed. ILM-ON bridges international talent with verified corporate opportunities.
            </p>
          </div>

          {/* 3 Dedicated Platform Cards: LinkedIn, Indeed, Naukri Gulf with Uncropped Full Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 1. LinkedIn Profile Optimization */}
            <div className="rounded-2xl border border-surface-border bg-surface-light overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group">
              <div>
                <div className="relative aspect-square w-full bg-slate-100 border-b border-surface-border p-2">
                  <Image
                    src="/assets/career-services/linkedin-profile-optimization.jpeg"
                    alt="LinkedIn Profile Optimization - ILM-ON Digital Solutions"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/20 mb-2.5">
                    GLOBAL RECRUITER NETWORK
                  </div>
                  <h3 className="text-lg font-bold text-dark-950">
                    LinkedIn Profile Optimization
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Transform your LinkedIn profile into an inbound recruiter magnet. Strategic headline crafting, keyword-rich &ldquo;About&rdquo; section, and algorithm ranking for executive headhunters worldwide.
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Search algorithm keyword engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Top 50 skills taxonomy alignment</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20LinkedIn%20Profile%20Optimization."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white font-bold text-xs text-center transition-colors block"
                >
                  Optimize LinkedIn Profile
                </a>
              </div>
            </div>

            {/* 2. Indeed Profile Optimization */}
            <div className="rounded-2xl border border-surface-border bg-surface-light overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group">
              <div>
                <div className="relative aspect-square w-full bg-slate-100 border-b border-surface-border p-2">
                  <Image
                    src="/assets/career-services/indeed-profile-optimization.jpeg"
                    alt="Indeed Profile Optimization - ILM-ON Digital Solutions"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#003A9B]/10 text-[#003A9B] border border-[#003A9B]/20 mb-2.5">
                    HIGH-VOLUME HIRING
                  </div>
                  <h3 className="text-lg font-bold text-dark-950">
                    Indeed Profile Optimization
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Designed for active job seekers looking for rapid responses on Indeed UAE, GCC, and International boards. Seamless resume parsing, assessment readiness, and keyword mapping.
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Direct resume parser compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Fast employer search match score</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20order%20Indeed%20Profile%20Optimization."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white font-bold text-xs text-center transition-colors block"
                >
                  Optimize Indeed Profile
                </a>
              </div>
            </div>

            {/* 3. Naukri Gulf Profile Optimization */}
            <div className="rounded-2xl border border-vivid-blue/40 ring-2 ring-vivid-blue/10 bg-surface-light overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group">
              <div>
                <div className="relative aspect-square w-full bg-slate-100 border-b border-surface-border p-2">
                  <Image
                    src="/assets/career-services/naukri-profile-optimization.jpeg"
                    alt="Naukri Gulf Profile Optimization - ILM-ON Digital Solutions"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-teal-light text-teal-dark border border-teal-accent/20 mb-2.5">
                    GULF & GCC SPECIALIZED
                  </div>
                  <h3 className="text-lg font-bold text-dark-950">
                    Naukri Gulf Profile Optimization
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Tailored specifically for the UAE, Saudi Arabia, and Qatar markets. Engineered by UAE certified HR specialists to rank in the top 5% of GCC recruiter searches.
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>GCC Visa status & location prominence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                      <span>Naukri algorithm 2x search appearance boost</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="https://wa.me/971562528518?text=Hello%20ILM-ON%20Dubai%20Desk,%20I%20want%20to%20order%20Naukri%20Gulf%20Profile%20Optimization."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-vivid-blue hover:bg-vivid-hover text-white font-bold text-xs text-center transition-colors block shadow-sm"
                >
                  Optimize Naukri Gulf Profile
                </a>
              </div>
            </div>
          </div>

          {/* UAE Desk Hub Guarantee Box */}
          <div className="p-6 rounded-2xl bg-surface-light border border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-vivid-light text-vivid-blue flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-dark-950">Official UAE Corporate Presence & Career Advisory</div>
                <div className="text-xs text-slate-500">Dubai Desk: +971 562528518 • In-house guidance by Moh&apos;d Sanif (Naukri Certified HR Specialist UAE)</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/recruitment"
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-dark-950 hover:bg-vivid-blue text-white transition-colors"
              >
                Explore Gulf Recruitment
              </Link>
              <a
                href="https://wa.me/971562528518?text=Hello%20ILM-ON%20Dubai%20Desk,%20I%20need%20Gulf%20career%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-dark-950 border border-surface-border hover:bg-slate-100 transition-all flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-vivid-blue" />
                <span>Dubai Desk WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Authentic Panoramic Studio Feature: WE BUILD CAREERS NOT JUST CVS */}
      <section className="py-20 bg-surface-light border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-surface-border shadow-elevated bg-dark-950">
            {/* Panoramic Banner */}
            <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[480px]">
              <Image
                src="/assets/hero/we-build-careers-banner.png"
                alt="WE BUILD CAREERS NOT JUST CVS - ILM-ON Digital Solutions Team Banner"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent lg:hidden" />
            </div>

            {/* Bottom Content Bar */}
            <div className="p-8 sm:p-10 bg-dark-950 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-blue/20 text-vivid-blue border border-vivid-blue/30 mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>THE ILM-ON PHILOSOPHY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  We Build Careers, <span className="text-vivid-blue">Not Just CVs.</span>
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  A resume is not just a document—it is your personal corporate brand, your gateway to executive tier interviews, and the foundation to switching on your full potential.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/career-services"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold bg-vivid-blue hover:bg-vivid-blue/90 text-white text-center transition-all shadow-md"
                >
                  View CV Packages
                </Link>
                <Link
                  href="/pricing"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white text-center border border-white/15 transition-all"
                >
                  Explore Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Team & Leadership (Authentic Real Portraits) */}
      <TeamSection />

      {/* 7. Verified Social Proof & Real Client Testimonials */}
      <TestimonialSection />

      {/* 8. Final Corporate Closing CTA */}
      <section className="py-24 bg-dark-950 text-white relative overflow-hidden border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-blue/20 text-vivid-blue border border-vivid-blue/30 mb-6">
            <span>SWITCH ON YOUR POTENTIAL TODAY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Stop Sending Unread Resumes. <br />
            <span className="text-vivid-blue">Start Landing Executive Interviews.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect directly with ILM-ON specialists in Dubai and India. Receive an honest assessment of your current CV, corporate staffing requirements, or digital marketing growth strategy.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Digital%20Solutions,%20I%20would%20like%20to%20review%20my%20CV%20and%20switch%20on%20my%20potential."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-vivid-blue hover:bg-vivid-blue/90 text-white shadow-lg transition-all"
            >
              <span>Instant WhatsApp Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
            >
              <span>View Packages & Pricing</span>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="text-center sm:text-left">
              <div className="text-xs uppercase font-bold text-slate-400">Kerala, India Desk</div>
              <div className="text-sm font-semibold text-white mt-1">+91 9292940652</div>
              <div className="text-[11px] text-slate-500">+91 9526240652</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xs uppercase font-bold text-slate-400">Dubai, UAE Desk</div>
              <div className="text-sm font-semibold text-white mt-1">+971 562528518</div>
              <div className="text-[11px] text-slate-500">GCC Support & Advisory</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xs uppercase font-bold text-slate-400">Official Email</div>
              <div className="text-sm font-semibold text-white mt-1">info@ilmondigitalsolutions.online</div>
              <div className="text-[11px] text-slate-500">24-hour response SLA</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
