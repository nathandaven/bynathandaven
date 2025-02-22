import PreviewImage from "@/app/_components/PreviewImage";
import { type Author } from "@/interfaces/author";
import DateFormatter from "@/app/_components/date-formatter";
import classNames from "classnames";
import { ContentType, ContentTypeEnum } from "@/interfaces/contentType";
import { Button } from "@/app/_components/Button";
import Link from "next/link";

type Props = {
  title: string;
  preview: string;
  date: string;
  excerpt: string;
  author: Author;
  contentType: ContentType;
  tags?: string[];
  slug: string;
  className?: string;
};

export function HeroPost({ title, preview, date, excerpt, author, tags, contentType, slug, className }: Props) {
  return (
    <section className={classNames("", className)}>
      <div
        className={classNames(
          "relative",
          contentType == ContentTypeEnum.ALBUM
            ? "max-md:aspect-h-2 max-md:aspect-w-3 md:aspect-h-9 md:aspect-w-16"
            : "aspect-h-9 aspect-w-16",
        )}
      >
        <PreviewImage
          className="absolute inset-0 h-full w-full object-cover"
          title={title}
          src={preview}
          slug={slug}
          type={contentType}
          width={1920}
          height={contentType == ContentTypeEnum.ALBUM ? 1280 : 1080}
        />
      </div>

      <div className="flex flex-col justify-between gap-x-2 pb-3">
        <div className="mt-2 flex flex-row justify-between gap-x-2">
          <div className="">
            <h3 className="bold my-0">
              <Link href={`/${contentType}/${slug}`} className="text-bold my-0 min-w-0 break-normal py-0 no-underline">
                <b className="break-normal">{title}</b>
              </Link>
            </h3>
          </div>
          <div className="mb-0 flex h-fit flex-col justify-center gap-x-2 text-right align-middle">
            {/* <Button
            href="/"
            className="w-full bg-gray-200 transition-shadow hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Text 1
          </Button> */}
            {/*  <Button
              href={`/${contentType}/${slug}`}
              className="hidden w-full bg-gray-200 transition-shadow hover:bg-gray-300 xs:block dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {contentType == ContentTypeEnum.ALBUM ? "View" : contentType == ContentTypeEnum.VIDEO ? "Watch" : "Read"}
            </Button> */}
          </div>
        </div>
        <div className="m-0 my-0 flex h-fit w-fit list-none flex-col gap-x-2 p-0 py-1 align-middle xs:flex-row sm:py-0">
          <span className="h-fit pt-[0.3px] align-top text-sm">
            {contentType && contentType.length > 0 ? contentType?.charAt(0).toUpperCase() + contentType.slice(1) : ""}
            {", "}
            <DateFormatter dateString={date} />
          </span>
          <div className="no-scrollbar m-0 my-0 hidden h-fit w-fit list-none gap-x-1 overflow-x-scroll p-0 py-0 align-middle xs:flex sm:py-0">
            {tags?.slice(0, 2).map((tag, key) => (
              <Button key={key} href={"/tag/" + tag} sizeSmall={true} className="h-fit">
                <div /* className="text-sm" */>
                  {"#"}
                  {tag}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
