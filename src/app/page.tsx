import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { parseISO, format } from "date-fns";
import { Wrapper } from "./_components/Wrapper";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <SpeedInsights />
      <Wrapper>
        {/* <Intro /> */}
        <HeroPost
          title={heroPost.title ?? ""}
          coverImage={heroPost.coverImage ?? ""}
          date={heroPost.date || ""}
          author={heroPost.author ?? {}}
          slug={heroPost.slug ?? ""}
          excerpt={heroPost.excerpt ?? ""}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Wrapper>
      <GoogleAnalytics gaId="G-X1XTCSK8DT" />
    </main>
  );
}
