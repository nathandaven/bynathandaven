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
    /* Annoying workaround for variable font weights... */
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      /* serif: ["ui-serif", "Georgia"], */
      /* mono: ["ui-monospace", "SFMono-Regular"], */
      "display-light": [
        "Inter, sans-serif",
        {
          fontVariationSettings: '"wght" 300',
        },
      ],
      "display-normal": [
        "Inter, sans-serif",
        {
          fontVariationSettings: '"wght" 400',
        },
      ],
      "display-medium": [
        "Inter, sans-serif",
        {
          fontVariationSettings: '"wght" 500',
        },
      ],
      "display-semibold": [
        "Inter, sans-serif",
        {
          fontVariationSettings: '"wght" 600',
        },
      ],
      "display-bold": [
        "Inter, sans-serif",
        {
          fontVariationSettings: '"wght" 700',
        },
      ],
      "display-extrabold": [
        "Inter, sans-serif",
        {
          fontVariationSettings: '"wght" 800',
        },
      ],
      "display-black": [
        "Inter, sans-serif",
        {
          fontVariationSettings: '"wght" 900',
        },
      ],
    },
    screens: {
      xxxs: "150px",
      xxs: "250px",
      xxsm: "310px",
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
        "green-custom": "#6a7062ff",
        "red-custom": "#925e78ff",
        "purple-custom": "#3f334dff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
export default config;
