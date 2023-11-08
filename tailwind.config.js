/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "darker-grey": "#626262",
        black: "#1d1e1c",
        "lighter-grey": "#e1e1e1",
        grey: "#9e9e9e",
        "darkest-grey": "#252525",
        "light-grey": "#c9c9c9",
        "off-white": "#f9f9f9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "open-sans": "'Open Sans'",
        "uxum-grotesque": "'Uxum Grotesque'",
      },
    },
    fontSize: {
      sm: "0.88rem",
      base: "1rem",
      mini: "0.94rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
