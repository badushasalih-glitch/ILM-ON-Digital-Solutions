'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What makes an ATS-friendly CV different from a regular CV?',
    answer:
      'An ATS-friendly CV uses a clean single-column structure, standard section headings, and parse-safe fonts that recruitment algorithms can read without losing information. Multi-column templates, tables, text boxes, and complex graphics often cause ATS parsers to jumble text, leading to automatic rejection before a human ever sees your qualifications.',
  },
  {
    question: 'How fast will I receive my first draft?',
    answer:
      'Standard turnaround for CVs and cover letters is 24 to 48 hours from the time we receive your career details. Complex profile suites (like our GCC Job Seeker bundle) take 48 to 72 hours. If you face an urgent job application deadline, 12 to 24-hour express turnaround is available upon WhatsApp request.',
  },
  {
    question: 'Can you write my CV from scratch if I do not have an existing document?',
    answer:
      'Yes. If you do not have an existing CV, we will send you a structured WhatsApp questionnaire or audio prompt to gather your work history, education, key responsibilities, and target job titles. Our writers will build your document from the ground up.',
  },
  {
    question: 'How do Gulf (UAE/GCC) requirements differ from Indian and European formats?',
    answer:
      'The Gulf market requires clear prominence of your current visa status, notice period, driving license availability, and Gulf-relevant keywords on platforms like Naukri Gulf. European applications adhere strictly to the European Commission Europass standard, while Canadian and North American resumes use reverse-chronological, anti-bias layouts with zero personal photos or marital details.',
  },
  {
    question: 'What is included in LinkedIn and Naukri Gulf profile optimization?',
    answer:
      'For LinkedIn, we craft an algorithmic high-search headline, write a first-person compelling "About" story, reframe your experience with measurable outcomes, and align your top 50 skills with recruiter search terms. For Naukri Gulf, we optimize your profile tags, visa categories, and key skills to maximize visibility among GCC headhunters.',
  },
  {
    question: 'How do revisions work if I need changes after receiving my draft?',
    answer:
      'Every order includes a 7-day revision window with up to 2 comprehensive rounds of changes. You can review the draft, test it, and message us your adjustments directly on WhatsApp. Minor edits are typically delivered within 24 hours.',
  },
  {
    question: 'Do you guarantee that I will get an interview callback or a job?',
    answer:
      'No, and we advise caution with any service that makes such claims. Hiring decisions depend entirely on employer hiring criteria, competition for the vacancy, visa requirements, and market conditions. What we deliver is an ATS-engineered, recruiter-compliant presentation designed to ensure your qualifications are parsed accurately and showcased professionally.',
  },
  {
    question: 'How do you protect my personal data and resume privacy?',
    answer:
      'We treat your career information with strict confidentiality. In accordance with our Privacy Policy, your curriculum vitae, employment history, and contact details are never sold, leased, or disclosed to third parties without your explicit authorization.',
  },
  {
    question: 'How do I make the payment?',
    answer:
      'We accept Google Pay, PhonePe, Paytm, UPI ID, and direct NEFT/IMPS bank transfers for Indian Rupee (INR) transactions. For UAE and GCC clients, we accept UAE local bank transfers, FAB/ENBD bank wire, and secure online payment links in AED.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-surface-light border-t border-surface-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0284F5] border border-blue-200/70 mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#0284F5]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Have Questions? <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#0284F5]">We Have Clear Answers.</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Everything you need to know about our drafting process, turnaround times, ATS compatibility, and regional formats.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-surface-border bg-white shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-dark-950">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-vivid-blue text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
