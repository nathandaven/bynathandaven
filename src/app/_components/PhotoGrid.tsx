"use client";

import classNames from "classnames";
import React, { Children, FunctionComponent, ReactNode, Suspense } from "react";
import ResponsiveGridA from "@/app/_components/ResponsiveGrid";
import Image from "next/image";
import { Post } from "@/interfaces/post";
import Lightbox, { CaptionsRef, SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import NextJsImage from "@/app/_components/NextJsImage";
import "yet-another-react-lightbox/plugins/captions.css";
import { format } from "date-fns";
import { parseEXIFDate } from "@/app/_components/date-formatter";

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
  const captionsRef = React.useRef({} as CaptionsRef);

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
        plugins={[Zoom, Captions]}
        captions={{ ref: captionsRef }}
        on={{
          view: ({ index: currentIndex }) => setIndex(currentIndex),
          click: () => {
            (captionsRef.current?.visible ? captionsRef.current?.hide : captionsRef.current?.show)?.();
          },
        }}
        open={open}
        key={"1"}
        close={() => setOpen(false)}
        render={{ slide: NextJsImage, buttonZoom: blank }}
        /* slides={[{ src: "/image1.jpg" }, { src: "/image2.jpg" }, { src: "/image3.jpg" }]} */
        slides={post.photoList?.map((photo) => {
          const date = photo.dateTime ? format(photo.dateTime, "LLLL	d, yyyy") : "";
          const desc = `${date ? date + " - " : ""}${photo.make ? photo.make + " " : ""}${photo.model ? photo.model : ""}`;
          const temp: SlideImage = {
            src:
              photo.relativePath ??
              `https://raw.githubusercontent.com/nathandaven/bynathandaven/refs/heads/feature/add-photos-initial-pass/public/assets-full/${photo.relativePath}`,
            width: photo.width ?? undefined,
            height: photo.height ?? undefined,
            alt: desc,
            description: desc,
          };
          return temp;
        })}
      />
    </ResponsiveGridA>
  );
};

export default PhotoGrid;
