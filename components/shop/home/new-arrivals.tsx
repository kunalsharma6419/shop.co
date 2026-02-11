import Link from "next/link";
import { ProductCard } from "../product-card";
import type { Product } from "../product-card";

const newArrivals: Product[] = [
  {
    id: "tshirt-tape",
    name: "T-shirt with Tape Details",
    image: "/images/products/prod1.png",
    rating: 4.5,
    price: 120,
  },
  {
    id: "skinny-jeans",
    name: "Skinny Fit Jeans",
    image: "/images/products/prod2.png",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: "checkered-shirt",
    name: "Checkered Shirt",
    image: "/images/products/prod3.png",
    rating: 4.5,
    price: 180,
  },
  {
    id: "sleeve-striped",
    name: "Sleeve Striped T-shirt",
    image: "/images/products/prod4.png",
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30,
  },
];

export function NewArrivals() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
      <h2 className="font-serif font-bold text-[32px] md:text-[48px] text-center">
        NEW ARRIVALS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-8 md:mt-14">
        {newArrivals.map((product) => (
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
