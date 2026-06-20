import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowRight, Heart, Award, Clock, Shield, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Le salon — Maison Reflet Bordeaux",
  description: "Découvrez Maison Reflet Bordeaux : salon mixte haut de gamme. Notre histoire, nos valeurs, notre équipe au cœur de Bordeaux.",
};

const valeurs = [
  { icon: <Heart size={20} />, titre: "Écoute", texte: "Chaque prestation commence par un diagnostic attentif pour comprendre vos besoins et envies." },
  { icon: <Award size={20} />, titre: "Excellence", texte: "Des gestes précis, des produits sélectionnés et un résultat à la hauteur de vos attentes." },
  { icon: <Sparkles size={20} />, titre: "Élégance", texte: "Un cadre soigné, une ambiance épurée et un accueil chaleureux à chaque visite." },
  { icon: <Shield size={20} />, titre: "Hygiène", texte: "Des standards d'hygiène irréprochables dans tous les espaces du salon." },
  { icon: <Clock size={20} />, titre: "Ponctualité", texte: "Votre temps est précieux. Nous respectons vos créneaux et veillons à la fluidité des rendez-vous." },
  { icon: <Users size={20} />, titre: "Sur mesure", texte: "Chaque client est unique. Nous adaptons chaque prestation à votre morphologie, style et nature de cheveux." },
];

const teamPhotos = [
  { id: "photo-1595950653106-6c9ebd614d3a", nom: "Clara", poste: "Coiffeuse experte" },
  { id: "photo-1580489944761-15a19d654956", nom: "Inès", poste: "Coloriste" },
  { id: "photo-1567532939604-b6b5b0db2604", nom: "Maya", poste: "Esthéticienne" },
  { id: "photo-1612872087720-bb876e2e67d1", nom: "Nolan", poste: "Barber" },
];

const unsplash = (id: string, w = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export default function SalonPage() {
  return (
    <>
      <PageHero
        label="Notre histoire"
        title="Maison Reflet"
        titleGold="Bordeaux"
        subtitle="Un lieu complet dédié à la coiffure, à l'esthétique et au soin de l'image au cœur de la ville."
      />

      {/* Histoire */}
      <section style={{ background: "#FAF7F2", padding: "100px 0" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
                <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>Notre histoire</span>
              </div>
              <h2 className="font-cormorant" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "28px" }}>
                Plus qu'un salon,<br /><em style={{ fontStyle: "italic", color: "#B8975A" }}>une adresse</em>
              </h2>
              <p style={{ color: "#8A8178", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "20px" }}>
                Maison Reflet Bordeaux est né avec l'envie de créer un lieu complet dédié à la coiffure, à l'esthétique et au soin de l'image. Plus qu'un simple salon, c'est une adresse beauté au cœur de Bordeaux où chaque prestation commence par une écoute attentive et un conseil personnalisé.
              </p>
              <p style={{ color: "#8A8178", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "20px" }}>
                Nous avons conçu un espace où les femmes et les hommes se sentent également bienvenus — un lieu sans code, sans jugement, pensé pour mettre en valeur chaque personnalité.
              </p>
              <p style={{ color: "#8A8178", lineHeight: 1.8, fontSize: "0.95rem" }}>
                Du premier rendez-vous à la fidélisation, notre ambition est simple : que vous repartiez avec l'impression d'avoir été réellement pris en charge.
              </p>
            </div>
            <div className="reveal reveal-delay-2" style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/5", position: "relative", overflow: "hidden" }}>
                <Image
                  src={unsplash("photo-1560066984-138dadb4c035", 700)}
                  alt="Intérieur du salon Maison Reflet Bordeaux"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px", background: "linear-gradient(to top, rgba(10,8,5,0.8), transparent)" }}>
                  <div className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "1.2rem" }}>Bordeaux centre-ville</div>
                </div>
              </div>
              <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "100px", height: "100px", border: "1px solid rgba(184,151,90,0.3)", zIndex: -1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Galerie salon 3 photos */}
      <section style={{ background: "#FAF7F2", padding: "0 0 80px" }}>
        <div className="container-site">
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "8px", height: "320px" }}>
            {[
              { id: "photo-1521590832167-7bcbfaa6381f", alt: "Salon coiffure intérieur" },
              { id: "photo-1562322140-8baeececf3df", alt: "Miroir salon coiffure" },
              { id: "photo-1513201099705-a9746e1e201f", alt: "Outils coiffure" },
            ].map((p, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden" }}>
                <Image src={unsplash(p.id, 600)} alt={p.alt} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(17,13,5,0.2)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section style={{ background: "#111111", padding: "100px 0" }}>
        <div className="container-site">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
              <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>Nos valeurs</span>
              <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
            </div>
            <h2 className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400 }}>
              Ce qui nous<br /><em style={{ color: "#B8975A", fontStyle: "italic" }}>guide chaque jour</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1px", background: "rgba(184,151,90,0.08)" }}>
            {valeurs.map((v, i) => (
              <div key={i} className="reveal card-hover" style={{ background: "#111111", padding: "40px 32px" }}>
                <div style={{ color: "#B8975A", marginBottom: "16px" }}>{v.icon}</div>
                <h3 className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "1.4rem", fontWeight: 400, marginBottom: "12px" }}>{v.titre}</h3>
                <p style={{ color: "#8A8178", fontSize: "0.88rem", lineHeight: 1.7 }}>{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section style={{ background: "#FAF7F2", padding: "100px 0" }}>
        <div className="container-site">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
              <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>L'équipe</span>
              <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
            </div>
            <h2 className="font-cormorant" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400 }}>
              Des professionnels<br /><em style={{ fontStyle: "italic", color: "#B8975A" }}>passionnés</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "24px" }}>
            {teamPhotos.map((m, i) => (
              <div key={i} className="reveal card-hover" style={{ background: "#ffffff", border: "1px solid rgba(216,195,165,0.3)", overflow: "hidden" }}>
                <div style={{ aspectRatio: "3/4", position: "relative" }}>
                  <Image
                    src={unsplash(m.id, 400)}
                    alt={`${m.poste} Maison Reflet Bordeaux`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,5,0.4) 0%, transparent 60%)" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <div className="font-cormorant" style={{ fontSize: "1.2rem", fontWeight: 500, color: "#111111" }}>{m.nom}</div>
                  <div style={{ color: "#B8975A", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "4px" }}>{m.poste}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", padding: "80px 0", overflow: "hidden" }}>
        <Image
          src={unsplash("photo-1492106087820-71f1a00d2b11", 1400)}
          alt="Coiffure femme Bordeaux"
          fill
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(184,151,90,0.9)" }} />
        <div className="container-site" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="reveal">
            <h2 className="font-cormorant" style={{ color: "#111111", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 400, marginBottom: "24px" }}>
              Venez nous rendre visite
            </h2>
            <Link href="/reservation" className="btn-primary">Prendre rendez-vous <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
