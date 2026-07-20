import { FadeInOnScroll } from "../components/FadeInOnScroll";
import whyImg from "../../imports/KDC_rack_black_web.jpg";
import founderImg from "../../imports/home-founder-paris.jpg";

/**
 * About — Jul 20 brief: paste-exact Part 2 copy in the homepage formatting
 * register (same type scale, kickers, hairlines, spacing). Homepage copy is
 * canonical; this page mirrors it. Structure: The Why → The Collective → Founder.
 */

const LINKEDIN_URL = "https://www.linkedin.com/company/kenny-donna-collective";

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

const body: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.85,
  color: "#3A342F",
  fontWeight: 300,
};

const hairline: React.CSSProperties = { borderTop: "0.5px solid #E8E8E8" };

const sectionPad = "px-6 sm:px-10" as const;

const linkUnderline: React.CSSProperties = {
  fontSize: "11px",
  letterSpacing: "0.22em",
  color: "#171717",
  borderBottom: "1px solid #171717",
  display: "inline-block",
  paddingBottom: "3px",
  textTransform: "uppercase",
};

export default function About() {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      {/* THE WHY / THE COLLECTIVE — mirrors the homepage section */}
      <section
        className={`${sectionPad} mt-32`}
        style={{ padding: "130px 40px" }}
      >
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[440px_1fr] gap-12 md:gap-20 items-start">
          <FadeInOnScroll>
            <img src={whyImg} className="w-full block" alt="Styling rack" />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p style={kicker}>The Why</p>
            <h1
              style={{
                ...serif,
                fontSize: "clamp(26px, 3.2vw, 33px)",
                lineHeight: 1.35,
                marginTop: "22px",
              }}
            >
              Kenny Donna Collective began with a frustration Cody knew from
              both sides of the table.
            </h1>
            <p style={{ ...body, marginTop: "26px" }}>
              Agencies didn&rsquo;t know the brand well enough to move it.
              Internal teams knew it intimately but couldn&rsquo;t scale it.
              Either way, the brand came out fragmented.
              <br />
              <br />
              KDC was built to close that gap.
            </p>
            <div style={{ marginTop: "76px" }}>
              <p style={kicker}>The Collective</p>
              <h2
                style={{
                  ...serif,
                  fontSize: "clamp(23px, 2.9vw, 29px)",
                  lineHeight: 1.4,
                  marginTop: "22px",
                }}
              >
                KDC is not an agency. A small team, built to work as one with
                founders and the teams they already have.
              </h2>
              <p style={{ ...body, marginTop: "22px" }}>
                A core group, plus a curated network of specialists, aligned
                under one strategy. Nothing gets handed off, nothing gets lost.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* FOUNDER — mirrors the homepage section */}
      <section className={sectionPad} style={{ ...hairline, padding: "130px 40px" }}>
        <div className="max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-[360px_1fr] gap-10 md:gap-16 items-start">
          <FadeInOnScroll>
            <img
              src={founderImg}
              className="w-full block"
              alt="Cody, founder of Kenny Donna Collective, in Paris"
            />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p style={{ ...kicker, marginBottom: "20px" }}>Founder</p>
            <p style={body}>
              <span style={{ ...serif, fontSize: "20px" }}>
                Cody&rsquo;s eye was trained on the floor, not in a deck.
              </span>
              <br />
              <br />
              A decade inside fashion taught her, sale by sale, how taste moves
              a customer: Intermix, Rag &amp; Bone, Club Monaco, Theory. She
              took that instinct brand-side, leading digital marketing for a
              design-led label and building the systems underneath multi-year
              growth.
              <br />
              <br />
              That pairing is rare: the taste of someone who sold the product
              by hand, and the operating sense of someone who built the
              marketing from inside. It&rsquo;s why KDC can own both the story
              and the numbers.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              style={{ ...linkUnderline, marginTop: "28px" }}
            >
              Connect on LinkedIn &rarr;
            </a>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
