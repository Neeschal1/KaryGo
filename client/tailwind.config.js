/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        splashBackground: "#1467C8",
        primary: "",
        secondary: "#EDAE00",
      },
      fontFamily: {
        Quicksandbold: ["Quicksandbold"],
        Quicksandlight: ["Quicksandlight"],
        Quicksandsemibold: ["Quicksandsemibold"],
        Quicksandmedium: ["Quicksandmedium"],
        Quicksandregular: ["Quicksandregular"],
      },
      fontSize: {
        heading: "24px",
        subheading: "18px",
        description: "14px",
      },
      padding: {
        screen: "20px",
      },
      spacing: {
        extrasmall: "4px",
        small: "8px",
        mid: "16px",
        large: "24px",
        extralarge: "32px",
      },
    },
  },
  plugins: [],
};
