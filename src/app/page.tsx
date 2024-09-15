import { HeroPost } from "@/app/_components/HeroPost";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { parseISO, format } from "date-fns";
import { Container } from "./_components/Container";
import { Article } from "./_components/Article";
import { ContentTypeEnum } from "@/interfaces/contentType";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <SpeedInsights />
      <Container fullWidth={true}>
        <Article fullWidth={true}>
          {/* <Intro /> */}
          <div>
            <h1 className="spacing space-y-0 font-normal">
              <div className="my-0 py-0 text-9xl">Nathan</div>
              <div className="my-0 py-0 pl-20 text-9xl">Davenport</div>
            </h1>
          </div>
          {/* <HeroPost
            className="mb-10"
            title={heroPost.title ?? ""}
            coverImage={heroPost.coverImage ?? ""}
            date={heroPost.date ?? ""}
            author={heroPost.author ?? {}}
            slug={heroPost.slug ?? ""}
            excerpt={heroPost.excerpt ?? ""}
            contentType={ContentTypeEnum.ARTICLE}
          /> */}
          {allPosts.length > 0 && <MoreStories posts={/* morePosts */ allPosts} />}
        </Article>
      </Container>
      <GoogleAnalytics gaId="G-X1XTCSK8DT" />
    </main>
  );
}
