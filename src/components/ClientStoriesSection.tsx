'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MessageSquareQuote,
  Play,
  Pause,
  Instagram,
  Star,
  ShieldCheck,
  CheckCircle2,
  Volume2,
} from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

interface ClientFeedback {
  id: string;
  clientName: string;
  role: string;
  location: string;
  service: string;
  feedbackText: string;
  rating: number;
}

const CLIENT_REVIEWS: ClientFeedback[] = [
  {
    id: 'rev-1',
    clientName: 'Client A. M.',
    role: 'Senior Project Engineer',
    location: 'Dubai, UAE',
    service: 'ATS-Friendly CV + Naukri Gulf Optimization',
    feedbackText:
      'The formatting difference was night and day. Within 10 days of uploading the optimized CV and Naukri Gulf profile, I received direct callback calls from two UAE tier-1 contractors. Highly professional team.',
    rating: 5,
  },
  {
    id: 'rev-2',
    clientName: 'Client R. K.',
    role: 'Financial Analyst',
    location: 'Riyadh, Saudi Arabia',
    service: 'Executive CV + Strategic Cover Letter',
    feedbackText:
      'Extremely thorough consultation. They took the time to understand my specific finance background and translated it into quantifiable achievements. Very fast turnaround.',
    rating: 5,
  },
  {
    id: 'rev-3',
    clientName: 'Client S. N.',
    role: 'Staff Registered Nurse',
    location: 'Kochi, India to UK Relocation',
    service: 'Europass Standard CV + Cover Letter',
    feedbackText:
      'Smooth and supportive process. The Europass layout was structured exactly to NHS and EU standards. The team answered all my questions via WhatsApp promptly.',
    rating: 5,
  },
  {
    id: 'rev-4',
    clientName: 'Client N. P.',
    role: 'Operations & Logistics Manager',
    location: 'Abu Dhabi, UAE',
    service: 'GCC Job Seeker Package',
    feedbackText:
      'The Dubai desk guidance was invaluable. They clearly explained how Gulf recruiters filter visa status and notice periods. Excellent personal communication throughout.',
    rating: 5,
  },
];

export default function ClientStoriesSection() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleAswathyAudio = () => {
    const audioEl = document.getElementById('aswathy-audio-player') as HTMLAudioElement;
    if (!audioEl) return;

    if (isPlayingAudio) {
      audioEl.pause();
      setIsPlayingAudio(false);
    } else {
      audioEl.play().catch(() => setIsPlayingAudio(false));
      setIsPlayingAudio(true);
    }
  };

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-surface-light border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>GENUINE CLIENT EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060814] tracking-tight leading-tight">
            Real Candidates. <br className="hidden sm:inline" />
            <span className="text-[#0284F5]">Honest Career Trajectories.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Read direct feedback from professionals across India, UAE, and the GCC who upgraded their career presentation with ILM-ON. Client names are anonymized to protect personal confidentiality.
          </p>
        </div>

        {/* 2-Column Showcase: Media Spotlight & Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column (5 Cols): Voice Note & Verified Video Reel */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1. Voice Note Card (Click-to-Play Only, Preload None) */}
            <div className="p-6 rounded-2xl bg-white border border-vivid-blue/30 ring-2 ring-vivid-blue/10 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-teal-light text-teal-dark border border-teal-accent/20">
                  <Volume2 className="w-3 h-3 text-teal-accent" />
                  <span>VERIFIED AUDIO FEEDBACK</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <h4 className="text-base font-bold text-dark-950">
                Aswathy Ashish — Voice Review
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                ATS-Friendly CV, Cover Letter & LinkedIn Profile Optimization
              </p>

              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-surface-border flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleAswathyAudio}
                    className="w-12 h-12 rounded-xl bg-vivid-blue hover:bg-vivid-hover text-white flex items-center justify-center transition-all shadow-sm shrink-0"
                    aria-label="Play audio review"
                  >
                    {isPlayingAudio ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5" />
                    )}
                  </button>
                  <div>
                    <div className="text-xs font-bold text-dark-950">
                      {isPlayingAudio ? 'Playing Voice Feedback...' : 'Listen to Audio Review'}
                    </div>
                    <div className="text-[11px] text-slate-500">Click to listen • 0 KB preloaded</div>
                  </div>
                </div>
                <audio
                  id="aswathy-audio-player"
                  src="/assets/reviews/Aswathy ashish client Feedback for ATS friendly CV, Cover Letter and Linkedin profile optimization.mp4"
                  preload="none"
                  onEnded={() => setIsPlayingAudio(false)}
                />
              </div>

              <p className="text-xs text-slate-600 mt-4 italic leading-relaxed">
                &ldquo;Thank you ILM-ON team for the timely delivery and clear resume format. The LinkedIn makeover was especially helpful for recruiters noticing my profile.&rdquo;
              </p>
            </div>

            {/* 2. Video Reel Showcase (Preload None) */}
            <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-card">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-dark-950">Candidate Review Reel</span>
                </div>
                <span className="text-[11px] text-teal-accent font-bold">Client Video Feedback</span>
              </div>

              <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full bg-slate-900 border border-surface-border">
                <video
                  src="/assets/reviews/verified-clients-reel.mp4"
                  controls
                  playsInline
                  preload="none"
                  className="w-full h-full object-contain bg-slate-900"
                  poster="/assets/reviews/client-showcase-three-models-optimized.jpg"
                />
              </div>
              <p className="mt-3 text-[11px] text-slate-500 text-center">
                Authentic candidate and professional reviews from UAE, GCC, and India clients.
              </p>
            </div>
          </div>

          {/* Right Column (7 Cols): 4 Real Review Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {CLIENT_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-white border border-surface-border shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Location */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {review.location}
                    </span>
                  </div>

                  {/* Feedback Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    &ldquo;{review.feedbackText}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-xs font-bold text-dark-950 flex items-center gap-1.5">
                    <span>{review.clientName}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-accent" />
                  </div>
                  <div className="text-[11px] text-slate-500">{review.role}</div>
                  <div className="text-[10px] text-vivid-blue font-medium mt-0.5">
                    {review.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Verification Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-dark-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-elevated">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Follow @ilmon_digitalsolutions on Instagram
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Client feedback stories, career updates, and ATS tips updated weekly.
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/ilmon_digitalsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-dark-950 font-bold text-xs inline-flex items-center gap-2 transition-colors shrink-0 shadow-sm"
          >
            <span>View Instagram Stories</span>
            <Instagram className="w-3.5 h-3.5 text-rose-600" />
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-[11px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
          *Individual career outcomes, interview callbacks, and hiring selections depend on industry hiring cycles, employer requirements, and individual candidate background. ILM-ON provides professional document optimization and advisory.
        </div>
      </div>
    </section>
  );
}
