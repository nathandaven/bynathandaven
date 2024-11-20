"use client";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { Navigation } from "@/app/_components/Navigation";
import { FooterMenu } from "@/app/_components/FooterMenu";
import HeaderSVG from "@/app/_svg/HeaderSVG";
import HeaderSVGMobile from "@/app/_svg/HeaderSVG";
import HeaderSVGName from "@/app/_svg/HeaderSVG";
import HeaderSVGNew from "../_svg/HeaderSVGNew";
import { useScrollDirection, ScrollDirectionType } from "use-scroll-direction";
import { Section } from "./Section";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  title: string;
  pageColor?: string;
  invert?: boolean;
  invertBorder?: boolean;
};

// exporting component with OPTIONAL children
export const MobileMenu: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  title = "",
  pageColor = "",
  invert,
  invertBorder,
}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [offset, setOffset] = useState(typeof window !== "undefined" ? window.scrollY : 0);
  const [hideNav, setHideNav] = useState(false);

  const { isScrolling, isScrollingDown, isScrollingUp } = useScrollDirection(/* { timeToReset: undefined } */);

  // const { scrollDirection, isScrollingUp, isScrollingDown, isScrolling } = useScrollDirection(timeToReset: 1);

  useEffect(() => {
    if (isScrolling || isScrollingUp || isScrollingDown) {
      if (isScrollingUp) {
        setHideNav(false);
      } else {
        setHideNav(true);
      }
    }
  }, [isScrollingUp, isScrollingDown, isScrolling]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scroll;
      const onScroll = () => setOffset(typeof window !== "undefined" ? window.scrollY : 0);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [offset]);

  // hacky but blocking scroll when menu open
  useEffect(() => {
    if (menuOpened) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [menuOpened]);

  const defaultTheme =
    "text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:text-light-primary  dark:hover:bg-light-primary dark:hover:text-dark-primary hover:bg-dark-primary hover:fill-light-primary hover:text-light-primary md:text-xl dark:fill-light-primary dark:hover:bg-dark-primary dark:hover:fill-dark-primary ";
  const invertTheme =
    "text-light-primary hover:bg-light-primary hover:text-dark-primary  hover:fill-light-primary  md:text-xl ";

  return (
    <nav
      className={classNames(
        `sticky left-0 right-0 top-0 z-50 w-full overflow-hidden overscroll-contain transition-all duration-75` /* "mx-7" */ /* b*/,
        menuOpened ? "" : "",
        /* offset > 90 ? "bg-opacity-90 backdrop-blur-3xl" : "bg-opacity-0", */
        !menuOpened && hideNav && offset > 75 ? "top-[-5rem]" : "top-0",
        !menuOpened && offset > 75 //
          ? "bg-opacity-95 drop-shadow-md backdrop-blur-xl" /* bg-opacity-0 */
          : "bg-opacity-100",
        className,
        menuOpened ? "bg-light-primary dark:bg-dark-secondary" : "",
      )}
    >
      <Section invert={invertBorder}>
        <div className={classNames("transition-all duration-75")}>
          <div className="">
            <div className={classNames("py-2")}>
              <div className="flex flex-row justify-between">
                <a className="" href="/">
                  <span
                    className={classNames(
                      "my-0 cursor-pointer py-0 text-base font-semibold no-underline",
                      invert && !menuOpened ? invertTheme : defaultTheme,
                    )}
                  >
                    Nathan Davenport
                  </span>
                </a>
                <div className="flex h-fit flex-row gap-x-3 text-base">
                  {/*  <span className="text-md cursor-default font-bold">{"/"}</span> */}
                  <Navigation className={"hidden sm:block"} invert={invert} />
                  <button
                    className={classNames(
                      "block cursor-pointer bg-transparent text-base font-semibold sm:hidden md:text-xl",
                      className,
                    )}
                    onClick={() => setMenuOpened(!menuOpened)}
                    /* onTouchEnd={() => setMenuOpened(!menuOpened)} */
                  >
                    {menuOpened ? (
                      <span className="text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
                        Back
                      </span>
                    ) : (
                      <span
                        className={
                          invert
                            ? "text-light-primary hover:bg-light-primary hover:text-dark-primary dark:text-light-primary"
                            : "hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary"
                        }
                      >
                        Menu
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "flex flex-col justify-between transition-all duration-75 sm:hidden",
            menuOpened
              ? "visible min-h-[calc(100dvh-3rem)] bg-light-primary opacity-100 dark:bg-dark-primary"
              : "invisible h-0 min-h-0 opacity-0",
          )}
        >
          <Navigation mobile={true} className={"gap-x-2"}></Navigation>
          <FooterMenu />
        </div>
      </Section>
    </nav>
  );
};

export default MobileMenu;
