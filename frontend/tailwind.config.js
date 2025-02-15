/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "inter":['"Inter"', "sans-serif"]
      },
      colors:{
        darkGray: "#2C2C2C",
        yellow: "#FFDA44",
        white: "#FFFFFF",
      },
      fontSize:{
        headingLarge: "30px",
        contentLarge: "24px",
        introLarge: "22px"
      },
      fontWeight: {
        ultralight: 100,
        light: 200,
        normal:300,
        bold: 900
      }
    },
  },
  plugins: [],
}

