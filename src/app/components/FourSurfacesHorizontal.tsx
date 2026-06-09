import { useEffect, useRef } from "react";

/**
 * FourSurfacesHorizontal — desktop pins the section and converts vertical
 * scroll into horizontal travel across four full-viewport panels.
 * Mobile/tablet (<lg) falls back to a normal 2-up grid; no scroll hijack.
 *
 * Pattern: section is 300vh tall on lg+. A sticky child fills 100vw x 100vh.
 * A flex track inside that holds 4 panels of 100vw each (400vw total),
 * and its translateX moves from 0 to -300vw as scroll progresses 0 -> 1.
 * Respects prefers-reduced-motion (skips the pin; renders panels stacked).
 */

const SURFACES = [
  {
    title: "Brand",
    body: "Voice, design, and the story that runs through every channel without a crack.",
  },
  {
    title: "Content",
    body: "The editorial layer. How the brand shows up across owned, earned, and social.",
  },
  {
    title: "Retention",
    body: "Lifecycle, CRM, and the inbox. Editorial in voice, built to convert.",
  },
  {
    title: "Community & Partnerships",
    body: "The relationships around the brand. The signals the audience sends, and the brands and people it chooses to stand beside.",
  },
] as const;

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

      // Below lg breakpoint OR reduced motion -> no transform; mobile grid is shown instead.
      if (window.innerWidth < 1024 || prefersReduced) {
        track.style.transform = "";
        return;
      }

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Vertical scroll consumed inside the section.
      const scrolled = Math.max(0, -rect.top);
      // Total scrollable distance within the section.
      const total = Math.max(1, sectionHeight - viewportHeight);
      // 0 at top of section, 1 at bottom.
      const progress = Math.max(0, Math.min(1, scrolled / total));

      // Translate 4 panels (400vw) by 3 panel widths total to surface panel 4 at end.
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
      {/* MOBILE / TABLET — normal vertical grid, no scroll hijack */}
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
                <div className="max-w-3xl">
                  <h3
                    className="text-[72px] xl:text-[96px] mb-8"
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
                    className="text-[20px] xl:text-[24px]"
                    style={{
                      color: "#5E5954",
                      fontWeight: 400,
                      lineHeight: "1.5",
                      maxWidth: "640px",
                    }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
