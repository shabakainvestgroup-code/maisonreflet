import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scissors, Sparkles, Star, MapPin, Phone, ChevronRight } from "lucide-react";
import { salonInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Maison Reflet Bordeaux — Coiffure & esthétique à Bordeaux centre",
  description: "Salon de coiffure et esthétique mixte au cœur de Bordeaux. Coupe, couleur, barbe, soins visage, épilation. Réservez votre rendez-vous en ligne.",
};

const avis = [
  { nom: "Sophie M.", note: 5, texte: "Salon élégant, équipe professionnelle et très bons conseils. Je repars toujours ravie !", prestation: "Coiffure femme" },
  { nom: "Thomas L.", note: 5, texte: "Très belle expérience, prise de rendez-vous simple et résultat impeccable. Je recommande.", prestation: "Coupe homme" },
  { nom: "Claire D.", note: 5, texte: "Un vrai salon mixte où l'on se sent bien, autant pour la coiffure que les soins du visage.", prestation: "Soin visage" },
  { nom: "Antoine B.", note: 5, texte: "Ambiance soignée, personnel attentif. La coupe + barbe était parfaite. À recommander.", prestation: "Barber" },
  { nom: "Nathalie P.", note: 5, texte: "Une adresse beauté complète et élégante au cœur de Bordeaux. Soin du regard exceptionnel.", prestation: "Beauté du regard" },
  { nom: "Marc F.", note: 5, texte: "Très professionnel, accueil chaleureux. Je m'y rends régulièrement pour mes coupes.", prestation: "Coiffure homme" },
];

const atouts = [
  "Salon mixte femme & homme",
  "Bordeaux centre-ville",
  "Réservation en ligne 24h/24",
  "Coiffure & esthétique au même endroit",
  "Conseils personnalisés",
  "Ambiance moderne & élégante",
  "Équipe professionnelle",
  "Expérience client fluide",
];

// Unsplash photo IDs
const photos = {
  hero: "photo-1560066984-138dadb4c035",           // salon intérieur
  salon: "photo-1522337360788-8b13dee7a37e",        // coiffure femme
  coiffureFemme: "photo-1492106087820-71f1a00d2b11", // brushing femme
  coiffureHomme: "photo-1503951914875-452162b0f3f1", // barber homme
  esthetique: "photo-1570172619644-dfd03ed5d881",    // soin visage
  galerie1: "photo-1527799820374-dcf8d9d4a388",     // couleur cheveux
  galerie2: "photo-1621605815971-fbc98d665033",     // barber
  galerie3: "photo-1595476108010-b4d1f102b1b1",     // cheveux femme
  galerie4: "photo-1604654894610-df63bc536371",     // esthétique ongles
};

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Photo de fond */}
        <Image
          src={unsplash(photos.hero, 1600)}
          alt="Intérieur du salon Maison Reflet Bordeaux"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Overlay sombre premium */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,8,5,0.88) 0%, rgba(17,12,5,0.75) 50%, rgba(10,8,5,0.80) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(184,151,90,0.06) 0%, transparent 70%)" }} />
        {/* Ligne verticale déco */}
        <div style={{ position: "absolute", top: "15%", right: "8%", width: "1px", height: "35vh", background: "linear-gradient(to bottom, transparent, rgba(184,151,90,0.5), transparent)" }} />
        {/* Watermark */}
        <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%) rotate(90deg)", fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(60px,8vw,100px)", fontWeight: 300, color: "rgba(184,151,90,0.07)", letterSpacing: "0.3em", whiteSpace: "nowrap", userSelect: "none" }}>BORDEAUX</div>

        <div className="container-site" style={{ position: "relative", zIndex: 1, paddingTop: "140px", paddingBottom: "100px" }}>
          <div style={{ maxWidth: "780px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px", opacity: 0, animation: "fadeUp 0.8s ease 0.2s forwards" }}>
              <div style={{ width: "40px", height: "1px", background: "#B8975A" }} />
              <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" }}>Coiffure &amp; esthétique — Bordeaux Centre</span>
            </div>
            <h1 className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "clamp(3.5rem,7vw,6.5rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: "28px", opacity: 0, animation: "fadeUp 0.9s ease 0.35s forwards" }}>
              Maison Reflet<br /><em style={{ fontStyle: "italic", color: "#B8975A" }}>Bordeaux</em>
            </h1>
            <p style={{ color: "rgba(250,247,242,0.7)", fontSize: "clamp(1rem,1.5vw,1.15rem)", lineHeight: 1.8, maxWidth: "560px", marginBottom: "48px", opacity: 0, animation: "fadeUp 0.9s ease 0.5s forwards" }}>
              Coupe, couleur, barbe, soins visage, épilation et beauté du regard dans un espace moderne pensé pour les femmes et les hommes.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", opacity: 0, animation: "fadeUp 0.9s ease 0.65s forwards" }}>
              <Link href="/reservation" className="btn-gold">Réserver un rendez-vous <ArrowRight size={14} /></Link>
              <Link href="/coiffure-femme" className="btn-outline-light">Voir les prestations</Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginTop: "72px", opacity: 0, animation: "fadeUp 0.9s ease 0.8s forwards" }}>
              {[{ n: "500+", label: "Clients satisfaits" }, { n: "10+", label: "Prestations" }, { n: "5★", label: "Note moyenne" }].map(({ n, label }) => (
                <div key={label}>
                  <div className="font-cormorant" style={{ color: "#B8975A", fontSize: "2.2rem", fontWeight: 400, lineHeight: 1 }}>{n}</div>
                  <div style={{ color: "rgba(250,247,242,0.5)", fontSize: "0.72rem", letterSpacing: "0.1em", marginTop: "4px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0, animation: "fadeIn 1s ease 1.2s forwards" }}>
          <span style={{ color: "rgba(250,247,242,0.4)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Découvrir</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #B8975A, transparent)" }} />
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section style={{ background: "#FAF7F2", padding: "100px 0" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
                <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>Le salon</span>
              </div>
              <h2 className="font-cormorant" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 400, lineHeight: 1.15, marginBottom: "28px" }}>
                Une adresse beauté<br /><em style={{ fontStyle: "italic", color: "#B8975A" }}>au cœur de Bordeaux</em>
              </h2>
              <p style={{ color: "#8A8178", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "24px" }}>Situé à Bordeaux centre-ville, Maison Reflet Bordeaux réunit coiffure, esthétique et soins personnalisés dans un lieu élégant, moderne et chaleureux.</p>
              <p style={{ color: "#8A8178", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "36px" }}>Notre équipe accompagne chaque client avec une approche sur mesure, du diagnostic au résultat final.</p>
              <Link href="/salon" className="btn-outline-dark">Découvrir le salon <ArrowRight size={13} /></Link>
            </div>
            <div className="reveal reveal-delay-2" style={{ position: "relative" }}>
              <div style={{ aspectRatio: "3/4", position: "relative", overflow: "hidden" }}>
                <Image
                  src={unsplash(photos.salon, 700)}
                  alt="Coiffure femme au salon Maison Reflet Bordeaux"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                {/* Overlay bottom label */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px", background: "linear-gradient(to top, rgba(17,13,5,0.85) 0%, transparent 100%)" }}>
                  <div className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "1.4rem", fontWeight: 300 }}>Salon mixte</div>
                  <div style={{ color: "#B8975A", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "4px" }}>Bordeaux centre</div>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: "-24px", right: "-24px", width: "120px", height: "120px", border: "1px solid rgba(184,151,90,0.3)", background: "#FAF7F2", zIndex: -1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRESTATIONS PRINCIPALES */}
      <section style={{ background: "#111111", padding: "100px 0" }}>
        <div className="container-site">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
              <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>Nos prestations</span>
              <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
            </div>
            <h2 className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400 }}>
              Tout pour votre image,<br /><em style={{ color: "#B8975A", fontStyle: "italic" }}>en un seul lieu</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2px" }}>
            {[
              { title: "Coiffure femme", icon: <Scissors size={22} />, text: "Coupes, brushings, colorations, balayages, soins profonds et coiffures événementielles.", href: "/coiffure-femme", img: photos.coiffureFemme, alt: "Coiffure femme Bordeaux" },
              { title: "Coiffure homme", icon: <Scissors size={22} />, text: "Coupes modernes, dégradés, entretien de la barbe, coiffage et soins du cuir chevelu.", href: "/coiffure-homme", img: photos.coiffureHomme, alt: "Coiffeur homme barber Bordeaux" },
              { title: "Esthétique", icon: <Sparkles size={22} />, text: "Soins visage, épilation, beauté du regard, maquillage, mains et pieds.", href: "/esthetique", img: photos.esthetique, alt: "Soin visage esthétique Bordeaux" },
            ].map((item) => (
              <div key={item.title} className="reveal card-hover" style={{ position: "relative", overflow: "hidden", minHeight: "420px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                {/* Photo */}
                <Image
                  src={unsplash(item.img, 600)}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,5,0.92) 0%, rgba(10,8,5,0.4) 50%, transparent 100%)" }} />
                {/* Content */}
                <div style={{ position: "relative", zIndex: 1, padding: "36px 32px 32px", borderTop: "2px solid rgba(184,151,90,0.5)" }}>
                  <div style={{ color: "#B8975A", marginBottom: "12px" }}>{item.icon}</div>
                  <h3 className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "1.7rem", fontWeight: 400, marginBottom: "10px" }}>{item.title}</h3>
                  <p style={{ color: "rgba(250,247,242,0.65)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "24px" }}>{item.text}</p>
                  <Link href={item.href} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#B8975A", textDecoration: "none", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", borderBottom: "1px solid #B8975A", paddingBottom: "3px" }}>
                    Découvrir <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI MAISON REFLET */}
      <section style={{ background: "#FAF7F2", padding: "100px 0" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
                <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>Nos engagements</span>
              </div>
              <h2 className="font-cormorant" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400, lineHeight: 1.15, marginBottom: "20px" }}>
                Pourquoi choisir<br /><em style={{ fontStyle: "italic", color: "#B8975A" }}>Maison Reflet ?</em>
              </h2>
              <p style={{ color: "#8A8178", lineHeight: 1.8, fontSize: "0.92rem" }}>Chez Maison Reflet, chaque visite est pensée pour être une expérience complète — de l'accueil au résultat.</p>
            </div>
            <div className="reveal reveal-delay-2">
              <ul style={{ listStyle: "none" }}>
                {atouts.map((atout, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "18px 0", borderBottom: "1px solid rgba(216,195,165,0.25)" }}>
                    <div style={{ width: "6px", height: "6px", background: "#B8975A", flexShrink: 0, transform: "rotate(45deg)" }} />
                    <span style={{ color: "#111111", fontSize: "0.9rem" }}>{atout}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RÉSERVATION RAPIDE */}
      <section style={{ position: "relative", padding: "100px 0", overflow: "hidden" }}>
        <Image
          src={unsplash("photo-1521590832167-7bcbfaa6381f", 1400)}
          alt="Salon de coiffure Bordeaux"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(184,151,90,0.88)" }} />
        <div className="container-site" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="reveal">
            <h2 className="font-cormorant" style={{ color: "#111111", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400, marginBottom: "16px" }}>
              Réservez votre moment beauté<br />en quelques clics
            </h2>
            <p style={{ color: "rgba(17,17,17,0.75)", fontSize: "0.95rem", marginBottom: "40px" }}>Choisissez votre prestation, votre créneau et recevez votre confirmation de rendez-vous.</p>
            <Link href="/reservation" className="btn-primary">Réserver maintenant <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* GALERIE APERÇU */}
      <section style={{ background: "#111111", padding: "100px 0" }}>
        <div className="container-site">
          <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
                <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>Galerie</span>
              </div>
              <h2 className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400 }}>
                L'art du soin<br /><em style={{ color: "#B8975A", fontStyle: "italic" }}>& du style</em>
              </h2>
            </div>
            <Link href="/galerie" className="btn-outline-light">Voir toute la galerie</Link>
          </div>
          {/* Grid avec vraies photos */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridTemplateRows: "220px 220px", gap: "8px" }}>
            {[
              { label: "Coiffure femme", col: "1/3", row: "1/3", img: "photo-1595476108010-b4d1f102b1b1", alt: "Coiffure femme" },
              { label: "Barber", col: "3/4", row: "1/2", img: "photo-1621605815971-fbc98d665033", alt: "Barber Bordeaux" },
              { label: "Couleurs", col: "4/5", row: "1/2", img: "photo-1527799820374-dcf8d9d4a388", alt: "Coloration cheveux" },
              { label: "Esthétique", col: "3/5", row: "2/3", img: "photo-1570172619644-dfd03ed5d881", alt: "Soin esthétique" },
            ].map((item) => (
              <div key={item.label} style={{ gridColumn: item.col, gridRow: item.row, position: "relative", overflow: "hidden" }}>
                <Image
                  src={unsplash(item.img, 700)}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,5,0.7) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: "16px", left: "20px", zIndex: 1 }}>
                  <span style={{ color: "#D8C3A5", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS CLIENTS */}
      <section style={{ background: "#FAF7F2", padding: "100px 0" }}>
        <div className="container-site">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
              <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>Témoignages</span>
              <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
            </div>
            <h2 className="font-cormorant" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400 }}>
              Ce que disent<br /><em style={{ fontStyle: "italic", color: "#B8975A" }}>nos clients</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" }}>
            {avis.map((a, i) => (
              <div key={i} className="reveal avis-card">
                <div className="stars" style={{ marginBottom: "16px", paddingTop: "16px" }}>{"★".repeat(a.note)}</div>
                <p style={{ color: "#111111", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "20px", fontStyle: "italic" }}>"{a.texte}"</p>
                <div style={{ borderTop: "1px solid rgba(216,195,165,0.3)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 500, fontSize: "0.85rem" }}>{a.nom}</span>
                  <span style={{ fontSize: "0.72rem", color: "#B8975A" }}>{a.prestation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALISATION */}
      <section style={{ background: "#111111", padding: "100px 0" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "64px", alignItems: "center" }}>
            <div className="reveal">
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
                <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>Nous trouver</span>
              </div>
              <h2 className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400, marginBottom: "36px" }}>
                Au cœur de<br /><em style={{ color: "#B8975A", fontStyle: "italic" }}>Bordeaux centre</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: <MapPin size={16} />, label: "Adresse", val: salonInfo.addressShort },
                  { icon: <Phone size={16} />, label: "Téléphone", val: salonInfo.phoneDisplay },
                  { icon: <Star size={16} />, label: "Horaires", val: "Mar-Ven 9h-19h · Sam 9h-18h" },
                ].map(({ icon, label, val }) => (
                  <div key={label} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ color: "#B8975A", marginTop: "2px" }}>{icon}</div>
                    <div>
                      <div style={{ color: "#8A8178", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "3px" }}>{label}</div>
                      <div style={{ color: "#FAF7F2", fontSize: "0.9rem" }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px", marginTop: "36px", flexWrap: "wrap" }}>
                <a href={salonInfo.phoneHref} className="btn-gold">Appeler le salon</a>
                <a href={salonInfo.whatsappHref} className="btn-outline-light">WhatsApp</a>
              </div>
            </div>
            {/* Map placeholder avec photo */}
            <div className="reveal reveal-delay-2" style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", border: "1px solid rgba(184,151,90,0.15)" }}>
              <Image
                src={unsplash("photo-1562322140-8baeececf3df", 700)}
                alt="Salon de coiffure intérieur Bordeaux"
                fill
                style={{ objectFit: "cover", opacity: 0.5 }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px", background: "rgba(17,17,17,0.4)" }}>
                <MapPin size={32} style={{ color: "#B8975A" }} />
                <div style={{ color: "#FAF7F2", fontSize: "0.85rem", letterSpacing: "0.1em" }}>{salonInfo.addressShort}</div>
                <a href={salonInfo.mapsHref} target="_blank" rel="noopener noreferrer" style={{ color: "#B8975A", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Voir sur Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
