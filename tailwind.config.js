/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4e33ff",
        "dark": "#1f2633",
        "light": "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
}
