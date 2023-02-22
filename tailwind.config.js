const defaultConfig = require('@takeda/ui/tailwind/default.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [defaultConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@takeda/ui/**/*.{html,js,ts,jsx,tsx}',
    '!./node_modules/@takeda/ui/node_modules',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
