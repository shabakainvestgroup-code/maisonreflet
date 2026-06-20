"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Share2, ExternalLink } from "lucide-react";
import { openingHours, salonInfo } from "@/lib/site-data";

const quickLinks = [
  { href: "/salon", label: "Le salon" },
  { href: "/coiffure-femme", label: "Coiffure femme" },
  { href: "/coiffure-homme", label: "Coiffure homme" },
  { href: "/esthetique", label: "Esthétique" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/galerie", label: "Galerie" },
  { href: "/reservation", label: "Réservation" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111111", color: "#FAF7F2" }}>
      {/* CTA bande */}
      <div style={{ background: "#B8975A", padding: "40px 0" }}>
        <div className="container-site" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <div>
            <div className="font-cormorant" style={{ fontSize: "1.8rem", fontWeight: 400, color: "#111111" }}>
              Prêt(e) pour votre prochain rendez-vous ?
            </div>
            <div style={{ color: "rgba(17,17,17,0.7)", fontSize: "0.88rem", marginTop: "4px" }}>
              Réservez en quelques clics, nous vous confirmons votre créneau.
            </div>
          </div>
          <Link href="/reservation" style={{
            background: "#111111", color: "#FAF7F2", padding: "14px 32px",
            fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.18em",
            textTransform: "uppercase", textDecoration: "none",
            border: "1px solid #111111", transition: "all 0.3s",
            display: "inline-block"
          }}>
            Réserver maintenant
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site" style={{ padding: "72px 80px 48px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "48px" }}>
        {/* Brand */}
        <div>
          <Link href="/" style={{ display: "inline-block", textDecoration: "none", marginBottom: "20px" }}>
            <Image
              src="/brand/maison-reflet-logo-dark.webp"
              alt="Maison Reflet Bordeaux"
              width={980}
              height={263}
              className="site-logo-footer"
            />
          </Link>
          <div style={{ width: "32px", height: "1px", background: "#B8975A", marginBottom: "20px" }} />
          <p style={{ color: "#8A8178", fontSize: "0.85rem", lineHeight: 1.7 }}>
            Salon de coiffure &amp; esthétique mixte au cœur de Bordeaux centre-ville.
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
            <a href={salonInfo.instagramHref} target="_blank" rel="noopener noreferrer" style={{ color: "#8A8178", transition: "color 0.2s" }} aria-label="Instagram"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#B8975A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8178")}
            >
              <Share2 size={18} />
            </a>
            <a href={salonInfo.facebookHref} target="_blank" rel="noopener noreferrer" style={{ color: "#8A8178", transition: "color 0.2s" }} aria-label="Facebook"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#B8975A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8178")}
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8975A", marginBottom: "24px" }}>
            Navigation
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                color: "#8A8178", textDecoration: "none", fontSize: "0.85rem",
                transition: "color 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FAF7F2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8178")}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8975A", marginBottom: "24px" }}>
            Informations
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <MapPin size={15} style={{ color: "#B8975A", flexShrink: 0, marginTop: "2px" }} />
              <span style={{ color: "#8A8178", fontSize: "0.85rem", lineHeight: 1.5 }}>
                {salonInfo.addressLine1}<br />
                <span style={{ color: "#5a5a5a", fontSize: "0.78rem" }}>{salonInfo.addressLine2}</span>
              </span>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <Phone size={15} style={{ color: "#B8975A", flexShrink: 0 }} />
              <a href={salonInfo.phoneHref} style={{ color: "#8A8178", fontSize: "0.85rem", textDecoration: "none" }}>
                {salonInfo.phoneDisplay}
              </a>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <Mail size={15} style={{ color: "#B8975A", flexShrink: 0 }} />
              <a href={`mailto:${salonInfo.email}`} style={{ color: "#8A8178", fontSize: "0.85rem", textDecoration: "none" }}>
                {salonInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Horaires */}
        <div>
          <div style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8975A", marginBottom: "24px" }}>
            Horaires
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {openingHours.map(({ day, hours }) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
                <span style={{ color: "#8A8178", fontSize: "0.82rem" }}>{day}</span>
                <span style={{ color: hours === "Fermé" ? "#5a5a5a" : "#FAF7F2", fontSize: "0.82rem" }}>{hours}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "20px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ color: "#22c55e", fontSize: "0.75rem" }}>Ouvert aujourd'hui</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 0" }}>
        <div className="container-site" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <p style={{ color: "#4a4a4a", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Maison Reflet Bordeaux. Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/mentions-legales" style={{ color: "#4a4a4a", fontSize: "0.75rem", textDecoration: "none" }}>
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" style={{ color: "#4a4a4a", fontSize: "0.75rem", textDecoration: "none" }}>
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
