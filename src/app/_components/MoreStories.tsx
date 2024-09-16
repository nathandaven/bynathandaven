import { Post } from "@/interfaces/post";
import { HeroPost } from "./HeroPost";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { useState, useEffect } from "react";
import classNames from "classnames";

const loadingA = (
  <div key="test" className="align-center min-h-screen w-full text-center transition-all duration-75">
    Loading...
  </div>
);

const loadingB = (
  <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-2 pt-0 md:grid-cols-2">
    <HeroPost
      key={"Loading"}
      title={"Loading"}
      coverImage={"/assets/articles/demo/loading.png"}
      date={"2024-09-14T04:45:29.175Z"}
      author={{ name: "Loading" }}
      slug={""}
      excerpt={"Loading"}
      contentType={ContentTypeEnum.ARTICLE}
      className="h-fit"
    />
  </div>
);

import dynamic from "next/dynamic";
const ResponsiveGridA = dynamic(() => import("@/app/_components/ResponsiveGrid"), {
  ssr: false,
  loading: () => loadingA,
});

type Props = {
  posts: Post[];
  className: string;
};

function MoreStories({ posts, className }: Props) {
  return (
    <section className={classNames("", className)}>
      {/* <div className="mb-10 grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-[55%_auto]"> */}
      <ResponsiveGridA className="">
        {posts
          .filter((post) => post.fmContentType.toString() != "general")
          .map((post) => (
            <HeroPost
              key={post.slug}
              title={post.title ?? ""}
              coverImage={post.coverImage ?? ""}
              date={post.date ?? ""}
              author={post.author ?? {}}
              slug={post.slug ?? ""}
              excerpt={post.excerpt ?? ""}
              contentType={post.fmContentType ?? ""}
              className="h-fit"
            />
          ))}
      </ResponsiveGridA>
      {/* </div> */}
    </section>
  );
}

export default MoreStories;
