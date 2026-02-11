"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, ChevronDown, X, Menu } from "lucide-react";

export function TopBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-foreground text-primary-foreground text-center text-xs md:text-sm py-2 px-4 relative">
      <span>
        Sign up and get 20% off to your first order.{" "}
        <Link href="#" className="underline font-medium">
          Sign Up Now
        </Link>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hidden md:block"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-14 md:h-16">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden mr-3"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="font-serif font-bold text-2xl md:text-[32px] tracking-tight shrink-0">
          SHOP.CO
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6 ml-8">
          <button className="flex items-center gap-1 text-sm">
            Shop <ChevronDown className="w-4 h-4" />
          </button>
          <Link href="#" className="text-sm hover:underline">On Sale</Link>
          <Link href="#" className="text-sm hover:underline">New Arrivals</Link>
          <Link href="#" className="text-sm hover:underline">Brands</Link>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center flex-1 max-w-[480px] mx-6 bg-secondary rounded-full px-4 py-2.5 gap-2">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent text-sm w-full outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button className="md:hidden" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/cart" aria-label="Cart">
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <button aria-label="Account">
            <User className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border px-4 py-4 flex flex-col gap-3">
          <button className="flex items-center justify-between text-sm py-2">
            Shop <ChevronDown className="w-4 h-4" />
          </button>
          <Link href="#" className="text-sm py-2">On Sale</Link>
          <Link href="#" className="text-sm py-2">New Arrivals</Link>
          <Link href="#" className="text-sm py-2">Brands</Link>
        </div>
      )}
    </nav>
  );
}

export function Header() {
  return (
    <header>
      <TopBanner />
      <Navbar />
    </header>
  );
}
