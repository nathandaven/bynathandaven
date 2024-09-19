import { Post } from "@/interfaces/post";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode, Suspense } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  post: Post;
};

// exporting component with OPTIONAL children
export const VideoComponent: FunctionComponent<PropsWithChildren> = ({ className, post }) => {
  return (
    <div className={classNames("aspect-w-16 aspect-h-9 mb-2 mt-4 w-full", className)}>
      <Suspense fallback={<p>Loading video...</p>}>
        <iframe
          className="z-50 border border-black dark:border-white"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${post.youtubeEmbedCode}`}
          title={post.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        ></iframe>
        <div className="z-0 h-full w-full bg-[#f2f1ea] drop-shadow-2xl dark:bg-[#0f0e0e]"></div>
      </Suspense>
    </div>
  );
};
