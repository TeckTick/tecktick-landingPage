/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        roboto: ["Roboto"],
        jost: ["Jost", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
        spartan: ["League Spartan"],
      },
      colors: {
        dark: "#0d1117",
      },
    },
  },
  plugins: [],
};

// import withMT from "@material-tailwind/react/utils/withMT";

// export default withMT({
//   content: [],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ["Inter"],
//         roboto: ["Roboto"],
//       },
//       colors: {
//         dark: "#0d1117",
//       },
//     },
//   },
//   plugins: [],
// });
