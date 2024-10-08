import classNames from "classnames";
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
        className,
        classNames(
          "cursor-pointer rounded-3xl border border-dark-primary font-display-medium dark:border-light-primary",
          sizeSmall ? "xxs:px-1.5 xxs:py-0.5 px-1 py-[0.1rem] text-xs" : "px-4 py-1",
        ),
      )}
      href={href}
    >
      <button className="w-full text-nowrap bg-transparent no-underline">{children}</button>
    </a>
  );
};
