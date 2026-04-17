# Seluna Docs

Documentation site for Seluna, built with [Next.js](https://nextjs.org) + [Fumadocs](https://fumadocs.vercel.app). Deployed to Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare).

## Stack

- **Framework**: Next.js 16 + React 19
- **Docs engine**: Fumadocs (UI + MDX)
- **Styling**: Tailwind CSS v4
- **Deploy**: Cloudflare Workers (`seluna-cloud-docs`)
- **Runtime**: Bun

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Action |
|---------|--------|
| `bun dev` | Start dev server |
| `bun build` | Build for Node |
| `bun run build:cf` | Build for Cloudflare |
| `bun run deploy` | Build + deploy to Cloudflare |
| `bun run preview` | Build + preview locally via Wrangler |

## Content

Content lives in `content/` as MDX files, organized by section:

- `content/guide/` — guides
- `content/blog/` — blog posts

Edit or add `.mdx` files there. Fumadocs picks them up automatically via `source.config.ts`.

## Deploy

Uses `@opennextjs/cloudflare`. Worker name: `seluna-cloud-docs`.

```bash
bun run deploy
```

Requires Wrangler authenticated (`wrangler login`).
