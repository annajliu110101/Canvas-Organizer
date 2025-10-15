# `src/lib/storage/`

Storage helpers encapsulate interactions with Chrome's extension storage APIs (primarily `chrome.storage.local`) and any future IndexedDB usage.

## Files
- `storage.ts` – Promise-based wrapper for reading and writing normalized data, user preferences, and sync metadata.

## Best Practices
- Keep the API asynchronous and resilient to quota errors; surface friendly error messages to calling code.
- Version stored schemas so migrations can run when data structures evolve.
- When adding new storage modules, document them here along with the expected data shape.
