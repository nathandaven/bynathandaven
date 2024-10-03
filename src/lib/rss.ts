import { ContentTypeEnum } from "@/interfaces/contentType";
import { Post } from "@/interfaces/post";
import fs from "fs";
import { join } from "path";
import RSS, { FeedOptions, ItemOptions } from "rss";
import { getAllPosts } from "./api";

export default function generateRssFeed(allPosts: Post[]) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL ?? "nathandaven.com"}`
      : "http://localhost:3000";

  const feedOptions: FeedOptions = {
    title: "Nathan Davenport | RSS Feed",
    description: "All of Nathan Davenport's articles, videos, and photography in one place.",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/favicon/logo192.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()} Nathan Davenport`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts
    .filter((post) => post.fmContentType != ("general" as ContentTypeEnum))
    .map((post) => {
      const item: ItemOptions = {
        title: post?.title ?? "",
        description: post?.excerpt ?? post?.description ?? "",
        url: post?.fmContentType && post?.slug ? `${site_url}/${post?.fmContentType}/${post?.slug}` : "",
        date: post?.date ?? Date.now(),
        author: post?.author?.name ?? "Nathan Davenport",
      };
      item.enclosure = post?.preview
        ? {
            url: `${site_url}${post?.preview}`,
          }
        : undefined;
      feed.item(item);
    });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync(join(process.cwd(), "public/rss.xml"), feed.xml({ indent: true }));
}
