import type { Product } from "./types";
import productsData from "./products-clean.json";

export const products: Product[] = productsData as Product[];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getProductImage(product: Product): string {
  if (product.image) {
    return `/images/products/${product.image}`;
  }
  return "/images/branding/logo-icon.png";
}
