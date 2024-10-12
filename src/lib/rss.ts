import { ContentTypeEnum } from "@/interfaces/contentType";
import { Post } from "@/interfaces/post";
import fs from "fs";
import { join } from "path";
import RSS, { FeedOptions, ItemOptions } from "rss";
import { DOMAIN } from "@/lib/constants";

export default function generateRssFeed(allPosts: Post[]): RSS {
  const site_url = DOMAIN;

  const feedOptions: FeedOptions = {
    title: "Nathan Davenport",
    description: "All of Nathan Davenport's articles, videos, and photography in one RSS feed.",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/favicon/logo192.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()} Nathan Davenport`,
    managingEditor: "Nathan Davenport",
    webMaster: "Nathan Davenport",
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts
    .filter((post) => post.fmContentType != ("general" as ContentTypeEnum))
    .map((post) => {
      const imageURL = encodeURI(site_url + post?.preview.trim()) ?? "";
      const type =
        post?.fmContentType && post?.fmContentType.length > 0
          ? post?.fmContentType?.charAt(0).toUpperCase() + post?.fmContentType.slice(1)
          : "";
      const item: ItemOptions = {
        title: `${post?.title}`,
        description: (post?.excerpt ?? post?.description ?? "") + `<img src="${imageURL}" />`,
        url: post?.fmContentType && post?.slug ? `${site_url}/${post?.fmContentType}/${post?.slug}` : "",
        date: post?.date ?? Date.now(),
        author: post?.author?.name ?? "Nathan Davenport",
        categories: post?.tags,
      };
      item.enclosure = post?.preview
        ? {
            url: imageURL,
          }
        : undefined;
      feed.item(item);
    });

  return feed;
}
