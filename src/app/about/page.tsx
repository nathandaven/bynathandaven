import React from "react";
import { Article } from "../_components/Article";
import { Container } from "../_components/Container";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Metadata } from "next/types";
import { metadata } from "../layout";

export default function About() {
  const TitlePost: Post = {
    slug: "about",
    title: "About",
    date: "",
    preview: "",
    fmContentType: ContentTypeEnum.ARTICLE,
    author: {
      name: "",
      picture: undefined,
    },
    content: "",
    draft: false,
  };

  return (
    <main>
      <Container title={"About"} fullWidth={false} className={""}>
        <Article metadata={TitlePost} className=""></Article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "About | Nathan Davenport";

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
