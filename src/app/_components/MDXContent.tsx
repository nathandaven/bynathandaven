import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Suspense } from "react";
import { VideoComponent } from "./Video";
import classNames from "classnames";
import { Divider } from "./Divider";
import { InView } from "react-intersection-observer";

// Remark & Rehype Plugins
import rehypeUnwrapImages from "rehype-unwrap-images";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkHeadings from "@vcarl/remark-headings";
import { toc } from "mdast-util-toc";
import remarkHtml from "remark-html";
import { Heading } from "./Heading";

type Props = {
  content: string;
  imagePadding?: boolean;
};

export async function PostBody({ content, imagePadding = false }: Props) {
  const MDXComponents = {
    p: (props: any) => {
      return <p /* className={imagePadding ? "lg:mx-14" : ""} */ {...props}></p>;
    },
    h1: (props: any) => {
      return <h1 /* className={imagePadding ? "lg:mx-14" : ""} */ {...props}></h1>;
    },
    h2: (props: any) => {
      return <Heading heading="h2" /* className={imagePadding ? "lg:mx-14" : ""} */ {...props}></Heading>;
    },
    h3: (props: any) => {
      return <Heading heading="h3" /* className={imagePadding ? "lg:mx-14" : ""} */ {...props}></Heading>;
    },
    h4: (props: any) => {
      return <h4 /* className={imagePadding ? "lg:mx-14" : ""} */ {...props}></h4>;
    },
    ul: (props: any) => {
      return <ul /* className={imagePadding ? "lg:mx-14" : ""} */ {...props}></ul>;
    },
    ol: (props: any) => {
      return <ol /* className={imagePadding ? "lg:mx-14" : ""} */ {...props}></ol>;
    },
    /* li: (props: any) => {
      return <li className={imagePadding ? "" : ""} {...props}></li>;
    }, */
    /* h2: Heading,
    h3: Heading, */
    Image,
    VideoComponent,
    Divider,
    /*     a: (props: any) => {
      if (!props.href.includes("nathandaven.com") || !props.href.includes("localhost")) {
        return <a {...props} target="_blank"></a>;
      } else {
        return <a {...props}></a>;
      }
    }, */
    img: (props: any) => {
      // Regex to find width and height inside file name
      // eg. 2Ffb4dee33-d1b9-48de-8536-408f33b1d9d6_3840x2160.webp
      const regex = /(\d{3,5})x(\d{3,5})\./;
      const match = props.src.match(regex);
      const width = match ? parseInt(match[1], 10) : (props.width ?? 1920);
      const height = match ? parseInt(match[2], 10) : (props.height ?? 1080);
      /* console.log(`${width} x ${height}`); */
      return (
        <figure className="md:my-10">
          <Image
            {...props}
            src={props.src}
            alt={"Imag  e: " + (props.alt.length > 0 ? props.alt : props.title)}
            title={props.title}
            width={width}
            height={height}
            loading="lazy"
            unoptimized={true}
            className={classNames(
              "m-0 w-full border-spacing-0 border border-dark-primary p-0 shadow-md outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-xl hover:outline-1 dark:border-light-primary dark:outline-light-primary",
              props.className,
            )} /* md:scale-105 lg:scale-110 md:my-7  lg:my-14 */
          />
          {/* shocked this worked lol... */}
          <figcaption className="text-ca text-center text-xs prose-a:text-[#737373] dark:prose-a:text-[#a3a3a3]">
            {
              <MDXRemote
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeUnwrapImages],
                  },
                }}
                source={props.title}
                components={
                  {
                    /* a: (props: any) => {
                    if (!props.href.includes("nathandaven.com")) {
                      return <a {...props} target="_blank"></a>;
                    }
                  }, */
                  }
                }
              />
            }
          </figcaption>
        </figure>
      );
    },
    Video: (props: any) => {
      return <VideoComponent {...props} />;
    },
  };

  return (
    <div className={classNames("mx-auto leading-snug", imagePadding ? "max-w-[52rem]" : "")}>
      <MDXRemote
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeUnwrapImages, rehypeAutolinkHeadings, rehypeSlug],
          },
        }}
        source={content}
        components={MDXComponents}
      />
    </div>
  );
}

export async function getHeadings(source: any) {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = source.split("\n").filter((line: any) => {
    return line.match(/^###*\s/);
  });

  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw: any) => {
    const text = raw.replace(/^###*\s/, "");
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level = raw.slice(0, 3) === "###" ? 3 : 2;

    return { text, level };
  });
}
