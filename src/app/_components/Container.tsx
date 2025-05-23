import React, { FunctionComponent, ReactNode, useEffect } from "react";

import "@fontsource/inter";
import { FooterMenu } from "@/app/_components/FooterMenu";
import classNames from "classnames";
import { MobileMenu } from "@/app/_components/MobileMenu";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  twoColumnLayout?: boolean;
  secondCol?: ReactNode;
  fullWidth?: boolean;
  increasedWidth?: boolean;
  title?: string;
};

// exporting component with OPTIONAL children
export const Container: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  twoColumnLayout = false,
  secondCol,
  fullWidth = false,
  increasedWidth = false,
  title = "Home",
}) => {
  return (
    <div
      className={classNames(
        (fullWidth ? "max-w-[90rem]" : increasedWidth ? "max-w-6xl" : "max-w-4xl") +
          " " +
          "mx-auto px-0 antialiased transition-all md:px-6",
        className,
      )}
    >
      {/* Sticky Top Bar /> */}
      <MobileMenu title={title} />
      <div className="flex flex-row bg-transparent">
        {/* <div className="rotate-180 space-y-3 text-right text-xl [writing-mode:vertical-lr]">
          <a href="/">
            <b className="text-xl">{title}</b> by Nathan Davenport
          </a>
        </div> */}
        <div className={classNames("flex w-full flex-col sm:flex-row" /* , "w-[calc(100%-3.5rem)]" */)}>
          {/* Sideways Nav */}
          {twoColumnLayout ? (
            <>
              <div className="sm:w-3/4">{children}</div>
              <div className="h-full w-full basis-1/4 sm:w-1/4">
                <article className="prose prose-gray mx-auto mb-2 h-full min-h-fit max-w-none border border-l border-t-0 border-dark-primary p-5 pb-5 leading-6 duration-200 dark:prose-invert prose-h1:text-5xl sm:w-full sm:border-l-0 sm:border-t md:pt-10 dark:border-gray-200">
                  {secondCol}
                </article>
              </div>
            </>
          ) : (
            <>{children}</>
          )}
        </div>
        {/* <div className="space-y-3 text-xl [writing-mode:vertical-lr]">
          <Navigation className="" />
        </div> */}
      </div>
      <FooterMenu className="px-3 md:px-0" /* className="pl-7 pr-7" */ />
    </div>
  );
};
