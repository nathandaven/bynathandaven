/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "nathandaven.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/albums",
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/album",
        destination: "/photography",
        permanent: true,
      },
      {
        source: "/article",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/articles",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/video",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/videos",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/posts",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/post",
        destination: "/newsletter",
        permanent: true,
      },
      // Wildcard path matching
      // {
      //   source: "/blog/:slug",
      //   destination: "/news/:slug",
      //   permanent: true,
      // },
    ];
  },
};

// const withMDX = require("./mdx-loader")();
// module.exports = withMDX(nextConfig);
module.exports = nextConfig;
