'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, User, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Badusha Salih',
    title: 'Founder & CEO',
    division: 'Executive Strategy & Global Operations',
    description:
      'Directing the vision of ILM-ON Digital Solutions with 5+ years of corporate sales, marketing, and business growth expertise to empower candidates and companies worldwide.',
    image: '/assets/team/badusha-salih-founder.png',
  },
  {
    name: 'Fathima',
    title: 'Co-Founder & Partner',
    division: 'Talent Acquisition & Operational Quality',
    description:
      'Overseeing talent acquisition quality, workflow standards, and candidate delivery pipelines to ensure all career and recruitment solutions meet international standards.',
    image: '/assets/team/fathima-co-founder.png',
  },
  {
    name: 'Mohamed Sanif',
    title: 'HR Specialist',
    division: 'Talent Sourcing & Candidate Screening',
    description:
      'Guiding candidates on Gulf-standard CV formatting and assisting corporate employers with candidate sourcing, screening, and interview coordination across India and the GCC.',
    image: '/assets/team/mohamed-sanif-hr.png',
  },
];

const commitments = [
  {
    title: 'Client-Centric Solutions',
    desc: 'Each career profile and digital project is customized directly to the candidate’s or company’s specific goals.',
  },
  {
    title: 'Honest Advisory',
    desc: 'Transparent guidance with realistic career expectations and no exaggerated or guaranteed job claims.',
  },
  {
    title: 'Quality & Timeliness',
    desc: 'Fast delivery—within 1 working day for standard CV orders—with clean formatting and editable source files.',
  },
  {
    title: 'Professional Support',
    desc: 'Direct communication via WhatsApp and phone across our India and UAE operational desks.',
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
            LEADERSHIP & VALUES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-950 mt-2">
            The Vision Behind ILM-ON
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A dedicated team combining corporate strategy, human resource advisory, and digital marketing expertise.
          </p>
        </div>

        {/* Clean Natural Portraits - No Heavy Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-surface-border/80 rounded-2xl p-5 flex flex-col justify-between shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div>
                {/* Natural Frameless Portrait Presentation */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-50 mb-5">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    fill
                    className="object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                    priority={index === 0}
                  />
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-vivid-blue block">
                    {member.title}
                  </span>
                  <h3 className="text-xl font-extrabold text-dark-950">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 pb-2 border-b border-slate-100">
                    {member.division}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                    {member.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>ILM-ON Leadership</span>
                <span className="text-vivid-blue font-semibold">Dubai & India</span>
              </div>
            </div>
          ))}
        </div>

        {/* Our Commitments */}
        <div className="bg-surface-light border border-surface-border rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-accent">
              OUR COMMITMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-dark-950 mt-1">
              Guiding Principles of Our Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((c, i) => (
              <div key={i} className="p-5 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-teal-light text-teal-accent flex items-center justify-center mb-3">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-dark-950 mb-1">{c.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
