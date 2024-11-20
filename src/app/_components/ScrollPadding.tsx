"use client";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { useScrollDirection, ScrollDirectionType } from "use-scroll-direction";
import { Section } from "./Section";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  startOffset?: number;
  minClass?: string;
  maxClass?: string;
};

// exporting component with OPTIONAL children
export const ScrollPadding: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  startOffset = 75,
  minClass = "pt-0",
  maxClass = "pt-5",
}) => {
  const { isScrolling, isScrollingDown, isScrollingUp } = useScrollDirection(/* { timeToReset: undefined } */);
  const [offset, setOffset] = useState(typeof window !== "undefined" ? window.scrollY : 0);
  const [hideNav, setHideNav] = useState(false);

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
    console.log("offset", offset);
    if (typeof window !== "undefined") {
      window.scroll;
      const onScroll = () => setOffset(typeof window !== "undefined" ? window.scrollY : 0);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [offset]);

  return (
    <div
      className={classNames("transition-all duration-75", hideNav && offset > startOffset ? minClass : maxClass)}
    ></div>
  );
};

export default ScrollPadding;
