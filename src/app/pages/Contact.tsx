import { SectionDivider } from "../components/SectionDivider";

export default function Contact() {
  return (
    <div style={{ backgroundColor: '#F3F0EA' }}>
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundSize: '250px 250px'
      }} />

      {/* SECTION 1 — HERO */}
      <section className="px-6 lg:px-16 mt-32 relative" style={{ paddingTop: '96px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            CONTACT
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400, lineHeight: '1.1' }} className="text-[40px] md:text-[56px] lg:text-[72px]">
            Select partnerships only.
          </h1>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2 — HOW TO START */}
      <section className="px-6 lg:px-16 relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="space-y-8">
            <p className="text-[16px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6' }}>
              For project inquiries, consulting, or retained support:
            </p>

            <a
              href="mailto:hello@kennydonnacollective.com"
              style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 400 }}
              className="text-[28px] lg:text-[32px] inline-block hover:opacity-60 transition-opacity"
            >
              hello@kennydonnacollective.com
            </a>

            <p className="text-[14px]" style={{ color: '#5E5954', fontWeight: 400, lineHeight: '1.6' }}>
              Most engagements begin with a short conversation or an Audit. Tell us about your brand, where it is, and what isn't connecting.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 3 — CONNECT */}
      <section className="px-6 lg:px-16 relative" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}>
            CONNECT
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            <a
              href="https://instagram.com/kennydonnacollective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-widest uppercase transition-all hover:opacity-60"
              style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.linkedin.com/company/kenny-donna-collective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-widest uppercase transition-all hover:opacity-60"
              style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}
            >
              LINKEDIN
            </a>
            <a
              href="https://kennydonnacollective.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-widest uppercase transition-all hover:opacity-60"
              style={{ color: '#5E5954', fontWeight: 500, letterSpacing: '0.20em' }}
            >
              SUBSTACK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
