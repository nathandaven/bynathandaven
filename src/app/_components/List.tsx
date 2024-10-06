import { Post } from "@/interfaces/post";
import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { ListItem } from "@/app/_components/ListItem";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  listItems: Post[];
  showThumbnails?: boolean;
  showDescription?: boolean;
  showTags?: boolean;
};

// exporting component with OPTIONAL children
export const List: FunctionComponent<PropsWithChildren> = ({
  children,
  className,
  listItems = [] as Post[],
  showThumbnails = false,
  showDescription = true,
  showTags = true,
}) => {
  return (
    <div className={classNames("", className)}>
      <ul className="m-0 flex list-none flex-col gap-y-4 p-0">
        {listItems.map((item, key) => (
          <ListItem
            post={item}
            key={key}
            showThumbnail={showThumbnails}
            showDescription={showTags}
            showTags={showDescription}
          />
        ))}
      </ul>
    </div>
  );
};
