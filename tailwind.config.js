/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        gradientStart: "#FD267A",
        gradientEnd: "#FF6036",
        customWhite: "#E9EBEE",
        customBlack: "#111418",
      },
      backgroundImage: {
        'gradient-to-right': "linear-gradient(to right, #FD267A, #FF6036)",
      },
      textGradient: {
        'gradient-to-right': "linear-gradient(to right, #FD267A, #FF6036)",
      },
    },
  },
  plugins: [],
}
