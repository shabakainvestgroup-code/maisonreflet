"use client";
import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import IllustrationStrip from "@/components/IllustrationStrip";
import { ArrowRight, CheckCircle } from "lucide-react";

const categories = [
  { label: "Coiffure femme", prestations: ["Coupe femme", "Brushing", "Coupe + brushing", "Coloration racines", "Coloration complète", "Balayage / mèches", "Patine", "Soin profond", "Lissage", "Coiffure événementielle"] },
  { label: "Coiffure homme", prestations: ["Coupe homme", "Dégradé", "Coupe étudiant", "Shampoing + coupe + coiffage", "Soin cuir chevelu"] },
  { label: "Barber / Barbe", prestations: ["Taille de barbe", "Rasage traditionnel", "Coupe + barbe"] },
  { label: "Esthétique", prestations: ["Soin visage express", "Soin visage complet", "Soin hydratant", "Soin éclat", "Soin anti-âge"] },
  { label: "Épilation", prestations: ["Sourcils", "Lèvres", "Visage", "Aisselles", "Bras", "Demi-jambes", "Jambes entières", "Maillot classique", "Maillot intégral"] },
  { label: "Beauté du regard", prestations: ["Restructuration sourcils", "Teinture sourcils", "Teinture cils", "Rehaussement de cils"] },
  { label: "Mains & pieds", prestations: ["Manucure", "Vernis classique", "Semi-permanent", "Beauté des pieds", "Soin des mains", "Soin des pieds"] },
  { label: "Maquillage", prestations: ["Maquillage jour", "Maquillage soirée", "Maquillage événementiel"] },
];

const creneaux = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"];

export default function ReservationPage() {
  const [selectedCat, setSelectedCat] = useState("");
  const [form, setForm] = useState({ nom: "", prenom: "", telephone: "", email: "", prestation: "", date: "", creneau: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedPrestations = categories.find((c) => c.label === selectedCat)?.prestations ?? [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHero label="Confirmation" title="Demande envoyée" titleGold="avec succès" />
        <section style={{ background: "#FAF7F2", padding: "100px 0" }}>
          <div className="container-site" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <CheckCircle size={56} style={{ color: "#B8975A", margin: "0 auto 24px" }} />
            <h2 className="font-cormorant" style={{ fontSize: "2rem", fontWeight: 400, marginBottom: "16px" }}>
              Merci, {form.prenom} !
            </h2>
            <p style={{ color: "#8A8178", lineHeight: 1.8, marginBottom: "32px" }}>
              Votre demande de rendez-vous a bien été envoyée. Nous vous confirmerons le créneau dans les meilleurs délais par email ou téléphone.
            </p>
            <div style={{ padding: "24px", background: "#ffffff", border: "1px solid rgba(216,195,165,0.3)", borderLeft: "3px solid #B8975A", textAlign: "left", marginBottom: "32px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 16px", fontSize: "0.88rem" }}>
                <span style={{ color: "#8A8178" }}>Prestation :</span><span style={{ color: "#111111" }}>{form.prestation}</span>
                <span style={{ color: "#8A8178" }}>Date :</span><span style={{ color: "#111111" }}>{form.date}</span>
                <span style={{ color: "#8A8178" }}>Créneau :</span><span style={{ color: "#111111" }}>{form.creneau}</span>
              </div>
            </div>
            <Link href="/" className="btn-gold">Retour à l'accueil</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        label="Réservation"
        title="Votre rendez-vous"
        titleGold="en ligne"
        subtitle="Remplissez le formulaire ci-dessous et nous vous confirmons votre créneau dans les plus brefs délais."
      />

      <IllustrationStrip
        eyebrow="Parcours client"
        title="Choisir, réserver"
        titleGold="puis se laisser guider"
        items={[
          { id: "photo-1522337360788-8b13dee7a37e", alt: "Diagnostic coiffure avant rendez-vous", label: "Diagnostic", detail: "Avant chaque prestation" },
          { id: "photo-1521590832167-7bcbfaa6381f", alt: "Fauteuil de salon de coiffure", label: "Créneau confirmé", detail: "Par téléphone ou email" },
          { id: "photo-1570172619644-dfd03ed5d881", alt: "Soin visage relaxant", label: "Moment beauté", detail: "Coiffure & esthétique" },
        ]}
      />

      <section style={{ background: "#FAF7F2", padding: "80px 0 100px" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "64px", alignItems: "start" }}>
            {/* Formulaire */}
            <div style={{ gridColumn: "1 / -1", maxWidth: "800px" }}>
              <form onSubmit={handleSubmit}>
                {/* Identité */}
                <div style={{ marginBottom: "40px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <div style={{ width: "24px", height: "24px", border: "1px solid #B8975A", display: "flex", alignItems: "center", justifyContent: "center", color: "#B8975A", fontFamily: "Cormorant Garamond, serif", fontSize: "0.9rem" }}>1</div>
                    <h2 className="font-cormorant" style={{ fontSize: "1.4rem", fontWeight: 400 }}>Vos coordonnées</h2>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label className="form-label">Nom *</label>
                      <input className="form-input" type="text" required placeholder="Votre nom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
                    </div>
                    <div>
                      <label className="form-label">Prénom *</label>
                      <input className="form-input" type="text" required placeholder="Votre prénom" value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} />
                    </div>
                    <div>
                      <label className="form-label">Téléphone *</label>
                      <input className="form-input" type="tel" required placeholder="06 24 18 59 73" value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
                    </div>
                    <div>
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" required placeholder="votre@email.fr" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                </div>

                {/* Prestation */}
                <div style={{ marginBottom: "40px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <div style={{ width: "24px", height: "24px", border: "1px solid #B8975A", display: "flex", alignItems: "center", justifyContent: "center", color: "#B8975A", fontFamily: "Cormorant Garamond, serif", fontSize: "0.9rem" }}>2</div>
                    <h2 className="font-cormorant" style={{ fontSize: "1.4rem", fontWeight: 400 }}>Votre prestation</h2>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <label className="form-label">Catégorie</label>
                    <select className="form-input" value={selectedCat} onChange={(e) => { setSelectedCat(e.target.value); setForm({ ...form, prestation: "" }); }} style={{ cursor: "pointer" }}>
                      <option value="">Choisir une catégorie</option>
                      {categories.map((c) => <option key={c.label}>{c.label}</option>)}
                    </select>
                  </div>
                  {selectedCat && (
                    <div>
                      <label className="form-label">Prestation *</label>
                      <select className="form-input" required value={form.prestation} onChange={(e) => setForm({ ...form, prestation: e.target.value })} style={{ cursor: "pointer" }}>
                        <option value="">Choisir une prestation</option>
                        {selectedPrestations.map((p) => <option key={p}>{p}</option>)}
                      </select>
                    </div>
                  )}
                </div>

                {/* Date et créneau */}
                <div style={{ marginBottom: "40px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <div style={{ width: "24px", height: "24px", border: "1px solid #B8975A", display: "flex", alignItems: "center", justifyContent: "center", color: "#B8975A", fontFamily: "Cormorant Garamond, serif", fontSize: "0.9rem" }}>3</div>
                    <h2 className="font-cormorant" style={{ fontSize: "1.4rem", fontWeight: 400 }}>Date & créneau</h2>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label className="form-label">Date souhaitée *</label>
                      <input className="form-input" type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} min={new Date().toISOString().split("T")[0]} />
                    </div>
                    <div>
                      <label className="form-label">Créneau souhaité *</label>
                      <select className="form-input" required value={form.creneau} onChange={(e) => setForm({ ...form, creneau: e.target.value })} style={{ cursor: "pointer" }}>
                        <option value="">Choisir un créneau</option>
                        {creneaux.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "32px" }}>
                  <label className="form-label">Message complémentaire</label>
                  <textarea className="form-input" rows={4} placeholder="Précisions, demandes particulières..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                </div>

                {/* RGPD */}
                <div style={{ marginBottom: "32px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <input type="checkbox" id="rgpd" required style={{ marginTop: "3px", accentColor: "#B8975A", flexShrink: 0 }} />
                  <label htmlFor="rgpd" style={{ color: "#8A8178", fontSize: "0.8rem", lineHeight: 1.6, cursor: "pointer" }}>
                    J'accepte que mes données soient utilisées pour traiter ma demande de rendez-vous. Conformément au RGPD, vous disposez d'un droit d'accès, de modification et de suppression de vos données. Voir notre{" "}
                    <a href="/politique-confidentialite" style={{ color: "#B8975A" }}>politique de confidentialité</a>.
                  </label>
                </div>

                <button type="submit" className="btn-gold" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                  {loading ? "Envoi en cours..." : <>Confirmer ma demande <ArrowRight size={14} /></>}
                </button>
              </form>
            </div>
          </div>

          {/* Info */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "20px", marginTop: "64px" }}>
            {[
              { titre: "Confirmation rapide", texte: "Nous vous confirmons votre créneau dans les 24h par email ou téléphone." },
              { titre: "Annulation souple", texte: "Annulation ou modification possible jusqu'à 24h avant le rendez-vous." },
              { titre: "Réservation directe", texte: "Préférez-vous nous appeler ? Nous sommes disponibles pendant les horaires d'ouverture." },
            ].map((info, i) => (
              <div key={i} style={{ padding: "24px", background: "#ffffff", border: "1px solid rgba(216,195,165,0.3)" }}>
                <div style={{ width: "3px", height: "20px", background: "#B8975A", marginBottom: "12px" }} />
                <h3 className="font-cormorant" style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "8px" }}>{info.titre}</h3>
                <p style={{ color: "#8A8178", fontSize: "0.84rem", lineHeight: 1.6 }}>{info.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
