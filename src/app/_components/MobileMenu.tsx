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
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [menuOpened]);

  return (
    <>
      <nav
        className={classNames(
          `sticky top-0 z-50 overflow-hidden overscroll-contain border border-x-0 border-t-0 border-dark-primary bg-light-primary px-3 transition-all duration-300 md:px-0 dark:border-light-primary dark:bg-dark-secondary` /* "mx-7" */,
          menuOpened ? "border-primary-dark" : "mt-4",
        )}
      >
        <div className="flex justify-between pt-2">
          <a
            className="h-fit cursor-pointer hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary"
            href="/"
          >
            <b className="text-lg md:text-xl">{title}</b>
            <span className="text-sm md:text-base"> by Nathan Davenport</span>
          </a>
          <div className="flex flex-col justify-end">
            <div className="h-fit text-base sm:text-xl">
              <Navigation className={"hidden sm:block"} />
              <button
                className={classNames(
                  "block cursor-pointer hover:bg-dark-primary hover:text-light-primary sm:hidden dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary",
                  className,
                )}
                onClick={() => setMenuOpened(!menuOpened)}
                /* onTouchEnd={() => setMenuOpened(!menuOpened)} */
              >
                {menuOpened ? <span>Back</span> : <span>Menu</span>}
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
