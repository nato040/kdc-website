import { SectionDivider } from "../components/SectionDivider";
import { FadeInOnScroll } from "../components/FadeInOnScroll";

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
            THE APPROACH.
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

    </div>
  );
}
