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
      return (
        <Image
          {...props}
          src={props.src}
          alt={props.alt ?? `Image from ${props.src}`}
          title={props.title}
          width={props.width ?? 1920}
          height={props.height ?? 1080}
          loading="lazy"
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
