import { Section } from "@/components/shared/section";
import { ElevatedCard } from "@/components/shared/elevated-card";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Contact Us",
  description: `Get in touch with ${SITE.name}. We'd love to hear from you.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-28">
      <Section variant="white" texture>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl text-navy md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-[1.8] text-navy/65">
            Have a question? We&apos;d love to hear from you.
          </p>

          <ElevatedCard hover={false} className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-silver">
              Email
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 block font-heading text-2xl text-navy transition-colors hover:text-clinical md:text-3xl"
            >
              {SITE.email}
            </a>

            <div className="mt-10 border-t border-platinum pt-10">
              <p className="text-sm text-navy/50">
                Powered by {SITE.parentBrand}
              </p>
              <p className="mt-2 text-navy/65">{SITE.tagline}</p>
            </div>
          </ElevatedCard>
        </div>
      </Section>
    </div>
  );
}
