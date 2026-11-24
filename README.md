# qa-portfolio 🐛

[![CI](https://github.com/diogosantana2011/qa-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/diogosantana2011/qa-portfolio/actions/workflows/ci.yml)

Hey, I'm Diogo. I've been a QA engineer for about 8 years and now work as a Senior QA in Cork.

This repo is my personal site. A UI colleague built a really nice one for himself, and I wanted one too. Since I spend my days finding broken stuff, the joke here is that my site shows the broken stuff off on purpose. There's a section of "oopsies": a button that's escaped its box, a missing image, a missing translation key, `coffee is undefined`… each one tagged like a proper bug ticket.

Below the oopsies are the boring-but-useful bits: the tools I test with, where I've worked, my degree with the Open University, and my certs.

## Why it's on GitHub

- **So Vercel can deploy it.** Vercel watches this repo, so every push to `main` updates the live site.
- **So you can see how it's built.** If you're hiring a QA, the page shouldn't be the only evidence. There are Playwright tests in `tests/` too. Of course there are.

## What's inside

It's pretty much just one page. It uses Next.js because that's what Vercel likes best, but everything is rendered at build time, so what goes out is basically static HTML and CSS.

| File | What it is |
| --- | --- |
| `app/data.ts` | All the content: jobs, tools, certs, jokes. **Edit this to update the site.** |
| `app/page.tsx` | The page itself, including the oopsies |
| `app/globals.css` | Colours, the joke ticker, and the glitch effect |
| `DESIGN.md` | The style rules I stuck to: clean, with a few retro and terminal touches |
| `tests/smoke.spec.ts` | Checks the page loads, the links work, and nothing scrolls sideways by accident. Runs on every push (see the badge) |

## Running it locally

You need Node 20 or newer (I use 22).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # make sure it builds before pushing
npm test         # Playwright smoke tests (run a build first)
```

## Known issues

Yes.
