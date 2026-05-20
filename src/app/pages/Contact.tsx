export default function Contact() {
  return (
    <section className="py-20 sm:py-28 lg:py-40 px-6 sm:px-8 lg:px-16 mt-20 sm:mt-24 lg:mt-32" style={{ backgroundColor: '#F3F0EA', position: 'relative' }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundSize: '250px 250px'
      }} />
      <div className="max-w-4xl mx-auto relative text-center">
        <p className="text-xs tracking-widest uppercase mb-10 lg:mb-16" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Contact</p>

        <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl sm:text-4xl lg:text-5xl mb-10 lg:mb-16 leading-tight">
          Select partnerships only.
        </h2>

        <div className="space-y-8 lg:space-y-12 mb-14 lg:mb-20">
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
            For project inquiries, consulting, or retained support:
          </p>

          <a
            href="mailto:hello@kennydonnacollective.com"
            style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }}
            className="text-xl sm:text-2xl lg:text-3xl inline-block hover:opacity-60 transition-opacity break-all sm:break-normal"
          >
            hello@kennydonnacollective.com
          </a>
        </div>

        <div className="pt-10 lg:pt-16" style={{ borderTop: '1px solid #D6D0CF' }}>
          <p className="text-xs tracking-widest uppercase mb-6 lg:mb-8" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Connect</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-12">
            <a
              href="https://instagram.com/kennydonnacollective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest uppercase transition-all hover:opacity-60"
              style={{ color: '#5E5954', letterSpacing: '0.15em' }}
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest uppercase transition-all hover:opacity-60"
              style={{ color: '#5E5954', letterSpacing: '0.15em' }}
            >
              LinkedIn
            </a>
            <a
              href="https://substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest uppercase transition-all hover:opacity-60"
              style={{ color: '#5E5954', letterSpacing: '0.15em' }}
            >
              Substack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
