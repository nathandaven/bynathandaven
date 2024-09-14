/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: true,
};

// const withMDX = require("./mdx-loader")();
// module.exports = withMDX(nextConfig);
module.exports = nextConfig;
