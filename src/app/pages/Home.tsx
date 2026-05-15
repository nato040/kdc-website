import image_i_vgrVGvj_X2 from '@/imports/i-vgrVGvj-X2.jpg'
import image_i_qVTH5fb_X2_4 from '@/imports/i-qVTH5fb-X2-4.jpg'
import image_i_qVTH5fb_X2_3 from '@/imports/i-qVTH5fb-X2-3.jpg'
import image_i_FPXCPNf_X2 from '@/imports/i-FPXCPNf-X2.jpg'
import image_i_qVTH5fb_X2_2 from '@/imports/i-qVTH5fb-X2-2.jpg'
import image_i_6vsJLVN_X2 from '@/imports/i-6vsJLVN-X2.jpg'
import { HeroCarousel } from "../components/HeroCarousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Who We Work With */}
      <section className="py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-16" style={{ backgroundColor: '#FCFBF8', position: 'relative' }}>
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundSize: '250px 250px'
        }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left - Image */}
            <div>
              <img
                src={image_i_6vsJLVN_X2}
                alt="Fashion editorial"
                className="w-full h-[420px] sm:h-[520px] lg:h-[700px] object-cover"
                style={{ filter: 'grayscale(5%)' }}
              />
            </div>

            {/* Right - Text */}
            <div className="space-y-8 lg:space-y-12">
              <p className="text-xs tracking-widest uppercase" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Who We Work With</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl lg:text-[2.5rem] max-w-lg leading-tight">
                We partner with design-led, growth-focused fashion and lifestyle brands.
              </h2>
              <p className="text-lg max-w-md" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.8' }}>
                These are brands with strong products and identity where marketing has started to feel inconsistent or disconnected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-16" style={{ backgroundColor: '#F3F0EA', position: 'relative', borderTop: '1px solid #D6D0CF' }}>
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundSize: '250px 250px'
        }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 mb-12 lg:mb-20">
            {/* Left - Label */}
            <div className="lg:col-span-3">
              <p className="text-xs tracking-widest uppercase" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>The Problem</p>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-9 space-y-8 lg:space-y-12">
              <h2 style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-3xl lg:text-[3rem] max-w-3xl leading-tight">
                It is not that your brand needs more marketing.
              </h2>
              <div className="space-y-8 max-w-2xl text-lg" style={{ color: '#3A342F', fontWeight: 300, lineHeight: '1.9' }}>
                <p>You already have a clear point of view, strong product, and a defined aesthetic.</p>
                <p>Marketing begins to feel fragmented across channels, inconsistent across campaigns, and disconnected from the brand itself.</p>
              </div>
            </div>
          </div>

          {/* Wide landscape image */}
          <div className="mt-12 lg:mt-20">
            <img
              src={image_i_FPXCPNf_X2}
              alt="Creative workspace"
              className="w-full h-[300px] sm:h-[420px] lg:h-[600px] object-cover"
              style={{ filter: 'grayscale(8%)' }}
            />
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="py-20 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-16" style={{ backgroundColor: '#FCFBF8', position: 'relative' }}>
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundSize: '250px 250px'
        }} />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-xs tracking-widest uppercase mb-12 lg:mb-24" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>Value</p>

          {/* Row 1: Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-32">
            <div>
              <p style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-xl sm:text-2xl lg:text-[2.25rem] leading-relaxed max-w-lg">More cohesive launches lead to higher sell through</p>
            </div>
            <div>
              <img
                src={image_i_vgrVGvj_X2}
                alt="Editorial fashion"
                className="w-full h-[320px] sm:h-[420px] lg:h-[450px] object-cover"
                style={{ filter: 'grayscale(5%)' }}
              />
            </div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-32">
            <div className="lg:order-1 order-2">
              <img
                src="https://images.unsplash.com/photo-1770457732642-505ffd11c062?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Fabric texture"
                className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
                style={{ filter: 'grayscale(8%)' }}
              />
            </div>
            <div className="lg:order-2 order-1">
              <p style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-xl sm:text-2xl lg:text-[2.25rem] leading-relaxed max-w-lg">
                Stronger storytelling increases conversion and average order value
              </p>
            </div>
          </div>

          {/* Row 3: Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-xl sm:text-2xl lg:text-[2.25rem] leading-relaxed max-w-lg mb-8 lg:mb-12">
                Stronger CRM drives repeat purchase, long-term retention, and customer connection
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', color: '#171717', fontWeight: 300 }} className="text-xl sm:text-2xl lg:text-[2.25rem] leading-relaxed max-w-lg">
                When channels align, growth accelerates
              </p>
            </div>
            <div>
              <img
                src={image_i_qVTH5fb_X2_4}
                alt="Fashion portrait"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                style={{ filter: 'grayscale(5%)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
