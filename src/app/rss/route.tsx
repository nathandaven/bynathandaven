import { getAllPosts } from "@/lib/api";
import generateRssFeed from "@/lib/rss";

export async function GET() {
  const allPosts = getAllPosts();
  const feed = generateRssFeed(allPosts);
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "text/xml;charset=UTF-8;version=1.0",
    },
  });
}
