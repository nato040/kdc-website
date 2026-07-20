import { Link } from "react-router";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import heroPoster from "../../imports/home-hero-poster.jpg";
import partnershipImg from "../../imports/KDC_founder_chair_B_web.jpg";
import whyImg from "../../imports/KDC_rack_black_web.jpg";
import founderImg from "../../imports/home-founder-paris.jpg";

/**
 * Home — v10 one-pager, revised (July 15, Cody's notes):
 * bigger type + imagery, the mid-page image band removed (it read like a
 * page ending), and a single "Begin a conversation" CTA that closes the page.
 *
 * Order: Hero video → Tagline → The Architecture → The Partnership →
 * The Why / The Collective → The Full Frame → Founder → Signals →
 * The Conversation (closing CTA → /contact).
 *
 * Interim imagery = V5-graded exports; the partnership shot uses the high-res
 * original. Andee's regrades swap in file-for-file.
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

const muted: React.CSSProperties = { ...body, color: "#5E5954" };

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

const fullFrameRows = [
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

const architectureItems = [
  {
    title: "Brand",
    text: "The source. One perspective, one story, carried intact to every touchpoint.",
  },
  {
    title: "Content",
    text: "One editorial voice. Not content for channels, but a perspective the customer can follow anywhere.",
  },
  {
    title: "Retention",
    text: "The most personal channel, treated that way. Every send intentional, every send on brand.",
  },
  {
    title: "Community & Partnerships",
    text: "The brand's worldview, extended. The company it keeps says as much as anything it publishes.",
  },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      {/* HERO — full-bleed video under the (transparent) nav */}
      <div
        className="relative overflow-hidden"
        style={{ height: "82vh", minHeight: "520px" }}
      >
        <video
          src="/kdc-hero.mp4"
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover block"
          aria-label="Kenny Donna Collective — brand film"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(23,23,23,0.35), transparent 40%)",
          }}
        />
      </div>

      {/* TAGLINE */}
      <section
        className={`${sectionPad} text-center`}
        style={{ padding: "130px 40px 110px" }}
      >
        <FadeInOnScroll>
          <h1 style={{ ...serif, fontSize: "clamp(40px, 6vw, 62px)", lineHeight: 1.15 }}>
            Marketing, shaped like a brand.
          </h1>
          <p style={{ ...kicker, marginTop: "28px" }}>
            The Brand Marketing Partner for design-led brands
          </p>
        </FadeInOnScroll>
      </section>

      {/* THE ARCHITECTURE */}
      <section
        id="surfaces"
        className={`${sectionPad} text-center scroll-mt-24`}
        style={{ ...hairline, padding: "130px 40px" }}
      >
        <FadeInOnScroll>
          <p style={kicker}>The Architecture</p>
          <h2
            className="mx-auto"
            style={{
              ...serif,
              fontSize: "clamp(27px, 3.6vw, 36px)",
              marginTop: "22px",
              maxWidth: "620px",
              lineHeight: 1.3,
            }}
          >
            The four surfaces of a modern brand. We own how they connect.
          </h2>
        </FadeInOnScroll>
        <div className="max-w-[640px] mx-auto" style={{ marginTop: "84px" }}>
          {architectureItems.map((item, i) => (
            <FadeInOnScroll key={item.title}>
              <div style={{ marginBottom: i === architectureItems.length - 1 ? 0 : "68px" }}>
                <h3 style={{ ...serif, fontSize: "26px" }}>{item.title}</h3>
                <p style={{ ...muted, fontSize: "16px", marginTop: "12px" }}>
                  {item.text}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      {/* THE PARTNERSHIP */}
      <section
        id="partnership"
        className={`${sectionPad} scroll-mt-24`}
        style={{ ...hairline, padding: "130px 40px" }}
      >
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeInOnScroll>
            <p style={kicker}>The Partnership</p>
            <h2
              style={{
                ...serif,
                fontSize: "clamp(26px, 3.2vw, 34px)",
                marginTop: "22px",
                lineHeight: 1.4,
              }}
            >
              We design the architecture, then stay inside it, making sure
              everything built on it holds.
            </h2>
            <p style={{ ...muted, marginTop: "26px" }}>
              We take on a few partners at a time, so every brand gets all of
              us.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <img
              src={partnershipImg}
              className="w-full block"
              alt="Founder seated with iPad"
            />
          </FadeInOnScroll>
        </div>
      </section>

      {/* THE WHY / THE COLLECTIVE */}
      <section className={sectionPad} style={{ ...hairline, padding: "130px 40px" }}>
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[440px_1fr] gap-12 md:gap-20 items-start">
          <FadeInOnScroll>
            <img
              src={whyImg}
              className="w-full block"
              style={{ aspectRatio: "3 / 4", objectFit: "cover" }}
              alt="Styling rack"
            />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p style={kicker}>The Why</p>
            <h2
              style={{
                ...serif,
                fontSize: "clamp(26px, 3.2vw, 33px)",
                lineHeight: 1.35,
                marginTop: "22px",
              }}
            >
              Kenny Donna Collective began with a frustration Cody knew from
              both sides of the table.
            </h2>
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

      {/* THE FULL FRAME */}
      <section className={sectionPad} style={{ ...hairline, padding: "130px 40px" }}>
        <FadeInOnScroll>
          <div className="text-center" style={{ marginBottom: "72px" }}>
            <p style={kicker}>The Full Frame</p>
            <h2 style={{ ...serif, fontSize: "clamp(27px, 3.6vw, 36px)", marginTop: "22px" }}>
              What one connected system makes possible.
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="max-w-[860px] mx-auto">
          {fullFrameRows.map((row, i) => (
            <FadeInOnScroll key={row.title}>
              <div
                className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-3 sm:gap-8"
                style={{
                  padding: "36px 0",
                  borderTop: "0.5px solid #E8E8E8",
                  borderBottom:
                    i === fullFrameRows.length - 1 ? "0.5px solid #E8E8E8" : undefined,
                }}
              >
                <h3 style={{ ...serif, fontSize: "24px" }}>{row.title}</h3>
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

      {/* FOUNDER */}
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

      {/* SIGNALS */}
      <section
        className={`${sectionPad} text-center`}
        style={{ ...hairline, padding: "130px 40px" }}
      >
        <FadeInOnScroll>
          <p style={kicker}>Signals</p>
          <h2 style={{ ...serif, fontSize: "clamp(25px, 3.2vw, 32px)", marginTop: "22px" }}>
            A working journal and a read on the culture.
          </h2>
          <p style={{ ...muted, fontSize: "15px", marginTop: "14px" }}>
            Notes on brand, content, retention, and community.
          </p>
          <Link
            to="/signals"
            className="transition-opacity hover:opacity-60"
            style={{ ...linkUnderline, marginTop: "40px" }}
          >
            Read the Signals &rarr;
          </Link>
        </FadeInOnScroll>
      </section>

      {/* THE CONVERSATION — single closing CTA */}
      <section
        className={`${sectionPad} text-center`}
        style={{ ...hairline, padding: "120px 40px 130px" }}
      >
        <FadeInOnScroll>
          <p style={kicker}>The Conversation</p>
          <h2 style={{ ...serif, fontSize: "clamp(27px, 3.6vw, 36px)", marginTop: "22px" }}>
            The work begins with a conversation.
          </h2>
          <Link
            to="/contact"
            className="transition-opacity hover:opacity-60"
            style={{
              marginTop: "36px",
              fontSize: "12px",
              letterSpacing: "0.22em",
              border: "1px solid #171717",
              display: "inline-block",
              padding: "16px 40px",
              color: "#171717",
              textTransform: "uppercase",
            }}
          >
            Begin a conversation &rarr;
          </Link>
        </FadeInOnScroll>
      </section>
    </div>
  );
}
