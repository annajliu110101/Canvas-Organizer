# Purpose

Manages persistent local data using Chrome APIs and IndexedDB.

# Contents

storage.ts: wrapper around chrome.storage.local for items, prefs, and course data.

blobs.ts (optional): handles larger binary assets (syllabi, PDFs).

# Features

- Simple async get/set API returning typed objects.

- Schema versioning and migration support.

- JSON export/import and reset to defaults.

- 100% local privacy — nothing leaves the browser.
