import classNames from "classnames";
import Link from "next/link";
import React, { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  href: string;
};

// exporting component with OPTIONAL children
export const Button: FunctionComponent<PropsWithChildren> = ({ children, className, href }) => {
  return (
    <a
      className={classNames(
        "cursor-pointer rounded-3xl border border-black px-4 py-1 font-display-medium transition-shadow duration-100 hover:shadow-lg dark:border-white",
        className,
      )}
      href={href}
    >
      <button className="w-full text-nowrap bg-transparent no-underline">{children}</button>
    </a>
  );
};
