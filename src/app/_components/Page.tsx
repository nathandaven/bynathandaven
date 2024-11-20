import { Metadata } from "next";
import { getAllPosts, getPostBySlug, getPostDirByType } from "@/lib/api";
import { PostBody } from "@/app/_components/MDXContent";
import { Container } from "@/app/_components/Container";
import { Article } from "@/app/_components/Article";

// Load client side comments
import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
import { metadata } from "@/app/layout";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { notFound } from "next/navigation";
import PhotoGrid from "@/app/_components/PhotoGrid";
import { Post } from "@/interfaces/post";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  post: Post;
};

export default function Page({ params }: PageParams, postOverride?: Post) {
  if (!Object.values(ContentTypeEnum).includes(params.type as ContentTypeEnum)) {
    return notFound();
  }

  const post = getPostBySlug(params.slug, getPostDirByType(params.type));

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <Container
        fullWidth={params.type == "video" ? true : false}
        /* noWidth={params.type == "album" ? true : false} */ post={post}
      >
        {/* Markdown Post Content */}
        <Article noHeader={true} showBack={true} post={post} className="">
          {post.content ? <PostBody content={post.content} imagePadding={true} /> : <></>}
          {/* Album Grid */}
          {params.type == "album" && post.photoList ? <PhotoGrid post={post} className="pb-14"></PhotoGrid> : <></>}
        </Article>
      </Container>
    </main>
  );
}

export type PageParams = {
  params: {
    type: string;
    slug: string;
  };
};

export function generatePageMetadata({ params }: PageParams): Metadata {
  if (!params.type) {
    return notFound();
  }
  const post = getPostBySlug(params.slug, getPostDirByType(params.type));
  if (!post) {
    return notFound();
  }
  const type =
    params.type && params.type.length > 0 ? params.type?.charAt(0).toUpperCase() + params?.type.slice(1) : "general";
  const title = post.title ? `${post.title} | ${type} by Nathan Davenport` : "Nathan Davenport";
  const description = post.description ? post.description : undefined;

  return {
    ...metadata,
    title,
    description: description,
    openGraph: {
      ...metadata.openGraph,
      title,
      description: description,
      type: "article",
      authors: post.author && post.author.name ? [post.author.name ?? ""] : undefined,
      images: post.preview ? [post.preview] : undefined, // move back to ogImage { url: ""}
      videos:
        post.youtubeEmbedCode && post.youtubeEmbedCode.length > 0
          ? [
              {
                url: `https://www.youtube.com/watch?v=${post.youtubeEmbedCode}`,
                secureUrl: `https://www.youtube.com/watch?v=${post.youtubeEmbedCode}`,
                width: 1920,
                height: 1080,
              },
            ]
          : undefined,
    },
    twitter: {
      ...metadata.twitter,
      title: title,
      description: description,
      images: post.preview ? [post.preview] : undefined,
      creator: "@nathandaven",
    },
  };
}

export async function generatePageStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
      type: post.fmContentType,
    };
  });
}
export const dynamicParams = false;
