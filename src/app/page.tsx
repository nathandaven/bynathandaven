import { HeroPost } from "@/app/_components/HeroPost";
import { getAllPosts } from "@/lib/api";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { parseISO, format } from "date-fns";
import { Container } from "./_components/Container";
import { Article } from "./_components/Article";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { revalidatePath } from "next/cache";
import HeaderSVG from "./_components/HeaderSVG";
import MoreStories from "./_components/MoreStories";
import HeaderSVGMobile from "./_components/HeaderSVGMobile";
import HeaderSVGName from "./_components/HeaderSVGName";
//import * as TextFitting from "text-fitting";// foo.d.ts

// Load client side component

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);
  revalidatePath("/");

  return (
    <main>
      <SpeedInsights />
      <Container fullWidth={true}>
        <Article fullWidth={true} className="min-h-[95vh]">
          <HeaderSVG className={"color dark hidden lg:block"} />
          <HeaderSVGName className={"hidden max-lg:block"} />
          <p className="align mb-0 mt-0 hidden pb-0 pt-0 text-justify max-lg:block">
            Photographer, videographer, and software engineer located in Atlanta, Georgia. Passionate about visual
            mediums, cities and general urbanism, and making things. See below for my recent projects of various
            mediums.
          </p>
          {/* <Intro /> */}
          {/* <div className="flex flex-col gap-x-20 text-justify md:flex-row">
            <h1 className="spacing space-y-0 bg-transparent font-normal">
              <div className="3xl:text-10xl leading-0 my-0 py-0 -tracking-widest sm:text-5xl lg:text-9xl 2xl:text-[15rem]">
                Nathan
              </div>
              <div className="leading-0 my-0 bg-transparent py-0 pl-20 text-5xl -tracking-widest lg:text-9xl 2xl:-translate-y-12 2xl:text-[15rem]">
                Davenport
              </div>
            </h1>
            <p className="mt-0 pb-5 pt-0">
              Photographer, videographer, and software engineer located in Atlanta, Georgia. Passionate about visual
              mediums, cities and general urbanism, and making things. See below for my recent projects of various
              mediums.
            </p>
          </div> */}
          {/* <HeroPost
            className="mb-10"
            title={heroPost.title ?? ""}
            preview={heroPost.preview ?? ""}
            date={heroPost.date ?? ""}
            author={heroPost.author ?? {}}
            slug={heroPost.slug ?? ""}
            excerpt={heroPost.excerpt ?? ""}
            contentType={ContentTypeEnum.ARTICLE}
          /> */}
          {allPosts.length > 0 && <MoreStories className={"pt-10"} posts={/* morePosts */ allPosts} />}
        </Article>
      </Container>
      <GoogleAnalytics gaId="G-X1XTCSK8DT" />
    </main>
  );
}
