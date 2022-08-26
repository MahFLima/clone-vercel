/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      letterSpacing: {
        widest: '0.2rem',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        blue: {
          400: "#007cf0",
        },
        pink: {
          400: "#ff0080",
        }
      },
      animation:{
        animateDevelop: "animateDevelop 4s ease-in-out infinite",
        animatePreview: "animatePreview 4s ease-in-out infinite",
        animateShip: "animateShip 4s ease-in-out infinite"
      },
      keyframes: {
        animateDevelop: {
          'from': { color: 'white' },
          'to': { color: '#007cf0' },
        },
        animatePreview: {
          'from': { color: 'white' },
          'to': { color: '#ff0080' },
        },
        animateShip: {
          'from': { color: 'white' },
          'to': { color: '#f9cb28' },
        }
      }
    },
  },
  plugins: [],
};
