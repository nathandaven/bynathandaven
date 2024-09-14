
/** @type {import('tailwindcss').Config} */

const typography = require("@tailwindcss/typography");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    /* Annoying workaround for variable font weights... */
    fontFamily: {
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
  plugins: [
    // ... your plugins
    typography,
  ],
};
