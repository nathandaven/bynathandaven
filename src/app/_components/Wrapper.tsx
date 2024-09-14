import React, { FunctionComponent, ReactNode, useEffect } from "react";

import "@fontsource/inter";
import { Meta } from "./Meta";
import { Navigation } from "./Navigation";
import cn from "classnames";
import { Post } from "@/interfaces/post";
import DateFormatter from "./date-formatter";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  metadata?: Post;
};

// exporting component with OPTIONAL children
export const Wrapper: FunctionComponent<PropsWithChildren> = ({ children, className, metadata = {} }) => {
  return (
    <div className={cn("mx-auto max-w-3xl pl-7 pr-0 antialiased", className)}>
      <Meta />
      {/* <Navigation /> */}
      <p>
        <a href="/">
          <b className="text-xl">Newsletter</b> by Nathan Davenport
        </a>
      </p>
      <div className="flex flex-row">
        <article className="prose prose-gray mx-auto mb-10 w-full max-w-none border-spacing-1 border border-black p-3 pb-5 leading-6 dark:prose-invert prose-h1:text-5xl dark:border-gray-200">
          {/* Tag Generation */}
          {metadata?.tags && metadata?.tags.length > 0 ? (
            <>
              <div className="mb-4 w-60 pr-5 pt-5 no-underline">
                {metadata?.tags.map((tag, key) => (
                  <span key={key}>
                    {key > 0 ? (
                      <span className="cursor-default" key={key}>
                        {" > "}
                      </span>
                    ) : (
                      <></>
                    )}
                    <a className="font-normal no-underline">{tag}</a>
                  </span>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
          {/* Title Generation */}
          {metadata?.title && metadata?.title.toString().length > 0 ? (
            <>
              <h1 className="my-2">{metadata?.title.toString()}</h1>
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
          {/* <Lorem /> */}
        </article>
        <ul className="space-y-3 text-xl [writing-mode:vertical-lr]">
          <Navigation />
        </ul>
      </div>
    </div>
  );
};
