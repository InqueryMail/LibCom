/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#252525",
          200: "#212121",
          300: "rgba(255, 255, 255, 0.65)",
        },
        burlywood: {
          100: "#d2ae6d",
          200: "rgba(210, 174, 109, 0)",
        },
        dimgray: {
          100: "#525c60",
          200: "#525151",
        },
        white: "#fff",
        dodgerblue: "#0a66c2",
        palegoldenrod: "#e2de94",
        whitesmoke: {
          100: "#f4f4f4",
          200: "#eee",
        },
        darkslategray: "#274c5b",
        darkseagreen: {
          100: "#7cbd8e",
          200: "#7eb693",
        },
        moccasin: "#f9eab6",
        silver: {
          100: "#c5bec1",
          200: "#b6bfc2",
        },
        palevioletred: "#ce4d74",
        gainsboro: {
          100: "#d9d9d9",
          200: "#d3dad6",
        },
      },
      spacing: {},
      fontFamily: {
        description: "Poppins",
        "baloo-2": "'Baloo 2'",
        "open-sans": "'Open Sans'",
        roboto: "Roboto",
        salsa: "Salsa",
        saira: "Saira",
        "ribeye-marrow": "'Ribeye Marrow'",
        "short-stack": "'Short Stack'",
        poly: "Poly",
        righteous: "Righteous",
      },
      borderRadius: {
        "8xs": "5px",
        "31xl": "50px",
        "2xs": "11px",
        "6xl": "25px",
        xl: "20px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      lg: "18px",
      "6xl": "25px",
      xl: "20px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
