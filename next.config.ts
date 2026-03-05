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
      // Old WooCommerce category redirects
      { source: "/product-category/:slug", destination: "/shop/:slug", permanent: true },
      // Old WooCommerce product redirects
      { source: "/product/:slug", destination: "/product/:slug", permanent: false },
      // Catch broken cart/checkout pages
      { source: "/cart", destination: "/shop", permanent: true },
      { source: "/checkout", destination: "/shop", permanent: true },
    ];
  },
};

export default nextConfig;
