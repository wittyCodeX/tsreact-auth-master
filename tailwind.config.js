/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url(/public/login_bg.jpg)",
        "login-band": "url(/public/login_brand.png)",
      },
      colors: {
        "main-100": "#2D2D1E",
        "main-200": "#343428",
        "main-300": "#1C1C16",
        "main-item-hover": "#353528",
        "main-active-hover": "#54543A",
        "main-text-color": "#e5e2d9",
      },
    },
  },
  plugins: [],
};
