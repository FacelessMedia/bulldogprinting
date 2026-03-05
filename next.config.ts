import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Old WordPress page redirects
      { source: "/checkout-2", destination: "/shop", permanent: true },
      { source: "/store", destination: "/shop", permanent: true },
      { source: "/store-2", destination: "/shop", permanent: true },
      { source: "/home-3", destination: "/", permanent: true },
      { source: "/home-3/:path*", destination: "/", permanent: true },
      { source: "/contact-us-2", destination: "/contact", permanent: true },
      { source: "/privacy-policy-2", destination: "/privacy-policy", permanent: true },
      { source: "/price-quote", destination: "/contact", permanent: true },
      { source: "/design-now", destination: "/shop", permanent: true },
      { source: "/marketplace", destination: "/shop", permanent: true },
      { source: "/chicagoflyerdistribution-home", destination: "/", permanent: true },
      { source: "/design-templates", destination: "/shop", permanent: true },
      { source: "/preview-design", destination: "/shop", permanent: true },
      { source: "/design-preview", destination: "/shop", permanent: true },
      { source: "/invoice", destination: "/contact", permanent: true },
      // Old WooCommerce category redirects
      { source: "/product-category/:slug", destination: "/shop/:slug", permanent: true },
      // Catch broken cart/checkout pages
      { source: "/cart", destination: "/shop", permanent: true },
      { source: "/checkout", destination: "/shop", permanent: true },
    ];
  },
};

export default nextConfig;
