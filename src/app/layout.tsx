import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "./globals.css";
import AutoRefresh from "./_components/AutoRefresh";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Nathan Davenport's Portfolio`,
  description: `Nathan Davenport is a software engineer, photographer, and video creator located in Atlanta, Georgia.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL], // what is this?
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
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#f1f0e9" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#f1f0e9" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="twitter:title" content={"Nathan Davenport's Portfolio"} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="twitter:description"
            content="Nathan Davenport is a software engineer, photographer, and video creator located in Atlanta, Georgia."
          />
          <meta name="robots" content="index, follow" />
          <meta charSet="utf-8" />
          <link rel="alternate" title="Nathan Davenport | RSS Feed" type="application/rss+xml" href="/feed.xml" />
          <meta name="theme-color" content="#f1f0e9" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#0f0e0e" media="(prefers-color-scheme: dark)" />
        </head>
        <body
          /* className="fixed left-0 top-0 -z-50 block h-svh w-svw" */ className={classNames(
            inter.className,
            "scrollbar-hide scroll-smooth bg-[#f1f0e9] tracking-tighter dark:bg-[#0f0e0e]",
          )}
        >
          {children}
        </body>
      </html>
    </AutoRefresh>
  );
}
