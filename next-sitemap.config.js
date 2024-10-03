/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL ||
    (process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL ?? "nathandaven.com"}`
      : "http://localhost:3000"),
  generateRobotsTxt: true, // (optional)
  // ...other options
  transform: async (config, path) => {
    let loc = path; // => this will be exported as http(s)://<config.siteUrl>/<path>
    let changefreq = config.changefreq;
    let priority = config.priority;
    let lastmod = config.autoLastmod ? new Date().toISOString() : undefined;
    let alternateRefs = config.alternateRefs ?? [];
    // custom function to ignore the path
    if (false) {
      return null;
    }

    if (path.includes("tag")) {
      priority = 0.1;
      changefreq = "weekly";
    }
    if (path.includes("tags")) {
      priority = 0.2;
      changefreq = "weekly";
    }
    if (path.includes("newsletter")) {
      priority = 0.8;
      changefreq = "daily";
    }
    if (path.includes("gallery")) {
      priority = 0.8;
      changefreq = "daily";
    }
    if (path.includes("album")) {
      priority = 0.7;
      changefreq = "weekly";
    }
    if (path.includes("video")) {
      priority = 0.7;
      changefreq = "weekly";
    }
    if (path.includes("article")) {
      priority = 0.7;
      changefreq = "weekly";
    }
    if (path.includes("archive")) {
      priority = 0.3;
      changefreq = "weekly";
    }
    if (path.includes("work")) {
      priority = 0.5;
      changefreq = "yearly";
    }
    if (path.includes("about")) {
      priority = 0.5;
      changefreq = "yearly";
    }

    // Use default transformation for all other cases
    return {
      loc: loc,
      changefreq: changefreq,
      priority: priority,
      lastmod: lastmod,
      alternateRefs: alternateRefs,
    };
  },
};
