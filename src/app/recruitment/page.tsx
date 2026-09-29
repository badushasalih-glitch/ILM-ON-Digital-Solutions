'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Briefcase,
  Building2,
  Globe2,
  PhoneCall,
  Clock,
  Check,
  AlertCircle,
} from 'lucide-react';

const corporateBenefits = [
  {
    title: 'Pre-Screened Candidates',
    desc: 'Every candidate undergoes CV verification, competency screening, and communication evaluation prior to employer presentation.',
  },
  {
    title: 'Fast Shortlisting',
    desc: 'Receive qualified, vetted candidate profiles matched to your job description within 48 to 72 hours.',
  },
  {
    title: 'Replacement Guarantee',
    desc: 'Structured recruitment service terms with corporate replacement protection for complete hiring security.',
  },
  {
    title: 'MOHRE & GCC Labor Guidance',
    desc: 'Advisory on UAE Ministry of Human Resources & Emiratisation (MOHRE) norms, visa formalities, and market compensation.',
  },
];

export default function RecruitmentPage() {
  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      {/* 1. Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal-dark border border-teal-accent/20 mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>DIVISION 02 • RECRUITMENT SOLUTIONS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-950 tracking-tight">
            Gulf & India Talent Sourcing. <br />
            <span className="text-teal-accent">Ethical Recruitment Support & Advisory.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connecting ambitious job seekers with verified hiring enterprises across Dubai, Abu Dhabi, Saudi Arabia, and India under clear, transparent terms.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/971562528518?text=Hello%20ILM-ON%20Dubai%20Desk,%20we%20have%20corporate%20hiring%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold bg-dark-950 hover:bg-teal-accent text-white shadow-md transition-all"
            >
              <span>For Employers: Hire Talent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20want%20to%20submit%20my%20CV%20for%20vacancies."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold bg-white text-dark-950 border border-surface-border hover:bg-slate-50 transition-all shadow-sm"
            >
              <span>For Candidates: Submit CV (Free)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Visual Corporate Photography Feature (Replaces Video Player) */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Boardroom Consultation Image */}
            <div className="lg:col-span-7">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-surface-border shadow-elevated bg-slate-100">
                <Image
                  src="/assets/recruitment/recruiter-consultation.jpg"
                  alt="ILM-ON Corporate Boardroom Interview & Recruitment Consultation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                  <div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-accent text-white mb-2 inline-block">
                      Executive Sourcing
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Structured Talent Vetting & Placement Advisory
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-lg">
                      Every candidate is thoroughly interviewed to assess technical capability, communication fluency, and cultural compatibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Candidate Screening Interview Image */}
            <div className="lg:col-span-5">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-surface-border shadow-elevated bg-slate-100">
                <Image
                  src="/assets/recruitment/candidate-interview.jpg"
                  alt="ILM-ON One-on-One Candidate Interview & Assessment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                  <div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-vivid-blue text-white mb-2 inline-block">
                      Candidate Guidance
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      1-on-1 Interview Preparation
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Targeted guidance on Gulf interview etiquette, compensation expectations, and technical presentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Candidate Zero-Upfront Fee Charter */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-teal-accent/30 bg-teal-light/40 p-6 sm:p-10 shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-accent text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-dark">
                  TRANSPARENT CANDIDATE GUARANTEE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-950">
                  Zero Upfront Registration or Placement Fees
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  ILM-ON operates with strict ethical integrity. We never ask candidates to pay for job applications, interview calls, or profile registration.
                </p>
                <div className="p-4 rounded-xl bg-white border border-teal-accent/20 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  <strong>Fee Structure: </strong>
                  Our recruitment consultancy fee is <strong>20% of your first month salary</strong>, payable strictly <strong>AFTER</strong> you are hired, complete joining formalities, and receive your very first salary from the employer. If you do not get hired, you owe us nothing.
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>We provide recruitment support and employer connections. Final hiring decisions rest with the prospective employer.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Certified HR Leadership Spotlight (Moh'd Sanif) */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-y border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative h-[440px] w-full rounded-3xl overflow-hidden border border-surface-border bg-slate-50 shadow-card">
                <Image
                  src="/assets/team/mohd-sanif.png"
                  alt="Moh'd Sanif - Naukri Certified HR Specialist UAE"
                  fill
                  className="object-contain object-bottom"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-accent text-white shadow-sm">
                    <Award className="w-3.5 h-3.5" /> Certified HR Professional UAE
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20">
                <Award className="w-3.5 h-3.5" />
                <span>EXPERT GULF RECRUITMENT BENCHMARK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 tracking-tight leading-tight">
                Direct Insight Into What Gulf Employers Demand
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Hiring practices in Dubai, Abu Dhabi, Doha, and Riyadh operate under specialized commercial frameworks. Through certified HR mastery on Naukri Gulf, LinkedIn Recruiter, and local portals, we ensure candidate alignment and corporate efficiency.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-surface-border">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-dark-950">Specialized Role Headhunting</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Locating qualified technical, commercial, engineering, and sales talent across GCC hubs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-surface-border">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-dark-950">Corporate Recruitment SLAs</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Formal corporate staffing terms with verified screening criteria and replacement protections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-surface-border">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-dark-950">Gulf Salary & Visa Advisory</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Guiding job seekers through cost-of-living standards, tax-free compensation packages, and work visa processes.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/971562528518?text=Hello%20Moh'd%20Sanif,%20I%20would%20like%20to%20consult%20regarding%20Gulf%20recruitment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold bg-dark-950 hover:bg-vivid-blue text-white transition-all shadow-sm"
                >
                  <PhoneCall className="w-4 h-4 text-teal-accent" />
                  <span>Direct UAE Desk: +971 562528518</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. For Employers vs For Job Seekers Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Employers */}
            <div className="rounded-2xl bg-white border border-surface-border p-8 flex flex-col justify-between shadow-card hover:shadow-elevated transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-vivid-light text-vivid-blue flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-vivid-blue block mb-1">
                  CORPORATE PARTNERSHIP
                </span>
                <h3 className="text-2xl font-extrabold text-dark-950 mb-3">For Corporate Employers</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Access a pre-screened talent pipeline ready for deployment in the UAE, GCC, or India. We handle sourcing, resume verification, and initial technical screening.
                </p>

                <div className="space-y-3 mb-8">
                  {corporateBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-dark-950">{b.title}:</strong> {b.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/971562528518?text=Hello%20ILM-ON%20Recruitment,%20we%20have%20corporate%20hiring%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-dark-950 hover:bg-vivid-blue text-white font-bold text-xs text-center block transition-colors shadow-sm"
              >
                Request Corporate Staffing Proposal
              </a>
            </div>

            {/* For Job Seekers */}
            <div className="rounded-2xl bg-white border border-surface-border p-8 flex flex-col justify-between shadow-card hover:shadow-elevated transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-light text-teal-accent flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-accent block mb-1">
                  CAREER MOBILITY
                </span>
                <h3 className="text-2xl font-extrabold text-dark-950 mb-3">For Job Seekers</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Looking to build a professional career in the Gulf or India? Get your profile evaluated, localized for regional ATS standards, and introduced to genuine openings.
                </p>

                <div className="space-y-3 mb-8 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                    <span>Free preliminary CV review and Gulf readiness check</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                    <span>Inclusion in our active candidate database for corporate openings</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                    <span>Interview preparation and cultural expectations coaching</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                    <span>Zero upfront fee; 20% consultancy fee payable only after first salary</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20would%20like%20to%20submit%20my%20CV%20for%20vacancies."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-teal-accent hover:bg-teal-accent/90 text-white font-bold text-xs text-center block transition-colors shadow-sm"
              >
                Submit CV to Talent Pool (Free)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
