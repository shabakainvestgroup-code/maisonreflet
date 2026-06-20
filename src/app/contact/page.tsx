"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import IllustrationStrip from "@/components/IllustrationStrip";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { salonInfo } from "@/lib/site-data";

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="Nous contacter"
        titleGold="& nous trouver"
        subtitle="Une question, une demande d'information ou simplement envie de nous dire bonjour ? Nous répondons dans les meilleurs délais."
      />

      <IllustrationStrip
        eyebrow="Accès & ambiance"
        title="Un salon facile"
        titleGold="à trouver"
        items={[
          { id: "photo-1560066984-138dadb4c035", alt: "Intérieur élégant de salon de coiffure", label: "Salon central", detail: "Bordeaux centre" },
          { id: "photo-1521590832167-7bcbfaa6381f", alt: "Espace coiffure lumineux", label: "Espace coiffure", detail: "Accueil & diagnostic" },
          { id: "photo-1562322140-8baeececf3df", alt: "Miroirs de salon de coiffure", label: "Miroirs & lumière", detail: "Cadre soigné" },
        ]}
      />

      <section style={{ background: "#FAF7F2", padding: "100px 0" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "64px" }}>
            {/* Infos */}
            <div className="reveal">
              <h2 className="font-cormorant" style={{ fontSize: "1.8rem", fontWeight: 400, marginBottom: "40px" }}>
                Maison Reflet<br /><em style={{ color: "#B8975A", fontStyle: "italic" }}>Bordeaux</em>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "40px" }}>
                {[
                  { icon: <MapPin size={18} />, titre: "Adresse", val: `${salonInfo.addressLine1}\n${salonInfo.addressLine2}` },
                  { icon: <Phone size={18} />, titre: "Téléphone", val: salonInfo.phoneDisplay, href: salonInfo.phoneHref },
                  { icon: <Mail size={18} />, titre: "Email", val: salonInfo.email, href: `mailto:${salonInfo.email}` },
                  { icon: <Clock size={18} />, titre: "Horaires", val: "Mar–Ven : 9h00 – 19h00\nSamedi : 9h00 – 18h00\nDim & Lun : Fermé" },
                ].map(({ icon, titre, val, href }) => (
                  <div key={titre} style={{ display: "flex", gap: "16px" }}>
                    <div style={{ color: "#B8975A", marginTop: "2px", flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ color: "#8A8178", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>{titre}</div>
                      {href ? (
                        <a href={href} style={{ color: "#111111", fontSize: "0.9rem", textDecoration: "none", lineHeight: 1.6, whiteSpace: "pre-line" }}>{val}</a>
                      ) : (
                        <div style={{ color: "#111111", fontSize: "0.9rem", lineHeight: 1.6, whiteSpace: "pre-line" }}>{val}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Boutons rapides */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href={salonInfo.phoneHref} className="btn-gold" style={{ justifyContent: "center" }}>
                  <Phone size={14} /> Appeler directement
                </a>
                <a href={salonInfo.whatsappHref} style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  background: "#25D366", color: "#ffffff",
                  padding: "15px 36px",
                  fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase",
                  textDecoration: "none", border: "1px solid #25D366", transition: "all 0.3s",
                }}>
                  <MessageCircle size={14} /> Écrire sur WhatsApp
                </a>
              </div>

              {/* Map placeholder */}
              <div style={{ marginTop: "40px", background: "#1a1a1a", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(184,151,90,0.15)" }}>
                <div style={{ textAlign: "center" }}>
                  <MapPin size={28} style={{ color: "#B8975A", margin: "0 auto 8px" }} />
                  <a href={salonInfo.mapsHref} target="_blank" rel="noopener noreferrer" style={{ color: "#8A8178", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>Google Maps</a>
                  <div style={{ color: "#5a5a5a", fontSize: "0.65rem", marginTop: "4px" }}>{salonInfo.addressShort}</div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="reveal reveal-delay-2">
              <h2 className="font-cormorant" style={{ fontSize: "1.8rem", fontWeight: 400, marginBottom: "32px" }}>
                Envoyer<br /><em style={{ color: "#B8975A", fontStyle: "italic" }}>un message</em>
              </h2>

              {sent ? (
                <div style={{ padding: "40px", background: "#ffffff", border: "1px solid rgba(216,195,165,0.3)", textAlign: "center" }}>
                  <CheckCircle size={40} style={{ color: "#B8975A", margin: "0 auto 16px" }} />
                  <h3 className="font-cormorant" style={{ fontSize: "1.4rem", marginBottom: "12px" }}>Message envoyé !</h3>
                  <p style={{ color: "#8A8178", fontSize: "0.88rem", lineHeight: 1.6 }}>
                    Nous avons bien reçu votre message et vous répondrons dans les meilleurs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <label className="form-label">Nom *</label>
                    <input className="form-input" type="text" required placeholder="Votre nom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Email *</label>
                    <input className="form-input" type="email" required placeholder="votre@email.fr" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Téléphone</label>
                    <input className="form-input" type="tel" placeholder="06 24 18 59 73" value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Message *</label>
                    <textarea className="form-input" rows={5} required placeholder="Votre message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <input type="checkbox" id="rgpd-contact" required style={{ marginTop: "3px", accentColor: "#B8975A", flexShrink: 0 }} />
                    <label htmlFor="rgpd-contact" style={{ color: "#8A8178", fontSize: "0.78rem", lineHeight: 1.6, cursor: "pointer" }}>
                      J'accepte que mes données soient utilisées pour répondre à ma demande.{" "}
                      <a href="/politique-confidentialite" style={{ color: "#B8975A" }}>Politique de confidentialité</a>
                    </label>
                  </div>
                  <button type="submit" className="btn-gold" disabled={loading}>
                    {loading ? "Envoi..." : <>Envoyer le message <ArrowRight size={14} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
