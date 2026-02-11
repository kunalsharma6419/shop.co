import { Header } from "@/components/shop/header";
import { Footer } from "@/components/shop/footer";
import { Newsletter } from "@/components/shop/newsletter";
import { HeroSection } from "@/components/shop/home/hero-section";
import { BrandsBar } from "@/components/shop/home/brands-bar";
import { NewArrivals } from "@/components/shop/home/new-arrivals";
import { TopSelling } from "@/components/shop/home/top-selling";
import { DressStyle } from "@/components/shop/home/dress-style";
import { HappyCustomers } from "@/components/shop/home/happy-customers";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandsBar />
        <NewArrivals />
        <TopSelling />
        <DressStyle />
        <HappyCustomers />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
