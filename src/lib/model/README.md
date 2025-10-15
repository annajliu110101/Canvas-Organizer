#Purpose

Defines core domain types that describe everything the extension manipulates — items, courses, and user categories.

#Contents

item.ts: canonical Item union (assignment, quiz, todo, event) built on a shared Base type with optional extra fields for user customization.

course.ts: defines CourseBrief and Host (Canvas domain identifiers).

category.ts: optional per-user categories with icons and colors.

index.ts: barrel file exporting all models.

#Features

- Stable, API-independent data structures.

- Optional extra property to store custom metadata per category.

- Narrower discriminated unions for reliable rendering and merging.
