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

import { Gallery } from "next-gallery";
import dynamicBlurDataUrl from "@/lib/blurImage";

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

  const images: any =
    post.photoList?.map((image, key) => {
      const date = image.dateTime ? format(image.dateTime, "LLLL	d, yyyy") : "";
      const desc = `${date ? date + " - " : ""}${image.make ? image.make + " " : ""}${image.model ? image.model : ""}`;
      return {
        src: image.relativePath,
        aspect_ratio: (image.width ?? 1) / (image.height ?? 1),
        nextImageProps: {
          unoptimized: true,
          key: key,
          alt: desc,
          title: desc,
          className:
            "m-0 w-full border-spacing-0 border border-dark-primary p-0 shadow-md outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-xl hover:outline-1 dark:border-light-primary dark:outline-light-primary hover:cursor-pointer",
          onClick: () => {
            setIndex(key);
            setOpen(true);
          },
          loading: "lazy",
          /* blurDataURL: await dynamicBlurDataUrl(image.relativePath), */
        },
      };
    }) ?? [];
  const widths = [380, 640, 768, 1024, 1280];
  const ratios = [1, 2, 2, 3, 4, 4];

  return (
    <>
      <div className={classNames("mx-[-.5rem]", className)}>
        <Gallery gap="0.5rem" lastRowBehavior="match-previous" {...{ images, widths, ratios }}></Gallery>
      </div>
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
        render={{ slide: NextJsImage, buttonZoom: () => <></> }}
        /* slides={[{ src: "/image1.jpg" }, { src: "/image2.jpg" }, { src: "/image3.jpg" }]} */
        slides={post.photoList?.map((photo) => {
          const date = photo.dateTime ? format(photo.dateTime, "LLLL	d, yyyy") : "";
          const desc = `${date ? date + " - " : ""}${photo.make ? photo.make + " " : ""}${photo.model ? photo.model : ""}`;
          const temp: SlideImage = {
            src: photo.relativePath,
            width: photo.width ?? undefined,
            height: photo.height ?? undefined,
            alt: desc,
            description: desc,
          };
          return temp;
        })}
      />
    </>
  );
};

export default PhotoGrid;
