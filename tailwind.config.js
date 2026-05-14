/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: '#c9a87c',
        'gold-light': '#e8cfa9',
        'gold-dark': '#a67c52',
        rose: '#b76e79',
        'rose-light': '#d4a0a7',
        'rose-deep': '#8e4955',
        blush: '#f0c4c8',
        'blush-light': '#f8e0e3',
        'blush-muted': '#d4979e',
        dark: '#1a1118',
        'dark-card': '#2a1c24',
        'dark-surface': '#362430',
        cream: '#fdf2f0',
        'text-light': '#f0deda',
        'text-muted': '#c0a0a6',
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        display: ['"Playfair Display"', 'serif'],
        elegant: ['"Cormorant Garamond"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
