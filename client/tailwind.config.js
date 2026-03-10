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
        background: "#F2F1FF",

        primary: "#1467C8", // blue
        primaryloading: "#70B2FF", // blue
        secondary: "#EDAE00", // yellow
        secondaryloading: "#EDAE00", // yellow
        lighttext: "#FFFFFF", // for button, when it is dark
        darktext: "#000000", // for bordered buttons

        // For texts
        headingText: "",
        subHeadingText: "",
        descriptiveText: "#8F8F8F"
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
      borderRadius: {
        button: "20"
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
