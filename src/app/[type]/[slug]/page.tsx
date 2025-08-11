import { Metadata, MetadataRoute } from "next";
import { getAllPosts, getPostBySlug, getPostDirByType } from "@/lib/api";
import { PostBody } from "@/app/_components/MDXContent";
import { Container } from "@/app/_components/Container";
import { Article } from "@/app/_components/Article";

// Load client side comments
import dynamic from "next/dynamic";
import { VideoComponent } from "@/app/_components/Video";
import React, { ComponentPropsWithoutRef, Suspense } from "react";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { notFound } from "next/navigation";
import PhotoGrid from "@/app/_components/PhotoGrid";
import { DOMAIN, siteName } from "@/lib/constants";

const Comments = dynamic(() => import("@/app/_components/Comments"), {
  ssr: false,
  loading: () => (
    <div key="test" className="align-center w-full text-center transition-all duration-75">
      Loading...
    </div>
  ),
});

export default async function Post({ params }: Params) {
  if (!Object.values(ContentTypeEnum).includes(params.type as ContentTypeEnum)) {
    return notFound();
  }
  const post = getPostBySlug(params.slug, getPostDirByType(params.type));

  if (!post) {
    return notFound();
  }

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      <Container
        title={
          params.type && params.type.length > 0 ? params.type?.charAt(0).toUpperCase() + params?.type.slice(1) : ""
        }
        fullWidth={params.type == "album" ? true : false}
        className={params.type == "album" ? "max-w-[150rem]" : ""}
        twoColumnLayout={false}
        secondCol={<></>}
      >
        <Article showBack={true} metadata={post} fullWidth={params.type == "album" ? true : false} className="">
          {params.type == "video" && post.youtubeEmbedCode && post.youtubeEmbedCode.length > 0 && (
            <>
              <VideoComponent post={post} />
              <div className="mb-0 flex justify-center pb-0">
                <a
                  href={`https://www.youtube.com/watch?v=${post.youtubeEmbedCode}`}
                  className="border-none text-right text-xs no-underline opacity-75 hover:shadow-none"
                  target="_blank"
                >
                  via YouTube
                </a>
              </div>
            </>
          )}
          {/* Markdown Post Content */}
          {post.content ? <PostBody content={post.content} /> : <div className="py-3"></div>}
          {/* Album Grid */}
          {params.type == "album" && post.photoList ? <PhotoGrid post={post} className=""></PhotoGrid> : <></>}
          {/* Disable for general type */}
          {params.type != "general" && (
            <>
              <div className="mt-10"></div>
              {/* Subscribe Section */}
              {/* <Substack className="mt-10 border border-b-0 border-l-0 border-r-0 border-dark-primary dark:border-light-primary" /> */}
              {/* Comments Section */}
              {/* <div
                className={
                  "mt-10 w-full gap-8 border border-b-0 border-l-0 border-r-0 border-dark-primary dark:border-light-primary"
                }
              >
                <Comments
                  className="w-full"
                  appId={process.env.CUSDIS_APP_ID_SECRET ?? ""}
                  pageId={params.slug ?? ""}
                  pageTitle={params.slug ?? ""}
                  pageUrl={params.slug ? DOMAIN + "/" + params.type + "/" + params.slug : DOMAIN}
                />
              </div> */}
            </>
          )}
        </Article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    type: string;
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  if (!params.type) {
    return notFound();
  }
  const post = getPostBySlug(params.slug, getPostDirByType(params.type));
  if (!post) {
    return notFound();
  }
  const type =
    params.type && params.type.length > 0 ? params.type?.charAt(0).toUpperCase() + params?.type.slice(1) : "general";
  const title = post.title ? `${post.title} – ${type} by Nathan Davenport` : "Nathan Davenport";
  const description = post.description ? post.description : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      authors: post.author && post.author.name ? [post.author.name ?? ""] : undefined,
      images: post.preview ? [post.preview] : undefined,
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
      url: post.slug ? `${DOMAIN}/${params.type}/${post.slug}` : DOMAIN,
      siteName,
    },
    twitter: {
      title,
      description,
      images: post.preview ? [post.preview] : undefined,
      creator: "@nathandaven",
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
      type: post.fmContentType,
    };
  });
}
export const dynamicParams = false;
