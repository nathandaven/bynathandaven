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
    <div
      className={classNames(
        "aspect-h-9 aspect-w-16 mb-2 mt-4 w-full border-spacing-0 border border-dark-primary outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:outline-1 hover:drop-shadow-lg dark:border-light-primary dark:outline-light-primary",
        className,
      )}
    >
      <Suspense fallback={<p>Loading video...</p>}>
        <iframe
          className="z-20"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${post.youtubeEmbedCode}`}
          title={post.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        ></iframe>
        <div className="z-0 h-full w-full bg-light-primary drop-shadow-2xl dark:bg-dark-primary"></div>
      </Suspense>
    </div>
  );
};
