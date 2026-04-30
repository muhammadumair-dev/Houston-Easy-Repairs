import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0F172A',
        'secondary-bg': '#1E293B',
        'card-bg': '#1A2438',
        'primary-accent': '#3B82F6',
        'primary-hover': '#2563EB',
        'secondary-accent': '#06B6D4',
        'success': '#10B981',
        'primary-text': '#F8FAFC',
        'secondary-text': '#CBD5E1',
        'muted-text': '#94A3B8',
        'border': '#334155',
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'premium-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
} satisfies Config;
