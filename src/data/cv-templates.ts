export interface CVTemplate {
  id: string;
  name: string;
  category: 'executive' | 'modern' | 'accent' | 'international';
  categoryLabel: string;
  format: string;
  image: string;
  description: string;
  tags: string[];
}

export const CV_TEMPLATES: CVTemplate[] = [
  // International Standard Preserved
  {
    id: 'tpl-canadian-1',
    name: 'Canadian Standard Professional Resume (Page 1)',
    category: 'international',
    categoryLabel: 'International Standards',
    format: 'North American / Canadian',
    image: '/assets/cv-canadian-1.jpg',
    description:
      'Compliant with North American anti-discrimination standards (photo-free, anti-bias). Engineered for Canadian immigration point scoring and corporate recruiters.',
    tags: ['Canadian Format', 'Anti-Bias Scoring', 'ATS 100%'],
  },
  {
    id: 'tpl-canadian-2',
    name: 'Canadian Standard Professional Resume (Page 2)',
    category: 'international',
    categoryLabel: 'International Standards',
    format: 'North American / Canadian',
    image: '/assets/cv-canadian-2.jpg',
    description:
      'Structured technical competencies, education, and career milestone credentials aligned with Canadian corporate review standards.',
    tags: ['Canadian Format', 'Credential Verification'],
  },
  {
    id: 'tpl-europass-1',
    name: 'Official Europass Standard Curriculum Vitae (Page 1)',
    category: 'international',
    categoryLabel: 'International Standards',
    format: 'European Union Standard',
    image: '/assets/cv-europass-1.png',
    description:
      'Official European Union standardized format. Adheres to CEFR language assessment levels and cross-border EU recruitment protocols.',
    tags: ['Europass', 'European Union', 'CEFR Languages'],
  },
  {
    id: 'tpl-europass-2',
    name: 'Official Europass Standard Curriculum Vitae (Page 2)',
    category: 'international',
    categoryLabel: 'International Standards',
    format: 'European Union Standard',
    image: '/assets/cv-europass-2.png',
    description:
      'Organizational abilities, computer proficiencies, driver license mobility, and technical certifications under the Europass framework.',
    tags: ['Europass', 'EU Mobility', 'Competency Matrix'],
  },
  {
    id: 'tpl-faizal-exec',
    name: 'Executive Operations & Project Leadership Model',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: 'GCC & Tier-1 EPC Standard',
    image: '/assets/career-services/ats-sample-faizal.jpeg',
    description:
      'High-density keyword formatting tailored for engineering, EPC contractors, and corporate operations leadership in UAE and Saudi Arabia.',
    tags: ['GCC Executive', 'Tier-1 EPC', 'High Density ATS'],
  },
  {
    id: 'tpl-estelle-hc',
    name: 'Clinical Healthcare & Institutional Model',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: 'International Healthcare',
    image: '/assets/career-services/ats-sample-estelle.jpeg',
    description:
      'Engineered for hospital administration, clinical specialties, and healthcare licensing compliance across GCC and Western systems.',
    tags: ['Healthcare Format', 'Clinical Matrix', 'Taleo / Workday'],
  },

  // 34 Verified Badusha Mohamed Salih Layout Templates
  {
    id: 'tpl-bms-navy-head',
    name: 'Corporate Navy Executive Header Format',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: 'Corporate Executive',
    image: '/assets/CV Templates - NEW/Screenshot 2026-09-26 151700.png',
    description:
      'Deep navy branding header with executive headshot container, structured achievements block, and chronological career trajectory.',
    tags: ['Navy Header', 'Executive Profile', 'Corporate Sales'],
  },
  {
    id: 'tpl-bms-blk-clean',
    name: 'Modern Procurement & Operations Format',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'Modern Clean',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 064331.png',
    description:
      'High-contrast header typography, dual-column contact details, and clean horizontal dividers for maximum visual scannability.',
    tags: ['High Contrast', 'Modern Layout', 'Clean Scannability'],
  },
  {
    id: 'tpl-bms-purple-accent',
    name: 'Contemporary Royal Accent Layout',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Contemporary Accent',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 065232.png',
    description:
      'Sophisticated violet/purple accent headers with highlighted core skills taxonomy and prominent achievement callouts.',
    tags: ['Purple Accent', 'Modern Sections', 'Core Skills'],
  },
  {
    id: 'tpl-bms-terracotta',
    name: 'Terracotta Badged Competency Layout',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Terracotta Accent',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 065332.png',
    description:
      'Warm accent typography featuring rounded skill badges, streamlined education blocks, and prominent contact details.',
    tags: ['Terracotta Badges', 'Skill Pills', 'Visual Hierarchy'],
  },
  {
    id: 'tpl-bms-monochrome-blk',
    name: 'Classic Monochrome Dual Column Template',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'Monochrome Minimal',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 065403.png',
    description:
      'Classic high-contrast black and slate formatting. Ideal for conservative corporate sectors like banking, auditing, and procurement.',
    tags: ['Monochrome', 'Banking & Audit', 'Strict Clean'],
  },
  {
    id: 'tpl-bms-photo-right',
    name: 'Executive Right-Aligned Portrait Format',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: 'Executive Profile',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 065507.png',
    description:
      'Clean asymmetrical header pairing bold name typography with an executive headshot and left-aligned contact information.',
    tags: ['Executive Portrait', 'Asymmetrical Header', 'Clean Alignment'],
  },
  {
    id: 'tpl-bms-teal-badge',
    name: 'Teal Modern Skill Badge Layout',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Teal Contemporary',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 065552.png',
    description:
      'Modern teal accents with categorized bullet points, high-impact key achievements section, and clear chronological history.',
    tags: ['Teal Accents', 'Chronological', 'Key Milestones'],
  },
  {
    id: 'tpl-bms-slate-border',
    name: 'Bordered Minimalist Dossier Layout',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'Minimalist Border',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 065636.png',
    description:
      'Refined bounding borders separating personal profile, core responsibilities, and verified credentials.',
    tags: ['Bordered Layout', 'Section Boxes', 'High Readability'],
  },
  {
    id: 'tpl-bms-blue-banner',
    name: 'Vivid Blue Corporate Accent Format',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Corporate Vivid Blue',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 065714.png',
    description:
      'Signature ILM-ON blue section styling with prominent experience dates and cleanly formatted degree qualifications.',
    tags: ['Vivid Blue', 'ILM-ON Signature', 'Corporate Standard'],
  },
  {
    id: 'tpl-bms-bold-sans',
    name: 'Editorial Bold Sans Layout',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'Editorial Sans',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 065744.png',
    description:
      'Contemporary typographic layout prioritizing rapid visual parsing by executive recruiters during the 6-second scan.',
    tags: ['Editorial Typography', 'Rapid Scan', 'Executive Recruiter'],
  },
  {
    id: 'tpl-bms-dual-sidebar',
    name: 'Split-Column Functional Sidebar Format',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Functional Split',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 065809.png',
    description:
      'Dedicated left sidebar for skills, languages, and contact channels with a wide right rail dedicated to career impact.',
    tags: ['Split Rail', 'Sidebar Layout', 'Compact Experience'],
  },
  {
    id: 'tpl-bms-classic-serif',
    name: 'Executive Traditional Serif Format',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: 'Traditional Executive',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 065850.png',
    description:
      'Timeless corporate layout with serif heading accents, perfect for legal, academic, advisory, and senior leadership positions.',
    tags: ['Serif Accent', 'Senior Leadership', 'Legal & Advisory'],
  },
  {
    id: 'tpl-bms-emerald-head',
    name: 'Emerald Green Modern Accent Format',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Emerald Accent',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070009.png',
    description:
      'Distinctive emerald green header highlights, formatted with bulleted key achievements and quantified metrics.',
    tags: ['Emerald Green', 'Quantified Metrics', 'Modern Clean'],
  },
  {
    id: 'tpl-bms-compact-ats',
    name: 'High-Density 1-Page Compact ATS Format',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: '1-Page ATS Density',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070041.png',
    description:
      'Optimized page real-estate maximizing work experience while maintaining machine optical character recognition readability.',
    tags: ['1-Page Compact', 'High Density', 'Maximum Content'],
  },
  {
    id: 'tpl-bms-charcoal-div',
    name: 'Charcoal Divider Corporate Format',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'Charcoal Minimal',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070110.png',
    description:
      'Clean charcoal line separators dividing career summary, key achievements, and education history.',
    tags: ['Charcoal Line', 'Divider Format', 'Balanced Spacing'],
  },
  {
    id: 'tpl-bms-sky-accent',
    name: 'Sky Blue Modern Highlight Layout',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Sky Blue Accent',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070136.png',
    description:
      'Fresh sky blue accents on skills and dates, giving the CV an approachable, modern feel for tech and marketing roles.',
    tags: ['Sky Blue', 'Tech & Digital', 'Fresh Modern'],
  },
  {
    id: 'tpl-bms-corporate-lead',
    name: 'Senior Management Trajectory Format',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: 'Senior Management',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070214.png',
    description:
      'Prominently showcases multi-year promotion trajectory, team leadership size, and direct profit/loss contributions.',
    tags: ['Promotion Trajectory', 'Team Leadership', 'P&L Contribution'],
  },
  {
    id: 'tpl-bms-grid-skills',
    name: 'Skills Matrix Grid Layout',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'Skills Grid',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070238.png',
    description:
      'Organized grid grouping technical proficiencies, management capabilities, and ERP/CRM software tooling.',
    tags: ['Skills Grid', 'Software Matrix', 'ERP & CRM'],
  },
  {
    id: 'tpl-bms-navy-bar',
    name: 'Navy Banner Headline Format',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: 'Navy Banner',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070304.png',
    description:
      'Stately navy header bar with integrated contact channel pill badges and clear professional summary positioning.',
    tags: ['Navy Banner', 'Pill Badges', 'Executive Headline'],
  },
  {
    id: 'tpl-bms-rounded-card',
    name: 'Modular Card-Based CV Format',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Modular Cards',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070327.png',
    description:
      'Contemporary UI-inspired card groupings for each employer tenure, making multi-role career histories easy to navigate.',
    tags: ['Modular Cards', 'Multi-Role', 'Clean Navigation'],
  },
  {
    id: 'tpl-bms-gradient-pill',
    name: 'Gradient Accented Technical Format',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Gradient Accent',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070351.png',
    description:
      'Subtle gradient skill tag capsules and high-visibility section headers for modern technology candidates.',
    tags: ['Gradient Capsules', 'Technical CV', 'Modern Look'],
  },
  {
    id: 'tpl-bms-pure-ats',
    name: 'Zero-Format Strict ATS Engine Format',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'Strict ATS Engine',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070434.png',
    description:
      'Zero graphics or unparseable blocks. Engineered purely for high-volume automated corporate applicant tracking systems.',
    tags: ['Pure ATS', 'Zero Parsing Loss', '100% Robot Scannable'],
  },
  {
    id: 'tpl-bms-bold-header',
    name: 'Bold Identity Header Format',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: 'Bold Identity',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070531.png',
    description:
      'Commanding name typography followed by target job designation and high-impact core competencies.',
    tags: ['Bold Identity', 'Target Title', 'Commanding Layout'],
  },
  {
    id: 'tpl-bms-two-tone',
    name: 'Two-Tone Executive Contrast Format',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Two-Tone Contrast',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070558.png',
    description:
      'Dark sidebar coupled with a crisp white content canvas. Keeps critical contact details permanently in focus.',
    tags: ['Two-Tone', 'Contrast Sidebar', 'Permanent Focus'],
  },
  {
    id: 'tpl-bms-classic-pro',
    name: 'Corporate Standard Professional Layout',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: 'Corporate Standard',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070624.png',
    description:
      'Balanced margins, clean font weights, and clear bullet point hierarchies recommended for Gulf commercial roles.',
    tags: ['Balanced Margins', 'Gulf Commercial', 'Clear Hierarchy'],
  },
  {
    id: 'tpl-bms-crimson-head',
    name: 'Crimson Accent Executive Layout',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Crimson Accent',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070651.png',
    description:
      'Deep ruby/crimson accents adding warmth and distinction to career milestones and academic awards.',
    tags: ['Crimson Accent', 'Academic Awards', 'Distinction'],
  },
  {
    id: 'tpl-bms-minimal-line',
    name: 'Line-Art Minimalist CV Format',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'Line-Art Minimal',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070714.png',
    description:
      'Delicate hairline dividers separating responsibilities, key achievements, and language proficiencies.',
    tags: ['Hairline Dividers', 'Ultra Minimal', 'Elegant Balance'],
  },
  {
    id: 'tpl-bms-slate-box',
    name: 'Shaded Section Box Format',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'Shaded Boxes',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070750.png',
    description:
      'Soft gray shaded blocks highlighting core technical tools, target roles, and immediate availability status.',
    tags: ['Shaded Blocks', 'Target Roles', 'Availability Prominence'],
  },
  {
    id: 'tpl-bms-indigo-pro',
    name: 'Royal Indigo Contemporary Format',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Royal Indigo',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070817.png',
    description:
      'Deep indigo section accents paired with clear bold typography and bulleted responsibilities.',
    tags: ['Indigo Accent', 'Bold Typography', 'Clear Bullets'],
  },
  {
    id: 'tpl-bms-pure-linear',
    name: 'Pure Linear Chronological Format',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'Linear Chronological',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070900.png',
    description:
      'Strict linear timeline format tracing continuous professional advancement from early roles to senior positions.',
    tags: ['Linear Timeline', 'Continuous Advancement', 'High Fidelity'],
  },
  {
    id: 'tpl-bms-gold-accent',
    name: 'Amber Gold Executive Accent Format',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Amber Gold Accent',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 070933.png',
    description:
      'Warm amber gold headings creating a distinctive executive presence for hospitality, luxury retail, and real estate.',
    tags: ['Amber Gold', 'Luxury & Real Estate', 'Hospitality CV'],
  },
  {
    id: 'tpl-bms-compact-grid',
    name: 'Two-Page Executive Comprehensive Dossier',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: '2-Page Comprehensive',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 071001.png',
    description:
      'Structured 2-page executive template for candidates with 7+ years experience needing full career depth.',
    tags: ['2-Page Depth', '7+ Years Experience', 'Comprehensive'],
  },
  {
    id: 'tpl-bms-steel-accent',
    name: 'Steel Blue Engineering & Tech Format',
    category: 'accent',
    categoryLabel: 'Accent & Dual Column',
    format: 'Steel Blue Tech',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 071059.png',
    description:
      'Cool steel-blue section formatting tailored for civil, mechanical, IT, and systems engineering professionals.',
    tags: ['Steel Blue', 'Engineering & Tech', 'Systems Focus'],
  },
  {
    id: 'tpl-bms-modern-summary',
    name: 'Prominent Executive Summary Format',
    category: 'executive',
    categoryLabel: 'Executive & Corporate',
    format: 'Summary Focus',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 071129.png',
    description:
      'Opens with an impactful 4-line executive career profile positioning the candidate for senior leadership opportunities.',
    tags: ['Summary Focus', 'Strategic Narrative', 'Leadership Positioning'],
  },
  {
    id: 'tpl-bms-final-clean',
    name: 'ILM-ON Signature Clean Professional Layout',
    category: 'modern',
    categoryLabel: 'Modern Minimalist',
    format: 'ILM-ON Signature Clean',
    image: '/assets/CV Templates - NEW/Screenshot 2026-10-26 071328.png',
    description:
      'The balanced flagship layout combining full ATS compatibility, elegant typography, and maximum recruiter engagement.',
    tags: ['Flagship Model', '100% ATS Scannable', 'Best All-Rounder'],
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'All Templates', count: CV_TEMPLATES.length },
  {
    id: 'executive',
    label: 'Executive & Corporate',
    count: CV_TEMPLATES.filter((t) => t.category === 'executive').length,
  },
  {
    id: 'modern',
    label: 'Modern Minimalist',
    count: CV_TEMPLATES.filter((t) => t.category === 'modern').length,
  },
  {
    id: 'accent',
    label: 'Accent & Dual Column',
    count: CV_TEMPLATES.filter((t) => t.category === 'accent').length,
  },
  {
    id: 'international',
    label: 'International Formats',
    count: CV_TEMPLATES.filter((t) => t.category === 'international').length,
  },
];
