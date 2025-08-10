// Ethical AI crawlers that honor robots.txt
export const blockedBots = [
  "GPTBot", // OpenAI
  "Google-Extended", // Google AI data
  "anthropic-ai", // Claude
  "ClaudeBot", // Anthropic
  "CCBot", // Common Crawl
  "Amazonbot", // Amazon
  "Bytespider", // Bytedance (TikTok)
  "Applebot-Extended", // Apple AI data
];

// Bots we want to allow for previews
export const allowedBots = [
  "facebookexternalhit", // Facebook / Instagram
  "Facebot", // Facebook legacy
  "Twitterbot", // Twitter/X
  "LinkedInBot", // LinkedIn
  "Slackbot", // Slack
  "WhatsApp", // WhatsApp
];
