/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // 🎨 Colors
      colors: {
        ...colors,
        orange: '#F98513',
        blue: '#223382',
        lightBlue: '#9BACD8',
        marine: '#111144',
        beige: '#DAD1C8',
        white: '#F4F1EC ',
      },
      // 🖋️ Fonts
      fontFamily: {
        rammetto: 'Rammetto One',
        kanit: 'Kanit',
        birthstone: 'Birthstone',
      },
    },
  },
  plugins: [],
};
