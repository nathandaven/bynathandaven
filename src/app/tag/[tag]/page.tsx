import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { Article } from "../../_components/Article";
import { Container } from "../../_components/Container";
import { List } from "../../_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";

export default function Tag({ params }: Params) {
  const posts: Post[] = getAllPosts().filter((post) => post.tags?.includes(params.tag));

  const TitlePost: Post = {
    slug: params.tag,
    title: "#" + params.tag,
    date: "",
    preview: "",
    fmContentType: ContentTypeEnum.TAG,
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
          <List listItems={posts} showThumbnails={false} className="" />
        </Article>
      </Container>
    </main>
  );
}
type Params = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  const tags: Params[] = [] as Params[];
  posts.forEach((post) => {
    if (post.tags && post.tags?.length > 0)
      post.tags.forEach((tag) => {
        tags.push({ params: { tag: tag } });
      });
  });

  return tags;
}
