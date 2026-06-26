import { Section } from "@/components/shared/section";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}. Learn how we collect, use, and protect your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-28">
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl text-navy md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-navy/55">Last updated: June 2026</p>

          <div className="mt-14 space-y-10 text-navy/70">
            <section>
              <h2 className="text-xl font-medium text-navy">Overview</h2>
              <p className="mt-4 leading-[1.8]">
                {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
                powered by {SITE.parentBrand}, respects your privacy. This policy
                describes how we collect, use, and protect information when you
                visit our website or join our waitlist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-navy">
                Information We Collect
              </h2>
              <p className="mt-4 leading-[1.8]">
                When you join our waitlist, we collect your name, email address,
                phone number, area of interest, and optionally your goals. We may
                also collect standard analytics data such as browser type, device
                information, and pages visited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-navy">
                How We Use Your Information
              </h2>
              <p className="mt-4 leading-[1.8]">
                We use your information to manage waitlist communications, send
                launch announcements and early access invitations, improve our
                website and services, and respond to your inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-navy">Data Security</h2>
              <p className="mt-4 leading-[1.8]">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-navy">Contact Us</h2>
              <p className="mt-4 leading-[1.8]">
                For privacy-related questions, contact us at{" "}
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
