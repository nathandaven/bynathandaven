import { getAllPosts } from "@/lib/api";
import generateRssFeed from "@/lib/rss";
import { writeFileSync } from "fs";
import { join } from "path";
import RSS from "rss";

console.log("Generating rss.xml and writing to public/rss.xml...");
const allPosts = getAllPosts();
const feed: RSS = generateRssFeed(allPosts);
// Write the RSS feed to a file as XML.
writeFileSync(join(process.cwd(), "public/rss.xml"), feed.xml({ indent: true }));
console.log("Success!");
