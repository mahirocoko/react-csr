/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/**/**/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      '4xl': { max: '1600px' },
      '3xl': { max: '1440px' },
      '2xl': { max: '1366px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
      xs: { max: '376px' },
      se: { max: '340px' },
    },

    extend: {
      colors: {
        divider: 'hsl(var(--divider))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          margin: '0 auto',
          maxWidth: '1440px',
          padding: `0px ${theme('spacing.8')}`,
          '@media (max-width: 1280px)': {
            maxWidth: '100%',
          },
          '@media (max-width: 640px)': {
            padding: `0px ${theme('spacing.4')}`,
          },
          '@media (max-width: 340px)': {
            padding: `0px ${theme('spacing.3')}`,
          },
        },
      })
    }),
    require('tailwindcss-animate'),
  ],
}
