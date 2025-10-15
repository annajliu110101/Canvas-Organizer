# Purpose

Houses the service worker for periodic refresh and cross-tab communication.

# Contents

worker.ts: sets up alarms/timers, handles external messages (chrome.runtime.onMessage), caches data across tabs.

# Features

- Keeps recent Canvas and Gradescope data cached.

- Wakes on demand (Manifest V3 ephemeral model).

- Ensures background tasks never block the UI.
