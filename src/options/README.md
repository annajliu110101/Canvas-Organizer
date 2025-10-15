# `src/options/`

This folder contains the entry point for the Chrome extension options page (`index.tsx`). The options UI allows users to configure global preferences such as refresh cadence, connected Canvas hosts, and category presets.

## Planned UI Features
- Authentication/host management for multiple Canvas domains.
- Toggles for syncing Gradescope data.
- Category editor for defining labels, colors, and icons used in the calendar.
- Backup & restore flow leveraging the storage helpers in `src/lib/storage`.

## Development Notes
- The options page runs in a normal DOM environment, so React or other UI frameworks can be used without the restrictions of content scripts.
- Reuse shared components or styling tokens from `src/lib/ui` to keep visual consistency.
- Remember to declare the options page HTML in the extension manifest so Chrome loads this bundle in the right context.
