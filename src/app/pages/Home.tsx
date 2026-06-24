import { HeroCarousel } from "../components/HeroCarousel";
import { SectionDivider } from "../components/SectionDivider";
import { FourSurfacesHorizontal } from "../components/FourSurfacesHorizontal";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { Link } from "react-router";

/**
 * Home — five beats:
 * Hero → The Four Surfaces (intro + horizontal panels with images on Brand + Content) → outro → The Partnership (text) → CTA
 * Images (rack, iPad) now live exclusively on the horizontal panels; image-based grids removed from prose sections.
 */
export default function Home() {
  const sectionStyle = {
    backgroundColor: "#FAFAFA",
    position: "relative" as const,
    paddingTop: "120px",
    paddingBottom: "120px",
  };

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
    letterSpacing: "0.01em",
  };

  const bodyStyle = {
    color: "#5E5954",
    fontWeight: 400,
    lineHeight: "1.6",
    maxWidth: "720px",
  };

  const noiseOverlay = (
    <div
      className="absolute inset-0 opacity-[0.015] pointer-events-none"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
        backgroundSize: "250px 250px",
      }}
    />
  );

  return (
    <>
      <HeroCarousel />

      <SectionDivider />

      {/* THE FOUR SURFACES — intro lands immediately after the hero, more space, punchline elevated */}
      <section id="surfaces" className="px-6 lg:px-16 scroll-mt-24" style={{ ...sectionStyle, backgroundColor: "#F3F0EA", paddingTop: "140px", paddingBottom: "120px" }}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <FadeInOnScroll>
            <p className="text-[11px] tracking-widest uppercase mb-8" style={eyebrowStyle}>
              THE FOUR SURFACES
            </p>
            <h2
              className="md:whitespace-nowrap mb-12"
              style={{ ...headingStyle, fontSize: "clamp(24px, 3.7vw, 50px)" }}
            >
              Brand. Content. Retention. Community &amp; Partnerships.
            </h2>
            <p className="text-[16px] lg:text-[20px] mb-12" style={bodyStyle}>
              The four surfaces of a modern brand. We don&rsquo;t hand over a list of deliverables. We take ownership of how the surfaces connect, and how the work that lives on them compounds.
            </p>
            <p
              className="text-[24px] md:text-[32px] lg:text-[40px]"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#171717",
                fontWeight: 400,
                lineHeight: "1.2",
                letterSpacing: "0.01em",
                maxWidth: "900px",
              }}
            >
              You stay the brand. We own how it performs.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* THE FOUR SURFACES — desktop: pinned horizontal panels. Mobile: vertical grid. */}
      <FourSurfacesHorizontal />

      {/* THE FOUR SURFACES — outro (Substack link only, right-aligned, ivory) */}
      <section className="px-6 lg:px-16" style={{ ...sectionStyle, backgroundColor: "#F3F0EA", paddingTop: "40px", paddingBottom: "80px" }}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <FadeInOnScroll>
            <div className="flex justify-end">
              <a
                href="https://kennydonnacollective.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] tracking-widest uppercase transition-opacity hover:opacity-60 whitespace-nowrap"
                style={{ color: "#171717", fontWeight: 500, letterSpacing: "0.18em" }}
              >
                &rarr; Read more on Substack
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <SectionDivider />

      {/* THE PARTNERSHIP — text-only, cream, sits just before the CTA */}
      <section id="partnership" className="px-6 lg:px-16 scroll-mt-24" style={sectionStyle}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <FadeInOnScroll>
            <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
              THE PARTNERSHIP
            </p>
            <h2 className="text-[28px] md:text-[40px] lg:text-[56px] mb-8" style={headingStyle}>
              We don&rsquo;t onboard, deliver, and disappear. We embed.
            </h2>
            <div className="text-[16px] lg:text-[18px]" style={bodyStyle}>
              <p>
                KDC works as an extension of your team, inside the brand, accountable for how it connects and converts, present for the long build, not a project with an end date.
              </p>
              <p style={{ color: "#171717", paddingTop: "16px" }}>
                Twelve partners at a time. By invitation. The ones we say yes to get all of it.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <SectionDivider />

      {/* CTA — minimal close; the scarcity argument has already been made above */}
      <section className="px-6 lg:px-16" style={{ ...sectionStyle, backgroundColor: "#171717" }}>
        <div className="max-w-[1280px] mx-auto relative">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ ...eyebrowStyle, color: "#D6D0CF" }}>
            GET IN TOUCH
          </p>
          <h2
            className="text-[28px] md:text-[40px] lg:text-[56px] mb-12"
            style={{ ...headingStyle, color: "#FAFAFA" }}
          >
            The work begins with a conversation.
          </h2>
          <Link
            to="/contact"
            className="text-[15px] transition-opacity duration-700 hover:opacity-60 uppercase"
            style={{ color: "#FAFAFA", fontWeight: 400, letterSpacing: "0.15em" }}
          >
            &rarr; Begin a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
