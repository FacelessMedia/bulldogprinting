export interface Product {
  slug: string;
  name: string;
  category: string;
  oldUrl: string;
  description: string;
  image: string | null;
  variants: {
    colors?: string[];
    sizes?: string[];
  };
}

export interface Category {
  slug: string;
  name: string;
  oldUrl: string;
  productSlugs: string[];
}
