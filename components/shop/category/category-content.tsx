"use client";

import { useState } from "react";
import { ProductCard } from "../product-card";
import type { Product } from "../product-card";
import { FilterSidebar } from "./filter-sidebar";
import {
  ChevronDown,
  SlidersHorizontal,
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";

const products: Product[] = [
  {
    id: "gradient-graphic",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/prod1.png",
    rating: 3.5,
    price: 145,
  },
  {
    id: "polo-tipping",
    name: "Polo with Tipping Details",
    image: "/images/products/prod2.png",
    rating: 4.5,
    price: 180,
  },
  {
    id: "black-striped",
    name: "Black Striped T-shirt",
    image: "/images/products/prod3.png",
    rating: 5.0,
    price: 120,
    originalPrice: 150,
    discount: 30,
  },
  {
    id: "skinny-jeans-2",
    name: "Skinny Fit Jeans",
    image: "/images/products/prod4.png",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: "checkered-shirt-2",
    name: "Checkered Shirt",
    image: "/images/products/prod5.png",
    rating: 4.5,
    price: 180,
  },
  {
    id: "sleeve-striped-2",
    name: "Sleeve Striped T-shirt",
    image: "/images/products/prod6.png",
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30,
  },
  {
    id: "vertical-striped-2",
    name: "Vertical Striped Shirt",
    image: "/images/products/prod7.png",
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discount: 20,
  },
  {
    id: "courage-graphic-2",
    name: "Courage Graphic T-shirt",
    image: "/images/products/prod8.png",
    rating: 4.0,
    price: 145,
  },
  {
    id: "bermuda-shorts-2",
    name: "Loose Fit Bermuda Shorts",
    image: "/images/products/prod1.png",
    rating: 3.0,
    price: 80,
  },
];

export function CategoryContent() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <div className="flex gap-5">
      {/* Desktop sidebar */}
      <div className="hidden lg:block w-[295px] shrink-0">
        <FilterSidebar />
      </div>

      {/* Mobile filter overlay */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-bold text-xl">Filters</h2>
            <button
              onClick={() => setMobileFilterOpen(false)}
              aria-label="Close filters"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="overflow-y-auto h-[calc(100vh-57px)] p-4">
            <FilterSidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h1 className="font-serif font-bold text-[32px]">Casual</h1>
            <button
              className="lg:hidden"
              onClick={() => setMobileFilterOpen(true)}
              aria-label="Open filters"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hidden md:inline">
              Showing 1-10 of 100 Products
            </span>
            <span className="hidden md:inline ml-2">Sort by:</span>
            <button className="flex items-center gap-1 font-medium text-foreground">
              Most Popular <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-row flex-wrap items-center justify-between mt-8 pt-4 border-t border-border gap-4 mb-8">
          <button className="flex items-center gap-2 text-sm font-medium border border-border rounded-lg px-4 py-2 hover:bg-secondary transition-colors w-full sm:w-auto max-w-[120px]">
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
          <div className="flex items-center gap-1 flex-1 justify-center">
            {[1, 2, 3].map((page) => (
              <button
          key={page}
          className={`w-10 h-10 rounded-lg text-sm font-medium ${
            page === 1
              ? "bg-foreground text-primary-foreground"
              : "hover:bg-secondary"
          }`}
              >
          {page}
              </button>
            ))}
            <span className="px-2 text-muted-foreground">...</span>
            {[8, 9, 10].map((page) => (
              <button
          key={page}
          className="w-10 h-10 rounded-lg text-sm font-medium hover:bg-secondary"
              >
          {page}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 text-sm font-medium border border-border rounded-lg px-4 py-2 hover:bg-secondary transition-colors w-full sm:w-auto">
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
