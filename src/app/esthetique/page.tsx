import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PrestationCard from "@/components/PrestationCard";
import IllustrationStrip from "@/components/IllustrationStrip";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Institut esthétique à Bordeaux centre — Maison Reflet Bordeaux",
  description: "Soins visage, épilation, beauté du regard, maquillage, mains et pieds à Bordeaux centre. Institut esthétique Maison Reflet.",
};

const soinsVisage = [
  { nom: "Soin visage express", description: "Nettoyage, hydratation et protection en un soin rapide et efficace pour un teint immédiatement lumineux.", duree: "30 min", tarif: "38 €" },
  { nom: "Soin visage complet", description: "Diagnostic de peau, nettoyage en profondeur, exfoliation, masque ciblé et hydratation intensive.", duree: "1h", tarif: "68 €" },
  { nom: "Soin hydratant", description: "Soin confort pour les peaux deshydratées ou sensibles. Résultat immédiat en souplesse et confort.", duree: "45 min", tarif: "55 €" },
  { nom: "Soin éclat", description: "Soin illuminateur pour retrouver un teint lumineux, unifié et éclatant, idéal avant un événement.", duree: "50 min", tarif: "62 €" },
  { nom: "Soin anti-âge", description: "Protocole liftant et repulpant pour atténuer les signes du temps et redéfinir les contours du visage.", duree: "1h15", tarif: "82 €" },
];

const epilation = [
  { nom: "Épilation sourcils", description: "Mise en forme et épilation des sourcils pour un regard structuré et harmonieux.", duree: "15 min", tarif: "14 €" },
  { nom: "Épilation lèvres", description: "Épilation précise de la lèvre supérieure ou inférieure pour un résultat net et durable.", duree: "10 min", tarif: "10 €" },
  { nom: "Épilation visage", description: "Épilation complète du visage (joues, menton, duvet) pour une peau parfaitement lisse.", duree: "20 min", tarif: "28 €" },
  { nom: "Épilation aisselles", description: "Épilation complète des aisselles à la cire chaude ou tiède pour un résultat durable.", duree: "20 min", tarif: "18 €" },
  { nom: "Épilation bras", description: "Épilation des bras demi ou entiers pour une peau douce et nette.", duree: "30 min", tarif: "24 €" },
  { nom: "Épilation jambes", description: "Épilation demi-jambes ou jambes entières à la cire pour un résultat longue durée.", duree: "45 min", tarif: "à partir de 26 €" },
  { nom: "Épilation maillot", description: "Épilation maillot classique, échancré ou intégral selon vos préférences.", duree: "20 min", tarif: "à partir de 20 €" },
];

const regard = [
  { nom: "Restructuration sourcils", description: "Redessin et mise en forme des sourcils selon la morphologie du visage pour un regard harmonieux.", duree: "20 min", tarif: "24 €" },
  { nom: "Teinture sourcils", description: "Coloration des sourcils pour un regard plus défini et une teinte adaptée à votre carnation.", duree: "20 min", tarif: "18 €" },
  { nom: "Teinture cils", description: "Coloration des cils pour des yeux plus intenses, même sans mascara.", duree: "20 min", tarif: "20 €" },
  { nom: "Rehaussement de cils", description: "Technique de permanente pour des cils naturellement recourbés et mis en valeur durablement.", duree: "1h", tarif: "58 €" },
];

const mainsPieds = [
  { nom: "Manucure", description: "Soin complet des mains : lima, repoussage des cuticules, soin et finition selon votre souhait.", duree: "30 min", tarif: "28 €" },
  { nom: "Pose de vernis classique", description: "Application de vernis de qualité professionnelle en finition soignée et durable.", duree: "15 min", tarif: "16 €" },
  { nom: "Semi-permanent", description: "Pose de vernis semi-permanent longue durée pour des ongles impeccables jusqu'à 3 semaines.", duree: "45 min", tarif: "38 €" },
  { nom: "Beauté des pieds", description: "Soin complet des pieds, lime, soin des cuticules et pose de vernis.", duree: "45 min", tarif: "42 €" },
  { nom: "Soin des mains", description: "Exfoliation, masque nourrissant et massage des mains pour une peau douce et régénérée.", duree: "30 min", tarif: "30 €" },
  { nom: "Soin des pieds", description: "Exfoliation, bain, masque et massage des pieds pour un confort total et une peau lisse.", duree: "40 min", tarif: "36 €" },
];

const maquillage = [
  { nom: "Maquillage jour", description: "Maquillage naturel et lumineux pour sublimer votre teint au quotidien.", duree: "30 min", tarif: "35 €" },
  { nom: "Maquillage soirée", description: "Maquillage intense et structuré pour une occasion spéciale ou une sortie mémorable.", duree: "45 min", tarif: "52 €" },
  { nom: "Maquillage événementiel", description: "Maquillage de mariée, cérémonie ou événement avec essai préalable possible.", duree: "1h30", tarif: "sur devis" },
];

function SectionTitle({ label, title, gold }: { label: string; title: string; gold?: string }) {
  return (
    <div className="reveal" style={{ marginBottom: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
        <div style={{ width: "28px", height: "1px", background: "#B8975A" }} />
        <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>{label}</span>
      </div>
      <h2 className="font-cormorant" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 400, lineHeight: 1.15 }}>
        {title}{gold && <><br /><em style={{ fontStyle: "italic", color: "#B8975A" }}>{gold}</em></>}
      </h2>
    </div>
  );
}

export default function EsthetiquePage() {
  return (
    <>
      <PageHero
        label="Esthétique"
        title="Soins, épilation"
        titleGold="& beauté"
        subtitle="Prenez soin de vous dans un espace dédié à votre bien-être et à votre beauté, avec des prestations personnalisées."
        bgPhoto="photo-1570172619644-dfd03ed5d881"
      />

      <IllustrationStrip
        eyebrow="Institut"
        title="Des soins visuels"
        titleGold="pour chaque rituel"
        items={[
          { id: "photo-1570172619644-dfd03ed5d881", alt: "Soin visage en institut", label: "Soins visage", detail: "Hydratation & éclat" },
          { id: "photo-1604654894610-df63bc536371", alt: "Beauté des ongles en institut", label: "Mains & pieds", detail: "Finition soignée" },
          { id: "photo-1616394584738-fc6e612e71b9", alt: "Beauté du regard et sourcils", label: "Beauté du regard", detail: "Cils & sourcils" },
        ]}
      />

      <section style={{ background: "#FAF7F2", padding: "100px 0" }}>
        <div className="container-site">
          {/* Soins visage */}
          <div style={{ marginBottom: "80px" }}>
            <SectionTitle label="Soins" title="Soins du" gold="visage" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "16px" }}>
              {soinsVisage.map((p, i) => <PrestationCard key={i} {...p} />)}
            </div>
          </div>

          {/* Épilation */}
          <div style={{ marginBottom: "80px" }}>
            <SectionTitle label="Corps" title="Épilation" gold="professionnelle" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "16px" }}>
              {epilation.map((p, i) => <PrestationCard key={i} {...p} />)}
            </div>
          </div>

          {/* Regard */}
          <div style={{ marginBottom: "80px" }}>
            <SectionTitle label="Yeux" title="Beauté" gold="du regard" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "16px" }}>
              {regard.map((p, i) => <PrestationCard key={i} {...p} />)}
            </div>
          </div>

          {/* Mains et pieds */}
          <div style={{ marginBottom: "80px" }}>
            <SectionTitle label="Mains & pieds" title="Mains" gold="& pieds" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "16px" }}>
              {mainsPieds.map((p, i) => <PrestationCard key={i} {...p} />)}
            </div>
          </div>

          {/* Maquillage */}
          <div>
            <SectionTitle label="Make-up" title="Maquillage" gold="professionnel" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "16px" }}>
              {maquillage.map((p, i) => <PrestationCard key={i} {...p} />)}
            </div>
          </div>

          <div className="reveal" style={{ marginTop: "64px", padding: "28px 32px", background: "#ffffff", border: "1px solid rgba(216,195,165,0.35)", borderLeft: "3px solid #B8975A" }}>
            <p style={{ color: "#8A8178", fontSize: "0.85rem", lineHeight: 1.7 }}>
              <strong style={{ color: "#111111" }}>À noter :</strong> Tous les tarifs sont indicatifs. Certaines prestations peuvent varier selon votre type de peau ou vos besoins spécifiques. Un devis vous sera proposé si nécessaire.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg,#B8975A 0%,#9a7d48 100%)", padding: "72px 0" }}>
        <div className="container-site" style={{ textAlign: "center" }}>
          <div className="reveal">
            <h2 className="font-cormorant" style={{ color: "#111111", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 400, marginBottom: "24px" }}>
              Offrez-vous un moment de soin
            </h2>
            <Link href="/reservation" className="btn-primary">Prendre rendez-vous <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
