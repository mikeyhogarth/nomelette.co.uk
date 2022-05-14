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
        black: "#062b2b",
        offWhite: "#FDFDFD",
        primary: "#1ABDBC",
        secondary: "#bf3f00",
      },
      fontSize: {
        base: ["1.1em", { lineHeight: "1.8em" }],
      },
      fontFamily: {
        brand: ["Leckerli One", "cursive"],
      },
    },
  },
  plugins: [],
};
