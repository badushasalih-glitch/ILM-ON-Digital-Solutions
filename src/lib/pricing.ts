/**
 * ILM-ON Digital Solutions - Centralized Pricing & Service Registry
 * 
 * IMPORTANT: All rates, turnaround times, and revision policies are maintained here.
 * Any provisional prices are flagged with `isProvisional: true` and can be adjusted
 * dynamically as business policies are confirmed.
 * 
 * Confirmed Price Safeguard:
 * ATS CV + Strategic Cover Letter in India is officially confirmed at ₹999 (AED 40).
 */

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  category: 'cv' | 'profile' | 'bundle';
  priceINR: number;
  priceAED: number;
  priceUSD?: number;
  promoPriceINR?: number;
  promoPriceAED?: number;
  isProvisional: boolean;
  popular?: boolean;
  badge?: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  description: string;
  suitableFor: string;
  routeUrl: string;
  whatsappMessage: string;
  desk: 'india' | 'uae' | 'both';
  iconName: string;
}

export interface BusinessPolicyConfig {
  standardTurnaround: string;
  expressTurnaround: string;
  revisionWindow: string;
  maxRevisionRounds: string;
  deliveryFormats: string[];
  paymentMethodsIndia: string[];
  paymentMethodsUAE: string[];
  disclaimer: string;
  contacts: {
    indiaDesk: {
      phone: string;
      displayPhone: string;
      whatsappUrl: string;
    };
    uaeDesk: {
      phone: string;
      displayPhone: string;
      whatsappUrl: string;
    };
    email: string;
  };
}

export const BUSINESS_POLICIES: BusinessPolicyConfig = {
  standardTurnaround: '24–48 Hours',
  expressTurnaround: '12–24 Hours (upon request)',
  revisionWindow: '7 Days from initial draft',
  maxRevisionRounds: 'Up to 2 comprehensive rounds',
  deliveryFormats: ['Print-ready PDF', 'Fully editable Microsoft Word (.docx)'],
  paymentMethodsIndia: ['Google Pay', 'PhonePe', 'Paytm', 'UPI ID', 'Direct Bank Transfer (NEFT/IMPS)'],
  paymentMethodsUAE: ['UAE Local Bank Transfer', 'FAB / ENBD / ADCB Wire', 'Secure Payment Link'],
  disclaimer:
    'ILM-ON Digital Solutions provides professional document formatting, keyword optimization, and career advisory services. We do not guarantee job placements, interview callbacks, specific ATS scores, or hiring decisions, as these remain solely at the discretion of employers and recruitment algorithms.',
  contacts: {
    indiaDesk: {
      phone: '+9192929406522',
      displayPhone: '+91 92929406522',
      whatsappUrl: 'https://wa.me/9192929406522',
    },
    uaeDesk: {
      phone: '+971562958907',
      displayPhone: '+971 56 295 8907',
      whatsappUrl: 'https://wa.me/971562958907',
    },
    email: 'info@ilmondigitalsolutions.online',
  },
};

export const CAREER_SERVICES: ServicePackage[] = [
  {
    id: 'ats-cv',
    name: 'ATS-Friendly CV',
    tagline: 'Engineered for recruitment software & human scanners',
    category: 'cv',
    priceINR: 599,
    priceAED: 25,
    priceUSD: 7,
    isProvisional: true,
    popular: true,
    badge: 'MOST POPULAR',
    deliveryTime: '24–48 Hours',
    revisions: 'Free revisions (7 days)',
    description:
      'A streamlined, single-column, parser-friendly CV formatted to pass through standard Applicant Tracking Systems without layout glitches, featuring role-aligned keywords and quantifiable achievements.',
    suitableFor: 'Online job applications via Workday, Taleo, Greenhouse, and corporate portals',
    routeUrl: '/ats-cv',
    features: [
      'Single-column, parser-friendly layout',
      'Target role keyword integration',
      'Action-driven achievement bullet points',
      'Editable Word (.docx) + Print-Ready PDF',
      'Compliant with standard recruiter parsers',
    ],
    whatsappMessage: 'Hello ILM-ON, I would like to order an ATS-Friendly CV.',
    desk: 'both',
    iconName: 'FileCheck',
  },
  {
    id: 'normal-cv',
    name: 'Professional Modern CV',
    tagline: 'Clean aesthetic formatting for direct application review',
    category: 'cv',
    priceINR: 499,
    priceAED: 25,
    priceUSD: 7,
    isProvisional: true,
    deliveryTime: '24–48 Hours',
    revisions: 'Free revisions (7 days)',
    description:
      'Elegant, professional document styling ideal for local companies, direct email submissions, walk-in interviews, and networking events.',
    suitableFor: 'Direct email submissions, walk-in interviews, and executive networking',
    routeUrl: '/career-services#normal-cv',
    features: [
      'Clean modern aesthetic typography',
      'Tailored career summary & key skills',
      'Structured chronological work history',
      'Editable Word (.docx) + PDF delivery',
      'Quick turnaround with direct consultant review',
    ],
    whatsappMessage: 'Hello ILM-ON, I would like to order a Professional Modern CV.',
    desk: 'both',
    iconName: 'FileText',
  },
  {
    id: 'cv-cover-letter',
    name: 'ATS CV + Strategic Cover Letter',
    tagline: 'Complete job application combo pack',
    category: 'bundle',
    priceINR: 999,
    priceAED: 40,
    priceUSD: 12,
    isProvisional: false,
    popular: true,
    badge: 'BEST VALUE COMBO',
    deliveryTime: '24–48 Hours',
    revisions: 'Free revisions (7 days)',
    description:
      'Pair your ATS-compliant CV with a persuasive, role-tailored cover letter that explains your motivations, core strengths, and immediate value to prospective employers.',
    suitableFor: 'Candidates applying for competitive positions needing a strong tailored narrative hook',
    routeUrl: '/cover-letter',
    features: [
      'Complete ATS-Friendly CV included',
      'Role-tailored strategic cover letter',
      'Consistent header and visual identity',
      'Customizable template for future jobs',
      'Delivered in editable Word & PDF',
    ],
    whatsappMessage: 'Hello ILM-ON, I would like to order the ATS CV + Cover Letter combo package (₹999 / AED 40).',
    desk: 'both',
    iconName: 'Layers',
  },
  {
    id: 'europass-cv',
    name: 'Europass Standard CV',
    tagline: 'Aligned with European Commission standards',
    category: 'cv',
    priceINR: 899,
    priceAED: 35,
    priceUSD: 11,
    isProvisional: true,
    deliveryTime: '24–48 Hours',
    revisions: 'Free revisions (7 days)',
    description:
      'Official European Union standard format structured for applications across Germany, Ireland, Malta, Poland, and EU-wide employment or educational programs.',
    suitableFor: 'Professionals & students seeking employment or study programs across the European Union',
    routeUrl: '/europass-cv',
    features: [
      'Standard European Commission layout',
      'Mother tongue & language proficiency scale',
      'Digital competence & technical skill matrix',
      'EU employer recognition standard',
      'Editable Word & official PDF formats',
    ],
    whatsappMessage: 'Hello ILM-ON, I would like to order a Europass Standard CV.',
    desk: 'both',
    iconName: 'Compass',
  },
  {
    id: 'linkedin-optimization',
    name: 'LinkedIn Profile Optimization',
    tagline: 'Elevate your personal brand for recruiter searches',
    category: 'profile',
    priceINR: 970,
    priceAED: 40,
    priceUSD: 12,
    isProvisional: true,
    deliveryTime: '48 Hours',
    revisions: 'Comprehensive 1-on-1 review',
    description:
      'Transform your LinkedIn presence into a high-visibility recruiter magnet with a compelling headline, strategic "About" narrative, and skill taxonomy alignment.',
    suitableFor: 'Mid-career to executive professionals seeking inbound recruiter headhunting and global visibility',
    routeUrl: '/linkedin-optimization',
    features: [
      'High-impact headline with search keywords',
      'Compelling first-person "About" narrative',
      'Work experience re-framing with metrics',
      'Top 50 skills taxonomy alignment',
      'Step-by-step implementation guide or direct update',
    ],
    whatsappMessage: 'Hello ILM-ON, I want to optimize my LinkedIn Profile.',
    desk: 'both',
    iconName: 'Linkedin',
  },
  {
    id: 'naukri-gulf-optimization',
    name: 'Naukri Gulf Optimization',
    tagline: 'Specialized for UAE, Saudi Arabia, and GCC hiring',
    category: 'profile',
    priceINR: 799,
    priceAED: 35,
    priceUSD: 10,
    isProvisional: true,
    badge: 'GCC ESSENTIAL',
    deliveryTime: '48 Hours',
    revisions: 'Comprehensive Gulf HR review',
    description:
      'Engineered specifically for the GCC job market by UAE-experienced HR professionals to maximize recruiter search visibility across Dubai, Abu Dhabi, Doha, and Riyadh.',
    suitableFor: 'Job seekers relocating to or currently working in UAE, Saudi Arabia, Qatar, or Oman',
    routeUrl: '/naukri-gulf-optimization',
    features: [
      'Gulf-standard key skills engineering',
      'Prominent GCC visa status & notice period setup',
      'Target job role & industry alignment',
      'Gulf recruiter search visibility enhancements',
      'Guided by Dubai desk HR advisory',
    ],
    whatsappMessage: 'Hello ILM-ON Dubai Desk, I would like to optimize my Naukri Gulf profile.',
    desk: 'uae',
    iconName: 'Globe',
  },
  {
    id: 'indeed-optimization',
    name: 'Indeed Profile Optimization',
    tagline: 'Optimized for high-volume recruiter parsing',
    category: 'profile',
    priceINR: 499,
    priceAED: 20,
    priceUSD: 6,
    isProvisional: true,
    deliveryTime: '24–48 Hours',
    revisions: 'Free revisions (7 days)',
    description:
      'Structured for seamless resume parsing on Indeed UAE, GCC, and International boards so hiring managers immediately find your relevant qualifications.',
    suitableFor: 'Active candidates submitting high volumes of applications across regional job boards',
    routeUrl: '/indeed-optimization',
    features: [
      'Clean parsing alignment for Indeed algorithm',
      'Standardized job titles & skill tags',
      'Assessment readiness recommendations',
      'Quick application matching configuration',
      'Full profile review checklist',
    ],
    whatsappMessage: 'Hello ILM-ON, I would like to optimize my Indeed Profile.',
    desk: 'both',
    iconName: 'Search',
  },
  {
    id: 'career-boost-bundle',
    name: 'Career Boost Package',
    tagline: 'CV + Cover Letter + LinkedIn Profile Transformation',
    category: 'bundle',
    priceINR: 1799,
    priceAED: 75,
    priceUSD: 22,
    isProvisional: true,
    badge: 'BEST VALUE',
    deliveryTime: '48–72 Hours',
    revisions: 'Priority revisions (14 days)',
    description:
      'The complete career branding package: an ATS-compliant CV, targeted cover letter, and a fully revamped LinkedIn profile for comprehensive application readiness.',
    suitableFor: 'Professionals seeking an end-to-end career rebranding across all application and digital touchpoints',
    routeUrl: '/pricing',
    features: [
      'Complete ATS-Friendly CV',
      'Tailored Strategic Cover Letter',
      'Full LinkedIn Profile Optimization',
      'Cohesive personal branding across channels',
      'Direct WhatsApp priority support',
    ],
    whatsappMessage: 'Hello ILM-ON, I would like to order the Career Boost Package.',
    desk: 'both',
    iconName: 'Sparkles',
  },
  {
    id: 'gcc-jobseeker-bundle',
    name: 'GCC Job Seeker Package',
    tagline: 'The complete Gulf relocation & career suite',
    category: 'bundle',
    priceINR: 2299,
    priceAED: 95,
    priceUSD: 28,
    isProvisional: true,
    badge: 'DUBAI & GULF SUITE',
    deliveryTime: '48–72 Hours',
    revisions: 'Priority revisions (14 days)',
    description:
      'Designed for professionals seeking employment in UAE, Saudi Arabia, and Qatar. Combines Gulf-standard CV, cover letter, LinkedIn, and Naukri Gulf optimization.',
    suitableFor: 'Expats and regional candidates aiming for corporate placements across Dubai and the Gulf',
    routeUrl: '/pricing',
    features: [
      'Gulf-compliant ATS CV with visa & location setup',
      'Targeted Gulf cover letter',
      'LinkedIn Profile Optimization',
      'Naukri Gulf Profile Optimization',
      'Direct advisory from our Dubai desk',
    ],
    whatsappMessage: 'Hello ILM-ON Dubai Desk, I want to order the GCC Job Seeker Package.',
    desk: 'uae',
    iconName: 'Award',
  },
];
