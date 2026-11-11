'use client';

import React from 'react';
import { CheckCheck, Star, ShieldCheck } from 'lucide-react';

interface ChatReview {
  id: string;
  senderName: string;
  contextLabel: string;
  flag: string;
  time: string;
  message: string;
  serviceUsed: string;
}

const CHAT_REVIEWS: ChatReview[] = [
  {
    id: 'rev-rizwana',
    senderName: 'Rizwana V.',
    contextLabel: 'Client Feedback • WhatsApp',
    flag: '💬',
    time: '6:01 PM',
    message:
      'cv really worked very well. First day itself i got the call for interview. That too i was applying for that company past 4 months... Thank u so much',
    serviceUsed: 'ATS CV Service',
  },
  {
    id: 'rev-razak',
    senderName: 'Razak S.',
    contextLabel: 'Kuwait • Client Feedback',
    flag: '🇰🇼',
    time: '2:51 PM',
    message:
      "I'm working here in Kuwait. for cv they charge toomuch I will sure recommend my friends. Thank you so much",
    serviceUsed: 'ATS-Friendly CV & Cover Letter',
  },
  {
    id: 'rev-sarcar',
    senderName: 'Mohammad S.',
    contextLabel: 'Client Feedback • WhatsApp',
    flag: '💬',
    time: '8:15 PM',
    message: 'Its really fantastic Thanks for ur support and patience',
    serviceUsed: 'ATS CV (PDF & Word .docx)',
  },
  {
    id: 'rev-faris',
    senderName: 'Salmanul F.',
    contextLabel: 'India Desk • Client Feedback',
    flag: '🇮🇳',
    time: '8:35 PM',
    message:
      'Thank you for the work Im very satisfied ❤️ Samabavam Nice aayind, njn friends nu ellam suggest cheyyam 👍🏻',
    serviceUsed: 'Career Document Service',
  },
  {
    id: 'rev-teena',
    senderName: 'Teena A.',
    contextLabel: 'Client Feedback • WhatsApp',
    flag: '💬',
    time: '6:30 AM',
    message: 'Thank you very much for quick response 😍',
    serviceUsed: 'ATS CV & Cover Letter (PDF & .docx)',
  },
  {
    id: 'rev-gaurav',
    senderName: 'Gaurav K.',
    contextLabel: 'Client Feedback • 5-Star Rating',
    flag: '⭐',
    time: '1:23 PM',
    message: 'I will give you 5 star ratings ⭐⭐⭐⭐⭐',
    serviceUsed: 'Career Document Service',
  },
];

export default function WhatsAppReviewsSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-surface-border relative" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80 mb-3 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>AUTHENTIC CLIENT FEEDBACK</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Direct Client Messages.{' '}
            <span className="italic font-normal text-[#0284F5]">Genuine Feedback.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Unedited wording preserved from client messages received by our support desks. Names are initialized and contact details omitted to protect client privacy.
          </p>
        </div>

        {/* 6 Chat Bubble Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CHAT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-[#EFEAE2]/40 border border-[#DDD5CA] p-5 sm:p-6 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Contact Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DDD5CA]/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0B1B3D] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                    {review.senderName.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B1B3D]">
                      <span>{review.senderName}</span>
                      <span>{review.flag}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {review.contextLabel}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-500 shrink-0">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px] font-black text-slate-700">5.0</span>
                </div>
              </div>

              {/* Chat Bubble Box */}
              <div className="bg-white rounded-2xl p-4 shadow-2xs border border-slate-200/60 relative mb-4">
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  &ldquo;{review.message}&rdquo;
                </p>

                {/* Timestamp & Double Check */}
                <div className="mt-2.5 flex items-center justify-end gap-1 text-[10px] text-slate-400 font-medium">
                  <span>{review.time}</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                </div>
              </div>

              {/* Package Tag */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-slate-500 gap-2">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 shrink-0">Service:</span>
                <span className="text-[#0284F5] truncate">{review.serviceUsed}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
