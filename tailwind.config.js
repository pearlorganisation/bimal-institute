/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2.5xl": "1820px",
        "3xl": "2100px", // Custom screen size for large displays
        // '4xl': '2560px', // For big iMac screens
      },
      fontFamily: {
        afacad: ["Afacad", "sans-serif"], // Add Afacad font
      },

      keyframes: {
        gradient_301: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        animStar: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-135rem)" },
        },
        animStarRotate: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0)" },
        },
        pulse_3011: {
          "0%": {
            transform: "scale(0.75)",
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.7)",
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 10px rgba(0, 0, 0, 0)",
          },
          "100%": {
            transform: "scale(0.75)",
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
          },
        },
      },
      animation: {
        gradient_301: "gradient_301 5s ease infinite",
        animStar: "animStar 60s linear infinite",
        animStarRotate: "animStarRotate 90s linear infinite",
        pulse_3011: "pulse_3011 4s infinite",
      },
    },
  },
  plugins: [],
};
