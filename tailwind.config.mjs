/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#ffffff", // Color para modo oscuro
        },
        light: {
          DEFAULT: "#000000", // Color para modo claro
        },
      },
    },
  },
  variants: {
    extend: {
      fill: ["dark"], // Añade la variante 'dark' para fill
    },
  },
  plugins: [],
};
