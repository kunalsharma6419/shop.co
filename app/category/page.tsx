import { Header } from "@/components/shop/header";
import { Footer } from "@/components/shop/footer";
import { Newsletter } from "@/components/shop/newsletter";
import { CategoryContent } from "@/components/shop/category/category-content";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CategoryPage() {
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
          <span className="text-foreground">Casual</span>
        </div>

        <CategoryContent />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
