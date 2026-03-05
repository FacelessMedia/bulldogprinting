import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { categories } from "@/data/categories";
import { products, getProductImage } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const biz = siteConfig.business;
  const featuredProducts = products.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 opacity-95" />
        <div className="absolute inset-0">
          <Image
            src="/images/homepage/IMG_8345.jpg"
            alt="Bulldog Printing Facility"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/branding/logo-icon.png"
                alt="Bulldog Printing"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
                priority
              />
              <Image
                src="/images/branding/dr-logo.png"
                alt="D&R Press"
                width={48}
                height={48}
                className="w-12 h-12 object-contain opacity-60"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {biz.tagline}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Best quality printed t-shirts, mugs &amp; other products for all
              your needs. Do you need Custom T-Shirts, Hoodies, Business Cards,
              Marketing Materials, Custom Mugs, Signs, Banners, Large Format
              printing, Promotional Products, Swag for an event?
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-lg"
              >
                Explore Store
              </Link>
              <a
                href={biz.phoneTel}
                className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
              >
                Call {biz.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <svg
            className="w-5 h-5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="font-medium">Visit our facility:</span>
          <a
            href={biz.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline font-semibold"
          >
            {biz.address.full}
          </a>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
                Who We Are
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted Printing Services Since 1972
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {biz.description} We offer the finest in offset printing,
                digital printing, letterpress printing as well as related
                services. We will take your concept and help you enhance it or
                provide you with fresh ideas.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                Learn More About Us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/homepage/25148269110_b16c6be6b7_o.jpg"
                alt="Bulldog Printing work samples"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-500">
              Browse our full range of printing and garment decorating services
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className="group relative bg-gray-100 rounded-xl p-6 text-center hover:bg-red-50 transition-colors border border-transparent hover:border-red-200"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {cat.productSlugs.length} products
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Products
              </h2>
              <p className="text-gray-500">
                All products available — call for custom pricing
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors"
            >
              View All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "24841271987_2629e763ce_o.jpg",
              "26584771642_66c21f73e7_o-1.jpg",
              "38759489155_b8bbefd31a_o.jpg",
              "25148269110_b16c6be6b7_o.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={`/images/homepage/${img}`}
                  alt={`Bulldog Printing work sample ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href={biz.socialLinks.flickr}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              See More of Our Work →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for a free quote on your custom printing project. We
            handle everything from single items to large commercial orders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={biz.phoneTel}
              className="px-8 py-3.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-lg"
            >
              Call {biz.phone}
            </a>
            <a
              href={`mailto:${biz.email}`}
              className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Email Us
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: biz.name,
            legalName: biz.legalName,
            description: biz.description,
            url: `https://${biz.domain}`,
            telephone: biz.phone,
            email: biz.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: biz.address.street,
              addressLocality: biz.address.city,
              addressRegion: biz.address.state,
              postalCode: biz.address.zip,
              addressCountry: "US",
            },
            image: `https://${biz.domain}/images/branding/logo.png`,
            priceRange: "$$",
            openingHours: "Mo-Fr 09:00-17:00",
            sameAs: [biz.socialLinks.flickr],
          }),
        }}
      />
    </>
  );
}
