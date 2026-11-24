# DESIGN.md

Clean, minimal base with a pinch of retro and terminal. The joke is the broken bits, so the rest of the page stays tidy.

## Tokens (see `app/globals.css`)
- Neutrals: `bg`, `fg`, `text-2` (body copy), `muted` (meta), `card`, `card-2` (preview wells), `line`, `line-hi` (hover). Light and dark themes follow the system setting.
- `muted` (#A1A1AA in dark) is the darkest grey allowed for text. Meta text is never below 13px.
- `bug` red is for bugs only: bug IDs and Critical severity. Never for section labels.
- `ok` green: XP, "fixed", the current role, focus rings. `warn` amber: Medium severity.

## Type
- Inter for body text and headings.
- JetBrains Mono for terminal bits: `$ whoami`, dates, status lines and the ticker.
- Press Start 2P only for the `// eyebrow` labels (12px, uppercase). Never for IDs, numbers or anything someone needs to read.

## Rules
- Broken-UI demos stay inside their card's preview well, with `role="img"` and an `aria-label` saying the bug is intentional. Real content stays semantic.
- Severity is a pill with a dot and text, never colour alone.
- Motion is limited to the caret blink, the ticker (pauses on hover/focus) and a 150ms card lift. All of it turns off under `prefers-reduced-motion`.
- No CRT scanlines and no full-page effects.
