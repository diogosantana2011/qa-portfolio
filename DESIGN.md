# DESIGN.md

Clean, minimal base with a pinch of retro and terminal. The joke is the broken bits, so the rest of the page stays tidy.

## Tokens (see `app/globals.css`)
- Neutrals: `bg`, `fg`, `muted`, `card`, `line`. Light and dark themes follow the system setting.
- Accent: `bug` #ff4d4f, the only loud colour, used for bug IDs, labels and timeline dots.
- `ok` green is used only for "fixed" states.

## Type
- Inter for body text and headings.
- JetBrains Mono for terminal bits: `$ whoami`, dates, status lines and the ticker.
- Press Start 2P only for tiny uppercase labels and bug IDs (10px). Never use it for body text.

## Rules
- Broken-UI demos stay inside their card and are `aria-hidden`. Real content stays semantic.
- Motion is limited to the caret blink, the ticker and a 150ms hover glitch. All of it turns off under `prefers-reduced-motion`.
- No CRT scanlines and no full-page effects.
