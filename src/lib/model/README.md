# `src/lib/model/`

Model definitions capture the canonical shapes for data manipulated by the extension.

## Files
- `course.ts` – Defines `CourseBrief` and related types describing Canvas hosts, course identifiers, and enrollment metadata.
- `item.ts` – Declares the `Item` discriminated union covering assignments, events, to-dos, and virtual tasks created by the user.
- `index.ts` – Barrel file exporting the public model surface for ergonomic imports.

## Usage Notes
- These types should remain stable; other modules depend on them for type safety and serialization.
- When extending the models (e.g., new item variant), document the change here and update adapters/core logic accordingly.
- Avoid runtime logic in this folder—keep it limited to type declarations and small helper constants.
