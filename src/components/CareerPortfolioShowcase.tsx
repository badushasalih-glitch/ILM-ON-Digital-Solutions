'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  ExternalLink,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  FileText,
  MessageSquare,
  Linkedin,
  Globe2,
  TrendingUp,
  Award,
  Instagram,
  Play,
  Pause,
  Volume2,
  RotateCcw,
} from 'lucide-react';

export type PortfolioCategory =
  | 'cv-samples'
  | 'client-feedback'
  | 'linkedin'
  | 'naukri'
  | 'indeed';

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  tags: string[];
  inquiryText: string;
  isAudioFeedback?: boolean;
  audioSrc?: string;
}

// INSTAGRAM OFFICIAL URL
const INSTAGRAM_URL = 'https://www.instagram.com/ilmon_digitalsolutions/';

// STRICTLY UNIQUE ASSETS (NO DUPLICATE POSTERS IN ANY CATEGORY)
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ==========================================
  // 1. CV SAMPLES (Unique Real Deliverables)
  // ==========================================
  {
    id: 'cv-faizal',
    category: 'cv-samples',
    categoryLabel: 'CV Samples',
    title: 'Mohamed Faizal Villan — Executive ATS Format',
    subtitle: 'Operations & Senior Finance Leadership (GCC Standard)',
    description:
      'Engineered with high-density ATS keywords, quantified achievements, and structured career progression tailored for tier-1 EPC contractors and corporate enterprises in the UAE.',
    image: '/assets/career-services/ats-sample-faizal.jpeg',
    aspectRatio: 'landscape',
    tags: ['GCC Standard', 'ATS Optimized', 'A4 / Word / PDF', 'Turnaround < 24h'],
    inquiryText:
      'Hello ILM-ON, I would like to order an ATS-Friendly CV similar to the Mohamed Faizal Villan sample.',
  },
  {
    id: 'cv-estelle',
    category: 'cv-samples',
    categoryLabel: 'CV Samples',
    title: 'Estelle Darcy — Healthcare & International ATS Model',
    subtitle: 'Registered Nurse (RN) Format (North American & Global Standard)',
    description:
      'Strict compliance with international parsing standards (no photo, anti-bias formatting, clinical rotations, competency matrix). 100% parseable across Workday, Taleo, and Greenhouse ATS systems.',
    image: '/assets/career-services/ats-sample-estelle.jpeg',
    aspectRatio: 'landscape',
    tags: ['International Standard', 'Clinical Matrix', 'Taleo / Workday Compliant'],
    inquiryText:
      'Hello ILM-ON, I would like to order an International ATS CV similar to the Estelle Darcy sample.',
  },
  {
    id: 'cv-canadian-1',
    category: 'cv-samples',
    categoryLabel: 'CV Samples',
    title: 'Canadian & North American Compliance Resume',
    subtitle: 'Anti-Discrimination Scoring & Accomplishment Metrics',
    description:
      'Structured to Canadian immigration and corporate hiring norms. Focuses strictly on quantifiable career accomplishments, core competencies, and targeted skills taxonomy.',
    image: '/assets/cv-canadian-1.jpg',
    aspectRatio: 'portrait',
    tags: ['Canadian Resume', 'North America', 'Strict Anti-Bias'],
    inquiryText:
      'Hello ILM-ON, I want to order a Canadian compliance resume format.',
  },
  {
    id: 'cv-europass-1',
    category: 'cv-samples',
    categoryLabel: 'CV Samples',
    title: 'Official Europass Standard Curriculum Vitae',
    subtitle: 'European Union Standardized Framework & CEFR Alignment',
    description:
      'Official European Union Europass layout adhering to the European Mobility framework, standard section taxonomy, and cross-border European recruiter standards.',
    image: '/assets/cv-europass-1.png',
    aspectRatio: 'portrait',
    tags: ['Europass Format', 'European Union', 'CEFR Languages'],
    inquiryText:
      'Hello ILM-ON, I would like to create an official Europass CV format.',
  },
  {
    id: 'cv-ats-poster',
    category: 'cv-samples',
    categoryLabel: 'CV Samples',
    title: 'ATS-Friendly CV Creation & Formatting Suite',
    subtitle: 'Official ILM-ON Service Specification (₹599 / AED 25 / SAR 25)',
    description:
      'Comprehensive resume engineering for Canada, New Zealand, Europe (Europass), Gulf GCC, and India. 100% keyword density guarantee, Word & PDF delivery within 24 hours.',
    image: '/assets/career-services/ats-friendly-cv-poster.jpeg',
    aspectRatio: 'square',
    tags: ['₹599 / AED 25', '24h Delivery', 'Full ATS Optimization'],
    inquiryText:
      'Hello ILM-ON, I want to order the ATS-Friendly CV package (₹599 / AED 25).',
  },

  // ==========================================
  // 2. GENUINE CLIENT FEEDBACK (With Voice & Instagram)
  // ==========================================
  {
    id: 'fb-aswathy',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Aswathy — Verified Client Voice Feedback',
    subtitle: 'ATS CV, Cover Letter & LinkedIn Optimization Experience',
    description:
      'Authentic voice feedback from Aswathy sharing her experience with ILM-ON’s ATS CV restructuring, personalized cover letter, and LinkedIn profile optimization.',
    image: '/assets/reviews/client-showcase-three-models.png',
    aspectRatio: 'landscape',
    tags: ['Audio Feedback', 'Verified Client', 'ATS CV + LinkedIn', '5-Star Review'],
    inquiryText:
      'Hello ILM-ON, I listened to Aswathy’s voice feedback and want to upgrade my CV and LinkedIn profile.',
    isAudioFeedback: true,
    audioSrc:
      '/assets/reviews/Aswathy ashish client Feedback for ATS friendly CV, Cover Letter and Linkedin profile optimization.mp4',
  },
  {
    id: 'fb-gaurav',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Gaurav Kulshrestha — 5-Star Customer Feedback',
    subtitle: '“I will give you 5 star ratings ⭐⭐⭐⭐⭐”',
    description:
      'Verified client feedback following comprehensive CV restructuring and rapid turnaround service.',
    image: '/assets/reviews/Gaurav Kulshrestha - Happy cstmr.png',
    aspectRatio: 'portrait',
    tags: ['Verified Client', '5-Star Rating', 'CV Service'],
    inquiryText:
      'Hello ILM-ON, I saw Gaurav Kulshrestha’s review and would like to consult about your career services.',
  },
  {
    id: 'fb-surya',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Dr. Surya Deepak — 5-Star Medical Professional Feedback',
    subtitle: '“Nice work... thank you very much 😊👍”',
    description:
      'Verified review poster from Dr. Surya Deepak praising the quality, structure, and speed of our specialized resume writing.',
    image: '/assets/reviews/Dr. Surya Deepak.png',
    aspectRatio: 'portrait',
    tags: ['Medical Professional', '5-Star Rating', 'Verified Review'],
    inquiryText:
      'Hello ILM-ON, I saw Dr. Surya Deepak’s feedback and want to get my CV written.',
  },
  {
    id: 'fb-arjun',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Arjun — Happy Customer Feedback Poster',
    subtitle: 'Verified Service Quality & Fast Delivery Review',
    description:
      'Direct WhatsApp feedback from client Arjun highlighting prompt customer care and precision document formatting.',
    image: '/assets/reviews/Arjun_Happy customer - Poster.png',
    aspectRatio: 'portrait',
    tags: ['Happy Customer', 'Fast Delivery', 'Verified Client'],
    inquiryText:
      'Hello ILM-ON, I would like to order CV writing after seeing Arjun’s review.',
  },
  {
    id: 'fb-fasil',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Fasil — Happy Customer Feedback Poster',
    subtitle: 'Seamless Communication & Professional ATS Delivery',
    description:
      'Official ILM-ON verified customer poster celebrating client satisfaction and high quality CV output.',
    image: '/assets/reviews/Fasil_Happy customer - Poster.png',
    aspectRatio: 'portrait',
    tags: ['Happy Customer', '5-Star Rating', 'Verified Client'],
    inquiryText:
      'Hello ILM-ON, I saw Fasil’s feedback and want to consult on my CV.',
  },
  {
    id: 'fb-rizwan',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'J M Rizwan — Happy Customer Feedback Poster',
    subtitle: 'Executive Career Branding & Precision Formatting',
    description:
      'Client J M Rizwan sharing 5-star satisfaction on the precision and corporate presentation of his updated dossier.',
    image: '/assets/reviews/J M RIZWAN_Happy customer - Poster.png',
    aspectRatio: 'portrait',
    tags: ['Executive Branding', '5-Star Rating', 'Verified Client'],
    inquiryText:
      'Hello ILM-ON, I want to upgrade my CV like J M Rizwan did.',
  },
  {
    id: 'fb-akhila',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Akhila Rajan — Happy Customer Feedback Poster',
    subtitle: '“Got a second interview call with my new resume!”',
    description:
      'Official verified customer poster celebrating rapid interview callbacks across Gulf financial institutions.',
    image: '/assets/reviews/Akhila Rajan_Happy customer - Poster.png',
    aspectRatio: 'portrait',
    tags: ['Interview Callback', 'Gulf Market', 'Verified Client'],
    inquiryText:
      'Hello ILM-ON, I would like to get my resume written for Gulf finance roles.',
  },
  {
    id: 'fb-afsal',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Afsal Koya — Happy Customer Feedback Poster',
    subtitle: 'Corporate Engineering & Operations Career Support',
    description:
      'Client Afsal Koya highlighting the thorough consultation, clear section hierarchy, and professional customer support.',
    image: '/assets/reviews/Afsal Koya_Happy customer - Poster.png',
    aspectRatio: 'portrait',
    tags: ['Engineering CV', 'Verified Client', '5-Star Feedback'],
    inquiryText:
      'Hello ILM-ON, I saw Afsal Koya’s review and want to update my profile.',
  },
  {
    id: 'fb-antony',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Antony Marcus — Happy Customer Feedback Poster',
    subtitle: 'Verified Customer Satisfaction & Fast Turnaround',
    description:
      'Client Antony Marcus expressing full satisfaction with ILM-ON Career Services professional delivery.',
    image: '/assets/reviews/Antony Marcus_Happy customer - Poster.png',
    aspectRatio: 'portrait',
    tags: ['Verified Review', '24h Delivery', 'Professionalism'],
    inquiryText:
      'Hello ILM-ON, I would like to consult with your career team.',
  },
  {
    id: 'fb-azlan',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Azlan — Happy Customer Feedback Poster',
    subtitle: 'High-Resolution Official Social Proof Poster',
    description:
      'Verified WhatsApp feedback highlighting responsive revisions and tailored CV positioning.',
    image: '/assets/reviews/AZLAN_Happy customer - Poster.png',
    aspectRatio: 'portrait',
    tags: ['Verified Client', 'Dedicated Support', 'Tailored CV'],
    inquiryText:
      'Hello ILM-ON, I want to order your career branding services.',
  },
  {
    id: 'fb-sarcar',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Mohammad Sarcar — Happy Customer Feedback Poster',
    subtitle: 'Senior Engineering Consultant (Saudi Arabia / KSA)',
    description:
      'Official feedback poster from senior engineering consultant Mohammad Sarcar praising our career positioning.',
    image: '/assets/reviews/Sarcar_Happy customer - Poster.png',
    aspectRatio: 'portrait',
    tags: ['Senior Consultant', 'KSA / Saudi Market', 'Engineering'],
    inquiryText:
      'Hello ILM-ON, I need senior executive CV writing for the Gulf market.',
  },
  {
    id: 'fb-maher',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Maher Abou Haseira — Happy Customer Feedback Poster',
    subtitle: 'Business Development & Revenue Cycle Management Director',
    description:
      'Director-level client Maher sharing appreciation for our LinkedIn profile overhaul and executive resume creation.',
    image: '/assets/reviews/Maher_Happy customer - Poster.png',
    aspectRatio: 'portrait',
    tags: ['Director Level', 'LinkedIn + CV', 'Healthcare & BDM'],
    inquiryText:
      'Hello ILM-ON, I would like executive level branding for my profile.',
  },
  {
    id: 'fb-teena',
    category: 'client-feedback',
    categoryLabel: 'Client Feedback',
    title: 'Teena Agnes — Happy Customer Feedback Poster',
    subtitle: 'Healthcare & Critical Care Nursing Dossier',
    description:
      'Healthcare professional Teena expressing gratitude for the clean, compliant medical CV structure created by ILM-ON.',
    image: '/assets/reviews/TEENA_Happy customer - Poster.png',
    aspectRatio: 'portrait',
    tags: ['Healthcare', 'Verified Client', 'Medical CV'],
    inquiryText:
      'Hello ILM-ON, I need a medical / healthcare professional CV.',
  },

  // ==========================================
  // 3. LINKEDIN PROFILE OPTIMIZATION (Unique)
  // ==========================================
  {
    id: 'li-poster',
    category: 'linkedin',
    categoryLabel: 'LinkedIn Optimization',
    title: 'LinkedIn Profile Optimization — Official Service Suite',
    subtitle: 'Recruiter Search Ranking, Headline & Keyword Alignment (₹970 / AED 45 / $13)',
    description:
      'Turn your LinkedIn account into an inbound recruiter magnet. Strategic keyword injection into Headline, About section, Top 50 Skills taxonomy, and verified badge setup.',
    image: '/assets/career-services/linkedin-profile-optimization.jpeg',
    aspectRatio: 'square',
    tags: ['₹970 / AED 45', 'Recruiter Inbound', 'SEO Ranking', 'Top 50 Skills'],
    inquiryText:
      'Hello ILM-ON, I want to order LinkedIn Profile Optimization (₹970 / AED 45).',
  },
  {
    id: 'li-shamim',
    category: 'linkedin',
    categoryLabel: 'LinkedIn Optimization',
    title: 'Shamim Ahmad — Executive LinkedIn Presence',
    subtitle: 'Senior Horticulturist (PMO) | Parsons Corporation, Riyadh, Saudi Arabia',
    description:
      'Custom corporate header banner design, optimized headline highlighting 25+ years GCC experience, design review credentials, and search visibility across tier-1 infrastructure projects.',
    image:
      '/assets/Linkedin optimization, Naukri & Indeed profile optimization work samples/Screenshot 2026-10-12 191416.png',
    aspectRatio: 'landscape',
    tags: ['Real LinkedIn Profile', 'GCC Infrastructure', 'Custom Banner', 'Search Ranked'],
    inquiryText:
      'Hello ILM-ON, I saw the Shamim Ahmad LinkedIn optimization and want a similar executive overhaul.',
  },
  {
    id: 'li-ajas',
    category: 'linkedin',
    categoryLabel: 'LinkedIn Optimization',
    title: 'Ajas Rahim — Luxury Hospitality Leadership Presence',
    subtitle: 'Chief Steward | Luxury Hotel Pre-Opening Specialist, Riyadh, Saudi Arabia',
    description:
      'Premium custom dark-and-gold header banner, verified credentials (HACCP Level 4, NEBOSH, ISO 22000), and targeted headline crafted to attract luxury hospitality headhunters.',
    image:
      '/assets/Linkedin optimization, Naukri & Indeed profile optimization work samples/Screenshot 2026-10-21 212726.png',
    aspectRatio: 'landscape',
    tags: ['Real LinkedIn Profile', 'Hospitality Leadership', 'Custom Branding', 'Verified Skills'],
    inquiryText:
      'Hello ILM-ON, I want a luxury brand LinkedIn optimization similar to Ajas Rahim’s.',
  },
  {
    id: 'li-waleed',
    category: 'linkedin',
    categoryLabel: 'LinkedIn Optimization',
    title: 'Waleed Turkey — HR & Administration Professional Presence',
    subtitle: 'HR & Administration Officer | MHRM, Doha, Qatar',
    description:
      'Clean professional network branding, modern tech banner design, search-optimized human resources taxonomy, and streamlined public profile URL.',
    image:
      '/assets/Linkedin optimization, Naukri & Indeed profile optimization work samples/Screenshot 2026-10-25 184335.png',
    aspectRatio: 'landscape',
    tags: ['Real LinkedIn Profile', 'HR Management', 'Qatar Market', 'Clean Modern Banner'],
    inquiryText:
      'Hello ILM-ON, I want to optimize my LinkedIn profile for Qatar / Gulf HR roles.',
  },
  {
    id: 'li-workspace',
    category: 'linkedin',
    categoryLabel: 'LinkedIn Optimization',
    title: 'Enterprise LinkedIn Recruiter Search Environment',
    subtitle: 'Algorithm Calibration for Inbound Headhunter Discovery',
    description:
      'In-depth configuration of LinkedIn Recruiter search filters, Open to Work configurations, industry clustering, and skills endorsements to guarantee top percentile search visibility.',
    image: '/assets/career-services/linkedin-screen.jpg',
    aspectRatio: 'landscape',
    tags: ['Recruiter Analytics', 'Inbound Sourcing', 'Algorithm Calibration'],
    inquiryText:
      'Hello ILM-ON, I would like to optimize my LinkedIn for recruiter search filters.',
  },

  // ==========================================
  // 4. NAUKRI GULF PROFILE OPTIMIZATION (Unique)
  // ==========================================
  {
    id: 'nk-poster',
    category: 'naukri',
    categoryLabel: 'Naukri Gulf Optimization',
    title: 'Naukri Gulf Profile Optimization — Official Service Suite',
    subtitle: 'Essential for UAE, Saudi Arabia & Qatar Markets (₹799 / AED 35 / $9)',
    description:
      'Rank in the top tier of Gulf recruiter search queries. Keyword indexing for GCC labor market codes, visa status prominence (Visit, Residence, Transferable), and 100% profile score guarantee.',
    image: '/assets/career-services/naukri-profile-optimization.jpeg',
    aspectRatio: 'portrait',
    tags: ['₹799 / AED 35', 'GCC Search Ranking', 'Visa Prominence', '100% Score'],
    inquiryText:
      'Hello ILM-ON, I want to order Naukri Gulf Profile Optimization (₹799 / AED 35).',
  },
  {
    id: 'nk-suite',
    category: 'naukri',
    categoryLabel: 'Naukri Gulf Optimization',
    title: 'Professional Multi-Platform Optimization Suite',
    subtitle: 'Integrated Naukri Gulf, LinkedIn & Indeed Strategy',
    description:
      'Transform your digital profile presence across all top platforms. Maximizes candidate visibility to Gulf recruiters, hiring managers, and international placement agencies.',
    image: '/assets/career-services/profile-optimization-service.jpeg',
    aspectRatio: 'square',
    tags: ['Multi-Platform', 'Gulf Indexing', 'Recruiter Magnet'],
    inquiryText:
      'Hello ILM-ON, I want to order the multi-platform profile optimization suite.',
  },

  // ==========================================
  // 5. INDEED PROFILE OPTIMIZATION (Unique)
  // ==========================================
  {
    id: 'in-poster',
    category: 'indeed',
    categoryLabel: 'Indeed Optimization',
    title: 'Indeed Profile Optimization — Official Service Suite',
    subtitle: 'Targeted Keyword Tuning & Employer Search Visibility (₹499 / AED 25 / $7)',
    description:
      'Optimize your Indeed resume, skill assessments, and recruiter visibility settings. Ensure your profile surfaces when regional and multinational employers search for your target job title.',
    image: '/assets/career-services/indeed-profile-optimization.jpeg',
    aspectRatio: 'square',
    tags: ['₹499 / AED 25', 'Indeed Search', 'Skill Assessments', 'Keyword Tuning'],
    inquiryText:
      'Hello ILM-ON, I want to order Indeed Profile Optimization (₹499 / AED 25).',
  },
  {
    id: 'in-dual',
    category: 'indeed',
    categoryLabel: 'Indeed Optimization',
    title: 'Integrated Job Portal & Cross-Platform Alignment',
    subtitle: 'Synchronized Credentials for GCC & Global Employers',
    description:
      'Consistent presentation of your resume, assessments, and certifications across Indeed, Naukri Gulf, and LinkedIn to ensure employers find verified, high-converting credentials.',
    image: '/assets/career-services/profile-optimization-naukri-linkedin.jpeg',
    aspectRatio: 'square',
    tags: ['Synchronized Profile', 'Employer Visibility', 'Cross-Platform'],
    inquiryText:
      'Hello ILM-ON, I want to synchronize my Indeed and Gulf job portal profiles.',
  },
];

const CATEGORIES: { id: PortfolioCategory; label: string; icon: React.ReactNode; count: number }[] = [
  {
    id: 'cv-samples',
    label: 'CV Samples',
    icon: <FileText className="w-4 h-4" />,
    count: PORTFOLIO_ITEMS.filter((i) => i.category === 'cv-samples').length,
  },
  {
    id: 'client-feedback',
    label: 'Client Feedback',
    icon: <MessageSquare className="w-4 h-4" />,
    count: PORTFOLIO_ITEMS.filter((i) => i.category === 'client-feedback').length,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Optimization',
    icon: <Linkedin className="w-4 h-4" />,
    count: PORTFOLIO_ITEMS.filter((i) => i.category === 'linkedin').length,
  },
  {
    id: 'naukri',
    label: 'Naukri Gulf Optimization',
    icon: <Globe2 className="w-4 h-4" />,
    count: PORTFOLIO_ITEMS.filter((i) => i.category === 'naukri').length,
  },
  {
    id: 'indeed',
    label: 'Indeed Optimization',
    icon: <TrendingUp className="w-4 h-4" />,
    count: PORTFOLIO_ITEMS.filter((i) => i.category === 'indeed').length,
  },
];

export default function CareerPortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('cv-samples');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  // Manual scroll left/right handlers
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Audio Play / Pause handler
  const handleToggleAudio = (item: PortfolioItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!item.audioSrc) return;

    if (playingAudioId === item.id) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingAudioId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(item.audioSrc);
      audioRef.current = audio;

      audio.onloadedmetadata = () => {
        setAudioDuration(audio.duration);
      };

      audio.ontimeupdate = () => {
        setAudioCurrentTime(audio.currentTime);
        if (audio.duration) {
          setAudioProgress((audio.currentTime / audio.duration) * 100);
        }
      };

      audio.onended = () => {
        setPlayingAudioId(null);
        setAudioProgress(0);
        setAudioCurrentTime(0);
      };

      audio.play().catch(() => {
        setPlayingAudioId(null);
      });
      setPlayingAudioId(item.id);
    }
  };

  // Automatic sliding interval (comfortable 6 seconds)
  useEffect(() => {
    // Do not auto-slide if paused, if modal is open, or if audio is actively playing
    if (isPaused || selectedItem !== null || playingAudioId !== null) return;

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft >= maxScroll - 10) {
        // Return smoothly to beginning
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const step = clientWidth * 0.75;
        scrollContainerRef.current.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, selectedItem, playingAudioId, activeCategory]);

  // Keyboard navigation for modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
        if (currentIndex < filteredItems.length - 1) {
          setSelectedItem(filteredItems[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
        if (currentIndex > 0) {
          setSelectedItem(filteredItems[currentIndex - 1]);
        }
      }
    },
    [selectedItem, filteredItems]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Clean up audio on unmount or category change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setPlayingAudioId(null);
    }
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 bg-[#f8fafc] text-slate-900 relative overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AUTHENTIC WORK SAMPLES & PROVEN RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Explore Our Career Services Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover professional CV samples, genuine client feedback, and profile optimization work across leading career platforms.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shadow-sm shrink-0 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-blue-500/20 shadow-md scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-950 hover:border-slate-300'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dedicated CV Templates Callout Banner for CV Samples category */}
        {activeCategory === 'cv-samples' && (
          <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-950">
                  Looking for Our Complete CV Template Collection?
                </h4>
                <p className="text-xs text-slate-600">
                  Explore 35+ verified layout designs, modern color accents, and executive formats on our dedicated page.
                </p>
              </div>
            </div>
            <Link
              href="/cv-templates"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0 hover:scale-[1.02]"
            >
              <span>Browse All 35+ CV Templates</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Carousel Container (with hover & touch pause) */}
        <div
          className="relative group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-800 border border-slate-200 shadow-lg items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-800 border border-slate-200 shadow-lg items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Horizontal Scrolling Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 px-1 snap-x snap-mandatory scroll-smooth focus:outline-none"
            style={{ scrollbarWidth: 'thin' }}
          >
            {filteredItems.map((item, index) => {
              const isFeedback = item.category === 'client-feedback';
              const isLandscape = item.aspectRatio === 'landscape';

              return (
                <div
                  key={item.id}
                  className={`snap-start shrink-0 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
                    isLandscape
                      ? 'w-[320px] sm:w-[440px] md:w-[480px]'
                      : isFeedback
                      ? 'w-[280px] sm:w-[320px] md:w-[340px]'
                      : 'w-[290px] sm:w-[340px] md:w-[360px]'
                  }`}
                >
                  {/* Image Card Top Area */}
                  <div>
                    <div
                      onClick={() => {
                        if (isFeedback) {
                          // Client feedback click opens official Instagram per Phase 6
                          window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
                        } else {
                          setSelectedItem(item);
                        }
                      }}
                      className={`relative w-full cursor-pointer overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center p-2.5 ${
                        isLandscape
                          ? 'aspect-[16/9]'
                          : isFeedback
                          ? 'aspect-[4/5]'
                          : item.aspectRatio === 'square'
                          ? 'aspect-square'
                          : 'aspect-[3/4]'
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes={
                          isLandscape
                            ? '(max-width: 640px) 320px, 480px'
                            : '(max-width: 640px) 280px, 360px'
                        }
                        loading={index < 3 ? 'eager' : 'lazy'}
                        className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />

                      {/* Hover Overlay: Opens Instagram for Feedback, or Lightbox for Work */}
                      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                        {isFeedback ? (
                          <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs shadow-md flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                            <Instagram className="w-3.5 h-3.5 text-white" />
                            <span>View on Instagram</span>
                          </span>
                        ) : (
                          <span className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-md flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                            <Eye className="w-3.5 h-3.5 text-blue-600" />
                            <span>Click to Inspect Full Size</span>
                          </span>
                        )}
                      </div>

                      {/* Category Tag Overlay */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-blue-700 border border-slate-200/80 shadow-sm backdrop-blur-sm">
                          {item.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-700 mt-1 line-clamp-1">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Dedicated Aswathy Audio Player Block */}
                      {item.isAudioFeedback && item.audioSrc && (
                        <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="text-[11px] font-bold text-slate-900">
                                Client Voice Note
                              </span>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-500">
                              {formatTime(audioCurrentTime)} / {formatTime(audioDuration || 60)}
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-3">
                            <div
                              className="bg-emerald-500 h-full transition-all duration-200"
                              style={{ width: `${audioProgress}%` }}
                            />
                          </div>

                          {/* Play/Pause Button */}
                          <button
                            onClick={(e) => handleToggleAudio(item, e)}
                            className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                          >
                            {playingAudioId === item.id ? (
                              <>
                                <Pause className="w-3.5 h-3.5 fill-current" />
                                <span>Pause Voice Note</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>Play Voice Feedback</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}

                      {/* Tag Badges */}
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-5 sm:p-6 pt-0">
                    {isFeedback ? (
                      <div className="flex items-center gap-2">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-xs font-bold text-center transition-all shadow-sm flex items-center justify-center gap-1.5 hover:opacity-95"
                        >
                          <Instagram className="w-3.5 h-3.5" />
                          <span>View on Instagram</span>
                        </a>
                        <a
                          href={`https://wa.me/919292940652?text=${encodeURIComponent(item.inquiryText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1 hover:scale-105 active:scale-95"
                          title="Inquire about this on WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                        </a>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Sample</span>
                        </button>
                        <a
                          href={`https://wa.me/919292940652?text=${encodeURIComponent(item.inquiryText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1 hover:scale-105 active:scale-95"
                          title="Inquire about this on WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span className="hidden sm:inline">Order</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="sm:hidden flex items-center justify-center gap-2 mt-2 text-xs text-slate-500 font-medium">
            <span>Swipe horizontally or let auto-scroll play</span>
            <span className="animate-pulse">👉</span>
          </div>
        </div>

        {/* Bottom Portfolio Guarantee & WhatsApp / Instagram Action Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-950">
                100% Genuine Deliverables & Real Results
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Every CV, profile optimization, and client review showcased above represents genuine work completed by the ILM-ON team.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0 justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Visit Official Instagram</span>
            </a>
            <a
              href="https://wa.me/919292940652?text=Hello%20ILM-ON,%20I%20am%20exploring%20your%20career%20portfolio%20and%20would%20like%20to%20consult%20with%20your%20expert."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center transition-all shadow-md hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FULL-SIZE LIGHTBOX MODAL (Click to expand inspection) */}
      {/* ============================================================ */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[94vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-200"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3 pr-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                  {selectedItem.categoryLabel}
                </span>
                <span className="text-sm font-bold text-slate-950 truncate max-w-xs sm:max-w-md md:max-w-xl">
                  {selectedItem.title}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 flex items-center justify-center transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 min-h-[50vh] sm:min-h-[60vh] max-h-[70vh] w-full bg-slate-900 flex items-center justify-center p-4">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                priority
                className="object-contain"
              />

              {/* Prev Button inside Modal */}
              <button
                onClick={() => {
                  const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
                  if (currentIndex > 0) {
                    setSelectedItem(filteredItems[currentIndex - 1]);
                  }
                }}
                disabled={filteredItems.findIndex((i) => i.id === selectedItem.id) === 0}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-all"
                aria-label="Previous sample"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button inside Modal */}
              <button
                onClick={() => {
                  const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
                  if (currentIndex < filteredItems.length - 1) {
                    setSelectedItem(filteredItems[currentIndex + 1]);
                  }
                }}
                disabled={
                  filteredItems.findIndex((i) => i.id === selectedItem.id) ===
                  filteredItems.length - 1
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-all"
                aria-label="Next sample"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer & Actions */}
            <div className="px-5 sm:px-6 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="max-w-xl">
                <div className="text-xs font-bold text-slate-900">{selectedItem.subtitle}</div>
                <div className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {selectedItem.description}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  Close (ESC)
                </button>
                <a
                  href={`https://wa.me/919292940652?text=${encodeURIComponent(selectedItem.inquiryText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
