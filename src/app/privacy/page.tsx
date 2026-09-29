import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-dark-950">Privacy Policy</h1>
          <p className="text-xs text-slate-500 mt-2">Last Updated: January 2026 • ILM-ON Digital Solutions</p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed bg-white border border-surface-border rounded-3xl p-8 sm:p-12 shadow-card">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">1. Introduction</h2>
            <p className="text-slate-600">
              ILM-ON Digital Solutions (&ldquo;ILM-ON&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is dedicated to protecting personal information provided by our clients, job seekers, and business partners. This Privacy Policy governs the manner in which we collect, store, and utilize information gathered through www.ilmondigitalsolutions.online and our operational desks in Dubai, UAE and Kerala, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">2. Candidate Career Data Protection</h2>
            <p className="text-slate-600">
              When utilizing our Career Services division, you may submit resumes, curriculum vitae, employment history, contact information, educational credentials, and portfolio assets. We treat this data with strict confidentiality. Your CV is never sold, leased, or disclosed to third parties without your explicit authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">3. Recruitment & Corporate Information</h2>
            <p className="text-slate-600">
              For recruitment and corporate staffing inquiries, candidate profiles are circulated solely to vetted partner enterprises with active hiring mandates. Corporate client specifications and hiring strategies are kept confidential under binding non-disclosure standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">4. Digital Marketing & Analytics</h2>
            <p className="text-slate-600">
              When consulting on advertising and performance marketing, client ad account credentials, tracking pixel data, and conversion metrics remain strictly proprietary to the respective client organization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">5. Direct Communication & WhatsApp</h2>
            <p className="text-slate-600">
              By contacting our India Desk (+91 9292940652) or Dubai Desk (+971 562528518), you consent to receiving operational communications, revision drafts, and consultation updates via WhatsApp, phone, or email. You may opt out of promotional messages at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">6. Inquiries & Data Rights</h2>
            <p className="text-slate-600">
              For questions regarding your personal information or to request deletion of your career records from our databases, please contact our Data Governance Desk at{' '}
              <a href="mailto:info@ilmondigitalsolutions.online" className="text-vivid-blue hover:underline font-bold">
                info@ilmondigitalsolutions.online
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
