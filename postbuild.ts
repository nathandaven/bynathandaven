import { getAllPosts } from "@/lib/api";
import generateRssFeed from "@/lib/rss";

console.log("Generating rss.xml and writing to public/rss.xml...");
const allPosts = getAllPosts();
generateRssFeed(allPosts);
console.log("Success!");
