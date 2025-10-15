# `src/` – Extension Source

The `src` directory contains every TypeScript entry point that will be bundled into the Chrome extension. Each subfolder maps to a specific runtime or shared layer:

- [`background/`](./background/README.md) – The Manifest V3 service worker that performs scheduled refreshes and cross-context messaging.
- [`content/`](./content/README.md) – Scripts injected into Canvas pages to render the unified calendar UI and react to host page changes.
- [`options/`](./options/README.md) – The options page rendered inside Chrome's extension UI for configuring preferences.
- [`lib/`](./lib/README.md) – A collection of shared modules (API clients, adapters, models, storage helpers, etc.) that are reused by each runtime.

## Build Outputs
Each subdirectory exports a TypeScript entry file that Webpack consumes to produce a compiled JavaScript bundle in the final `dist/` folder:

| Runtime     | Entry file                 | Bundle target             |
|-------------|----------------------------|---------------------------|
| Background  | `background/worker.ts`     | `dist/background.js`      |
| Content     | `content/mount.ts`         | `dist/content.js`         |
| Options     | `options/index.tsx`        | `dist/options.js`         |

These paths are referenced from the Webpack configuration and manifest file (to be added).

## Development Notes
- Keep runtime-specific logic in the corresponding folder and import only runtime-safe modules from `lib`.
- Treat the code in `lib` as pure and reusable so that it can run in any of the extension contexts.
- Update the subdirectory README when you add new entry points or significant behaviors so the structure stays discoverable.
