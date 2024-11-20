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
import { Wrapper } from "./_components/Wrapper";
import { Title } from "./_components/Title";
import { ContentTypeEnum } from "@/interfaces/contentType";
import NewspaperGrid from "./_components/NewspaperGrid";

export default function Index() {
  const allPosts = getAllPosts();
  /* RSS Feed Generation */
  if (process.env.NODE_ENV === "development") {
    generateRssFeed(allPosts);
  }

  return (
    <main>
      <Container fullWidth={false} margin={false}>
        <section>
          {/* <div className="mb-10 grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-[55%_auto]"> */}
          {/* "columns-1 md:columns-2 lg:columns-3" */}

          {/* </div> */}
        </section>
        <div className="">
          <NewspaperGrid className="" posts={/* morePosts */ allPosts} />
          {/* {allPosts.length > 0 && <MoreStories className="" posts={allPosts} />} */}
        </div>
        {/* Markdown Post Content */}
      </Container>
    </main>
  );
  return (
    <main>
      <Container fullWidth={false}>
        <Wrapper className="">
          <Article noHeader={true} fullWidth={false} className="md:p-10">
            <div>
              <h1 className="sr-only mb-1">Nathan Davenport</h1>
              <p className="sr-only mt-1">Video-journalism Photography & Software Engineering</p>
              <HeaderSVG className={"color dark hidden md:block"} />
              <HeaderSVGMobile className={"xs-max-md:block max-xs:hidden md:hidden"} />
              <HeaderSVGName className={"block xs:hidden"} />
            </div>
            {/* <div className="my-2 border border-x-0 border-b-0"></div> */}
            <div className="flex flex-col justify-start gap-x-4 xs:flex-row">
              <h4 className="my-0 py-0 pt-2 lg:pb-1 lg:pt-0">
                <a
                  target="_blank"
                  href="https://nathandaven.substack.com/subscribe"
                  className="my-0 mt-2 py-0 no-underline xs:text-nowrap"
                >
                  Join the email list {">"}
                </a>
              </h4>
              <h4 className="my-0 py-0 pt-2 lg:pb-1 lg:pt-0">
                <a
                  href="https://www.youtube.com/@nathandaven?sub_confirmation=1"
                  target="_blank"
                  className="my-0 mt-2 py-0 no-underline xs:text-nowrap"
                >
                  Subscribe on YouTube {">"}
                </a>
              </h4>
            </div>
            <div className="flex gap-x-3">
              <h3 className="mt-2">Recents</h3>
              <Divider />
            </div>
            {allPosts.length > 0 && <MoreStories className="" posts={/* morePosts */ allPosts} />}
          </Article>
        </Wrapper>
      </Container>
    </main>
  );
}
