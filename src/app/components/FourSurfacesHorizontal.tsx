import { useEffect, useRef } from "react";
import brandImg from "../../imports/_DUG9698.jpg"; // rack
import contentImg from "../../imports/_DUG9734.jpg"; // iPad moodboard

/**
 * FourSurfacesHorizontal — zoom-into-each-panel interaction.
 *
 * Initial state: all 4 panels visible at once as a 2x2 grid inside a bounded
 * frame. As the reader scrolls, a smoothed camera moves:
 *
 *   overview -> zoom into Brand -> pan to Content -> pan to Retention ->
 *   pan to Community & Partnerships -> zoom back to overview
 *
 * The camera zooms in only once and pans between panels at full zoom (no
 * in/out churn), and its progress is eased toward the scroll position each
 * frame so the motion glides instead of snapping to raw wheel input.
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

const PANEL_BG = ["#FAFAFA", "#F3F0EA", "#FAFAFA", "#F3F0EA"] as const;

// easeInOutCubic — smooth ramps for every camera segment.
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Camera keyframes over scroll progress (0..1). The camera zooms in ONCE,
 * then PANS across the four quadrants at full zoom (no in/out churn between
 * panels), and finally zooms back out to the 2x2 overview.
 *
 *   s      = track scale (0.5 = overview, 1.0 = one panel fills the frame)
 *   fx, fy = focus point in normalized track coords (0..1 across the 2x2)
 *
 * Quadrant centers: Brand (0.25,0.25) TL · Content (0.75,0.25) TR ·
 * Retention (0.25,0.75) BL · Community (0.75,0.75) BR.
 */
const CAMERA_KEYS = [
  { p: 0.0, s: 0.5, fx: 0.5, fy: 0.5 }, // overview
  { p: 0.14, s: 1.0, fx: 0.25, fy: 0.25 }, // zoom into Brand
  { p: 0.37, s: 1.0, fx: 0.75, fy: 0.25 }, // pan to Content
  { p: 0.6, s: 1.0, fx: 0.25, fy: 0.75 }, // pan to Retention
  { p: 0.82, s: 1.0, fx: 0.75, fy: 0.75 }, // pan to Community & Partnerships
  { p: 1.0, s: 0.5, fx: 0.5, fy: 0.5 }, // zoom back to overview
];

// Interpolate the camera (scale + focus) at a given scroll progress.
function sampleCamera(progress: number): { s: number; fx: number; fy: number } {
  const keys = CAMERA_KEYS;
  let i = 0;
  while (i < keys.length - 2 && progress > keys[i + 1].p) i++;
  const a = keys[i];
  const b = keys[i + 1];
  const span = b.p - a.p || 1;
  const lt = Math.max(0, Math.min(1, (progress - a.p) / span));
  const e = easeInOutCubic(lt);
  return {
    s: a.s + (b.s - a.s) * e,
    fx: a.fx + (b.fx - a.fx) * e,
    fy: a.fy + (b.fy - a.fy) * e,
  };
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

    let rafId = 0;
    let running = false;
    let target = 0; // raw scroll progress (0..1)
    let current = 0; // smoothed progress that the camera actually follows

    const measure = () => {
      const frame = frameRef.current;
      if (!frame) return;
      frameDimsRef.current = {
        w: frame.offsetWidth,
        h: frame.offsetHeight,
      };
    };

    const computeTarget = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const total = Math.max(1, section.offsetHeight - window.innerHeight);
      const scrolled = Math.max(0, -rect.top);
      target = Math.max(0, Math.min(1, scrolled / total));
    };

    const apply = (progress: number) => {
      const track = trackRef.current;
      if (!track) return;
      const { w: fw, h: fh } = frameDimsRef.current;
      if (!fw || !fh) return;
      const { s, fx, fy } = sampleCamera(progress);
      // Position the track so the focus point (fx,fy) lands in the frame center.
      const tx = fw / 2 - fx * 2 * fw * s;
      const ty = fh / 2 - fy * 2 * fh * s;
      track.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${s})`;
    };

    // rAF loop: ease `current` toward `target` so the camera glides instead of
    // snapping to raw, jittery wheel/trackpad input. Stops itself once settled.
    const render = () => {
      const track = trackRef.current;
      if (!track) {
        running = false;
        return;
      }
      if (window.innerWidth < 1024 || prefersReduced) {
        track.style.transform = "";
        running = false;
        return;
      }
      current += (target - current) * 0.09;
      if (Math.abs(target - current) < 0.0004) current = target;
      apply(current);
      if (current !== target) {
        rafId = requestAnimationFrame(render);
      } else {
        running = false;
      }
    };

    const kick = () => {
      computeTarget();
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(render);
      }
    };

    const onResize = () => {
      measure();
      kick();
    };

    measure();
    computeTarget();
    current = target; // no entrance animation on first paint
    apply(current);
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
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
        style={{ height: "360vh", backgroundColor: "#F3F0EA" }}
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
