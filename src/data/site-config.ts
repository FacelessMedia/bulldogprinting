export const siteConfig = {
  business: {
    name: "Bulldog Printing",
    legalName: "D&R Press",
    tagline: "Custom Garment Decorating and Complete Printing Services",
    description:
      "Since 1972, D&R Press has been providing the best printing services to our customers locally, nationally and internationally.",
    phone: "773-866-1579",
    phoneFormatted: "(773) 866-1579",
    phoneTel: "tel:+17738661579",
    phoneSecondary: "708-343-0500",
    email: "orders@bulldogprinting.com",
    address: {
      street: "1723 N. 25th Avenue, Unit 1",
      city: "Melrose Park",
      state: "IL",
      zip: "60160",
      full: "1723 N. 25th Avenue, Unit 1, Melrose Park, IL 60160",
      googleMapsUrl:
        "https://www.google.com/maps/dir//1723+25th+Ave,+Melrose+Park,+IL+60160/@41.9048752,-87.946359,12z",
    },
    parentCompany: {
      name: "D&R Press",
      url: "https://dandrpress.com/",
      foundedYear: 1972,
    },
    socialLinks: {
      flickr: "https://www.flickr.com/photos/126983481@N02/albums/",
    },
    domain: "bulldogprinting.com",
  },
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Shop", href: "/shop" },
      { label: "Contact", href: "/contact" },
    ],
    categories: [
      { label: "T-Shirts", href: "/shop/t-shirts" },
      { label: "Hoodies", href: "/shop/hoodies" },
      { label: "Tank Tops", href: "/shop/tank-tops" },
      { label: "Business Cards", href: "/shop/business-cards" },
      { label: "Stickers", href: "/shop/stickers" },
      { label: "Signs & Banners", href: "/shop/signs-and-banners" },
      { label: "Offset Printing", href: "/shop/offset-printing" },
      { label: "Promotional", href: "/shop/promotional" },
      { label: "Screen Printing", href: "/shop/screen-printing" },
      { label: "Mugs", href: "/shop/mugs" },
      { label: "Kids T-Shirts", href: "/shop/kids-t-shirts" },
    ],
    footer: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
} as const;
