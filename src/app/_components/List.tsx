import { Post } from "@/interfaces/post";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { ListItem } from "./ListItem";
import { HeroPost } from "./HeroPost";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  listItems: Post[];
  showThumbnails: boolean;
};

// exporting component with OPTIONAL children
export const List: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  listItems = [] as Post[],
  showThumbnails = false,
}) => {
  return (
    <div className={classNames("", className)}>
      <ul className="m-0 list-none p-0">
        {listItems.map((item, key) => (
          <ListItem post={item} key={key} showThumbnail={showThumbnails} />
        ))}
      </ul>
    </div>
  );
};
