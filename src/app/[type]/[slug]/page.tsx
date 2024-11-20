import { ContentTypeEnum } from "@/interfaces/contentType";
import { notFound } from "next/navigation";
import Page, { PageParams, generatePageStaticParams, generatePageMetadata } from "@/app/_components/Page";

export default function Post({ params }: PageParams) {
  if (!Object.values(ContentTypeEnum).includes(params.type as ContentTypeEnum)) {
    return notFound();
  }
  return Page({ params });
}

export function generateMetadata({ params }: PageParams) {
  return generatePageMetadata({ params });
}

export async function generateStaticParams() {
  return await generatePageStaticParams();
}

export const dynamicParams = false;
