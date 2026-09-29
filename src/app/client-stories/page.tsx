'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Play, Pause, ShieldCheck, MessageSquare, Volume2, ArrowRight, CheckCircle2, Award } from 'lucide-react';

const fullReviews = [
  {
    name: 'Mohamed Faizal Villan',
    role: 'Operations & Site Manager',
    company: 'Tier-1 Engineering Firm, UAE',
    text: '“I had applied for multiple positions over 6 months with zero responses. Within 4 days of sending out the new ATS CV from ILM-ON, I received interview invites from two major firms in Dubai. Forwarded their contact to three of my colleagues immediately.”',
    rating: 5,
    tag: 'ATS Optimization',
  },
  {
    name: 'Akhila Rajan',
    role: 'Senior Financial Analyst',
    company: 'GCC Banking & Finance',
    text: '“Got a second call for interview today with my new resume! Thank you ILM-ON team for the fast turnaround and outstanding professionalism. The phrasing and format made a huge difference.”',
    rating: 5,
    tag: 'International Format',
  },
  {
    name: 'Ameer Abbas',
    role: 'Digital Marketing Strategist',
    company: 'Riyadh, Saudi Arabia',
    text: '“The complete career branding package completely transformed my LinkedIn presence. Recruiters from top Gulf firms started reaching out to me directly without me even submitting applications.”',
    rating: 5,
    tag: 'Complete Branding',
  },
  {
    name: 'Soufian Mohamad',
    role: 'Supply Chain Specialist',
    company: 'Logistics Group, Dubai',
    text: '“Extremely professional team. They understood the nuances of the Gulf market and how to properly frame my certifications and bilingual experience.”',
    rating: 5,
    tag: 'Gulf Career',
  },
  {
    name: 'Mohammad Sarkar',
    role: 'Mechanical Project Engineer',
    company: 'Industrial Sector, Abu Dhabi',
    text: '“Fast delivery within hours just as promised. The ATS formatting was immaculate and the cover letter was tailored specifically to my target companies.”',
    rating: 5,
    tag: 'Within Hours Delivery',
  },
  {
    name: 'Renuka HR',
    role: 'Human Resources Business Partner',
    company: 'Corporate Services',
    text: '“As an HR professional myself, I can vouch for the caliber of their work. They know exactly how ATS algorithms parse content and what hiring managers look for in the first 5 seconds.”',
    rating: 5,
    tag: 'HR Endorsement',
  },
];

export default function ClientStoriesPage() {
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);

  const toggleAudio = (index: number) => {
    const audioEl = document.getElementById(`client-audio-${index}`) as HTMLAudioElement;
    if (!audioEl) return;

    if (playingAudio === index) {
      audioEl.pause();
      setPlayingAudio(null);
    } else {
      if (playingAudio !== null) {
        const prev = document.getElementById(`client-audio-${playingAudio}`) as HTMLAudioElement;
        if (prev) prev.pause();
      }
      audioEl.play();
      setPlayingAudio(index);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      {/* 1. Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal-dark border border-teal-accent/20 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>REAL STORIES • VERIFIED PROOF</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-950 tracking-tight">
            Client Success Stories & <br />
            <span className="text-vivid-blue">Verified Feedback.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real WhatsApp conversations, candidate voice notes, and verified testimonials from professionals who advanced their careers with ILM-ON Digital Solutions.
          </p>
        </div>
      </section>

      {/* 2. Unfiltered WhatsApp Feedback Screenshots */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              DIRECT VERIFICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-950 mt-1">
              Unfiltered WhatsApp Feedback
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Direct screenshots sent by candidates after receiving their interview invitations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 rounded-2xl bg-white border border-surface-border shadow-card">
              <div className="relative h-80 w-full rounded-xl overflow-hidden bg-slate-50">
                <Image
                  src="/assets/reviews/client-feedback-interview-selection.jpeg"
                  alt="WhatsApp Interview Selection Verification"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 p-3 rounded-xl bg-surface-light border border-surface-border text-center text-xs text-slate-700 font-medium">
                “Selected for both interviews... forwarding your number to a friend”
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-surface-border shadow-card">
              <div className="relative h-80 w-full rounded-xl overflow-hidden bg-slate-50">
                <Image
                  src="/assets/reviews/client-feedback-second-call.jpeg"
                  alt="WhatsApp Second Interview Call Verification"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 p-3 rounded-xl bg-surface-light border border-surface-border text-center text-xs text-slate-700 font-medium">
                “Got second call for interview now That too with my new resume... Touch wood”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Audio Voice Notes Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-surface-border p-8 shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="w-5 h-5 text-vivid-blue" />
            <h3 className="text-lg font-bold text-dark-950 uppercase tracking-wider">Candidate Audio Voice Notes</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Click play to listen to real candidate voice feedback regarding our CV quality and turnaround speed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-surface-light border border-surface-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleAudio(1)}
                  className="w-10 h-10 rounded-full bg-vivid-blue text-white flex items-center justify-center hover:bg-vivid-blue/90 transition-all shadow-sm"
                  aria-label="Play voice note 1"
                >
                  {playingAudio === 1 ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div>
                  <div className="text-xs font-bold text-dark-950">Client Voice Note #1</div>
                  <div className="text-[11px] text-slate-500">“The CV has a very premium touch”</div>
                </div>
              </div>
              <audio id="client-audio-1" src="/assets/reviews/audio-review-premium-touch-1.mp4" onEnded={() => setPlayingAudio(null)} />
            </div>

            <div className="p-4 rounded-2xl bg-surface-light border border-surface-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleAudio(2)}
                  className="w-10 h-10 rounded-full bg-vivid-blue text-white flex items-center justify-center hover:bg-vivid-blue/90 transition-all shadow-sm"
                  aria-label="Play voice note 2"
                >
                  {playingAudio === 2 ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div>
                  <div className="text-xs font-bold text-dark-950">Client Voice Note #2</div>
                  <div className="text-[11px] text-slate-500">“Instant recruiter calls received”</div>
                </div>
              </div>
              <audio id="client-audio-2" src="/assets/reviews/audio-review-premium-touch-2.mp4" onEnded={() => setPlayingAudio(null)} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Client Review Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-vivid-blue">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mt-1">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullReviews.map((rev, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-surface-border shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-accent bg-teal-light px-2.5 py-0.5 rounded-full border border-teal-accent/20">
                      {rev.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    {rev.text}
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border">
                  <div className="font-bold text-dark-950 text-sm">{rev.name}</div>
                  <div className="text-xs text-slate-500">{rev.role}</div>
                  <div className="text-[11px] text-vivid-blue font-medium mt-0.5">{rev.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-dark-950 text-white p-8 sm:p-12 shadow-elevated text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Experience the Same Transformation?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Send us your current CV on WhatsApp for a quick, complimentary preliminary assessment from our specialists.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20would%20like%20a%20preliminary%20review%20of%20my%20CV."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold bg-vivid-blue hover:bg-vivid-blue/90 text-white shadow-md transition-all"
            >
              <span>Instant WhatsApp Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
            >
              <span>View Packages & Pricing</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
