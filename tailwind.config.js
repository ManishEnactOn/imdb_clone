/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["'Roboto', sans-serif"],
    },

    fontSize: {
      12: "12px",
      13: "13px",
      14: "14px",
      16: "16px",
      17: "17px",
      20: "20px",
      21: "21px",
      24: "24px",
      28: "28px",
      32: "32px",
    },

    extend: {
      colors: {
        primary: "#000000",
        secondary: "#121212",
        hover: "#252525",

        gray: {
          10: "#eceef0",
          30: "#9e9e9e",
          40: "#c9c9c5",
          50: "#757575",
          55: "#555555",
          60: "#9da8b3",
          70: "#333333",
          80: "#2c2c2c",
          90: "#1a1a1a",
        },
        yellow: {
          150: "#f5c518",
          50: "#f2ca66",
        },

        blue: {
          50: "#5594e7",
        },
      },
    },
  },
  plugins: [],
};
