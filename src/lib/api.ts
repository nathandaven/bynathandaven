import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const contentDirectory = join(process.cwd(), "_CONTENT_");

const articleDirectory = join(process.cwd(), "_CONTENT_/article");
const albumDirectory = join(process.cwd(), "_CONTENT_/album");
const generalDirectory = join(process.cwd(), "_CONTENT_/general");
const videoDirectory = join(process.cwd(), "_CONTENT_/video");

export function getPostSlugs(dir: string) {
  return fs.readdirSync(dir);
}

export function getPostDirByType(type: string): string {
  switch (type) {
    case "article":
      return articleDirectory;
    case "album":
      return albumDirectory;
    case "general":
      return generalDirectory;
    case "video":
      return videoDirectory;
    default:
      console.error("Could not find content type: " + type);
      return "";
  }
}

export function getPostBySlug(slug: string, dir: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const articleSlugs = getPostSlugs(articleDirectory);
  const albumSlugs = getPostSlugs(albumDirectory);
  const generalSlugs = getPostSlugs(generalDirectory);
  const videoSlugs = getPostSlugs(videoDirectory);

  const articlePosts = articleSlugs.map((slug) => getPostBySlug(slug, articleDirectory));
  const albumPosts = albumSlugs.map((slug) => getPostBySlug(slug, albumDirectory));
  const generalPosts = generalSlugs.map((slug) => getPostBySlug(slug, generalDirectory));
  const videoPosts = videoSlugs.map((slug) => getPostBySlug(slug, videoDirectory));

  const allPosts = articlePosts
    .concat(albumPosts, generalPosts, videoPosts)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return allPosts;
}
