import React from 'react';
import Link from 'next/link';
import { FileCheck, ShieldCheck } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-4">
            <FileCheck className="w-3.5 h-3.5" />
            <span>TERMS & CONDITIONS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-dark-950">Terms of Service</h1>
          <p className="text-xs text-slate-500 mt-2">Effective Date: January 2026 • ILM-ON Digital Solutions</p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed bg-white border border-surface-border rounded-3xl p-8 sm:p-12 shadow-card">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">1. Service Scope</h2>
            <p className="text-slate-600">
              ILM-ON Digital Solutions operates across three specialized divisions: (1) Career Services & ATS Resume Architecture, (2) Gulf and Regional Talent Recruitment Support, and (3) Performance Marketing & Digital Growth. By engaging our services, you agree to these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">2. Career Services, Deliverables & Revisions</h2>
            <p className="text-slate-600">
              Deliverables including Normal Professional CVs, ATS-friendly resumes, cover letters, and multi-platform profile optimizations (LinkedIn, Indeed, Naukri Gulf) are provided in editable Microsoft Word (.docx) and PDF formats. Standard revision requests can be submitted following initial delivery to ensure complete alignment with your target sector.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">3. Candidate Recruitment Policy & Fee Structure</h2>
            <div className="p-4 rounded-xl bg-teal-light/50 border border-teal-accent/20 text-xs sm:text-sm text-teal-dark font-medium leading-relaxed">
              <strong>Zero Upfront Candidate Fee Guarantee: </strong>
              Submitting a CV to the ILM-ON candidate pool is completely free. We do not charge advance registration, documentation, or processing fees. Our recruitment consultancy fee is strictly <strong>20% of your first month salary</strong>, payable ONLY after you are selected, complete joining formalities, and receive your first paycheck from the employer. If you are not hired, you owe us nothing.
            </div>
            <p className="text-slate-600 text-xs mt-2">
              ILM-ON provides recruitment support, resume screening, and employer introductions. We do not sell job placements or make fraudulent visa guarantees. Final hiring and compensation decisions remain at the sole discretion of the prospective hiring company.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">4. Corporate Staffing & Employer Terms</h2>
            <p className="text-slate-600">
              Candidate introductions to corporate employers are governed by formal corporate Recruitment Service Agreements (SLAs), outlining agreed fee terms and candidate replacement protection periods.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">5. Payment & Pricing Transparency</h2>
            <p className="text-slate-600">
              All Career Service pricing is transparently displayed across INR, AED, and USD. Payment is accepted via verified UPI, direct bank transfer, and international payment options before final document delivery.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-dark-950">6. Governing Law</h2>
            <p className="text-slate-600">
              These Terms shall be interpreted and governed in accordance with the commercial laws of India and the United Arab Emirates, reflecting the jurisdiction of the servicing desk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
