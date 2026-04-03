# AGENTS.md

## Purpose
This repository is the public site for **Rvdobuilds**.
It should present a small software studio with calm premium taste, clear hierarchy, and minimal noise.

This is **not** a dashboard, docs shell, blog-first site, or agency site.
Do not drift the UI toward app chrome or developer-tool styling.

## Source of truth
Use these files as the product and design brief for any work in this repo:

- `docs/brief.md`
- `docs/sitemap.md`
- `docs/ui-system.md`
- `docs/ux-rules.md`
- `docs/content-model.md`

If implementation and docs conflict:
- preserve working behavior unless the task is explicitly a redesign
- treat `docs/ui-system.md` as the source of truth for color and visual system direction
- treat `docs/ux-rules.md` as the source of truth for hierarchy, consistency, and mobile behavior

## Non-negotiable product rules
- Rvdobuilds is a **studio site**, not a generic personal portfolio
- Products must visually outrank tools
- Keep the site small and intentional
- The homepage is the primary surface
- Every section must earn its height
- Avoid duplication that weakens emphasis
- Prefer clarity and restraint over novelty

## Visual rules
Follow `docs/ui-system.md` exactly.

Key design constraints:
- Use the Launchframe-derived color system
- Keep the page dark, neutral, calm, and premium
- Do **not** make the site look blue overall
- Use accent blue sparingly for active/focus/highlight states
- Keep text warm and readable
- Prefer subtle borders over heavy shadows
- Avoid repeated nested bordered containers unless necessary
- Reduce app-like chrome compared to ClaudeCodeKit
- Keep more openness than Launchframe, but do not turn this into airy SaaS marketing

## UX rules
Follow `docs/ux-rules.md` exactly.

Key interaction constraints:
- Design mobile first
- Keep the header compact and quiet
- Keep hierarchy obvious in every viewport
- Use one clear primary CTA per card/section where relevant
- Keep CTA treatment consistent across hero, featured, products, and tools
- Never allow tools to visually compete with featured products
- Avoid horizontal clipping and awkward mobile overflow
- Do not rely on hover for critical meaning or actions

## Content rules
Follow `docs/content-model.md` and `docs/sitemap.md`.

Content constraints:
- Keep copy short, direct, and credible
- Avoid generic marketing filler
- Avoid long personal biography sections
- Prefer one strong featured product over multiple diluted highlights
- Product cards should feel more substantial than tool cards
- Do not add routes unless they create clear value

## Implementation style
- Make the smallest clean change that fully solves the task
- Reuse existing patterns before inventing new ones
- Keep component APIs simple
- Keep layout logic easy to reason about
- Avoid adding dependencies unless clearly needed
- Avoid one-off styling exceptions unless they are justified by hierarchy

## Refactor discipline
When changing UI:
- preserve the existing design language unless the task explicitly changes it
- improve consistency instead of introducing a new local pattern
- fix root causes where reasonable
- do not silently redesign unrelated sections

When changing copy/content structure:
- keep the public tone calm, direct, and restrained
- do not add hype, buzzwords, or startup clichés

## Validation
Before finishing:
- run the repo's existing validation commands if available
- prefer existing scripts over ad hoc commands
- do not introduce new scripts unless explicitly asked

Recommended validation order if scripts exist:
- `npm run lint`
- `npm run typecheck`
- `npm run build`

If a command is missing, do not invent it.
Use the scripts already defined by the repo.

## Output requirements
When making changes, end with:

OUTPUT:
- changed files listed
- short explanation.

## Do not do
- Do not turn the site into a docs app shell
- Do not introduce bright accent-heavy sections
- Do not make tools feel more important than products
- Do not duplicate featured content without a clear reason
- Do not mix CTA styles randomly
- Do not add decorative sections with little informational value
- Do not overcomplicate the route structure
- Do not make broad unrelated visual changes outside the requested scope
