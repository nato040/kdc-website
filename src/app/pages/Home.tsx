import { useState } from "react";
import { Link } from "react-router";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import heroPoster from "../../imports/home-hero-poster.jpg";
import partnershipImg from "../../imports/home-partnership-ipad.jpg";
import whyImg from "../../imports/home-why-desk.jpg";
import breakImg from "../../imports/home-break-rack.jpg";
import founderImg from "../../imports/home-founder-paris.jpg";

/**
 * Home — v10 FINAL one-pager (July 15 mockup):
 * Hero video → Tagline → The Architecture → The Partnership → The Why / The
 * Collective → The Conversation → break image → The Full Frame → Founder →
 * Signals → Contact (working mini-form via /api/contact).
 *
 * Interim imagery = Teo's V5-graded exports (extracted from the approved
 * mockup); Andee's final exports swap in file-for-file later.
 * Hero video = July 15 cut (Kyla re-cut swaps in at /public/kdc-hero.mp4).
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
  fontSize: "14px",
  lineHeight: 1.9,
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
      "CRM & lifecycle marketing · email & SMS strategy · reporting, planning & briefs",
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

type SubmitState = "idle" | "sending" | "sent" | "error";

function HomeContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const fieldStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "0.5px solid #B4B2A9",
    padding: "13px 2px",
    fontSize: "13px",
    fontFamily: "inherit",
    fontWeight: 300,
    color: "#171717",
    outline: "none",
    borderRadius: 0,
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setErrorMsg("");
    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brand, notConnecting: message, name, email }),
      });
      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data?.error || `Submission failed (${resp.status}).`);
      }
      setState("sent");
    } catch (err: any) {
      setErrorMsg(err?.message || "Submission failed.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <p
        className="max-w-[400px] mx-auto"
        style={{ ...body, marginTop: "38px", textAlign: "center" }}
      >
        We read everything. You&rsquo;ll hear from Cody within two business
        days.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="max-w-[400px] mx-auto text-left" style={{ marginTop: "38px" }}>
        <label className="sr-only" htmlFor="home-name">Name</label>
        <input
          id="home-name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={fieldStyle}
        />
        <label className="sr-only" htmlFor="home-email">Email</label>
        <input
          id="home-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={fieldStyle}
        />
        <label className="sr-only" htmlFor="home-brand">Brand</label>
        <input
          id="home-brand"
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
          style={fieldStyle}
        />
        <label className="sr-only" htmlFor="home-message">Tell us about the brand</label>
        <textarea
          id="home-message"
          placeholder="Tell us about the brand"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={3}
          style={{ ...fieldStyle, paddingBottom: "38px", resize: "none" }}
        />
      </div>
      <button
        type="submit"
        disabled={state === "sending"}
        className="transition-opacity hover:opacity-60 disabled:opacity-40"
        style={{
          marginTop: "40px",
          fontSize: "11px",
          letterSpacing: "0.22em",
          border: "1px solid #171717",
          background: "transparent",
          color: "#171717",
          display: "inline-block",
          padding: "13px 36px",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        {state === "sending" ? "SENDING…" : "SEND"}
      </button>
      {state === "error" && (
        <p style={{ ...body, fontSize: "12px", marginTop: "16px", color: "#8A3B2E" }}>
          {errorMsg} If it keeps failing, email contact@kennydonnacollective.com.
        </p>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      {/* HERO — full-bleed video under the (transparent) nav */}
      <div
        className="relative overflow-hidden"
        style={{ height: "72vh", minHeight: "420px" }}
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
        style={{ padding: "110px 40px 90px" }}
      >
        <FadeInOnScroll>
          <h1 style={{ ...serif, fontSize: "clamp(32px, 5vw, 46px)", lineHeight: 1.2 }}>
            Marketing, shaped like a brand.
          </h1>
          <p style={{ ...kicker, marginTop: "24px" }}>
            The Brand Marketing Partner for design-led brands
          </p>
        </FadeInOnScroll>
      </section>

      {/* THE ARCHITECTURE */}
      <section
        id="surfaces"
        className={`${sectionPad} text-center scroll-mt-24`}
        style={{ ...hairline, padding: "110px 40px" }}
      >
        <FadeInOnScroll>
          <p style={kicker}>The Architecture</p>
          <h2
            className="mx-auto"
            style={{
              ...serif,
              fontSize: "clamp(23px, 3vw, 28px)",
              marginTop: "20px",
              maxWidth: "480px",
              lineHeight: 1.35,
            }}
          >
            The four surfaces of a modern brand. We own how they connect.
          </h2>
        </FadeInOnScroll>
        <div className="max-w-[500px] mx-auto" style={{ marginTop: "76px" }}>
          {architectureItems.map((item, i) => (
            <FadeInOnScroll key={item.title}>
              <div style={{ marginBottom: i === architectureItems.length - 1 ? 0 : "60px" }}>
                <h3 style={{ ...serif, fontSize: "22px" }}>{item.title}</h3>
                <p style={{ ...muted, fontSize: "13.5px", marginTop: "10px" }}>
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
        style={{ ...hairline, padding: "110px 40px" }}
      >
        <div className="max-w-[880px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 md:gap-16 items-center">
          <FadeInOnScroll>
            <p style={kicker}>The Partnership</p>
            <h2
              style={{
                ...serif,
                fontSize: "clamp(21px, 2.8vw, 25px)",
                marginTop: "20px",
                lineHeight: 1.45,
              }}
            >
              We design the architecture, then stay inside it, making sure
              everything built on it holds.
            </h2>
            <p style={{ ...muted, marginTop: "22px" }}>
              We take on a few partners at a time, so every brand gets all of
              us.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <img
              src={partnershipImg}
              className="w-full block"
              alt="Moodboard review on iPad"
            />
          </FadeInOnScroll>
        </div>
      </section>

      {/* THE WHY / THE COLLECTIVE */}
      <section className={sectionPad} style={{ ...hairline, padding: "110px 40px" }}>
        <div className="max-w-[880px] mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 md:gap-16 items-center">
          <FadeInOnScroll>
            <img
              src={whyImg}
              className="w-full block order-last md:order-first"
              alt="Studio desk"
            />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p style={kicker}>The Why</p>
            <h2
              style={{
                ...serif,
                fontSize: "clamp(22px, 2.9vw, 26px)",
                lineHeight: 1.4,
                marginTop: "20px",
              }}
            >
              Kenny Donna Collective began with a frustration Cody knew from
              both sides of the table.
            </h2>
            <p style={{ ...body, marginTop: "24px" }}>
              Agencies didn&rsquo;t know the brand well enough to move it.
              Internal teams knew it intimately but couldn&rsquo;t scale it.
              Either way, the brand came out fragmented.
              <br />
              <br />
              KDC was built to close that gap.
            </p>
            <div style={{ marginTop: "70px" }}>
              <p style={kicker}>The Collective</p>
              <h2
                style={{
                  ...serif,
                  fontSize: "clamp(20px, 2.6vw, 23px)",
                  lineHeight: 1.45,
                  marginTop: "20px",
                }}
              >
                KDC is not an agency. A small team, built to work as one with
                founders and the teams they already have.
              </h2>
              <p style={{ ...body, marginTop: "20px" }}>
                A core group, plus a curated network of specialists, aligned
                under one strategy. Nothing gets handed off, nothing gets lost.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* THE CONVERSATION */}
      <section
        className={`${sectionPad} text-center`}
        style={{ ...hairline, padding: "88px 40px" }}
      >
        <FadeInOnScroll>
          <p style={kicker}>The Conversation</p>
          <h2 style={{ ...serif, fontSize: "clamp(20px, 2.6vw, 23px)", marginTop: "20px" }}>
            The work begins with a conversation.
          </h2>
          <Link
            to="/contact"
            className="transition-opacity hover:opacity-60"
            style={{
              marginTop: "30px",
              fontSize: "11px",
              letterSpacing: "0.22em",
              border: "1px solid #171717",
              display: "inline-block",
              padding: "13px 32px",
              color: "#171717",
              textTransform: "uppercase",
            }}
          >
            Begin a conversation &rarr;
          </Link>
        </FadeInOnScroll>
      </section>

      {/* BREAK IMAGE */}
      <img
        src={breakImg}
        className="w-full block object-cover"
        style={{ height: "340px" }}
        alt="Ivory garments on a rack"
      />

      {/* THE FULL FRAME */}
      <section className={sectionPad} style={{ ...hairline, padding: "110px 40px" }}>
        <FadeInOnScroll>
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p style={kicker}>The Full Frame</p>
            <h2 style={{ ...serif, fontSize: "clamp(23px, 3vw, 28px)", marginTop: "20px" }}>
              What one connected system makes possible.
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="max-w-[680px] mx-auto">
          {fullFrameRows.map((row, i) => (
            <FadeInOnScroll key={row.title}>
              <div
                className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-3 sm:gap-[26px]"
                style={{
                  padding: "32px 0",
                  borderTop: "0.5px solid #E8E8E8",
                  borderBottom:
                    i === fullFrameRows.length - 1 ? "0.5px solid #E8E8E8" : undefined,
                }}
              >
                <h3 style={{ ...serif, fontSize: "21px" }}>{row.title}</h3>
                <p
                  style={{
                    ...serif,
                    fontStyle: "italic",
                    fontSize: "15px",
                    lineHeight: 1.9,
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
      <section className={sectionPad} style={{ padding: "110px 40px" }}>
        <div className="max-w-[680px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-11 items-start">
          <FadeInOnScroll>
            <img
              src={founderImg}
              className="w-full block"
              alt="Cody, founder of Kenny Donna Collective, in Paris"
            />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p style={{ ...kicker, marginBottom: "18px" }}>Founder</p>
            <p style={body}>
              <span style={{ ...serif, fontSize: "17px" }}>
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
              style={{ ...linkUnderline, marginTop: "24px" }}
            >
              Connect on LinkedIn &rarr;
            </a>
          </FadeInOnScroll>
        </div>
      </section>

      {/* SIGNALS */}
      <section
        className={`${sectionPad} text-center`}
        style={{ ...hairline, padding: "110px 40px" }}
      >
        <FadeInOnScroll>
          <p style={kicker}>Signals</p>
          <h2 style={{ ...serif, fontSize: "clamp(22px, 2.9vw, 26px)", marginTop: "20px" }}>
            A working journal and a read on the culture.
          </h2>
          <p style={{ ...muted, fontSize: "13px", marginTop: "12px" }}>
            Notes on brand, content, retention, and community.
          </p>
          <Link
            to="/signals"
            className="transition-opacity hover:opacity-60"
            style={{ ...linkUnderline, marginTop: "36px" }}
          >
            Read the Signals &rarr;
          </Link>
        </FadeInOnScroll>
      </section>

      {/* CONTACT */}
      <section
        className={`${sectionPad} text-center`}
        style={{ ...hairline, padding: "110px 40px 100px" }}
      >
        <FadeInOnScroll>
          <p style={kicker}>Contact</p>
          <h2 style={{ ...serif, fontSize: "clamp(25px, 3.2vw, 30px)", marginTop: "20px" }}>
            Begin a conversation.
          </h2>
          <p className="max-w-[400px] mx-auto" style={{ ...body, marginTop: "16px" }}>
            Most engagements start with a short conversation. Tell us about the
            brand and what isn&rsquo;t connecting.
          </p>
          <HomeContactForm />
          <p style={{ ...muted, fontSize: "12px", marginTop: "20px" }}>
            Prefer email?{" "}
            <a
              href="mailto:contact@kennydonnacollective.com"
              className="transition-opacity hover:opacity-60"
              style={{ color: "#5E5954" }}
            >
              contact@kennydonnacollective.com
            </a>
          </p>
        </FadeInOnScroll>
      </section>
    </div>
  );
}
