# ScaleDesk Technology: website

Marketing site for ScaleDesk Technology, a product company that helps businesses grow their sales with
software platforms (LeadForGrow, TalkForGrow, EngageForGrow, PeopleForGrow), AI agents (ForGrow AI) and
expert engineering services. Next.js 16 (App Router), React 19, Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

Read `node_modules/next/dist/docs/` before changing framework-level code (see AGENTS.md).

## Where things live

| What | Where |
|---|---|
| Platforms and their copy | `lib/catalog/platforms.js` |
| ForGrow AI agents and their copy | `lib/catalog/agents.js` |
| Header, footer, search index | `lib/nav.js` (derived from the catalog + SEO data) |
| SEO page data (services, industries, glossary) | `lib/seo/*.js` |
| Site-wide SEO config, metadata, structured data | `lib/seo/config.js`, `lib/seo/metadata.js`, `lib/seo/schema.js` |
| Sitemap / robots / llms.txt | `lib/seo/sitemap-urls.js`, `app/robots.js`, `public/llms.txt` |
| Design system (tokens, buttons, layout) | `app/corporate.css` |
| Stock photography manifest and credits | `lib/images.js`, `public/images/stock/CREDITS.md` |
| Page templates | `app/components/catalog/` (platform + agent pages), `app/components/pages/` (everything else) |
| Redirects for retired pages | `next.config.mjs` |

Public pages render inside the corporate shell (`app/components/shell/`). The internal `/admin` and
`/employee` portals render without site chrome (`lib/shellRoutes.js`).

## Content rules

- Only verifiable facts: no invented metrics, certifications, customer logos or testimonials.
- Stock photos are ambience only; never present them as customers.
- Names, address, phone and social profiles are declared once in `lib/seo/config.js`; add verified values there.

## Configuration

Runtime secrets (database URI, auth secret, admin credentials) must come from environment variables.
Do not commit them.
