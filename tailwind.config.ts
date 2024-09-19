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
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
export default config;
