// special-cake-designer/tailwind.config.mjs

import { defineConfig } from "tailwindcss/defaultConfig";

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF7F0", // A creamy, off-white
        primary: "#FADADD", // Soft pastel pink
        secondary: "#A0C4FF", // Soft pastel blue
        "text-main": "#4B5563", // A gentle, dark gray
        "text-light": "#6B7280", // A lighter gray
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Lato"', "sans-serif"],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
});
