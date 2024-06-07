import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gustarydelight: ['var(--font-gustarydelight-regular)']
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#dff5ff",
            foreground: "#11235a",
            primary: {
              DEFAULT: "#006FEE",
            },
          },
        },
        dark: {
          colors: {
            background: "#181a1b",
            foreground: "#ECEDEE",
            primary: {
              DEFAULT: "#64ffda",
            },
          },
        },
      },
    }),
  ],
};
