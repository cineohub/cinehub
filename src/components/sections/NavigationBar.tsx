import { useState, useEffect } from 'react';
import CineHubLogo from '@/components/CineHubLogo';

const WA_ENQUIRE = "https://wa.me/917702521717?text=Hi%20Cineo%20Hub%2C%20I%20want%20to%20enquire%20about%20your%20reel%20packages!";

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing',  label: 'Pricing'  },
  { href: '#contact',  label: 'Contact'  },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled' : ''}`}
        style={scrolled ? {} : { background: 'transparent', borderBottom: '1px solid transparent' }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

            <a href="/" aria-label="Cineo Hub Home" style={{ textDecoration: 'none' }}>
              <CineHubLogo scale={1} />
            </a>

            {/* Desktop nav — hidden on mobile via CSS */}
            <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
                {navLinks.map(({ href, label }) => (
                  <a key={label} href={href} className="nav-link" style={{ textDecoration: 'none' }}>{label}</a>
                ))}
              </div>
              <button
                onClick={() => window.open(WA_ENQUIRE, '_blank')}
                className="btn-primary"
                style={{ padding: '11px 28px', fontSize: '0.78rem', letterSpacing: '1.2px', marginLeft: 24 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 24px rgba(208,2,27,0.5), 0 6px 28px rgba(208,2,27,0.4)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 28px rgba(208,2,27,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'; }}
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile hamburger — hidden on desktop */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10, padding: '10px 12px',
                cursor: 'pointer', display: 'flex', flexDirection: 'column',
                gap: 5, alignItems: 'center', justifyContent: 'center',
                minHeight: 44, minWidth: 44,
              }}
              className="mobile-hamburger"
            >
              <span style={{ display: 'block', width: 20, height: 2, background: '#F0F0F0', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 14, height: 2, background: '#F0F0F0', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 20, height: 2, background: '#F0F0F0', borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay menu */}
      {open && (
        <div className="mobile-menu-overlay md:hidden">
          <button className="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div style={{ marginBottom: 48 }}>
            <CineHubLogo scale={1.5} />
          </div>

          {navLinks.map(({ href, label }) => (
            <a key={label} href={href} className="mobile-menu-link" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}

          <div style={{ marginTop: 40, width: '80%', maxWidth: 280 }}>
            <button
              onClick={() => { window.open(WA_ENQUIRE, '_blank'); setOpen(false); }}
              className="btn-primary"
              style={{ width: '100%', minHeight: 52, fontSize: '0.85rem' }}
            >
              Enquire Now
            </button>
          </div>

          <p style={{ position: 'absolute', bottom: 32, fontFamily: "'Inter', sans-serif", color: '#333', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Cineo Hub · Vijayawada
          </p>
        </div>
      )}
    </>
  );
}

