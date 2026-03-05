import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug, getAllCategorySlugs } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `Browse ${category.name} products from Bulldog Printing. Call for custom pricing.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(slug);

  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/shop" className="hover:text-white transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-gray-300">
            {categoryProducts.length} products — Call for custom pricing
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/shop"
              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  cat.slug === slug
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {cat.name} ({cat.productSlugs.length})
              </Link>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {categoryProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg">No products found in this category.</p>
              <Link
                href="/shop"
                className="mt-4 inline-block text-red-600 font-medium hover:text-red-700"
              >
                Browse all products →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
