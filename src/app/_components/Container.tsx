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
  fullWidth?: boolean;
  title?: string;
};

// exporting component with OPTIONAL children
export const Container: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  twoColumnLayout = false,
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
          <div className="rotate-180 space-y-3 text-right text-xl [writing-mode:vertical-lr]">
            <b className="text-xl">{title}</b> by Nathan Davenport
          </div>
          {children}
          {/* Sideways Nav */}
          {twoColumnLayout ? (
            <div className="">
              <article className="prose prose-gray mx-auto mb-10 w-full max-w-none border-spacing-1 border border-black p-3 pb-5 leading-6 dark:prose-invert prose-h1:text-5xl dark:border-gray-200">
                <h2>test</h2>
                <p>test</p>
              </article>
            </div>
          ) : (
            <></>
          )}
          <div className="space-y-3 text-xl [writing-mode:vertical-lr]">
            <Navigation className="" />
          </div>
        </div>
        <Footer className="pl-7 pr-7" />
      </div>
    </div>
  );
};
