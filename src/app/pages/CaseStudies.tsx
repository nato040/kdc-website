import { useEffect, useRef, useState } from "react";
import { SectionDivider } from "../components/SectionDivider";
import { FadeInOnScroll } from "../components/FadeInOnScroll";

/**
 * CountUp — animates from 0 to `end` when scrolled into view.
 * easeOutCubic curve, ~1.2s default. Respects prefers-reduced-motion.
 * Used for the OUTCOMES stats so the numbers feel earned.
 */
function CountUp({
  end,
  duration = 1200,
  prefix = "",
  suffix = "",
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(eased * end));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function CaseStudies() {
  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundSize: '250px 250px'
      }} />

      {/* SECTION 1 — HERO */}
      <section className="px-6 lg:px-16 mt-32 relative" style={{ paddingTop: '96px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            SELECTED EXPERIENCE
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.1' }} className="text-[40px] md:text-[56px] lg:text-[72px] max-w-4xl">
            What connected marketing systems make possible.
          </h1>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2 — THE WORK (ivory tile) */}
      <section id="work" className="px-6 lg:px-16 relative scroll-mt-24" style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F3F0EA' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            THE WORK
          </p>

          <div className="space-y-16">
            {/* Pillar 1 — Brand */}
            <FadeInOnScroll>
              <div className="space-y-6">
                <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                  Brand.
                </h3>
                <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                  Brand architecture, messaging, voice, and creative direction. Campaign briefs and seasonal planning.
                </p>
              </div>
            </FadeInOnScroll>

            {/* Pillar 2 — Content (added 2026-05-29 per consistency map) */}
            <FadeInOnScroll>
              <div className="space-y-6">
                <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                  Content.
                </h3>
                <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                  Direction and production of social, product, and campaign shoots. Stylist-led, brand-led, built to live across every channel without losing the thread.
                </p>
              </div>
            </FadeInOnScroll>

            {/* Pillar 3 — Retention (directed, not run) */}
            <FadeInOnScroll>
              <div className="space-y-6">
                <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                  Retention.
                </h3>
                <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                  Email and CRM strategy, lifecycle direction, and the inbox as an editorial environment. Built on our own platform: Klaviyo data, campaign and flow performance, monthly KPIs, send calendars, and creative briefs in one system. Our direction, our reporting, execution by our team. No third-party black box.
                </p>
              </div>
            </FadeInOnScroll>

            {/* Pillar 4 — Community & Partnerships */}
            <FadeInOnScroll>
              <div className="space-y-6">
                <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                  Community &amp; Partnerships.
                </h3>
                <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                  The relationships around the brand. Cause-related partnerships with nonprofits, creator and PR collaborations, and the brands and people the audience already trusts.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* OUTCOMES — indicative numerical results from past partnerships */}
      <section className="px-6 lg:px-16 relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            OUTCOMES
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.15' }} className="text-[28px] md:text-[40px] lg:text-[52px] mb-12 lg:mb-16 max-w-3xl">
            What the work has produced.
          </h2>

          <div className="grid sm:grid-cols-2 gap-10 lg:gap-20">
            <div className="border-t pt-8" style={{ borderColor: '#D6D0CF' }}>
              <p style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1' }} className="text-[56px] md:text-[72px] lg:text-[88px] mb-4">
                <CountUp end={30} />-<CountUp end={35} suffix="%" />
              </p>
              <p className="text-[11px] tracking-widest uppercase" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.18em' }}>
                CRM Revenue Contribution
              </p>
            </div>
            <div className="border-t pt-8" style={{ borderColor: '#D6D0CF' }}>
              <p style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1' }} className="text-[56px] md:text-[72px] lg:text-[88px] mb-4">
                <CountUp end={25} prefix="+" />-<CountUp end={35} suffix="%" />
              </p>
              <p className="text-[11px] tracking-widest uppercase" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.18em' }}>
                Customer LTV
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
