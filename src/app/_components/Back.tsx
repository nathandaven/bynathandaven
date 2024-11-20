"use client";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { useRouter } from "next/navigation"; // Usage: App router
import BackSVG from "../_svg/BackSVG";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};

// exporting component with OPTIONAL children
export const Back: FunctionComponent<PropsWithChildren> = ({ children, className }) => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <BackSVG
        className={classNames(
          "hover:fill-display-gray fill-light-primary stroke-dark-primary dark:fill-dark-primary dark:stroke-light-primary hover:dark:fill-dark-secondary",
          className,
        )}
      />
    </button>
  );
};
