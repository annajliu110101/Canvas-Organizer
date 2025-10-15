# Purpose

Holds business logic and pure computation helpers that operate on models.

# Contents

merge.ts: merges Canvas, Gradescope, and virtual items; resolves duplicates.

filters.ts: handles completion, date, and category filtering.

schemas.ts: optional registry for per-category custom fields.

# Features

- All functions are pure and testable.

- No DOM or API dependencies.

- Central place for “rules of truth” used across the extension.
