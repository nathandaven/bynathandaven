import path from "path";
import ExifReader from "exifreader";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Initialize S3 client once
const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".tiff", ".webp"];

async function listImages(prefix = "") {
  const command = new ListObjectsV2Command({
    Bucket: process.env.R2_BUCKET_NAME,
    Prefix: prefix,
  });

  const { Contents } = await s3.send(command);
  return (Contents || [])
    .map((obj) => obj.Key)
    .filter((key) => acceptedExtensions.includes(path.extname(key ?? "").toLowerCase()));
}

async function getExifFromR2Image(imageUrl: string) {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);

  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const tags = ExifReader.load(buffer);

  return {
    src: imageUrl,
    filename: path.basename(imageUrl),
    caption: tags["ImageDescription"]?.description || "",
    width: tags.ImageWidth?.value,
    height: tags.ImageHeight?.value,
    make: tags.Make?.value?.toString() || "Unknown",
    model: tags.Model?.value?.toString() || "Unknown",
    dateTime: tags.DateTimeOriginal?.description,
  };
}

export const dynamic = "force-static"; // This ensures static rendering

type Params = {
  params: {
    album: string;
  };
};
export default async function AlbumsPage({ params }: Params) {
  const imageKeys = await listImages(`500kb/${params.album}`);

  const photos = [];

  for (const key of imageKeys) {
    const imageUrl = `https://${process.env.CLOUDFLARE_CUSTOM_DOMAIN}/${key}`;
    try {
      const photo = await getExifFromR2Image(imageUrl);
      photos.push(photo);
      console.log(photo);
    } catch {
      // Handle errors or skip invalid images
    }
  }

  return (
    <main>
      <h1>My Albums</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.filename}>
            <img src={photo.src} alt={photo.caption || photo.filename} width={photo.width} height={photo.height} />
            <p>{photo.caption}</p>
            <small>
              {photo.make} {photo.model} - {photo.dateTime}
            </small>
          </li>
        ))}
      </ul>
    </main>
  );
}
