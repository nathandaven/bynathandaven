import { type Author } from "./author";
import { ContentTypeEnum } from "./contentType";

export type Post = {
  // Required
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  fmContentType: ContentTypeEnum;
  author: Author;
  content: string;
  // Optional
  tags?: string[];
  keywords?: string[];
  categories?: string[];
  excerpt?: string;
};
