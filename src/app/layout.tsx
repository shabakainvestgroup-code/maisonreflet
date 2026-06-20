import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    default: "Maison Reflet Bordeaux — Coiffure & esthétique à Bordeaux centre",
    template: "%s — Maison Reflet Bordeaux",
  },
  description:
    "Salon de coiffure et esthétique mixte au cœur de Bordeaux centre-ville. Coupe, couleur, barbe, soins visage, épilation et beauté du regard. Réservez en ligne.",
  keywords: [
    "salon coiffure Bordeaux centre",
    "coiffeur femme Bordeaux",
    "coiffeur homme Bordeaux",
    "salon esthétique Bordeaux",
    "barber Bordeaux centre",
    "Maison Reflet Bordeaux",
  ],
  openGraph: {
    title: "Maison Reflet Bordeaux — Coiffure & esthétique",
    description:
      "Salon mixte haut de gamme au cœur de Bordeaux. Coiffure femme, coiffure homme, esthétique et soins.",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="sticky-cta">
          <a href="/reservation" className="btn-gold w-full text-center justify-center block">
            Réserver un rendez-vous
          </a>
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}
