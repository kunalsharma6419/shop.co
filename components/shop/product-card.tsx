import Image from "next/image";
import Link from "next/link";
import { StarRating } from "./star-rating";

export interface Product {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: number;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="bg-secondary rounded-2xl overflow-hidden aspect-square relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover object-top group-hover:scale-105 h-auto transition-transform duration-300"
        />
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-sm md:text-base leading-tight">
          {product.name}
        </h3>
        <div className="mt-1.5">
          <StarRating rating={product.rating} />
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="font-bold text-lg md:text-xl">${product.price}</span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-lg md:text-xl">
              ${product.originalPrice}
            </span>
          )}
          {product.discount && (
            <span className="bg-red-50 text-red-500 text-xs font-medium rounded-full px-2 py-0.5">
              -{product.discount}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
