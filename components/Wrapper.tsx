import React, { FunctionComponent, ReactNode, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@fontsource/inter";
import { Meta } from "./Meta";
import { Navigation } from "./Navigation";
import { mergeClasses } from "../lib/mergeClasses";
import { ArticleMetadata } from "../lib/getBlogPostData";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  metadata?: ArticleMetadata;
};

// exporting component with OPTIONAL children
export const Wrapper: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  metadata = {},
}) => {
  return (
    <div
      className={mergeClasses(
        "antialiased pr-0 pl-7 max-w-3xl mx-auto",
        className
      )}
    >
      <Meta />
      <SpeedInsights />
      {/* <Navigation /> */}
      <p>
        <b className="text-xl">Newsletter</b> by Nathan Davenport
      </p>
      <div className="flex flex-row">
        <article className="prose prose-gray dark:prose-invert mx-auto p-3 border border-black dark:border-gray-200 border-spacing-1 prose-h1:text-5xl max-w-none mb-10 pb-5 leading-6 w-full">
          {/* Tag Generation */}
          {metadata?.tags && metadata?.tags.length > 0 ? (
            <>
              <div className="pt-5 pr-5 w-60 mb-4 no-underline">
                {metadata?.tags.map((tag, key) => (
                  <a className="no-underline font-normal" key={key}>
                    {key > 0 ? " > " : <></>}
                    {tag}
                  </a>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
          {/* Title Generation */}
          {metadata?.title && metadata?.title.length > 0 ? (
            <>
              <h1 className="my-2">What Happened to Downtown Atlanta?</h1>
            </>
          ) : (
            <></>
          )}
          <div className="flex flex-row w-full leading-5 pb-2">
            {/* Published Date Generation */}
            {metadata?.date && metadata?.date.length > 0 ? (
              <>
                <div className="pr-5 w-60">
                  <p className="mb-0">
                    Published
                    <br />
                    <b>January 1, 2024</b>
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
            {/* Author Generation */}
            {metadata?.author && metadata?.author.length > 0 ? (
              <>
                <div className="w-60">
                  <p className="mb-0">
                    Written by <br />
                    <b>Nathan Davenport</b>
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
        <ul className="[writing-mode:vertical-lr] text-xl space-y-3">
          <Navigation />
        </ul>
      </div>
      <GoogleAnalytics gaId="G-X1XTCSK8DT" />
    </div>
  );
};
