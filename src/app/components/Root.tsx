import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import logoImg from "../../imports/kenny_donna_collective_logo_transparent-1.png";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/approach", label: "Approach" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export default function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFBF8' }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(252, 251, 248, 0.95)', borderBottom: '1px solid #D6D0CF' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-4 lg:py-7">
          {/* Desktop nav — 3-column grid as designed */}
          <div className="hidden lg:grid grid-cols-3 items-center gap-12">
            <div className="flex gap-9 lg:gap-14 justify-start">
              {navLinks.slice(0, 3).map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-xs tracking-widest uppercase transition-all hover:opacity-60"
                  style={{ color: '#5E5954', letterSpacing: '0.15em' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link to="/" className="flex justify-center">
              <img src={logoImg} alt="Kenny Donna Collective" className="h-32 lg:h-40 w-auto max-w-3xl" />
            </Link>
            <div className="flex gap-9 lg:gap-14 justify-end">
              {navLinks.slice(3).map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-xs tracking-widest uppercase transition-all hover:opacity-60"
                  style={{ color: '#5E5954', letterSpacing: '0.15em' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile nav — logo + hamburger */}
          <div className="flex lg:hidden items-center justify-between gap-4">
            <Link to="/" onClick={handleNavClick} className="flex items-center" aria-label="Kenny Donna Collective home">
              <img src={logoImg} alt="Kenny Donna Collective" className="h-12 sm:h-16 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex flex-col gap-1.5 p-3 -mr-3"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className="block w-6 h-px transition-transform"
                style={{
                  backgroundColor: '#171717',
                  transform: mobileMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-px transition-opacity"
                style={{
                  backgroundColor: '#171717',
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-px transition-transform"
                style={{
                  backgroundColor: '#171717',
                  transform: mobileMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileMenuOpen ? '600px' : '0px',
            backgroundColor: 'rgba(252, 251, 248, 0.98)',
            borderTop: mobileMenuOpen ? '1px solid #D6D0CF' : 'none',
          }}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="px-6 sm:px-8 py-8 flex flex-col gap-6">
            {navLinks.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={handleNavClick}
                  className="text-sm tracking-widest uppercase transition-all"
                  style={{
                    color: active ? '#171717' : '#5E5954',
                    letterSpacing: '0.18em',
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <footer className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-16" style={{ backgroundColor: '#171717', borderTop: '1px solid #3A342F' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-12 lg:mb-16">
            {/* Left - Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <p style={{ fontFamily: 'var(--font-serif)', color: '#FCFBF8', fontWeight: 300, textAlign: 'left' }} className="text-xl mb-3">
                KENNY DONNA<br />collective
              </p>
              <p className="text-sm" style={{ color: '#D6D0CF', fontWeight: 300 }}>
                Marketing, shaped like a brand.
              </p>
            </div>

            {/* Center - Navigation */}
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-xs tracking-widest uppercase transition-all hover:opacity-60"
                  style={{ color: '#5E5954', letterSpacing: '0.15em' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Right - Social Links */}
            <div className="flex flex-col gap-4 lg:items-end">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                LinkedIn
              </a>
              <a href="https://substack.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Substack
              </a>
            </div>
          </div>

          <div className="text-center pt-8" style={{ borderTop: '1px solid #3A342F' }}>
            <p className="text-xs tracking-widest uppercase" style={{ color: '#5E5954' }}>© 2026 Kenny Donna Collective</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
