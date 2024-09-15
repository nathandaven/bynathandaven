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
    <div
      className={
        /* "m-5 border border-black border-spacing-1" */ cn(
          className,
          "mx-auto flex max-w-3xl space-y-2",
        ) /* border border-l-0 border-y-0 border-black border-spacing-1 */
      }
    >
      <ul className="">
        <a href="newsletter/demo" className="mb-2 mr-2">
          Newsletter
        </a>
        <a href="/" className="mx-2 my-2">
          Albums
        </a>
        <a href="/" className="mx-2 my-2">
          Press
        </a>
        <a href="/" className="mx-2 my-2">
          About
        </a>
        <a href="/" className="ml-2 mt-2">
          Contact
        </a>
      </ul>
    </div>
  );
};
