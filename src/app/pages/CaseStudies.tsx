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
            THE APPROACH
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.1' }} className="text-[40px] md:text-[56px] lg:text-[72px] max-w-4xl">
            What one connected system makes possible.
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
              <div className="border-t pt-8" style={{ borderColor: '#D6D0CF' }}>
                <p className="text-[11px] tracking-widest uppercase mb-4" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.18em' }}>
                  I.
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.1', letterSpacing: '0.01em' }} className="text-[26px] lg:text-[34px] mb-5">
                  Brand.
                </h3>
                <div className="space-y-3">
                  <p className="text-[17px] lg:text-[18px]" style={{ color: '#171717', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                    The briefs everything runs on.
                  </p>
                  <p className="text-[14px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px', fontStyle: 'italic' }}>
                    Brand strategy &amp; positioning &middot; voice &amp; messaging &middot; creative direction &middot; seasonal planning
                  </p>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Pillar 2 — Content (added 2026-05-29 per consistency map) */}
            <FadeInOnScroll>
              <div className="border-t pt-8" style={{ borderColor: '#D6D0CF' }}>
                <p className="text-[11px] tracking-widest uppercase mb-4" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.18em' }}>
                  II.
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.1', letterSpacing: '0.01em' }} className="text-[26px] lg:text-[34px] mb-5">
                  Content.
                </h3>
                <div className="space-y-3">
                  <p className="text-[17px] lg:text-[18px]" style={{ color: '#171717', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                    How the brand shows up, everywhere.
                  </p>
                  <p className="text-[14px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px', fontStyle: 'italic' }}>
                    Content &amp; social strategy &middot; campaign planning &middot; photoshoot &amp; campaign direction
                  </p>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Pillar 3 — Retention (directed, not run) */}
            <FadeInOnScroll>
              <div className="border-t pt-8" style={{ borderColor: '#D6D0CF' }}>
                <p className="text-[11px] tracking-widest uppercase mb-4" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.18em' }}>
                  III.
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.1', letterSpacing: '0.01em' }} className="text-[26px] lg:text-[34px] mb-5">
                  Retention.
                </h3>
                <div className="space-y-3">
                  <p className="text-[17px] lg:text-[18px]" style={{ color: '#171717', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                    The inbox, editorial in voice and built to convert.
                  </p>
                  <p className="text-[14px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px', fontStyle: 'italic' }}>
                    CRM &amp; lifecycle marketing &middot; email &amp; SMS strategy &middot; reporting, planning, and briefs in one system we built ourselves
                  </p>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Pillar 4 — Community & Partnerships */}
            <FadeInOnScroll>
              <div className="border-t pt-8" style={{ borderColor: '#D6D0CF' }}>
                <p className="text-[11px] tracking-widest uppercase mb-4" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.18em' }}>
                  IV.
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.1', letterSpacing: '0.01em' }} className="text-[26px] lg:text-[34px] mb-5">
                  Community &amp; Partnerships.
                </h3>
                <div className="space-y-3">
                  <p className="text-[17px] lg:text-[18px]" style={{ color: '#171717', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                    The company the brand keeps.
                  </p>
                  <p className="text-[14px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px', fontStyle: 'italic' }}>
                    Creator &amp; influencer collaborations &middot; PR coordination &middot; agency &amp; partner management
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

    </div>
  );
}
