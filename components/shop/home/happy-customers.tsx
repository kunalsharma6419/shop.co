"use client";

import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    verified: true,
    rating: 5,
    text: `"I'm blown away by the quality and style of the clothes I received from ShopCo. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    id: 2,
    name: "Alex K.",
    verified: true,
    rating: 5,
    text: `"Finding clothes that align with my personal style used to be a challenge until I discovered ShopCo. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`,
  },
  {
    id: 3,
    name: "James L.",
    verified: true,
    rating: 5,
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`,
  },
  {
    id: 4,
    name: "Mooen",
    verified: true,
    rating: 5,
    text: `"The experience of shopping at Shop.co has been wonderful. The quality is consistent, and the customer service is excellent."`,
  },
];

export function HappyCustomers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = 420; // exact card width
    const gap = 32; // gap-8
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const maxScroll =
        container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-14">
        <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Slider Wrapper */}
      {/* Slider Wrapper */}
<div className="overflow-hidden">
  <div
    ref={scrollRef}
   className="
  flex
  gap-6
  overflow-x-auto
  scroll-smooth
  no-scrollbar
  snap-x
  snap-mandatory
  px-4
  md:px-0
"


  >
    {reviews.map((review) => (
      <div
        key={review.id}
     className="
  w-full
  sm:w-[380px]
  lg:w-[420px]
  shrink-0
  snap-center
  bg-white
  border
  rounded-2xl
  p-6
  md:p-8
  shadow-sm
"

      >
        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Name */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-semibold text-lg">
            {review.name}
          </span>
          {review.verified && (
            <CheckCircle2
              size={18}
              className="text-green-500 fill-green-500 stroke-white"
            />
          )}
        </div>

        {/* Text */}
        <p className="text-gray-600 leading-relaxed text-sm">
          {review.text}
        </p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
