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
  verticalThumbnail?: boolean;
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
  verticalThumbnail = false,
  showTags = true,
}) => {
  return (
    <section
      className={classNames(
        classNames(
          "m-0 list-none gap-6",
          verticalThumbnail ? "grid-col-1 grid xs:grid-cols-2 md:grid-cols-3" : "flex flex-col",
        ),
        className,
      )}
    >
      {listItems.map((item, key) => (
        <ListItem
          post={item}
          key={key}
          showThumbnail={showThumbnails}
          verticalThumbnail={true}
          showDescription={showDescription}
          showTags={showTags}
        />
      ))}
    </section>
  );
};
