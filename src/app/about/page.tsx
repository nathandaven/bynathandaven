import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Metadata } from "next/types";
import matter from "gray-matter";
import { readFileSync } from "fs";
import markdownToHtml from "@/lib/markdownToHtml";
import { join } from "path";
import { PostBody } from "@/app/_components/MDXContent";
import Image from "next/image";
import { Divider } from "@/app/_components/Divider";
import GithubSVG from "@/app/_svg/github.svg";
import Github from "@/app/_svg/github";
import Instagram from "@/app/_svg/instagram";
import YouTube from "@/app/_svg/youtube";
import X from "@/app/_svg/x";
import LinkedIn from "@/app/_svg/linkedin";
import TikTok from "@/app/_svg/tiktok";
import Substack from "@/app/_svg/substack";
import MailDotRu from "@/app/_svg/maildotru";
import { DOMAIN, siteName } from "@/lib/constants";
import Bluesky from "@/app/_svg/bluesky";
import Mastodon from "@/app/_svg/mastodon";
import Threads from "@/app/_svg/threads";
import Flickr from "@/app/_svg/flickr";

async function getMarkdown(path: string) {
  const { data, content } = matter(readFileSync(join(process.cwd(), path), "utf8"));
  return { data, content };
}

export default async function About() {
  // About me
  const about = await getMarkdown("/_CONTENT_/general/about.mdx");
  const mediaCredits = await getMarkdown("/_CONTENT_/general/media-credits.mdx");

  return (
    <main>
      <Container title={"About"} fullWidth={false} increasedWidth={true} className={""}>
        <Article metadata={about.data as Post} className="text-left md:text-justify" noHeader={true} fullWidth={false}>
          <h1 className="mb-2">
            Hi! I'm{" "}
            <span>
              <span className="absolute z-10 ml-2.5 md:ml-3">Nathan.</span>
              <span className="absolute ml-3.5 mt-5 h-3 w-[7.6rem] bg-orange-200 md:ml-3.5 md:mt-6 md:h-5 md:w-[10.4rem] dark:bg-orange-800"></span>
            </span>
          </h1>
          <div className="flex flex-col-reverse gap-x-10 gap-y-5 sm:flex-row">
            <div className="flex-initial sm:w-3/5 md:w-2/3">
              <PostBody content={about.content} />
            </div>
            <div className="sm:w-2/5 md:w-1/3">
              <Image
                className="mb-0 mt-5 hidden w-full border-spacing-0 cursor-default border border-dark-primary pb-0 shadow-md outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-xl hover:outline-1 sm:block dark:border-light-primary dark:outline-light-primary"
                src="/assets/authors/nathan-hamburg-vert.jpg"
                alt={""}
                width={1205}
                height={1507}
                quality={75}
                unoptimized
                /* placeholder="blur" */
                /* blurDataURL={await dynamicBlurDataUrl("/assets/authors/nathan-hamburg-vert.jpg")} */
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Image
                className="mb-0 mt-5 block w-full border-spacing-0 cursor-default border border-dark-primary pb-0 outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-xl hover:outline-1 sm:hidden dark:border-light-primary dark:outline-light-primary"
                src="/assets/authors/nathan-hamburg-hor.jpg"
                alt={""}
                width={1549}
                height={1161}
                quality={75}
                unoptimized
                /* placeholder="blur" */
                /* blurDataURL={await dynamicBlurDataUrl("/assets/authors/nathan-hamburg-hor.jpg")} */
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <ul className="align-left ml-0 hidden list-none columns-2 grid-cols-2 space-y-0.5 pl-0 leading-4 sm:block">
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://youtube.com/@nathandaven"
                  >
                    <YouTube className="w-4 p-0.5 align-middle" />
                    <span className="">youtube</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://instagram.com/bynathandaven"
                  >
                    <Instagram className="w-4 p-0.5 align-middle" />
                    <span className="">instagram</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://bsky.app/profile/nathandaven.com"
                  >
                    <Bluesky className="w-4 p-0.5 align-middle" />
                    <span className="">bluesky</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://urbanists.social/@nathandaven"
                  >
                    <Mastodon className="w-4 p-0.5 align-middle" />
                    <span className="">mastodon</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://threads.net/bynathandaven"
                  >
                    <Threads className="w-4 p-0.5 align-middle" />
                    <span className="">threads</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://twitter.com/nathandaven"
                  >
                    <X className="w-4 p-0.5 align-middle" />
                    <span className="">twitter</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://linkedin.com/in/nathandaven"
                  >
                    <LinkedIn className="w-4 p-0.5 align-middle" />
                    <span className="">linkedin</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://tiktok.com/@nathandaven"
                  >
                    <TikTok className="w-4 p-0.5 align-middle" />
                    <span className="">tiktok</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://github.com/nathandaven"
                  >
                    <Github className="w-4 p-0.5 align-middle" />
                    <span className="">github</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://nathandaven.substack.com/"
                  >
                    <Substack className="w-4 p-0.5 align-middle" />
                    <span className="">substack</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://www.flickr.com/people/nathandaven/"
                  >
                    <Flickr className="w-4 p-0.5 align-middle" />
                    <span className="">flickr</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 text-lg no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="mailto:nathan@nathandaven.com"
                  >
                    <MailDotRu className="w-4 p-0.5 align-middle" />
                    <span className="">email</span>
                  </a>
                </li>
              </ul>
              {/* <FooterMenu mobile={false} /> */}
            </div>
          </div>
          {/* <Divider className="py-6 opacity-50" /> */}
          <div className="mb-0 flex gap-x-4 pb-0 pt-5">
            <h2 className="mb-1 mt-0 text-nowrap">Media Credits</h2>
            <Divider />
          </div>
          <div className="pb-4 prose-h2:mt-4">
            <PostBody content={mediaCredits.content} />
          </div>
        </Article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "About – Nathan Davenport";
  const description = "Learn more about Nathan Davenport, his work, and his interests.";
  const images = [`${DOMAIN}/og-image/og-image-about.jpg`];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      url: `${DOMAIN}/about`,
      siteName,
    },
    twitter: {
      title,
      description,
      images,
      creator: "@nathandaven",
    },
  };
}
