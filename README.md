# osguild_client

A rebuild of the supabase.com homepage in React + Vite, as a front-end exercise.

> **Local only.** The page carries Supabase's own copy and branding, so it is a
> clone for study and review — not something to deploy or publish anywhere public.

## What differs from the original, on purpose

The layout, section order, copy and interaction patterns follow the original
closely, including decisions that are arguably flaws: the framework tabs are
icon-only, the testimonial wall fades its edge columns to near-unreadable, the
template thumbnails are grey wireframes, and the secondary text ramp is low
contrast. Those are reproduced, not fixed.

Four things were layered on top by request:

| | |
| --- | --- |
| **Monochrome theming** | The green accent becomes pure white (dark) / near-black (light). Both themes live in `src/styles/tokens.css` and nowhere else. |
| **Theme button** | In the nav bar, showing the theme it switches *to*. |
| **Source Code Pro** | Carries the whole page, display headlines included. |
| **Motion** | Scroll reveals, a marquee, a sliding tab marker, hover lift, hero entrance — all behind `prefers-reduced-motion`. |

Accessibility work that changes no pixels is included regardless: real
`tablist`/`tab`/`tabpanel` semantics with arrow-key navigation, accessible names
on the icon-only tabs, a visually-hidden label on the newsletter field, and a
pause control on the scrolling testimonial wall.

## Layout

```
src/
  styles/       tokens (both themes), reset, type scale
  lib/          cn, a small syntax tokeniser for the code samples
  hooks/        theme, scroll reveal, reduced motion, scroll position, clipboard
  components/
    primitives/ Button, Reveal, Tabs, Marquee, CodeBlock, DotMatrix, RichText
    layout/     Navbar, ThemeToggle, Footer
    sections/   one file per page section, top to bottom
    icons/      inline SVG: UI glyphs, product marks, framework marks
  data/         all page copy and mock content
```

Each component imports a sibling `.css` file. Copy lives in `src/data`, so
content edits never touch JSX. **No dependencies beyond React and Vite** — the
tabs, marquee, reveal, highlighter and dot-matrix digits are all hand-rolled.

Two notes for reviewers:

- The dashboard section is rebuilt in real DOM rather than shipped as a
  screenshot, so it themes, stays sharp and reflows.
- The logo wall renders typeset wordmarks, not the companies' real vector logos.
  Swapping in real SVGs touches `src/data/companies.ts` and `LogoWall` only.

## Conventions

- React Compiler is on, so **do not** hand-write `useMemo` / `useCallback` / `memo`.
- `verbatimModuleSyntax` is on: type imports need `import type`.
- `erasableSyntaxOnly` is on: no `enum`, no parameter properties.
- `noUnusedLocals` / `noUnusedParameters` fail the build, not just the linter.

## Scripts

```bash
pnpm dev      # dev server
pnpm build    # tsc -b && vite build
pnpm lint     # eslint
pnpm preview  # serve the production build
```
