import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { WaitlistForm } from "@/components/shared/waitlist-form";
import { FadeIn } from "@/components/shared/fade-in";
import type { WaitlistFormData } from "@/lib/validations/waitlist";

interface WaitlistSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  defaultInterest?: WaitlistFormData["interest"];
}

export function WaitlistSection({
  eyebrow = "Early Access",
  title = "Be among the first",
  description = "Join the waitlist for early access, launch announcements, and exclusive updates before anyone else.",
  defaultInterest,
}: WaitlistSectionProps) {
  return (
    <Section id="waitlist" variant="navy" texture>
      <FadeIn>
        <SectionHeading
          tone="dark"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </FadeIn>
      <FadeIn delay={0.15} className="mt-16">
        <WaitlistForm defaultInterest={defaultInterest} />
      </FadeIn>
    </Section>
  );
}
