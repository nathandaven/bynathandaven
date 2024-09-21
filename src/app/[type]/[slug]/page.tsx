import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostDirByType } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/ArticleBody";
import { Container } from "@/app/_components/Container";
import { Article } from "@/app/_components/Article";

// Load client side comments
import dynamic from "next/dynamic";
import classNames from "classnames";
import { DOMAIN } from "@/lib/constants";
import { VideoComponent } from "@/app/_components/Video";
import { Button } from "@/app/_components/Button";
import SubstackCustom from "@/app/_components/SubstackCustom";
import { Substack } from "@/app/_components/Substack";

const PhotoGrid = dynamic(() => import("@/app/_components/PhotoGrid"), {
  ssr: false,
  loading: () => (
    <div key="test" className="align-center w-full text-center transition-all duration-75">
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
  const post = getPostBySlug(params.slug, getPostDirByType(params.type ?? "general"));

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

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
        <Article metadata={post} fullWidth={params.type == "album" ? true : false} className="">
          {params.type == "video" && post.youtubeEmbedCode && post.youtubeEmbedCode.length > 0 && (
            <>
              <VideoComponent post={post} />
              <div className="mb-0 flex justify-center pb-0">
                <a
                  href={`https://www.youtube.com/watch?v=${post.youtubeEmbedCode}`}
                  className="border-none text-right text-xs no-underline opacity-75"
                  target="_blank"
                >
                  via YouTube
                </a>
              </div>
            </>
          )}
          {/* Markdown Post Content */}
          <PostBody content={content} />
          {/* Album Grid */}
          {params.type == "album" && <PhotoGrid post={post} />}
          {/* Disable for general type */}
          {params.type != "general" && (
            <>
              {/* Subscribe Section */}
              <Substack className="mt-10 border border-b-0 border-l-0 border-r-0 border-black dark:border-white" />
              {/* Comments Section */}
              <div
                className={"mt-10 w-full gap-8 border border-b-0 border-l-0 border-r-0 border-black dark:border-white"}
              >
                <Comments
                  className="w-full"
                  appId={process.env.CUSDIS_APP_ID_SECRET ?? ""}
                  pageId={params.slug ?? ""}
                  pageTitle={params.slug ?? ""}
                  pageUrl={params.slug ? DOMAIN + params.type + "/" + params.slug + "/" : DOMAIN}
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
    type?: string;
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug, getPostDirByType(params.type || "general"));

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Newsletter by Nathan Davenport`;

  return {
    title,
    openGraph: {
      title,
      images: [post.preview ?? ""], // move back to ogImage { url: ""}
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
