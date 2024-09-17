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

const PhotoGrid = dynamic(() => import("@/app/_components/PhotoGrid"), {
  ssr: false,
  loading: () => (
    <div key="test" className="align-center min-h-screen w-full text-center transition-all duration-75">
      Loading...
    </div>
  ),
});

const Comments = dynamic(() => import("@/app/_components/Comments"), {
  ssr: false,
  loading: () => (
    <div key="test" className="align-center min-h-screen w-full text-center transition-all duration-75">
      Loading...
    </div>
  ),
});

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug, getPostDirByType(params.type));

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      <Container
        title={params.type}
        fullWidth={params.type == "album" ? true : false}
        className={params.type == "album" ? "max-w-[150rem]" : ""}
      >
        <Article metadata={post} fullWidth={params.type == "album" ? true : false}>
          <PostBody content={content} />
          {params.type == "album" && <PhotoGrid post={post} />}
          {/* <PostHeader title={post.title} preview={post.preview} date={post.date} author={post.author} /> */}
          {params.type != "general" && (
            <Comments
              className="mt-10 w-full border border-b-0 border-l-0 border-r-0 border-black dark:border-white"
              appId={process.env.CUSDIS_APP_ID_SECRET ?? ""}
              pageId={params.slug ?? ""}
              pageTitle={params.slug ?? ""}
              pageUrl={
                params.slug ? "http://localhost:3000/" + params.type + params.slug + "/" : "http://localhost:3000/"
              }
            />
          )}
        </Article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
    type: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug, getPostDirByType(params.type));

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
