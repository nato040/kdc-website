import aboutImg from "../../imports/Screenshot_2026-04-21_at_5.26.10 PM.png";

export default function About() {
  return (
    <section className="py-40 px-8 lg:px-16 mt-32" style={{ backgroundColor: '#FCFBF8', position: 'relative' }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundSize: '250px 250px'
      }} />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <img
            src={aboutImg}
            alt="Editorial fashion"
            className="w-full h-[800px] object-cover"
            style={{ filter: 'grayscale(8%)' }}
          />
          <div className="space-y-10 max-w-lg">
            <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl lg:text-[2.5rem] leading-tight">
              About
            </h2>
            <div className="space-y-8 text-lg" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
              <p>
                We partner with design-led brands that need marketing to feel as intentional as the product itself.
              </p>
              <p>
                Our work connects brand, merchandising, CRM, and campaign execution into a system designed for long-term growth.
              </p>
              <p>
                Every touchpoint is considered. Every campaign is connected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
