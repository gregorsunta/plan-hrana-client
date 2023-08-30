/** @type {import('tailwindcss').Config}*/
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    screens: {
      xs: '500px',
      ...defaultTheme.screens,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      yellow: '#e9c46a',
      lightYellow: '#F9E5A1',
      orange: '#f4a261',
      darkOrange: '#e76f51',
      green: '#2a9d8f',
      darkGreen: '#264653',
    },
    fontFamily: {
      caveat: 'Caveat',
    },
  },
};
