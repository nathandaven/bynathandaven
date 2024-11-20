import React, { FunctionComponent, ReactNode, useEffect } from "react";

import "@fontsource/inter";
import { FooterMenu } from "@/app/_components/FooterMenu";
import classNames from "classnames";
import { MobileMenu } from "@/app/_components/MobileMenu";
import { BackSVG } from "@/app/_svg/BackSVG";
import { Article } from "./Article";
import { Back } from "./Back";
import ScrollPadding from "./ScrollPadding";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  border?: boolean;
  showBack?: boolean;
  margin?: boolean;
  albumMargin?: boolean;
};

// exporting component with OPTIONAL children
export const Wrapper: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  border = true,
  margin = true,
  showBack = false,
  albumMargin = false,
}) => {
  return (
    <>
      <div className={border ? "xl:border xl:border-y-0 xl:border-dark-primary xl:dark:border-light-primary" : ""}>
        {showBack && (
          <div className="max-xl:hidden xl:sticky">
            <Back className="absolute top-6 ml-[-1rem] mt-2 w-8" />
          </div>
        )}
        <div
          className={classNames(
            "",
            margin ? "flex-start flex flex-col sm:flex-row" : "" /* , "w-[calc(100%-3.5rem)]" */,
            border ? "xl:px-10" : "",
            albumMargin && !border ? "md:px-3" : "",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};
