module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#0F87E6",
      secondary: "#252526",
      black: "#000",
      white: "#ffffff",
      "secondary-light": "#2E2E2E",
      gray: "#80807A",
    },
    container: {
      padding: {
        DEFAULT: "3rem",

        md: "4rem",
        lg: "8rem",
        xl: "10rem",
      },
    },
    extend: {
      spacing: {
        "10r": "10rem",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.25,0.1,0.25,1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
