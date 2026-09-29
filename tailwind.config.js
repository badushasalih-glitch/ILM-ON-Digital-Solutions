/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vivid: {
          blue: '#008CFF',
          dark: '#0070CC',
          light: '#EBF5FF',
          hover: '#0078DB',
        },
        dark: {
          950: '#050505',
          900: '#111111',
          850: '#171717',
          800: '#1E1E1E',
          700: '#2A2A2A',
        },
        teal: {
          accent: '#006B5B',
          dark: '#005246',
          light: '#E6F4F1',
          hover: '#00594C',
        },
        surface: {
          light: '#F6F9FC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          muted: '#64748B',
          subtle: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'elevated': '0 20px 40px -15px rgba(0, 140, 255, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
