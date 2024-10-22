import { DARK_COLOR_SECONDARY, DOMAIN, LIGHT_COLOR_PRIMARY, LIGHT_COLOR_SECONDARY } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "@/app/globals.css";
import AutoRefresh from "@/app/_components/AutoRefresh";
import classNames from "classnames";
import Script from "next/script";
import React, { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const title = `Nathan Davenport`;
const description = `Video-journalism, Photography, & Software Engineering`;
const image = `${DOMAIN}/og-image/og-image-default.jpg`;
export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
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
          <meta name="theme-color" content={LIGHT_COLOR_PRIMARY} media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content={DARK_COLOR_SECONDARY} media="(prefers-color-scheme: dark)" />
          <meta property="profile:first_name" content="Nathan" />
          <meta property="profile:last_name" content="Davenport" />
          <meta property="fb:app_id" content="966242223397117" />
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
