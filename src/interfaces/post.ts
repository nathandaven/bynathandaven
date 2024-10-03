import { type Author } from "@/interfaces/author";
import { ContentTypeEnum } from "@/interfaces/contentType";
import { Photo } from "@/interfaces/photo";

export type Post = {
  // Required
  slug: string;
  title: string;
  date: string;
  preview: string;
  fmContentType: ContentTypeEnum;
  author: Author;
  content: string;
  description?: string;
  draft: boolean;
  // Optional
  tags?: string[];
  keywords?: string[];
  categories?: string[];
  excerpt?: string;
  // Album
  albumPath?: string;
  photoList?: Photo[];
  // Video
  youtubeEmbedCode?: string;
};
