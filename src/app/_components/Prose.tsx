import React, { FunctionComponent, ReactNode, useEffect } from "react";
import "@fontsource/inter";
import classNames from "classnames";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  large?: boolean;
  invert?: boolean;
};

// exporting component with OPTIONAL children
export const Prose: FunctionComponent<PropsWithChildren> = ({ children, className, large = false, invert = false }) => {
  const defaultTheme =
    "text-dark-primary dark:text-light-primary hover:prose-a:text-light-primary  prose-img:border-dark-primary ";
  const invertTheme = " text-dark-primary hover:prose-a:text-dark-primary prose-img:border-dark-primary";

  return (
    <article
      // THIS IS SUCH A MESS!!!
      className={classNames(
        // PROSE CLASSES
        "prose prose-neutral m-0 h-auto w-full max-w-none p-0 duration-200 dark:prose-invert prose-a:break-words prose-a:font-normal hover:prose-a:bg-dark-primary prose-img:border prose-img:shadow-md md:prose-h1:text-5xl dark:hover:prose-a:bg-light-primary dark:hover:prose-a:text-dark-primary",
        large ? "sm:prose-xl" : "", //  xl:prose-2xl
        invert ? invertTheme : defaultTheme,
        className,
      )}
    >
      {children}
    </article>
  );
};
