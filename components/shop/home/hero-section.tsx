import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content */}
          <div className="flex-1 py-10 md:py-16 lg:py-24 z-10 relative">
            <h1 className="font-serif font-bold text-[36px] md:text-[52px] lg:text-[64px] leading-[1.1] tracking-tight text-balance">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-muted-foreground text-sm md:text-base mt-4 md:mt-5 max-w-[545px] leading-relaxed">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of
              style.
            </p>
            <Link
              href="/category"
              className="inline-block bg-foreground text-primary-foreground font-medium text-sm rounded-full px-14 py-3.5 mt-6 md:mt-8 hover:opacity-90 transition-opacity"
            >
              Shop Now
            </Link>
            {/* Stats */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8 md:mt-12">
              <div>
                <div className="font-bold text-2xl md:text-[40px]">200+</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  International Brands
                </div>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <div className="font-bold text-2xl md:text-[40px]">2,000+</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  High-Quality Products
                </div>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <div className="font-bold text-2xl md:text-[40px]">
                  30,000+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:flex-1 w-full lg:w-auto h-[300px] md:h-[400px] lg:h-[600px]">
            <Image
              src="/images/heronew.jpg"
              alt="Stylish couple in fashionable outfits"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Decorative stars */}
            <svg
              className="absolute top-8 right-8 w-16 h-16 lg:w-24 lg:h-24"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M32 0L35.5 28.5L64 32L35.5 35.5L32 64L28.5 35.5L0 32L28.5 28.5L32 0Z"
                fill="black"
              />
            </svg>
            <svg
              className="absolute bottom-20 left-4 w-10 h-10 lg:w-14 lg:h-14"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M32 0L35.5 28.5L64 32L35.5 35.5L32 64L28.5 35.5L0 32L28.5 28.5L32 0Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
