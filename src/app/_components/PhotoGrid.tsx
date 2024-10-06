"use client";

import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import ResponsiveGridA from "@/app/_components/ResponsiveGrid";
import Image from "next/image";
import { Post } from "@/interfaces/post";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// client side comp

import dynamic from "next/dynamic";
import NextJsImage from "@/app/_components/NextJsImage";
const LightboxComponent = dynamic(() => import("@/app/_components/LightboxComponent"), {
  ssr: false,
});
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

  const images = post.photoList?.map((photo, index) => {
    return (
      <>
        <button
          type="button"
          onClick={() => {
            setIndex(index);
            setOpen(true);
          }}
        >
          <Image
            src={photo.relativePath}
            className={classNames(
              "m-0 w-full border-spacing-0 border border-dark-primary p-0 shadow-md outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-xl hover:outline-1 dark:border-light-primary dark:outline-light-primary",
              className,
            )}
            width={1300}
            height={630}
            alt={photo.caption ?? ""}
            quality={25}
            key={photo.filename}
          />
        </button>
        {photo.caption && <i>{photo.caption}</i>}
      </>
    );
  });

  function blank() {
    return <></>;
  }

  return (
    <ResponsiveGridA>
      {images}
      <Lightbox
        index={index}
        plugins={[Zoom]}
        on={{ view: ({ index: currentIndex }) => setIndex(index) }}
        open={open}
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
