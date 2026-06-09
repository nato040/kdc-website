import { useEffect, useRef } from "react";
import brandImg from "../../imports/_DUG9698.jpg"; // rack
import contentImg from "../../imports/_DUG9734.jpg"; // iPad moodboard

/**
 * FourSurfacesHorizontal — desktop pins the section and converts vertical
 * scroll into horizontal travel across four full-viewport panels.
 * Mobile/tablet (<lg) falls back to a normal 2-up grid; no scroll hijack.
 *
 * Brand panel pairs the title/body with the rack photo (right).
 * Content panel pairs with the iPad moodboard photo (right).
 * Retention and Community & Partnerships are typographic panels (no image).
 */

type Surface = {
  title: string;
  body: string;
  image: string | null;
  alt?: string;
};

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

// Alternating cream/ivory per panel keeps the chapter-shift rhythm during horizontal travel.
const PANEL_BG = ["#FAFAFA", "#F3F0EA", "#FAFAFA", "#F3F0EA"] as const;

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

      track.style.transform = `translate3d(${progress * -300}vw, 0, 0)`;
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

      {/* DESKTOP — pinned section that turns vertical scroll into horizontal travel */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{ height: "300vh" }}
        aria-label="The Four Surfaces"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full"
            style={{ width: "400vw", willChange: "transform" }}
          >
            {SURFACES.map((s, i) => (
              <div
                key={s.title}
                className="h-full flex items-center justify-center px-16"
                style={{
                  width: "100vw",
                  flexShrink: 0,
                  backgroundColor: PANEL_BG[i],
                }}
              >
                {s.image ? (
                  // Panel with image: 2-col grid (text left, image right) — sized down
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
                          height: "55vh",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  // Typographic panel: centered, no image — sized down
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
