import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Suspense } from "react";
import { VideoComponent } from "./Video";
import classNames from "classnames";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  const MDXComponents = {
    Image,
    VideoComponent,
    img: (props: any) => {
      // Regex to find width and height inside file name
      // eg. 2Ffb4dee33-d1b9-48de-8536-408f33b1d9d6_3840x2160.webp
      const regex = /(\d{3,5})x(\d{3,5})\./;
      const match = props.src.match(regex);
      const width = match ? parseInt(match[1], 10) : (props.width ?? 1920);
      const height = match ? parseInt(match[2], 10) : (props.height ?? 1080);
      /* console.log(`${width} x ${height}`); */
      return (
        <Image
          {...props}
          src={props.src}
          alt={props.alt ?? `Image from ${props.src}`}
          title={props.title}
          width={width}
          height={height}
          loading="lazy"
          unoptimized={true}
          className={classNames(
            "m-0 my-6 w-full border-spacing-0 border border-dark-primary p-0 shadow-md outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-xl hover:outline-1 dark:border-light-primary dark:outline-light-primary",
            props.className,
          )}
        />
      );
    },
    Video: (props: any) => {
      return <VideoComponent {...props} />;
    },
  };

  return <MDXRemote source={content} components={MDXComponents} />;
}
