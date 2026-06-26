"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IMAGES, type ImageKey } from "@/lib/constants";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  imageKey?: ImageKey;
  variant?: "wellness" | "care";
}

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageKey = "heroCare",
  variant = "wellness",
}: PageHeroProps) {
  const isWellness = variant === "wellness";
  const [src, setSrc] = useState<string>(image);

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-navy pt-32">
      <div className="absolute inset-0 bg-grid-subtle opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-platinum-soft/10 via-navy to-navy" />
      <div className="absolute inset-0">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
          onError={() => setSrc(IMAGES[imageKey])}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/92 to-navy" />
        <div
          className={cn(
            "absolute inset-0",
            isWellness
              ? "bg-gradient-to-br from-clinical/12 via-transparent to-transparent"
              : "bg-gradient-to-br from-silver/8 via-transparent to-transparent"
          )}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(92vh-8rem)] max-w-7xl flex-col justify-center px-6 pb-24 md:px-12 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "mb-5 text-xs font-semibold uppercase tracking-[0.32em]",
            isWellness ? "text-clinical" : "text-silver"
          )}
        >
          {eyebrow}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-3 text-sm text-platinum/70"
        >
          {subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl font-heading text-5xl font-light leading-[1.06] text-white md:text-6xl lg:text-7xl"
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-gradient-accent">{titleAccent}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-2xl text-lg leading-[1.8] text-platinum/85 md:text-xl"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
