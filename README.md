# Intellibus Academy Hub

Full-stack foundation for the Intellibus Academy Hub using React, TypeScript, Vite,
React Router, Tailwind CSS v4, shadcn-style Radix primitives, Cloudflare Workers,
D1, and R2.

## Current Scope

This repository contains the technical foundation only:

- shared application shell, header, footer, and navigation
- empty route pages for the approved route map
- centralized design tokens
- typed reusable Academy components
- shared content models
- read-only Worker API structure
- D1 schema and local seed data
- R2 storage adapter
- initial automated checks

The approved visual designs have not been fully recreated yet.

## Local Setup

```sh
npm install
npm run dev
```

For Worker API development:

```sh
npm run db:migrate:local
npm run db:seed:local
npm run dev:worker
```

Before using Wrangler against Cloudflare environments, replace the placeholder D1
database IDs and R2 bucket names in `wrangler.toml`.

## Checks

```sh
npm run lint
npm run format
npm run test
npm run build
npm run check
```

## API Endpoints

- `GET /api/news`
- `GET /api/news/:slug`
- `GET /api/events`
- `GET /api/events/:slug`
- `GET /api/participants`
- `GET /api/faqs`
- `GET /api/albums`
- `GET /api/albums/:slug`
- `GET /api/albums/:slug/photos`
- `GET /api/external-links`
- `GET /health`

Public write endpoints are intentionally not implemented.
