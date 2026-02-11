"use client";

import { useState } from "react";
import { ChevronUp, ChevronRight, Check } from "lucide-react";

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const colors = [
  { name: "Green", value: "#00C12B" },
  { name: "Red", value: "#F50606" },
  { name: "Yellow", value: "#F5DD06" },
  { name: "Orange", value: "#F57906" },
  { name: "Cyan", value: "#06CAF5" },
  { name: "Blue", value: "#063AF5" },
  { name: "Purple", value: "#7D06F5" },
  { name: "Pink", value: "#F506A4" },
  { name: "White", value: "#FFFFFF" },
  { name: "Black", value: "#000000" },
];

const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

const dressStyles = ["Casual", "Formal", "Party", "Gym"];

export function FilterSidebar() {
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [priceRange, setPriceRange] = useState([50, 200]);

  return (
    <div className="border border-border rounded-2xl p-5 lg:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-lg">Filters</h3>
        <SlidersIcon />
      </div>

      <div className="border-t border-border" />

      {/* Categories */}
      <div className="py-5">
        {categories.map((cat) => (
          <button
            key={cat}
            className="flex items-center justify-between w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {cat}
            <ChevronRight className="w-4 h-4" />
          </button>
        ))}
      </div>

      <div className="border-t border-border" />

      {/* Price */}
      <div className="py-5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold">Price</h4>
          <ChevronUp className="w-4 h-4" />
        </div>
        <div className="relative px-1">
          <div className="h-1.5 bg-border rounded-full relative">
            <div
              className="absolute h-full bg-foreground rounded-full"
              style={{
                left: `${((priceRange[0] - 50) / 450) * 100}%`,
                right: `${100 - ((priceRange[1] - 50) / 450) * 100}%`,
              }}
            />
          </div>
          <input
            type="range"
            min={50}
            max={500}
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="absolute top-0 left-0 w-full h-1.5 opacity-0 cursor-pointer"
            aria-label="Minimum price"
          />
          <input
            type="range"
            min={50}
            max={500}
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="absolute top-0 left-0 w-full h-1.5 opacity-0 cursor-pointer"
            aria-label="Maximum price"
          />
          <div className="flex items-center justify-between mt-3 text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Colors */}
      <div className="py-5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold">Colors</h4>
          <ChevronUp className="w-4 h-4" />
        </div>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className="w-9 h-9 rounded-full flex items-center justify-center relative"
              style={{
                backgroundColor: color.value,
                border:
                  color.name === "White"
                    ? "1px solid #e5e5e5"
                    : "none",
              }}
              aria-label={`Select ${color.name} color`}
            >
              {selectedColor === color.name && (
                <Check
                  className="w-4 h-4"
                  style={{
                    color:
                      color.name === "White" || color.name === "Yellow"
                        ? "#000"
                        : "#fff",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Size */}
      <div className="py-5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold">Size</h4>
          <ChevronUp className="w-4 h-4" />
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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

      <div className="border-t border-border" />

      {/* Dress Style */}
      <div className="py-5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold">Dress Style</h4>
          <ChevronUp className="w-4 h-4" />
        </div>
        {dressStyles.map((style) => (
          <button
            key={style}
            className="flex items-center justify-between w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {style}
            <ChevronRight className="w-4 h-4" />
          </button>
        ))}
      </div>

      {/* Apply button */}
      <button className="w-full bg-foreground text-primary-foreground font-medium text-sm rounded-full py-3.5 hover:opacity-90 transition-opacity">
        Apply Filter
      </button>
    </div>
  );
}

function SlidersIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 4.167v11.666M5 9.167h10M3.333 4.167h13.334M3.333 14.167h13.334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
    </svg>
  );
}
