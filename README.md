# Nathan Davenport Homepage

Remaking my personal portfolio site.

## Goals:

- New design
- Blog page with mdx next.js
- Photo album page parsing using static folders in git
- References page
- Resume page

## Technologies used

- Next.JS
- React
- Vercel deployment

## Content Directory

This directory holds all of the content for the site. All routes here are mapped to the webpage routes generated.

This is managed using Front Matter CMS in VS Code. I'm really liking this concept of a local CMS controlled by git, and it's really convenient to write in Markdown.

Future improvement may be a refactor to use .mdx files for even better flexability. However, this works for now.

## Getting Started

First

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact

Email: [nathandaven@gmail.com](mailto:nathandaven@gmail.com)

## Special Thanks

- Vercel [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript
- [Steve Ruiz](https://www.steveruiz.me/posts/nextjs-refresh-content) for AutoRefresh component to live watch .md files
- [Production Checklist](https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist#caching)
