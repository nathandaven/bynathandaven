import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { List } from "@/app/_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Substack } from "@/app/_components/Substack";
import { Metadata } from "next";
import Link from "next/link";
import { metadata } from "@/app/layout";
import { Divider } from "@/app/_components/Divider";
import { DOMAIN } from "@/lib/constants";

// exporting component with OPTIONAL children
export default function Newsletter() {
  const posts: Post[] = getAllPosts().filter(
    (post) =>
      post.fmContentType == ("article" as ContentTypeEnum) || post.fmContentType == ("video" as ContentTypeEnum),
  );

  const TitlePost: Post = {
    slug: "newsletter",
    title: "Editorials",
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
      <Container title={"Newsletter"} fullWidth={false} className={""}>
        <Article metadata={TitlePost} className="">
          <p className="mt-3">
            My most recent videos and articles. For a full archive of my posts here, see the{" "}
            <Link href="/archive" className="hover:text-light-secondary">
              archive
            </Link>
            . I also occasionally post exclusive content on my{" "}
            <a target="_blank" href="https://patreon.com/nathandaven">
              Patreon
            </a>
            , including full-length interviews.
          </p>
          <List listItems={posts} showThumbnails={false} />
          {/* <div className="mt-10 opacity-50">
            <Divider />
          </div> */}
          {/* <Substack className="my-0 pb-10" /> */}

          <div className="pb-10"></div>
        </Article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "Newsletter | Nathan Davenport";

  return {
    ...metadata,
    title,
    openGraph: {
      ...metadata.openGraph,
      title,
      images: [`${DOMAIN}/og-image/og-image-newsletter.jpg`],
    },
    twitter: {
      ...metadata.twitter,
      title,
      images: [`${DOMAIN}/og-image/og-image-newsletter.jpg`],
    },
  };
}
