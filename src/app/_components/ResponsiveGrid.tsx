"use client";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  wideGrid?: boolean;
};

const ResponsiveGridA: FunctionComponent<PropsWithChildren> = ({ children, className, wideGrid }) => {
  return (
    <ResponsiveMasonry className={classNames("", className)} columnsCountBreakPoints={{ 380: 1, 850: 2, 1280: 3 }}>
      <Masonry gutter={"1rem"}>{children}</Masonry>
    </ResponsiveMasonry>
  );
};

export default ResponsiveGridA;
