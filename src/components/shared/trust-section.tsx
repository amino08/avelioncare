import {
  Shield,
  Eye,
  Lightbulb,
  Target,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { ElevatedCard } from "@/components/shared/elevated-card";

const pillars = [
  {
    icon: Shield,
    title: "Quality",
    description:
      "Every standard we set reflects the precision our community deserves—from sourcing to presentation.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe trust is built through clarity. No hidden processes, no vague promises.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We invest in what comes next—modern tools, refined processes, and forward-thinking design.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Consistency isn't optional. It's the foundation of everything we build.",
  },
  {
    icon: Sparkles,
    title: "Future Focused",
    description:
      "We're not reacting to trends. We're architecting what longevity and wellness become.",
  },
  {
    icon: HeartHandshake,
    title: "Modern Experience",
    description:
      "From first impression to ongoing support, every touchpoint should feel elevated.",
  },
];

export function TrustSection({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div>
      <FadeIn>
        <SectionHeading
          tone={tone}
          eyebrow="Why Trust Avelion"
          title="Built on principles that endure"
          description="We're early—but our standards aren't. These aren't marketing words. They're the foundation of everything we're building."
        />
      </FadeIn>

      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, i) => (
          <FadeIn key={pillar.title} delay={i * 0.08}>
            <ElevatedCard className="h-full">
              <div className="mb-6 inline-flex rounded-lg border border-platinum bg-platinum-soft p-3.5 text-clinical">
                <pillar.icon className="size-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-navy">{pillar.title}</h3>
              <p className="mt-3 leading-[1.75] text-navy/65">
                {pillar.description}
              </p>
            </ElevatedCard>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
