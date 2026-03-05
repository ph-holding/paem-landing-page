/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Off-white clean base
        surface: '#FFFFFF',
        primary: '#111111', // Deep near-black
        secondary: '#4A4A4A', // Neutral gray for secondary text
        border: '#E5E5E5',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Noto Serif Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        '112': '28rem',
      },
    },
  },
  plugins: [],
}
