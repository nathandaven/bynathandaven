import fs from "fs";
import path from "path";
import ExifReader, { Tags } from "exifreader";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import "dotenv/config";
import { Photo } from "@/interfaces/photo";

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
  },
});

const acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".tiff", ".webp"];

// Helper to parse EXIF date strings into Date object
function parseEXIFDate(dateString: string): Date | undefined {
  // EXIF date usually format "YYYY:MM:DD HH:MM:SS"
  const fixed = dateString.replace(/^(\d{4}):(\d{2}):(\d{2})/, "$1-$2-$3");
  const d = new Date(fixed);
  return isNaN(d.getTime()) ? undefined : d;
}

async function listImages(prefix = ""): Promise<string[]> {
  const command = new ListObjectsV2Command({
    Bucket: process.env.R2_BUCKET_NAME,
    Prefix: prefix,
  });

  const { Contents } = await s3.send(command);

  return (
    Contents?.map((obj) => obj.Key ?? "").filter((key) =>
      acceptedExtensions.includes(path.extname(key).toLowerCase()),
    ) ?? []
  );
}

async function getExifFromR2Image(imageUrl: string, key: string): Promise<Photo | null> {
  try {
    const ext = path.extname(key).toLowerCase();
    if (!acceptedExtensions.includes(ext)) return null;

    const res = await fetch(imageUrl);
    if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const tags: Tags = ExifReader.load(buffer);

    // parse dates
    const dateTimeOriginal = tags["DateTimeOriginal"] ? parseEXIFDate(tags["DateTimeOriginal"].description) : undefined;
    const dateTime = tags["DateTime"] ? parseEXIFDate(tags["DateTime"].description) : undefined;

    // decide film default based on date
    const cutoffDate = new Date("2019-04-17");

    const filmDefaultMake =
      dateTimeOriginal && dateTime ? ((dateTimeOriginal ?? dateTime) > cutoffDate ? "(35mm)" : undefined) : undefined;

    const filmDefaultModel =
      dateTimeOriginal && dateTime ? ((dateTimeOriginal ?? dateTime) > cutoffDate ? "(35mm)" : undefined) : undefined;

    // Extract folder name (album) from key, e.g. "500kb/bavaria/image.jpg" => "bavaria"
    const relativePath = key.startsWith("500kb/") ? key.slice("500kb/".length) : key;
    const parts = relativePath.split("/");
    const albumDir = parts.length > 1 ? parts[0] : undefined;

    const photo: Photo = {
      src: imageUrl,
      filename: path.basename(key),
      relativePath: `/assets/albums/${albumDir ?? ""}/${path.basename(key)}`,
      album: albumDir ?? "",
      caption: (tags["ImageDescription"]?.description as string) ?? "",
      width: tags.ImageWidth ? tags.ImageWidth.value : undefined,
      height: tags.ImageHeight ? tags.ImageHeight.value : undefined,
      make: tags["Make"] ? tags["Make"].value.toString() : filmDefaultMake,
      model: tags["Model"] ? tags["Model"].value.toString() : filmDefaultModel,
      dateTime: dateTimeOriginal?.toString() ?? dateTime?.toString() ?? undefined,
    };

    return photo;
  } catch (err) {
    console.error("Error reading EXIF from", imageUrl, err);
    return null;
  }
}

async function buildAlbumData() {
  const prefix = "500kb/";
  const images = await listImages(prefix);

  const albumsByFolder: Record<string, Photo[]> = {};

  for (const key of images) {
    const url = `https://${process.env.CLOUDFLARE_CUSTOM_DOMAIN}/${key}`;
    const photo = await getExifFromR2Image(url, key);
    if (!photo) continue;

    if (!photo.album) {
      console.warn(`Skipping photo with unknown album: ${key}`);
      continue;
    }

    if (!albumsByFolder[photo.album]) {
      albumsByFolder[photo.album] = [];
    }
    albumsByFolder[photo.album].push(photo);
  }

  const outputDir = path.resolve(process.cwd(), "public/cache");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const outputPath = path.resolve(outputDir, "albums.json");
  fs.writeFileSync(outputPath, JSON.stringify(albumsByFolder, null, 2));

  console.log(`Album data saved to ${outputPath}`);
}

buildAlbumData().catch(console.error);
