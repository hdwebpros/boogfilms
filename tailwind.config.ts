import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        'film-black': '#0a0a0a',
        'film-dark': '#141414',
        'film-charcoal': '#1e1e1e',
        'film-gold': '#c9a84c',
        'film-gold-light': '#e8d48b',
        'film-cream': '#f5f0e1',
        'film-muted': '#8a8a8a',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
} satisfies Config
