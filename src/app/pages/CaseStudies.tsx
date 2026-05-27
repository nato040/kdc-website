import { Link } from "react-router";
import { SectionDivider } from "../components/SectionDivider";

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

      {/* SECTION 2 — THE WORK */}
      <section id="work" className="px-6 lg:px-16 relative scroll-mt-24" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            THE WORK
          </p>

          <div className="space-y-16">
            {/* Block 1 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Brand and strategy.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                Brand architecture, messaging, voice, and creative direction. Campaign briefs and seasonal planning.
              </p>
            </div>

            {/* Block 2 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Marketing systems designed to scale.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                Campaign calendars, content briefs, and cross-channel rhythm connecting email, SMS, and social into one editorial system.
              </p>
            </div>

            {/* Block 3 — our own retention platform */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Our own retention platform.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                Built in-house. Klaviyo data, campaign and flow performance, monthly KPIs, send calendars, and creative briefs &mdash; one system per partner, every metric in real time. No third-party black box.
              </p>
            </div>

            {/* Block 4 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Beyond the brand.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                Cause-related partnerships with nonprofit organizations, influencer and PR collaborations, and content strategy aligned across every customer touchpoint.
              </p>
            </div>

            {/* Block 5 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Analytics and measurement.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                Measurement frameworks, KPI architecture, and reporting cadence that turn data into informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 4 — CATEGORIES */}
      <section className="px-6 lg:px-16 relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            CATEGORIES
          </p>

          <p className="text-[16px] mb-8" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6' }}>
            KDC works with design-led brands across:
          </p>

          <div className="space-y-4 text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6' }}>
            <p>Fashion and apparel</p>
            <p>Athletic and activewear</p>
            <p>Beauty</p>
            <p>Wellness</p>
            <p>Lifestyle and home</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 5 — CLOSING */}
      <section className="px-6 lg:px-16 relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            WHAT'S POSSIBLE
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.15' }} className="text-[28px] md:text-[40px] lg:text-[56px] mb-8 max-w-4xl">
            Every brand we work with is different. The system underneath the work is the same: connected, customer-aware, and built to perform.
          </h2>
          <Link
            to="/contact"
            className="text-[15px] transition-opacity duration-700 hover:opacity-60"
            style={{ color: '#171717', fontWeight: 400, letterSpacing: '0.10em' }}
          >
            → Begin a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
