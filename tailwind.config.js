/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        marine: {
          navy: {
            DEFAULT: '#0A192F',
            light: '#172A45',
            dark: '#020C1B',
          },
          teal: {
            DEFAULT: '#0D9488',
            light: '#14B8A6',
            dark: '#0F766E',
          },
        },
      },
    },
  },
  plugins: [],
};

