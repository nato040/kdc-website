import { useEffect, useRef } from "react";
import brandImg from "../../imports/_DUG9698.jpg"; // rack
import contentImg from "../../imports/_DUG9734.jpg"; // iPad moodboard

/**
 * FourSurfacesHorizontal — desktop pins the section and converts vertical
 * scroll into a SNAKE path through 4 panels arranged on a 2x2 canvas:
 *
 *   [Brand]    [Content]
 *   [C & P]    [Retention]
 *
 * Reader's vertical scroll moves the canvas: right to Content, up to Retention,
 * left to Community & Partnerships, then the pin releases and the page
 * continues vertically.
 *
 * Brand panel pairs the title/body with the rack photo (right).
 * Content panel pairs with the iPad moodboard photo (right).
 * Retention and Community & Partnerships are typographic panels (no image).
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

// Position each panel on a 2x2 canvas (200vw wide x 200vh tall).
// Values are in vw / vh (no unit), expanded at render time.
const PANEL_POSITIONS = [
  { left: 0, top: 0 }, // Brand: top-left
  { left: 100, top: 0 }, // Content: top-right
  { left: 100, top: 100 }, // Retention: bottom-right
  { left: 0, top: 100 }, // Community & Partnerships: bottom-left
];

// Alternating cream/ivory per panel keeps the chapter-shift rhythm during travel.
const PANEL_BG = ["#FAFAFA", "#F3F0EA", "#FAFAFA", "#F3F0EA"] as const;

/**
 * Maps overall scroll progress (0->1) to a 2D translation that walks the snake:
 *   segment 1 (0 -> 1/3):  Brand -> Content      (translate left)
 *   segment 2 (1/3 -> 2/3): Content -> Retention (translate up)
 *   segment 3 (2/3 -> 1):  Retention -> C & P    (translate right)
 */
function snakeTransform(progress: number): { tx: number; ty: number } {
  const seg = 1 / 3;
  if (progress <= seg) {
    const t = progress / seg;
    return { tx: -t * 100, ty: 0 };
  } else if (progress <= seg * 2) {
    const t = (progress - seg) / seg;
    return { tx: -100, ty: -t * 100 };
  } else {
    const t = Math.min(1, (progress - seg * 2) / seg);
    return { tx: -100 + t * 100, ty: -100 };
  }
}

export function FourSurfacesHorizontal() {
  const sectionRef = useRef<HTMLElement | null>(null);
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
      const track = trackRef.current;
      if (!section || !track) return;

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

      const { tx, ty } = snakeTransform(progress);
      track.style.transform = `translate3d(${tx}vw, ${ty}vh, 0)`;
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

      {/* DESKTOP — pinned section, 2x2 canvas, snake-path translation */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{ height: "300vh" }}
        aria-label="The Four Surfaces"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div
            ref={trackRef}
            className="relative"
            style={{
              width: "200vw",
              height: "200vh",
              willChange: "transform",
            }}
          >
            {SURFACES.map((s, i) => {
              const pos = PANEL_POSITIONS[i];
              return (
                <div
                  key={s.title}
                  className="absolute flex items-center justify-center px-16"
                  style={{
                    left: `${pos.left}vw`,
                    top: `${pos.top}vh`,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: PANEL_BG[i],
                  }}
                >
                  {s.image ? (
                    // Panel with image: 2-col grid (text left, image right) — picture kept large
                    <div className="grid grid-cols-2 gap-12 items-center w-full max-w-[1200px]">
                      <div>
                        <h3
                          className="text-[40px] xl:text-[56px] mb-6"
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
                          className="text-[15px] xl:text-[17px]"
                          style={{
                            color: "#5E5954",
                            fontWeight: 400,
                            lineHeight: "1.5",
                            maxWidth: "480px",
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
                            height: "70vh",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    // Typographic panel: centered, no image
                    <div className="max-w-2xl">
                      <h3
                        className="text-[48px] xl:text-[64px] mb-6"
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
                        className="text-[16px] xl:text-[19px]"
                        style={{
                          color: "#5E5954",
                          fontWeight: 400,
                          lineHeight: "1.5",
                          maxWidth: "560px",
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
      </section>
    </>
  );
}
