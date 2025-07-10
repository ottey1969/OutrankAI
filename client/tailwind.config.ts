/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{ts,tsx}',     // ✅ for app router
    './pages/**/*.{ts,tsx}',   // optional for pages/
    './components/**/*.{ts,tsx}', // if you add components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
