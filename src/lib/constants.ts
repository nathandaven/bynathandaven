export const DOMAIN =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_URL ?? "nathandaven.com"}`
    : "http://localhost:3000";

export const LIGHT_COLOR_PRIMARY = "#ffffff";
export const LIGHT_COLOR_SECONDARY = "#ffffff";
export const DARK_COLOR_PRIMARY = "#141414";
export const DARK_COLOR_SECONDARY = "#181818";
