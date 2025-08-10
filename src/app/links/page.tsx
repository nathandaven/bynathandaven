import React from "react";
import { Metadata } from "next/types";
import { metadata } from "@/app/layout";
import Image from "next/image";
import Github from "../_svg/github";
import Instagram from "../_svg/instagram";
import YouTube from "../_svg/youtube";
import X from "../_svg/x";
import LinkedIn from "../_svg/linkedin";
import TikTok from "../_svg/tiktok";
import Substack from "../_svg/substack";
import MailDotRu from "../_svg/maildotru";
import { DOMAIN } from "@/lib/constants";
import dynamicBlurDataUrl from "@/lib/blurImage";
import Bluesky from "../_svg/bluesky";
import Mastodon from "../_svg/mastodon";
import Threads from "../_svg/threads";
import Link from "next/link";
import Website from "../_svg/website";
import Facebook from "../_svg/facebook";
import Patreon from "../_svg/patreon";
import Flickr from "../_svg/flickr";
import Code from "../_svg/code";

export default async function LinkMe() {
  return (
    <main className="flex min-h-dvh flex-col items-center bg-light-primary px-4 text-dark-primary dark:bg-dark-primary dark:text-light-primary">
      <header className="mt-6 flex w-full max-w-sm space-x-5 pl-4 text-center">
        <Image
          className="h-24 w-24 rounded-full border-dark-primary shadow-md dark:border-light-primary"
          src="/assets/authors/nathan.jpg"
          alt={""}
          width={900}
          height={900}
          quality={75}
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="pl-0 text-left">
          <h1 className="mt-2 text-2xl font-bold">Nathan Davenport</h1>
          <p className="mt-2 max-w-sm text-sm">
            <b>Nathan Davenport</b> is a video-journalist, photographer, and software engineer.
          </p>
        </div>
        {/* <p className="max-w-sm">
          Looking for my actual website? See{" "}
          <span>
            <Link className="underline" href="/">
              <span className="hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
                nathandaven.com
              </span>
              .
            </Link>
          </span>
        </p> */}
      </header>
      <main className="mt-6 w-full max-w-sm">
        <div className="flex flex-col gap-y-4">
          <ul className="align-left col-span-2 ml-0 grid w-full list-none gap-2.5 pl-0 leading-4 xxsm:grid-cols-2">
            <Link
              className="flex justify-center rounded-lg bg-amber-800 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-yellow-900"
              href="/"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Website className="w-6 p-0.5 align-middle" />
                <span className="">Website</span>
              </div>
            </Link>
            <a
              className="flex justify-center rounded-lg bg-red-600 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-red-700"
              href="https://youtube.com/@nathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <YouTube className="w-6 p-0.5 align-middle" />
                <span className="">YouTube</span>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer me"
              className="hover:bg-amber-850 flex justify-center rounded-lg bg-stone-700 py-2 text-center text-white drop-shadow-md hover:cursor-pointer"
              href="https://dev.nathandaven.com/"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Code className="w-6 p-0.5 align-middle" />
                <span className="">Dev Portfolio</span>
              </div>
            </a>
            <a
              className="flex justify-center rounded-lg bg-zinc-600 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-zinc-700"
              href="https://www.patreon.com/c/nathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Patreon className="w-6 p-0.5 align-middle" />
                <span className="">Patreon</span>
              </div>
            </a>
            <a
              className="flex justify-center rounded-lg bg-purple-600 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-purple-700"
              target="_blank"
              rel="noopener noreferrer me"
              href="https://instagram.com/bynathandaven"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Instagram className="w-6 p-0.5 align-middle" />
                <span className="">Instagram</span>
              </div>
            </a>
            <a
              className="flex justify-center rounded-lg bg-blue-600 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-blue-700"
              href="https://bsky.app/profile/nathandaven.com"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Bluesky className="w-6 p-0.5 align-middle" />
                <span className="">Bluesky</span>
              </div>
            </a>
            <a
              className="flex justify-center rounded-lg bg-blue-800 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-blue-900"
              href="https://twitter.com/nathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <X className="w-6 p-0.5 align-middle" />
                <span className="">Twitter</span>
              </div>
            </a>
            <a
              className="bg- flex justify-center rounded-lg bg-indigo-700 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-indigo-800"
              href="https://urbanists.social/@nathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Mastodon className="w-6 p-0.5 align-middle" />
                <span className="">Mastodon</span>
              </div>
            </a>

            <a
              className="flex justify-center rounded-lg bg-gray-700 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-gray-800"
              href="https://threads.net/bynathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Threads className="w-6 p-0.5 align-middle" />
                <span className="">Threads</span>
              </div>
            </a>
            <a
              className="flex justify-center rounded-lg bg-sky-600 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-sky-700"
              href="https://linkedin.com/in/nathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <LinkedIn className="w-6 p-0.5 align-middle" />
                <span className="">LinkedIn</span>
              </div>
            </a>
            <a
              className="flex justify-center rounded-lg bg-blue-800 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-blue-900"
              href="https://facebook.com/bynathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Facebook className="w-6 p-0.5 align-middle" />
                <span className="">Facebook</span>
              </div>
            </a>
            <a
              className="flex justify-center rounded-lg bg-pink-700 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-pink-800"
              href="https://tiktok.com/@nathandaven"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <TikTok className="w-6 p-0.5 align-middle" />
                <span className="">TikTok</span>
              </div>
            </a>
            <a
              className="flex justify-center rounded-lg bg-green-700 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-green-800"
              href="https://github.com/nathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Github className="w-6 p-0.5 align-middle" />
                <span className="">Github</span>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer me"
              className="flex justify-center rounded-lg bg-orange-600 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-orange-700"
              href="https://nathandaven.substack.com/"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Substack className="w-6 p-0.5 align-middle" />
                <span className="">Substack</span>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer me"
              className="flex justify-center rounded-lg bg-fuchsia-700 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-fuchsia-800"
              href="https://www.flickr.com/people/nathandaven/"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <Flickr className="w-6 p-0.5 align-middle" />
                <span className="">Flickr</span>
              </div>
            </a>
            <a
              target="_blank"
              className="flex justify-center rounded-lg bg-cyan-800 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-cyan-900"
              href="mailto:nathan@nathandaven.com"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <MailDotRu className="w-6 p-0.5 align-middle" />
                <span className="">Email</span>
              </div>
            </a>
            {/* <a
              target="_blank"
              className="bg- bg- col-span-2 flex justify-center rounded-lg bg-cyan-800 py-2 text-center text-white drop-shadow-md hover:cursor-pointer hover:bg-cyan-900"
              href="mailto:nathan@nathandaven.com"
            >
              <div className="text-md my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-medium text-light-primary no-underline">
                <MailDotRu className="w-6 p-0.5 align-middle" />
                <span className="">Email</span>
              </div>
            </a> */}
          </ul>
        </div>
      </main>
      <footer className="mt-auto py-4 text-center text-sm">© {new Date().getFullYear()} Nathan Davenport</footer>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "Links | Nathan Davenport";

  const description = "Nathan Davenport is a video-journalist, photographer, and software engineer.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`${DOMAIN}/assets/authors/nathan-hamburg-hor.jpg`],
    },
    twitter: {
      title,
      description,
      images: [`${DOMAIN}/assets/authors/nathan-hamburg-hor.jpg`],
    },
  };
}
