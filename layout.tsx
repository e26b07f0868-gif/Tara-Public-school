import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import { SCHOOL } from "@/lib/site";

const font = Nunito_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SCHOOL.domain),
  title: { default: `${SCHOOL.name.en}, Nunera, Sohna`, template: `%s | ${SCHOOL.name.en}` },
  description: "Haryana Board school in Nunera, Sohna, Gurugram. Classes up to 12. Apply for admission, see fees and results.",
  keywords: [...SCHOOL.keywords],
  alternates: { canonical: "/" },
  openGraph: { title: SCHOOL.name.en, description: SCHOOL.tagline.en, type: "website", locale: "en_IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "School", name: SCHOOL.name.en, url: SCHOOL.domain,
    telephone: SCHOOL.phoneTel, email: SCHOOL.email, foundingDate: String(SCHOOL.established),
    address: { "@type": "PostalAddress", streetAddress: `${SCHOOL.address.street}, ${SCHOOL.address.village}`,
      addressLocality: "Sohna", addressRegion: "Haryana", addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: SCHOOL.geo.lat, longitude: SCHOOL.geo.lng },
  };
  return (
    <html lang="en">
      <body className={font.className}>
        <header className="sticky top-0 z-40 flex items-center gap-3 bg-white/90 px-4 py-2 shadow backdrop-blur">
          <img src="/images/school/logo-original.jpeg" alt="Tara School logo" width={44} height={44} className="rounded-full" />
          <Link href="/" className="text-base font-extrabold leading-tight sm:text-lg">{SCHOOL.name.en}</Link>
        </header>
        <main>{children}</main>
        <footer className="mt-16 bg-ink p-6 text-white">
          <p className="font-bold">{SCHOOL.name.en}</p>
          <p>{SCHOOL.address.street}, {SCHOOL.address.village}, {SCHOOL.address.tehsil}, {SCHOOL.address.district}, {SCHOOL.address.state}</p>
          <p>Phone: <a href={`tel:${SCHOOL.phoneTel}`} className="underline">{SCHOOL.phone}</a> · Email: {SCHOOL.email}</p>
          <p className="mt-2 text-sm opacity-70">School Code {SCHOOL.schoolCode} · Since {SCHOOL.established} · Haryana Board</p>
        </footer>
        <FloatingButtons />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
