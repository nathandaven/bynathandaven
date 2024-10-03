"use client";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { Navigation } from "@/app/_components/Navigation";
import { FooterMenu } from "@/app/_components/FooterMenu";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  title: string;
};

// exporting component with OPTIONAL children
export const MobileMenu: FunctionComponent<PropsWithChildren> = ({ children, className, title = "" }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  // hacky but blocking scroll when menu open
  useEffect(() => {
    if (menuOpened) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.add("relative");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.remove("relative");
    }
  }, [menuOpened]);

  return (
    <>
      <nav
        className={classNames(
          `sticky top-0 z-50 overflow-hidden overscroll-contain border border-x-0 border-t-0 border-dark-primary bg-light-secondary px-5 transition-all duration-300 md:px-0 dark:border-light-primary dark:bg-dark-secondary` /* "mx-7" */,
          menuOpened ? "border-black" : "mt-4",
        )}
      >
        <div className="flex justify-between pt-2">
          <a className="cursor-pointer dark:text-light-primary" href="/">
            <b className="text-lg sm:text-xl">{title}</b>
            <span className="text-sm sm:text-base"> by Nathan Davenport</span>
          </a>
          <div className="flex flex-col justify-end">
            <div className="h-fit text-base sm:text-xl">
              <Navigation className="hidden sm:block" />
              <button
                className={classNames(
                  "block cursor-pointer text-gray-800 hover:text-dark-primary sm:hidden dark:text-gray-100 dark:hover:text-light-primary",
                  className,
                )}
                onClick={() => setMenuOpened(!menuOpened)}
                /* onTouchEnd={() => setMenuOpened(!menuOpened)} */
              >
                Menu
              </button>
            </div>
          </div>
        </div>

        <div
          className={classNames(
            "flex flex-col justify-between transition-all duration-75 sm:hidden",
            menuOpened ? "visible min-h-[calc(100dvh-2rem)] opacity-100" : "invisible h-0 min-h-0 opacity-0",
          )}
        >
          <Navigation mobile={true} className={"gap-x-2"}></Navigation>
          <FooterMenu />
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
