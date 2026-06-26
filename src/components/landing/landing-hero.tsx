"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SITE, IMAGES } from "@/lib/constants";

export function LandingHero() {
  const [heroSrc, setHeroSrc] = useState<string>(IMAGES.heroCare);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy px-6 pt-32 pb-20 md:px-12">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={heroSrc}
          alt="Luxury longevity clinic interior — sophisticated Avelion Care environment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          onError={() => setHeroSrc(IMAGES.heroCare)}
        />
        <div className="absolute inset-0 bg-grid-subtle opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/88 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-br from-clinical/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.32em] text-silver/70"
        >
          Powered by {SITE.parentBrand}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-5xl font-light leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          The future of
          <br />
          <span className="text-platinum">personalized wellness</span>
          <br />
          is arriving.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-10 max-w-xl text-lg leading-[1.8] text-platinum/80 md:text-xl"
        >
          Avelion Care is launching soon—a modern experience built around
          longevity, convenience, and patient-first design. Be among the first
          to know when we open our doors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="#waitlist" className="btn-primary">
            Join the Waitlist
          </Link>
          <Link href="/story" className="btn-secondary">
            Our Vision
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#care"
          className="flex flex-col items-center gap-2 text-white/35 transition-colors hover:text-white/55"
        >
          <span className="text-xs tracking-widest uppercase">Discover</span>
          <ArrowDown className="size-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
