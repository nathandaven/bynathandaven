import { remark } from "remark";
import html from "remark-html";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export default async function markdownToHtml(markdown: string, frontmatter: Record<string, unknown>) {
  const mdxSource = await serialize(markdown, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontmatter,
  });

  /* const result = await remark().use(html).process(markdown); */
  /* return result.toString(); */
  return mdxSource;
}
