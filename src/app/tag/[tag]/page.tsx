import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { List } from "@/app/_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { metadata } from "@/app/layout";
import { DOMAIN } from "@/lib/constants";
import { Wrapper } from "@/app/_components/Wrapper";

export default async function Tag({ params }: Params) {
  const posts: Post[] = getAllPosts().filter((post) => post.tags?.includes(params.tag));

  if (!posts) {
    return notFound();
  }

  const TitlePost: Post = {
    slug: params.tag,
    title: "#" + params.tag,
    date: "",
    preview: "",
    fmContentType: ContentTypeEnum.TAG,
    author: {
      name: undefined,
      picture: undefined,
    },
    content: "",
    draft: false,
  };

  return (
    <main>
      <Container post={TitlePost} fullWidth={false} className={""}>
        <List listItems={posts} showThumbnails={false} showTags={false} showDescription={false} className="" />
      </Container>
    </main>
  );
}
type Params = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  const tags: Params[] = [];
  posts.forEach((post) => {
    if (post.tags && post.tags?.length > 0)
      post.tags.forEach((tag) => {
        tags.push({ tag: tag } as any);
      });
  });

  return tags;
}

export function generateMetadata({ params }: Params): Metadata {
  const title = `#${params.tag} | Nathan Davenport`;

  return {
    ...metadata,
    title,
    openGraph: {
      ...metadata.openGraph,
      title,
      images: [`${DOMAIN}/og-image/og-image-tags.jpg`],
    },
    twitter: {
      ...metadata.twitter,
      title,
      images: [`${DOMAIN}/og-image/og-image-tags.jpg`],
    },
  };
}
