export const SITE = {
  name: "AVELION",
  brand: "AvelionCare",
  tagline: "Building the future of longevity.",
  parentBrand: "AgeWell",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://avelioncare.com",
  email: "hello@avelioncare.com",
} as const;

export const BRAND = {
  navy: "#0A1628",
  clinicalBlue: "#1D5FBF",
  white: "#FFFFFF",
  silver: "#B8C3D1",
  platinum: "#E8EDF2",
  platinumSoft: "#F7F9FC",
  coolSilver: "#CBD5E1",
  dark: "#07101E",
} as const;

export const NAV_LINKS = [
  { href: "/care", label: "Care" },
  { href: "/wellness", label: "Wellness" },
  { href: "/story", label: "Our Story" },
  { href: "/waitlist", label: "Join Waitlist" },
] as const;

/** Production photography — landing & brand */
export const IMAGES = {
  heroCare: "/images/hero-care.png",
  careConsultation: "/images/care-consultation.png",
  brandStory: "/images/brand-story.png",
  lifestyleLongevity: "/images/lifestyle-longevity.png",
} as const;

export type ImageKey = keyof typeof IMAGES;
