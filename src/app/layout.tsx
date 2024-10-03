import { HOME_OG_IMAGE_URL, LIGHT_COLOR_PRIMARY, LIGHT_COLOR_SECONDARY } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "@/app/globals.css";
import AutoRefresh from "@/app/_components/AutoRefresh";
import classNames from "classnames";
import Script from "next/script";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const title = `Nathan Davenport`;
const description = `Nathan Davenport is a software engineer, photographer, and video creator located in Atlanta, Georgia.`;
const image = HOME_OG_IMAGE_URL;
export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === "production" ? new URL("https://nathandaven.com") : new URL("http://localhost:3000"),
  title: title,
  description: description,
  openGraph: {
    title: title,
    type: "website",
    description: description,
    images: [image],
    siteName: title,
  },
  twitter: {
    title: title,
    description: description,
    images: [image],
    creator: "@nathandaven",
  },
};

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
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color={LIGHT_COLOR_SECONDARY} />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content={LIGHT_COLOR_SECONDARY} />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta charSet="utf-8" />
          <link rel="alternate" title="Nathan Davenport | RSS Feed" type="application/rss+xml" href="/rss.xml" />
          <meta name="theme-color" content={LIGHT_COLOR_SECONDARY} media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#0f0e0e" media="(prefers-color-scheme: dark)" />
          <meta property="profile:first_name" content="Nathan" />
          <meta property="profile:last_name" content="Davenport" />
          <meta property="fb:app_id" content="966242223397117" />
        </head>
        <body
          /* className="fixed left-0 top-0 -z-50 block h-svh w-svw" */ className={classNames(
            inter.className,
            `scrollbar-hide scroll-smooth bg-light-secondary tracking-tighter dark:bg-dark-secondary`,
          )}
        >
          {process.env.NODE_ENV === "production" ? (
            <>
              <SpeedInsights />
              {children}
              <Analytics />
              <GoogleAnalytics gaId="G-X1XTCSK8DT" />
            </>
          ) : (
            children
          )}
        </body>
      </html>
    </AutoRefresh>
  );
}
