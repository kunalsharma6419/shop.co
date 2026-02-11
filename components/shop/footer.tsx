import Link from "next/link";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-24 mt-0">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Main footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10 md:py-12 border-b border-border">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif font-bold text-[28px] md:text-[32px] tracking-tight">
              SHOP.CO
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-[250px]">
              We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Link href="#" className="w-7 h-7 rounded-full border border-border bg-background flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full bg-foreground text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full border border-border bg-background flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full border border-border bg-background flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors" aria-label="Github">
                <Github className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-sm tracking-[3px] uppercase mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Works</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Career</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-medium text-sm tracking-[3px] uppercase mb-4">Help</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Customer Support</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Delivery Details</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="font-medium text-sm tracking-[3px] uppercase mb-4">FAQ</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Account</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Manage Deliveries</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Orders</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Payments</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium text-sm tracking-[3px] uppercase mb-4">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Free eBooks</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Development Tutorial</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">How to - Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Youtube Playlist</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-4">
          <p className="text-sm text-muted-foreground">
            Shop.co &copy; 2000-2023. All Rights Reserved
          </p>
            <div className="flex items-center gap-3">
            <div className="w-12 h-8 bg-background rounded border border-border flex items-center justify-center">
              {/* Visa */}
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="16" rx="4" fill="#fff"/>
              <text x="16" y="11" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1A1F71">VISA</text>
              </svg>
            </div>
            <div className="w-12 h-8 bg-background rounded border border-border flex items-center justify-center">
              {/* Mastercard */}
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="16" rx="4" fill="#fff"/>
              <circle cx="12" cy="8" r="5" fill="#EB001B"/>
              <circle cx="20" cy="8" r="5" fill="#F79E1B"/>
              <text x="16" y="14" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#222">MC</text>
              </svg>
            </div>
            <div className="w-12 h-8 bg-background rounded border border-border flex items-center justify-center">
              {/* PayPal */}
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="16" rx="4" fill="#fff"/>
              <text x="16" y="11" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#003087">PayPal</text>
              </svg>
            </div>
            <div className="w-12 h-8 bg-background rounded border border-border flex items-center justify-center">
              {/* Apple Pay */}
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="16" rx="4" fill="#fff"/>
              <text x="16" y="11" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#222"> Pay</text>
              </svg>
            </div>
            <div className="w-12 h-8 bg-background rounded border border-border flex items-center justify-center">
              {/* Google Pay */}
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="16" rx="4" fill="#fff"/>
              <text x="16" y="11" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4285F4">G Pay</text>
              </svg>
            </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
