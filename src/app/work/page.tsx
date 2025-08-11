import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { Post } from "@/interfaces/post";
import { Metadata } from "next";
import { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { PostBody } from "@/app/_components/MDXContent";
import { DOMAIN, siteName } from "@/lib/constants";

export default async function Work() {
  const { data, content } = matter(readFileSync(join(process.cwd(), "/_CONTENT_/general/work.mdx"), "utf8"));

  return (
    <main>
      <Container title={"Work"} fullWidth={false} className={""}>
        <Article metadata={data as Post} className="" noHeader={true}>
          <h1 className="mb-2 pb-2">
            Work with{" "}
            <span>
              <span className="absolute z-10 ml-2.5 md:ml-3">me!</span>
              <span className="absolute ml-3.5 mt-5 h-3 w-[3.1rem] bg-green-200 md:ml-3.5 md:mt-6 md:h-5 md:w-[4.4rem] dark:bg-green-700"></span>
            </span>
          </h1>
          <PostBody content={content} />
        </Article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "Work | Nathan Davenport";
  const description = "Explore work opportunities and collaborations with Nathan Davenport.";
  const images = [`${DOMAIN}/og-image/og-image-work.jpg`];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      url: `${DOMAIN}/work`,
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
