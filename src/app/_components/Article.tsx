import React, { FunctionComponent, ReactNode } from "react";
import { Post } from "@/interfaces/post";
import classNames from "classnames";
import { Prose } from "./Prose";
import { TableOfContents } from "./TableOfContents";
import ScrollPadding from "./ScrollPadding";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  post?: Post;
  showSidebar?: boolean;
  fullWidth?: boolean;
  noHeader?: boolean;
  noContent?: boolean;
  showBack?: boolean;
  border?: boolean;
};

// exporting component with OPTIONAL children
export const Article: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  post = {} as Post,
  noContent = false,
  showSidebar = false,
  border = false,
}) => {
  const recentPosts = getAllPosts()
    .filter((filter) => filter.fmContentType == post.fmContentType)
    .slice(0, 4);

  return (
    <>
      {/*  Left bar */}
      {showSidebar && post?.content && (post.fmContentType == "video" || post.fmContentType == "article") && (
        <div
          className={classNames(
            "sticky top-0 mx-0 mt-0 hidden self-start overflow-y-auto px-0 md:w-1/4 lg:block lg:pr-20",
          )}
        >
          <Prose className={classNames("", className)} large={false}>
            <ScrollPadding minClass="pt-2" maxClass="pt-14" startOffset={850} />
            <section className="">
              <h3 className="my-0 pb-0">Contents</h3>
              <TableOfContents post={post} />
              {/* <div className="mx-[-10rem] translate-x-[-10rem] lg:border lg:border-x-0 lg:border-t-0 lg:border-dark-primary lg:dark:border-light-primary"></div> */}
            </section>
            {/* <section>
              <div>
                <h3 className="mb-0 pb-0 pt-0">
                  <a
                    className="no-underline"
                    target="_blank"
                    href={"https://www.youtube.com/@nathandaven?sub_confirmation=1"}
                  >
                    <span className="font-bold">Subscribe to the channel</span>
                  </a>
                </h3>
              </div>
              <div>
                <h3 className="mb-0 pb-0 pt-0">
                  <a
                    className="no-underline"
                    target="_blank"
                    href={"https://www.youtube.com/@nathandaven?sub_confirmation=1"}
                  >
                    <span className="font-bold">Join the newsletter</span>
                  </a>
                </h3>
              </div>
            </section> */}
            <section>
              <div>
                <h3 className="mb-0 pb-0 pt-0"> Read more</h3>
                <ul className={classNames("ml-0 list-none pl-0", className)}>
                  {recentPosts.map((post, key: any) => (
                    <li key={key} className={classNames("my-0 ml-0 mt-2 list-none py-0 pl-0")}>
                      <Link className="no-underline" href={post.slug}>
                        <span className={classNames("font-medium")}>{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            {/* <div>
              <h3 className="mb-0 pb-0 pt-0">
                <a
                  className="no-underline"
                  target="_blank"
                  href={"https://www.youtube.com/@nathandaven?sub_confirmation=1"}
                >
                  <span className="font-bold">Join the newsletter</span>
                </a>
              </h3>
            </div> */}
          </Prose>
        </div>
      )}

      {/*  Right bar */}
      <Prose
        className={classNames(
          "sm:pb-10 sm:pt-2",
          showSidebar
            ? border
              ? "lg:max-w-[45rem] lg:border lg:border-y-0 lg:border-r-0 lg:border-dark-primary lg:border-opacity-100 lg:px-20 lg:dark:border-light-primary"
              : "lg:max-w-[45rem] lg:px-20"
            : classNames(
                post.fmContentType == "video" || post.fmContentType == "article"
                  ? "sm:mx-auto sm:max-w-xl lg:max-w-4xl lg:px-36"
                  : "",
              ),
          className,
        )}
        large={true}
      >
        {!noContent && children}
      </Prose>
    </>
  );
};
