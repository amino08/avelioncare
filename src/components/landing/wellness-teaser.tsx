"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function WellnessTeaser() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-platinum pt-16"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-silver">
        Also Part of the Ecosystem
      </p>

      <div className="mt-8">
        <h3 className="font-heading text-2xl font-light text-navy md:text-3xl">
          Avelion Wellness
        </h3>
        <p className="mt-3 max-w-xl text-base leading-[1.75] text-navy/55">
          Premium research peptides presented with exceptional quality, clean
          branding, and scientific professionalism—for laboratory research
          only.
        </p>
        <p className="mt-3 text-xs font-medium uppercase tracking-widest text-silver">
          Research use only · Not for human consumption
        </p>
        <Link
          href="/wellness"
          className="mt-6 inline-flex items-center gap-2 text-sm text-navy/70 transition-all hover:gap-3 hover:text-navy"
        >
          Explore Wellness
          <ArrowRight className="size-3.5 text-silver" />
        </Link>
      </div>
    </motion.div>
  );
}
