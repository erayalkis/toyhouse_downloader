/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "toyhouse-primary-100": "#f7f7f7",
        "toyhouse-primary-200": "#e8e8e8",
        "toyhouse-primary-200-alt": "#ebebeb",
        "toyhouse-primary-300": "#dfdfdf",
        "toyhouse-primary-400": "#aeb3b7",
        "toyhouse-primary-border": "#e2e2e2",
        "toyhouse-dark": "#212529",
        "toyhouse-button-primary": "#008cba",
        "toyhouse-button-secondary": "#006687",
      },
      dropShadow: {
        title: "0 35px 35px rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
