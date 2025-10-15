# `src/lib/core/`

Core modules contain the business rules that operate on normalized data. They orchestrate item merging, filtering, and schema validation for custom fields.

## Files
- `merge.ts` – Responsible for combining Canvas, Gradescope, and user-authored items while deduplicating by key and preserving metadata.
- `filters.ts` – Provides helper functions to filter items by completion status, due dates, hosts, or user-defined categories.
- `schemas.ts` – Registry for describing optional custom fields per category, useful for validating user-supplied metadata.

## Design Guidance
- Keep functions pure and testable—pass in data and return new values without mutating the inputs.
- Encapsulate business logic here so both the background worker and content scripts can share consistent behavior.
- Add unit tests (in a future `__tests__` directory) alongside these modules to lock in behavior as the feature set grows.
