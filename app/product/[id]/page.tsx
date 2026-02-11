import { Header } from "@/components/shop/header";
import { Footer } from "@/components/shop/footer";
import { Newsletter } from "@/components/shop/newsletter";
import { ProductDetail } from "@/components/shop/product/product-detail";
import { ProductReviews } from "@/components/shop/product/product-reviews";
import { YouMightAlsoLike } from "@/components/shop/product/you-might-also-like";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
          <Link href="/category" className="hover:text-foreground">
            Shop
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-foreground">Men</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">T-shirts</span>
        </div>

        <ProductDetail productId={id} />
        <ProductReviews />
        <YouMightAlsoLike />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
