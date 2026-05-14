export default function Approach() {
  return (
    <section className="py-40 px-8 lg:px-16 mt-32" style={{ backgroundColor: '#F3F0EA', position: 'relative' }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundSize: '250px 250px'
      }} />
      <div className="max-w-7xl mx-auto relative">
        <p className="text-xs tracking-widest uppercase mb-20" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>How We Partner</p>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="space-y-8">
            <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl lg:text-4xl leading-tight">Where We Sit</h3>
            <div className="space-y-6 text-lg" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
              <p>
                We sit between product and brand.
              </p>
              <p>
                We shape what you are creating into how it shows up across every customer moment. We operate as a long-term partner, by design, not by default.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1642706813633-5d9763587660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Campaign planning"
              className="w-full h-[600px] object-cover"
              style={{ filter: 'grayscale(8%)' }}
            />
          </div>
        </div>

        {/* Section 2: Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="lg:order-1 order-2">
            <img
              src="https://images.unsplash.com/photo-1776436037469-2642b90e03bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Strategic moodboard"
              className="w-full h-[500px] object-cover"
              style={{ filter: 'grayscale(8%)' }}
            />
          </div>
          <div className="lg:order-2 order-1 space-y-8">
            <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl lg:text-4xl leading-tight">KDC System</h3>
            <div className="space-y-6 text-lg" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
              <p>
                Our work is grounded in a system that turns campaigns into measurable growth. Campaign planning, CRM, and performance tracking.
              </p>
              <p>
                It is designed to generate insight, not just activity.
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-2xl lg:text-3xl pt-6">
                On-brand in every detail. Built to deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
