"use client";

import { useState } from "react";
import Image from "next/image";
import { StarRating } from "../star-rating";
import { Minus, Plus } from "lucide-react";

const productData: Record<
  string,
  {
    name: string;
    rating: number;
    price: number;
    originalPrice?: number;
    discount?: number;
    description: string;
    images: string[];
    colors: string[];
    sizes: string[];
  }
> = {
  "one-life-graphic": {
    name: "ONE LIFE GRAPHIC T-SHIRT",
    rating: 4.5,
    price: 260,
    originalPrice: 300,
    discount: 40,
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/images/products/proddetail1.png",
      "/images/products/proddetail2.png",
      "/images/products/proddetail3.png",
    ],
    colors: ["#4F4631", "#314F4A", "#31344F"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
};

const defaultProduct = {
  name: "ONE LIFE GRAPHIC T-SHIRT",
  rating: 4.5,
  price: 260,
  originalPrice: 300,
  discount: 40,
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  images: [
    "/images/products/proddetail1.png",
    "/images/products/proddetail2.png",
    "/images/products/proddetail3.png",
  ],
  colors: ["#4F4631", "#314F4A", "#31344F"],
  sizes: ["Small", "Medium", "Large", "X-Large"],
};

export function ProductDetail({ productId }: { productId: string }) {
  const product = productData[productId] || defaultProduct;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 pb-10">
      {/* Image gallery */}
      <div className="flex flex-col-reverse md:flex-row gap-3 lg:w-1/2">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0 border-2 ${
                selectedImage === i ? "border-foreground" : "border-transparent"
              }`}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`${product.name} thumbnail ${i + 1}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div className="flex-1 bg-secondary rounded-2xl overflow-hidden aspect-square relative">
          <Image
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Product info */}
      <div className="lg:w-1/2">
        <h1 className="font-serif font-bold text-2xl md:text-[40px] leading-tight">
          {product.name}
        </h1>

        <div className="mt-3">
          <StarRating rating={product.rating} />
        </div>

        <div className="flex items-center gap-3 mt-3">
          <span className="font-bold text-2xl md:text-[32px]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-2xl md:text-[32px]">
              ${product.originalPrice}
            </span>
          )}
          {product.discount && (
            <span className="bg-red-50 text-red-500 text-sm font-medium rounded-full px-3 py-1">
              -{product.discount}%
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
          {product.description}
        </p>

        <div className="border-t border-border mt-5 pt-5">
          <h4 className="text-sm text-muted-foreground mb-3">Select Colors</h4>
          <div className="flex items-center gap-3">
            {product.colors.map((color, i) => (
              <button
                key={color}
                onClick={() => setSelectedColor(i)}
                className={`w-9 h-9 rounded-full border-2 ${
                  selectedColor === i
                    ? "border-foreground"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Color option ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-5 pt-5">
          <h4 className="text-sm text-muted-foreground mb-3">Choose Size</h4>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  selectedSize === size
                    ? "bg-foreground text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-border"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-5 pt-5">
          <div className="flex items-center gap-4">
            {/* Quantity selector */}
            <div className="flex items-center gap-4 bg-secondary rounded-full px-5 py-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-medium text-sm w-5 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add to cart */}
            <button className="flex-1 bg-foreground text-primary-foreground font-medium text-sm rounded-full py-3.5 hover:opacity-90 transition-opacity">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
