import React, { FunctionComponent, ReactNode } from "react";
import cn from "classnames";
import classNames from "classnames";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  mobile?: boolean;
};

// exporting component with OPTIONAL children
export const Navigation: FunctionComponent<PropsWithChildren> = ({ children, className, mobile = false }) => {
  return (
    <div
      className={
        /* "m-5 border border-black border-spacing-1" */ cn(
          className,
          mobile
            ? "xs:text-5xl xs:gap-y-4 xs:py-4 flex flex-col gap-y-1 py-1 text-3xl"
            : "mx-auto mb-0 flex h-fit max-w-3xl space-y-2 pb-0",
        ) /* border border-l-0 border-y-0 border-black border-spacing-1 */
      }
    >
      <a
        href="/newsletter"
        className={classNames(
          "text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white",
          mobile ? "" : "mr-2 text-base md:text-xl",
        )}
      >
        Newsletter
      </a>
      <a
        href="/gallery"
        className={classNames(
          "text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white",
          mobile ? "" : "mr-2 text-base md:text-xl",
        )}
      >
        Gallery
      </a>
      <a
        href="/general/services"
        className={classNames(
          "text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white",
          mobile ? "" : "mr-2 text-base md:text-xl",
        )}
      >
        Services
      </a>
      <a
        href="/general/press"
        className={classNames(
          "text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white",
          mobile ? "" : "mr-2 text-base md:text-xl",
        )}
      >
        Press
      </a>
      <a
        href="/general/about"
        className={classNames(
          "text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white",
          mobile ? "" : "mr-0 text-base md:text-xl",
        )}
      >
        About
      </a>
    </div>
  );
};
