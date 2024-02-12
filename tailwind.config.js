/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      main: "#1061CC",
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
