"use client";

import { useState } from "react";
import { Star, CheckCircle2, SlidersHorizontal } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Samantha D.",
    verified: true,
    rating: 4.5,
    date: "August 14, 2023",
    text: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
  },
  {
    id: 2,
    name: "Alex M.",
    verified: true,
    rating: 4,
    date: "August 15, 2023",
    text: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
  },
  {
    id: 3,
    name: "Ethan R.",
    verified: true,
    rating: 3.5,
    date: "August 16, 2023",
    text: '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt."',
  },
];

export function ProductReviews() {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className="py-8 border-t border-border">
      {/* Tabs */}
      <div className="flex items-center border-b border-border">
        {["Product Details", "Rating & Reviews", "FAQs"].map((tab) => {
          const tabKey = tab === "Rating & Reviews" ? "reviews" : tab.toLowerCase();
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tabKey)}
              className={`flex-1 text-center pb-3 text-sm font-medium transition-colors relative ${
                activeTab === tabKey
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {tab}
              {activeTab === tabKey && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
              )}
            </button>
          );
        })}
      </div>

      {/* Reviews header */}
      <div className="flex items-center justify-between mt-6 mb-6">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-xl md:text-2xl">All Reviews</h3>
          <span className="text-sm text-muted-foreground">(451)</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center" aria-label="Filter reviews">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
          <button className="bg-foreground text-primary-foreground text-sm font-medium rounded-full px-5 py-2.5 hover:opacity-90 transition-opacity">
            Write a Review
          </button>
        </div>
      </div>

      {/* Review list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-border rounded-2xl p-5 md:p-6"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(review.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-transparent text-amber-400"
                  }`}
                />
              ))}
            </div>

            {/* Name */}
            <div className="flex items-center gap-1.5 mb-3">
              <span className="font-bold">{review.name}</span>
              {review.verified && (
                <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-500 stroke-white" />
              )}
            </div>

            {/* Text */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {review.text}
            </p>

            {/* Date */}
            <p className="text-sm text-muted-foreground">
              Posted on {review.date}
            </p>
          </div>
        ))}
      </div>

      {/* Load more */}
      <div className="text-center mt-8">
        <button className="border border-border rounded-full px-14 py-3 text-sm font-medium hover:bg-secondary transition-colors">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}
