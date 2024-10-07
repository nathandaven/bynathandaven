"use client";

import classNames from "classnames";
import React, { Children, FunctionComponent, ReactNode, Suspense } from "react";
import ResponsiveGridA from "@/app/_components/ResponsiveGrid";
import Image from "next/image";
import { Post } from "@/interfaces/post";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import NextJsImage from "@/app/_components/NextJsImage";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
  post: Post;
};

// exporting component with OPTIONAL children
const PhotoGrid: FunctionComponent<PropsWithChildren> = ({ children, className, post }) => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  function blank() {
    return <></>;
  }

  return (
    <ResponsiveGridA>
      {Children.map(children, (child, key) => (
        <button
          type="button"
          key={key}
          id={key.toString()}
          onClick={() => {
            setIndex(key);
            setOpen(true);
          }}
        >
          {child}
        </button>
      ))}
      {/* {children} */}
      <Lightbox
        index={index}
        plugins={[Zoom]}
        on={{ view: ({ index: currentIndex }) => setIndex(index) }}
        open={open}
        key={"1"}
        close={() => setOpen(false)}
        render={{ slide: NextJsImage, buttonZoom: blank }}
        /* slides={[{ src: "/image1.jpg" }, { src: "/image2.jpg" }, { src: "/image3.jpg" }]} */
        slides={post.photoList?.map((photo) => {
          const temp: SlideImage = {
            src: photo.relativePath,
          };
          return temp;
        })}
      />
    </ResponsiveGridA>
  );
};

export default PhotoGrid;
