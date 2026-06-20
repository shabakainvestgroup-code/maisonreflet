"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { salonInfo } from "@/lib/site-data";

const filtres = ["Tout", "Coiffure femme", "Coiffure homme", "Couleur", "Esthétique", "Barbe", "Salon"];

const photos = [
  { id: "photo-1595476108010-b4d1f102b1b1", cat: "Coiffure femme", label: "Coupe longue", alt: "Coiffure femme longue" },
  { id: "photo-1527799820374-dcf8d9d4a388", cat: "Couleur", label: "Balayage doré", alt: "Balayage couleur" },
  { id: "photo-1503951914875-452162b0f3f1", cat: "Coiffure homme", label: "Coupe classique", alt: "Coupe homme" },
  { id: "photo-1621605815971-fbc98d665033", cat: "Barbe", label: "Barbe taillée", alt: "Taille de barbe" },
  { id: "photo-1570172619644-dfd03ed5d881", cat: "Esthétique", label: "Soin visage", alt: "Soin visage esthétique" },
  { id: "photo-1560066984-138dadb4c035", cat: "Salon", label: "Ambiance salon", alt: "Salon coiffure Bordeaux" },
  { id: "photo-1522337360788-8b13dee7a37e", cat: "Coiffure femme", label: "Brushing volume", alt: "Brushing femme" },
  { id: "photo-1492106087820-71f1a00d2b11", cat: "Coiffure femme", label: "Coiffure soirée", alt: "Coiffure soirée" },
  { id: "photo-1612872087720-bb876e2e67d1", cat: "Coiffure homme", label: "Dégradé moderne", alt: "Dégradé homme" },
  { id: "photo-1604654894610-df63bc536371", cat: "Esthétique", label: "Beauté des ongles", alt: "Beauté des ongles" },
  { id: "photo-1519735777090-ec97162dc266", cat: "Couleur", label: "Coloration audacieuse", alt: "Coloration cheveux" },
  { id: "photo-1521590832167-7bcbfaa6381f", cat: "Salon", label: "Espace styling", alt: "Espace salon coiffure" },
  { id: "photo-1562322140-8baeececf3df", cat: "Salon", label: "Miroirs & lumières", alt: "Miroirs salon" },
  { id: "photo-1616394584738-fc6e612e71b9", cat: "Esthétique", label: "Beauté du regard", alt: "Sourcils design" },
  { id: "photo-1605497788044-5a32c7078486", cat: "Barbe", label: "Rasage traditionnel", alt: "Rasage barbe" },
  { id: "photo-1513201099705-a9746e1e201f", cat: "Salon", label: "Outils professionnels", alt: "Outils coiffure" },
];

const unsplash = (id: string, w = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export default function GaleriePage() {
  const [filtre, setFiltre] = useState("Tout");
  const filtered = filtre === "Tout" ? photos : photos.filter((p) => p.cat === filtre);

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <Image
          src={unsplash("photo-1522337360788-8b13dee7a37e", 1600)}
          alt="Galerie Maison Reflet Bordeaux"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,5,0.9) 0%, rgba(10,8,5,0.4) 60%, transparent 100%)" }} />
        <div className="container-site" style={{ position: "relative", zIndex: 1, paddingTop: "160px", paddingBottom: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
            <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" }}>Galerie</span>
          </div>
          <h1 className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 300, lineHeight: 1.05 }}>
            L'art du soin<br /><em style={{ fontStyle: "italic", color: "#B8975A" }}>& du style</em>
          </h1>
        </div>
      </section>

      {/* Filtres */}
      <section style={{ background: "#111111", padding: "28px 0", borderBottom: "1px solid rgba(184,151,90,0.1)", position: "sticky", top: "80px", zIndex: 50 }}>
        <div className="container-site">
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {filtres.map((f) => (
              <button
                key={f}
                onClick={() => setFiltre(f)}
                style={{
                  padding: "8px 18px",
                  background: filtre === f ? "#B8975A" : "transparent",
                  color: filtre === f ? "#111111" : "#8A8178",
                  border: `1px solid ${filtre === f ? "#B8975A" : "rgba(138,129,120,0.3)"}`,
                  cursor: "pointer",
                  fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
                  transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie masonry */}
      <section style={{ background: "#0d0d0d", padding: "40px 0 100px" }}>
        <div className="container-site">
          <div style={{ columns: "2 280px", gap: "10px" }}>
            {filtered.map((photo, i) => (
              <div
                key={`${photo.id}-${i}`}
                style={{
                  breakInside: "avoid",
                  marginBottom: "10px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                className="card-hover"
              >
                <Image
                  src={unsplash(photo.id, 600)}
                  alt={photo.alt}
                  width={600}
                  height={i % 3 === 0 ? 450 : i % 3 === 1 ? 360 : 540}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                {/* Hover overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(10,8,5,0.8) 0%, transparent 60%)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0"; }}
                />
                <div style={{ position: "absolute", bottom: "16px", left: "16px", opacity: 0, transition: "opacity 0.3s", pointerEvents: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0"; }}
                >
                  <div style={{ color: "#FAF7F2", fontSize: "0.9rem", fontFamily: "Cormorant Garamond, serif" }}>{photo.label}</div>
                  <div style={{ color: "#B8975A", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2px" }}>{photo.cat}</div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#8A8178" }}>
              Aucune photo dans cette catégorie.
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <p style={{ color: "#8A8178", fontSize: "0.88rem", marginBottom: "24px" }}>
              Retrouvez nos dernières réalisations sur Instagram
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={salonInfo.instagramHref} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#B8975A", textDecoration: "none", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", border: "1px solid #B8975A", padding: "12px 24px" }}>
                Suivre sur Instagram
              </a>
              <Link href="/reservation" className="btn-gold">Réserver <ArrowRight size={13} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
