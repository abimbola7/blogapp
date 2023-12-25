/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/page.js'
  ],
  theme: {
    extend: {
      colors : {
        lightGray : "#ABABAB",
        darkGray : "#7D7D7D"
      }
    },
  },
  plugins: [],
}
