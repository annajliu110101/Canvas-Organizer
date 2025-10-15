# `webpack/`

Webpack is used to bundle the TypeScript sources into production-ready JavaScript for the Chrome extension.

## Files
- `webpack.config.js` – Shared configuration that defines entry points for the background worker, content script, and options page. It also configures loaders for TypeScript/TSX and CSS modules.

## Expected Build Flow
1. Run `npm run build` (script to be defined) which invokes Webpack in production mode.
2. Output bundles and assets into a `dist/` directory alongside a generated manifest file.
3. Load the `dist/` directory into Chrome as an unpacked extension for local testing.

## Customization Notes
- When new runtime entry points are added, update the `entry` map in `webpack.config.js` and document the change in the relevant `src` README.
- Configure loaders/plugins here (e.g., `CopyWebpackPlugin` for static assets or `DefinePlugin` for build-time flags).
- Keep the configuration modular so it can be extended for development vs. production builds.
