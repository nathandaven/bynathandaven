import React, { FunctionComponent, ReactNode } from "react";
import cn from "classnames";
import classNames from "classnames";
import Link from "next/link";

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
        /* "m-5 border border-dark-primary border-spacing-1" */ cn(
          className,
          mobile
            ? "flex flex-col gap-y-1 py-1 text-3xl xs:gap-y-4 xs:py-4 xs:text-5xl"
            : "mx-auto mb-0 flex h-fit max-w-3xl space-y-2 pb-0",
        ) /* border border-l-0 border-y-0 border-dark-primary border-spacing-1 */
      }
    >
      <Link
        href="/newsletter"
        className={classNames(
          "text-gray-800 hover:text-dark-primary dark:text-gray-200 dark:hover:text-light-primary",
          mobile ? "" : "mr-2 text-base md:text-xl",
        )}
      >
        Newsletter
      </Link>
      <Link
        href="/photography"
        className={classNames(
          "text-gray-800 hover:text-dark-primary dark:text-gray-200 dark:hover:text-light-primary",
          mobile ? "" : "mr-2 text-base md:text-xl",
        )}
      >
        Photography
      </Link>
      {/* <a
        href="/general/services"
        className={classNames(
          "hover:text-dark-primary dark:hover:text-light-primary text-gray-800 dark:text-gray-200",
          mobile ? "" : "mr-2 text-base md:text-xl",
        )}
      >
        Services
      </a> */}
      <Link
        href="/work"
        className={classNames(
          "text-gray-800 hover:text-dark-primary dark:text-gray-200 dark:hover:text-light-primary",
          mobile ? "" : "mr-2 text-base md:text-xl",
        )}
      >
        Work
      </Link>
      <Link
        href="/about"
        className={classNames(
          "text-gray-800 hover:text-dark-primary dark:text-gray-200 dark:hover:text-light-primary",
          mobile ? "" : "mr-0 text-base md:text-xl",
        )}
      >
        About
      </Link>
    </div>
  );
};
