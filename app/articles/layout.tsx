import ArticleInfo from "components/ArticleInfo";
import { Wrapper } from "components/Wrapper";
import { headers } from "next/headers";
import Image from "next/image";
import { getArticleBySlug } from "utils/getArticles";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const slug = headers().get("x-next-article-slug") as string;
  const article = await getArticleBySlug(slug);
  const { metadata } = article;
  const thumbnail = metadata.thumbnail;

  return (
    <Wrapper metadata={metadata}>
      {/* {image && (
        <div className="flex max-h-[60vh] justify-center">
          <Image
            src={thumbnail}
            alt={String(metadata.title)}
            width={1200}
            height={630}
            className="border-black border-spacing-1 object-scale-down"
          />
        </div>
      )} */}

      {/* <ArticleInfo article={article} className="" /> */}
      {children}
    </Wrapper>
  );
}
