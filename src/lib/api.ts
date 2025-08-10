import { ContentTypeEnum } from "@/interfaces/contentType";
import { Photo } from "@/interfaces/photo";
import { Post } from "@/interfaces/post";
import fs, { readFileSync, statSync } from "fs";
import matter from "gray-matter";
import path, { join } from "path";
import { load, Tags } from "exifreader";
import { parseEXIFDate } from "@/app/_components/date-formatter";

const articleDirectory = join(process.cwd(), "_CONTENT_/article");
const albumDirectory = join(process.cwd(), "_CONTENT_/album");
/* const generalDirectory = join(process.cwd(), "_CONTENT_/general"); */
const videoDirectory = join(process.cwd(), "_CONTENT_/video");

export function getPostSlugs(dir: string) {
  return fs.readdirSync(dir, { withFileTypes: true });
}

export function getPostDirByType(type: string): string {
  switch (type) {
    case "article":
      return articleDirectory;
    case "album":
      return albumDirectory;
    /* case "general":
      return generalDirectory; */
    case "video":
      return videoDirectory;
    default:
      console.error("Could not find content type: " + type);
      return "";
  }
}

export function getPostBySlug(slug: string, dir: string) {
  const realSlug = slug.replace(/\.mdx$/, "").replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post = { ...data, slug: realSlug, content } as Post;

  if (post?.fmContentType && post.fmContentType == ("album" as ContentTypeEnum)) {
    post.photoList = parseAlbumPhotos(post);
  }

  return post;
}

export function getAllPosts(): Post[] {
  const articleSlugs = getPostSlugs(articleDirectory)
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
  const albumSlugs = getPostSlugs(albumDirectory)
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
  /* const generalSlugs = getPostSlugs(generalDirectory)
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name); */
  const videoSlugs = getPostSlugs(videoDirectory)
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  const articlePosts = articleSlugs.map((slug) => getPostBySlug(slug, articleDirectory));
  const albumPosts = albumSlugs.map((slug) => getPostBySlug(slug, albumDirectory));
  /* const generalPosts = generalSlugs.map((slug) => getPostBySlug(slug, generalDirectory)); */
  const videoPosts = videoSlugs.map((slug) => getPostBySlug(slug, videoDirectory));

  const allPosts = articlePosts
    .concat(albumPosts, /* generalPosts, */ videoPosts)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .filter((post) => !post?.draft);

  return allPosts;
}

// Using the cached albums.json file
export function parseAlbumPhotos(post: Post): Photo[] {
  const jsonPath = path.resolve(process.cwd(), "public/cache", "albums.json");
  const albumData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

  if (!post.albumPath && !post.slug) {
    return [];
  }

  const album: Photo[] = [] as Photo[];

  albumData[post.albumPath ?? ""].forEach((photo: Photo) => {
    album.push(photo);
  });

  // Sorting albums from newest to oldest
  return album.sort((a: Photo, b: Photo) => {
    if (a.dateTime && b.dateTime) {
      return parseEXIFDate(b.dateTime).getTime() - parseEXIFDate(a.dateTime).getTime();
    } else {
      return a.filename < b.filename ? 1 : 0;
    }
  });
}
