"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { IMAGES, type ImageKey } from "@/lib/constants";

const GRADIENTS: Record<ImageKey, string> = {
  heroCare: "bg-gradient-to-br from-platinum-soft via-platinum to-cool-silver/60",
  careConsultation:
    "bg-gradient-to-br from-platinum-soft via-platinum to-cool-silver/60",
  brandStory:
    "bg-gradient-to-br from-platinum-soft via-platinum to-cool-silver/50",
  lifestyleLongevity:
    "bg-gradient-to-br from-platinum-soft via-platinum to-cool-silver/50",
};

interface EditorialImageProps {
  src: string;
  alt: string;
  fallback?: ImageKey;
  priority?: boolean;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  aspectClassName?: string;
}

export function EditorialImage({
  src,
  alt,
  fallback = "brandStory",
  priority = false,
  sizes = "100vw",
  className,
  containerClassName,
  aspectClassName = "aspect-[4/3]",
}: EditorialImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-platinum bg-platinum-soft shadow-[0_8px_40px_rgba(10,22,40,0.05)]",
        aspectClassName,
        containerClassName
      )}
    >
      <div
        className={cn("absolute inset-0", GRADIENTS[fallback])}
        aria-hidden
      />
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("relative object-cover", className)}
        onError={() => setImageSrc(IMAGES[fallback])}
      />
    </div>
  );
}
