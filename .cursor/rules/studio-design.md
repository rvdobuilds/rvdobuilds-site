---
description: RvdoBuilds Studio design system — strict UI system
alwaysApply: true
---

# RvdoBuilds Studio Design Rules

Non-negotiable. All UI work must follow this system.

---

## PROJECT CONTEXT

- Framework: Next.js App Router (`/app`)
- Deployment: Vercel
- Dependencies: Minimal. No heavy UI libraries.
- Tone: Studio / holding company. Professional, restrained. Not a personal blog.

---

## CORE PRINCIPLES

- Dark theme only. Never introduce light theme.
- One accent color only.
- Calm, premium, minimal.
- No visual noise.
- Prefer consistency over creativity.

---

### DESIGN SYSTEM PROTECTION

- Never delete, rename, or modify design tokens without explicit user approval.
- Never introduce a second accent color.
- Never switch to light theme.
- Never remove shared UI components (Button, Section, ProductCard) without approval.
- If a change conflicts with this system, ask before proceeding.

---

## DESIGN SYSTEM (TOKENS — MUST BE IMPLEMENTED)

### Colors (never hardcode hex values inside components)

Background: #0E1116  
Section bg: #12161C  
Card bg: #161B22  
Text: #E6EAF0  
Muted text: #9AA4B2  
Accent: #1F7A5C  
Accent hover: #259A73  
Border subtle: rgba(255,255,255,0.06)

### Token Implementation Rules

If Tailwind exists:
- Extend theme in tailwind.config
- Use semantic tokens (bg-bg, text-muted, etc.)

If Tailwind does not exist:
- Define CSS variables in :root
- Use variables everywhere

Never hardcode hex values inside components.

---

## LAYOUT RULES

Max content width: 1100px  
Horizontal padding: 24px  
Section vertical padding: ~96px desktop, ~64px mobile  
Grid gap: consistent (16–24px)

Hero may use ONE subtle radial glow:
radial-gradient(circle at 50% 30%, rgba(31,122,92,0.18), transparent 60%)

No other gradients allowed.

---

## COMPONENT RULES

All pages must use shared Section/container wrapper.

Buttons:
- Must use shared Button component.
- Variants allowed: primary (accent solid) or ghost (subtle border).
- No ad-hoc buttons.

Product cards:
- Must use shared ProductCard component.
- Subtle border only.
- No heavy shadows.

Navbar:
- Minimal.
- Left: RvdoBuilds.
- Right: Products, Thesis.
- No clutter.
- No bright backgrounds.

Styling:
- No inline styles unless unavoidable.
- No animation libraries.
- Subtle hover only (color shift, slight background shift).

---

## TYPOGRAPHY

- One H1 per page.
- Clear hierarchy.
- No oversized marketing headlines.
- Studio tone.

---

## HOMEPAGE STRUCTURE (REFERENCE)

Hero  
Products section  
Short Thesis preview  

Keep structure focused. No long personal story above products.

---

## OUTPUT RULES FOR AGENT TASKS

When making UI or design changes:

1. Return:
   - CHANGED FILES
   - NEW FILES
   - FULL CODE (complete contents)

2. Run:
   - npm run build
   - Fix errors before finishing

Never partially implement the system.
Prefer refactoring to maintain consistency.