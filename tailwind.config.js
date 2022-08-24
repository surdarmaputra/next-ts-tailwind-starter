// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './.storybook/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: colors.slate,
        primary: colors.indigo,
        success: colors.emerald,
        danger: colors.rose,
        warning: colors.amber,
        info: colors.sky,
      },
    },
  },
  plugins: [],
};
