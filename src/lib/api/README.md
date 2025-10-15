# Purpose

Low-level HTTP clients for external systems — Canvas and Gradescope.

# Contents

canvas.client.ts: handles pagination and REST calls to /api/v1/... endpoints.

canvas.types.ts: defines API response types (e.g., CanvasCourse, CanvasCalendarEvent).

gradescope.client.ts: lightweight scraper or API fetcher for Gradescope (depending on availability).

gradescope.types.ts: DTO definitions matching Gradescope’s structure.

# Features

- Simple fetch(..., { credentials: "include" }) for authenticated calls.

- Pagination helper (nextLink) and query utilities.

- Strong TypeScript typing for JSON responses.

- Decoupled design—can swap in new LMS or service later.
