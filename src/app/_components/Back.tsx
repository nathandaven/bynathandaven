"use client";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { useRouter } from "next/navigation"; // Usage: App router

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

// exporting component with OPTIONAL children
export const Back: FunctionComponent<PropsWithChildren> = ({ children, className }) => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} className={classNames("", className)}>
      {children}
    </button>
  );
};
