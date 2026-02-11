import { Star, StarHalf } from "lucide-react";

export function StarRating({
  rating,
  showValue = true,
}: {
  rating: number;
  showValue?: boolean;
}) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className="w-4 h-4 fill-amber-400 text-amber-400"
          />
        ))}
        {hasHalf && (
          <StarHalf className="w-4 h-4 fill-amber-400 text-amber-400" />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className="w-4 h-4 fill-transparent text-amber-400"
          />
        ))}
      </div>
      {showValue && (
        <span className="text-sm text-muted-foreground">
          {rating}/{5}
        </span>
      )}
    </div>
  );
}
