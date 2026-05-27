import { HeroCarousel } from "../components/HeroCarousel";
import { SectionDivider } from "../components/SectionDivider";
import { Link } from "react-router";
import whoWeWorkWithImg from "../../imports/_DUG9698.jpg";

/**
 * Home — six tight beats, no echo:
 * Hero → Who We Work With → The Problem → What We Own → How We Partner → Where We Sit (editorial pause) → CTA
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

      {/* THE PROBLEM — leads, diagnosis right after the hero */}
      <section id="problem" className="px-6 lg:px-16 scroll-mt-24" style={sectionStyle}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
            THE PROBLEM
          </p>
          <h2 className="text-[28px] md:text-[40px] lg:text-[56px] mb-8" style={headingStyle}>
            It&rsquo;s not that your brand needs more marketing.
          </h2>
          <div className="text-[16px] lg:text-[18px]" style={bodyStyle}>
            <p>
              You already have a clear point of view, a strong product, and a defined aesthetic. Marketing just begins to feel fragmented across channels, inconsistent across campaigns, and disconnected from the brand itself.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* WHO WE WORK WITH — audience qualifier after the diagnosis */}
      <section className="px-6 lg:px-16" style={sectionStyle}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
                WHO WE WORK WITH
              </p>
              <h2 className="text-[28px] md:text-[40px] lg:text-[56px] mb-8" style={headingStyle}>
                We partner with design led brands.
              </h2>
              <p className="text-[16px] lg:text-[18px]" style={bodyStyle}>
                Brands with strong products and a clear identity, where marketing has started to feel inconsistent or disconnected.
              </p>
            </div>
            <div>
              <img
                src={whoWeWorkWithImg}
                alt="On the rack"
                style={{ width: "100%", height: "600px", objectFit: "cover", objectPosition: "center 85%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* THE FOUR SURFACES — same cream as the rest of the scroll */}
      <section id="surfaces" className="px-6 lg:px-16 scroll-mt-24" style={sectionStyle}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
            THE FOUR SURFACES
          </p>
          <h2
            className="text-[28px] md:text-[40px] lg:text-[56px] mb-10"
            style={headingStyle}
          >
            Brand. Content. Retention. Community.
          </h2>
          <div className="text-[16px] lg:text-[18px]" style={bodyStyle}>
            <p>
              The four surfaces of a modern brand. We don&rsquo;t hand over a list of deliverables &mdash; we take ownership of how the surfaces connect, and how the work that lives on them compounds.
            </p>
            <p style={{ color: "#171717", fontWeight: 400, paddingTop: "16px" }}>
              You stay the brand. We own how it performs.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* THE PARTNERSHIP */}
      <section id="partnership" className="px-6 lg:px-16 scroll-mt-24" style={sectionStyle}>
        {noiseOverlay}
        <div className="max-w-[1280px] mx-auto relative">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
            THE PARTNERSHIP
          </p>
          <h2 className="text-[28px] md:text-[40px] lg:text-[56px] mb-8" style={headingStyle}>
            We don&rsquo;t onboard, deliver, and disappear. We embed.
          </h2>
          <div className="text-[16px] lg:text-[18px]" style={bodyStyle}>
            <p>
              KDC works as an extension of your team, inside the brand, accountable to the numbers, present for the long build, not a project with an end date.
            </p>
            <p style={{ color: "#171717", paddingTop: "16px" }}>
              Twelve partners at a time. By invitation. The ones we say yes to get all of it.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* WHERE WE SIT — editorial pause, on the same cream as the rest of the page */}
      <section className="px-6 lg:px-16" style={sectionStyle}>
        {noiseOverlay}
        <div className="max-w-[960px] mx-auto relative text-center">
          <h2
            className="text-[32px] md:text-[44px] lg:text-[56px]"
            style={{
              ...headingStyle,
              fontStyle: "italic",
              lineHeight: "1.25",
            }}
          >
            We shape what you&rsquo;re creating into how it shows up across every customer moment.
          </h2>
        </div>
      </section>

      <SectionDivider />

      {/* CTA — dark, closes with the cyan "When channels align" line */}
      <section className="px-6 lg:px-16" style={{ ...sectionStyle, backgroundColor: "#171717" }}>
        <div className="max-w-[1280px] mx-auto relative">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ ...eyebrowStyle, color: "#D6D0CF" }}>
            GET IN TOUCH
          </p>
          <h2
            className="text-[28px] md:text-[40px] lg:text-[56px] mb-8"
            style={{ ...headingStyle, color: "#FAFAFA" }}
          >
            Let&rsquo;s create the story your brand was meant to tell while driving real results.
          </h2>
          <div className="text-[16px] lg:text-[18px] mb-10" style={{ ...bodyStyle, color: "#D6D0CF" }}>
            <p style={{ color: "#FAFAFA" }}>
              Limited partnerships. Built for long term growth.
            </p>
            <p style={{ paddingTop: "8px" }}>
              Reserved for brands that see it the same way. Few partners. Full attention.
            </p>
          </div>
          <p
            className="text-[22px] lg:text-[26px] mb-12"
            style={{
              ...headingStyle,
              color: "#FAFAFA",
              fontStyle: "italic",
              lineHeight: "1.3",
            }}
          >
            When channels align, growth accelerates.
          </p>
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
