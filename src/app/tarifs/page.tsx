import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import IllustrationStrip from "@/components/IllustrationStrip";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs coiffure & esthétique — Maison Reflet Bordeaux",
  description: "Découvrez les tarifs de Maison Reflet Bordeaux : coiffure femme, coiffure homme, barber, soins visage, épilation, beauté du regard, mains et pieds.",
};

const categories = [
  {
    titre: "Coiffure femme",
    prestations: [
      { nom: "Coupe femme", duree: "45 min", tarif: "45 €" },
      { nom: "Brushing", duree: "30 min", tarif: "à partir de 28 €" },
      { nom: "Coupe + brushing", duree: "1h15", tarif: "62 €" },
      { nom: "Coloration racines", duree: "1h30", tarif: "à partir de 58 €" },
      { nom: "Coloration complète", duree: "2h", tarif: "à partir de 76 €" },
      { nom: "Balayage / mèches", duree: "2h30", tarif: "à partir de 95 €" },
      { nom: "Patine", duree: "45 min", tarif: "32 €" },
      { nom: "Soin profond", duree: "30 min", tarif: "35 €" },
      { nom: "Lissage", duree: "3h", tarif: "à partir de 160 €" },
      { nom: "Coiffure événementielle", duree: "1h30", tarif: "sur devis" },
    ],
  },
  {
    titre: "Coiffure homme",
    prestations: [
      { nom: "Coupe homme", duree: "30 min", tarif: "28 €" },
      { nom: "Dégradé", duree: "35 min", tarif: "32 €" },
      { nom: "Coupe étudiant", duree: "25 min", tarif: "24 €" },
      { nom: "Shampoing + coupe + coiffage", duree: "45 min", tarif: "36 €" },
      { nom: "Soin cuir chevelu", duree: "30 min", tarif: "30 €" },
    ],
  },
  {
    titre: "Barber / Barbe",
    prestations: [
      { nom: "Taille de barbe", duree: "20 min", tarif: "18 €" },
      { nom: "Rasage traditionnel", duree: "30 min", tarif: "26 €" },
      { nom: "Coupe + barbe", duree: "55 min", tarif: "48 €" },
    ],
  },
  {
    titre: "Soins visage",
    prestations: [
      { nom: "Soin visage express", duree: "30 min", tarif: "38 €" },
      { nom: "Soin visage complet", duree: "1h", tarif: "68 €" },
      { nom: "Soin hydratant", duree: "45 min", tarif: "55 €" },
      { nom: "Soin éclat", duree: "50 min", tarif: "62 €" },
      { nom: "Soin anti-âge", duree: "1h15", tarif: "82 €" },
    ],
  },
  {
    titre: "Épilation",
    prestations: [
      { nom: "Sourcils", duree: "15 min", tarif: "14 €" },
      { nom: "Lèvres", duree: "10 min", tarif: "10 €" },
      { nom: "Visage complet", duree: "20 min", tarif: "28 €" },
      { nom: "Aisselles", duree: "20 min", tarif: "18 €" },
      { nom: "Bras", duree: "30 min", tarif: "24 €" },
      { nom: "Demi-jambes", duree: "30 min", tarif: "26 €" },
      { nom: "Jambes entières", duree: "45 min", tarif: "42 €" },
      { nom: "Maillot classique", duree: "20 min", tarif: "20 €" },
      { nom: "Maillot intégral", duree: "30 min", tarif: "36 €" },
    ],
  },
  {
    titre: "Beauté du regard",
    prestations: [
      { nom: "Restructuration sourcils", duree: "20 min", tarif: "24 €" },
      { nom: "Teinture sourcils", duree: "20 min", tarif: "18 €" },
      { nom: "Teinture cils", duree: "20 min", tarif: "20 €" },
      { nom: "Rehaussement de cils", duree: "1h", tarif: "58 €" },
    ],
  },
  {
    titre: "Mains & pieds",
    prestations: [
      { nom: "Manucure", duree: "30 min", tarif: "28 €" },
      { nom: "Vernis classique", duree: "15 min", tarif: "16 €" },
      { nom: "Semi-permanent", duree: "45 min", tarif: "38 €" },
      { nom: "Beauté des pieds", duree: "45 min", tarif: "42 €" },
      { nom: "Soin des mains", duree: "30 min", tarif: "30 €" },
      { nom: "Soin des pieds", duree: "40 min", tarif: "36 €" },
    ],
  },
  {
    titre: "Maquillage",
    prestations: [
      { nom: "Maquillage jour", duree: "30 min", tarif: "35 €" },
      { nom: "Maquillage soirée", duree: "45 min", tarif: "52 €" },
      { nom: "Maquillage événementiel", duree: "1h30", tarif: "sur devis" },
    ],
  },
];

export default function TarifsPage() {
  return (
    <>
      <PageHero
        label="Nos tarifs"
        title="Tarifs coiffure"
        titleGold="& esthétique"
        subtitle="Tous nos tarifs sont transparents et affichés à partir de. Le tarif final est établi après diagnostic pour les prestations techniques."
      />

      <IllustrationStrip
        eyebrow="Prestations"
        title="Des services lisibles"
        titleGold="avant de réserver"
        items={[
          { id: "photo-1527799820374-dcf8d9d4a388", alt: "Balayage et coloration cheveux", label: "Couleur & balayage", detail: "Sur devis si besoin" },
          { id: "photo-1503951914875-452162b0f3f1", alt: "Coupe homme barber", label: "Coiffure homme", detail: "Coupes & barbe" },
          { id: "photo-1570172619644-dfd03ed5d881", alt: "Soin visage esthétique", label: "Soins esthétiques", detail: "Visage & regard" },
        ]}
      />

      <section style={{ background: "#FAF7F2", padding: "80px 0 100px" }}>
        <div className="container-site">
          {/* Notice */}
          <div className="reveal" style={{ marginBottom: "56px", padding: "24px 28px", background: "#ffffff", border: "1px solid rgba(216,195,165,0.35)", borderLeft: "3px solid #B8975A" }}>
            <p style={{ color: "#8A8178", fontSize: "0.85rem", lineHeight: 1.7 }}>
              <strong style={{ color: "#111111" }}>Information tarifaire :</strong> Les prix affichés sont des tarifs de départ. Ils peuvent varier selon la longueur, l'épaisseur des cheveux, la nature de la peau ou la complexité de la prestation. Un devis peut être établi pour les prestations techniques. Les durées sont indicatives.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,400px),1fr))", gap: "40px" }}>
            {categories.map((cat, ci) => (
              <div key={ci} className="reveal" style={{ background: "#ffffff", border: "1px solid rgba(216,195,165,0.3)" }}>
                <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(216,195,165,0.3)", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "3px", height: "20px", background: "#B8975A", flexShrink: 0 }} />
                  <h2 className="font-cormorant" style={{ fontSize: "1.35rem", fontWeight: 500, color: "#111111" }}>{cat.titre}</h2>
                </div>
                <div className="tarif-table-wrap"><table className="tarif-table">
                  <thead>
                    <tr>
                      <th>Prestation</th>
                      <th style={{ textAlign: "right" }}>Tarif</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.prestations.map((p, pi) => (
                      <tr key={pi}>
                        <td style={{ color: "#111111", fontWeight: 400 }}>{p.nom}<br/><span style={{ color: "#8A8178", fontSize: "0.75rem" }}>{p.duree}</span></td>
                        <td className="price">{p.tarif}</td>
                      </tr>
                    ))}
                  </tbody>
                </table></div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: "64px" }}>
            <p style={{ color: "#8A8178", fontSize: "0.9rem", marginBottom: "32px" }}>
              Des questions sur nos prestations ou nos tarifs ?
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/reservation" className="btn-gold">Réserver maintenant <ArrowRight size={14} /></Link>
              <Link href="/contact" className="btn-outline-dark">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
