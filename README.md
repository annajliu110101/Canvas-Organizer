# Canvas Organizer Chrome Extension

Canvas Organizer is an in-progress Manifest V3 Chrome extension that unifies coursework from multiple Canvas LMS instances (and complementary tools like Gradescope) into a single personal dashboard. The project is written in TypeScript and is designed to run entirely client-side so that all course information, preferences, and cached content stay on the user's device.

## Project Goals
- **Unified calendar** – Merge events, assignments, and to‑dos across every Canvas instance a student uses.
- **Gradescope awareness** – Pull upcoming Gradescope assignments into the same view and mark submissions as complete when finished.
- **Per-course customization** – Allow custom categories, icons, and filters so each learner can tailor their schedule.
- **Privacy first** – Use the browser's storage APIs exclusively; no external servers or credentials beyond the user's existing Canvas sessions.
- **Deployable as an extension** – Package the compiled scripts and assets so they can be loaded into Chrome via `chrome://extensions` for local testing or the Chrome Web Store for distribution.

## Repository Structure
```
root/
├── README.md                – This document.
├── LICENSE                  – Project license.
├── src/                     – Extension source organized by runtime (background, content, options) and shared libraries.
│   ├── background/          – Service worker entry point for scheduled sync and messaging.
│   ├── content/             – Scripts injected into Canvas pages to render the organizer UI.
│   ├── lib/                 – Shared adapters, APIs, models, storage helpers, and utilities.
│   └── options/             – Options page entry point for Chrome's extension UI.
└── webpack/                 – Bundler configuration for building the extension.
```

Each directory (and most subdirectories) contains its own README with details about responsibilities, conventions, and TODOs.

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Build the extension**
   ```bash
   npm run build
   ```
   The compiled output should be emitted to a `dist/` directory (configure via Webpack). That folder can then be loaded into Chrome as an unpacked extension.
3. **Load into Chrome**
   - Open `chrome://extensions`
   - Enable **Developer mode**
   - Click **Load unpacked** and select the build output folder

## Development Guidelines
- Write all new code in TypeScript and keep modules side-effect free whenever possible.
- Avoid storing secrets or credentials; only interact with Canvas using the browser's authenticated session cookies.
- When creating new modules, add or update the README within the relevant folder so maintainers know how to use it.
- Use the shared `src/lib` modules (models, adapters, API clients) rather than duplicating logic in different runtimes.

## Status & Next Steps
The TypeScript modules are currently placeholders awaiting implementation. The READMEs outline intended behavior, data flow, and integration points. Contributions should fill in these modules while adhering to the documented architecture and the Chrome extension deployment target.
