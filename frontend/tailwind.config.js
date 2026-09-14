/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#F5B800',
          light: '#FFD700',
          dark: '#D4A017'
        },
        dark: {
          DEFAULT: '#0D0D0D',
          card: '#111111',
          secondary: '#1A1A1A'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
    },
  },
  safelist: [
    'animate-pulse',
    'animate-bounce',
  ],
  plugins: [],
}
