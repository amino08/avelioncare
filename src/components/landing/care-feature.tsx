"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EditorialImage } from "@/components/shared/editorial-image";
import { IMAGES } from "@/lib/constants";

export function CareFeature() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
    >
      <EditorialImage
        src={IMAGES.careConsultation}
        alt="Professional physician conducting an elegant virtual telehealth consultation for Avelion Care"
        fallback="careConsultation"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-silver">
          Launching Soon
        </p>
        <h2 className="mt-4 font-heading text-4xl font-light leading-tight text-navy md:text-5xl">
          Avelion Care
        </h2>
        <p className="mt-6 text-xl leading-[1.5] text-navy/80 md:text-2xl">
          The future of personalized wellness.
        </p>
        <p className="mt-6 text-base leading-[1.8] text-navy/60 md:text-lg">
          A modern care experience built around longevity, convenience, and
          patient-first design—crafted to feel effortless from the very first
          interaction.
        </p>
        <Link
          href="/care"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-navy transition-all hover:gap-3"
        >
          Learn more about Care
          <ArrowRight className="size-4 text-silver" />
        </Link>
      </div>
    </motion.div>
  );
}
