import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/ArticleBody";
import { Comments } from "@/app/_components/Comments";
import { Container } from "@/app/_components/Container";
import { Article } from "@/app/_components/Article";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      <Container title="Newsletter">
        <Article metadata={post}>
          {/* <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} /> */}
          <PostBody content={content} />
          <Comments
            className="mt-10 w-full border border-b-0 border-l-0 border-r-0 border-black"
            pageId={params.slug ?? ""}
            pageTitle={params.slug ?? ""}
            pageUrl={params.slug ? "http://localhost:3000/newsletter/" + params.slug + "/" : "http://localhost:3000/"}
          />
        </Article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Newsletter by Nathan Davenport`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage?.url ?? ""],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
