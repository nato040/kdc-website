import heroVideo from "../../imports/kenny-donna-hero.mp4";
import heroPoster from "../../imports/kenny-donna-hero-poster.jpg";

/**
 * Hero — full-bleed looping video behind the brand line.
 * Component name is still "HeroCarousel" so callers don't need to change;
 * underneath, it's now a muted, autoplaying, looping video.
 */
export function HeroCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ height: "75vh" }}>
      {/* Hero background video */}
      <video
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center center" }}
      />

      {/* Soft charcoal overlay for legibility */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(58, 52, 47, 0.20)" }} />

      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center px-8 lg:px-16 z-10">
        <div className="text-white w-full flex flex-col items-center px-20">
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              letterSpacing: "0.02em",
              textShadow: "0px 2px 12px rgba(0, 0, 0, 0.45)",
              lineHeight: "1.1",
              width: "100%",
              color: "#FAFAFA",
            }}
            className="mb-8 animate-fade-in text-center text-[40px] md:text-[60px] lg:text-[88px]"
          >
            Marketing, shaped like a brand.
          </h1>
          <p
            className="animate-fade-in-delay text-center w-full max-w-5xl mx-auto text-[22px] md:text-[26px] lg:text-[28px]"
            style={{
              color: "#FAFAFA",
              fontWeight: 300,
              lineHeight: "1.5",
              textShadow: "0px 2px 12px rgba(0, 0, 0, 0.45)",
              marginBottom: "24px",
            }}
          >
            A connected marketing architecture built from brand and designed for growth.
          </p>
        </div>
      </div>
    </div>
  );
}
