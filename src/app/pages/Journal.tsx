export default function Journal() {
  const articles = [
    {
      title: 'Building Campaigns That Feel Like Brand Moments',
      date: 'March 2026',
      category: 'Strategy',
      excerpt: 'How fashion and lifestyle brands can move beyond transactional marketing to create campaigns that reinforce identity and drive growth.',
      image: 'https://images.unsplash.com/photo-1630893173613-ceaf4a6797d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      title: 'CRM as Creative Direction',
      date: 'February 2026',
      category: 'CRM',
      excerpt: 'Why email and SMS should be treated as extensions of your brand world, not just conversion channels.',
      image: 'https://images.unsplash.com/photo-1659772847665-b89376be492d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      title: 'The Problem with Performance Marketing',
      date: 'January 2026',
      category: 'Perspective',
      excerpt: 'What happens when growth tactics start working against brand equity—and what to do about it.',
      image: 'https://images.unsplash.com/photo-1652746774015-e319854828d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  return (
    <section className="py-40 px-8 lg:px-16 mt-32" style={{ backgroundColor: '#FCFBF8', position: 'relative' }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundSize: '250px 250px'
      }} />
      <div className="max-w-7xl mx-auto relative">
        <p className="text-xs tracking-widest uppercase mb-12" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Journal</p>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-4xl lg:text-5xl mb-20 max-w-3xl leading-tight">
          Thoughts on brand, strategy, and building marketing that feels intentional.
        </h2>

        {/* Featured Article */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-[600px] object-cover"
                style={{ filter: 'grayscale(8%)' }}
              />
            </div>
            <div className="space-y-6">
              <p className="text-xs tracking-widest uppercase" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>{articles[0].category}</p>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl lg:text-4xl leading-tight">
                {articles[0].title}
              </h3>
              <p className="text-lg" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
                {articles[0].excerpt}
              </p>
              <p className="text-sm pt-4" style={{ color: '#5E5954', fontWeight: 300 }}>{articles[0].date}</p>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-20">
          {articles.slice(1).map((article, i) => (
            <div key={i} className="space-y-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[400px] object-cover"
                style={{ filter: 'grayscale(8%)' }}
              />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>{article.category}</p>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-2xl lg:text-3xl leading-tight">
                {article.title}
              </h3>
              <p className="text-base" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
                {article.excerpt}
              </p>
              <p className="text-sm" style={{ color: '#5E5954', fontWeight: 300 }}>{article.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
