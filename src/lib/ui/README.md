# `src/lib/ui/`

Shared UI utilities live here. At the moment the directory contains a single `theme.ts` file that exports color tokens, spacing constants, and other design primitives intended to keep the content script and options page visually consistent.

## Usage Guidelines
- Import tokens from `theme.ts` rather than hard-coding values in components.
- If reusable UI components are added (buttons, modals, etc.), colocate them here and document expected props.
- Keep browser-specific code (e.g., DOM queries) in the runtime folders; this directory should stay framework-agnostic.
