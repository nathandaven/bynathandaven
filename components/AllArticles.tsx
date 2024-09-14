import React from "react";
import { getAllArticles } from "utils/getArticles";
import Link from "next/link";
import Image from "next/image";
import ArticleInfo from "./ArticleInfo";

export default async function AllArticles() {
  const articles = await getAllArticles();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => {
        const { metadata } = article;
        const title = String(metadata.title);

        return (
          <Link
            key={title}
            href={"/articles/" + article.slug}
            className="flex border-spacing-1 flex-col overflow-hidden rounded border border-black no-underline"
          >
            {metadata.thumbnail && <Image className="h-48 w-full object-cover" src={metadata.thumbnail} alt={title} />}
            <div className="px-6 py-4">
              <ArticleInfo article={article} className="-mt-2 mb-2 text-xs" />
              <div className="">{title}</div>
              <p className="">{metadata.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
