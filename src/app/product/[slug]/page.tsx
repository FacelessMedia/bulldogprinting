import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProductSlugs,
  getProductImage,
  getProductsByCategory,
} from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { siteConfig } from "@/data/site-config";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description:
      product.description ||
      `${product.name} from Bulldog Printing. Call ${siteConfig.business.phone} for pricing.`,
    openGraph: {
      images: product.image
        ? [`/images/products/${product.image}`]
        : ["/images/branding/logo-icon.png"],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const biz = siteConfig.business;
  const category = getCategoryBySlug(product.category);
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);
  const imageSrc = getProductImage(product);

  return (
    <>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-red-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-red-600 transition-colors">
              Shop
            </Link>
            {category && (
              <>
                <span>/</span>
                <Link
                  href={`/shop/${category.slug}`}
                  className="hover:text-red-600 transition-colors"
                >
                  {category.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
              <Image
                src={imageSrc}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Product Info */}
            <div>
              {category && (
                <Link
                  href={`/shop/${category.slug}`}
                  className="inline-block px-3 py-1 bg-red-50 text-red-600 text-sm font-medium rounded-full mb-4 hover:bg-red-100 transition-colors"
                >
                  {category.name}
                </Link>
              )}

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {product.description && (
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
              )}

              {/* Variants */}
              {product.variants.colors && product.variants.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                    Available Colors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.colors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.variants.sizes && product.variants.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                    Available Sizes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mt-8">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Interested in this product?
                </p>
                <p className="text-gray-600 mb-6">
                  Contact us for custom pricing, bulk orders, and design
                  assistance.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={biz.phoneTel}
                    className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call {biz.phone}
                  </a>
                  <a
                    href={`mailto:${biz.email}?subject=Quote Request: ${product.name}`}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-red-300 hover:text-red-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email for Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description:
              product.description ||
              `${product.name} from Bulldog Printing`,
            image: `https://${biz.domain}${imageSrc}`,
            brand: {
              "@type": "Brand",
              name: "Bulldog Printing",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
              price: "0",
              priceValidUntil: "2027-12-31",
              url: `https://${biz.domain}/product/${product.slug}`,
              seller: {
                "@type": "Organization",
                name: biz.name,
              },
            },
            category: category?.name,
          }),
        }}
      />
    </>
  );
}
