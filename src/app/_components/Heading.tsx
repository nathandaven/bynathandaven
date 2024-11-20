"use client";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Usage: App router
import { InView } from "react-intersection-observer";

// exporting component with OPTIONAL children
export const Heading: FunctionComponent<any> = (props: any) => {
  const [highlighted, setHighlighted] = useState(false);

  const selector =
    props.children.length > 0
      ? `#toc-${props.children
          .toString()
          .toLowerCase()
          .replace(/[^a-zA-Z ]+/g, "")
          .replace("/ {2,}/", " ")
          .replace(/ /g, "-")} span`
      : "";

  useEffect(() => {
    if (document !== null) {
      // ["bg-dark-primary", "text-light-primary"]
      const classes = ["font-semibold"];

      if (highlighted) {
        document.querySelector<HTMLElement>(selector)?.classList.add(...classes);
      } else {
        document.querySelector<HTMLElement>(selector)?.classList.remove(...classes);
      }
    }
  }, [highlighted]);
  return (
    <InView
      as={props.heading}
      onChange={(inView, entry) => {
        setHighlighted(inView);
      }}
      {...props}
    >
      {props.children !== undefined && props.children}
    </InView>
  );
};
