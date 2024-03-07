/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#e13b3b',
        secondary: '#792323',
        bgcolor: '#410e0e ',
        filter: '#666'
      },
      fontFamily: {
        sora : "'Sora Variable', sans-serif;"
      },
      backgroundImage: {
        'responsive': 'linear-gradient(to bottom, rgb(19, 18, 20, 0.9), rgb(26, 19, 26, 0.9), rgb(35, 19, 29, 0.9), rgb(35, 19, 29, 0.9), rgb(55, 15, 25, 0.9), rgb(63, 16, 24, 0.9), rgb(71, 17, 23, 0.9), rgb(78, 19, 20, 0.9), rgb(88, 23, 24, 0.9), rgb(99, 27, 27, 0.9), rgb(110, 31, 31, 0.9), rgb(121, 35, 35, 0.9));'
      }
    },
  },
  plugins: [],
}

