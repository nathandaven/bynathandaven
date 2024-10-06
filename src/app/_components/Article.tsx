import React, { FunctionComponent, ReactNode, useEffect } from "react";
import "@fontsource/inter";
import { Post } from "@/interfaces/post";
import DateFormatter from "@/app/_components/date-formatter";
import { Button } from "@/app/_components/Button";
import classNames from "classnames";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  metadata?: Post;
  fullWidth?: boolean;
  noHeader?: boolean;
};

// exporting component with OPTIONAL children
export const Article: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  metadata = {} as Post,
  fullWidth = false,
  noHeader = false,
}) => {
  return (
    <article
      // THIS IS SUCH A MESS!!!
      className={classNames(
        // PROSE CLASSES
        "texture prose prose-neutral mb-2 h-full min-h-[calc(100svh-24rem)] w-full max-w-none border-spacing-1 border border-x-0 border-t-0 border-dark-primary bg-light-primary p-5 pb-5 leading-6 duration-200 dark:prose-invert prose-a:break-words prose-a:font-normal hover:prose-a:bg-dark-primary hover:prose-a:text-light-primary prose-img:border prose-img:border-dark-primary prose-img:shadow-md sm:min-h-[calc(100svh-6rem)] md:border-x md:prose-h1:text-5xl dark:border-gray-200 dark:bg-dark-primary dark:hover:prose-a:bg-light-primary dark:hover:prose-a:text-dark-primary dark:prose-img:border-light-primary" +
          " " +
          (fullWidth ? "" : " lg:px-15 md:px-14 md:pt-10"),
        className,
      )}
    >
      {/* Tag Generation */}
      {!noHeader && metadata?.tags && metadata?.tags.length > 0 ? (
        <>
          <div className="xxs:flex-row xxs:gap-y-0 mb-4 flex flex-col gap-x-2 gap-y-1 pr-5 pt-5 no-underline">
            {metadata?.tags.map((tag, key) => (
              <Button key={key} href={"/tag/" + tag} sizeSmall={true} className="w-fit no-underline">
                {"#"}
                {tag}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
      {/* Title Generation */}
      {!noHeader && metadata?.title && metadata?.title.length > 0 ? (
        <>
          <h1 className="my-2 leading-none">{metadata?.title}</h1>
        </>
      ) : (
        <></>
      )}
      {/* Description Generation */}
      {!noHeader && metadata?.description && metadata?.description.length > 0 ? (
        <>
          <p className="my-0 justify-between py-0 pt-2 text-justify">{metadata?.description}</p>
        </>
      ) : (
        <></>
      )}
      <div className="flex w-full flex-col pb-2 leading-5 xs:flex-row">
        {/* Published Date Generation */}
        {!noHeader && metadata?.date ? (
          <>
            <div className="w-60 pr-5">
              <p className="mb-0">
                Published
                <br />
                <b>
                  <DateFormatter dateString={metadata.date} />
                </b>
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
        {/* Author Generation */}
        {!noHeader && metadata?.author?.name && metadata?.author?.name.length > 0 ? (
          <>
            <div className="w-60">
              <p className="mb-0">
                Written by <br />
                <b>{metadata.author.name}</b>
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {children}
    </article>
  );
};
