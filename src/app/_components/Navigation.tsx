import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";
import Link from "next/link";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  mobile?: boolean;
  invert?: boolean;
};

// exporting component with OPTIONAL children
export const Navigation: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  mobile = false,
  invert = false,
}) => {
  const defaultTheme =
    "text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary";
  const invertTheme = "text-light-primary hover:bg-light-primary hover:text-dark-primary";

  return (
    <div
      className={classNames(
        className,
        mobile
          ? "flex flex-col gap-y-1 py-1 text-3xl xs:gap-y-4 xs:py-4 xs:text-5xl"
          : "mx-auto mb-0 flex h-fit max-w-3xl space-y-2",
      )}
    >
      <Link href="/newsletter" className="mr-4 text-base">
        <span
          className={classNames(
            mobile ? "text-4xl font-semibold" : "mr-0 text-base font-semibold md:text-xl",
            invert ? invertTheme : defaultTheme,
          )}
        >
          Newsletter
        </span>
      </Link>
      <Link href="/photography" className="mr-4 text-base">
        <span
          className={classNames(
            mobile ? "text-4xl font-semibold" : "mr-0 text-base font-semibold md:text-xl",
            invert ? invertTheme : defaultTheme,
          )}
        >
          Photography
        </span>
      </Link>
      <Link href="/work" className="mr-4 text-base">
        <span
          className={classNames(
            mobile ? "text-4xl font-semibold" : "mr-0 text-base font-semibold md:text-xl",
            invert ? invertTheme : defaultTheme,
          )}
        >
          Work
        </span>
      </Link>
      <Link href="/about" className="text-base">
        <span
          className={classNames(
            mobile ? "text-4xl font-semibold" : "mr-0 text-base font-semibold md:text-xl",
            invert ? invertTheme : defaultTheme,
          )}
        >
          About
        </span>
      </Link>
      {/* <a target="_blank" href="https://nathandaven.substack.com/subscribe" className="mr-0 text-base">
        <span
          className={classNames(
            "text-light-primarydark: text-dark-primary hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary",
            mobile ? "text-4xl font-semibold" : "mr-0 text-base font-semibold md:text-xl",
          )}
        >
          Subscribe
        </span>
      </a> */}
    </div>
  );
};
