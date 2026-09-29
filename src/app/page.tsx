import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimationCanvas from '@/components/ScrollAnimationCanvas';
import DivisionCards from '@/components/DivisionCards';
import TeamSection from '@/components/TeamSection';
import TestimonialSection from '@/components/TestimonialSection';
import { ArrowRight, CheckCircle2, Shield, Globe, Sparkles, Building2, MapPin, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-surface-light">
      {/* 1. Cinematic Scroll Canvas Experience (240 Frames) */}
      <ScrollAnimationCanvas />

      {/* 2. Global Metric Trust Bar */}
      <section className="bg-surface-light border-y border-surface-border py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-card text-center transition-transform hover:-translate-y-0.5 duration-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-vivid-blue tracking-tight">
                1,200+
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-600 mt-2">
                ATS Resumes Delivered
              </div>
              <div className="text-[11px] text-slate-400 mt-1">International Standard</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-card text-center transition-transform hover:-translate-y-0.5 duration-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-vivid-blue tracking-tight">
                98.4%
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-600 mt-2">
                Interview Shortlist Rate
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Verified Candidate Feedback</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-card text-center transition-transform hover:-translate-y-0.5 duration-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-accent tracking-tight">
                350+
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-600 mt-2">
                Gulf & Global Placements
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Dubai • Abu Dhabi • India</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-card text-center transition-transform hover:-translate-y-0.5 duration-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-dark-950 tracking-tight">
                4.9 / 5.0
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-600 mt-2">
                Verified Candidate Rating
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Over 850+ Direct Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Core Divisions */}
      <DivisionCards />

      {/* 4. Gulf Career Acceleration Showcase (Static Corporate Imagery - No Video Player) */}
      <section className="py-24 bg-white border-t border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20">
                <Globe className="w-3.5 h-3.5 text-vivid-blue" />
                <span>GULF CAREER ACCELERATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-950 tracking-tight leading-tight">
                Targeting Opportunities in Dubai & the Gulf?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                The GCC employment market demands specialized compliance: targeted ATS keywords, Gulf-standard formatting, and optimized visibility on Naukri Gulf, LinkedIn, and Indeed. ILM-ON bridges international talent with verified corporate opportunities across UAE, Saudi Arabia, and Qatar.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-surface-border">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-dark-950 text-sm block">Multi-Platform Profile Optimization</span>
                    <span className="text-xs text-slate-600">Full visibility tuning for Naukri Gulf, LinkedIn, and Indeed UAE algorithms.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-surface-border">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-dark-950 text-sm block">UAE Certified HR Guidance</span>
                    <span className="text-xs text-slate-600">In-house guidance by Moh&apos;d Sanif (Naukri Certified HR Specialist UAE) on employment visas and market salary standards.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-surface-border">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-dark-950 text-sm block">Ethical Recruitment Support</span>
                    <span className="text-xs text-slate-600">100% free CV submission. Zero advance placement charges. 20% consultancy fee payable only after first salary upon joining.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/recruitment"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold bg-dark-950 text-white hover:bg-vivid-blue transition-colors shadow-sm"
                >
                  <span>Explore Gulf Recruitment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://wa.me/971562528518?text=Hello%20ILM-ON%20Dubai%20Desk,%20I%20am%20looking%20for%20career%20guidance%20in%20the%20Gulf."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold bg-white text-dark-950 border border-surface-border hover:bg-surface-light hover:border-slate-300 transition-all shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-vivid-blue" />
                  <span>Connect with Dubai Desk</span>
                </a>
              </div>
            </div>

            {/* Right Static Corporate Imagery Column (Replaces Video Player) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden border border-surface-border shadow-card bg-slate-50 group">
                  <div className="relative h-72 w-full">
                    <Image
                      src="/assets/career-services/about-profile-optimization.jpeg"
                      alt="ILM-ON Profile Optimization Platform Matrix"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-surface-border">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-vivid-blue block">Platform Matrix</span>
                    <h4 className="text-sm font-bold text-dark-950 mt-0.5">LinkedIn • Naukri Gulf • Indeed</h4>
                    <p className="text-xs text-slate-500 mt-1">Multi-channel algorithm keyword indexing.</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-surface-border shadow-card bg-slate-50 group sm:translate-y-6">
                  <div className="relative h-72 w-full">
                    <Image
                      src="/assets/career-services/naukri-profile-optimization.jpeg"
                      alt="ILM-ON Naukri Gulf Specialized Optimization"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-surface-border">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-accent block">Naukri Gulf Verified</span>
                    <h4 className="text-sm font-bold text-dark-950 mt-0.5">Recruiter Search Ranking</h4>
                    <p className="text-xs text-slate-500 mt-1">Rank in top 5% of GCC recruiter searches.</p>
                  </div>
                </div>
              </div>

              {/* UAE Desk Guarantee Box */}
              <div className="mt-8 p-5 rounded-2xl bg-surface-light border border-surface-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-vivid-blue shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-dark-950">Official UAE Corporate Presence</div>
                    <div className="text-[11px] text-slate-500">Dubai Desk: +971 562528518 • info@ilmondigitalsolutions.online</div>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-teal-light text-teal-dark border border-teal-accent/20">
                  Verified HR Support
                </span>
              </div>
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
