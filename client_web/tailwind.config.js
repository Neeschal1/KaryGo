/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F2F1FF",
        primary: "#1467C8",
        primaryloading: "#70B2FF",
        secondary: "#EDAE00",
        secondaryloading: "#EDAE00",
        lighttext: "#FFFFFF",
        darktext: "#000000",
        splashBackground: "#1467C8",
        descriptiveText: "#8F8F8F",
      },
      fontFamily: {
        Quicksandbold: ["Quicksandbold", "sans-serif"],
        Quicksandlight: ["Quicksandlight", "sans-serif"],
        Quicksandsemibold: ["Quicksandsemibold", "sans-serif"],
        Quicksandmedium: ["Quicksandmedium", "sans-serif"],
        Quicksandregular: ["Quicksandregular", "sans-serif"],
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
        button: "20px",
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
