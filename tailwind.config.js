module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      screens: {
        print: { raw: "print" },
      },
      colors: {
        black: "#212121",
        white: "#FDFDFD",
        primary: "#00d2d1",
        primaryDarker: "#119190",
        secondary: "blue",
        highlight: "#03fcfc",
      },
      fontSize: {
        base: ["1.1em", { lineHeight: "1.8em" }],
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        brand: ["Leckerli One", "cursive"],
      },
    },
  },
  plugins: [],
};
