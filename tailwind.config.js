/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/option-pages/options.html", "node_modules/preline/dist/*.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
}
