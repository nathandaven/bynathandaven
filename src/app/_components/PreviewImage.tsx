import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { ContentTypeEnum } from "@/interfaces/contentType";
import dynamicBlurDataUrl from "@/lib/blurImage";

type Props = {
  className?: string;
  title: string;
  src: string;
  slug?: string;
  type?: string;
  priority?: boolean;
  quality?: number;
  width?: number;
  height?: number;
};

export async function PreviewImage({
  className,
  width,
  height,
  title,
  src,
  slug,
  type,
  priority = false,
  quality = 75,
}: Props) {
  const image = (
    <Image
      unoptimized
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        "m-0 w-full border-spacing-0 border border-dark-primary object-cover p-0 shadow-md outline outline-0 outline-offset-0 outline-dark-primary transition-all duration-100 hover:shadow-lg hover:outline-1 dark:border-light-primary dark:outline-light-primary",
        className,
      )}
      width={1280}
      height={720}
      priority={priority}
      quality={quality}
      /* placeholder="blur" */
      /* blurDataURL={await dynamicBlurDataUrl(src)} */
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
