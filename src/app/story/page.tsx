import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { TrustSection } from "@/components/shared/trust-section";
import { WaitlistSection } from "@/components/shared/waitlist-section";
import { EditorialImage } from "@/components/shared/editorial-image";
import { createMetadata } from "@/lib/metadata";
import { IMAGES, SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Our Story",
  description:
    "The healthcare experience has become impersonal. Scientific research deserves better. People deserve better experiences. This is why Avelion exists.",
  path: "/story",
});

export default function StoryPage() {
  return (
    <>
      <PageHero
        variant="care"
        eyebrow="Our Story"
        subtitle="Powered by AgeWell"
        title="Built for people"
        titleAccent="who expect more."
        description="Avelion exists to elevate both scientific research and personal wellness—because neither should feel ordinary."
        primaryCta={{ label: "Join the Waitlist", href: "#waitlist" }}
        image={IMAGES.brandStory}
        imageKey="brandStory"
      />

      <Section variant="white" texture>
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="font-heading text-3xl leading-[1.3] text-navy md:text-4xl">
              It started with a simple frustration.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-10 text-lg leading-[1.85] text-navy/70">
              We watched brilliant researchers accept mediocre materials because
              that&apos;s all that was available. We sat in waiting rooms that
              felt more like processing centers than places of care. We saw an
              industry full of promise—but lacking the presentation, precision,
              and humanity it deserved.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-8 text-lg leading-[1.85] text-navy/70">
              {SITE.name} was born from the belief that both worlds can be
              better. That scientific advancement deserves premium standards.
              That wellness should feel personal again. That people who care
              about longevity shouldn&apos;t have to settle for experiences that
              feel decades behind.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section variant="platinum" texture>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="The Vision"
              title="Two brands. One purpose."
              description="Avelion Wellness serves the research community with elevated standards. Avelion Care serves individuals seeking a more personal approach to modern wellness."
            />
            <p className="mt-8 leading-[1.8] text-navy/65">
              Both are powered by {SITE.parentBrand}—connecting our existing
              community to something new, something they can trust, and something
              worth waiting for.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <EditorialImage
              src={IMAGES.lifestyleLongevity}
              alt="Longevity and wellness lifestyle — the future Avelion is building"
              fallback="lifestyleLongevity"
              aspectClassName="aspect-square"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </Section>

      <Section variant="white">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <blockquote className="font-heading text-3xl font-light leading-[1.2] text-navy md:text-4xl lg:text-5xl">
              &ldquo;We&apos;re not building another startup.
              <br />
              <span className="text-gradient-accent">
                We&apos;re building a legacy.&rdquo;
              </span>
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-12 text-lg leading-[1.8] text-navy/65">
              This is just the beginning. And if you&apos;re reading this—you
              found us early. That matters.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section variant="silver" texture>
        <TrustSection />
      </Section>

      <WaitlistSection />
    </>
  );
}
