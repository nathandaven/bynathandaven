import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  type?: string;
};

const PreviewImage = ({ title, src, slug, type }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("w-full shadow-sm", {
        "border-dark-primary dark:border-light-primary m-0 border-spacing-1 border p-0 transition-shadow duration-200 hover:shadow-lg":
          slug,
      })}
      width={1300}
      height={630}
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
};

export default PreviewImage;
