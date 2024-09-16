import Avatar from "@/app/_components/Avatar";
import CoverImage from "@/app/_components/CoverImage";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import classNames from "classnames";
import { ContentType } from "@/interfaces/contentType";
import { Button } from "./Button";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  contentType: ContentType;
  slug: string;
  className?: string;
};

export function HeroPost({ title, coverImage, date, excerpt, author, contentType, slug, className }: Props) {
  return (
    <section className={classNames("", className)}>
      <div className="">
        <CoverImage title={title} src={coverImage} slug={slug} type={contentType} />
      </div>
      <div className="mt-2 flex justify-between gap-x-2">
        <div className="">
          <h3 className="bold my-0">
            <a href={`/${contentType}/${slug}`} className="text-bold my-0 py-0 no-underline">
              <b>{title}</b>
              <i className="ml-1 text-sm font-normal">{contentType}</i>
            </a>
          </h3>
          <div className="my-0 py-0">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="flex h-fit gap-x-2 text-right">
          <Button
            href="/"
            className="w-full bg-gray-200 transition-shadow hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Text 1
          </Button>
          <Button
            href="/"
            className="w-full bg-gray-200 transition-shadow hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Text 2
          </Button>
        </div>
      </div>
    </section>
  );
}
