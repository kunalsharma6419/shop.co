import Image from "next/image";
import Link from "next/link";

const styles = [
  { name: "Casual", image: "/images/styles/image 11.png", href: "/category" },
  { name: "Formal", image: "/images/styles/image 13.png", href: "/category" },
  { name: "Party", image: "/images/styles/image 12.png", href: "/category" },
  { name: "Gym", image: "/images/styles/image 14.png", href: "/category" },
];

export function DressStyle() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
      <div className="bg-secondary rounded-[20px] md:rounded-[40px] px-5 py-8 md:px-16 md:py-16">
        <h2 className="font-serif font-bold text-[32px] md:text-[48px] text-center text-balance">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-8 md:mt-14">
          {/* Casual - takes 1/3 on desktop */}
          <Link
            href={styles[0].href}
            className="relative rounded-2xl overflow-hidden h-[190px] md:h-[290px] group"
          >
            <Image
              src={styles[0].image || "/placeholder.svg"}
              alt={styles[0].name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-5 left-5 font-bold text-2xl md:text-[36px]">
              {styles[0].name}
            </span>
          </Link>

          {/* Formal - takes 2/3 on desktop */}
          <Link
            href={styles[1].href}
            className="relative rounded-2xl overflow-hidden h-[190px] md:h-[290px] md:col-span-2 group"
          >
            <Image
              src={styles[1].image || "/placeholder.svg"}
              alt={styles[1].name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-5 left-5 font-bold text-2xl md:text-[36px]">
              {styles[1].name}
            </span>
          </Link>

          {/* Party - takes 2/3 on desktop */}
          <Link
            href={styles[2].href}
            className="relative rounded-2xl overflow-hidden h-[190px] md:h-[290px] md:col-span-2 group"
          >
            <Image
              src={styles[2].image || "/placeholder.svg"}
              alt={styles[2].name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-5 left-5 font-bold text-2xl md:text-[36px]">
              {styles[2].name}
            </span>
          </Link>

          {/* Gym - takes 1/3 on desktop */}
          <Link
            href={styles[3].href}
            className="relative rounded-2xl overflow-hidden h-[190px] md:h-[290px] group"
          >
            <Image
              src={styles[3].image || "/placeholder.svg"}
              alt={styles[3].name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-5 left-5 font-bold text-2xl md:text-[36px]">
              {styles[3].name}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
