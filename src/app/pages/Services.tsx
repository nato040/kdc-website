export default function Services() {
  return (
    <section className="py-40 px-8 lg:px-16 mt-32" style={{ backgroundColor: '#FCFBF8', position: 'relative' }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundSize: '250px 250px'
      }} />
      <div className="max-w-7xl mx-auto relative">
        {/* Intro Section */}
        <div className="mb-20 max-w-4xl">
          <p className="text-xs tracking-widest uppercase mb-12" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>What We Do</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-4xl lg:text-[3.5rem] mb-12 leading-tight">
            Channels don't define our work, outcomes do
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
            We build and run marketing as a connected system where brand, creative, and performance work together.
          </p>
        </div>

        {/* Large Editorial Image */}
        <div className="mb-24">
          <img
            src="https://images.unsplash.com/photo-1754680837239-cfe387461287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Campaign moodboard"
            className="w-full h-[700px] lg:h-[800px] object-cover"
            style={{ filter: 'grayscale(8%)' }}
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-16 mt-24">
          <div className="space-y-8">
            <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-2xl lg:text-3xl mb-10">Email Marketing</h3>
            <ul className="space-y-4 text-base" style={{ color: '#5E5954', fontWeight: 300 }}>
              <li>Campaign Strategy</li>
              <li>Lifecycle Flows</li>
              <li>Segmentation</li>
              <li>Merchandising Alignment</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-2xl lg:text-3xl mb-10">SMS Marketing</h3>
            <ul className="space-y-4 text-base" style={{ color: '#5E5954', fontWeight: 300 }}>
              <li>Campaign Planning</li>
              <li>Offer Strategy</li>
              <li>Retention Messaging</li>
              <li>Subscriber Growth</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-2xl lg:text-3xl mb-10">Social Content Strategy</h3>
            <ul className="space-y-4 text-base" style={{ color: '#5E5954', fontWeight: 300 }}>
              <li>Content Direction</li>
              <li>Campaign Storytelling</li>
              <li>Trend Translation</li>
              <li>Creative Briefing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
