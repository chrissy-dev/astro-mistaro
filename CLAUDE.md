# CLAUDE.md

## What this is

A minimal, static-first Astro boilerplate for long-lived, content-driven sites. Designed for Cloudflare Pages (or any static host). See `AGENTS.md` for change rules and scope constraints.

## Tech stack

- **Astro 5** with static output (no SSR)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (not PostCSS)
- **MDX** for content authoring
- **Zod** for runtime config validation
- **TypeScript** (strict mode, `astro/tsconfigs/strict`)

## Project structure

```
src/
  config/site.ts        # Zod-validated site config (url, title, description, locale)
  content/
    config.ts           # Astro content collection schemas (posts: title, description, date, draft)
    posts/*.mdx         # Blog posts as MDX files
  components/
    SEO.astro           # Centralised SEO/meta/OG tags - single source of truth
    mdx/
      Callout.astro     # MDX callout component (info/warning/error variants)
      index.ts          # Barrel export of MDX components as `mdxComponents`
  layouts/
    Base.astro          # Root HTML shell - imports global CSS, SEO component, RSS/sitemap links
    MDXLayout.astro     # Wraps MDX posts with title, date, and prose styling
  pages/
    index.astro         # Home page
    404.astro           # 404 page (noindex)
    posts/index.astro   # Post listing (filtered drafts, sorted by date desc)
    posts/[...slug].astro  # Individual post pages via getStaticPaths
    rss.xml.ts          # RSS feed endpoint
  styles/global.css     # Just `@import "tailwindcss"`
  types/
    seo.ts              # SEOProps interface
    index.ts            # Barrel re-export
  assets/               # Empty, for optimised images via Astro
```

## Path aliases (tsconfig.json)

- `@config/*` -> `src/config/*`
- `@components/*` -> `src/components/*`
- `@layouts/*` -> `src/layouts/*`
- `@types` / `@types/*` -> `src/types/`
- `@utils/*` -> `src/utils/*`
- `@styles/*` -> `src/styles/*`

Always use these aliases in imports.

## Key patterns

**Site config**: `src/config/site.ts` is the single source of truth for site-wide metadata. It is Zod-validated at build time. Used by `SEO.astro`, `rss.xml.ts`, `Base.astro`, and `astro.config.mjs`.

**SEO**: All meta/OG/Twitter tags flow through `src/components/SEO.astro`. Pages pass `SEOProps` (title, description, image, canonical, noindex) to `Base.astro`, which forwards them to `SEO.astro`. Page titles are formatted as `"Page · Site Title"`.

**Content collections**: Posts live in `src/content/posts/` as `.mdx` files. Schema: `title` (string), `description` (string), `date` (coerced Date), `draft` (boolean, default false). Drafts are filtered out in all listing/routing logic.

**MDX components**: Custom components are registered in `src/components/mdx/index.ts` and passed via `<Content components={mdxComponents} />` in the slug page.

**Layout chain**: Pages -> `Base.astro` (HTML shell + SEO) -> content slot. MDX posts use `MDXLayout.astro` -> `Base.astro`.

## Commands

- `npm run dev` - dev server
- `npm run build` - production build
- `npm run preview` - preview production build

## CI

GitHub Actions runs `npm install && npm run build` on every push/PR (Node 20). No linter or test runner configured.

## Guidelines

- No client-side JS unless absolutely necessary
- Keep dependencies minimal - reject unnecessary additions
- Semantic HTML and accessibility by default
- This is a boilerplate, not a framework - features like search, analytics, auth, CMS belong downstream
