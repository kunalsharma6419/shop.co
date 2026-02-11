import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 -mb-16 relative z-10">
      <div className="bg-black rounded-2xl md:rounded-[20px] px-6 py-8 md:px-16 md:py-9 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="font-serif font-bold text-[32px] md:text-[40px] leading-tight text-primary-foreground text-balance max-w-[550px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col gap-3 w-full max-w-[350px]">
          <div className="flex items-center gap-3 bg-primary-foreground rounded-full px-4 py-3">
            <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent text-sm w-full outline-none placeholder:text-muted-foreground text-foreground"
            />
          </div>
          <button className="bg-primary-foreground text-foreground font-medium text-sm rounded-full py-3 px-6 hover:bg-secondary transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
}
