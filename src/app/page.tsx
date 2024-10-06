import { getAllPosts } from "@/lib/api";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Container } from "@/app/_components/Container";
import { Article } from "@/app/_components/Article";
import { revalidatePath } from "next/cache";
import HeaderSVG from "@/app/_svg/HeaderSVG";
import MoreStories from "@/app/_components/MoreStories";
import HeaderSVGMobile from "@/app/_svg/HeaderSVGMobile";
import dynamic from "next/dynamic";
import generateRssFeed from "@/lib/rss";
import HeaderSVGName from "@/app/_svg/HeaderSVGName";
import { Divider } from "@/app/_components/Divider";

export default function Index() {
  const allPosts = getAllPosts();
  /* RSS Feed Generation */
  if (process.env.NODE_ENV === "development") {
    generateRssFeed(allPosts);
  }
  revalidatePath("/");

  return (
    <main>
      <Container fullWidth={true}>
        <Article fullWidth={true} className="md:p-10">
          <div>
            <h1 className="sr-only mb-1">Nathan Davenport</h1>
            <p className="sr-only mt-1">Video-journalism Photography & Software Engineering</p>
            <HeaderSVG className={"color dark hidden lg:block"} />
            <HeaderSVGMobile className={"xs-max-lg:block max-xs:hidden lg:hidden"} />
            <HeaderSVGName className={"block xs:hidden"} />
          </div>
          {/* <div className="my-2 border border-x-0 border-b-0"></div> */}
          <div className="flex gap-x-3">
            <h3 className="mt-2">Recents</h3>
            <Divider />
          </div>
          {allPosts.length > 0 && <MoreStories className="" posts={/* morePosts */ allPosts} />}
        </Article>
      </Container>
    </main>
  );
}
