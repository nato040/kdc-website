type CapabilityGroup = {
  category: string;
  items: string[];
};

const capabilities: CapabilityGroup[] = [
  {
    category: "Strategy",
    items: [
      "Brand Positioning",
      "Campaign Strategy",
      "Promotion Strategy",
      "Messaging Systems",
      "Customer Journey",
      "Brand Storytelling",
    ],
  },
  {
    category: "Creative",
    items: [
      "Creative Direction",
      "Content Production",
      "Social Media",
      "UGC Direction",
      "Photoshoots",
      "Reels/TikTok",
    ],
  },
  {
    category: "CRM",
    items: [
      "Email Marketing",
      "SMS Marketing",
      "Klaviyo Management",
      "Lifecycle Flows",
      "Segmentation",
      "Retention Marketing",
    ],
  },
  {
    category: "Growth",
    items: [
      "Paid Social Strategy",
      "Meta Ads",
      "SEO Strategy",
      "Conversion Optimization",
      "Funnel Analysis",
      "Reporting & Analytics",
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

        {/* Platform — proprietary CRM & analytics positioning */}
        <div className="mb-20 lg:mb-32">
          <p
            className="text-xs tracking-widest uppercase mb-8 lg:mb-12"
            style={{ color: '#5E5954', letterSpacing: '0.15em' }}
          >
            Built In-House
          </p>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left — headline + description */}
            <div className="lg:col-span-7">
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  color: '#171717',
                  fontWeight: 300,
                }}
                className="text-2xl sm:text-3xl lg:text-[2.75rem] leading-tight mb-6 lg:mb-10"
              >
                We don't just run your marketing. We built the platform that measures it.
              </h2>
              <p
                className="text-base sm:text-lg max-w-xl"
                style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}
              >
                Our proprietary CRM and analytics platform aggregates campaign, lifecycle, and channel data in one place — giving every client real-time visibility into what's actually moving revenue. No third-party black boxes, no integration drama. Insight you own.
              </p>
            </div>

            {/* Right — what's built in */}
            <div className="lg:col-span-5 lg:pt-4">
              <p
                className="text-xs tracking-widest uppercase pb-4 lg:pb-5 mb-2"
                style={{
                  color: '#5E5954',
                  letterSpacing: '0.15em',
                  borderBottom: '1px solid #D6D0CF',
                }}
              >
                What's In The Platform
              </p>
              <ul>
                {[
                  'Custom CRM & Client Reporting',
                  'Real-Time Performance Tracking',
                  'Revenue Attribution',
                  'Cohort & Lifecycle Analytics',
                  'Bespoke Client Dashboards',
                ].map((item, i, arr) => (
                  <li
                    key={item}
                    className="text-base lg:text-[15px] py-4 lg:py-[14px]"
                    style={{
                      color: '#171717',
                      fontWeight: 300,
                      borderBottom:
                        i < arr.length - 1 ? '1px solid #E8E2D6' : 'none',
                      lineHeight: '1.4',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Capabilities Overview — 4-column matrix across Strategy, Creative, CRM, Growth */}
        <div className="mt-16 lg:mt-24">
          <p
            className="text-xs tracking-widest uppercase mb-10 lg:mb-16"
            style={{ color: '#5E5954', letterSpacing: '0.15em' }}
          >
            Capabilities Overview
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-10">
            {capabilities.map((group) => (
              <div key={group.category}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: '#5E5954',
                    fontWeight: 300,
                    borderBottom: '1px solid #D6D0CF',
                  }}
                  className="text-xl sm:text-2xl pb-4 lg:pb-5 mb-2"
                >
                  {group.category}
                </h3>
                <ul>
                  {group.items.map((item, i) => (
                    <li
                      key={item}
                      className="text-base lg:text-[15px] py-4 lg:py-[14px]"
                      style={{
                        color: '#171717',
                        fontWeight: 300,
                        borderBottom: i < group.items.length - 1 ? '1px solid #E8E2D6' : 'none',
                        lineHeight: '1.4',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
