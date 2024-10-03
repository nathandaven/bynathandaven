import PreviewImage from "@/app/_components/PreviewImage";
import { type Author } from "@/interfaces/author";
import DateFormatter from "@/app/_components/date-formatter";
import classNames from "classnames";
import { ContentType, ContentTypeEnum } from "@/interfaces/contentType";
import { Button } from "@/app/_components/Button";

type Props = {
  title: string;
  preview: string;
  date: string;
  excerpt: string;
  author: Author;
  contentType: ContentType;
  slug: string;
  className?: string;
};

export function HeroPost({ title, preview, date, excerpt, author, contentType, slug, className }: Props) {
  return (
    <section className={classNames("", className)}>
      <div className="">
        <PreviewImage title={title} src={preview} slug={slug} type={contentType} />
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
          {/* <Button
            href="/"
            className="w-full bg-gray-200 transition-shadow hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Text 1
          </Button> */}
          <Button
            href={`/${contentType}/${slug}`}
            className="w-full bg-gray-200 transition-shadow hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            {contentType == ContentTypeEnum.ALBUM ? "View" : contentType == ContentTypeEnum.VIDEO ? "Watch" : "Read"}
          </Button>
        </div>
      </div>
    </section>
  );
}
