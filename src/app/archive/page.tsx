import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { List } from "@/app/_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { format } from "date-fns";
import { Metadata } from "next";

import { DOMAIN } from "@/lib/constants";
import { Divider } from "../_components/Divider";
import { siteName } from "@/app/layout";

function year(dateString: string) {
  return format(dateString, "yyyy");
}

// exporting component with OPTIONAL children
export default function Archive() {
  const posts: Post[] = getAllPosts();
  const years: string[] = [] as string[];
  posts.forEach((post) => {
    if (post.date) {
      if (!years.includes(year(post.date))) years.push(year(post.date));
    }
  });

  const TitlePost: Post = {
    slug: "archive",
    title: "Archive",
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
      <Container title={"Archive"} fullWidth={false} className={""}>
        <Article metadata={TitlePost} className="">
          <div className="mt-2 grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
            {years
              .sort()
              .reverse()
              .map((year, key) => {
                return (
                  <section key={key} className="mb-10 w-full">
                    <Divider title={year} large={true} />
                    <div key={key} className="mt-3 w-fit">
                      <List
                        listItems={posts.filter(
                          (post) =>
                            post.date &&
                            post.fmContentType &&
                            format(post?.date, "yyyy") === year &&
                            post.fmContentType !== ContentTypeEnum.GENERAL,
                        )}
                        showThumbnails={false}
                        showDescription={false}
                        showTags={false}
                      />
                    </div>
                  </section>
                );
              })}
          </div>
        </Article>
      </Container>
    </main>
  );
}

/* if (post.tags && post.tags.length > 0 && post.tags?.includes(tag)) {
                    return <List listItems={posts ?? ([] as Post[])} showThumbnails={false} />;
                  } */

export function generateMetadata(): Metadata {
  const title = "Archive | Nathan Davenport";
  const description = "Nathan Davenport's archive of posts, articles, and more.";
  const images = [`${DOMAIN}/og-image/og-image-archive.jpg`];

  return {
    title,
    openGraph: {
      title,
      description,
      images,
      url: `${DOMAIN}/archive`,
      siteName,
    },
    twitter: {
      title,
      description,
      creator: "@nathandaven",
      images: [`${DOMAIN}/og-image/og-image-archive.jpg`],
    },
  };
}
