# Sitemap

## Recommended structure
Rvdobuilds should stay small.
Do not add pages unless they create clear value.
The default structure should be a strong one-page homepage with optional detail pages for products and tools.

## Top-level routes
`/`
Homepage. Primary studio landing page.

`/products`
Optional overview page for all products if the list grows beyond what the homepage can carry cleanly.

`/tools`
Optional overview page for public tools, workflow assets, and references.

`/about`
Optional short studio/about page only if the homepage can no longer carry the story cleanly.

## Current best recommendation
For now, optimize for this:
- keep `/` as the primary page
- allow product cards and tool cards to link out directly
- only introduce `/products` or `/tools` when the content volume actually requires it

## Homepage structure
### 1. Header
Contains:
- wordmark / site name
- primary nav links: Products, Tools, About

Header behavior:
- calm
- compact
- fixed or sticky only if it stays visually quiet
- no oversized top-bar chrome

### 2. Hero
Purpose:
- immediately explain the studio
- establish tone and visual confidence
- give a clear next action

Hero content:
- eyebrow
- headline
- short supporting copy
- one primary CTA
- optional secondary CTA only if it adds real value

### 3. Featured
Purpose:
- give the strongest current product extra weight
- create immediate credibility

Rules:
- only one featured block by default
- if multiple featured items exist, keep the section tightly curated
- do not repeat the same product immediately again in a way that weakens emphasis

### 4. Products
Purpose:
- show the active product set
- make each product feel intentional and real

Structure:
- simple stacked cards on mobile
- grid only when screen width allows
- each card includes title, short description, status, and CTA state

### 5. Tools
Purpose:
- show supporting software tools, references, or workflow assets
- these sit below products in hierarchy

Structure:
- lighter-weight than product cards
- still coherent with the same system

### 6. About
Purpose:
- briefly explain the point of view behind the work
- reinforce clarity, simplicity, and useful software

Rules:
- keep short
- no long biography
- no résumé-style chronology

### 7. Footer
Contains:
- site name
- small external links if needed
- minimal legal / utility links only if necessary

Do not add filler footer content.

## Future page model
If the site expands, use this route shape:

`/`
Studio homepage

`/products`
Overview of all products

`/products/spend-meter`
Product detail or outbound landing link

`/products/homereps`
Product detail or waitlist/info page

`/tools`
Overview of workflow and utility projects

`/tools/launchframe`
Tool detail or outbound link

`/tools/mobile-dev-workflow`
Tool detail or outbound link

`/tools/claudecodekit`
Tool detail or outbound link

`/about`
Short studio/about page

## Navigation rules
- Keep nav labels short and literal
- Use Products before Tools
- Never let Tools visually outrank Products
- Avoid adding Blog, Notes, Writing, Experiments, or Contact unless they are truly needed
- Keep the path structure obvious and low-maintenance
