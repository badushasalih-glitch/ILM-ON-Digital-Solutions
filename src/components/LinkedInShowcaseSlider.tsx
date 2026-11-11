'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Linkedin,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Eye,
  X,
  Sparkles,
  TrendingUp,
  Search,
  CheckCircle2,
  MessageCircle,
  Briefcase,
  Award,
} from 'lucide-react';

export interface LinkedInProfileDemo {
  id: string;
  name: string;
  initials: string;
  role: string;
  location: string;
  connections: string;
  headline: string;
  statusBadge: string;
  aboutSnippet: string;
  experienceSnippet: {
    title: string;
    company: string;
    period: string;
    bullets: string[];
  };
  skills: string[];
  metrics: {
    searchAppearances: string;
    recruiterViews: string;
    profileRating: string;
  };
}

const DEMO_PROFILES: LinkedInProfileDemo[] = [
  {
    id: 'profile-1',
    name: 'Alexander Vance',
    initials: 'AV',
    role: 'Senior Project & Operations Director',
    location: 'Dubai, United Arab Emirates',
    connections: '500+ Connections',
    headline:
      'Senior Project Manager | PMP® | Operations Turnaround Leader | Capital Budgeting & Cross-Border Delivery across GCC & International Markets',
    statusBadge: 'Open to Senior Leadership',
    aboutSnippet:
      'Performance-driven Operations Executive with 9+ years steering engineering, infrastructure, and commercial portfolios across the GCC. Proven track record eliminating bottleneck delays and restructuring cross-functional teams to achieve operational excellence and streamlined delivery.',
    experienceSnippet: {
      title: 'Senior Operations Director',
      company: 'Apex Global Solutions • Dubai, UAE',
      period: '2021 – Present',
      bullets: [
        'Directed regional engineering operations, streamlining multi-discipline workflows and project delivery turnaround.',
        'Built and led cross-functional engineering and procurement teams aligned with GCC compliance standards.',
      ],
    },
    skills: ['P&L Management', 'Agile Project Governance', 'Enterprise ERP', 'GCC Regional Strategy', 'Risk Mitigation'],
    metrics: {
      searchAppearances: 'Executive Taxonomy',
      recruiterViews: 'Recruiter-Aligned',
      profileRating: 'Recruiter-Aligned Structure',
    },
  },
  {
    id: 'profile-2',
    name: 'Priya Ramesh',
    initials: 'PR',
    role: 'Head of Data Analytics & BI Governance',
    location: 'Bangalore, India • GCC Remote',
    connections: '500+ Connections',
    headline:
      'Head of Business Intelligence & Data Science | Enterprise Data Architecture | FinTech & Cloud Transformation | Driving Measurable ROI via Predictive Analytics',
    statusBadge: 'Open to Executive Roles',
    aboutSnippet:
      'Lead Data Strategist translating complex petabyte-scale data lakes into board-level strategic decisions. Spearheaded predictive modeling pipelines across leading banking and payment platforms in India and MENA.',
    experienceSnippet: {
      title: 'Director of Business Intelligence',
      company: 'Quantis Financial Technologies',
      period: '2020 – Present',
      bullets: [
        'Engineered real-time automated analytics dashboard serving 120+ senior business stakeholders.',
        'Improved customer retention intelligence through behavioral segmentation models and automated reporting workflows.',
      ],
    },
    skills: ['Data Architecture', 'Snowflake / BigQuery', 'Executive BI', 'Predictive Modeling', 'Team Leadership'],
    metrics: {
      searchAppearances: 'FinTech Keywords',
      recruiterViews: 'Recruiter-Aligned',
      profileRating: 'Recruiter-Aligned Structure',
    },
  },
  {
    id: 'profile-3',
    name: 'Omar Al-Mansoor',
    initials: 'OM',
    role: 'Director of Global Supply Chain & EPC Procurement',
    location: 'Riyadh, Kingdom of Saudi Arabia',
    connections: '500+ Connections',
    headline:
      'Global Supply Chain & Strategic Procurement Director | EPC Mega-Projects | Aramco & GCC Vendor Compliance | Multi-Million Cost Optimization',
    statusBadge: 'Open to Regional Director Roles',
    aboutSnippet:
      'Supply chain authority with 12+ years optimizing tier-1 procurement networks for industrial megaprojects across Saudi Arabia and the UAE. Master of strategic sourcing, tariff mitigation, and supplier risk governance.',
    experienceSnippet: {
      title: 'Regional Head of Sourcing & EPC Logistics',
      company: 'Saudi Infrastructure Consortium • Riyadh',
      period: '2019 – Present',
      bullets: [
        'Negotiated master service agreements across international vendor networks, optimizing contract terms and mitigating supply-chain risk.',
        'Structured fully automated vendor audit pipeline ensuring strict compliance with Aramco safety standards.',
      ],
    },
    skills: ['Strategic Sourcing', 'EPC Contracting', 'Vendor Management', 'Cost Optimization', 'Supply Chain Governance'],
    metrics: {
      searchAppearances: 'EPC & Aramco Scope',
      recruiterViews: 'GCC Recruiter Aligned',
      profileRating: 'Recruiter-Aligned Structure',
    },
  },
  {
    id: 'profile-4',
    name: 'Sara Jenkins',
    initials: 'SJ',
    role: 'Lead Healthcare Quality & Clinical Operations Specialist',
    location: 'Doha, Qatar',
    connections: '500+ Connections',
    headline:
      'Clinical Operations Leader | JCI Hospital Accreditation | Healthcare Quality & Patient Safety Director | Driving Multi-Facility Clinical Excellence',
    statusBadge: 'Open to Medical Director Roles',
    aboutSnippet:
      'Healthcare administrator dedicated to hospital quality standards, clinical safety frameworks, and international JCI accreditations across GCC tertiary hospital networks.',
    experienceSnippet: {
      title: 'Director of Quality & Patient Safety',
      company: 'Hamad Medical Network Affiliate • Doha',
      period: '2018 – Present',
      bullets: [
        'Led facility through 3 consecutive JCI gold seal accreditations with zero compliance conditions.',
        'Standardized clinical workflow protocols across multi-facility hospital networks, improving patient safety reporting and quality audit readiness.',
      ],
    },
    skills: ['JCI Accreditation', 'Clinical Governance', 'Healthcare Risk Management', 'Patient Safety', 'Facility Operations'],
    metrics: {
      searchAppearances: 'JCI Clinical Scope',
      recruiterViews: 'Board-Level Aligned',
      profileRating: 'Recruiter-Aligned Structure',
    },
  },
];

export default function LinkedInShowcaseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalProfile, setActiveModalProfile] = useState<LinkedInProfileDemo | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Responsive items-per-view
  useEffect(() => {
    function updateItemsPerView() {
      if (window.innerWidth >= 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(1.5);
      } else {
        setItemsPerView(1.15); // Peek effect on mobile
      }
    }
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, Math.ceil(DEMO_PROFILES.length - Math.floor(itemsPerView)));

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(distance) > 40) {
      if (distance > 0) handleNext();
      else handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Autoplay with IntersectionObserver and prefers-reduced-motion check
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let observer: IntersectionObserver | null = null;
    let isVisible = true;

    if (containerRef.current && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0.25 }
      );
      observer.observe(containerRef.current);
    }

    const interval = setInterval(() => {
      if (!isPaused && isVisible && !activeModalProfile) {
        handleNext();
      }
    }, 5500);

    return () => {
      clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, [isPaused, activeModalProfile, handleNext]);

  // Modal Escape key dismissal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalProfile) {
        setActiveModalProfile(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProfile]);

  const offsetPercentage = currentIndex * (100 / itemsPerView);

  return (
    <section
      id="linkedin-showcase"
      ref={containerRef}
      className="py-20 sm:py-24 bg-white border-t border-surface-border relative overflow-hidden"
      aria-label="LinkedIn Profile Optimization Interactive Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0A66C2] border border-blue-200 mb-3">
              <Linkedin className="w-3.5 h-3.5 fill-[#0A66C2]" />
              <span>ILLUSTRATIVE PROFILE ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 tracking-tight">
              Make Your Professional Presence <br className="hidden sm:inline" />
              <span className="text-[#0A66C2]">Work for You.</span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Browse illustrative profile blueprints showing how our career consultants structure headlines, narrative summaries, and core competencies to improve recruiter search alignment.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              onClick={handlePrev}
              aria-label="Previous profile sample"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-surface-border flex items-center justify-center text-slate-700 hover:text-dark-950 hover:bg-slate-100 transition-colors shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next profile sample"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-surface-border flex items-center justify-center text-slate-700 hover:text-dark-950 hover:bg-slate-100 transition-colors shadow-xs active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translate3d(-${offsetPercentage}%, 0, 0)`,
            }}
          >
            {DEMO_PROFILES.map((profile) => {
              const whatsappUrl =
                'https://wa.me/919292940652?text=' +
                encodeURIComponent(
                  `Hello ILM-ON, I would like to optimize my LinkedIn Profile similar to the ${profile.role} showcase.`
                );

              return (
                <div
                  key={profile.id}
                  className="shrink-0 px-2.5 sm:px-3 w-[87%] sm:w-[65%] lg:w-[50%]"
                >
                  <div className="bg-slate-50/70 rounded-2xl border border-slate-200/90 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col h-full overflow-hidden group">
                    {/* LinkedIn Card Header Banner */}
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-[#004182] via-[#0A66C2] to-[#0073b1] relative px-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-white/90 text-xs font-bold">
                        <Linkedin className="w-4 h-4 fill-white" />
                        <span>Executive Profile Architecture</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-white/20 text-white backdrop-blur-xs border border-white/25">
                        {profile.metrics.profileRating}
                      </span>
                    </div>

                    {/* Profile Identity Bar */}
                    <div className="p-5 sm:p-6 pt-0 relative flex-grow flex flex-col justify-between bg-white">
                      <div>
                        <div className="flex items-end justify-between -mt-8 sm:-mt-10 mb-4">
                          {/* Avatar */}
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-900 text-white font-black text-lg sm:text-xl flex items-center justify-center border-4 border-white ring-2 ring-[#0A66C2] shadow-lg shrink-0">
                            {profile.initials}
                          </div>

                          {/* Quick Inspect Button */}
                          <button
                            onClick={() => setActiveModalProfile(profile)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#0A66C2] border border-slate-200 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Full Deep Dive</span>
                          </button>
                        </div>

                        {/* Name & Headline */}
                        <div className="mb-4">
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-lg sm:text-xl font-black text-dark-950">
                              {profile.name}
                            </h3>
                            <ShieldCheck className="w-4 h-4 text-[#0A66C2]" />
                            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 ml-1">
                              ● {profile.statusBadge}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">
                            {profile.location} • {profile.connections}
                          </div>

                          {/* Recruiter-Magnetic Headline Box */}
                          <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-[13px] text-slate-800 font-semibold leading-relaxed">
                            {profile.headline}
                          </div>
                        </div>

                        {/* Optimization Metrics Bar */}
                        <div className="grid grid-cols-2 gap-2.5 mb-4 p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-center">
                          <div>
                            <div className="text-[10px] uppercase font-bold text-slate-500">
                              Search Visibility
                            </div>
                            <div className="text-sm font-black text-[#0A66C2]">
                              {profile.metrics.searchAppearances}
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold text-slate-500">
                              Recruiter Engagement
                            </div>
                            <div className="text-sm font-black text-dark-950">
                              {profile.metrics.recruiterViews}
                            </div>
                          </div>
                        </div>

                        {/* About Section Snippet */}
                        <div className="mb-4">
                          <div className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-[#0A66C2]" />
                            <span>Narrative About Preview</span>
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                            {profile.aboutSnippet}
                          </p>
                        </div>

                        {/* Key Skills Taxonomy */}
                        <div className="mb-4">
                          <div className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-1.5 flex items-center gap-1.5">
                            <Award className="w-3 h-3 text-[#0A66C2]" />
                            <span>Algorithm-Ranked Skills</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {profile.skills.slice(0, 4).map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                        <button
                          onClick={() => setActiveModalProfile(profile)}
                          className="text-xs font-bold text-slate-600 hover:text-[#0A66C2] inline-flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Mockup</span>
                        </button>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0A66C2] hover:bg-[#004182] text-white transition-colors shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Optimize My Profile</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to profile slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-[#0A66C2]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* =========================================================================
          LINKEDIN PROFILE INSPECTION MODAL (Lightbox)
          ========================================================================= */}
      {activeModalProfile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-linkedin-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalProfile(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto border border-white/20 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Banner */}
            <div className="h-24 bg-gradient-to-r from-[#004182] to-[#0A66C2] relative px-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Linkedin className="w-5 h-5 fill-white" />
                <span>LinkedIn Profile Architecture Deep Dive</span>
              </div>
              <button
                onClick={() => setActiveModalProfile(null)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-dark-950/60 hover:bg-dark-950 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 pt-0">
              {/* Profile Avatar Bar */}
              <div className="flex items-end justify-between -mt-12 mb-4">
                <div className="w-20 h-20 rounded-full bg-slate-900 text-white font-black text-2xl flex items-center justify-center border-4 border-white ring-2 ring-[#0A66C2] shadow-lg">
                  {activeModalProfile.initials}
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  ● {activeModalProfile.statusBadge}
                </span>
              </div>

              {/* Identity */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <h3
                    id="modal-linkedin-title"
                    className="text-2xl font-black text-dark-950"
                  >
                    {activeModalProfile.name}
                  </h3>
                  <ShieldCheck className="w-5 h-5 text-[#0A66C2]" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {activeModalProfile.location} • {activeModalProfile.connections}
                </div>

                <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 leading-relaxed">
                  {activeModalProfile.headline}
                </div>
              </div>

              {/* Narrative About */}
              <div className="mb-6">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>Executive About Section (Complete Narrative)</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed p-4 rounded-xl bg-slate-50 border border-slate-200">
                  {activeModalProfile.aboutSnippet}
                </p>
              </div>

              {/* Experience Section */}
              <div className="mb-6">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>Quantified Work Experience Highlight</span>
                </h4>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between text-xs font-bold text-dark-950">
                    <span>{activeModalProfile.experienceSnippet.title}</span>
                    <span className="text-slate-500 font-normal">
                      {activeModalProfile.experienceSnippet.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#0A66C2] mb-2">
                    {activeModalProfile.experienceSnippet.company}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeModalProfile.experienceSnippet.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <span className="text-[#0A66C2] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>Top Ranked Core Competencies</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProfile.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-[#0A66C2] border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href={
                    'https://wa.me/919292940652?text=' +
                    encodeURIComponent(
                      `Hello ILM-ON, I would like to order LinkedIn Profile Optimization for the ${activeModalProfile.role} profile level.`
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0A66C2] hover:bg-[#004182] text-white shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Order LinkedIn Optimization on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
