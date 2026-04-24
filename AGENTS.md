# AGENTS.md

## Project shape
- This is a single-package Next.js App Router portfolio site (not a monorepo).
- Route entrypoints are in `app/`: `/` (`app/page.tsx`), `/careers`, `/education`, `/projects`.
- Shared primitives are in `components/ui/`; page/section components are in `components/home/` and root `components/`.

## Commands (source of truth: `package.json`)
- Install deps: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`
- Start built app: `npm run start`

## Verification expectations
- There is no `test` script and no standalone `typecheck` script.
- Use `npm run lint` for quick checks.
- Use `npm run build` as the closest full-project verification (includes Next/TS validation).

## Tooling quirks that are easy to miss
- Package manager flow should be npm (`package-lock.json` exists; no other active lockfile).
- Tailwind is v4 style via `@import` in `app/globals.css`; there is no `tailwind.config.*` file.
- shadcn config lives in `components.json` (`radix-lyra`, Hugeicons, aliases like `@/components`, `@/components/ui`, `@/lib`).
- Use `cn()` from `lib/utils.ts` for class merging.

## Theme/layout gotchas
- Global theming is wired in `app/layout.tsx` through `components/theme-provider.tsx` (`next-themes`).
- Theme-interactive components must be client components (`"use client"`) like `components/ThemeSwitcher.tsx`.
- Fixed social/contact rails are implemented by `components/side-links.tsx` and `components/contact.tsx`; keep mobile+desktop variants consistent.
- Secondary pages currently force dark mode at page root (`className="dark min-h-screen bg-background text-foreground"`).

## Content/source-of-truth notes
- Portfolio content is hardcoded in route/component files (not CMS/data-driven).
- Resume links in `components/contact.tsx` must match actual files in `public/`.
