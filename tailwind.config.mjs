/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        sailor: {
          blue: '#0B3C5D',
          teal: '#00A8C6',
          gold: '#FFC857',
          dark: '#071013'
        }
      }
    }
  },
  plugins: []
};

export default config;
