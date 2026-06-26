import { Microscope, FlaskConical, Award, Layers, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { WaitlistSection } from "@/components/shared/waitlist-section";
import { FAQ } from "@/components/shared/faq";
import { ElevatedCard } from "@/components/shared/elevated-card";
import { EditorialImage } from "@/components/shared/editorial-image";
import { createMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Avelion Wellness",
  description:
    "Avelion Wellness is building the next generation of premium research products for laboratories and scientific innovation. Research use only. Join the waitlist.",
  path: "/wellness",
  keywords: ["research peptides", "laboratory", "scientific research", "Avelion Wellness"],
});

const standards = [
  {
    icon: Microscope,
    title: "Precision Manufacturing",
    description:
      "Clean processes, consistent output, and meticulous attention to every stage of production.",
  },
  {
    icon: FlaskConical,
    title: "Research Standards",
    description:
      "Products designed to meet the expectations of serious researchers and laboratory professionals.",
  },
  {
    icon: Award,
    title: "Professional Presentation",
    description:
      "Because how research materials are presented reflects the integrity of the work itself.",
  },
  {
    icon: Layers,
    title: "Consistency",
    description:
      "Batch after batch, the same elevated standard you can depend on for your research.",
  },
];

const categories = [
  "Peptide Research Compounds",
  "Laboratory Reagents",
  "Research-Grade Formulations",
  "Scientific Innovation Tools",
];

const wellnessFaq = [
  {
    question: "Are Avelion Wellness products for human use?",
    answer:
      "No. Avelion Wellness products are intended for research use only. They are not intended to diagnose, treat, cure, or prevent any disease, and are not for human or veterinary use.",
  },
  {
    question: "When will products be available?",
    answer:
      "We're in the final stages of preparation. Waitlist members will receive early access announcements and launch details before the general public.",
  },
  {
    question: "Who is Avelion Wellness designed for?",
    answer:
      "Our products are designed for qualified researchers, laboratories, and scientific professionals who demand premium quality and professional presentation.",
  },
  {
    question: "How does Avelion ensure quality?",
    answer:
      "Quality is embedded in every decision—from sourcing and manufacturing to packaging and presentation. We believe research deserves the same elevated standards as any premium industry.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <PageHero
        variant="wellness"
        eyebrow="Avelion Wellness"
        subtitle="Discover Avelion Wellness"
        title="Premium Research."
        titleAccent="Elevated Standards."
        description="Avelion Wellness is building the next generation of premium research products designed for laboratories, researchers, and scientific innovation."
        primaryCta={{ label: "Join the Research Waitlist", href: "#waitlist" }}
        secondaryCta={{ label: "Explore Our Vision", href: "#mission" }}
        image={IMAGES.brandStory}
        imageKey="brandStory"
      />

      <Section id="mission" variant="white" texture>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title="Why Avelion Exists"
              description="Scientific research deserves better. For too long, research materials have been treated as commodities—when they should be held to the same standards of quality, presentation, and consistency as any premium industry."
            />
            <p className="mt-8 leading-[1.8] text-navy/65">
              Avelion Wellness exists to change that. We&apos;re building products
              that researchers can present with confidence—because the work
              matters, and the materials should reflect that.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <EditorialImage
              src={IMAGES.brandStory}
              alt="Premium luxury healthcare — why Avelion exists"
              fallback="brandStory"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </Section>

      <Section variant="platinum" id="quality" texture>
        <FadeIn>
          <SectionHeading
            eyebrow="Quality First"
            title="Research Standards"
            description="Every detail matters when the integrity of research is on the line."
          />
        </FadeIn>
        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          {standards.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <ElevatedCard className="h-full">
                <div className="mb-6 inline-flex rounded-lg border border-platinum bg-white p-3.5 text-clinical">
                  <item.icon className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-navy">{item.title}</h3>
                <p className="mt-3 leading-[1.75] text-navy/65">
                  {item.description}
                </p>
              </ElevatedCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="categories" variant="white">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <EditorialImage
              src={IMAGES.heroCare}
              alt="Premium longevity clinic — Avelion Wellness research standards"
              fallback="heroCare"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <SectionHeading
              align="left"
              eyebrow="Innovation"
              title="Future Product Categories"
              description="We're building a comprehensive portfolio designed for the evolving needs of modern research."
            />
            <ul className="mt-10 space-y-5">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="flex items-center gap-4 text-lg text-navy"
                >
                  <span className="size-2 rounded-full bg-clinical" />
                  {cat}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section variant="silver">
        <FadeIn>
          <ElevatedCard hover={false} className="mx-auto max-w-3xl text-center">
            <Clock className="mx-auto size-10 text-silver" strokeWidth={1.5} />
            <h2 className="mt-8 font-heading text-4xl text-navy md:text-5xl">
              Coming Soon
            </h2>
            <p className="mt-5 text-lg leading-[1.75] text-navy/65">
              We&apos;re putting the finishing touches on something exceptional.
              Join the waitlist to be first in line when we launch.
            </p>
            <p className="mt-8 text-sm text-navy/45">
              For research use only. Not for human consumption.
            </p>
          </ElevatedCard>
        </FadeIn>
      </Section>

      <WaitlistSection
        defaultInterest="research"
        eyebrow="Research Waitlist"
        title="Join the Research Waitlist"
        description="Be among the first researchers to access Avelion Wellness products at launch."
      />

      <Section variant="white" texture>
        <FadeIn>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-16">
          <FAQ items={wellnessFaq} />
        </FadeIn>
      </Section>
    </>
  );
}
