import { Metadata, MetadataRoute } from "next";
import { getAllPosts, getPostBySlug, getPostDirByType } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/ArticleBody";
import { Container } from "@/app/_components/Container";
import { Article } from "@/app/_components/Article";

// Load client side comments
import dynamic from "next/dynamic";
import { DOMAIN } from "@/lib/constants";
import { VideoComponent } from "@/app/_components/Video";
import { Substack } from "@/app/_components/Substack";
import React from "react";
import { metadata } from "@/app/layout";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { notFound } from "next/navigation";
import ImageBlur from "@/app/_components/ImageBlur";
import { Photo } from "@/interfaces/photo";
import { format } from "date-fns";

const PhotoGrid = dynamic(() => import("@/app/_components/PhotoGrid"), {
  ssr: false,
  loading: () => (
    <div key="test" className="align-center h-[90vh] w-full text-center transition-all duration-75">
      Loading...
    </div>
  ),
});

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

  const content = await markdownToHtml(post.content);

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
          {content ? <PostBody content={content} /> : <div className="py-3"></div>}
          {/* Album Grid */}
          {params.type == "album" && (
            <PhotoGrid post={post}>
              {post.photoList?.map((photo: Photo, index) => {
                const date = photo.dateTime ? format(photo.dateTime, "LLLL	d, yyyy") : "";
                const desc = `${date ? date + " - " : ""}${photo.make ? photo.make + " " : ""}${photo.model ? photo.model : ""}`;
                return (
                  <div key={index}>
                    <ImageBlur
                      src={photo.relativePath}
                      alt={`Photo taken on ${desc}`}
                      key={index}
                      priority={index < 3 ? true : undefined}
                      width={photo.width ?? undefined}
                      height={photo.height ?? undefined}
                      caption={desc}
                    />
                    {photo.caption && photo.make && photo.model ? (
                      <i className="text-xs" key={index}>
                        {photo.caption} {photo.make} {photo.model}{" "}
                      </i>
                    ) : undefined}
                  </div>
                );
              })}
            </PhotoGrid>
          )}
          {/* Disable for general type */}
          {params.type != "general" && (
            <>
              {/* Subscribe Section */}
              <Substack className="mt-10 border border-b-0 border-l-0 border-r-0 border-dark-primary dark:border-light-primary" />
              {/* Comments Section */}
              <div
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
              </div>
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
