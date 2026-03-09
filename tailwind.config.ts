import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        bg: '#0A0A0A',
        'bg-elevated': '#111111',
        'sincero-blue': '#0649cb',
        'sincero-gold': '#F3A953',
        text: '#F5F5F0',
        'text-muted': '#6B6B6B',
        rule: '#222222',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#0649cb',
          foreground: '#F5F5F0',
        },
        secondary: {
          DEFAULT: '#F3A953',
          foreground: '#0A0A0A',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: '#111111',
          foreground: '#6B6B6B',
        },
        accent: {
          DEFAULT: '#F3A953',
          foreground: '#0A0A0A',
        },
        popover: {
          DEFAULT: '#111111',
          foreground: '#F5F5F0',
        },
        card: {
          DEFAULT: '#111111',
          foreground: '#F5F5F0',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 14vw, 13rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-md': ['1rem', { lineHeight: '1.65' }],
        'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.18em' }],
        'email': ['clamp(1.25rem, 3.5vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      spacing: {
        'section': '10rem',
        'section-sm': '5rem',
        'section-xs': '3rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
