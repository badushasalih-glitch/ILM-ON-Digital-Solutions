'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Briefcase,
  Search,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Building2,
  FileCheck,
  Send,
  Sparkles,
  ShieldCheck,
  Check,
  Award,
  Globe2,
  Instagram,
  Linkedin,
  MessageSquare,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import CandidatesHiredSlider from '@/components/CandidatesHiredSlider';

const recruitmentServices = [
  {
    title: 'Recruitment & Talent Sourcing',
    desc: 'Targeted sourcing across pre-vetted regional and international talent pipelines to match your organizational culture and skill benchmarks.',
    icon: Search,
  },
  {
    title: 'Candidate Screening & Shortlisting',
    desc: 'Multi-layer candidate screening assessing professional background, technical competencies, verifiable track record, and communication aptitude.',
    icon: UserCheck,
  },
  {
    title: 'Job Vacancy Promotion',
    desc: 'Strategic commercial positioning of your open requisitions across verified industry networks and targeted talent communities.',
    icon: Briefcase,
  },
  {
    title: 'Employer–Candidate Coordination',
    desc: 'Professional facilitation of clear expectation management, mutual requirement alignment, and transparent documentation between both parties.',
    icon: Users,
  },
  {
    title: 'Interview Coordination',
    desc: 'End-to-end scheduling, technical briefing, candidate prep, and structured interview panel coordination for seamless hiring loops.',
    icon: FileCheck,
  },
  {
    title: 'India & GCC Job Opportunities',
    desc: 'Cross-border hiring advisory connecting Gulf corporations in Dubai, Abu Dhabi, Doha, and Riyadh with premier executive talent.',
    icon: Globe2,
  },
];

const recruitmentApproach = [
  {
    step: '01',
    title: 'Understand',
    desc: 'We understand the employer’s hiring requirements, role expectations, and candidate profile.',
  },
  {
    step: '02',
    title: 'Source',
    desc: 'We identify and attract suitable candidates through targeted recruitment and job promotion.',
  },
  {
    step: '03',
    title: 'Screen',
    desc: 'We review candidate profiles and assess their experience, skills, and suitability for the role.',
  },
  {
    step: '04',
    title: 'Shortlist',
    desc: 'We present relevant candidates who match the requirements of the position.',
  },
  {
    step: '05',
    title: 'Connect',
    desc: 'We coordinate communication and interviews between employers and shortlisted candidates.',
  },
  {
    step: '06',
    title: 'Support',
    desc: 'We assist with follow-ups throughout the recruitment process and maintain professional communication with both sides.',
  },
];

const recruitmentPosters = [
  { id: 1, src: '/assets/recruitment/posters/1.png', label: 'Talent Acquisition & Advisory' },
  { id: 2, src: '/assets/recruitment/posters/2.png', label: 'Connecting Talent with Opportunity' },
  { id: 3, src: '/assets/recruitment/posters/3.png', label: 'Verified Recruitment Framework' },
  { id: 4, src: '/assets/recruitment/posters/4.png', label: 'Candidate Screening & Sourcing' },
  { id: 5, src: '/assets/recruitment/posters/5.png', label: 'Executive Search & Placement' },
  { id: 6, src: '/assets/recruitment/posters/6.png', label: 'Gulf Enterprise Talent Network' },
  { id: 7, src: '/assets/recruitment/posters/7.png', label: 'India & GCC Opportunities' },
];

export default function RecruitmentPage() {
  const [activeModalSample, setActiveModalSample] = useState<string | null>(null);
  const [activePosterIdx, setActivePosterIdx] = useState(0);

  return (
    <div className="pt-24 pb-20 bg-surface-light min-h-screen text-dark-950 overflow-x-hidden">
      {/* 1. Hero Header — Official ILM-ON Recruitment Sub-Brand */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative overflow-hidden bg-white border-b border-surface-border">
        {/* Subtle teal background aura */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-teal-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Brand Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Division Badge & Official Sub-Brand Relationship */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-600 text-white shadow-xs">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>DIVISION 02 • TALENT SOURCING &amp; ADVISORY</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  A Dedicated Division of ILM-ON Digital Solutions
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark-950 tracking-tight leading-[1.08]">
                  Connecting Talent <br />
                  <span className="text-teal-600">with Opportunity.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 font-medium">
                  Recruitment solutions connecting businesses with suitable professionals across India &amp; GCC.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                We connect talented professionals with the right career opportunities and help businesses find the right people for their teams. Through a structured, transparent recruitment process, we build lasting connections between employers and qualified talent.
              </p>

              {/* CTAs & Social Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Recruitment,%20we%20have%20a%20hiring%20requirement%20for%20our%20company."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md transition-all hover:scale-[1.02]"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Submit Hiring Requirement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Recruitment,%20I%20am%20a%20candidate%20looking%20for%20opportunities%20in%20India%20/%20GCC."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold bg-white text-dark-950 border border-surface-border hover:bg-slate-50 transition-all shadow-sm"
                >
                  <Users className="w-4 h-4 text-teal-600" />
                  <span>Explore Opportunities</span>
                </a>

                <div className="flex items-center gap-2 pl-2">
                  <a
                    href="https://www.instagram.com/ilmon_digitalsolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow ILM-ON on Instagram"
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-600 border border-slate-200 flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ilm-on-digital-solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with ILM-ON on LinkedIn"
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-600 border border-slate-200 flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Official Recruitment Logo & Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="p-8 sm:p-10 rounded-3xl bg-dark-950 text-white border border-teal-500/20 shadow-elevated relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-36 h-36 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Official Recruitment Logo Graphic */}
                  <div className="relative h-16 w-56 bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center justify-center">
                    <Image
                      src="/assets/brand/ILM ON Recruitment OFFICIAL Logo.png"
                      alt="ILM-ON Recruitment Official Logo"
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block mb-1">
                      EXECUTIVE SEARCH &amp; STAFFING
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      Connecting Talent with Opportunity
                    </h3>
                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                      Structured candidate sourcing, screening, and interview coordination across Dubai, Abu Dhabi, Doha, Riyadh, and India.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Certified HR leadership with verified GCC mastery</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Strict compliance with Gulf labor &amp; hiring standards</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Fast shortlisting &amp; structured employer coordination</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>India &bull; UAE &bull; GCC Requisitions</span>
                  <span className="font-bold text-teal-400">ILM-ON Recruitment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Dual Audiences: For Employers & For Job Seekers */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Employers */}
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-light border border-surface-border hover:border-teal-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-1">
                  FOR CORPORATIONS &amp; EMPLOYERS
                </span>
                <h3 className="text-2xl font-black text-dark-950 mb-3">
                  Hire Vetted Professionals Fast
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Share your hiring requirements with us and let our recruitment team help you find suitable candidates with verified competencies, background alignment, and cultural readiness.
                </p>
                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Precise candidate profile and salary benchmarking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Multi-stage candidate screening &amp; preliminary interviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Interview coordination and follow-up support</span>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Recruitment,%20we%20want%20to%20hire%20candidates%20for%20our%20company."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Share Hiring Requirement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* For Job Seekers */}
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-light border border-surface-border hover:border-vivid-blue/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-vivid-light text-vivid-blue flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue block mb-1">
                  FOR AMBITIOUS PROFESSIONALS
                </span>
                <h3 className="text-2xl font-black text-dark-950 mb-3">
                  Discover Relevant GCC Opportunities
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Discover relevant career opportunities and get connected with potential employers across India, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.
                </p>
                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vivid-blue shrink-0" />
                    <span>Targeted matching based on your real skills &amp; experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vivid-blue shrink-0" />
                    <span>Direct coordination with verified hiring managers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-vivid-blue shrink-0" />
                    <span>Guidance on GCC workplace culture &amp; interview prep</span>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Recruitment,%20I%20am%20seeking%20new%20job%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-vivid-blue hover:bg-vivid-blue/90 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Connect with Recruiter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Six-Step Recruitment Approach */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              Our 6-Step Recruitment Approach
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our recruitment process is designed to create a simple, transparent, and structured connection between employers and candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recruitmentApproach.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-white border border-surface-border hover:border-teal-500/40 shadow-xs transition-all relative overflow-hidden"
              >
                <div className="text-3xl font-black text-teal-100 font-mono mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-dark-950 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Story, Mission & Commitment */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Our Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-600 border border-teal-200">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>OUR STORY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 tracking-tight">
                Built to Connect the Right Talent with the Right Opportunities.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ILM-ON Recruitment was created with a simple purpose: to connect the right talent with the right opportunities. Our journey began with experience in recruitment, HR, sales, and professional career support. Through our work with job seekers and businesses, we saw how difficult it can be for talented professionals to find suitable opportunities and for employers to find the right candidates.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                What started with helping individuals explore job opportunities and improve their career prospects gradually grew into a broader recruitment vision. Today, ILM-ON Recruitment focuses on connecting employers with suitable talent through a structured approach to job promotion, candidate sourcing, screening, shortlisting, and interview coordination.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <div className="text-[11px] font-bold uppercase tracking-wider text-teal-600 mb-1">
                  OUR JOURNEY
                </div>
                <span>Experience &rarr; Connections &rarr; Recruitment &rarr; Opportunities &rarr; Growth</span>
              </div>
            </div>

            {/* Right Column: Mission & Commitment */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-600 border border-teal-200">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>OUR COMMITMENT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 tracking-tight">
                Quality Matching, Respect &amp; Transparency.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    num: '01',
                    title: 'Quality Matching',
                    desc: 'Understanding job requirements and identifying candidates who align with the role.',
                  },
                  {
                    num: '02',
                    title: 'Professional Service',
                    desc: 'Clear, respectful, and professional communication with candidates and employers.',
                  },
                  {
                    num: '03',
                    title: 'Structured Recruitment',
                    desc: 'Systematic workflow from sourcing and screening to interview coordination.',
                  },
                  {
                    num: '04',
                    title: 'Candidate Focus',
                    desc: 'Helping professionals discover opportunities aligned with their career goals.',
                  },
                  {
                    num: '05',
                    title: 'Employer Support',
                    desc: 'Making hiring organized by helping businesses reach relevant talent.',
                  },
                  {
                    num: '06',
                    title: 'Trust & Transparency',
                    desc: 'Honest communication and responsible handling of all information.',
                  },
                ].map((item) => (
                  <div key={item.num} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-xs font-bold font-mono text-teal-600 block mb-1">
                      {item.num} • {item.title}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-xs sm:text-sm text-teal-950 leading-relaxed font-medium">
                <strong className="text-teal-700">OUR PROMISE:</strong> We don’t just connect people with jobs — we strive to create connections that can grow into successful careers and lasting professional relationships.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose ILM-ON? */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              WHY ILM-ON RECRUITMENT?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              Structured, Transparent, and People-Focused.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We connect businesses with relevant talent while helping professionals discover opportunities aligned with their skills and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                title: 'Right Talent, Relevant Opportunities',
                desc: 'Connecting candidates with roles that match their skills, experience, and career goals.',
              },
              {
                num: '2',
                title: 'Focused Candidate Sourcing',
                desc: 'Identifying and sourcing candidates based on the specific requirements of each position.',
              },
              {
                num: '3',
                title: 'Employer & Candidate Support',
                desc: 'Maintaining professional communication and coordination throughout the recruitment process.',
              },
              {
                num: '4',
                title: 'Simple & Structured Process',
                desc: 'From vacancy promotion to candidate shortlisting and interview coordination, we keep it organized.',
              },
              {
                num: '5',
                title: 'Wider Opportunity Network',
                desc: 'Connecting professionals with corporate opportunities across India and all six GCC nations.',
              },
              {
                num: '6',
                title: 'Built Around People',
                desc: 'Recruitment is not just about filling vacancies. It’s about creating connections that lead to meaningful opportunities.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-white border border-surface-border hover:border-teal-500/40 shadow-xs transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 font-bold font-mono text-sm flex items-center justify-center mb-3">
                  0{item.num}
                </div>
                <h3 className="text-base font-bold text-dark-950 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Core Philosophy Quote */}
          <div className="mt-12 max-w-3xl mx-auto text-center p-8 rounded-3xl bg-white border border-surface-border shadow-xs">
            <p className="text-base sm:text-lg font-bold text-dark-950 italic leading-relaxed">
              &ldquo;The right opportunity is not just about finding a job, it’s about finding where your talent truly belongs.&rdquo;
            </p>
            <div className="mt-3 text-xs font-bold text-teal-600 uppercase tracking-widest">
              ILM-ON RECRUITMENT • CONNECTING TALENT WITH OPPORTUNITY
            </div>
          </div>
        </div>
      </section>

      {/* 6. Official Recruitment Visual Showcase (7 Visual Posters) */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              OFFICIAL VISUAL SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              ILM-ON Recruitment Visual Campaign
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Browse our official recruitment series highlighting verified sourcing workflows, employer coordination, and candidate placement standards.
            </p>
          </div>

          {/* Responsive Grid with Aspect Ratio 3375:4219 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {recruitmentPosters.map((poster) => (
              <div
                key={poster.id}
                onClick={() => setActiveModalSample(poster.src)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-surface-border bg-slate-50 shadow-xs hover:shadow-card hover:border-teal-500/40 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[3375/4219] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={poster.src}
                    alt={`ILM-ON Recruitment Poster ${poster.id} - ${poster.label}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white/90 text-dark-950 shadow-md">
                      <Eye className="w-4 h-4 text-teal-600" />
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-white border-t border-surface-border">
                  <div className="text-[11px] font-bold text-dark-950 line-clamp-1">
                    {poster.label}
                  </div>
                  <div className="text-[10px] text-teal-600 font-semibold mt-0.5">
                    Click to view full graphic &rarr;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GCC Companies & Employers Carousel */}
      <CandidatesHiredSlider />

      {/* 8. Comprehensive Services Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              SERVICES SCOPE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              End-to-End Recruitment Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Structured hiring advisory designed for corporate efficiency, compliance, and long-term candidate retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recruitmentServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-surface-border hover:border-teal-500/40 shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-dark-950 mb-2">{svc.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-teal-600 border-t border-slate-100 pt-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified candidate pipeline</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-dark-950 text-white p-8 sm:p-12 shadow-elevated text-center relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-400 border border-teal-500/30 mb-4">
            RECRUITMENT &bull; INDIA &amp; GCC
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            The Right Opportunity Could Be Your Next Connection.
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Connect with ILM-ON Recruitment today. Whether you have hiring requirements or are exploring your next executive move across India and the GCC, our team is ready to assist.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Recruitment,%20I%20would%20like%20to%20connect%20regarding%20recruitment%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
            >
              <span>Contact Recruitment Desk</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Recruitment Posters */}
      <AnimatePresence>
        {activeModalSample && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalSample(null)}
          >
            <div 
              className="relative max-w-2xl max-h-[92vh] aspect-[3375/4219] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalSample(null)}
                type="button"
                aria-label="Close Preview"
                className="absolute -top-12 right-0 sm:-right-12 sm:top-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
              >
                <X className="w-5 h-5" />
              </button>

              <Image
                src={activeModalSample}
                alt="ILM-ON Recruitment Sample"
                fill
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
