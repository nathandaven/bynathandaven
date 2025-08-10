import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { blockedBots, allowedBots } from "@/lib/bots";

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";

  const isBlockedBot = blockedBots.some((bot) => ua.toLowerCase().includes(bot.toLowerCase()));

  const isAllowedBot = allowedBots.some((bot) => ua.toLowerCase().includes(bot.toLowerCase()));

  if (isBlockedBot && !isAllowedBot) {
    return new NextResponse("Blocked", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
