# Intellibus Academy Hub Architecture

## Application Shape

The foundation separates the frontend, backend API, database access, and storage concerns:

- `src/app`: React Router application shell and route composition.
- `src/pages`: route-level pages, currently empty content surfaces.
- `src/components/ui`: low-level shadcn-style primitives backed by Radix where needed.
- `src/components/academy`: reusable Academy-specific components.
- `src/models`: shared TypeScript content and API models.
- `worker`: Cloudflare Worker API, service layer, D1 repository, and R2 storage adapter.
- `migrations`: version-controlled D1 schema.
- `seed`: local development data.
- `tests`: unit and behavior tests for UI, API, queries, and content guardrails.

## Routes

All frontend routes render through one `AppShell`:

- `/`
- `/news`
- `/news/:slug`
- `/events`
- `/events/:slug`
- `/community`
- `/community/cohort`
- `/community/photos`
- `/community/photos/:slug`
- `/about`
- `*`

## Cloudflare Runtime

The Worker serves read-only public API endpoints, media from R2, and built Vite assets:

- `/api/*`: JSON API from D1-backed services.
- `/media/*`: R2 object reads with long-lived cache headers.
- `/health`: uncached runtime health response.
- all other routes: static frontend assets with SPA fallback.

`wrangler.toml` declares local, preview, and production D1/R2 bindings. The placeholder
Cloudflare IDs must be replaced before preview or production deployment.

## Data Responsibilities

D1 stores structured public metadata: slugs, titles, copy, publication state, consent state,
image keys, image dimensions, display order, and relationships.

R2 stores original and optimized image files. The frontend receives keys and metadata through
the API and should request responsive variants through the media URL strategy.

## Safety Rules

The current Worker exposes no public write endpoints. Participant and photograph queries only
return records that are published and have approved consent. Draft, pending, revoked, archived,
and cancelled records are filtered out of public responses.
