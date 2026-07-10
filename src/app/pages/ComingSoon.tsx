import logoImg from "../../imports/kenny_donna_collective_logo_transparent-1.png";

const SUBSTACK_URL = "https://kennydonnacollective.substack.com";
const INSTAGRAM_URL = "https://instagram.com/kennydonnacollective";
const CONTACT_EMAIL = "contact@kennydonnacollective.com";

// Shared small-label style — used for "Coming Soon", social links, footer.
const labelClass = "text-xs uppercase transition-opacity hover:opacity-60";
const labelStyle = { color: "#5E5954", letterSpacing: "0.18em" } as const;

export default function ComingSoon() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center"
      style={{ backgroundColor: "#FCFBF8", position: "relative" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundSize: "250px 250px",
        }}
      />

      <div className="relative max-w-xl w-full">
        {/* Logo — the anchor */}
        <img
          src={logoImg}
          alt="Kenny Donna Collective"
          className="h-28 sm:h-40 lg:h-52 w-auto mx-auto mb-10 lg:mb-14"
        />

        {/* Headline — the brand line from the Figma hero */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            color: "#171717",
            fontWeight: 300,
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
          }}
          className="text-3xl sm:text-4xl lg:text-5xl mb-3"
        >
          Marketing, shaped
          <br />
          like a brand.
        </h1>

        {/* Coming Soon — small label, sits under the headline */}
        <p className={labelClass} style={{ ...labelStyle, marginBottom: "2.5rem" }}>
          Coming Soon
        </p>

        {/* Info + inline contact */}
        <p
          className="text-base sm:text-lg max-w-md mx-auto"
          style={{ color: "#3A342F", fontWeight: 300, lineHeight: 1.8 }}
        >
          A new home for our work is on its way. For inquiries, reach us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-opacity hover:opacity-60 break-all sm:break-normal"
            style={{ color: "#171717", borderBottom: "1px solid #171717" }}
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        {/* Social links */}
        <div
          className="flex flex-wrap justify-center gap-8 sm:gap-10 mt-12 lg:mt-14 pt-10"
          style={{ borderTop: "1px solid #D6D0CF" }}
        >
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={labelClass} style={labelStyle}>
            Instagram
          </a>
          <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className={labelClass} style={labelStyle}>
            Substack
          </a>
        </div>

        {/* Footer mark */}
        <p className={labelClass} style={{ ...labelStyle, marginTop: "3rem" }}>
          © 2026 Kenny Donna Collective
        </p>
      </div>
    </div>
  );
}
