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
import { PostBody } from "@/app/_components/ArticleBody";
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

async function getMarkdown(path: string) {
  const { data, content } = matter(readFileSync(join(process.cwd(), path), "utf8"));
  const markdown = await markdownToHtml(content);
  return { data, markdown };
}

export default async function About() {
  // About me
  const about = await getMarkdown("/_CONTENT_/general/about.md");
  const mediaCredits = await getMarkdown("/_CONTENT_/general/media-credits.md");

  return (
    <main>
      <Container title={"Work"} fullWidth={false} className={""}>
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
              <PostBody content={about.markdown} />
            </div>
            <div className="sm:w-2/5 md:w-1/3">
              <Image
                className="mb-0 mt-5 hidden w-full border-spacing-0 cursor-default border border-dark-primary pb-0 shadow-md outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-xl hover:outline-1 sm:block dark:border-light-primary dark:outline-light-primary"
                src="/assets/authors/nathan-hamburg-b-1.jpg"
                alt={""}
                width={1205}
                height={1507}
              />
              <Image
                className="mb-0 mt-5 block w-full border-spacing-0 cursor-default border border-dark-primary pb-0 outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-xl hover:outline-1 sm:hidden dark:border-light-primary dark:outline-light-primary"
                src="/assets/authors/nathan-hamburg-a.jpg"
                alt={""}
                width={1549}
                height={1161}
              />
              <ul className="align-left ml-0 hidden w-full list-none flex-col gap-y-2.5 pl-0 leading-4 sm:flex">
                <li className="my-0 py-0 pt-2 sm:pt-0">
                  <a
                    target="_blank"
                    className="text-md my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 font-normal no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://instagram.com/nathandaven"
                  >
                    <Instagram className="w-4 p-0.5 align-middle" />
                    <span className="">instagram</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="text-md my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 font-normal no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://youtube.com/@nathandaven"
                  >
                    <YouTube className="w-4 p-0.5 align-middle" />
                    <span className="">youtube</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="text-md my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 font-normal no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://twitter.com/nathandaven"
                  >
                    <X className="w-4 p-0.5 align-middle" />
                    <span className="">twitter</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="text-md my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 font-normal no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://linkedin.com/in/nathandaven"
                  >
                    <LinkedIn className="w-4 p-0.5 align-middle" />
                    <span className="">linkedin</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="text-md my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 font-normal no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://tiktok.com/@nathandaven"
                  >
                    <TikTok className="w-4 p-0.5 align-middle" />
                    <span className="">tiktok</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="text-md my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 font-normal no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://github.com/nathandaven"
                  >
                    <Github className="w-4 p-0.5 align-middle" />
                    <span className="">github</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="text-md my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 font-normal no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
                    href="https://nathandaven.substack.com/"
                  >
                    <Substack className="w-4 p-0.5 align-middle" />
                    <span className="">substack</span>
                  </a>
                </li>
                <li className="my-0 py-0">
                  <a
                    target="_blank"
                    className="text-md my-0 flex w-fit gap-x-2 fill-dark-primary py-0 pr-1 font-normal no-underline hover:fill-light-primary dark:fill-light-primary dark:hover:fill-dark-primary"
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
          <Divider className="py-6 opacity-50" />
          <div className="pb-4 prose-h2:mt-4">
            <PostBody content={mediaCredits.markdown} />
          </div>
        </Article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "About | Nathan Davenport";

  return {
    ...metadata,
    title,
    openGraph: {
      ...metadata.openGraph,
      title,
    },
    twitter: {
      ...metadata.twitter,
      title,
    },
  };
}
