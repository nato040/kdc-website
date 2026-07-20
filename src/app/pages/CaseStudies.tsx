import { FadeInOnScroll } from "../components/FadeInOnScroll";

/**
 * Approach (route: /case-studies) — Jul 20 brief: paste-exact Part 2 copy in
 * the homepage formatting register. Kicker + headline, then the four surfaces
 * as ruled rows exactly like the homepage Full Frame section.
 * Outcomes section stays removed.
 */

const kicker: React.CSSProperties = {
  fontSize: "11px",
  letterSpacing: "0.26em",
  color: "#5E5954",
  textTransform: "uppercase",
};

const serif: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontWeight: 400,
  color: "#171717",
};

const sectionPad = "px-6 sm:px-10" as const;

const approachRows = [
  {
    title: "Brand",
    services:
      "Brand strategy & positioning · voice & messaging · creative direction · seasonal planning",
  },
  {
    title: "Content",
    services:
      "Content & social strategy · campaign planning · photoshoot & campaign direction",
  },
  {
    title: "Retention",
    services:
      "CRM & lifecycle marketing · email & SMS strategy · reporting, planning & briefs · platform & systems integration (Shopify, Klaviyo)",
  },
  {
    title: "Community & Partnerships",
    services:
      "Creator & influencer collaborations · PR coordination · agency & partner management",
  },
];

export default function CaseStudies() {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <section
        className={`${sectionPad} text-center mt-32`}
        style={{ padding: "130px 40px" }}
      >
        <FadeInOnScroll>
          <p style={kicker}>The Approach</p>
          <h1
            className="mx-auto"
            style={{
              ...serif,
              fontSize: "clamp(27px, 3.6vw, 36px)",
              marginTop: "22px",
              maxWidth: "620px",
              lineHeight: 1.3,
            }}
          >
            What one connected system makes possible.
          </h1>
        </FadeInOnScroll>
        <div className="max-w-[860px] mx-auto" style={{ marginTop: "84px" }}>
          {approachRows.map((row, i) => (
            <FadeInOnScroll key={row.title}>
              <div
                className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-3 sm:gap-8 text-left"
                style={{
                  padding: "36px 0",
                  borderTop: "0.5px solid #E8E8E8",
                  borderBottom:
                    i === approachRows.length - 1 ? "0.5px solid #E8E8E8" : undefined,
                }}
              >
                <h2 style={{ ...serif, fontSize: "24px" }}>{row.title}</h2>
                <p
                  style={{
                    ...serif,
                    fontStyle: "italic",
                    fontSize: "17px",
                    lineHeight: 1.85,
                    color: "#5E5954",
                  }}
                >
                  {row.services}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
