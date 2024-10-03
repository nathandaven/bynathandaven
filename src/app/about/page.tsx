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

export default async function About() {
  const { data, content } = matter(readFileSync(join(process.cwd(), "/_CONTENT_/about.md"), "utf8"));
  const markdown = await markdownToHtml(content);

  return (
    <main>
      <Container title={"Work"} fullWidth={false} className={""}>
        <Article metadata={data as Post} className="">
          <PostBody content={markdown} />
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
