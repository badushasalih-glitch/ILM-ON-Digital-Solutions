import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    name: 'Badusha Salih',
    role: 'Founder, Director & CEO',
    division: 'Executive Strategy & Global Operations',
    image: '/assets/team/badusha-salih-founder.png',
    location: 'Dubai, UAE & India',
    bio: 'Badusha Salih directs the global growth, strategic vision, and multidisciplinary expansion of ILM-ON Digital Solutions. With 5+ years of corporate sales, marketing, and business growth expertise, he founded ILM-ON to empower individuals and businesses with knowledge-driven solutions and sustainable growth.',
    highlights: [
      '5+ years in corporate sales, digital marketing, and business growth',
      'Expertise in digital content creation and personal career branding',
      'Extensive corporate partner network across UAE & GCC ecosystem',
      'Directing international recruitment consultancy standards',
    ],
    whatsapp: 'https://wa.me/919292940652?text=Hello%20Badusha%20Salih,%20I%20would%20like%20to%20connect%20with%20ILM-ON.',
  },
  {
    name: 'Fathima',
    role: 'Co-Founder & Partner',
    division: 'Talent Acquisition & Quality Assurance',
    image: '/assets/team/fathima-co-founder.png',
    location: 'Dubai, UAE & India',
    bio: 'Fathima oversees talent acquisition quality, workflow standards, and candidate delivery pipelines. Her meticulous eye for detail ensures every ATS resume, executive profile makeover, and recruitment deliverable adheres strictly to international benchmarks.',
    highlights: [
      'Talent acquisition screening and candidate onboarding systems',
      'Quality assurance oversight for all career profile deliverables',
      'Candidate support workflows ensuring fast 24-hour turnaround',
      'Seamless multi-desk coordination between India and Dubai',
    ],
    whatsapp: 'https://wa.me/919292940652?text=Hello%20Fathima,%20I%20would%20like%20to%20connect%20regarding%20career%20services.',
  },
  {
    name: 'Mohamed Sanif',
    role: 'HR Specialist',
    division: 'Talent Sourcing & Candidate Screening',
    image: '/assets/team/mohamed-sanif-hr.png',
    location: 'Dubai, United Arab Emirates',
    bio: 'Mohamed Sanif brings deep domain authority in Middle East human resources, corporate recruiting workflows, and Applicant Tracking System (ATS) algorithmic requirements. He leads candidate evaluations, corporate headhunting support, and GCC employment alignment.',
    highlights: [
      'Naukri Gulf, Indeed UAE, and LinkedIn recruiter platform optimization',
      'ATS algorithmic keyword benchmarking and candidate score elevation',
      'Candidate screening and interview preparation support for GCC roles',
      'Transparent consultancy fee protocol (zero upfront candidate fee)',
    ],
    whatsapp: 'https://wa.me/971562528518?text=Hello%20Mohamed%20Sanif,%20I%20would%20like%20to%20consult%20regarding%20Gulf%20recruitment.',
  },
];

export default function TeamPage() {
  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-900">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-blue-50 text-vivid-blue border border-blue-200 mb-6">
            <Users className="w-3.5 h-3.5" />
            <span>EXECUTIVE LEADERSHIP</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-dark-950 tracking-tight">
            Meet the Minds Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vivid-blue to-teal-accent">
              ILM-ON Digital Solutions.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our leadership combines corporate strategy, human resource advisory, and digital marketing expertise to help professionals and businesses realize their full potential.
          </p>
        </div>
      </section>

      {/* Leadership Cards - Clean Portrait Presentation Without Heavy Frames */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white border border-surface-border hover:border-vivid-blue/40 p-6 sm:p-10 transition-all shadow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Clean Portrait Presentation */}
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-[280px] rounded-2xl overflow-hidden bg-slate-50 shadow-sm">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
                      {member.division}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-dark-950 mt-1">
                      {member.name}
                    </h2>
                    <p className="text-sm font-semibold text-slate-500 mt-0.5">
                      {member.role} • <span className="text-teal-accent font-medium">{member.location}</span>
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-dark-950 mb-2.5">
                      Core Responsibilities & Highlights:
                    </h4>
                    <div className="space-y-2">
                      {member.highlights.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href={member.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-dark-950 text-white hover:bg-vivid-blue transition-all shadow-md"
                    >
                      <span>Connect on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Operating Principles */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-surface-border bg-white shadow-card p-8 sm:p-12 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
            DUAL OPERATIONAL HUBS
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-dark-950 mt-1 mb-4">
            Unified Execution Across India & the UAE
          </h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            With on-the-ground operational desks in Dubai and Kerala, ILM-ON bridges top candidate talent with verified corporate recruitment ecosystems across the GCC and international markets.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1.5 text-dark-950">
              <span className="w-2 h-2 rounded-full bg-teal-accent" />
              Dubai Desk: +971 56 252 8518
            </span>
            <span className="flex items-center gap-1.5 text-dark-950">
              <span className="w-2 h-2 rounded-full bg-vivid-blue" />
              India Desk: +91 9292940652
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              info@ilmondigitalsolutions.online
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
