import { Section } from "@/components/shared/section";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name}. Please read these terms before using our website or joining our waitlist.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-28">
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl text-navy md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-navy/55">Last updated: June 2026</p>

          <div className="mt-14 space-y-10 text-navy/70">
            <section>
              <h2 className="text-xl font-medium text-navy">Agreement</h2>
              <p className="mt-4 leading-[1.8]">
                By accessing the {SITE.name} website, you agree to these Terms of
                Service. If you do not agree, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-navy">
                Pre-Launch Status
              </h2>
              <p className="mt-4 leading-[1.8]">
                {SITE.name} is currently in pre-launch. Products and services
                described on this website are not yet available. Joining the
                waitlist does not guarantee access or availability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-navy">
                Research Products Disclaimer
              </h2>
              <p className="mt-4 leading-[1.8]">
                Avelion Wellness products, when available, are intended for
                research use only. They are not intended to diagnose, treat, cure,
                or prevent any disease and are not for human or veterinary
                consumption.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-navy">
                Wellness Care Disclaimer
              </h2>
              <p className="mt-4 leading-[1.8]">
                Avelion Care does not provide medical advice and does not
                guarantee specific outcomes. Services, when available, will be
                provided by licensed providers when clinically appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-navy">Contact</h2>
              <p className="mt-4 leading-[1.8]">
                Questions about these terms? Contact us at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-clinical hover:underline"
                >
                  {SITE.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}
