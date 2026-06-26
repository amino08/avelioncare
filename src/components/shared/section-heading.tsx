import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-5 text-xs font-semibold uppercase tracking-[0.28em]",
            isDark ? "text-silver" : "text-silver"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-4xl font-light leading-[1.12] tracking-tight md:text-5xl lg:text-6xl",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-8 text-lg leading-[1.75] md:text-xl md:leading-[1.8]",
            isDark ? "text-platinum/90" : "text-navy/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
