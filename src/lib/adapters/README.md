# `src/lib/adapters/`

Adapters convert raw data fetched from Canvas or Gradescope into the normalized models defined in `src/lib/model`.

## Files
- `canvas.toCourse.ts` – Normalizes Canvas course payloads into lightweight `CourseBrief` objects that capture IDs, names, and host metadata.
- `canvas.toItem.ts` – Maps Canvas assignments, events, and to-dos into the shared `Item` discriminated union.
- `gradescope.toItem.ts` – Translates Gradescope assignment listings into `Item` values compatible with Canvas-derived data.

## Guidelines
- Keep adapters pure and free of side effects; they should accept raw DTOs and return new objects.
- Handle inconsistencies between APIs (e.g., missing due dates) within these modules so downstream logic can assume consistent shapes.
- Update the README whenever new adapters are introduced (for additional LMS integrations, etc.).
