"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, Tag, ArrowRight } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: "gradient-graphic",
    name: "Gradient Graphic T-shirt",
    image: "/images/products/prod11.png",
    size: "Large",
    color: "White",
    price: 145,
    quantity: 1,
  },
  {
    id: "checkered-shirt",
    name: "Checkered Shirt",
    image: "/images/products/prod3.png",
    size: "Medium",
    color: "Red",
    price: 180,
    quantity: 1,
  },
  {
    id: "skinny-jeans",
    name: "Skinny Fit Jeans",
    image: "/images/products/prod2.png",
    size: "Large",
    color: "Blue",
    price: 240,
    quantity: 1,
  },
];

export function CartContent() {
  const [items, setItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountRate = 0.2;
  const discount = Math.round(subtotal * discountRate);
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 pb-12">
      {/* Cart items */}
      <div className="flex-1 border border-border rounded-2xl divide-y divide-border">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 p-4 md:p-6">
            {/* Item image */}
            <div className="w-20 h-20 md:w-[124px] md:h-[124px] bg-secondary rounded-xl overflow-hidden relative shrink-0">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Item details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-sm md:text-base">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                    Size: <span className="text-foreground">{item.size}</span>
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Color: <span className="text-foreground">{item.color}</span>
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between mt-3 md:mt-4">
                <span className="font-bold text-lg md:text-2xl">
                  ${item.price}
                </span>
                <div className="flex items-center gap-3 md:gap-4 bg-secondary rounded-full px-4 py-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-medium text-sm w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="lg:w-[400px] shrink-0">
        <div className="border border-border rounded-2xl p-5 md:p-6">
          <h2 className="font-bold text-xl md:text-2xl mb-5">Order Summary</h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm md:text-base">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold">${subtotal}</span>
            </div>
            <div className="flex items-center justify-between text-sm md:text-base">
              <span className="text-muted-foreground">
                Discount (-{Math.round(discountRate * 100)}%)
              </span>
              <span className="font-bold text-red-500">-${discount}</span>
            </div>
            <div className="flex items-center justify-between text-sm md:text-base">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span className="font-bold">${deliveryFee}</span>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="font-bold text-xl md:text-2xl">${total}</span>
              </div>
            </div>
          </div>

          {/* Promo code */}
          <div className="flex items-center gap-3 mt-5">
            <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-3 flex-1">
              <Tag className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Add promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="bg-transparent text-sm w-full outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button className="bg-foreground text-primary-foreground font-medium text-sm rounded-full px-6 py-3 hover:opacity-90 transition-opacity shrink-0">
              Apply
            </button>
          </div>

          {/* Checkout button */}
          <button className="w-full bg-foreground text-primary-foreground font-medium text-sm rounded-full py-3.5 mt-5 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Go to Checkout
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
