/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marrom: "#977656",
        marromClaro: "#F2DAC2"
      },
      fontFamily: {
        berkshire: ["Berkshire Swash", 'sans-serif'],
        sans: ["Gupter", 'sans-serif'],
      },
      backgroundImage: {
        'fundo': "url('/src/assets/service.jpg')",
      },
   
         },
  },
  plugins: [],
}

