# `src/content/`

Content scripts run inside Canvas (and optionally Gradescope) pages. They mount the extension's UI, observe DOM changes from the host site, and relay user actions back to the background worker.

## Key Files
- `calendar.tsx` – Planned React/JSX-compatible renderer for the unified schedule view. Will read normalized items from storage and display filtering controls.
- `mount.ts` – Entry point executed by Chrome that injects the UI into the host page, sets up mutation observers, and wires runtime messaging.
- `styles.css` – Scoped styles for the injected UI, built alongside the TypeScript to avoid collisions with Canvas styles.

## Implementation Checklist
1. Detect when the user is on a Canvas page and mount the organizer panel without breaking the native UI.
2. Subscribe to updates from the background worker to re-render the calendar when new data arrives.
3. Offer inline interactions (mark complete, open item details, apply filters) and persist those choices via `src/lib/storage` helpers.
4. Clean up observers and DOM nodes when the content script is disabled or the user navigates away.

## Testing Tips
- Use Chrome's **Inspect views** to debug the content script context.
- Log verbose information only behind a development flag so production builds stay quiet.
