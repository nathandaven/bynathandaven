import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  noWidth?: boolean;
  border?: boolean;
  margin?: boolean;
  invert?: boolean;
};

// exporting component with OPTIONAL children
export const Section: FunctionComponent<PropsWithChildren> = ({
  className,
  children,
  fullWidth = false,
  noWidth = false,
  border = true,
  margin = true,
  invert = false,
}) => {
  return (
    <div
      className={classNames(
        border
          ? invert
            ? "border border-x-0 border-t-0 border-light-primary"
            : "border border-x-0 border-t-0 border-dark-primary dark:border-light-primary"
          : "",
        className,
      )}
    >
      <div
        className={classNames(
          noWidth ? "max-w-[120rem]" : fullWidth ? "max-w-[90rem]" : "max-w-[80rem]",
          margin ? "mx-auto px-3 md:px-6" : "",
        )}
      >
        {children}
      </div>
    </div>
  );
};
