"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const HERO_PAGES = ["/", "/wellness", "/care", "/story"];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHeroPage = HERO_PAGES.includes(pathname);
  const overHero = isHeroPage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-nav py-3"
          : overHero
            ? "bg-transparent py-6"
            : "bg-white/60 py-5 backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
        <Link href="/" className="group flex flex-col gap-0.5">
          <span
            className={cn(
              "font-heading text-2xl font-medium tracking-[0.2em] transition-colors",
              overHero
                ? "text-white group-hover:text-platinum"
                : "text-navy group-hover:text-clinical"
            )}
          >
            {SITE.name}
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <span
            className={cn(
              "text-xs tracking-widest",
              overHero ? "text-white/60" : "text-navy/50"
            )}
          >
            Powered by {SITE.parentBrand}
          </span>
          <div className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  overHero
                    ? pathname === link.href
                      ? "bg-white/15 text-white"
                      : "text-white/75 hover:text-white"
                    : pathname === link.href
                      ? "bg-navy/5 text-navy"
                      : "text-navy/60 hover:text-navy"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <span
            className={cn(
              "text-[10px] tracking-wider",
              overHero ? "text-white/50" : "text-navy/40"
            )}
          >
            by {SITE.parentBrand}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className={cn(
              overHero
                ? "text-white hover:bg-white/10"
                : "text-navy hover:bg-navy/5"
            )}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-platinum bg-white/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base transition-colors",
                    pathname === link.href
                      ? "bg-navy/5 font-medium text-navy"
                      : "text-navy/70 hover:bg-navy/[0.03] hover:text-navy"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
