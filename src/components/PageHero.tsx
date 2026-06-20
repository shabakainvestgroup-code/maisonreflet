import Image from "next/image";

interface PageHeroProps {
  label: string;
  title: string;
  titleGold?: string;
  subtitle?: string;
  dark?: boolean;
  bgPhoto?: string; // Unsplash photo ID
}

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export default function PageHero({ label, title, titleGold, subtitle, bgPhoto }: PageHeroProps) {
  const titleColor = "#FAF7F2";
  const subColor = "rgba(250,247,242,0.6)";

  return (
    <section style={{
      background: bgPhoto ? "transparent" : "linear-gradient(135deg, #0d0d0d 0%, #1a1510 100%)",
      paddingTop: "160px",
      paddingBottom: "80px",
      position: "relative",
      overflow: "hidden",
      minHeight: bgPhoto ? "360px" : "auto",
    }}>
      {/* Photo de fond optionnelle */}
      {bgPhoto && (
        <>
          <Image
            src={unsplash(bgPhoto)}
            alt={title}
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,8,5,0.88) 0%, rgba(15,12,6,0.70) 100%)" }} />
        </>
      )}
      {!bgPhoto && (
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 70% at 80% 50%, rgba(184,151,90,0.07) 0%, transparent 70%)" }} />
      )}

      {/* Ligne déco */}
      <div style={{ position: "absolute", top: "20%", right: "6%", width: "1px", height: "30vh", background: "linear-gradient(to bottom, transparent, rgba(184,151,90,0.35), transparent)" }} />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
          <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" }}>{label}</span>
        </div>
        <h1 className="font-cormorant" style={{ color: titleColor, fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: subtitle ? "20px" : 0 }}>
          {title}
          {titleGold && (
            <><br /><em style={{ fontStyle: "italic", color: "#B8975A" }}>{titleGold}</em></>
          )}
        </h1>
        {subtitle && (
          <p style={{ color: subColor, fontSize: "1rem", lineHeight: 1.7, maxWidth: "540px", marginTop: "16px" }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
