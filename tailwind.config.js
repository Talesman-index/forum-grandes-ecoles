/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jicom: {
          red: "#f03a3d",
          green: "#16531B",
          yellow: "#FFB800",
          orange: "#E8630A",
          dark: "#3D0E0E",
        },
        ink: "#0F0E0B",
        cream: "#F9F6EE",
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
        normal: "0em",
        wide: "0.08em",
        wider: "0.12em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
