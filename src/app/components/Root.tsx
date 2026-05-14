import { Outlet, Link } from "react-router";
import logoImg from "../../imports/kenny_donna_collective_logo_transparent-1.png";

export default function Root() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFBF8' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ backgroundColor: 'rgba(252, 251, 248, 0.95)', borderBottom: '1px solid #D6D0CF' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-7">
          <div className="grid grid-cols-3 items-center gap-12">
            {/* Left Navigation */}
            <div className="flex gap-9 lg:gap-14 justify-start">
              <Link to="/about" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                About
              </Link>
              <Link to="/services" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Services
              </Link>
              <Link to="/approach" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Approach
              </Link>
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex justify-center">
              <img src={logoImg} alt="Kenny Donna Collective" className="h-32 lg:h-40 w-auto max-w-3xl" />
            </Link>

            {/* Right Navigation */}
            <div className="flex gap-9 lg:gap-14 justify-end">
              <Link to="/case-studies" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Case Studies
              </Link>
              <Link to="/journal" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Journal
              </Link>
              <Link to="/contact" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <footer className="py-24 px-8 lg:px-16" style={{ backgroundColor: '#171717', borderTop: '1px solid #3A342F' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 mb-16">
            {/* Left - Brand */}
            <div>
              <p style={{ fontFamily: 'var(--font-serif)', color: '#FCFBF8', fontWeight: 300, textAlign: 'left' }} className="text-xl mb-3">
                KENNY DONNA<br />collective
              </p>
              <p className="text-sm" style={{ color: '#D6D0CF', fontWeight: 300 }}>
                Marketing, shaped like a brand.
              </p>
            </div>

            {/* Center - Navigation */}
            <div className="flex flex-col gap-4">
              <Link to="/about" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                About
              </Link>
              <Link to="/services" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Services
              </Link>
              <Link to="/journal" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Journal
              </Link>
              <Link to="/approach" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Approach
              </Link>
              <Link to="/case-studies" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Case Studies
              </Link>
              <Link to="/contact" className="text-xs tracking-widest uppercase transition-all hover:opacity-60" style={{ color: '#5E5954', letterSpacing: '0.15em' }}>
                Contact
              </Link>
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
