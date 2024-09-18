import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { Article } from "../_components/Article";
import { Container } from "../_components/Container";
import { List } from "../_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Button } from "../_components/Button";

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
  };

  return (
    <main>
      <Container title={"Tags"} fullWidth={false} className={""}>
        <Article metadata={TitlePost} className="">
          <div className="mt-2 grid grid-cols-1 gap-4 pt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
            {tags.sort().map((tag, key) => {
              return (
                <Button href={"/tag/" + tag} key={key} className="w-fit">
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

/* if (post.tags && post.tags.length > 0 && post.tags?.includes(tag)) {
                    return <List listItems={posts ?? ([] as Post[])} showThumbnails={false} />;
                  } */
