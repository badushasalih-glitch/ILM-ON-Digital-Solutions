'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Play, Pause, Volume2, ShieldCheck, CheckCircle2 } from 'lucide-react';

const clientStories = [
  {
    name: 'Mohamed Faizal Villan',
    role: 'Operations & Project Manager',
    location: 'Dubai, UAE',
    text: '“Selected for both interviews within 4 days of sending the new ILM-ON ATS CV. The keyword optimization and clean structure made an immediate difference.”',
    rating: 5,
    tag: 'ATS CV & LinkedIn',
  },
  {
    name: 'Akhila Rajan',
    role: 'Financial Analyst',
    location: 'Qatar / UAE',
    text: '“Got a second call for interview today with my new resume! Thank you ILM-ON team for the fast turnaround and outstanding professionalism.”',
    rating: 5,
    tag: 'International Format',
  },
  {
    name: 'Ameer Abbas',
    role: 'Senior Digital Marketer',
    location: 'Saudi Arabia',
    text: '“The complete career branding package completely transformed my profile. Recruiters from top Gulf firms started reaching out on LinkedIn directly.”',
    rating: 5,
    tag: 'Complete Branding',
  },
];

export default function TestimonialSection() {
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);

  const toggleAudio = (index: number) => {
    const audioEl = document.getElementById(`audio-player-${index}`) as HTMLAudioElement;
    if (!audioEl) return;

    if (playingAudio === index) {
      audioEl.pause();
      setPlayingAudio(null);
    } else {
      if (playingAudio !== null) {
        const prev = document.getElementById(`audio-player-${playingAudio}`) as HTMLAudioElement;
        if (prev) prev.pause();
      }
      audioEl.play();
      setPlayingAudio(index);
    }
  };

  return (
    <section className="py-24 bg-surface-light border-t border-surface-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal-dark border border-teal-accent/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>REAL RESULTS • AUTHENTIC FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-950 tracking-tight">
            Proof of Excellence in Every Trajectory
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Real WhatsApp conversations, direct audio feedback, and verified placements from candidates and corporate clients across the UAE, GCC, and India.
          </p>
        </div>

        {/* Video Reel + Verified WhatsApp Feedback Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Video Reel: 6 Verified Clients */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-surface-border p-6 overflow-hidden shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-accent animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-dark-950">Client Showcase Reel</span>
              </div>
              <span className="text-[11px] text-teal-accent font-bold">Verified Feedback</span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] max-h-[500px] w-full mx-auto bg-white border border-surface-border shadow-inner">
              <video
                src="/assets/reviews/verified-clients-reel.mp4"
                controls
                playsInline
                className="w-full h-full object-contain bg-white"
                poster="/assets/reviews/client-showcase-three-models.png"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-600 font-medium">
                Verified candidate and executive reviews from UAE, GCC, and International placements.
              </p>
            </div>
          </div>

          {/* WhatsApp Screenshots & Audio Reviews */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase font-bold tracking-wider text-vivid-blue mb-1">
              Direct WhatsApp Conversations
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden bg-white border border-surface-border shadow-card p-3">
                <div className="relative h-64 w-full rounded-xl overflow-hidden bg-slate-50">
                  <Image
                    src="/assets/reviews/client-feedback-interview-selection.jpeg"
                    alt="Client WhatsApp feedback: Selected for both interviews"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-3 text-[11px] text-slate-700 text-center font-medium">
                  “Selected for both interviews... forwarding your number to a friend”
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white border border-surface-border shadow-card p-3">
                <div className="relative h-64 w-full rounded-xl overflow-hidden bg-slate-50">
                  <Image
                    src="/assets/reviews/client-feedback-second-call.jpeg"
                    alt="Client WhatsApp feedback: Got second call for interview"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-3 text-[11px] text-slate-700 text-center font-medium">
                  “Got second call for interview now That too with my new resume... Touch wood”
                </div>
              </div>
            </div>

            {/* Audio Voice Notes */}
            <div className="mt-6 rounded-2xl bg-white border border-surface-border p-5 shadow-card">
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className="w-4 h-4 text-vivid-blue" />
                <span className="text-xs font-bold text-dark-950 uppercase tracking-wider">
                  Listen to Candidate Voice Notes
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Hear candidate testimonials on the &ldquo;premium touch&rdquo; and immediate recruiter response after receiving their ILM-ON ATS resume.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Voice note 1 */}
                <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleAudio(1)}
                      className="w-9 h-9 rounded-full bg-vivid-blue text-white flex items-center justify-center hover:bg-vivid-blue/90 transition-all shadow-sm"
                      aria-label="Play Voice Review 1"
                    >
                      {playingAudio === 1 ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <div>
                      <div className="text-xs font-bold text-dark-950">Voice Note #1</div>
                      <div className="text-[10px] text-slate-500">“The CV has a very premium touch”</div>
                    </div>
                  </div>
                  <audio id="audio-player-1" src="/assets/reviews/audio-review-premium-touch-1.mp4" onEnded={() => setPlayingAudio(null)} />
                </div>

                {/* Voice note 2 */}
                <div className="p-3.5 rounded-xl bg-surface-light border border-surface-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleAudio(2)}
                      className="w-9 h-9 rounded-full bg-vivid-blue text-white flex items-center justify-center hover:bg-vivid-blue/90 transition-all shadow-sm"
                      aria-label="Play Voice Review 2"
                    >
                      {playingAudio === 2 ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <div>
                      <div className="text-xs font-bold text-dark-950">Voice Note #2</div>
                      <div className="text-[10px] text-slate-500">“Instant recruiter calls received”</div>
                    </div>
                  </div>
                  <audio id="audio-player-2" src="/assets/reviews/audio-review-premium-touch-2.mp4" onEnded={() => setPlayingAudio(null)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Written Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientStories.map((story, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-surface-border shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(story.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-accent bg-teal-light px-2.5 py-0.5 rounded-full border border-teal-accent/20">
                    {story.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  {story.text}
                </p>
              </div>
              <div className="pt-4 border-t border-surface-border">
                <div className="font-bold text-dark-950 text-sm">{story.name}</div>
                <div className="text-xs text-slate-500">{story.role} • {story.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
