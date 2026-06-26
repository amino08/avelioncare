import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { createMetadata, organizationJsonLd } from "@/lib/metadata";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const rootMetadata = createMetadata({
  title: "Avelion Care Launching Soon",
  description:
    "AvelionCare is launching soon — personalized wellness built around longevity and patient-first design. Also discover Avelion Wellness research products. Powered by AgeWell. Join the waitlist.",
  path: "",
  keywords: [
    "AvelionCare",
    "Avelion",
    "Avelion Care",
    "longevity",
    "personalized wellness",
    "Avelion Wellness",
    "research peptides",
    "AgeWell",
  ],
});

export const metadata: Metadata = {
  ...rootMetadata,
  title: {
    default: "AvelionCare — Avelion Care Launching Soon",
    template: "%s | AvelionCare",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") ?? "";
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <head>
        {!isAdmin && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationJsonLd),
            }}
          />
        )}
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {!isAdmin && <Navbar />}
        <main className={isAdmin ? "flex-1 bg-platinum-soft" : "flex-1"}>
          {children}
        </main>
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}
