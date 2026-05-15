import { useState } from "react";
import heroImg1 from "../../imports/i-qVTH5fb-X2-1.jpg";
import heroImg2 from "../../imports/i-6vsJLVN-X2.jpg";
import heroImg3 from "../../imports/i-qVTH5fb-X2-2.jpg";
import heroImg4 from "../../imports/i-FPXCPNf-X2.jpg";
import heroImg5 from "../../imports/i-qVTH5fb-X2-3.jpg";
import heroImg6 from "../../imports/i-qVTH5fb-X2-4.jpg";
import heroImg7 from "../../imports/i-vgrVGvj-X2.jpg";
import heroImg8 from "../../imports/i-qVTH5fb-X2-5.jpg";
import heroImg9 from "../../imports/i-rQjXSbx-X2.jpg";
import heroImg10 from "../../imports/i-4scNLcf-X2.jpg";

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6, heroImg7, heroImg8, heroImg9, heroImg10];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-black min-h-[560px] h-[88vh] lg:h-[95vh]"
    >
      {/* Hero Background Image */}
      <img
        src={heroImages[currentIndex]}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{ objectPosition: 'center 65%' }}
      />

      {/* Soft charcoal overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(58, 52, 47, 0.08)' }} />

      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <div className="w-full h-full" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }} />
      </div>

      {/* Navigation Arrows — hidden on mobile, dots are the touch interface */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:opacity-80 transition-opacity items-center justify-center w-11 h-11"
        style={{ fontSize: '2rem' }}
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:opacity-80 transition-opacity items-center justify-center w-11 h-11"
        style={{ fontSize: '2rem' }}
        aria-label="Next image"
      >
        ›
      </button>

      {/* Dot Indicators — bigger hit area via padding, visual stays small */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="p-2 -m-2 rounded-full transition-all hover:opacity-80"
            aria-label={`Go to image ${index + 1}`}
          >
            <span
              className="block w-2 h-2 rounded-full"
              style={{
                backgroundColor: currentIndex === index ? '#FCFBF8' : 'rgba(252, 251, 248, 0.4)'
              }}
            />
          </button>
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center px-6 sm:px-8 lg:px-16 z-10">
        <div className="text-white max-w-7xl mx-auto w-full lg:pl-12">
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 30px rgba(0, 0, 0, 0.4)',
              lineHeight: '1.1',
              fontSize: 'clamp(2.25rem, 8vw, 5.75rem)'
            }}
            className="mb-6 sm:mb-10 animate-fade-in"
          >
            Built by Instinct.<br />
            Iconic by design.
          </h1>
          <p className="text-sm sm:text-base lg:text-lg animate-fade-in-delay" style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 300, letterSpacing: '0.05em', marginTop: '1.25rem' }}>
            Marketing, shaped like a brand.
          </p>
        </div>
      </div>
    </div>
  );
}
