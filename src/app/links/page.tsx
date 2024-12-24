import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Metadata } from "next/types";
import { metadata } from "@/app/layout";
import matter from "gray-matter";
import { readFileSync } from "fs";
import markdownToHtml from "@/lib/markdownToHtml";
import { join } from "path";
import { PostBody } from "@/app/_components/MDXContent";
import Image from "next/image";
import { Divider } from "@/app/_components/Divider";
import GithubSVG from "@/app/_svg/github.svg";
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

export default async function LinkMe() {
  return (
    <main className="dark:tex flex min-h-screen flex-col items-center bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary">
      <header className="mt-10 text-center">
        <div className="flex w-full items-center justify-center">
          <Image
            className="h-24 w-24 rounded-full border-dark-primary align-middle shadow-md dark:border-light-primary"
            src="/assets/authors/nathan.jpg"
            alt={""}
            width={900}
            height={900}
            quality={75}
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className="mt-4 text-2xl font-bold">Nathan Davenport</h1>
        <p className="mt-2 max-w-96">
          I'm <b>Nathan Davenport</b>, a self proclaimed video-journalist, photographer, and software engineer.
        </p>
      </header>
      <main className="mt-8 w-full max-w-sm">
        <div className="flex flex-col space-y-4">
          <ul className="align-left ml-0 flex w-full list-none flex-col gap-y-2.5 pl-0 leading-4">
            <a
              className="flex justify-center rounded-lg bg-red-600 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-red-700"
              href="https://youtube.com/@nathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                rel="noopener noreferrer me"
                href="https://youtube.com/@nathandaven"
              >
                <YouTube className="w-6 p-0.5 align-middle" />
                <span className="">youtube</span>
              </a>
            </a>
            <a
              className="flex justify-center rounded-lg bg-purple-500 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-purple-600"
              target="_blank"
              rel="noopener noreferrer me"
              href="https://instagram.com/bynathandaven"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                href="https://instagram.com/bynathandaven"
                rel="noopener noreferrer me"
              >
                <Instagram className="w-6 p-0.5 align-middle" />
                <span className="">instagram</span>
              </a>
            </a>
            <a
              className="flex justify-center rounded-lg bg-blue-600 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-blue-700"
              href="https://bsky.app/profile/nathandaven.com"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                rel="noopener noreferrer me"
                href="https://bsky.app/profile/nathandaven.com"
              >
                <Bluesky className="w-6 p-0.5 align-middle" />
                <span className="">bluesky</span>
              </a>
            </a>
            <a
              className="flex justify-center rounded-lg bg-purple-800 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-purple-900"
              href="https://urbanists.social/@nathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                rel="noopener noreferrer me"
                href="https://urbanists.social/@nathandaven"
              >
                <Mastodon className="w-6 p-0.5 align-middle" />
                <span className="">mastodon</span>
              </a>
            </a>
            <a
              className="flex justify-center rounded-lg bg-gray-800 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-gray-900"
              href="https://threads.net/bynathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                rel="noopener noreferrer me"
                href="https://threads.net/bynathandaven"
              >
                <Threads className="w-6 p-0.5 align-middle" />
                <span className="">threads</span>
              </a>
            </a>
            <a
              className="flex justify-center rounded-lg bg-blue-800 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-blue-900"
              href="https://twitter.com/nathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                rel="noopener noreferrer me"
                href="https://twitter.com/nathandaven"
              >
                <X className="w-6 p-0.5 align-middle" />
                <span className="">twitter/x</span>
              </a>
            </a>
            <a
              className="flex justify-center rounded-lg bg-blue-500 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-blue-600"
              href="https://linkedin.com/in/nathandaven"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                rel="noopener noreferrer me"
                href="https://linkedin.com/in/nathandaven"
              >
                <LinkedIn className="w-6 p-0.5 align-middle" />
                <span className="">linkedin</span>
              </a>
            </a>
            <a
              className="flex justify-center rounded-lg bg-pink-600 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-pink-700"
              href="https://tiktok.com/@nathandaven"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                rel="noopener noreferrer me"
                href="https://tiktok.com/@nathandaven"
              >
                <TikTok className="w-6 p-0.5 align-middle" />
                <span className="">tiktok</span>
              </a>
            </a>
            <a
              className="flex justify-center rounded-lg bg-green-700 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-green-800"
              href="https://github.com/nathandaven"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                rel="noopener noreferrer me"
                href="https://github.com/nathandaven"
              >
                <Github className="w-6 p-0.5 align-middle" />
                <span className="">github</span>
              </a>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer me"
              className="flex justify-center rounded-lg bg-orange-500 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-orange-600"
              href="https://nathandaven.substack.com/"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                rel="noopener noreferrer me"
                href="https://nathandaven.substack.com/"
              >
                <Substack className="w-6 p-0.5 align-middle" />
                <span className="">substack</span>
              </a>
            </a>
            <a
              target="_blank"
              className="flex justify-center rounded-lg bg-blue-500 py-3 text-center text-white shadow hover:cursor-pointer hover:bg-blue-600"
              href="mailto:nathan@nathandaven.com"
            >
              <a
                target="_blank"
                className="text-md text-bold my-0 flex w-fit gap-x-2 fill-light-primary py-0 pr-1 text-lg font-normal text-light-primary no-underline"
                href="mailto:nathan@nathandaven.com"
              >
                <MailDotRu className="w-6 p-0.5 align-middle" />
                <span className="">email</span>
              </a>
            </a>
          </ul>
        </div>
      </main>
      <footer className="mt-auto py-4 text-center text-sm">
        For more, see my full website at{" "}
        <Link className="underline" href="/">
          <span className="hover:font-bold">nathandaven.com</span>.
        </Link>
      </footer>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "Links | Nathan Davenport";

  return {
    ...metadata,
    title,
    openGraph: {
      ...metadata.openGraph,
      title,
      images: [`${DOMAIN}/assets/authors/nathan-hamburg-hor.jpg`],
    },
    twitter: {
      ...metadata.twitter,
      title,
      images: [`${DOMAIN}/assets/authors/nathan-hamburg-hor.jpg`],
    },
  };
}
