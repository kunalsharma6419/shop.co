import { ProductCard } from "../product-card";
import type { Product } from "../product-card";

const suggestions: Product[] = [
  {
    id: "polo-contrast",
    name: "Polo with Contrast Trims",
    image: "/images/products/prod9.png",
    rating: 4.0,
    price: 212,
    originalPrice: 242,
    discount: 20,
  },
  {
    id: "gradient-graphic",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/prod10.png",
    rating: 3.5,
    price: 145,
  },
  {
    id: "polo-tipping",
    name: "Polo with Tipping Details",
    image: "/images/products/prod11.png",
    rating: 4.5,
    price: 180,
  },
  {
    id: "black-striped",
    name: "Black Striped T-shirt",
    image: "/images/products/prod12.png",
    rating: 5.0,
    price: 120,
    originalPrice: 150,
    discount: 30,
  },
];

export function YouMightAlsoLike() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="font-serif font-bold text-[32px] md:text-[48px] text-center mb-8 md:mb-14">
        YOU MIGHT ALSO LIKE
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {suggestions.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
