import { cn } from "@/lib/utils";

interface ElevatedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function ElevatedCard({
  children,
  className,
  hover = true,
}: ElevatedCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-platinum bg-white p-8 shadow-[0_4px_32px_rgba(10,22,40,0.06)] md:p-10",
        hover &&
          "transition-all duration-500 hover:-translate-y-1 hover:border-silver/50 hover:shadow-[0_12px_48px_rgba(10,22,40,0.1)]",
        className
      )}
    >
      {children}
    </div>
  );
}
