import Image from "next/image";

type IllustrationItem = {
  id: string;
  alt: string;
  label: string;
  detail?: string;
  position?: string;
};

type IllustrationStripProps = {
  eyebrow?: string;
  title?: string;
  titleGold?: string;
  items: IllustrationItem[];
  background?: string;
};

const unsplash = (id: string, w = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export default function IllustrationStrip({
  eyebrow = "Ambiance",
  title,
  titleGold,
  items,
  background = "#FAF7F2",
}: IllustrationStripProps) {
  return (
    <section style={{ background, padding: "24px 0 72px" }}>
      <div className="container-site">
        {(title || titleGold) && (
          <div className="reveal" style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8975A" }} />
              <span style={{ color: "#B8975A", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                {eyebrow}
              </span>
            </div>
            <h2 className="font-cormorant" style={{ color: "#111111", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 400, lineHeight: 1.15 }}>
              {title}
              {titleGold && <><br /><em style={{ color: "#B8975A", fontStyle: "italic" }}>{titleGold}</em></>}
            </h2>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "10px" }}>
          {items.map((item, index) => (
            <figure
              key={item.id}
              className={`reveal reveal-delay-${Math.min(index + 1, 4)}`}
              style={{
                position: "relative",
                minHeight: index === 0 ? "360px" : "300px",
                overflow: "hidden",
                border: "1px solid rgba(184,151,90,0.18)",
              }}
            >
              <Image
                src={unsplash(item.id)}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover", objectPosition: item.position ?? "center" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,5,0.82) 0%, rgba(10,8,5,0.18) 58%, transparent 100%)" }} />
              <figcaption style={{ position: "absolute", left: "22px", right: "22px", bottom: "22px", zIndex: 1 }}>
                <div className="font-cormorant" style={{ color: "#FAF7F2", fontSize: "1.25rem", fontWeight: 400 }}>{item.label}</div>
                {item.detail && (
                  <div style={{ color: "#D8C3A5", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", marginTop: "4px" }}>
                    {item.detail}
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
