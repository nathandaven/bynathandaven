import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { List } from "@/app/_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Substack } from "@/app/_components/Substack";
import { Metadata } from "next";
import Link from "next/link";
import { metadata } from "../layout";

// exporting component with OPTIONAL children
export default function Newsletter() {
  const posts: Post[] = getAllPosts().filter(
    (post) =>
      post.fmContentType == ("article" as ContentTypeEnum) || post.fmContentType == ("video" as ContentTypeEnum),
  );

  const TitlePost: Post = {
    slug: "newsletter",
    title: "Newsletter",
    date: "",
    preview: "",
    fmContentType: ContentTypeEnum.ARTICLE,
    author: {
      name: undefined,
      picture: undefined,
    },
    content: "",
    draft: false,
  };

  return (
    <main>
      <Container title={"Newsletter"} fullWidth={false} className={""}>
        <Article metadata={TitlePost} className="">
          My most recent videos and articles. For a full archive of my posts here, see the{" "}
          <Link href="/archive" className="hover:text-light-secondary">
            archive
          </Link>
          .
          <List listItems={posts} showThumbnails={false} />
          <Substack className="my-5" />
        </Article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "Newsletter | Nathan Davenport";

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
