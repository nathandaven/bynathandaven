export const DOMAIN =
  process.env.NODE_ENV === "production"
    ? new URL(`https://${process.env.VERCEL_URL ?? "nathandaven.com"}`)
    : new URL("http://localhost:3000");

export const LIGHT_COLOR_PRIMARY = "#ffffff";
export const LIGHT_COLOR_SECONDARY = "#f8f8f8";
export const DARK_COLOR_PRIMARY = "#141414";
export const DARK_COLOR_SECONDARY = "#0f0e0e";
