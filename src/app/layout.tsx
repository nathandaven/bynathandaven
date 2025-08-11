import { DARK_COLOR_SECONDARY, DOMAIN, LIGHT_COLOR_PRIMARY, LIGHT_COLOR_SECONDARY, siteName } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import AutoRefresh from "@/app/_components/AutoRefresh";
import classNames from "classnames";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const description = `Nathan Davenport is passionate about impactful software, cities and urbanism, and photography. This is the home for his creative work.`;
const image = `${DOMAIN}/og-image/og-image-default.jpg`;

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: LIGHT_COLOR_PRIMARY },
    { media: "(prefers-color-scheme: dark)", color: DARK_COLOR_SECONDARY },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(DOMAIN),
    title: siteName,
    description: description,
    openGraph: {
      title: siteName,
      type: "website",
      description: description,
      images: [image],
      siteName,
    },
    twitter: {
      title: siteName,
      description: description,
      images: [image],
      creator: "@nathandaven",
    },
    icons: {
      icon: [
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon.ico", rel: "shortcut icon" },
      ],
      apple: "/favicon/apple-touch-icon.png",
      other: [{ rel: "mask-icon", url: "/favicon/safari-pinned-tab.svg", color: LIGHT_COLOR_SECONDARY }],
    },
    manifest: "/favicon/site.webmanifest",
    robots: "index, follow",
    alternates: {
      types: {
        "application/rss+xml": [{ url: "/rss.xml", title: "Nathan Davenport – RSS Feed" }],
      },
    },
    facebook: {
      appId: "966242223397117",
    },
    other: {
      "msapplication-TileColor": LIGHT_COLOR_SECONDARY,
      "msapplication-config": "/favicon/browserconfig.xml",
      "profile:first_name": "Nathan",
      "profile:last_name": "Davenport",
      // Mastodon profile
      me: "https://urbanists.social/@nathandaven",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AutoRefresh>
      <html lang="en">
        <head>
          <meta property="og:type" content="website" />
        </head>
        {process.env.NODE_ENV === "production" && DOMAIN == "https://nathandaven.com" && (
          <GoogleTagManager gtmId="GTM-THMKGVQB" />
        )}
        <body
          className={classNames(
            inter.className,
            `scrollbar-hide scroll-smooth bg-light-primary tracking-tighter dark:bg-dark-secondary`,
          )}
        >
          <div></div>
          {children}
          {process.env.NODE_ENV === "production" && DOMAIN == "https://nathandaven.com" && <SpeedInsights />}
          {process.env.NODE_ENV === "production" && DOMAIN == "https://nathandaven.com" && <Analytics />}
        </body>
        {process.env.NODE_ENV === "production" && DOMAIN == "https://nathandaven.com" && (
          <GoogleAnalytics gaId="G-X1XTCSK8DT" />
        )}
      </html>
    </AutoRefresh>
  );
}
