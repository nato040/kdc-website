import caseStudy1 from "../../imports/Screenshot_2026-04-21_at_6.54.19 PM.png";
import caseStudy2 from "../../imports/Screenshot_2026-04-21_at_6.53.52 PM.png";
import caseStudy3 from "../../imports/Screenshot_2026-04-21_at_5.27.58 PM.png";
import caseStudy4 from "../../imports/Screenshot_2026-04-21_at_6.56.01 PM.png";

export default function CaseStudies() {
  return (
    <section className="py-20 sm:py-28 lg:py-40 px-6 sm:px-8 lg:px-16 mt-20 sm:mt-24 lg:mt-32" style={{ backgroundColor: '#FCFBF8', position: 'relative' }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundSize: '250px 250px'
      }} />
      <div className="max-w-7xl mx-auto relative">
        <p className="text-xs tracking-widest uppercase mb-8 lg:mb-12" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Case Studies</p>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl sm:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-4xl leading-tight">
          A refined look at results delivered across a range of partners.
        </h2>

        {/* Case Study 1 */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 pb-16 lg:mb-32 lg:pb-32" style={{ borderBottom: '1px solid #D6D0CF' }}>
          <div>
            <img
              src={caseStudy1}
              alt="Campaign Performance"
              className="w-full h-[380px] sm:h-[480px] lg:h-[600px] object-cover"
              style={{ filter: 'grayscale(5%)' }}
            />
          </div>
          <div className="space-y-6 lg:space-y-8 lg:pt-12">
            <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-2xl sm:text-3xl lg:text-4xl leading-tight">Campaign Performance</h3>
            <p className="text-lg leading-relaxed" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
              Increased campaign performance, driving higher conversions and revenue through strategic brand alignment.
            </p>
            <div className="space-y-6 pt-8">
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl mb-2">30–35%</p>
                <p className="text-sm tracking-widest uppercase" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>CRM Revenue Contribution</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl mb-2">+112%</p>
                <p className="text-sm tracking-widest uppercase" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>YoY DTC Growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 pb-16 lg:mb-32 lg:pb-32" style={{ borderBottom: '1px solid #D6D0CF' }}>
          <div>
            <img
              src={caseStudy2}
              alt="Email & SMS Growth"
              className="w-full h-[380px] sm:h-[480px] lg:h-[600px] object-cover"
              style={{ filter: 'grayscale(5%)' }}
            />
          </div>
          <div className="space-y-6 lg:space-y-8 lg:pt-12">
            <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-2xl sm:text-3xl lg:text-4xl leading-tight">Email & SMS Growth</h3>
            <p className="text-lg leading-relaxed" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
              Scaled email and SMS into meaningful revenue drivers with cohesive messaging and timing.
            </p>
            <div className="space-y-6 pt-8">
              <div>
                <p className="text-sm tracking-widest uppercase mb-4" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Structured Promotional Calendar System</p>
              </div>
              <div>
                <p className="text-sm tracking-widest uppercase mb-4" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Lifecycle Marketing Strategy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 pb-16 lg:mb-32 lg:pb-32" style={{ borderBottom: '1px solid #D6D0CF' }}>
          <div>
            <img
              src={caseStudy3}
              alt="Collection Launches"
              className="w-full h-[380px] sm:h-[480px] lg:h-[600px] object-cover"
              style={{ filter: 'grayscale(5%)' }}
            />
          </div>
          <div className="space-y-6 lg:space-y-8 lg:pt-12">
            <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-2xl sm:text-3xl lg:text-4xl leading-tight">Collection Launches</h3>
            <p className="text-lg leading-relaxed" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
              Supported collection launches with stronger sell-through and demand generation.
            </p>
            <div className="space-y-6 pt-8">
              <div>
                <p className="text-sm tracking-widest uppercase mb-4" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Campaign Planning & Execution</p>
              </div>
              <div>
                <p className="text-sm tracking-widest uppercase mb-4" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Merchandising Alignment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <img
              src={caseStudy4}
              alt="Customer Retention"
              className="w-full h-[380px] sm:h-[480px] lg:h-[600px] object-cover"
              style={{ filter: 'grayscale(5%)' }}
            />
          </div>
          <div className="space-y-6 lg:space-y-8 lg:pt-12">
            <h3 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-2xl sm:text-3xl lg:text-4xl leading-tight">Customer Retention</h3>
            <p className="text-lg leading-relaxed" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
              Improved retention with more relevant customer journeys and strategic CRM and lifecycle efforts.
            </p>
            <div className="space-y-6 pt-8">
              <div>
                <p className="text-sm tracking-widest uppercase mb-4" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Strategic Segmentation</p>
              </div>
              <div>
                <p className="text-sm tracking-widest uppercase mb-4" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Flow Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
