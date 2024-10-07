import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { ContentTypeEnum } from "@/interfaces/contentType";
import dynamicBlurDataUrl from "@/lib/blurImage";

type Props = {
  title: string;
  src: string;
  slug?: string;
  type?: string;
  priority?: boolean;
  quality?: number;
};

export async function PreviewImage({ title, src, slug, type, priority = false, quality = 75 }: Props) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("w-full shadow-md", {
        "m-0 border-spacing-0 border border-dark-primary p-0 outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-lg hover:outline-1 dark:border-light-primary dark:outline-light-primary":
          slug,
      })}
      width={type == ContentTypeEnum.ALBUM ? 960 : 1280}
      height={720}
      priority={priority}
      quality={quality}
      placeholder="blur"
      blurDataURL={await dynamicBlurDataUrl(src)}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/${type}/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

export default PreviewImage;
