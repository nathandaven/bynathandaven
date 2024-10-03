import classNames from "classnames";
import Link from "next/link";
import React, { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  href: string;
  sizeSmall?: boolean;
  newTab?: boolean;
};

// exporting component with OPTIONAL children
export const Button: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  href,
  sizeSmall = false,
  newTab = false,
}) => {
  return (
    <a
      target={newTab ? "_blank" : undefined}
      className={classNames(
        classNames(
          "border-dark-primary dark:border-light-primary cursor-pointer rounded-3xl border font-display-medium transition-colors hover:bg-[#E1DFD3] dark:hover:bg-slate-800",
          sizeSmall ? "px-1.5 py-0.5 text-xs" : "px-4 py-1",
        ),
        className,
      )}
      href={href}
    >
      <button className="w-full text-nowrap bg-transparent no-underline">{children}</button>
    </a>
  );
};
