'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, ArrowRight, Eye, CheckCircle2, Shield, Globe, FileText, Users, Megaphone } from 'lucide-react';

const portfolioItems = [
  {
    title: 'ATS Executive Model - Operations Management',
    category: 'Career Services',
    candidate: 'Mohamed Faizal Villan',
    description: 'Restructured multi-year operational management experience into high-density ATS keyword modules tailored for Gulf tier-1 EPC contractors.',
    image: '/assets/career-services/ats-sample-faizal.jpeg',
    results: 'Selected for 2 corporate interviews within 96 hours of submission.',
  },
  {
    title: 'ATS Corporate & Media Executive Model',
    category: 'Career Services',
    candidate: 'Estelle Darcy',
    description: 'Clean, modern executive structure highlighting portfolio links, digital campaign metrics, and bilingual communication proficiency.',
    image: '/assets/career-services/ats-sample-estelle.jpeg',
    results: 'Passed Taleo & Workday ATS scans with complete parsing fidelity.',
  },
  {
    title: 'Multi-Platform Profile Optimization Suite',
    category: 'Career Services & Profiling',
    candidate: 'Naukri Gulf, LinkedIn & Indeed',
    description: 'End-to-end digital profile configuration. Algorithmic headline optimization, recruiter search keyword alignment, and verified badge setup.',
    image: '/assets/career-services/about-profile-optimization.jpeg',
    results: 'Top-tier ranking in regional recruiter search results.',
  },
  {
    title: 'Multi-Jurisdiction Compliance Portfolio',
    category: 'International Formats',
    candidate: 'Canada, NZ, Europe, GCC, India',
    description: 'Country-specific resumes customized for local immigration scoring, work visa requirements, and labor market norms.',
    image: '/assets/career-services/ats-global-flags-banner.jpeg',
    results: 'Aligned with official Europass, Canadian, and GCC recruiting formats.',
  },
  {
    title: 'Corporate Digital Marketing & Campaign Creative',
    category: 'Digital Growth',
    candidate: 'Meta Ad & Social Media Creative',
    description: 'Professional visual creative architecture, audience funnel design, and multi-channel campaign branding for commercial enterprises.',
    image: '/assets/marketing/team-work-studio.jpg',
    results: 'Consistent engagement and direct WhatsApp business lead routing.',
  },
  {
    title: 'Corporate Recruitment & Talent Sourcing Mandate',
    category: 'Recruitment Solutions',
    candidate: 'Executive Boardroom Interviewing',
    description: 'Pre-screening, technical validation, and candidate coordination for specialized vacancies across UAE and Indian enterprises.',
    image: '/assets/recruitment/recruiter-consultation.jpg',
    results: 'Structured candidate pipeline with zero upfront candidate fee.',
  },
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PORTFOLIO & WORK SHOWCASE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-950 tracking-tight">
            Verified Deliverables. <br />
            <span className="text-vivid-blue">Structured with Precision.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore authentic samples of our ATS resume transformations, digital profile configurations, and corporate marketing campaigns.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white border border-surface-border overflow-hidden flex flex-col justify-between transition-all shadow-card hover:shadow-elevated hover:-translate-y-1"
              >
                <div>
                  <div
                    onClick={() => setSelectedImage(item.image)}
                    className="cursor-pointer relative h-64 w-full bg-slate-100 overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-white text-dark-950 font-bold text-xs shadow-md flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" /> Click to Enlarge
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-vivid-blue bg-vivid-light px-2.5 py-1 rounded-full border border-vivid-blue/20">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-dark-950 mt-3 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="p-3 rounded-xl bg-surface-light border border-surface-border text-xs text-teal-accent font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-accent" />
                      <span>{item.results}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20saw%20your%20portfolio%20and%20want%20to%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-surface-light hover:bg-dark-950 text-slate-700 hover:text-white font-bold text-xs text-center block transition-colors border border-surface-border hover:border-transparent"
                  >
                    Order Similar Deliverable
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-2xl p-4 overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between pb-3 border-b border-surface-border">
              <span className="text-xs font-bold text-dark-950">Portfolio Asset Inspection</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-3 py-1 rounded-lg bg-surface-light hover:bg-slate-200 text-dark-950 text-xs font-bold transition-colors"
              >
                Close (ESC)
              </button>
            </div>
            <div className="relative h-[80vh] w-full mt-2">
              <Image
                src={selectedImage}
                alt="Enlarged Portfolio Preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
