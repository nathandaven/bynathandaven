"use client";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

const ResponsiveGridA: FunctionComponent<PropsWithChildren> = ({ children, className }) => {
  return (
    <ResponsiveMasonry className={classNames("", className)} columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
      <Masonry gutter={"1rem"}>{children}</Masonry>
    </ResponsiveMasonry>
  );
};

export default ResponsiveGridA;
