import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { WaitlistForm } from "@/components/shared/waitlist-form";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Join the Waitlist",
  description:
    "Secure your place on the Avelion waitlist. Get early access, launch announcements, and exclusive updates for Avelion Wellness and Avelion Care.",
  path: "/waitlist",
});

export default function WaitlistPage() {
  return (
    <div className="pt-28">
      <Section variant="white" texture className="pb-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Early Access"
            title="Join the Avelion Waitlist"
            description="Be among the first to experience Avelion Wellness and Avelion Care. Early access, launch announcements, and exclusive updates—before anyone else."
          />
        </FadeIn>
      </Section>

      <Section variant="platinum" className="pt-0">
        <FadeIn delay={0.1}>
          <WaitlistForm />
        </FadeIn>
      </Section>
    </div>
  );
}
