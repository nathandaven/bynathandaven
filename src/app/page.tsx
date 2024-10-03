import { getAllPosts } from "@/lib/api";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Container } from "./_components/Container";
import { Article } from "./_components/Article";
import { revalidatePath } from "next/cache";
import HeaderSVG from "./_components/HeaderSVG";
import MoreStories from "./_components/MoreStories";
import HeaderSVGName from "./_components/HeaderSVGName";
import dynamic from "next/dynamic";
import generateRssFeed from "@/lib/rss";

export default function Index() {
  const allPosts = getAllPosts();
  /* RSS Feed Generation */
  generateRssFeed(allPosts);
  revalidatePath("/");

  return (
    <main>
      <Container fullWidth={true}>
        <Article fullWidth={true} className="md:p-10">
          <HeaderSVG className={"color dark hidden lg:block"} />
          <HeaderSVGName className={"hidden max-lg:block"} />
          <p className="align mb-0 mt-0 hidden cursor-default pb-0 pt-0 text-justify max-lg:block">
            Photographer, videographer, and software engineer located in Atlanta, Georgia. Passionate about visual
            mediums, cities and general urbanism, and making things. See below for my recent projects of various
            mediums.
          </p>
          {/* <MarqueeText className="text-4xl" treshold={0.1}>
            Photography Videography Software Development
          </MarqueeText> */}
          {allPosts.length > 0 && <MoreStories className={"pt-10"} posts={/* morePosts */ allPosts} />}
        </Article>
      </Container>
    </main>
  );
}
