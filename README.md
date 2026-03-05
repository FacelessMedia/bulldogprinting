# Bulldog Printing — bulldogprinting.com

Modern website for Bulldog Printing (D&R Press), migrated from WordPress/WooCommerce to Next.js.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Deployment:** Vercel CLI (auto-deploy from `main` branch)
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── contact/            # Contact page with form
│   ├── shop/               # Shop (all products) + [category] pages
│   ├── product/[slug]/     # Product detail pages (77 products)
│   ├── privacy-policy/     # Privacy Policy
│   ├── terms-and-conditions/
│   ├── the-local-project/
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # robots.txt
│   └── layout.tsx          # Root layout with Header/Footer
├── components/             # Reusable components
│   ├── Header.tsx          # Sticky header with mega menu
│   ├── Footer.tsx          # Full footer with links
│   └── ProductCard.tsx     # Product grid card
└── data/                   # Static data layer
    ├── site-config.ts      # Business info, nav, branding
    ├── products.ts         # 77 products with helpers
    ├── categories.ts       # 11 product categories
    └── types.ts            # TypeScript interfaces
public/images/              # All images from original site
├── branding/               # Logo, favicon, icons
├── homepage/               # Hero and gallery images
├── about/                  # About page images
└── products/               # 77 product images
```

## Key Features

- **77 Products** across 11 categories — all "Call for Pricing"
- **JSON-LD Schema** on homepage (LocalBusiness) and product pages (Product)
- **301 Redirects** for all old WordPress/WooCommerce URLs
- **Auto-generated sitemap.xml** and robots.txt
- **Responsive** — mobile-first with mega menu navigation
- **Static Generation** — all 98 pages pre-rendered at build time

## Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deploys on push to `main`.

## Business Info

- **Phone:** 773-866-1579
- **Email:** orders@bulldogprinting.com
- **Address:** 1723 N. 25th Avenue, Unit 1, Melrose Park, IL 60160
- **Parent Company:** D&R Press (since 1972)
