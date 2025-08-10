// app/robots.txt/route.ts
import { blockedBots, allowedBots } from "@/lib/bots";
import { DOMAIN } from "@/lib/constants";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || DOMAIN;

  let content = `User-agent: *\nAllow: /\n\n`;

  // Explicitly allow known social preview bots
  for (const bot of allowedBots) {
    content += `User-agent: ${bot}\nAllow: /\n\n`;
  }

  // Disallow known AI bots
  for (const bot of blockedBots) {
    content += `User-agent: ${bot}\nDisallow: /\n\n`;
  }

  content += `Sitemap: ${baseUrl}/sitemap.xml\n`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
