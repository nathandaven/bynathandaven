import React, { FunctionComponent, ReactNode, useEffect } from "react";
import "@fontsource/inter";
import { Post } from "@/interfaces/post";
import DateFormatter from "@/app/_components/date-formatter";
import { Button } from "@/app/_components/Button";
import classNames from "classnames";
import { Back } from "./Back";
import { VideoComponent } from "@/app/_components/Video";
import Link from "next/link";
import { Prose } from "./Prose";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  post: Post;
  noHeader?: boolean;
  invert?: boolean;
  fullWidth?: boolean;
};

// exporting component with OPTIONAL children
export const Title: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  post = {} as Post,
  noHeader = false,
  invert = false,
  fullWidth = true,
}) => {
  if (noHeader && !post) {
    return <></>;
  }
  const accentVideo = invert ? "text-display-blue-light" : "text-display-blue dark:text-display-blue-light";
  const accentAlbum = invert ? "text-display-red-light" : "text-display-red dark:text-display-red-light";

  return (
    <Prose className={className} invert={invert}>
      <div className={fullWidth ? "xl:mx-auto xl:max-w-[77rem]" : ""}>
        <div className="no-scrollbar flex w-full flex-row gap-3 overflow-hidden overflow-x-scroll text-nowrap break-keep">
          {/* Author Generation */}
          {!noHeader &&
          post?.author?.name &&
          post?.author?.name.length > 0 &&
          post.fmContentType &&
          post.fmContentType.length > 0 ? (
            <>
              <span
                className={classNames(
                  "text-nowrap font-bold",
                  post.fmContentType == "video" ? accentVideo : accentAlbum,
                )}
              >
                {post.fmContentType?.charAt(0).toUpperCase() + post.fmContentType.slice(1)}
                {/*  by{" "}
              {post?.author?.name} */}
              </span>
              {"—"}
            </>
          ) : (
            <></>
          )}
          {/* Tag Generation */}
          {!noHeader && post?.tags && post?.tags.length > 0 ? (
            <>
              {post?.tags.map((tag, key) => (
                <span key={key}>
                  <Link
                    href={`/tag/${tag}`}
                    className={classNames(
                      "text-nowrap no-underline",
                      invert ? "text-light-primary" : "text-dark-primary dark:text-light-primary",
                    )}
                  >
                    #{tag}
                  </Link>
                </span>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        {/* Title Generation */}
        {!noHeader && post?.title && post?.title.length > 0 ? (
          <>
            <h1
              className={classNames(
                "font-serif my-2 leading-none md:pb-5 lg:pb-10",
                invert ? "text-light-primary" : "text-dark-primary dark:text-light-primary",
              )}
            >
              <span className="font-serif md:text-6xl xl:text-[5rem]">{post?.title}</span>
            </h1>
          </>
        ) : (
          <></>
        )}
      </div>
      {(post?.description && post?.description.length > 0) ||
      (post.fmContentType == "video" && post.youtubeEmbedCode && post.youtubeEmbedCode.length > 0) ? (
        <div className="flex flex-col-reverse gap-x-10 md:flex-row lg:gap-x-20">
          {/* Video */}
          {!noHeader && post.fmContentType == "video" && post.youtubeEmbedCode && post.youtubeEmbedCode.length > 0 && (
            <div className="w-full">
              <>
                <VideoComponent post={post} invert={invert} />
                <div className="mb-0 flex justify-center pb-0">
                  <a
                    href={`https://www.youtube.com/watch?v=${post.youtubeEmbedCode}`}
                    className="border-none text-right text-xs no-underline opacity-75 hover:shadow-none"
                    target="_blank"
                  >
                    via YouTube
                  </a>
                </div>
              </>
            </div>
          )}
          <div className="flex h-auto flex-col justify-between md:w-2/5 md:pb-0 md:pt-1 lg:w-3/5 xl:w-1/3">
            <div>
              {/* Description Generation */}
              {!noHeader && post?.description && post?.description.length > 0 ? (
                <div>
                  <h4
                    className={classNames(
                      "my-0 justify-between py-0 pt-2 font-medium md:text-xl lg:text-3xl",
                      invert ? "text-light-primary" : "text-dark-primary dark:text-light-primary",
                    )}
                  >
                    {post?.description}
                  </h4>
                </div>
              ) : (
                <></>
              )}
              {!noHeader && (post?.date || (post?.author?.name && post?.author?.name.length > 0)) ? (
                <div className="flex h-fit w-full flex-col pb-2 leading-5 xs:flex-row">
                  {/* Published Date Generation */}
                  {!noHeader && post?.date ? (
                    <>
                      <div className="w-60 pr-5">
                        <p className="mb-0">
                          Published
                          <br />
                          <b>
                            <DateFormatter dateString={post.date} />
                          </b>
                        </p>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {/* Author Generation */}
                  {!noHeader && post?.author?.name && post?.author?.name.length > 0 ? (
                    <>
                      <div className="w-60">
                        <p className="mb-0">
                          Written by <br />
                          <b>{post.author.name}</b>
                        </p>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
            {!noHeader && post?.description && post?.description.length > 0 && (
              <div className="xl:max-w-96">
                <p className="italic">
                  Like what you see? Consider{" "}
                  <a href="https://youtube.com/@nathandaven" target="_blank" className="text-inherit">
                    subscribing to the YouTube channel
                  </a>{" "}
                  , and joining my{" "}
                  <a href="https://youtube.com/@nathandaven" target="_blank" className="text-inherit">
                    Substack e-mail list!
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      {children}
    </Prose>
  );
};
