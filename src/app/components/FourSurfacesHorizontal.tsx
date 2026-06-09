import { useEffect, useRef } from "react";
import brandImg from "../../imports/_DUG9698.jpg"; // rack
import contentImg from "../../imports/_DUG9734.jpg"; // iPad moodboard

/**
 * FourSurfacesHorizontal — desktop pins the section. Inside the pin, a
 * CONTAINED frame holds a 2x2 canvas of 4 panels. Vertical scroll drives
 * a SNAKE-path translation through the canvas:
 *
 *   [Brand]    [Content]
 *   [C & P]    [Retention]
 *
 * Reader's vertical scroll moves the canvas: right to Content, up to Retention,
 * left to Community & Partnerships, then the pin releases and the page
 * continues vertically.
 *
 * The frame is a bounded block (~1100x620) centered in the viewport, so the
 * section reads as one editorial block on the page, not a full-screen takeover.
 *
 * Mobile/tablet (<lg) falls back to a normal 2-up grid; no scroll hijack.
 * Reduced motion users see the mobile grid (no canvas translation).
 */

type Surface = {
  title: string;
  body: string;
  image: string | null;
  alt?: string;
};

// Order matters: index 0 = Brand (top-left), 1 = Content (top-right),
// 2 = Retention (bottom-right), 3 = Community & Partnerships (bottom-left).
const SURFACES: Surface[] = [
  {
    title: "Brand",
    body: "Voice, design, and the story that runs through every channel without a crack.",
    image: brandImg,
    alt: "On the rack",
  },
  {
    title: "Content",
    body: "The editorial layer. How the brand shows up across owned, earned, and social.",
    image: contentImg,
    alt: "Curating reference imagery on iPad",
  },
  {
    title: "Retention",
    body: "Lifecycle, CRM, and the inbox. Editorial in voice, built to convert.",
    image: null,
  },
  {
    title: "Community & Partnerships",
    body: "The relationships around the brand. The signals the audience sends, and the brands and people it chooses to stand beside.",
    image: null,
  },
];

// Position each panel on the 2x2 canvas. Values in percent of the canvas
// (which is 200% x 200% of the frame — i.e. 50% per panel cell).
const PANEL_POSITIONS = [
  { left: 0, top: 0 }, // Brand: top-left
  { left: 50, top: 0 }, // Content: top-right
  { left: 50, top: 50 }, // Retention: bottom-right
  { left: 0, top: 50 }, // Community & Partnerships: bottom-left
];

// Alternating cream/ivory per panel keeps the chapter-shift rhythm during travel.
const PANEL_BG = ["#FAFAFA", "#F3F0EA", "#FAFAFA", "#F3F0EA"] as const;

export function FourSurfacesHorizontal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let ticking = false;

    const update = () => {
      ticking = false;
      const section = sectionRef.current;
      const frame = frameRef.current;
      const track = trackRef.current;
      if (!section || !frame || !track) return;

      if (window.innerWidth < 1024 || prefersReduced) {
        track.style.transform = "";
        return;
      }

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = Math.max(0, -rect.top);
      const total = Math.max(1, sectionHeight - viewportHeight);
      const progress = Math.max(0, Math.min(1, scrolled / total));

      const fw = frame.offsetWidth;
      const fh = frame.offsetHeight;

      const seg = 1 / 3;
      let tx: number;
      let ty: number;
      if (progress <= seg) {
        const t = progress / seg;
        tx = -t * fw;
        ty = 0;
      } else if (progress <= seg * 2) {
        const t = (progress - seg) / seg;
        tx = -fw;
        ty = -t * fh;
      } else {
        const t = Math.min(1, (progress - seg * 2) / seg);
        tx = -fw + t * fw;
        ty = -fh;
      }

      track.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* MOBILE / TABLET — vertical grid, text-only (no image hijack) */}
      <section
        className="lg:hidden px-6 relative"
        style={{ paddingTop: "40px", paddingBottom: "60px", backgroundColor: "#F3F0EA" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {SURFACES.map((s) => (
              <div
                key={s.title}
                className="border-t pt-4"
                style={{ borderColor: "#D6D0CF" }}
              >
                <h3
                  className="text-[18px] mb-2"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#171717",
                    fontWeight: 400,
                    lineHeight: "1.2",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[13px]"
                  style={{ color: "#5E5954", fontWeight: 400, lineHeight: "1.5" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP — pinned section, contained frame, 2x2 canvas, snake-path translation */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{ height: "300vh", backgroundColor: "#F3F0EA" }}
        aria-label="The Four Surfaces"
      >
        <div
          className="sticky top-0 h-screen w-full flex items-center justify-center px-6 lg:px-16"
          style={{ backgroundColor: "#F3F0EA" }}
        >
          <div
            ref={frameRef}
            className="relative overflow-hidden"
            style={{
              width: "min(92vw, 1180px)",
              height: "640px",
              border: "1px solid #D6D0CF",
              backgroundColor: "#FAFAFA",
            }}
          >
            <div
              ref={trackRef}
              className="absolute inset-0"
              style={{
                width: "200%",
                height: "200%",
                willChange: "transform",
              }}
            >
              {SURFACES.map((s, i) => {
                const pos = PANEL_POSITIONS[i];
                return (
                  <div
                    key={s.title}
                    className="absolute flex items-center justify-center px-10"
                    style={{
                      left: `${pos.left}%`,
                      top: `${pos.top}%`,
                      width: "50%",
                      height: "50%",
                      backgroundColor: PANEL_BG[i],
                    }}
                  >
                    {s.image ? (
                      // Panel with image: 2-col grid (text left, image right)
                      <div className="grid grid-cols-2 gap-8 items-center w-full">
                        <div>
                          <h3
                            className="text-[36px] xl:text-[44px] mb-4"
                            style={{
                              fontFamily: "var(--font-serif)",
                              color: "#171717",
                              fontWeight: 400,
                              lineHeight: "1.05",
                              letterSpacing: "0.01em",
                            }}
                          >
                            {s.title}
                          </h3>
                          <p
                            className="text-[14px] xl:text-[16px]"
                            style={{
                              color: "#5E5954",
                              fontWeight: 400,
                              lineHeight: "1.55",
                              maxWidth: "420px",
                            }}
                          >
                            {s.body}
                          </p>
                        </div>
                        <div>
                          <img
                            src={s.image}
                            alt={s.alt || ""}
                            style={{
                              width: "100%",
                              height: "520px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      // Typographic panel: centered, no image
                      <div className="max-w-xl">
                        <h3
                          className="text-[44px] xl:text-[56px] mb-5"
                          style={{
                            fontFamily: "var(--font-serif)",
                            color: "#171717",
                            fontWeight: 400,
                            lineHeight: "1.05",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {s.title}
                        </h3>
                        <p
                          className="text-[15px] xl:text-[18px]"
                          style={{
                            color: "#5E5954",
                            fontWeight: 400,
                            lineHeight: "1.55",
                            maxWidth: "520px",
                          }}
                        >
                          {s.body}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
