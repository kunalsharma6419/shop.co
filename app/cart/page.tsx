import { Header } from "@/components/shop/header";
import { Footer } from "@/components/shop/footer";
import { Newsletter } from "@/components/shop/newsletter";
import { CartContent } from "@/components/shop/cart/cart-content";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-sm py-4 text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Cart</span>
        </div>

        <h1 className="font-serif font-bold text-[32px] md:text-[40px] mb-6">
          YOUR CART
        </h1>

        <CartContent />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
