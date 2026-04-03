# CLAUDE.md

## Mission
Work on **Rvdobuilds** as a small, premium software studio site.
Optimize for clarity, hierarchy, restraint, and mobile-first polish.

The desired impression is:
**useful software, clear by design**.

## Read first
Before making changes, read:

- `docs/brief.md`
- `docs/sitemap.md`
- `docs/ui-system.md`
- `docs/ux-rules.md`
- `docs/content-model.md`
- `AGENTS.md`

Do not proceed from assumptions if the docs already define the answer.

## Project framing
This site is:
- a studio homepage
- product-led
- calm and premium
- intentionally small

This site is not:
- a developer docs portal
- a dashboard
- a busy portfolio
- a hypey startup landing page
- an agency marketing site

## Priority order
Always preserve this hierarchy:
1. Studio identity
2. Featured product
3. Products
4. Tools
5. About

Products must visually outrank tools.

## Design system instructions
Use the Launchframe-derived palette and rules from `docs/ui-system.md`.
Use the literal tokens defined there as source of truth.

High-level rules:
- dark neutral page background
- charcoal-slate surfaces
- warm ivory primary text
- restrained cool-blue accent only for highlights/focus/active states
- subtle borders, minimal shadow
- slightly more open spacing than Launchframe
- less utility-app chrome than ClaudeCodeKit

Do not make the page read as blue.
Do not overuse nested card layers.
Do not create random one-off visual treatments.

## UX instructions
Follow `docs/ux-rules.md`.

Especially important:
- mobile first
- compact quiet header
- strong hero within a fast first scan
- no redundant repetition that weakens hierarchy
- one clear CTA per card where relevant
- readable secondary text
- no horizontal clipping or awkward mobile overflow

## Content instructions
Follow `docs/content-model.md`.

Rules:
- keep copy concise
- avoid filler and overclaiming
- use literal CTA labels
- keep About short
- keep tools supportive, not dominant

## Implementation approach
For each task:
1. Understand the exact requested scope
2. Check the relevant docs first
3. Reuse existing patterns where possible
4. Make the smallest clean change that solves the task
5. Validate with existing repo scripts if available
6. Report changed files and a short explanation

## Coding behavior
- Be deterministic
- Do not improvise broad redesigns
- Do not change unrelated files
- Do not add dependencies unless necessary
- Do not replace established patterns without reason
- Prefer consistency over local cleverness

## When editing UI
Ask internally:
- Does this improve hierarchy?
- Does this keep products above tools?
- Does this reduce noise?
- Does this remain consistent with the Launchframe-derived system?
- Does this work well on mobile?

If not, revise.

## Validation
Use existing repo scripts when available.
Preferred order:
- `npm run lint`
- `npm run typecheck`
- `npm run build`

If a script does not exist, do not invent one.

## Final response format
Always end with:

OUTPUT:
- changed files listed
- short explanation.
