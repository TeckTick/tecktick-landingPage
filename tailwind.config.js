/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
    
//       "./src/**/*.{js,jsx,ts,tsx}",
  
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        roboto: ["Roboto"]
      }
    },
  },
  plugins: [],
});

