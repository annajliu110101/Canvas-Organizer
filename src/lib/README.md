# `src/lib/` – Shared Modules

The `lib` directory houses cross-cutting TypeScript modules that are shared between the background worker, content scripts, and options page. Everything here should be runtime-agnostic and safe to execute in any browser context.

## Subdirectories
- [`api/`](./api/README.md) – HTTP/DOM clients and DTOs for Canvas, Gradescope, and other remote systems.
- [`adapters/`](./adapters/README.md) – Pure transformation helpers that convert remote data into the extension's internal models.
- [`core/`](./core/README.md) – Business logic for merging, filtering, and interpreting course items.
- [`model/`](./model/README.md) – TypeScript types representing courses, items, and discriminated unions used across the app.
- [`storage/`](./storage/README.md) – Thin wrappers for Chrome's storage APIs and any local persistence helpers.
- [`ui/`](./ui/README.md) – Shared styling tokens or helper utilities for the UI layer.

A top-level `model.ts` and `rules.ts` file re-export or compose functionality across these modules for ergonomic imports.

## Conventions
- Keep modules pure and deterministic—no direct DOM or Chrome API calls from this layer.
- Favor TypeScript interfaces/types so the consuming runtime knows exactly what to expect.
- Document new subfolders with their own README to maintain discoverability.
