import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

// exporting component with OPTIONAL children
export const Divider: FunctionComponent<PropsWithChildren> = ({ children, className }) => {
  return (
    <div className={classNames("flex w-full flex-col justify-center", className)}>
      <div className="w-full border border-x-0 border-b-0 border-dark-primary dark:border-light-primary">
        {children}
      </div>
    </div>
  );
};
