import { Post } from "@/interfaces/post";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import DateFormatter from "@/app/_components/date-formatter";
import { Button } from "@/app/_components/Button";
import Link from "next/link";
import PreviewImage from "@/app/_components/PreviewImage";

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
    <div className={classNames("my-2 flex flex-col gap-2 py-2 sm:flex-row", className)}>
      {showThumbnail && (
        <div className="mr-4 sm:max-w-64">
          <PreviewImage title={post.title} src={post.preview} slug={post.slug} type={post.fmContentType} />
        </div>
      )}

      <section>
        <h2 className="m-0 mb-1 break-normal p-0">
          <Link className="font-bold no-underline" href={"/" + post.fmContentType + "/" + post.slug}>
            <span className="font-bold hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary">
              {post.title}
            </span>
          </Link>{" "}
          <i className="text-sm font-normal">{post.fmContentType}</i>
        </h2>{" "}
        <div className="sm:flex">
          <i className="flex h-full items-center text-sm">
            <DateFormatter dateString={post.date} />
          </i>
          <div className="m-0 my-0 hidden h-fit w-fit list-none gap-x-2 p-0 py-1 align-bottom xs:flex sm:py-0 sm:pl-3">
            {post.tags?.slice(0, 2).map((tag, key) => (
              <Button key={key} href={"/tag/" + tag} sizeSmall={true}>
                <div /* className="text-sm" */>
                  {"#"}
                  {tag}
                </div>
              </Button>
            ))}
          </div>
        </div>
        <div className="pt-2 text-justify">{post.description}</div>
      </section>
      {children}
      {/* <div className="flex flex-col justify-center">
        <Button href="">Read</Button>
      </div> */}
    </div>
  );
};
