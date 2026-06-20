import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PrestationCard from "@/components/PrestationCard";
import IllustrationStrip from "@/components/IllustrationStrip";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Coiffeur homme & barber à Bordeaux centre — Maison Reflet Bordeaux",
  description: "Coupe homme, dégradé, taille de barbe et rasage traditionnel à Bordeaux centre-ville. Barber expert chez Maison Reflet.",
};

const prestations = [
  { nom: "Coupe homme", description: "Coupe personnalisée adaptée au style, à la forme du visage et à la nature du cheveu. Shampoing et coiffage inclus.", duree: "30 min", tarif: "28 €" },
  { nom: "Dégradé", description: "Dégradé américain, bas ou haut, réalisé avec précision pour un résultat net et structuré.", duree: "35 min", tarif: "32 €" },
  { nom: "Coupe étudiant", description: "Coupe simplifiée idéale pour les profils plus classiques. Shampoing et coiffage compris.", duree: "25 min", tarif: "24 €" },
  { nom: "Shampoing + coupe + coiffage", description: "La formule complète : shampoing, coupe sur mesure et coiffage pour repartir impeccable.", duree: "45 min", tarif: "36 €" },
  { nom: "Taille de barbe", description: "Mise en forme, contours nets et hydratation de la barbe pour un rendu soigné et naturel.", duree: "20 min", tarif: "18 €" },
  { nom: "Rasage traditionnel", description: "Rasage au rasoir droit avec serviette chaude, mousse de qualité et après-rasage apaisant.", duree: "30 min", tarif: "26 €" },
  { nom: "Coupe + barbe", description: "La combinaison coupe + mise en forme de la barbe pour un look cohérent de A à Z.", duree: "55 min", tarif: "48 €" },
  { nom: "Soin cuir chevelu", description: "Traitement ciblé contre les démangeaisons, pellicules ou fragilité capillaire avec massage crânien.", duree: "30 min", tarif: "30 €" },
];

export default function CoiffureHommePage() {
  return (
    <>
      <PageHero
        label="Coiffure homme"
        title="Coupes, dégradés"
        titleGold="& barber"
        subtitle="Un espace pensé pour les hommes qui souhaitent prendre soin de leur image avec exigence et simplicité."
        bgPhoto="photo-1503951914875-452162b0f3f1"
      />

      <section style={{ background: "#FAF7F2", padding: "72px 0 48px" }}>
        <div className="container-site">
          <div className="reveal" style={{ maxWidth: "640px" }}>
            <p style={{ color: "#8A8178", lineHeight: 1.8, fontSize: "0.98rem", marginBottom: "20px" }}>
              Maison Reflet propose un espace coiffure et barber mixte où chaque homme est accueilli dans un cadre moderne et sans codes. Coupe classique, dégradé ou rasage traditionnel : nous adaptons chaque prestation à votre style.
            </p>
            <p style={{ color: "#8A8178", lineHeight: 1.8, fontSize: "0.98rem" }}>
              Tous nos coiffeurs et barbers sont formés pour travailler tous types de cheveux, de textures et de styles.
            </p>
          </div>
        </div>
      </section>

      <IllustrationStrip
        eyebrow="Espace homme"
        title="Coupes nettes"
        titleGold="& barbe soignee"
        items={[
          { id: "photo-1503951914875-452162b0f3f1", alt: "Coupe homme en salon barber", label: "Coupe homme", detail: "Classique ou moderne", position: "center top" },
          { id: "photo-1621605815971-fbc98d665033", alt: "Taille de barbe en salon", label: "Barbe structurée", detail: "Contours & finition" },
          { id: "photo-1605497788044-5a32c7078486", alt: "Rasage traditionnel barber", label: "Rasage traditionnel", detail: "Rituel barber" },
        ]}
      />

      <section style={{ background: "#FAF7F2", padding: "24px 0 100px" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "16px" }}>
            {prestations.map((p, i) => (
              <PrestationCard key={i} {...p} />
            ))}
          </div>
          <div className="reveal" style={{ marginTop: "48px", padding: "28px 32px", background: "#ffffff", border: "1px solid rgba(216,195,165,0.35)", borderLeft: "3px solid #B8975A" }}>
            <p style={{ color: "#8A8178", fontSize: "0.85rem", lineHeight: 1.7 }}>
              <strong style={{ color: "#111111" }}>À noter :</strong> Les tarifs peuvent varier selon l'épaisseur et la longueur des cheveux. Les durées sont indicatives.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#111111", padding: "80px 0" }}>
        <div className="container-site" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "32px" }}>
          <div className="reveal">
            <h2 className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 400 }}>
              Votre prochaine coupe<br /><em style={{ color: "#B8975A", fontStyle: "italic" }}>vous attend</em>
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
