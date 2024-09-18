import { ContentTypeEnum } from "@/interfaces/contentType";
import { Photo } from "@/interfaces/photo";
import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import path, { join } from "path";

const articleDirectory = join(process.cwd(), "_CONTENT_/article");
const albumDirectory = join(process.cwd(), "_CONTENT_/album");
const generalDirectory = join(process.cwd(), "_CONTENT_/general");
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
  const generalSlugs = getPostSlugs(generalDirectory)
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
  const videoSlugs = getPostSlugs(videoDirectory)
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  const articlePosts = articleSlugs.map((slug) => getPostBySlug(slug, articleDirectory));
  const albumPosts = albumSlugs.map((slug) => getPostBySlug(slug, albumDirectory));
  const generalPosts = generalSlugs.map((slug) => getPostBySlug(slug, generalDirectory));
  const videoPosts = videoSlugs.map((slug) => getPostBySlug(slug, videoDirectory));

  const allPosts = articlePosts
    .concat(albumPosts, generalPosts, videoPosts)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return allPosts;
}

export function parseAlbumPhotos(post: Post): Photo[] {
  if (!post.albumPath && !post.slug) {
    return [];
  }
  const albumDir = join(process.cwd(), "public/assets/albums/" + (post.albumPath ?? post.slug));

  const album: Photo[] = [] as Photo[];

  fs.readdirSync(albumDir).forEach((image) => {
    const filepath = path.resolve(albumDir, image);
    const acceptedExtensions: string[] = [".jpg", ".jpeg", ".png", ".gif", ".tiff", ".webm"];
    const ext = path.parse(filepath).ext.toLowerCase();

    // Filter accepted extensions
    if (acceptedExtensions.includes(ext)) {
      const photo: Photo = {
        relativePath: "/assets/albums/" + post.albumPath + "/" + image,
        filename: filepath ?? "",
        album: albumDir ?? "",
        caption: "",
      };

      album.push(photo);
    }
  });
  return album;
}
