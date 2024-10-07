import dynamicBlurDataUrl from "@/lib/blurImage";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode, Suspense } from "react";
import Image from "next/image";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  index?: boolean;
  alt?: string;
  src: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

// exporting component with OPTIONAL children
export const ImageBlur: FunctionComponent<PropsWithChildren> = async ({
  index,
  alt = "",
  src = "",
  width,
  height,
  priority = false,
  className,
}) => {
  return (
    <Image
      src={src}
      className={classNames(
        "m-0 w-full border-spacing-0 border border-dark-primary p-0 shadow-md outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-xl hover:outline-1 dark:border-light-primary dark:outline-light-primary",
        className,
      )}
      width={width ?? 2464}
      height={height ?? 1632}
      alt={alt ?? ""}
      quality={25}
      placeholder={"blur"}
      priority={priority}
      blurDataURL={await dynamicBlurDataUrl(src)}
    />
  );
};

export default ImageBlur;
