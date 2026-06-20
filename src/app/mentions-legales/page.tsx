import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { salonInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mentions légales — Maison Reflet Bordeaux",
  description: "Mentions légales du site Maison Reflet Bordeaux.",
};

export default function MentionsLegalesPage() {
  const sectionStyle = { marginBottom: "48px" };
  const h2Style = { fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 500 as const, marginBottom: "16px", color: "#111111" };
  const pStyle = { color: "#8A8178", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: "12px" };

  return (
    <>
      <PageHero label="Informations légales" title="Mentions" titleGold="légales" dark />
      <section style={{ background: "#FAF7F2", padding: "80px 0 100px" }}>
        <div className="container-site" style={{ maxWidth: "800px" }}>
          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Éditeur du site</h2>
            <p style={pStyle}>Le présent site est édité par :</p>
            <p style={pStyle}><strong style={{ color: "#111111" }}>{salonInfo.name}</strong></p>
            <p style={pStyle}>Salon de coiffure et esthétique mixte<br />{salonInfo.addressLine1}<br />{salonInfo.addressLine2}<br />Téléphone : {salonInfo.phoneDisplay}<br />Email : {salonInfo.email}</p>
            <p style={pStyle}>Forme juridique : {salonInfo.legalForm}<br />SIRET : {salonInfo.siret}<br />RCS : {salonInfo.rcs}</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. Directeur de la publication</h2>
            <p style={pStyle}>Le directeur de la publication est : {salonInfo.publicationDirector}</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Hébergeur</h2>
            <p style={pStyle}>Le site est hébergé par :<br />{salonInfo.host}</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Propriété intellectuelle</h2>
            <p style={pStyle}>L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) sont la propriété exclusive de Maison Reflet Bordeaux, sauf mention contraire.</p>
            <p style={pStyle}>Toute reproduction, distribution, modification ou utilisation de ces contenus, sous quelque forme que ce soit, sans autorisation expresse et écrite est strictement interdite.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Limitation de responsabilité</h2>
            <p style={pStyle}>Maison Reflet Bordeaux s'efforce de fournir des informations exactes et à jour sur son site. Toutefois, l'exactitude et l'exhaustivité des informations ne peuvent être garanties.</p>
            <p style={pStyle}>Maison Reflet Bordeaux décline toute responsabilité pour tout dommage direct ou indirect résultant de l'utilisation du site ou des informations qu'il contient.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Liens hypertextes</h2>
            <p style={pStyle}>Le site peut contenir des liens vers des sites tiers. Maison Reflet Bordeaux n'est pas responsable du contenu de ces sites et des pratiques de confidentialité qui y sont appliquées.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Droit applicable</h2>
            <p style={pStyle}>Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
          </div>
        </div>
      </section>
    </>
  );
}
