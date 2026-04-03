# UI System

## Visual direction
Use Launchframe as the direct foundation for the design language.
For Rvdobuilds, keep the same token family and same overall mood, but shift the composition slightly away from "tool UI" and slightly toward "studio homepage".

This means:
- same dark neutral-ink base
- same warm text
- same restrained cool-blue accent
- same subtle border language
- slightly more open section rhythm than Launchframe
- less app-like chrome than ClaudeCodeKit

## Core mood
- dark
- calm
- premium
- clear
- focused
- restrained
- modern

## What this is not
- not a bright SaaS site
- not a docs shell
- not a black-and-neon hacker look
- not a heavily editorial luxury landing page
- not a gradient-heavy startup page

## Source palette
Use these literal base tokens as the default source of truth.
These come from the Launchframe-style `globals.css` palette and should anchor Rvdobuilds.

### Page
- `--color-page: #090a0e`
- `--color-page-elevated: #0c0d12`

### Surfaces
- `--color-surface: #15171e`
- `--color-surface-muted: #16181f`
- `--color-surface-elevated: #181a22`
- `--color-surface-accent: #14161d`
- `--color-surface-nested: #1e222b`
- `--color-surface-nested-deep: #252a34`

### Utility surfaces
- `--color-surface-utility: #030304`
- `--color-surface-utility-alt: #060708`

### Text
- `--color-text: #f3eedf`
- `--color-text-muted: #b6becb`
- `--color-text-eyebrow: #9aa3b2`

### Borders
- `--color-border: #3a414d`
- `--color-border-strong: #4a525f`
- `--color-surface-accent-border: rgba(243, 238, 223, 0.075)`
- `--color-chrome-border: rgba(58, 65, 77, 0.95)`

### Accent
- `--color-accent: #7d9cc9`
- `--color-accent-dim: #6e8eb8`
- `--color-accent-ring: rgba(125, 156, 201, 0.16)`

### CTA
- `--color-cta-dark-bg: #1c1f27`
- `--color-cta-dark-text: #f3eedf`
- `--color-cta-dark-hover: #252932`
- `--color-cta-light-bg: #f1ead9`
- `--color-cta-light-text: #0d1322`
- `--color-cta-light-hover: #e8e0cf`

### Chrome
- `--color-chrome: rgba(12, 13, 17, 0.94)`
- `--color-chrome: rgba(12, 13, 17, 0.94)`

## Tonal rule
Do not make the site look "blue".
The system should read primarily as:
- deep ink
- charcoal-slate
- warm ivory text
- small cool-blue highlights

The blue accent is not the brand background.
It is a controlled highlight.

## Role mapping for Rvdobuilds
### Page background
Use `#090a0e` as the default page field.
Use `#0c0d12` sparingly for elevated bands or subtle page sections.

### Cards and sections
Use `#15171e`, `#16181f`, and `#181a22` as the main surface family.
These should carry most cards, sections, and grouped content.

### Nested surfaces
Use `#1e222b` and `#252a34` for:
- inset panels
- meta rows
- compact internal grouping
- highlighted product or tool sub-areas

Do not overuse nested layering.
Rvdobuilds should feel slightly cleaner than Launchframe.

### Accent usage
Use `#7d9cc9` and `#6e8eb8` for:
- active nav state
- focus state
- selected chips or pills when needed
- quiet text links
- minimal decorative emphasis

Do not use accent fills broadly across the page.
Do not tint entire sections blue.

## Layout direction
Rvdobuilds is a studio homepage, not a dense workbench.
Compared with Launchframe:
- keep the same card discipline
- keep the same dark palette
- add slightly more breathing room between sections
- reduce repeated container-inside-container patterns
- simplify where content is straightforward

## Typography
Use a clear, modern sans-serif.
No ornate display type.
No fragile luxury typography.

### Heading style
- strong
- simple
- high contrast
- large enough to anchor sections without feeling like campaign advertising

### Body style
- readable
- calm
- medium contrast against dark surfaces
- slightly warmer than a cold tech UI

### Eyebrows and labels
Use `#9aa3b2`.
Keep them uppercase only where they help rhythm.
Spacing should feel deliberate, not noisy.

## Spacing rhythm
### General principle
Use more openness than Launchframe, but not an airy marketing-page layout.

### Recommended section rhythm
- compact header
- strong hero with disciplined max width
- generous spacing between major sections
- tighter spacing within cards

### Card rhythm
- cards should feel substantial, not tiny
- avoid excessive dead space inside cards
- one clear primary action per card

## Radius
Use medium rounded corners.
Keep the current soft premium shape language.
Do not turn the entire site into pills.

Recommended rule of thumb:
- major cards: 24px to 32px equivalent feel
- buttons and inputs: clearly rounded, but not bubble-like

## Borders
Borders are important in this system.
They create material separation.
Use them quietly and consistently.

Rules:
- prefer subtle border definition over obvious shadows
- avoid stacking too many bordered containers inside each other
- if a section already has a strong outer card, simplify inner items where possible

## Shadows
Very subtle only.
No glow.
No dramatic floating cards.
If borders and tonal separation work, shadow can stay minimal.

## Buttons
### Primary CTA
Use either:
- dark CTA surface: `#1c1f27` with `#f3eedf`
- light CTA surface: `#f1ead9` with `#0d1322`

For Rvdobuilds, default to the dark CTA unless there is a strong reason to create a hero highlight.
Use the light CTA sparingly.

### Button rules
- strong text contrast always
- no weak ghost-button look for primary actions
- consistent CTA treatment across hero, featured, products, and tools
- avoid full-width buttons unless the layout specifically needs them on mobile

## Links
Inline links may use `#7d9cc9`, but they should still feel quiet.
Do not make the site look link-heavy.

## Product cards
Product cards are the highest-value recurring component.
They should feel:
- clear
- substantial
- premium
- more important than tool cards

Each product card should include:
- title
- short description
- status or availability if relevant
- one primary CTA

## Tool cards
Tool cards use the same family, but with less weight than product cards.
They should support the studio story, not dominate it.

## Do not do
- blue-on-blue-on-blue backgrounds
- repeated heavy outlines at every layer
- multiple competing accent treatments in one viewport
- oversized hero chrome
- duplicated featured and product content without purpose
- inconsistent CTA styles between sections
