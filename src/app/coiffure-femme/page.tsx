import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PrestationCard from "@/components/PrestationCard";
import IllustrationStrip from "@/components/IllustrationStrip";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Coiffeur femme à Bordeaux centre — Maison Reflet Bordeaux",
  description: "Coupe, brushing, coloration, balayage, soin et coiffure événementielle pour femmes à Bordeaux centre-ville. Réservez en ligne chez Maison Reflet.",
};

const prestations = [
  { nom: "Coupe femme", description: "Diagnostic personnalisé, shampoing, coupe adaptée à la morphologie du visage et coiffage soigné.", duree: "45 min", tarif: "45 €" },
  { nom: "Brushing", description: "Shampoing, soin et mise en forme au brushing pour un résultat lisse, volumineux ou naturel selon votre souhait.", duree: "30 min", tarif: "à partir de 28 €" },
  { nom: "Coupe + brushing", description: "Coupe personnalisée suivie d'un brushing complet pour un résultat parfait de A à Z.", duree: "1h15", tarif: "62 €" },
  { nom: "Coloration racines", description: "Coloration ciblée sur les racines pour un résultat homogène et durable, avec un soin de finition.", duree: "1h30", tarif: "à partir de 58 €" },
  { nom: "Coloration complète", description: "Coloration intégrale des cheveux avec diagnostic de couleur, application soigneuse et soin final.", duree: "2h", tarif: "à partir de 76 €" },
  { nom: "Balayage / mèches", description: "Technique méchée ou balayage pour un effet naturel, lumineux ou audacieux selon votre personnalité.", duree: "2h30", tarif: "à partir de 95 €" },
  { nom: "Patine", description: "Soin colorant pour neutraliser les reflets indésirables et apporter éclat et profondeur à la couleur.", duree: "45 min", tarif: "32 €" },
  { nom: "Soin profond", description: "Masque nourrissant, reconstructeur ou hydratant adapté à la nature de vos cheveux, avec massage crânien.", duree: "30 min", tarif: "35 €" },
  { nom: "Lissage", description: "Lissage brésilien ou kératine pour des cheveux disciplinés, brillants et plus faciles à coiffer durablement.", duree: "3h", tarif: "à partir de 160 €" },
  { nom: "Coiffure événementielle", description: "Coiffure de mariage, soirée ou cérémonie réalisée sur mesure avec essai préalable possible.", duree: "1h30", tarif: "sur devis" },
];

export default function CoiffureFemmePage() {
  return (
    <>
      <PageHero
        label="Coiffure femme"
        title="Coupes, couleurs"
        titleGold="& soins femme"
        subtitle="De la coupe du quotidien à la coiffure événementielle, notre équipe vous accompagne avec expertise et créativité."
        bgPhoto="photo-1522337360788-8b13dee7a37e"
      />

      {/* Intro */}
      <section style={{ background: "#FAF7F2", padding: "72px 0 48px" }}>
        <div className="container-site">
          <div className="reveal" style={{ maxWidth: "640px" }}>
            <p style={{ color: "#8A8178", lineHeight: 1.8, fontSize: "0.98rem", marginBottom: "20px" }}>
              Chez Maison Reflet, chaque prestation coiffure femme commence par un diagnostic approfondi. Nous prenons le temps de comprendre votre style de vie, vos envies et la nature de vos cheveux pour vous proposer le résultat le plus adapté.
            </p>
            <p style={{ color: "#8A8178", lineHeight: 1.8, fontSize: "0.98rem" }}>
              Les tarifs indiqués sont des points de départ. Pour les prestations techniques (colorations, balayages, lissages), le tarif final sera établi après diagnostic.
            </p>
          </div>
        </div>
      </section>

      <IllustrationStrip
        eyebrow="Inspiration coiffure"
        title="Des coupes et couleurs"
        titleGold="mises en image"
        items={[
          { id: "photo-1522337360788-8b13dee7a37e", alt: "Brushing femme en salon", label: "Brushing & volume", detail: "Mise en forme" },
          { id: "photo-1527799820374-dcf8d9d4a388", alt: "Coloration et balayage cheveux", label: "Couleurs lumineuses", detail: "Balayage & patine" },
          { id: "photo-1492106087820-71f1a00d2b11", alt: "Coiffure femme soignée", label: "Coiffures sur mesure", detail: "Coupe & finition", position: "center top" },
        ]}
      />

      {/* Grille prestations */}
      <section style={{ background: "#FAF7F2", padding: "24px 0 100px" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "16px" }}>
            {prestations.map((p, i) => (
              <PrestationCard key={i} {...p} />
            ))}
          </div>

          <div className="reveal" style={{ marginTop: "48px", padding: "28px 32px", background: "#ffffff", border: "1px solid rgba(216,195,165,0.35)", borderLeft: "3px solid #B8975A" }}>
            <p style={{ color: "#8A8178", fontSize: "0.85rem", lineHeight: 1.7 }}>
              <strong style={{ color: "#111111" }}>À noter :</strong> Les prix peuvent varier selon la longueur, l'épaisseur et la nature des cheveux. Un devis personnalisé peut être établi pour les prestations techniques. Les durées sont indicatives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111111", padding: "80px 0" }}>
        <div className="container-site" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "32px" }}>
          <div className="reveal">
            <h2 className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 400 }}>
              Prête pour votre<br /><em style={{ color: "#B8975A", fontStyle: "italic" }}>prochain rendez-vous ?</em>
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <Link href="/reservation" className="btn-gold">Réserver maintenant <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
