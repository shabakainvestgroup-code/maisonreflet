"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/salon", label: "Le salon" },
  { href: "/coiffure-femme", label: "Coiffure femme" },
  { href: "/coiffure-homme", label: "Coiffure homme" },
  { href: "/esthetique", label: "Esthétique" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s ease",
          backgroundColor: scrolled ? "rgba(17,17,17,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(184,151,90,0.15)" : "1px solid transparent",
        }}
      >
        <div className="container-site">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px", gap: "28px" }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
              <Image
                src="/brand/maison-reflet-logo-dark.webp"
                alt="Maison Reflet Bordeaux"
                width={980}
                height={263}
                priority
                className="site-logo-header"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex" style={{ alignItems: "center", justifyContent: "flex-end", gap: "clamp(14px,1.55vw,26px)", flex: 1, minWidth: 0 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: pathname === link.href ? "#B8975A" : "#FAF7F2",
                    textDecoration: "none",
                    fontSize: "0.66rem",
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    lineHeight: 1,
                    textTransform: "uppercase",
                    transition: "color 0.2s",
                    position: "relative",
                    paddingBottom: "4px",
                    borderBottom: pathname === link.href ? "1px solid #B8975A" : "1px solid transparent",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = "#D8C3A5"; }}
                  onMouseLeave={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = "#FAF7F2"; }}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/reservation" className="btn-gold" style={{ padding: "12px 24px", fontSize: "0.66rem", flexShrink: 0 }}>
                Réserver
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "#FAF7F2", background: "none", border: "none", cursor: "pointer", padding: "8px" }}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "#111111",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          display: "flex",
          flexDirection: "column",
          padding: "100px 40px 40px",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: pathname === link.href ? "#B8975A" : "#FAF7F2",
                textDecoration: "none",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "2.2rem",
                fontWeight: 300,
                lineHeight: 1.3,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(30px)",
                transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: "48px" }}>
          <Link href="/reservation" onClick={() => setMenuOpen(false)} className="btn-gold" style={{ display: "inline-block" }}>
            Réserver un rendez-vous
          </Link>
        </div>
        <div style={{ marginTop: "auto", color: "#8A8178", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
          <div>Bordeaux centre-ville</div>
          <div style={{ marginTop: "4px", color: "#B8975A" }}>Coiffure & esthétique mixte</div>
        </div>
      </div>
    </>
  );
}
