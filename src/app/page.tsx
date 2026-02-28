import { Article } from '@/app/_components/Article';
import { Container } from '@/app/_components/Container';
import { Divider } from '@/app/_components/Divider';
import MoreStories from '@/app/_components/MoreStories';
import HeaderSVGMobile from '@/app/_svg/HeaderSVGMobile';
import HeaderSVGName from '@/app/_svg/HeaderSVGName';
import HeaderSVGPlain from '@/app/_svg/HeaderSVGPlain';
import { getAllPosts } from '@/lib/api';
import generateRssFeed from '@/lib/rss';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { revalidatePath } from 'next/cache';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export default function Index() {
    const allPosts = getAllPosts();
    /* RSS Feed Generation */
    if (process.env.NODE_ENV === 'development') {
        generateRssFeed(allPosts);
        revalidatePath('/');
    }

    return (
        <main>
            <Container fullWidth={true}>
                <Article fullWidth={true} className="md:p-10">
                    <div>
                        <h1 className="sr-only mb-1">Nathan Davenport</h1>
                        <p className="sr-only mt-1">
                            Video-journalism Photography & Software Engineering
                        </p>
                        <HeaderSVGPlain
                            className={'color dark hidden md:block'}
                        />
                        <HeaderSVGPlain
                            className={
                                'xs-max-md:block max-xs:hidden md:hidden'
                            }
                        />
                        <HeaderSVGPlain className={'block xs:hidden'} />
                    </div>
                    {/* <div className="my-2 border border-x-0 border-b-0"></div> */}
                    {/*<div className="flex w-full flex-wrap justify-start gap-x-4 gap-y-2 pt-2 lg:pt-0">
            <h4 className="my-0 py-0">
              <a
                target="_blank"
                href="https://patreon.com/nathandaven"
                className="inline-block py-0 no-underline xs:text-nowrap"
              >
                Join the Patreon {">"}
              </a>
            </h4>
            <h4 className="my-0 py-0">
              <a
                href="https://www.youtube.com/@nathandaven?sub_confirmation=1"
                target="_blank"
                className="inline-block py-0 no-underline xs:text-nowrap"
              >
                Subscribe on YouTube {">"}
              </a>
            </h4>
            <h4 className="my-0 py-0">
              <Link href="/links" className="inline-block py-0 no-underline xs:text-nowrap">
                All Links {">"}
              </Link>
            </h4>
          </div>*/}
                    <div className="flex gap-x-3">
                        <h3 className="mt-2 w">Albums</h3>
                        <Divider />
                    </div>
                    {allPosts.length > 0 && (
                        <MoreStories
                            className=""
                            posts={/* morePosts */ allPosts}
                        />
                    )}
                </Article>
            </Container>
        </main>
    );
}
