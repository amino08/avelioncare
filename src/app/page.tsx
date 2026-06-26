import Link from "next/link";
import { LandingHero } from "@/components/landing/landing-hero";
import { CareFeature } from "@/components/landing/care-feature";
import { WellnessTeaser } from "@/components/landing/wellness-teaser";
import { Section } from "@/components/shared/section";
import { WaitlistSection } from "@/components/shared/waitlist-section";
import { FadeIn } from "@/components/shared/fade-in";
import { EditorialImage } from "@/components/shared/editorial-image";
import { IMAGES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <LandingHero />

      <Section id="care" variant="white" texture>
        <CareFeature />
        <WellnessTeaser />
      </Section>

      <Section id="story" variant="platinum">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <EditorialImage
              src={IMAGES.brandStory}
              alt="Premium luxury healthcare environment — the Avelion brand story"
              fallback="brandStory"
              sizes="(max-width: 768px) 100vw, 768px"
              containerClassName="mb-12"
            />
            <div className="text-center">
              <p className="font-heading text-2xl font-light leading-[1.4] text-navy md:text-3xl">
                Scientific research deserves better. People deserve better
                experiences. Avelion exists to elevate both.
              </p>
              <Link
                href="/story"
                className="mt-8 inline-block text-sm font-medium text-navy/60 underline-offset-4 transition-colors hover:text-navy hover:underline"
              >
                Read our story
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section variant="silver">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <EditorialImage
              src={IMAGES.lifestyleLongevity}
              alt="Confident professionals embracing longevity, wellness, and the Avelion vision"
              fallback="lifestyleLongevity"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </FadeIn>
      </Section>

      <WaitlistSection
        eyebrow="Early Access"
        title="Join before we launch"
        description="Secure your place for early access, launch announcements, and exclusive updates—before anyone else."
      />
    </>
  );
}
