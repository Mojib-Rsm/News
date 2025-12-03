/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Hind Siliguri"', 'sans-serif'],
        serif: ['"Noto Serif Bengali"', 'serif'],
      },
      colors: {
        primary: '#DC2626', // Red-600
        secondary: '#1F2937', // Gray-800
        accent: '#F3F4F6', // Gray-100
      }
    },
  },
  plugins: [],
}