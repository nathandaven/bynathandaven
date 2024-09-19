import React, { FunctionComponent, ReactNode, useEffect } from "react";

import "@fontsource/inter";
import { Meta } from "./Meta";
import { Navigation } from "./Navigation";
import cn from "classnames";
import { Post } from "@/interfaces/post";
import DateFormatter from "./date-formatter";
import { Footer } from "./Footer";
import classNames from "classnames";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  twoColumnLayout?: boolean;
  secondCol?: ReactNode;
  fullWidth?: boolean;
  title?: string;
};

// exporting component with OPTIONAL children
export const Container: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  twoColumnLayout = false,
  secondCol,
  fullWidth = false,
  title = "Home",
}) => {
  return (
    <div className={classNames((fullWidth ? "max-w-[90rem]" : "max-w-6xl") + " " + "mx-auto antialiased", className)}>
      <div /* className="sm:pr-auto mr-7 pr-7 sm:mr-auto" */>
        <Meta />
        {/* <Navigation /> */}
        <p className="pl-7 dark:text-white">
          <a href="/">
            <b className="text-xl">{title}</b> by Nathan Davenport
          </a>
        </p>
        <div className="flex flex-row">
          <div className="invisible rotate-180 space-y-3 text-right text-xl [writing-mode:vertical-lr]">
            <a href="/">
              <b className="text-xl">{title}</b> by Nathan Davenport
            </a>
          </div>
          <div className="flex w-[calc(100%-3.5rem)] flex-col sm:flex-row">
            {/* Sideways Nav */}
            {twoColumnLayout ? (
              <>
                <div className="sm:w-3/4">{children}</div>
                <div className="h-full w-full basis-1/4 sm:w-1/4">
                  <article className="prose prose-gray mx-auto mb-2 h-full min-h-fit max-w-none border border-l border-t-0 border-black p-5 pb-5 leading-6 duration-200 dark:prose-invert prose-h1:text-5xl sm:min-h-[calc(100svh-4rem)] sm:w-full sm:border-l-0 sm:border-t md:pt-10 dark:border-gray-200">
                    {secondCol}
                  </article>
                </div>
              </>
            ) : (
              <>{children}</>
            )}
          </div>
          <div className="space-y-3 text-xl [writing-mode:vertical-lr]">
            <Navigation className="" />
          </div>
        </div>
        <Footer className="pl-7 pr-7" />
      </div>
    </div>
  );
};
