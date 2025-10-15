# `src/background/`

The background bundle compiles into a Manifest V3 service worker (`worker.ts`). Its responsibilities are to coordinate data refreshes, maintain lightweight caches, and broker communication between extension contexts.

## Planned Responsibilities
- **Scheduled refresh** – Use `chrome.alarms` to pull the latest Canvas and Gradescope data at configurable intervals.
- **On-demand sync** – Listen for `chrome.runtime.onMessage` events from content scripts or the options page to trigger manual updates.
- **Shared cache** – Store the most recent normalized data in `chrome.storage` so that new tabs can render immediately.
- **Broadcast updates** – Notify open content scripts when data changes so they can re-render without polling.

## Implementation Notes
- Manifest V3 service workers spin down when idle, so keep work chunked and avoid long-running operations.
- Import only runtime-safe code (no DOM APIs) and rely on the pure helpers in `src/lib` for business logic.
- When `worker.ts` grows beyond a few responsibilities, consider splitting it into modules within this folder and exporting from the entry file.
