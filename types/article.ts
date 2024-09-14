import { Metadata } from "next";

export type ArticleMetadata = Metadata & {
  slug?: string;
  date?: string;
  description?: string;
  author?: string;
  tags?: string[];
  thumbnail?: string;
};

export type Article = {
  slug: string;
  metadata: ArticleMetadata;
  component: any;
  readingTime: string;
};
