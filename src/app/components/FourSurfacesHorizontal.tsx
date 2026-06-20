import { useEffect, useRef } from "react";
import brandImg from "../../imports/_DUG9698.jpg"; // rack
import contentImg from "../../imports/_DUG9734.jpg"; // iPad moodboard

/**
 * FourSurfacesHorizontal — zoom-into-each-panel interaction.
 *
 * Initial state: all 4 panels visible at once as a 2x2 grid inside a bounded
 * frame. As the reader scrolls, the frame cycles:
 *
 *   overview -> zoom Brand -> overview -> zoom Content -> overview ->
 *   zoom Retention -> overview -> zoom Community & Partnerships -> overview
 *
 * Each zoom cycle (one of four panels) consumes 1/4 of the section's scroll
 * budget. Within a cycle, the first half zooms in, the second half zooms back
 * out — so the reader is always returning to the 2x2 grid between panels.
 *
 * Mechanism: the inner track is 200% x 200% of the frame, with 4 panels at
 * 50% x 50% each (one per quadrant). Transform-origin is top-left. At zoom
 * level 0 the track is scaled to 0.5 (frame size = full track = all 4 panels
 * visible). At zoom level 1 the track is scaled to 1 and translated so the
 * active panel lands in the frame.
 *
 * Mobile/tablet (<lg) falls back to a normal 2-up grid; no scroll hijack.
 * Reduced motion users see the mobile grid.
 */

type Surface = {
  title: string;
  body: string;
  image: string | null;
  alt?: string;
};

// Order: Brand (top-left), Content (top-right), Retention (bottom-left),
// Community & Partnerships (bottom-right) — matches the headline and Work page.
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

// Panel positions inside the track (% of track dimensions).
const PANEL_POSITIONS = [
  { left: 0, top: 0 }, // Brand
  { left: 50, top: 0 }, // Content
  { left: 0, top: 50 }, // Retention
  { left: 50, top: 50 }, // Community & Partnerships
];

// Target track-viewport in panel-units (panel size = frame size).
// vx=0 means frame top-left aligned to track-x=0, etc.
const ZOOM_TARGETS = [
  { vx: 0, vy: 0 }, // Brand
  { vx: 1, vy: 0 }, // Content
  { vx: 0, vy: 1 }, // Retention
  { vx: 1, vy: 1 }, // Community & Partnerships
];

const PANEL_BG = ["#FAFAFA", "#F3F0EA", "#FAFAFA", "#F3F0EA"] as const;

// easeInOutCubic — smooth ramps on the zoom in/out portions.
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Curve with long eased ramps and a brief plateau — tuned for FLOW.
 * Within a single panel segment (local 0..1):
 *   0    -> 0.40:  ramp up,    eased   (long, smooth zoom-in)
 *   0.40 -> 0.60:  HOLD at 1            (brief peak — read the panel)
 *   0.60 -> 1:     ramp down,  eased   (long, smooth zoom-out)
 *
 * 40/20/40 split keeps the motion in continuous transition for 80% of every
 * segment and only briefly plateaus at peak. Eliminates the "stuck" feel that
 * a longer dwell created and gives the section a more organic, flowing pace.
 */
function zoomCurve(local: number): number {
  if (local < 0.4) return easeInOutCubic(local / 0.4);
  if (local > 0.6) return easeInOutCubic((1 - local) / 0.4);
  return 1;
}

export function FourSurfacesHorizontal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  // Cache frame dimensions so the scroll loop doesn't read layout every frame.
  const frameDimsRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let ticking = false;

    const measure = () => {
      const frame = frameRef.current;
      if (!frame) return;
      frameDimsRef.current = {
        w: frame.offsetWidth,
        h: frame.offsetHeight,
      };
    };

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

      // Each of the 4 panels gets 1/4 of total progress.
      const idx = Math.min(3, Math.floor(progress * 4));
      const local = progress * 4 - idx;
      const zoom = zoomCurve(local);

      const target = ZOOM_TARGETS[idx];
      const { w: fw, h: fh } = frameDimsRef.current;
      if (!fw || !fh) return;

      const s = 0.5 + 0.5 * zoom; // 0.5 (overview) -> 1.0 (zoomed)
      const vxPx = zoom * target.vx * fw;
      const vyPx = zoom * target.vy * fh;
      const tx = -vxPx * s;
      const ty = -vyPx * s;

      track.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${s})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      {/* MOBILE / TABLET — vertical grid, text-only (no zoom hijack) */}
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

      {/* DESKTOP — pinned section, contained frame, 2x2 canvas, zoom-in/out cycles */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{ height: "320vh", backgroundColor: "#F3F0EA" }}
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
              backgroundColor: "#FAFAFA",
            }}
          >
            <div
              ref={trackRef}
              className="absolute top-0 left-0"
              style={{
                width: "200%",
                height: "200%",
                transformOrigin: "0 0",
                transform: "translate3d(0, 0, 0) scale(0.5)",
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
