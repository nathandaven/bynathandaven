import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  title?: string;
  large?: boolean;
};

// exporting component with OPTIONAL children
export const Divider: FunctionComponent<PropsWithChildren> = ({ children, className, title, large = false }) => {
  const DividerLine = (
    <div className={classNames("flex w-full flex-col justify-center")}>
      <div className="w-full border border-x-0 border-b-0 border-dark-primary dark:border-light-primary">
        {children}
      </div>
    </div>
  );
  return title ? (
    <div className={classNames(large ? "mb-0 mt-6 flex gap-x-4 pb-0" : "mt-6 flex gap-x-3", className)}>
      {large ? <h2 className="mb-1 mt-0 text-nowrap">{title}</h2> : <h3 className="mt-2 text-nowrap">{title}</h3>}
      {DividerLine}
    </div>
  ) : (
    DividerLine
  );
};
