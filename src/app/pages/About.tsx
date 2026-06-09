import { SectionDivider } from "../components/SectionDivider";
import aboutImg from "../../imports/i-vgrVGvj-X2.jpg";
import collectiveImg from "../../imports/_DUG9728.jpg";

/**
 * About — Cody's story. Editorial, ownership-led, no overlap with the homepage or Signals.
 * Structure: Hero → The Why → Founder → The Collective → Closing.
 */
export default function About() {
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
    maxWidth: "720px",
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

      {/* THE WHY — page opens here now that the iPad hero moved to Home */}
      <section
        id="why"
        className="px-6 lg:px-16 mt-32 relative scroll-mt-24"
        style={{ paddingTop: "96px", paddingBottom: "100px" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
            THE WHY
          </p>
          <h2
            className="text-[28px] md:text-[40px] lg:text-[52px] mb-8"
            style={headingStyle}
          >
            Kenny Donna Collective started from a frustration Cody knew from both sides of the table.
          </h2>
          <div className="space-y-5 text-[16px] lg:text-[18px]" style={bodyStyle}>
            <p>
              Agencies didn&rsquo;t know the brand, or the business, well enough to move it. Internal teams knew it intimately but never had the room to scale it without losing the thread. Either way, the work came out fragmented: beautiful campaigns disconnected from the numbers, retention that didn&rsquo;t sound like the brand.
            </p>
            <p style={{ color: "#171717", paddingTop: "8px" }}>
              KDC was built to close that gap. Curated, embedded, accountable. Few partners, full attention.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* THE COLLECTIVE — now ahead of the founder bio, per Phase (ivory tile) */}
      <section
        id="collective"
        className="px-6 lg:px-16 relative scroll-mt-24"
        style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: "#F3F0EA" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
            THE COLLECTIVE
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — text */}
            <div>
              <h2
                className="text-[28px] md:text-[40px] lg:text-[52px] mb-8"
                style={headingStyle}
              >
                KDC is not an agency. It&rsquo;s a small, focused team, built to work as one with founders and the people already inside the business.
              </h2>
              <div className="space-y-5 text-[16px] lg:text-[18px]" style={bodyStyle}>
                <p>
                  Strategy stays joined to execution. Outside perspective stays joined to inside context. Nothing gets handed off, nothing gets lost in translation.
                </p>
                <p>
                  That&rsquo;s what keeps the work sharp, the brand intact, and the partnership long.
                </p>
              </div>
            </div>

            {/* Right — image */}
            <div>
              <img
                src={collectiveImg}
                alt="The collective at work"
                className="w-full h-[500px] lg:h-[600px] object-cover"
                style={{ filter: "grayscale(8%) contrast(0.95)" }}
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FOUNDER */}
      <section
        className="px-6 lg:px-16 relative"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
            FOUNDER
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Photo */}
            <div>
              <img
                src={aboutImg}
                alt="Cody Lynn Abt"
                className="w-full h-[600px] lg:h-[700px] object-cover"
                style={{ filter: "grayscale(12%) contrast(0.93) brightness(0.98)" }}
              />
            </div>

            {/* Right — Bio */}
            <div>
              <div className="mb-8">
                <h2
                  className="text-[28px] md:text-[40px] lg:text-[52px] mb-3"
                  style={headingStyle}
                >
                  Cody Lynn Abt
                </h2>
                <p
                  className="text-[14px]"
                  style={{ color: "#5E5954", fontWeight: 400, fontStyle: "italic" }}
                >
                  Founder, Kenny Donna Collective
                </p>
              </div>

              <div className="space-y-5 text-[16px] lg:text-[18px] mb-10" style={bodyStyle}>
                <p style={{ color: "#171717", fontWeight: 400 }}>
                  Cody&rsquo;s eye was trained on the floor, not in a deck.
                </p>
                <p>
                  A decade inside fashion, as a top stylist and manager at Intermix, Rag &amp; Bone, Club Monaco, and Theory, taught her sale by sale how taste and quality actually move a customer. She learned what makes a brand land in the room, and what makes it fall flat.
                </p>
                <p>
                  She took that instinct brand-side, leading digital marketing for a fast-growing design-led label. She built the strategy and systems underneath multi-year growth, and pulled email, SMS, and social into one editorial rhythm.
                </p>
                <p>
                  That pairing is rare: the taste of someone who sold the product by hand, and the operating sense of someone who built the marketing from inside the brand. It&rsquo;s the reason KDC can own both the story and the numbers.
                </p>
                <p>
                  She studied business and economics with a focus in marketing, and comes from a family of business owners. The operator&rsquo;s instinct runs underneath everything KDC does.
                </p>
              </div>

              {/* Closing — 3rd-person editorial line, voice stays consistent with the bio above */}
              <div className="pt-6 border-t" style={{ borderColor: "#D6D0CF" }}>
                <p
                  className="text-[22px] lg:text-[26px] mb-8"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#3A342F",
                    fontWeight: 400,
                    lineHeight: "1.35",
                  }}
                >
                  The work she&rsquo;s built for is design-led, considered, customer-aware. KDC is for founders and teams who want a partner who knows the brand the way they do.
                </p>
                <a
                  href="https://www.linkedin.com/in/codylynnabt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] transition-opacity duration-700 hover:opacity-60 inline-block uppercase"
                  style={{ color: "#171717", fontWeight: 400, letterSpacing: "0.15em" }}
                >
                  &rarr; Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
