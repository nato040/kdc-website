import { SectionDivider } from "../components/SectionDivider";

/**
 * Signals — single editorial landing. No fake article grid until there's
 * real Substack content to surface. Subscribe-only for launch.
 */
export default function Signals() {
  const eyebrowStyle = {
    color: "#5E5954",
    fontWeight: 500,
    letterSpacing: "0.20em",
  };

  const headingStyle = {
    fontFamily: "var(--font-serif)",
    color: "#171717",
    fontWeight: 400,
    lineHeight: "1.15",
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
        style={{ paddingTop: "96px", paddingBottom: "120px" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
            SIGNALS
          </p>
          <h1
            className="text-[40px] md:text-[56px] lg:text-[72px] mb-10 max-w-4xl"
            style={{ ...headingStyle, lineHeight: "1.1" }}
          >
            A working journal on brand, retention, and how design led brands grow.
          </h1>
          <p className="text-[18px] lg:text-[20px] mb-10" style={bodyStyle}>
            Notes from the work — what we&rsquo;re seeing, what&rsquo;s shifting, what&rsquo;s next. Published on Substack.
          </p>
          <a
            href="https://kennydonnacollective.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] transition-opacity duration-700 hover:opacity-60 uppercase"
            style={{ color: "#171717", fontWeight: 400, letterSpacing: "0.15em" }}
          >
            &rarr; Read and subscribe on Substack
          </a>
        </div>
      </section>

      <SectionDivider />

      {/* CLOSING */}
      <section
        className="px-6 lg:px-16 relative"
        style={{ paddingTop: "120px", paddingBottom: "160px", backgroundColor: "#F3F0EA" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px]" style={headingStyle}>
            Few partners. Full attention. Same on the page.
          </h2>
        </div>
      </section>
    </div>
  );
}
