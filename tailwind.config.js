/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'wight-rgba-01': 'rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
