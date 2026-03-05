import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse all 77 products from Bulldog Printing. Custom t-shirts, business cards, signs, banners, stickers, and more. Call for pricing.",
};

export default function ShopPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-xl text-gray-300">
            Showing {products.length} products — All items available, call for
            custom pricing
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/shop"
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-full"
            >
              All ({products.length})
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                {cat.name} ({cat.productSlugs.length})
              </Link>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
