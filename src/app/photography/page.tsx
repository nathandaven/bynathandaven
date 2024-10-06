import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { List } from "@/app/_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Metadata } from "next";
import { metadata } from "../layout";

export default function Photography() {
  const posts: Post[] = getAllPosts().filter((post) => post.fmContentType == ("album" as ContentTypeEnum));

  const TitlePost: Post = {
    slug: "gallery",
    title: "Photography",
    date: "",
    preview: "",
    fmContentType: ContentTypeEnum.ALBUM,
    author: {
      name: undefined,
      picture: undefined,
    },
    content: "",
    draft: false,
  };

  return (
    <main>
      <Container title={"Gallery"} fullWidth={false} className={""}>
        <Article metadata={TitlePost} className="">
          {posts && posts.length > 0 ? (
            <List listItems={posts} showThumbnails={true} className={""} />
          ) : (
            <div>Albums are work in progress! Coming soon...</div>
          )}
        </Article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "Photography | Nathan Davenport";

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
