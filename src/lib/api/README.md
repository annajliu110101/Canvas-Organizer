# `src/lib/api/`

This folder contains low-level clients and DTO definitions for the external services the extension interacts with.

## Files
- `canvas.client.ts` – Wraps `fetch` calls to Canvas' REST API, including pagination helpers for `/api/v1` endpoints.
- `canvas.types.ts` – TypeScript interfaces describing the subset of Canvas API responses used by the extension.
- `gradescope.client.ts` – Handles fetching assignment data from Gradescope, either via available APIs or lightweight scraping.
- `gradescope.types.ts` – DTO definitions matching the structure returned by `gradescope.client.ts`.

## Best Practices
- Keep these clients free of business logic; return the raw response data and let adapters handle normalization.
- Include graceful error handling and rate-limit awareness, as Canvas APIs can throttle aggressive clients.
- Share authentication context with the browser (cookies, tokens) by enabling `credentials: 'include'` on requests.
