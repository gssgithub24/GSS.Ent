module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d1d1d1" },
        black: { 900: "#000000", "900_14": "#00000014" },
        gray: { 800: "#444444", "700_7f": "#5f5f5f7f", "900_9e": "#2525259e" },
        purple: { A700: "#9e00ff", A400: "#f80de0", A700_01: "#ae02f9" },
        white: { A700_68: "#ffffff68", A700: "#ffffff", A700_82: "#ffffff82" },
      },
      backgroundImage: {
        gradient: "linear-gradient(126deg ,#9e00ff,#f80de0)",
        gradient1: "linear-gradient(90deg ,#f80de0,#9e00ff)",
        gradient2: "linear-gradient(137deg ,#f80de0,#9e00ff)",
      },
      fontFamily: {
        seravek: "Seravek",
        varelaround: "Varela Round",
        raleway: "Raleway",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
