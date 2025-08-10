import React, { FunctionComponent, ReactNode } from "react";
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
        /* "m-5 border border-dark-primary border-spacing-1" */ classNames(
          className,
          mobile
            ? "flex flex-col gap-y-1 py-1 text-3xl xs:gap-y-4 xs:py-4 xs:text-5xl"
            : "mx-auto mb-0 flex h-fit max-w-3xl space-y-2 pb-0",
        ) /* border border-l-0 border-y-0 border-dark-primary border-spacing-1 */
      }
    >
      <Link href="/newsletter" className="mr-2 text-base">
        <span
          className={classNames(
            "text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary",
            mobile ? "text-4xl font-bold" : "mr-0 text-base md:text-xl",
          )}
        >
          Editorials
        </span>
      </Link>
      <Link href="/photography" className="mr-2 text-base">
        <span
          className={classNames(
            "text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary",
            mobile ? "text-4xl font-bold" : "mr-0 text-base md:text-xl",
          )}
        >
          Photography
        </span>
      </Link>
      {/* <Link href="/work" className="mr-2 text-base">
        <span
          className={classNames(
            "text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary",
            mobile ? "text-4xl font-bold" : "mr-0 text-base md:text-xl",
          )}
        >
          Work
        </span>
      </Link> */}
      <a href="https://dev.nathandaven.com/" className="mr-2 text-base">
        <span
          className={classNames(
            "text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary",
            mobile ? "text-4xl font-bold" : "mr-0 text-base md:text-xl",
          )}
        >
          Software
        </span>
      </a>
      <Link href="/about" className="mr-2 text-base">
        <span
          className={classNames(
            "text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary",
            mobile ? "text-4xl font-bold" : "mr-0 text-base md:text-xl",
          )}
        >
          About
        </span>
      </Link>
      <Link href="/links" className="text-base">
        <span
          className={classNames(
            "text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary",
            mobile ? "text-4xl font-bold" : "mr-0 text-base md:text-xl",
          )}
        >
          Links
        </span>
      </Link>
      {/*       <a target="_blank" href="https://nathandaven.substack.com/subscribe" className="mr-0 text-base">
        <span
          className={classNames(
            "hover:bg-dark-primary text-light-primarydark: text-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary",
            mobile ? "text-4xl font-bold" : "mr-0 text-base md:text-xl",
          )}
        >
          Subscribe
        </span>
      </a> */}
    </div>
  );
};
