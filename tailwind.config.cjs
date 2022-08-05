/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-alien':
          "url('https://res.cloudinary.com/skillien/image/upload/v1659331079/fondo_kka10f.png')",
      },
    },
  },
  plugins: [],
};
