import { Link } from "react-router";
import { SectionDivider } from "../components/SectionDivider";

export default function Approach() {
  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundSize: '250px 250px'
      }} />

      {/* HERO */}
      <section className="px-6 lg:px-16 mt-32 relative" style={{ paddingTop: '96px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            APPROACH
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.1' }} className="text-[40px] md:text-[56px] lg:text-[72px]">
            How we work.
          </h1>
        </div>
      </section>

      <SectionDivider />

      {/* WHERE WE SIT */}
      <section className="px-6 lg:px-16 relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            WHERE WE SIT
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.15' }} className="text-[28px] md:text-[40px] lg:text-[56px] mb-8">
            We sit between product and customer.
          </h2>
          <div className="space-y-4 text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
            <p>
              The work connects what most brands treat as separate — brand, retention, content, community — into one ecosystem.
            </p>
            <p>
              A long-term partner by design, not by default.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* HOW WE THINK */}
      <section className="px-6 lg:px-16 relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            HOW WE THINK
          </p>

          <div className="space-y-16">
            {/* Principle 1 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Connection is the growth strategy.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                The brands that compound aren't the loudest. They're the most connected — to their product, their voice, and the customer who carries them forward.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Marketing is becoming infrastructure.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                Channel-by-channel thinking is over. The brands building well today treat brand, retention, content, and community as one operating system.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Community is intelligence.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                Reviews, conversations, reposts, customer language — these are not engagement metrics. They are the strongest signal a brand has about what to build next.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Retention is brand.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                The inbox is not a sales channel. It is an editorial environment that shapes how the customer remembers the brand. Retention done well is brand done well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* HOW WE WORK */}
      <section className="px-6 lg:px-16 relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            HOW WE WORK
          </p>

          <div className="space-y-16">
            {/* Principle 1 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Founder-led strategy.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                Every engagement is directed by the founder. Strategy doesn't get handed off.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Collective by design.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                KDC operates as a small, focused team — working alongside founders and their internal teams as one unit, not as an outside vendor.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="space-y-6">
              <h3 style={{ color: '#171717', fontWeight: 400, lineHeight: '1.3' }} className="text-[24px]">
                Built to compound.
              </h3>
              <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6', maxWidth: '720px' }}>
                Our engagements are designed to create capability that lasts beyond the contract. You should leave each engagement with a stronger system than you started with.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CLOSING */}
      <section className="px-6 lg:px-16 relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            WHERE TO START
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            <Link
              to="/contact"
              className="text-[15px] transition-opacity duration-700 hover:opacity-60"
              style={{ color: '#171717', fontWeight: 400, letterSpacing: '0.10em' }}
            >
              → Begin a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
