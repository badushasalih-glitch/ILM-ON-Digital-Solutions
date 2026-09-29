'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'Career Services',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Construct WhatsApp message prefill
    const encoded = encodeURIComponent(
      `Hello ILM-ON Digital Solutions,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested in: ${formData.division}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919292940652?text=${encoded}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen text-dark-950">
      {/* 1. Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-vivid-light text-vivid-blue border border-vivid-blue/20 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT CONNECT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-950 tracking-tight">
            Connect With Our <br />
            <span className="text-vivid-blue">Global Operating Desks.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you need a rapid ATS resume overhaul, corporate talent recruitment support in the Gulf, or performance ad scaling, our teams in Dubai and India respond promptly.
          </p>
        </div>
      </section>

      {/* 2. Main Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Desk Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-surface-border p-8 shadow-card space-y-6">
              <h3 className="text-xl font-bold text-dark-950">Direct Communication Hubs</h3>

              {/* India Desk */}
              <div className="p-5 rounded-2xl bg-surface-light border border-surface-border">
                <div className="flex items-center gap-2 text-sm font-bold text-dark-950 mb-1">
                  <span>🇮🇳</span> India Headquarters & Operations Desk
                </div>
                <div className="text-xs text-slate-500 mb-3">Malappuram, Kerala, India - 676307</div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-vivid-blue shrink-0" />
                    <a href="https://wa.me/919292940652" className="hover:text-vivid-blue font-bold">+91 9292940652</a> / <a href="https://wa.me/919526240652" className="hover:text-vivid-blue font-bold">+91 9526240652</a>
                  </div>
                </div>
              </div>

              {/* UAE Desk */}
              <div className="p-5 rounded-2xl bg-surface-light border border-surface-border">
                <div className="flex items-center gap-2 text-sm font-bold text-dark-950 mb-1">
                  <span>🇦🇪</span> UAE & Gulf Recruitment Desk
                </div>
                <div className="text-xs text-slate-500 mb-3">Dubai, United Arab Emirates</div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-teal-accent shrink-0" />
                    <a href="https://wa.me/971562528518" className="hover:text-teal-accent font-bold">+971 562528518</a>
                  </div>
                </div>
              </div>

              {/* Email & Web */}
              <div className="p-5 rounded-2xl bg-surface-light border border-surface-border">
                <div className="flex items-center gap-2 text-sm font-bold text-dark-950 mb-1">
                  <Mail className="w-4 h-4 text-vivid-blue shrink-0" /> Official Email & Web
                </div>
                <div className="text-xs text-slate-700 mt-2 space-y-1 font-medium">
                  <div>
                    <a href="mailto:info@ilmondigitalsolutions.online" className="hover:text-vivid-blue">info@ilmondigitalsolutions.online</a>
                  </div>
                  <div>
                    <a href="https://www.ilmondigitalsolutions.online" target="_blank" rel="noopener noreferrer" className="hover:text-vivid-blue">
                      www.ilmondigitalsolutions.online
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-teal-accent font-semibold">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Standard response time: Within 15 to 30 minutes</span>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-surface-border p-8 sm:p-10 shadow-card">
              <h3 className="text-2xl font-bold text-dark-950 mb-2">Send an Inquiry</h3>
              <p className="text-xs text-slate-500 mb-8">
                Fill out the details below. You will be seamlessly connected to our specialists on WhatsApp.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-teal-light border border-teal-accent/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-teal-accent text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-dark-950">Inquiry Prepared for WhatsApp!</h4>
                  <p className="text-xs text-slate-600">
                    If WhatsApp did not automatically open on your device, please click the button below:
                  </p>
                  <a
                    href="https://wa.me/919292940652"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-xl text-xs font-bold bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-sm transition-all"
                  >
                    Open WhatsApp Directly
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-dark-950 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohamed Faizal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-border text-dark-950 placeholder-slate-400 text-xs focus:outline-none focus:border-vivid-blue transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-dark-950 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="faizal@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-border text-dark-950 placeholder-slate-400 text-xs focus:outline-none focus:border-vivid-blue transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-dark-950 mb-1.5">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 ... or +91 98 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-border text-dark-950 placeholder-slate-400 text-xs focus:outline-none focus:border-vivid-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark-950 mb-1.5">
                      Service / Division of Interest *
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-border text-dark-950 text-xs focus:outline-none focus:border-vivid-blue transition-colors"
                    >
                      <option value="ATS-Friendly CV (₹599 / AED 25)">ATS-Friendly CV (₹599 / AED 25)</option>
                      <option value="Normal Professional CV (₹499 / AED 20)">Normal Professional CV (₹499 / AED 20)</option>
                      <option value="ATS CV + Cover Letter (₹999 / AED 40)">ATS CV + Cover Letter (₹999 / AED 40)</option>
                      <option value="Naukri Gulf Profile Optimization (₹799 / AED 35)">Naukri Gulf Profile Optimization (₹799 / AED 35)</option>
                      <option value="LinkedIn Profile Optimization (₹970 / AED 40)">LinkedIn Profile Optimization (₹970 / AED 40)</option>
                      <option value="Indeed Profile Optimization (₹499 / AED 20)">Indeed Profile Optimization (₹499 / AED 20)</option>
                      <option value="Corporate Recruitment & Sourcing Mandate">Corporate Recruitment & Sourcing Mandate</option>
                      <option value="Candidate Free CV Submission (Zero Upfront Fee)">Candidate Free CV Submission (Zero Upfront Fee)</option>
                      <option value="Meta Ads & Digital Marketing Setup">Meta Ads & Digital Marketing Setup</option>
                      <option value="Other / General Consultation">Other / General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark-950 mb-1.5">
                      Your Message or Current Situation
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your target role, corporate vacancy, or marketing goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-border text-dark-950 placeholder-slate-400 text-xs focus:outline-none focus:border-vivid-blue transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-vivid-blue hover:bg-vivid-blue/90 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Connect via WhatsApp Desk</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
