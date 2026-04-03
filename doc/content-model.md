# Content Model

## Purpose
This model defines the content objects needed to run Rvdobuilds as a small studio site.
Keep the model lean.
Only add new content types when they clearly reduce friction or repetition.

## Content types
### 1. Site settings
Used for global site-level content and metadata.

Fields:
- siteName
- siteTitle
- siteDescription
- defaultOgTitle
- defaultOgDescription
- navLinks
- footerLinks
- socialLinks

### 2. Hero
Single object for the homepage hero.

Fields:
- eyebrow
- headline
- supportingText
- primaryCtaLabel
- primaryCtaHref
- secondaryCtaLabel
- secondaryCtaHref

Rules:
- supportingText should stay short
- no more than two CTAs
- secondary CTA is optional

### 3. Featured item
Single curated object for the homepage featured block.
Usually references a product.

Fields:
- type (`product` or `tool`)
- referenceSlug
- customEyebrow
- customHeadline
- customDescription
- ctaLabel
- ctaHref

Rules:
- default to one featured item only
- prefer a product over a tool

### 4. Product
Core commercial or flagship software item.

Fields:
- slug
- name
- shortDescription
- longDescription
- status
- availabilityLabel
- ctaLabel
- ctaHref
- secondaryCtaLabel
- secondaryCtaHref
- platform
- isFeaturedCandidate
- sortOrder

Recommended status values:
- live
- testflight
- in-progress
- coming-soon
- archived

Rules:
- shortDescription must be one concise sentence
- cards should usually use shortDescription, not longDescription
- `ctaHref` may point internally or externally

### 5. Tool
Supporting tool, workflow asset, or public reference.

Fields:
- slug
- name
- shortDescription
- status
- ctaLabel
- ctaHref
- category
- sortOrder

Recommended category values:
- workflow
- reference
- toolkit
- internal-tool-public

Rules:
- tools must not carry more visual weight than products or games on the homepage
- keep descriptions practical and short

### 6. Game
First-class studio game or interactive release.

Fields:
- slug
- name
- shortDescription
- ctaLabel
- ctaHref
- sortOrder

Rules:
- shortDescription must be one concise sentence
- game cards should feel closer to product cards than tool cards, without breaking the calm premium tone

### 7. About block
Short studio/about content.

Fields:
- eyebrow
- heading
- body
- optionalCtaLabel
- optionalCtaHref

Rules:
- keep body tight
- one short paragraph is usually enough

## Optional future content types
Only add these if needed.

### Product detail page
If product pages move in-site rather than linking out.

Extra fields:
- heroImage
- keyPoints
- screenshots
- faq
- changelogLink

### Tool detail page
If tools need their own explanation pages.

Extra fields:
- problem
- whoItsFor
- keySections
- outboundLinks

## Homepage assembly order
Use this order:
1. Hero
2. Featured item (optional; omit if redundant with Products)
3. Products list
4. Games list
5. Tools list
6. About block

## Display logic
### Product visibility
Show products on the homepage when:
- status is not archived
- a valid title and description exist
- there is either a CTA or a clear status state

### Tool visibility
Show tools on the homepage when:
- they are publicly accessible or intentionally listed
- the content is mature enough to represent the studio well

### Game visibility
Show games on the homepage when:
- they are publicly accessible or intentionally listed
- the release is mature enough to represent the studio well

### Featured logic
If a featured item exists, it must appear before the products list.
If the featured item is also in the main products list, avoid making the later card feel redundant.

## CTA logic
CTA labels should stay literal.
Preferred patterns:
- Visit product
- View product
- Open game
- Open tool
- Read guide
- Join waitlist
- Coming soon

Avoid vague CTA labels.

## Naming rules
- Use short, clear names
- Avoid internal jargon in public-facing labels
- Keep descriptions plain and credible

## Maintenance rule
The content model must stay small enough that the site remains easy to maintain without a CMS-heavy mindset.
When in doubt, prefer one flexible object less over one extra object more.
