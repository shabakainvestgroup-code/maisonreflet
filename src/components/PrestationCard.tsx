import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

interface PrestationCardProps {
  nom: string;
  description: string;
  duree: string;
  tarif: string;
  dark?: boolean;
}

export default function PrestationCard({ nom, description, duree, tarif, dark = false }: PrestationCardProps) {
  const bg = dark ? "#1a1a1a" : "#ffffff";
  const border = dark ? "rgba(184,151,90,0.15)" : "rgba(216,195,165,0.35)";
  const titleColor = dark ? "#FAF7F2" : "#111111";
  const textColor = dark ? "#8A8178" : "#8A8178";

  return (
    <div className="prestation-card reveal" style={{
      background: bg,
      border: `1px solid ${border}`,
      padding: "28px 28px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}>
      <h3 className="font-cormorant" style={{ color: titleColor, fontSize: "1.35rem", fontWeight: 500, lineHeight: 1.2 }}>
        {nom}
      </h3>
      <p style={{ color: textColor, fontSize: "0.86rem", lineHeight: 1.6, flexGrow: 1 }}>
        {description}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: `1px solid ${border}` }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Clock size={12} style={{ color: "#B8975A" }} />
            <span style={{ color: textColor, fontSize: "0.75rem" }}>{duree}</span>
          </div>
          <span style={{ color: "#B8975A", fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontWeight: 500 }}>
            {tarif}
          </span>
        </div>
        <Link href="/reservation" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          color: "#B8975A", textDecoration: "none",
          fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          Réserver <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  );
}
