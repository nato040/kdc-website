import { SectionDivider } from "../components/SectionDivider";

/**
 * Contact — tight two-block page: hero invitation + email block.
 * Background matches Home cream so palette stays unified.
 * Social links live in the footer Index, no need to repeat them here.
 */
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

      {/* EMAIL + INTRO */}
      <section
        className="px-6 lg:px-16 relative"
        style={{ paddingTop: "100px", paddingBottom: "160px" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="space-y-10">
            <p className="text-[16px] lg:text-[18px]" style={bodyStyle}>
              We say yes when the brand and the partnership match. Most engagements start with a short conversation. Tell us about the brand, where it is now, and what isn&rsquo;t connecting.
            </p>

            <a
              href="mailto:hello@kennydonnacollective.com"
              style={{ fontFamily: "var(--font-serif)", color: "#171717", fontWeight: 400 }}
              className="text-[28px] lg:text-[36px] inline-block hover:opacity-60 transition-opacity"
            >
              hello@kennydonnacollective.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
