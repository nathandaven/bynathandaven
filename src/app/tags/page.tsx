import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Button } from "@/app/_components/Button";
import { Metadata } from "next";
import { DOMAIN, siteName } from "@/lib/constants";

// exporting component with OPTIONAL children
export default function Tags() {
  const posts: Post[] = getAllPosts();
  const tags: string[] = [] as string[];
  posts.forEach((post) => {
    if (post.tags && post.tags?.length > 0) {
      post.tags.forEach((tag) => {
        if (!tags.includes(tag.toLowerCase())) tags.push(tag.toLowerCase());
      });
    }
  });

  /*  posts.forEach((post) => {
    if (post.tags && post.tags?.length > 0)
      post.tags.forEach((tag) => {
    if (tag)
        tags.push(tag);
      });
  }); */

  const TitlePost: Post = {
    slug: "tags",
    title: "All Tags",
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
      <Container title={"Tags"} fullWidth={false} className={""}>
        <Article metadata={TitlePost} className="">
          <div className="mb-5 mt-2 grid grid-cols-1 gap-4 pt-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tags.sort().map((tag, key) => {
              return (
                <Button href={"/tag/" + tag} key={key} className="w-fit">
                  {"#"}
                  {tag}
                </Button>
              );
            })}
          </div>
        </Article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "Tags | Nathan Davenport";
  const description = "Explore posts tagged with various topics by Nathan Davenport.";
  const images = [`${DOMAIN}/og-image/og-image-tags.jpg`];

  return {
    title,
    openGraph: {
      title,
      description,
      images,
      url: `${DOMAIN}/tags`,
      siteName,
    },
    twitter: {
      title,
      description,
      images,
      creator: "@nathandaven",
    },
  };
}
