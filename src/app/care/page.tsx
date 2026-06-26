import {
  Heart,
  Smartphone,
  UserCheck,
  Crown,
  Clock,
  Stethoscope,
} from "lucide-react";
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
  title: "Avelion Care",
  description:
    "Avelion Care is redefining modern wellness with convenience, guidance, technology, and compassionate support. Join the care waitlist for early access.",
  path: "/care",
  keywords: ["wellness care", "personalized health", "longevity", "Avelion Care"],
});

const pillars = [
  {
    icon: Heart,
    title: "Patient Experience",
    description:
      "Every interaction designed around you—not around a system. Warm, intuitive, and genuinely personal.",
  },
  {
    icon: Smartphone,
    title: "Technology",
    description:
      "Modern tools that simplify your journey without replacing the human connection that matters most.",
  },
  {
    icon: UserCheck,
    title: "Personalized Guidance",
    description:
      "Support tailored to your goals, delivered by licensed providers when clinically appropriate.",
  },
  {
    icon: Crown,
    title: "Future Membership",
    description:
      "An elevated membership experience designed for those who expect more from their wellness journey.",
  },
];

const careFaq = [
  {
    question: "What is Avelion Care?",
    answer:
      "Avelion Care is a modern wellness platform being built to bring together convenience, guidance, technology, and compassionate support into one elevated experience.",
  },
  {
    question: "Is Avelion Care a replacement for my doctor?",
    answer:
      "No. Avelion Care is designed to complement your healthcare journey with personalized wellness support, delivered by licensed providers when clinically appropriate.",
  },
  {
    question: "When will Avelion Care launch?",
    answer:
      "We're in active development. Waitlist members will receive exclusive early access invitations and launch announcements.",
  },
  {
    question: "What makes Avelion Care different?",
    answer:
      "We believe the current healthcare experience is broken—impersonal, fragmented, and outdated. Avelion Care is being built patient-first, with modern technology and genuine human support.",
  },
];

export default function CarePage() {
  return (
    <>
      <PageHero
        variant="care"
        eyebrow="Avelion Care"
        subtitle="Discover Avelion Care"
        title="A More Personal"
        titleAccent="Future of Wellness."
        description="Avelion Care is being built to redefine how modern wellness feels—bringing together convenience, guidance, technology, and compassionate support into one elevated experience."
        primaryCta={{ label: "Join the Care Waitlist", href: "#waitlist" }}
        image={IMAGES.heroCare}
        imageKey="heroCare"
      />

      <Section id="why" variant="white" texture>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="Why We Started"
              title="The Current Healthcare Experience Is Broken"
              description="Long wait times. Impersonal visits. Fragmented care. Technology that creates distance instead of connection. You deserve better."
            />
            <p className="mt-8 leading-[1.8] text-navy/65">
              We started Avelion Care because we&apos;ve lived this frustration
              ourselves. The system wasn&apos;t designed for the person—it was
              designed for efficiency. We&apos;re changing that.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <EditorialImage
              src={IMAGES.brandStory}
              alt="Premium luxury healthcare environment — why Avelion Care exists"
              fallback="brandStory"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </Section>

      <Section variant="platinum" id="building" texture>
        <FadeIn>
          <SectionHeading
            eyebrow="What We're Building"
            title="Wellness, reimagined"
            description="A patient-first platform that combines the best of modern technology with the compassion you deserve."
          />
        </FadeIn>
        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          {pillars.map((item, i) => (
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

      <Section variant="white">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <EditorialImage
              src={IMAGES.careConsultation}
              alt="Professional telehealth consultation — modern Avelion Care technology"
              fallback="careConsultation"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <SectionHeading
              align="left"
              eyebrow="Our Approach"
              title="Licensed providers. Modern wellness."
              description="When clinically appropriate, you'll have access to licensed providers who understand that wellness is personal—not procedural."
            />
            <div className="mt-10 flex items-start gap-4 rounded-lg border border-silver/40 bg-platinum-soft p-7">
              <Stethoscope className="mt-0.5 size-5 shrink-0 text-clinical" strokeWidth={1.5} />
              <p className="text-sm leading-[1.75] text-navy/70">
                Avelion Care does not guarantee specific outcomes. Our focus is
                on creating an elevated, patient-first experience with
                personalized support tailored to your wellness journey.
              </p>
            </div>
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
              Something extraordinary is taking shape. Join the waitlist and be
              among the first to experience a new standard of wellness care.
            </p>
          </ElevatedCard>
        </FadeIn>
      </Section>

      <WaitlistSection
        defaultInterest="care"
        eyebrow="Care Waitlist"
        title="Join the Care Waitlist"
        description="Secure your place for early access to Avelion Care at launch."
      />

      <Section variant="white" texture>
        <FadeIn>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-16">
          <FAQ items={careFaq} />
        </FadeIn>
      </Section>
    </>
  );
}
