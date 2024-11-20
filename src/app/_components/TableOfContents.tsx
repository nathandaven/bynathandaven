import React, { FunctionComponent, ReactNode } from "react";
import "@fontsource/inter";
import { Post } from "@/interfaces/post";
import classNames from "classnames";
import Link from "next/link";
import { getHeadings } from "./MDXContent";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  post: Post;
};

// exporting component with OPTIONAL children
export const TableOfContents: FunctionComponent<PropsWithChildren> = async ({
  children,
  className,
  post = {} as Post,
}) => {
  const headings = await getHeadings(post.content);

  return (
    <ul className={classNames("ml-0 list-none pl-0", className)}>
      {headings.map((heading: { text: string; level: number }, key: any) => (
        <li
          key={key}
          id={`toc-${heading.text
            .toLowerCase()
            .replace(/[^a-zA-Z ]+/g, "")
            .replace("/ {2,}/", " ")
            .replace(/ /g, "-")}`}
          className={classNames("my-0 ml-0 list-none py-0", heading.level == 2 ? "mt-2 pl-0" : "mt-1 pl-6")}
        >
          <Link
            className="no-underline"
            href={`#${heading.text
              .toLowerCase()
              .replace(/[^a-zA-Z ]+/g, "")
              .replace("/ {2,}/", " ")
              .replace(/ /g, "-")}`}
          >
            <span className={classNames("", heading.level == 2 ? "font-medium" : "font-normal")}>
              {heading.text.replace(/\*/g, "").replace(/\_/g, "")}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
