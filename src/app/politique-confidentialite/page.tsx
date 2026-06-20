import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { salonInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Maison Reflet Bordeaux",
  description: "Politique de confidentialité et gestion des données personnelles — Maison Reflet Bordeaux.",
};

export default function PolitiqueConfidentialitePage() {
  const sectionStyle = { marginBottom: "48px" };
  const h2Style = { fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 500 as const, marginBottom: "16px", color: "#111111" };
  const pStyle = { color: "#8A8178", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: "12px" };
  const liStyle = { color: "#8A8178", lineHeight: 1.8, fontSize: "0.92rem" };

  return (
    <>
      <PageHero label="RGPD & données" title="Politique de" titleGold="confidentialité" dark />
      <section style={{ background: "#FAF7F2", padding: "80px 0 100px" }}>
        <div className="container-site" style={{ maxWidth: "800px" }}>
          <div style={sectionStyle}>
            <p style={pStyle}>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</p>
            <p style={pStyle}>Maison Reflet Bordeaux accorde une grande importance à la protection de vos données personnelles. Cette politique vous informe sur la façon dont nous collectons, utilisons et protégeons vos informations.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Données collectées</h2>
            <p style={pStyle}>Dans le cadre de l'utilisation de notre site et de nos formulaires, nous collectons les données suivantes :</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
              {["Nom et prénom", "Adresse email", "Numéro de téléphone", "Date et créneau de rendez-vous souhaités", "Prestation souhaitée", "Message libre (optionnel)"].map((item) => (
                <li key={item} style={liStyle}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. Finalités du traitement</h2>
            <p style={pStyle}>Vos données sont utilisées uniquement pour :</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
              {["Traiter votre demande de rendez-vous", "Vous contacter pour confirmer ou modifier votre rendez-vous", "Répondre à vos questions via le formulaire de contact", "Améliorer nos services"].map((item) => (
                <li key={item} style={liStyle}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Base légale</h2>
            <p style={pStyle}>Le traitement de vos données repose sur votre consentement explicite, que vous donnez lors de la soumission des formulaires présents sur notre site.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Durée de conservation</h2>
            <p style={pStyle}>Vos données sont conservées pour la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et au maximum 3 ans après votre dernier contact avec le salon.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Partage des données</h2>
            <p style={pStyle}>Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers. Elles peuvent être transmises à nos prestataires techniques uniquement dans le cadre de la gestion du site (hébergeur, service email).</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Vos droits</h2>
            <p style={pStyle}>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
              {["Droit d'accès à vos données", "Droit de rectification", "Droit à l'effacement (droit à l'oubli)", "Droit à la portabilité", "Droit d'opposition", "Droit à la limitation du traitement"].map((item) => (
                <li key={item} style={liStyle}>{item}</li>
              ))}
            </ul>
            <p style={pStyle}>Pour exercer ces droits, contactez-nous à : <a href={`mailto:${salonInfo.email}`} style={{ color: "#B8975A" }}>{salonInfo.email}</a></p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Cookies</h2>
            <p style={pStyle}>Notre site peut utiliser des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie publicitaire ou de traçage tiers n'est utilisé sans votre consentement.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. Contact</h2>
            <p style={pStyle}>Pour toute question relative à la protection de vos données, contactez-nous :<br />
              <strong style={{ color: "#111111" }}>{salonInfo.name}</strong><br />
              {salonInfo.addressLine1}<br />
              {salonInfo.addressLine2}<br />
              Email : <a href={`mailto:${salonInfo.email}`} style={{ color: "#B8975A" }}>{salonInfo.email}</a>
            </p>
            <p style={pStyle}>Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#B8975A" }}>CNIL</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
