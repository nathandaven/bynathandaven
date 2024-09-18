import React, { FunctionComponent, ReactNode } from "react";
import cn from "classnames";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

// exporting component with OPTIONAL children
export const Navigation: FunctionComponent<PropsWithChildren> = ({ children, className }) => {
  return (
    <ul
      className={
        /* "m-5 border border-black border-spacing-1" */ cn(
          className,
          "mx-auto flex max-w-3xl space-y-2",
        ) /* border border-l-0 border-y-0 border-black border-spacing-1 */
      }
    >
      <ul className="">
        <a href="/newsletter" className="mb-2 mr-2">
          Newsletter
        </a>
        <a href="/gallery" className="mx-2 my-2">
          Gallery
        </a>
        <a href="/general/services" className="mx-2 my-2">
          Services
        </a>
        <a href="/general/press" className="mx-2 my-2">
          Press
        </a>
        <a href="/general/about" className="mx-2 my-2">
          About
        </a>
      </ul>
    </ul>
  );
};
