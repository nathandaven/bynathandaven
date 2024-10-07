import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { List } from "@/app/_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Metadata } from "next";
import { metadata } from "../layout";
import { DOMAIN } from "@/lib/constants";

export default function Photography() {
  const posts: Post[] = getAllPosts().filter((post) => post.fmContentType == ("album" as ContentTypeEnum));

  const TitlePost: Post = {
    slug: "photography",
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
      <Container title={"Photography"} fullWidth={false} className={""}>
        <Article metadata={TitlePost} className="">
          {posts && posts.length > 0 ? (
            <List listItems={posts} showThumbnails={true} className={""} />
          ) : (
            <>
              <p>Albums are work in progress! Coming soon...</p>
              <p>
                For now, check out my primary{" "}
                <a target="_blank" href="https://www.instagram.com/nathandaven/">
                  Instagram
                </a>{" "}
                to see some of my work.
              </p>
            </>
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
      images: [`${DOMAIN}/og-image/og-image-photography.jpg`],
    },
    twitter: {
      ...metadata.twitter,
      title,
      images: [`${DOMAIN}/og-image/og-image-photography.jpg`],
    },
  };
}
