type Service = {
  title: string;
  description: string;
  offerings: string[];
};

const services: Service[] = [
  {
    title: "Analytics & CRM",
    description:
      "Built-in performance intelligence. Our proprietary CRM aggregates campaign, lifecycle, and channel data so every decision is grounded in what's actually moving revenue.",
    offerings: [
      "Performance Tracking",
      "Lifecycle Analytics",
      "Revenue Attribution",
      "Cohort & Retention Reporting",
      "Custom Dashboards",
    ],
  },
  {
    title: "Email Marketing",
    description:
      "Lifecycle-driven email strategy that connects merchandising calendars to customer journeys, optimized for measurable retention and revenue.",
    offerings: [
      "Campaign Strategy",
      "Lifecycle Flows",
      "Segmentation",
      "Merchandising Alignment",
      "Performance Optimization",
    ],
  },
  {
    title: "SMS Marketing",
    description:
      "Short-form messaging that respects the inbox — offer-led, retention-focused, growth-aware.",
    offerings: [
      "Campaign Planning",
      "Offer Strategy",
      "Retention Messaging",
      "Subscriber Growth",
    ],
  },
  {
    title: "Social Content Strategy",
    description:
      "Content direction and storytelling frameworks that translate brand vision into platform-native creative.",
    offerings: [
      "Content Direction",
      "Campaign Storytelling",
      "Trend Translation",
      "Creative Briefing",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-20 sm:py-28 lg:py-40 px-6 sm:px-8 lg:px-16 mt-20 sm:mt-24 lg:mt-32" style={{ backgroundColor: '#FCFBF8', position: 'relative' }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundSize: '250px 250px'
      }} />
      <div className="max-w-7xl mx-auto relative">
        {/* Intro Section */}
        <div className="mb-12 lg:mb-20 max-w-4xl">
          <p className="text-xs tracking-widest uppercase mb-8 lg:mb-12" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>What We Do</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl sm:text-4xl lg:text-[3.5rem] mb-8 lg:mb-12 leading-tight">
            Channels don't define our work, outcomes do
          </h2>
          <p className="text-base sm:text-lg max-w-2xl" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
            We build and run marketing as a connected system where brand, creative, and performance work together.
          </p>
        </div>

        {/* Large Editorial Image */}
        <div className="mb-16 lg:mb-24">
          <img
            src="https://images.unsplash.com/photo-1754680837239-cfe387461287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Campaign moodboard"
            className="w-full h-[360px] sm:h-[520px] lg:h-[800px] object-cover"
            style={{ filter: 'grayscale(8%)' }}
          />
        </div>

        {/* Services Grid — POV-style: description + bullet list per service */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-x-20 lg:gap-y-24 mt-16 lg:mt-24">
          {services.map((service) => (
            <article key={service.title} className="space-y-6 lg:space-y-8">
              <h3
                style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }}
                className="text-2xl sm:text-3xl lg:text-[2.25rem] leading-tight"
              >
                {service.title}
              </h3>

              <p
                className="text-base sm:text-lg max-w-xl"
                style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}
              >
                {service.description}
              </p>

              <div
                className="pt-5 lg:pt-6"
                style={{ borderTop: '1px solid #D6D0CF' }}
              >
                <ul className="space-y-3 lg:space-y-4">
                  {service.offerings.map((offering) => (
                    <li
                      key={offering}
                      className="text-xs tracking-widest uppercase"
                      style={{ color: '#5E5954', letterSpacing: '0.15em' }}
                    >
                      {offering}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
