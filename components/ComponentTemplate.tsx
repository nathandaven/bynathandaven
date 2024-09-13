import React, { FunctionComponent, ReactNode } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

// exporting component with OPTIONAL children
export const ComponentTemplate: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
}) => {
  return <div className={"" + className}>{children}</div>;
};
