export function BrandsBar() {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  return (
    <section className="bg-foreground">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-8">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-primary-foreground font-bold text-xl md:text-2xl lg:text-[32px] tracking-wider whitespace-nowrap"
              style={{
                fontFamily:
                  brand === "Calvin Klein"
                    ? "serif"
                    : brand === "ZARA"
                      ? "serif"
                      : "inherit",
                fontStyle: brand === "ZARA" ? "normal" : "normal",
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
