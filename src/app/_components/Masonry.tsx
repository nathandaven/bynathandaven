import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { Masonry as MasonryPlock } from "react-plock";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  items: string[];
};

export const Masonry: FunctionComponent<PropsWithChildren> = ({ children, className, items = [] }) => {
  return (
    <MasonryPlock
      className={className}
      items={items}
      config={{
        columns: [1, 2, 3],
        gap: [24, 12, 6],
        media: [640, 768, 1024],
      }}
      render={(item, idx) => <img key={idx} src={item} style={{ width: "100%", height: "auto" }} />}
    />
  );
};
