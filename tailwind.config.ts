import {
  DARK_COLOR_PRIMARY,
  DARK_COLOR_SECONDARY,
  LIGHT_COLOR_PRIMARY,
  LIGHT_COLOR_SECONDARY,
} from "./src/lib/constants";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: "var(--font-inter-tight)",
      body: "var(--font-inter)",
      serif: "var(--font-pt-serif)",
      mono: "var(--font-mono)",
    },
    screens: {
      xxs: "250px",
      xs: "380px",
      // Default values...
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "light-primary": LIGHT_COLOR_PRIMARY,
        "light-secondary": LIGHT_COLOR_SECONDARY,
        "dark-primary": DARK_COLOR_PRIMARY,
        "dark-secondary": DARK_COLOR_SECONDARY,
        /* "green-custom": "#6a7062ff",
        "red-custom": "#925e78ff",
        "purple-custom": "#3f334dff", 
        "yellow-accent": "#EBDBAF",*/
        "display-gray": "#F0F0F0",
        "display-gray-medium": "#F8F8F8",
        "display-gray-dark": "#F1F1F1",
        "display-gray-light": "#1A1A1A",
        "display-black": "#1C1C1C",
        "display-blue": "#0300D1",
        "display-blue-dark": "#02006D",
        "display-blue-light": "#64C6FF",
        "display-red": "#BB3E00",
        "display-red-dark": "#4B1900",
        "display-red-light": "#FFB38C",
      },
    },
  },
  safelist: [
    {
      pattern: /bg-(light|dark|display|white|black)/,
    },
  ],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
export default config;
