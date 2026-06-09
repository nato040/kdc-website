import { HeroCarousel } from "../components/HeroCarousel";
import { SectionDivider } from "../components/SectionDivider";
import { FourSurfacesHorizontal } from "../components/FourSurfacesHorizontal";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { Link } from "react-router";
import whoWeWorkWithImg from "../../imports/_DUG9698.jpg";
import whatWeDoImg from "../../imports/_DUG9734.jpg";

/**
 * Home — seven tight beats, no echo:
 * Hero → What We Do → The Problem → Who We Work With → The Four Surfaces → The Partnership → Where We Sit → CTA
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

      {/* WHAT WE DO — plain-language beat paired with the iPad moodboard image */}
      <section id="what-we-do" className="px-6 lg:px-16 scroll-mt-24" style={sectionStyle}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <FadeInOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
                  WHAT WE DO
                </p>
                <h2 className="text-[28px] md:text-[40px] lg:text-[52px] mb-8" style={headingStyle}>
                  KDC runs brand marketing &amp; growth for design-led fashion and lifestyle brands.
                </h2>
                <p className="text-[16px] lg:text-[18px]" style={bodyStyle}>
                  The strategy, the content, and the channels that turn it into sales. One team, one point of view, across everything your customer sees.
                </p>
              </div>
              <div>
                <img
                  src={whatWeDoImg}
                  alt="Curating reference imagery on iPad"
                  style={{ width: "100%", height: "600px", objectFit: "cover" }}
                />
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <SectionDivider />

      {/* THE PARTNERSHIP — inherits WHO WE WORK WITH's slot: ivory grid + rack image right */}
      <section id="partnership" className="px-6 lg:px-16 scroll-mt-24" style={{ ...sectionStyle, backgroundColor: "#F3F0EA" }}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <FadeInOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
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
              </div>
              <div>
                <img
                  src={whoWeWorkWithImg}
                  alt="On the rack"
                  style={{ width: "100%", height: "600px", objectFit: "cover", objectPosition: "center 85%" }}
                />
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <SectionDivider />

      {/* THE FOUR SURFACES — intro (vertical, ivory) */}
      <section id="surfaces" className="px-6 lg:px-16 scroll-mt-24" style={{ ...sectionStyle, backgroundColor: "#F3F0EA", paddingTop: "80px", paddingBottom: "60px" }}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <FadeInOnScroll>
            <p className="text-[11px] tracking-widest uppercase mb-4" style={eyebrowStyle}>
              THE FOUR SURFACES
            </p>
            <h2
              className="text-[24px] md:text-[32px] lg:text-[44px] mb-6"
              style={headingStyle}
            >
              Brand. Content. Retention. Community &amp; Partnerships.
            </h2>
            <div className="text-[15px] lg:text-[17px]" style={bodyStyle}>
              <p>
                The four surfaces of a modern brand. We don&rsquo;t hand over a list of deliverables. We take ownership of how the surfaces connect, and how the work that lives on them compounds.
              </p>
              <p style={{ color: "#171717", fontWeight: 400, paddingTop: "10px" }}>
                You stay the brand. We own how it performs.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* THE FOUR SURFACES — desktop: pinned horizontal panels. Mobile: vertical grid. */}
      <FourSurfacesHorizontal />

      {/* THE FOUR SURFACES — outro (italic closer + right-aligned Substack link, ivory) */}
      <section className="px-6 lg:px-16" style={{ ...sectionStyle, backgroundColor: "#F3F0EA", paddingTop: "40px", paddingBottom: "80px" }}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <FadeInOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <p
                className="text-[20px] lg:text-[24px] max-w-[640px]"
                style={{
                  ...headingStyle,
                  color: "#171717",
                  fontStyle: "italic",
                  lineHeight: "1.3",
                }}
              >
                When channels align, growth accelerates.
              </p>
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
