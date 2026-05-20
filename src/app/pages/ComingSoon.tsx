import logoImg from "../../imports/kenny_donna_collective_logo_transparent-1.png";

const SUBSTACK_URL = "https://kennydonnacollective.substack.com";
const INSTAGRAM_URL = "https://instagram.com";
const CONTACT_EMAIL = "hello@kennydonna.com";

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
        {/* Logo */}
        <img
          src={logoImg}
          alt="Kenny Donna Collective"
          className="h-20 sm:h-28 lg:h-32 w-auto mx-auto mb-12 lg:mb-16"
        />

        {/* Eyebrow */}
        <p
          className="text-xs uppercase mb-8"
          style={{ color: "#5E5954", letterSpacing: "0.28em" }}
        >
          Coming Soon
        </p>

        {/* Headline — brand signature line */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            color: "#171717",
            fontWeight: 300,
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
          }}
          className="text-3xl sm:text-4xl lg:text-[3.25rem] mb-6"
        >
          Built by Instinct.
          <br />
          Iconic by design.
        </h1>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg mb-10 lg:mb-12"
          style={{ color: "#5E5954", fontWeight: 300, letterSpacing: "0.02em" }}
        >
          Marketing, shaped like a brand.
        </p>

        {/* Subline */}
        <p
          className="text-base sm:text-lg max-w-md mx-auto mb-12 lg:mb-14"
          style={{ color: "#3A342F", fontWeight: 300, lineHeight: 1.8 }}
        >
          A new home for our work is on its way. For partnership inquiries, reach us directly.
        </p>

        {/* Contact email */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          style={{
            fontFamily: "var(--font-serif)",
            color: "#171717",
            fontWeight: 300,
          }}
          className="text-xl sm:text-2xl lg:text-[1.75rem] inline-block transition-opacity hover:opacity-60 break-all sm:break-normal"
        >
          {CONTACT_EMAIL}
        </a>

        {/* Social links */}
        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-14 lg:mt-16 pt-10"
          style={{ borderTop: "1px solid #D6D0CF" }}
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
            style={{ color: "#5E5954", letterSpacing: "0.15em" }}
          >
            Instagram
          </a>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
            style={{ color: "#5E5954", letterSpacing: "0.15em" }}
          >
            Substack
          </a>
        </div>

        {/* Footer mark */}
        <p
          className="text-xs tracking-widest uppercase mt-16"
          style={{ color: "#5E5954", letterSpacing: "0.15em" }}
        >
          © 2026 Kenny Donna Collective
        </p>
      </div>
    </div>
  );
}
