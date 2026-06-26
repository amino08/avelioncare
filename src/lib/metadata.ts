import type { Metadata } from "next";
import { SITE } from "./constants";

const defaultOgImage = `${SITE.url}/opengraph-image`;

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.brand,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.brand,
  alternateName: SITE.name,
  url: SITE.url,
  description:
    "Avelion is building the future of longevity through premium research products and elevated wellness care.",
  parentOrganization: {
    "@type": "Organization",
    name: SITE.parentBrand,
  },
  sameAs: [],
};
