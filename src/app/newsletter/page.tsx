import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { Article } from "../_components/Article";
import { Container } from "../_components/Container";
import { List } from "../_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";

// exporting component with OPTIONAL children
export default function Newsletter() {
  const posts: Post[] = getAllPosts().filter(
    (post) =>
      post.fmContentType == ("article" as ContentTypeEnum) || post.fmContentType == ("video" as ContentTypeEnum),
  );

  const TitlePost: Post = {
    slug: "newsletter",
    title: "Newsletter",
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
      <Container title={"Newsletter"} fullWidth={false} className={""}>
        <Article metadata={TitlePost} className="">
          <List listItems={posts} showThumbnails={false} />
        </Article>
      </Container>
    </main>
  );
}
