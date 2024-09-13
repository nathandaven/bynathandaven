import { GoogleAnalytics } from "@next/third-parties/google";
import { Meta } from "../../components/Meta";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@fontsource/inter";
import { Navigation } from "../../components/Navigation";
import dynamic from "next/dynamic";
import { GetStaticPaths } from "next";
import { Wrapper } from "../../components/Wrapper";
import Markdown from "./lorem.mdx";

import matter from "gray-matter";

/* https://didoesdigital.com/blog/nextjs-blog-02-add-mdx/ */
//

const test = {
  title: "What Happened to Downtown Atlanta?",
  slug: "what-happened-to-downtown-atlanta",
  description: "A short MDX blog post.",
  date: "January 1, 2024",
  author: "Nathan Davenport",
  tags: ["Transportation", "Atlanta"],
  thumbnail: "",
};

export default function Article() {
  const ArticleMarkdown = dynamic(
    () => import("/articles/" + "lorem" + ".mdx")
  );
  return (
    <Wrapper metadata={test}>
      {matter(Markdown.toString())}
      {/* <ArticleMarkdown
        meta={{
          title: "What Happened to Downtown Atlanta?",
          slug: "what-happened-to-downtown-atlanta",
          description: "A short MDX blog post.",
        }}
      /> */}
    </Wrapper>
  );
}
