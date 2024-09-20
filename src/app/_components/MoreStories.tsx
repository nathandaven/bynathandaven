import { Post } from "@/interfaces/post";
import { HeroPost } from "./HeroPost";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { useState, useEffect } from "react";
import classNames from "classnames";

const loadingA = (
  <div key="test" className="align-center w-full text-center transition-all duration-75">
    Loading...
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
          .filter((post) => post.fmContentType != ("general" as ContentTypeEnum))
          .map((post) => (
            <HeroPost
              key={post.slug}
              title={post.title ?? ""}
              preview={post.preview ?? ""}
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
