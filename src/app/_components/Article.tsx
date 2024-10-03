import React, { FunctionComponent, ReactNode, useEffect } from "react";

import "@fontsource/inter";
import cn from "classnames";
import { Post } from "@/interfaces/post";
import DateFormatter from "./date-formatter";
import { Button } from "./Button";
import classNames from "classnames";
import { LIGHT_COLOR_PRIMARY, LIGHT_COLOR_SECONDARY } from "@/lib/constants";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  metadata?: Post;
  fullWidth?: boolean;
};

// exporting component with OPTIONAL children
export const Article: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  metadata = {} as Post,
  fullWidth = false,
}) => {
  /* "prose prose-gray mx-auto mb-2 h-full min-h-[calc(100svh-6rem)] w-[calc(100%-3.5rem)] max-w-none border-spacing-1 border border-dark-primary p-5 pb-5 leading-6 duration-200 dark:prose-invert prose-h1:text-5xl sm:min-h-[calc(100svh-4rem)] sm:w-full dark:border-gray-200" */
  /* (fullWidth ? "" : "md:px-20 md:pt-10") */
  return (
    <article
      className={classNames(
        `bg-light-primary dark:bg-dark-primary border-dark-primary prose prose-gray mb-2 h-full min-h-[calc(100svh-24rem)] w-full max-w-none border-spacing-1 border border-x-0 border-t-0 p-5 pb-5 leading-6 duration-200 dark:prose-invert prose-h1:text-5xl sm:min-h-[calc(100svh-6rem)] sm:w-full md:border-x dark:border-gray-200 ` +
          " " +
          (fullWidth ? "" : " md:px-14 md:pt-10 lg:px-36"),
        className,
      )}
    >
      {/* Tag Generation */}
      {metadata?.tags && metadata?.tags.length > 0 ? (
        <>
          <div className="mb-4 flex w-60 gap-x-2 pr-5 pt-5 no-underline">
            {metadata?.tags.map((tag, key) => (
              <Button key={key} href={"/tag/" + tag} sizeSmall={true} className="no-underline">
                {"#"}
                {tag}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
      {/* Title Generation */}
      {metadata?.title && metadata?.title.length > 0 ? (
        <>
          <h1 className="my-2">{metadata?.title}</h1>
        </>
      ) : (
        <></>
      )}
      <div className="flex w-full flex-row pb-2 leading-5">
        {/* Published Date Generation */}
        {metadata?.date ? (
          <>
            <div className="w-60 pr-5">
              <p className="mb-0">
                Published
                <br />
                <b>
                  <DateFormatter dateString={metadata.date} />
                </b>
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
        {/* Author Generation */}
        {metadata?.author?.name && metadata?.author?.name.length > 0 ? (
          <>
            <div className="w-60">
              <p className="mb-0">
                Written by <br />
                <b>{metadata.author.name}</b>
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {children}
    </article>
  );
};
