"use client";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  title: string;
};

function lockScroll() {
  if (typeof window !== "undefined") {
    window.onscroll = () => {};
  }
}

// exporting component with OPTIONAL children
export const MobileMenu: FunctionComponent<PropsWithChildren> = ({ children, className, title = "" }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <nav
        className={classNames(
          "sticky top-0 z-50 overscroll-contain border border-x-0 border-t-0 border-black bg-[#f1f0e9] px-5 md:px-0 dark:border-white dark:bg-[#0f0e0e]" /* "mx-7" */,
          menuOpened ? "border-black" : "pt-5",
        )}
      >
        <div className="flex justify-between pt-2">
          <a className="cursor-pointer dark:text-white" href="/">
            <b className="text-xl">{title}</b> by Nathan Davenport
          </a>
          <div className="text-xl">
            <Navigation className="hidden sm:block" />
            <button
              className={classNames(
                "block cursor-pointer text-gray-800 hover:text-black sm:hidden md:text-xl dark:text-gray-200 dark:hover:text-white",
                className,
              )}
              onClick={() => setMenuOpened(!menuOpened)}
              /* onTouchEnd={() => setMenuOpened(!menuOpened)} */
            >
              Menu
            </button>
          </div>
        </div>

        <div
          className={classNames(
            "flex h-full flex-col justify-between transition-all duration-150 sm:hidden",
            menuOpened ? "visible h-[calc(100dvh-2rem)] opacity-100" : "invisible h-0 opacity-0",
          )}
        >
          <Navigation mobile={true} className={"gap-2"}></Navigation>
          <Footer />
        </div>
      </nav>
    </>
  );
};
