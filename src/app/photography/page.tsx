import React from "react";
import { Article } from "@/app/_components/Article";
import { Container } from "@/app/_components/Container";
import { List } from "@/app/_components/List";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Metadata } from "next";
import { metadata } from "../layout";
import { DOMAIN } from "@/lib/constants";
import Link from "next/link";
import { Divider } from "../_components/Divider";

export default function Photography() {
  const posts: Post[] = getAllPosts().filter((post) => post.fmContentType == ("album" as ContentTypeEnum));

  const TitlePost: Post = {
    slug: "photography",
    title: "Stills Gallery",
    date: "",
    preview: "",
    fmContentType: ContentTypeEnum.ALBUM,
    author: {
      name: undefined,
      picture: undefined,
    },
    content: "",
    draft: false,
  };

  let projects: Post[] = [] as Post[];
  let jobs: Post[] = [] as Post[];
  let cities: Post[] = [] as Post[];
  let general: Post[] = [] as Post[];

  posts.forEach((post) => {
    if (post.tags && post.tags.length > 0 && post.tags.includes("project")) {
      projects.push(post);
    } else if (post.tags && post.tags.length > 0 && post.tags.includes("job")) {
      // jobs.push(post);
      projects.push(post);
    } else if (post.tags && post.tags.length > 0 && (post.tags.includes("travel") || post.tags.includes("city"))) {
      cities.push(post);
    } else {
      general.push(post);
    }
  });

  return (
    <main>
      <Container title={"Photography"} fullWidth={false} className={""}>
        <Article metadata={TitlePost}>
          <div className="pb-4">
            {posts && posts.length > 0 ? (
              <>
                <p className="mt-3">
                  Follow my personal{" "}
                  <a target="_blank" href="https://www.instagram.com/nathandaven/">
                    Instagram
                  </a>{" "}
                  to stay up to date with my photography work. See <Link href="/work">here</Link> to work with me on a
                  project.
                </p>
                {general.length > 0 && (
                  <section>
                    <Divider title={"General"} className="pt-0" />
                    <List
                      listItems={general}
                      showTags={false}
                      showDescription={false}
                      showThumbnails={true}
                      verticalThumbnail={true}
                      className={"pt-2"}
                    />
                  </section>
                )}
                {cities.length > 0 && (
                  <section>
                    <Divider title={"Cities"} />
                    <List
                      listItems={cities}
                      showTags={false}
                      showDescription={false}
                      showThumbnails={true}
                      verticalThumbnail={true}
                      className={"pt-2"}
                    />
                  </section>
                )}
                {projects.length > 0 && (
                  <section>
                    <Divider title={"Projects"} />
                    <List
                      listItems={projects}
                      showTags={false}
                      showDescription={false}
                      showThumbnails={true}
                      verticalThumbnail={true}
                      className={"pt-2"}
                    />
                  </section>
                )}
                {jobs.length > 0 && (
                  <section>
                    <Divider title={"Jobs"} />
                    <List
                      listItems={jobs}
                      showTags={false}
                      showDescription={false}
                      showThumbnails={true}
                      verticalThumbnail={true}
                      className={"pt-2"}
                    />
                  </section>
                )}
              </>
            ) : (
              <>
                <p>Albums are work in progress! Coming soon...</p>
                <p>
                  For now, check out my personal{" "}
                  <a target="_blank" href="https://www.instagram.com/nathandaven/">
                    Instagram
                  </a>{" "}
                  to see some of my work.
                </p>
              </>
            )}
          </div>
        </Article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = "Photography | Nathan Davenport";

  return {
    ...metadata,
    title,
    openGraph: {
      ...metadata.openGraph,
      title,
      images: [`${DOMAIN}/og-image/og-image-photography.jpg`],
    },
    twitter: {
      ...metadata.twitter,
      title,
      images: [`${DOMAIN}/og-image/og-image-photography.jpg`],
    },
  };
}
