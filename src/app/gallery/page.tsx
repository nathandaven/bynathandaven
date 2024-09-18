import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { Article } from "../_components/Article";
import { Container } from "../_components/Container";
import { List } from "../_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";

export default function Gallery() {
  const posts: Post[] = getAllPosts().filter((post) => post.fmContentType == ("album" as ContentTypeEnum));

  const TitlePost: Post = {
    slug: "gallery",
    title: "Gallery",
    date: "",
    preview: "",
    fmContentType: ContentTypeEnum.ALBUM,
    author: {
      name: undefined,
      picture: undefined,
    },
    content: "",
  };

  return (
    <main>
      <Container title={"Gallery"} fullWidth={false} className={""}>
        <Article metadata={TitlePost} className="">
          <List listItems={posts} showThumbnails={true} className={"grid grid-cols-2 gap-2"} />
        </Article>
      </Container>
    </main>
  );
}
