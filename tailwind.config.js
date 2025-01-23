/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 1.5s ease-out infinite",
      },
      screens: {
        // xs: { max: "389px" }, // Define 'xs' for extra small screens
        'xs': {'max': '400px'}, 
        'xxs':{'max': '330px'},
        'xxmd': { 'min': '1100px', 'max': '1300px' },
        'xmd': { 'min': '1000px', 'max': '1100px' },
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      
      colors: {
        gradientStart: "#FD267A",
        gradientEnd: "#FF6036",
        customWhite: "#E9EBEE",
        customBlack: "#111418",
        darkblack: "#000000",
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
