import { ContentTypeEnum } from "@/interfaces/contentType";
import { Post } from "@/interfaces/post";
import fs from "fs";
import RSS from "rss";

export default async function generateRssFeed(allPosts: Post[]) {
  const site_url = process.env.NODE_ENV === "production" ? "https://nathandaven.com" : "http://localhost:3000";

  const feedOptions = {
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
      feed.item({
        title: post.title,
        description: post.description,
        url: `${site_url}/${post.fmContentType}/${post.slug}`,
        date: post.date,
      });
    });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
