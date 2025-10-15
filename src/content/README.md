# Purpose

Implements the in-page UI (content scripts) that run inside Canvas or Gradescope pages.

# Contents

calendar.tsx: injects the unified calendar panel, item list, and category filter chips.

mount.ts: detects Canvas SPA re-renders, injects panel only once.

# Features

- Non-destructive: overlays UI without modifying Canvas DOM nodes.

- React-free lightweight rendering (vanilla or minimal JSX).

- Automatic refresh when Canvas rerenders calendar.

- MutationObserver + ID guard prevents duplicate injection.
