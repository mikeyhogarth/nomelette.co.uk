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
        black: "#414141",
        white: "#FDFDFD",
        primary: "#00d2d1",
        primaryDarker: "#00a7a7",
        secondary: "#ee554b",
        highlight: "#03fcfc",
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
