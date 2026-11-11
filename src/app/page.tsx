import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import SplashScreen from '@/components/SplashScreen';
import TopAnnouncementBar from '@/components/TopAnnouncementBar';
import SkilleazeHeroSection from '@/components/SkilleazeHeroSection';
import CandidatesHiredSlider from '@/components/CandidatesHiredSlider';
import OurDivisionsSection from '@/components/OurDivisionsSection';
import ServicesSection from '@/components/ServicesSection';
import CuratedWorkGallery from '@/components/CuratedWorkGallery';
import ComparisonSection from '@/components/ComparisonSection';
import RealTalkPledgeSection from '@/components/RealTalkPledgeSection';
import WhatsAppReviewsSection from '@/components/WhatsAppReviewsSection';
import WhoWeHelpSection from '@/components/WhoWeHelpSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import RecruitmentShowcaseSection from '@/components/RecruitmentShowcaseSection';
import DigitalMarketingShowcaseSection from '@/components/DigitalMarketingShowcaseSection';
import ServiceExpectationsSection from '@/components/ServiceExpectationsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#F8FAFC]">
      {/* =========================================================================
          1. OPENING EXPERIENCE & BRAND SPLASH PRELOADER
          - Deep Royal Navy (#0B1B3D)
          - Centered concentric double hairline rings emblem with "ILM ON"
          - Serif tagline fade-in: "Digital Solutions & Career Acceleration"
          - Smooth 0.7s dissolve fade-out into the main application
          ========================================================================= */}
      <SplashScreen />

      {/* =========================================================================
          2. STICKY TOP PROMO BANNER
          - "Limited-Time Launch Offer | Flat 50% Off Every Package"
          - WhatsApp direct claim link
          ========================================================================= */}
      <TopAnnouncementBar />

      {/* =========================================================================
          3. HERO SECTION & MICRO-ANIMATIONS (Skilleaze Visual Architecture)
          - Editorial serif display headline: "Your experience is valuable. Let your resume prove it."
          - Elevated Dynamic Focus Card with glowing cyan dot ("BUILT FOR YOUR NEXT ROLE AS")
            and continuous typewriter animation cycling through targeted Gulf & India roles
          - Primary WhatsApp Dark Pill with neutral arrow CTA
          - Secondary Ghost Pill: "Request Free CV Review"
          - Official ILM-ON Logo & Multi-Currency Entry Price Lockup: "CVs from ₹499 | AED 25 | $7"
          - Infinite Horizontal Ticker Marquee Ribbon in deep brand navy (#0B1B3D)
          ========================================================================= */}
      <SkilleazeHeroSection />

      {/* =========================================================================
          4. "CANDIDATES HIRED IN" GCC & INDIA PLACEMENT SHOWCASE
          - Top Pill: GCC TALENT RECRUITMENT & OPPORTUNITY NETWORK
          - Serif Title: Candidates Hired In
          - 6 GCC Country Badges (UAE, Saudi, Qatar, Kuwait, Bahrain, Oman)
          - Auto-scrolling horizontal cards for GCC blue-chip employers
          - Bottom Caption Strip: Banking, Oil & Gas, Healthcare, Tech, etc.
          ========================================================================= */}
      <CandidatesHiredSlider />

      {/* =========================================================================
          5. OUR THREE SPECIALIZED DIVISIONS
          - Division 01: Career Services (concise entry point -> catalog follows)
          - Division 02: Recruitment Support -> /recruitment
          - Division 03: Ads & Digital Marketing -> /digital-marketing
          ========================================================================= */}
      <OurDivisionsSection />

      {/* =========================================================================
          5. CAREER SERVICES CATALOG & MULTI-CURRENCY SWITCHER
          - Currency Selector: India (₹ INR), UAE/GCC (AED), International ($ USD)
          - 9 Structured Packages (ATS CV, Cover Letter, Confirmed ₹999 Combo, Europass, LinkedIn, etc.)
          - One clear primary action: "Learn More & Scope Details"
          ========================================================================= */}
      <ServicesSection />

      {/* =========================================================================
          6. CURATED WORK GALLERY & VERIFIED FORMATS
          - Curated showcase across ATS, Cover Letter, Europass, Canadian, and LinkedIn
          - Filter tabs with interactive lightbox inspection
          - Consolidated single footer link to /portfolio and /cv-templates
          ========================================================================= */}
      <CuratedWorkGallery />

      {/* =========================================================================
          7. "DIY / GENERIC AI vs. ILM ON SPECIALISTS" COMPARISON TABLE
          - Direct hard-hitting matrix comparing free template builders vs. handcrafted human drafting
          ========================================================================= */}
      <ComparisonSection />

      {/* =========================================================================
          8. "REAL TALK" PLEDGE (2-Column Always vs. Never Matrix)
          - Transparent commitments: Verified ATS, human writers, no fake guarantees
          ========================================================================= */}
      <RealTalkPledgeSection />

      {/* =========================================================================
          9. AUTHENTIC WHATSAPP CHAT BUBBLE REVIEWS
          - Smartphone WhatsApp message cards with verified green checkmarks & real feedback
          ========================================================================= */}
      <WhatsAppReviewsSection />

      {/* =========================================================================
          10. TAILORED AUDIENCE PATHWAYS (Compact Interactive Tab Selector)
          - Fresh Grads, Mid-Career, Senior Leaders, Gulf Relocation, Career Changers
          ========================================================================= */}
      <WhoWeHelpSection />

      {/* =========================================================================
          11. 5-STAGE FRICTIONLESS WORKFLOW MAP
          - DM -> Evaluation -> Price Lock -> Drafting -> Final Delivery
          ========================================================================= */}
      <HowItWorksSection />

      {/* =========================================================================
          12. STUDIO PHILOSOPHY: WE BUILD CAREERS NOT JUST CVS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-surface-border shadow-elevated bg-white">
            <div className="relative w-full bg-white">
              {/* Mobile View */}
              <div className="block sm:hidden relative w-full aspect-[4/3] bg-white">
                <Image
                  src="/assets/reviews/client-showcase-three-models-optimized.jpg"
                  alt="We Build Careers Not Just CVs - ILM-ON Digital Solutions"
                  fill
                  sizes="100vw"
                  className="object-contain object-center"
                />
              </div>
              {/* Desktop View */}
              <div className="hidden sm:block relative w-full aspect-[3.2/1] bg-white">
                <Image
                  src="/assets/hero/we-build-careers-banner-optimized.jpg"
                  alt="WE BUILD CAREERS NOT JUST CVS - ILM-ON Digital Solutions Team Banner"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain object-center"
                />
              </div>
            </div>

            <div className="p-8 sm:p-10 bg-[#0B1B3D] border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0284F5]/20 text-cyan-300 border border-[#0284F5]/30 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  <span>THE ILM-ON PHILOSOPHY</span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  We Build Careers, <span className="text-[#0284F5] italic font-normal">Not Just CVs.</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A resume is not just a document—it is your personal professional brand, your gateway to senior-tier interviews, and the foundation to switching on your full career potential.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                <a
                  href="#services"
                  className="px-6 py-3.5 rounded-full text-xs font-bold bg-[#0284F5] hover:bg-[#0274da] text-white text-center transition-all shadow-md"
                >
                  View Packages
                </a>
                <Link
                  href="/pricing"
                  className="px-6 py-3.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/15 text-white text-center border border-white/15 transition-all"
                >
                  Pricing Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. RECRUITMENT SERVICES OVERVIEW
          - Dedicated introduction to candidate sourcing, CV screening, and shortlisting
          ========================================================================= */}
      <RecruitmentShowcaseSection />

      {/* =========================================================================
          14. ADS ON DIGITAL MARKETING & GROWTH OVERVIEW
          - Meta Ads, Google Ads, Lead Gen, Social Media, Branding, Website Dev
          ========================================================================= */}
      <DigitalMarketingShowcaseSection />

      {/* =========================================================================
          15. SERVICE EXPECTATIONS & TRANSPARENCY
          - 4 Structured Pillars: Human Drafting, Word+PDF Delivery, 7-Day Revisions, Verified Payments
          ========================================================================= */}
      <ServiceExpectationsSection />

      {/* =========================================================================
          16. FREQUENTLY ASKED QUESTIONS
          - Clean Expandable Accordion
          ========================================================================= */}
      <FAQSection />

      {/* =========================================================================
          17. FINAL CLOSING CONSULTATION CTA (Dual-Desk Direct WhatsApp Access)
          ========================================================================= */}
      <FinalCTASection />
    </div>
  );
}
