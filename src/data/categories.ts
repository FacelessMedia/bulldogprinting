import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "stickers",
    name: "Stickers",
    oldUrl: "/product-category/stickers/",
    productSlugs: [
      "roll-labels-stickers",
      "window-clings",
      "wall-stickers",
      "business-card-stickers",
      "adhesive-floor-graphics",
      "bumper-stickers",
      "paper-stickers-vinyl-stickers-foil-stickers-round",
    ],
  },
  {
    slug: "offset-printing",
    name: "Offset Printing",
    oldUrl: "/product-category/offset-printing/",
    productSlugs: [
      "stationary",
      "sales-sheet-flyers-8-5-x-11-text-paper",
      "presentation-folder",
      "product-packaging-boxes",
      "note-pads",
      "ncr-forms",
      "letterhead",
      "large-paper-posters",
      "hang-tags",
      "greeting-cards",
      "event-tickets",
      "door-hanger",
      "catalogues",
      "calendars",
      "post-cards-and-flyers",
      "booklets",
      "10-a4-a5",
    ],
  },
  {
    slug: "signs-and-banners",
    name: "Signs & Banners",
    oldUrl: "/product-category/signs-and-banners/",
    productSlugs: [
      "eddm",
      "acrylic-sign-shapes",
      "acrylic-signs-12-sizes-available",
      "yard-signs-9-shapes-available",
      "one-way-film",
      "backlit-signs",
      "table-top-retractable",
      "table-thow",
      "table-runner",
      "see-thru-vinyl",
      "ploe-flag",
      "large-format-printing",
      "banner-stand-with-banner",
      "13-oz-banners-with-grommets",
      "back-drop-banner-with-stand",
    ],
  },
  {
    slug: "business-cards",
    name: "Business Cards",
    oldUrl: "/product-category/business-cards/",
    productSlugs: [
      "silk-laminated-business-cards",
      "foil-business-cards",
      "magnet-business-cards",
      "natural-business-cards",
      "plastic-business-cards",
      "sticker-business-cards",
      "brown-craft-business-cards",
      "linen-business-cards",
      "suede-business-cards",
      "painted-edge-business-cards",
      "16-point-uv-coated-business-cards",
      "pearl-business-cards",
    ],
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    oldUrl: "/product-category/t-shirts/",
    productSlugs: [
      "white-tee",
      "light-color-tee",
      "dark-color-tee",
      "long-sleeve-tee",
      "gildan-8000-dry-blend",
      "gildan-8800-adult-dryblend-jersey-sport-shirt",
      "augusta-423-adult-short-sleeve-baseball-jersey",
      "crew-neck-sweat-t-shirt",
      "polo",
      "jersey",
    ],
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    oldUrl: "/product-category/hoodies/",
    productSlugs: ["gildan-18500", "hoodies"],
  },
  {
    slug: "tank-tops",
    name: "Tank Tops",
    oldUrl: "/product-category/tank-tops/",
    productSlugs: ["next-level-apparel-6933-racerback-tank", "tank-top"],
  },
  {
    slug: "mugs",
    name: "Mugs",
    oldUrl: "/product-category/mugs/",
    productSlugs: ["mug"],
  },
  {
    slug: "kids-t-shirts",
    name: "Kids T-Shirts",
    oldUrl: "/product-category/kids-t-shirts/",
    productSlugs: ["baby-bib"],
  },
  {
    slug: "promotional",
    name: "Promotional",
    oldUrl: "/product-category/promotional/",
    productSlugs: ["magnetic-signs", "stickers", "flyer", "plyer-distribution"],
  },
  {
    slug: "screen-printing",
    name: "Screen Printing",
    oldUrl: "/product-category/screen-printing/",
    productSlugs: ["side-walk-signs", "banners"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
