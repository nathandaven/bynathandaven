import { type Author } from "./author";
import { ContentTypeEnum } from "./contentType";
import { Photo } from "./photo";

export type Post = {
  // Required
  slug: string;
  title: string;
  date: string;
  preview: string;
  fmContentType: ContentTypeEnum;
  author: Author;
  content: string;
  // Optional
  tags?: string[];
  keywords?: string[];
  categories?: string[];
  excerpt?: string;
  // Album
  albumPath?: string;
  photoList?: Photo[];
};
