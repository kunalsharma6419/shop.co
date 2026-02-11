import Link from "next/link";
import { ProductCard } from "../product-card";
import type { Product } from "../product-card";

const topSelling: Product[] = [
  {
    id: "vertical-striped",
    name: "Vertical Striped Shirt",
    image: "/images/products/prod5.png",
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discount: 20,
  },
  {
    id: "courage-graphic",
    name: "Courage Graphic T-shirt",
    image: "/images/products/prod6.png",
    rating: 4.0,
    price: 145,
  },
  {
    id: "bermuda-shorts",
    name: "Loose Fit Bermuda Shorts",
    image: "/images/products/prod7.png",
    rating: 3.0,
    price: 80,
  },
  {
    id: "faded-skinny",
    name: "Faded Skinny Jeans",
    image: "/images/products/prod8.png",
    rating: 4.5,
    price: 210,
  },
];

export function TopSelling() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 border-t border-border">
      <h2 className="font-serif font-bold text-[32px] md:text-[48px] text-center">
        TOP SELLING
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-8 md:mt-14">
        {topSelling.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/category"
          className="inline-block border border-border rounded-full px-14 py-3 text-sm font-medium hover:bg-secondary transition-colors"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
