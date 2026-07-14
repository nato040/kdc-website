import { useState } from "react";
import { SectionDivider } from "../components/SectionDivider";

/**
 * Contact — invitation hero + "tell us about the brand" questionnaire.
 * Submission goes to /api/contact, which forwards to contact@ via Resend.
 * Email remains visible alongside the form so the direct path stays open.
 */

const SURFACES = [
  "Brand",
  "Content",
  "Retention",
  "Community & Partnerships",
] as const;

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const eyebrowStyle = {
    color: "#5E5954",
    fontWeight: 500,
    letterSpacing: "0.20em",
  };

  const headingStyle = {
    fontFamily: "var(--font-serif)",
    color: "#171717",
    fontWeight: 400,
    lineHeight: "1.1",
  };

  const bodyStyle = {
    color: "#5E5954",
    fontWeight: 400,
    lineHeight: "1.6",
    maxWidth: "640px",
  };

  const labelStyle = {
    color: "#171717",
    fontWeight: 500,
    letterSpacing: "0.10em",
    fontSize: "11px",
    textTransform: "uppercase" as const,
  };

  const inputStyle = {
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid #D6D0CF",
    padding: "10px 0",
    width: "100%",
    fontFamily: "inherit",
    fontSize: "16px",
    color: "#171717",
    outline: "none",
  };

  const [brand, setBrand] = useState("");
  const [website, setWebsite] = useState("");
  const [category, setCategory] = useState("");
  const [stage, setStage] = useState("");
  const [notConnecting, setNotConnecting] = useState("");
  const [surfaces, setSurfaces] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [preferred, setPreferred] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleSurface(s: string) {
    setSurfaces((cur) =>
      cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setErrorMsg("");
    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand,
          website,
          category,
          stage,
          notConnecting,
          surfaces,
          name,
          email,
          preferred,
        }),
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

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      {/* Subtle texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
          backgroundSize: "250px 250px",
        }}
      />

      {/* HERO */}
      <section
        className="px-6 lg:px-16 mt-32 relative"
        style={{ paddingTop: "96px", paddingBottom: "80px" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
            CONTACT
          </p>
          <h1
            className="text-[40px] md:text-[56px] lg:text-[72px]"
            style={headingStyle}
          >
            Begin a conversation.
          </h1>
        </div>
      </section>

      <SectionDivider />

      {/* INTRO + QUESTIONNAIRE (ivory tile) */}
      <section
        className="px-6 lg:px-16 relative"
        style={{ paddingTop: "100px", paddingBottom: "120px", backgroundColor: "#F3F0EA" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[16px] lg:text-[18px] mb-12 lg:mb-16" style={bodyStyle}>
            Most engagements start with a short conversation. Tell us about the brand &mdash; and what isn&rsquo;t connecting.
          </p>

          {state === "sent" ? (
            <div className="max-w-[640px] space-y-4">
              <p className="text-[24px] lg:text-[28px]" style={{ ...headingStyle }}>
                Thank you.
              </p>
              <p className="text-[15px]" style={{ color: "#5E5954", fontWeight: 400, lineHeight: "1.6" }}>
                We read everything. You&rsquo;ll hear from Cody within two business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-[720px] space-y-10">
              {/* Brand + website */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="brand" style={labelStyle} className="block mb-3">
                    Brand name
                  </label>
                  <input
                    id="brand"
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="website" style={labelStyle} className="block mb-3">
                    Website
                  </label>
                  <input
                    id="website"
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    style={inputStyle}
                    placeholder="https://"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" style={labelStyle} className="block mb-3">
                  What does the brand make?
                </label>
                <input
                  id="category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={inputStyle}
                  placeholder="Category, product, point of view"
                />
              </div>

              {/* Stage */}
              <div>
                <label htmlFor="stage" style={labelStyle} className="block mb-3">
                  Where the brand is now
                </label>
                <textarea
                  id="stage"
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  rows={3}
                  style={{ ...inputStyle, resize: "vertical", paddingTop: "12px" }}
                  placeholder="Stage, size, what's working"
                />
              </div>

              {/* What isn't connecting — the thesis question */}
              <div>
                <label htmlFor="notConnecting" style={labelStyle} className="block mb-3">
                  What isn&rsquo;t connecting?
                </label>
                <textarea
                  id="notConnecting"
                  required
                  value={notConnecting}
                  onChange={(e) => setNotConnecting(e.target.value)}
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical", paddingTop: "12px" }}
                />
              </div>

              {/* Surfaces — the canonical four */}
              <div>
                <p style={labelStyle} className="mb-4">
                  Which surfaces are you thinking about?
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {SURFACES.map((s) => {
                    const checked = surfaces.includes(s);
                    return (
                      <label
                        key={s}
                        className="flex items-center gap-3 cursor-pointer select-none"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleSurface(s)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          style={{
                            width: 14,
                            height: 14,
                            border: "1px solid #5E5954",
                            backgroundColor: checked ? "#171717" : "transparent",
                            display: "inline-block",
                          }}
                        />
                        <span style={{ color: "#171717", fontSize: "15px" }}>{s}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Name + email + preferred */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" style={labelStyle} className="block mb-3">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle} className="block mb-3">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="preferred" style={labelStyle} className="block mb-3">
                  Best way to reach you
                </label>
                <input
                  id="preferred"
                  type="text"
                  value={preferred}
                  onChange={(e) => setPreferred(e.target.value)}
                  style={inputStyle}
                  placeholder="Email is fine, or tell us another"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="text-[13px] tracking-widest uppercase transition-opacity hover:opacity-60 disabled:opacity-40"
                  style={{
                    color: "#FAFAFA",
                    backgroundColor: "#171717",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    padding: "16px 28px",
                    border: "none",
                    cursor: state === "sending" ? "default" : "pointer",
                  }}
                >
                  {state === "sending" ? "Sending" : "Send"}
                </button>
                {state === "error" && (
                  <p
                    className="text-[13px] mt-4"
                    style={{ color: "#7A2B2B", fontStyle: "italic" }}
                  >
                    {errorMsg} You can also email contact@kennydonnacollective.com directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      <SectionDivider />

      {/* DIRECT EMAIL — the human path stays open alongside the form */}
      <section
        className="px-6 lg:px-16 relative"
        style={{ paddingTop: "100px", paddingBottom: "160px" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="space-y-10">
            <p className="text-[11px] tracking-widest uppercase" style={eyebrowStyle}>
              Prefer email?
            </p>

            <a
              href="mailto:contact@kennydonnacollective.com"
              style={{ fontFamily: "var(--font-serif)", color: "#171717", fontWeight: 400 }}
              className="text-[28px] lg:text-[36px] inline-block hover:opacity-60 transition-opacity"
            >
              contact@kennydonnacollective.com
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}
