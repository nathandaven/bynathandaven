import { Post } from "@/interfaces/post";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import DateFormatter from "./date-formatter";
import { Button } from "./Button";
import Link from "next/link";
import PreviewImage from "./PreviewImage";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  post: Post;
  showThumbnail?: boolean;
};

// exporting component with OPTIONAL children
export const ListItem: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  post = {} as Post,
  showThumbnail = false,
}) => {
  return (
    <div className={classNames("my-2 flex flex-row gap-2 py-2", className)}>
      {showThumbnail && (
        <div className="mr-4 max-w-64">
          <PreviewImage title={post.title} src={post.preview} slug={post.slug} type={post.fmContentType} />
        </div>
      )}

      <section>
        <Link className="no-underline" href={"/" + post.fmContentType + "/" + post.slug}>
          <h2 className="m-0 mb-1 p-0 text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white">
            {post.title} <i className="text-sm font-normal">{post.fmContentType}</i>
          </h2>{" "}
        </Link>
        <div className="sm:flex">
          <i className="flex h-full items-center text-sm">
            <DateFormatter dateString={post.date} />
          </i>
          <div className="m-0 my-0 flex h-fit list-none gap-x-2 p-0 py-1 align-bottom sm:py-0 sm:pl-3">
            {post.tags?.map((tag, key) => (
              <Button key={key} href={"/tag/" + tag} sizeSmall={true}>
                <div /* className="text-sm" */>
                  {"#"}
                  {tag}
                </div>
              </Button>
            ))}
          </div>
        </div>
        <div className="pt-2">{post.description}</div>
      </section>
      {children}
      {/* <div className="flex flex-col justify-center">
        <Button href="">Read</Button>
      </div> */}
    </div>
  );
};
