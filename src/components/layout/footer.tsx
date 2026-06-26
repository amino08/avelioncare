import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  explore: [
    { href: "/care", label: "Care" },
    { href: "/wellness", label: "Wellness" },
    { href: "/story", label: "Our Story" },
    { href: "/waitlist", label: "Join Waitlist" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy">
      <div className="section-padding-tight pb-12 pt-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-heading text-3xl tracking-[0.15em] text-white">
              {SITE.name}
            </Link>
            <p className="mt-3 text-sm font-medium text-silver">
              Powered by {SITE.parentBrand}
            </p>
            <p className="mt-5 max-w-sm leading-relaxed text-platinum/75">
              {SITE.tagline}
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { href: "#", label: "Share", icon: Share2 },
                { href: "#", label: "Website", icon: Globe },
                { href: `mailto:${SITE.email}`, label: "Email", icon: Mail },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-white/15 p-2.5 text-platinum/70 transition-colors hover:border-silver/50 hover:text-silver"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white">
              Explore
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-platinum/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white">
              Newsletter
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-platinum/75">
              Early access, launch updates, and exclusive announcements.
            </p>
            <form className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Your email"
                className="h-11 border-white/15 bg-white/5 text-white placeholder:text-white/40"
              />
              <Button
                type="submit"
                className="h-11 rounded-lg bg-white font-medium text-navy shadow-sm hover:shadow-md hover:ring-1 hover:ring-silver/50"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-platinum/50">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-platinum/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
