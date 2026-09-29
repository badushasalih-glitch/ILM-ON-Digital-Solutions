import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Target, Compass, Award, CheckCircle2, ArrowRight, Building2, MapPin } from 'lucide-react';

const coreValues = [
  {
    title: 'Results Driven',
    desc: 'We measure our success by tangible candidate and corporate outcomes—shortlisted interviews, placed talent, and sustainable digital inquiries.',
  },
  {
    title: 'Client Centricity',
    desc: 'No automated cookie-cutter templates. Every career roadmap and corporate advisory is tailored directly to the candidate or enterprise.',
  },
  {
    title: 'Algorithmic Precision',
    desc: 'Deep technical comprehension of ATS parsing systems (Workday, Taleo, Greenhouse, Naukri Gulf) and regional search engine ranking.',
  },
  {
    title: 'Radical Transparency',
    desc: 'Clear deliverables, honest career appraisals, and straightforward pricing without hidden registration or advance placement charges.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      {/* 1. Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>OUR MISSION & PURPOSE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-950 tracking-tight">
            We Build Careers, Not Just CVs. <br />
            <span className="text-vivid-blue">Powering International Trajectories.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded with the conviction that talent is universal but opportunity requires precision architecture. ILM-ON Digital Solutions empowers ambitious professionals and growing companies across Dubai, UAE, Saudi Arabia, and India.
          </p>
        </div>
      </section>

      {/* 2. Founder Story & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Studio Portrait */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-3xl overflow-hidden bg-slate-50 shadow-card">
                <Image
                  src="/assets/team/badusha-salih-founder.png"
                  alt="Badusha Salih - Founder & CEO ILM-ON Digital Solutions"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-dark-950 text-white shadow-sm">
                    Founder & CEO
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-surface-border shadow-sm">
                  <h3 className="text-lg font-bold text-dark-950">Badusha Salih</h3>
                  <p className="text-xs text-vivid-blue font-semibold">5+ Years Corporate Sales & Growth Strategy</p>
                </div>
              </div>
            </div>

            {/* Vision Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal-dark border border-teal-accent/20">
                <Target className="w-3.5 h-3.5" />
                <span>THE FOUNDER&apos;S VISION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 tracking-tight leading-tight">
                “Your Career Trajectory Should Never Be Limited by Outdated Documents.”
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                When Badusha Salih launched ILM-ON Digital Solutions, the mission was clear: millions of talented individuals across India, the Middle East, and beyond were being locked out of international job markets simply because their resumes failed algorithmic ATS filters or lacked executive framing.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Simultaneously, businesses in dynamic markets like Dubai were struggling to identify trustworthy talent and profitable advertising channels. ILM-ON was structured into three cohesive divisions—Career Services, Recruitment, and Digital Marketing—creating an authentic ecosystem that connects people, careers, and enterprise growth under one trusted banner.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-teal-accent font-bold">
                  <Award className="w-4 h-4" /> Government Registered (Udyam Verified)
                </div>
                <span>•</span>
                <div className="flex items-center gap-2 text-vivid-blue font-bold">
                  <MapPin className="w-4 h-4" /> Dual Operating Desks: Dubai & Kerala
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Authentic Leadership Trio Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-surface-border bg-white p-6 sm:p-10 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 grid grid-cols-3 gap-3">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-50 border border-surface-border/60">
                  <Image
                    src="/assets/team/badusha-salih-founder.png"
                    alt="Badusha Salih - Founder & CEO"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-dark-950/80 p-2 text-center text-[10px] text-white font-bold backdrop-blur-xs">
                    Badusha Salih
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-50 border border-surface-border/60">
                  <Image
                    src="/assets/team/fathima-co-founder.png"
                    alt="Fathima - Co-Founder & Partner"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-dark-950/80 p-2 text-center text-[10px] text-white font-bold backdrop-blur-xs">
                    Fathima
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-50 border border-surface-border/60">
                  <Image
                    src="/assets/team/mohamed-sanif-hr.png"
                    alt="Mohamed Sanif - HR Specialist"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-dark-950/80 p-2 text-center text-[10px] text-white font-bold backdrop-blur-xs">
                    Mohamed Sanif
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
                  CROSS-FUNCTIONAL EXPERTISE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-dark-950">
                  Multidisciplinary Leadership for Modern Markets
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our core team unites corporate business development, specialized talent acquisition, and certified UAE HR advisory. This ensures every resume, recruitment mandate, and digital ad strategy is grounded in real market standards.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span><strong>Badusha Salih:</strong> Founder & CEO — Growth Strategy & Marketing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span><strong>Fathima:</strong> Co-Founder & Partner — Talent Acquisition & Operations</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0" />
                    <span><strong>Mohamed Sanif:</strong> HR Specialist — Talent Sourcing & Screening</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white text-xs font-bold transition-colors"
                  >
                    <span>Meet the Full Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Non-Negotiable Commitments */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-y border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              OUR CODE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              Non-Negotiable Commitments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Principles grounded in client advocacy, speed, and genuine outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface-light border border-surface-border hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-vivid-light text-vivid-blue flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-dark-950 mb-2">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950">
            Ready to Switch On Your Potential?
          </h2>
          <p className="text-sm text-slate-600">
            Let us evaluate your current career positioning or corporate growth requirements.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20would%20like%20to%20discuss%20career%20or%20business%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl text-xs font-bold bg-vivid-blue hover:bg-vivid-blue/90 text-white shadow-md transition-all"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/pricing"
              className="px-7 py-3.5 rounded-xl text-xs font-bold bg-white text-dark-950 border border-surface-border hover:bg-slate-50 transition-all shadow-sm"
            >
              View Packages & Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
