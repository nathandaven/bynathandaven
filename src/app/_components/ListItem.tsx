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
  verticalThumbnail?: boolean;
  showDescription?: boolean;
  showTags?: boolean;
};

// exporting component with OPTIONAL children
export const ListItem: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  post = {} as Post,
  showThumbnail = false,
  verticalThumbnail = false,
  showDescription = true,
  showTags = true,
}) => {
  return (
    <div
      className={classNames(
        "my-0 flex flex-col gap-2 py-0" + " " + (verticalThumbnail ? "" : "sm:flex-row"),
        className,
      )}
    >
      {showThumbnail && (
        <div className={classNames("mr-4", verticalThumbnail ?? "sm:max-w-64")}>
          <PreviewImage
            className="max-h-72 xs:aspect-1 xs:max-h-none xs:object-cover"
            title={post.title}
            src={post.preview}
            slug={post.slug}
            type={post.fmContentType}
          />
        </div>
      )}

      <section>
        <h3 className="bold my-0 mr-4">
          <Link
            href={`/${post.fmContentType}/${post.slug}`}
            className="text-bold my-0 min-w-0 break-normal py-0 no-underline"
          >
            <b className="break-normal">{post.title}</b>
          </Link>
        </h3>
        <div className="m-0 my-0 flex h-fit w-fit list-none flex-col gap-x-2 p-0 py-1 align-middle xs:flex-row sm:py-0">
          <span className="h-fit pt-[0.3px] align-top text-sm">
            {post.fmContentType && post.fmContentType.length > 0
              ? post.fmContentType?.charAt(0).toUpperCase() + post.fmContentType.slice(1)
              : ""}
            {", "}
            <DateFormatter dateString={post.date} />
          </span>
          {/* Slice max tags on screen */}
          {showTags && (
            <>
              <div className="xs-max-sm:flex m-0 my-0 flex h-fit w-fit list-none gap-x-1 p-0 py-0 align-middle max-xs:hidden sm:hidden sm:py-0">
                {post.tags?.slice(0, 2).map((tag, key) => (
                  <Button key={key} href={"/tag/" + tag} sizeSmall={true} className="h-fit">
                    <div /* className="text-sm" */>
                      {"#"}
                      {tag}
                    </div>
                  </Button>
                ))}
              </div>
              <div className="no-scrollbar m-0 my-0 hidden h-fit w-fit list-none gap-x-1 overflow-x-scroll p-0 py-0 align-middle sm:flex sm:py-0">
                {post.tags?.map((tag, key) => (
                  <Button key={key} href={"/tag/" + tag} sizeSmall={true} className="h-fit">
                    <div /* className="text-sm" */>
                      {"#"}
                      {tag}
                    </div>
                  </Button>
                ))}
              </div>
            </>
          )}
        </div>
        {showDescription && <div className="pt-2">{post.description}</div>}
      </section>
      {children}
      {/* <div className="flex flex-col justify-center">
        <Button href="">Read</Button>
      </div> */}
    </div>
  );
};
