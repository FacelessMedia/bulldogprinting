import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/types";
import { getProductImage } from "@/data/products";
import { siteConfig } from "@/data/site-config";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageSrc = getProductImage(product);

  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square bg-gray-50 relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-600 rounded-full capitalize">
              {product.category.replace(/-/g, " ")}
            </span>
          </div>
        </div>
        <div className="p-4 pb-2">
          <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          {product.description && (
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>
      </Link>
      <div className="px-4 pb-4">
        <a
          href={siteConfig.business.phoneTel}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call for Pricing
        </a>
      </div>
    </div>
  );
}
