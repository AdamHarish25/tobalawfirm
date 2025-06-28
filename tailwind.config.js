/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["'Poppins'", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Playfair_Display: ["'Playfair Display'", "sans-serif"],
    },
    screens: {
      xs: "0px",

      sm: "540px",

      md: "768px",

      lg: "1023px",

      xl: "1280px",

      "2xl": "1806px",
    },
    extend: {
      gridTemplateColumns: {
        SL: "auto 1fr",
      },
      gridTemplateRows: {
        SL: "auto 1fr",
        8: "repeat(8, minmax(0, 1fr))",
      },
      colors: {
        "dark-gray": "#282a2d",
        "dark-white": "#1b1c1e",
      },
      backgroundImage: {
        background1: "url(./Attachments/Image/background.jpg)",
        background2: "url(./Attachments/Image/hourglass.jpg)",
      },
    },
  },
   plugins: [
    require('@tailwindcss/typography'),
  ],
}

