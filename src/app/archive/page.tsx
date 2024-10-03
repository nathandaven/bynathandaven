import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { Article } from "../_components/Article";
import { Container } from "../_components/Container";
import { List } from "../_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Button } from "../_components/Button";
import { parseISO, format } from "date-fns";
import { Metadata } from "next";
import { metadata } from "../layout";

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
                  <section key={key} className="w-fit">
                    <h3 className="mt-0 cursor-default pt-0">{year}</h3>
                    <div key={key} className="w-fit">
                      <List
                        listItems={posts.filter(
                          (post) =>
                            post.date &&
                            post.fmContentType &&
                            format(post?.date, "yyyy") === year &&
                            post.fmContentType !== ContentTypeEnum.GENERAL,
                        )}
                        showThumbnails={false}
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

  return {
    ...metadata,
    title,
    openGraph: {
      ...metadata.openGraph,
      title,
    },
    twitter: {
      ...metadata.twitter,
      title,
    },
  };
}
