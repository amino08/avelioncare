import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "white" | "platinum" | "silver" | "navy";
  texture?: boolean;
}

const variantStyles = {
  white: "bg-white",
  platinum: "bg-platinum-soft bg-molecular-glow",
  silver: "bg-[#f0f3f7]",
  navy: "bg-navy text-white",
} as const;

export function Section({
  children,
  className,
  id,
  variant = "white",
  texture = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding relative overflow-hidden",
        variantStyles[variant],
        texture && "bg-grid-subtle",
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
