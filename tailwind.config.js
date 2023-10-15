/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['Noto Sans', 'Arial', 'sans-serif'],
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
        },
      },
      colors: {
        default: '#0B0B22',
        green: '#16FCD2',
        btnPrimary: '#6016FC',
        paragraf: '#FFFFFF',
        cardProject: '#161629',
        bgSection: '#221048',
        cardprice1: '#3F2379',
        cardprice2: '#233679',
        cardprice3: '#792366',
      },
    },
  },
  plugins: [require('preline/plugin')],
};
