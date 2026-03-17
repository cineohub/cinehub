import { useEffect, useRef } from 'react';

const WA_BOOK = "https://wa.me/917702521717?text=Hi%20Cine%20Hub%2C%20I%20want%20to%20book%20a%20shoot!";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.05 });
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', paddingTop: 90, paddingBottom: 60,
      overflow: 'hidden',
    }}>
      {/* Hero-specific top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '80%', maxWidth: 900, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(208,2,27,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <div className="reveal" style={{ marginBottom: 36 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(208,2,27,0.07)', border: '1px solid rgba(208,2,27,0.3)',
            borderRadius: 9999, padding: '9px 24px',
            fontFamily: "'Dancing Script', cursive", color: '#D0021B', fontSize: '1.1rem', fontWeight: 700,
          }}>
            <span className="red-dot-pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#D0021B', flexShrink: 0, display: 'block' }} />
            World's First Quick Content Service
          </span>
        </div>

        {/* Sub-headline */}
        <p className="reveal delay-1 hero-sub" style={{
          fontFamily: "'Playfair Display', serif",
          color: 'rgba(240,240,240,0.5)',
          fontWeight: 400,
          fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
          letterSpacing: '0.04em',
          marginBottom: 12,
        }}>
          We Shoot • Edit • Deliver Reels in
        </p>

        {/* Big headline */}
        <h1 className="reveal delay-2 hero-headline" style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: 'clamp(5rem, 13vw, 10.5rem)',
          color: '#D0021B',
          lineHeight: 0.9,
          marginBottom: 48,
          textShadow: '0 0 100px rgba(208,2,27,0.2)',
          letterSpacing: '-3px',
        }}>
          10 Minutes
          <sup style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)', position: 'relative', top: '-0.5em', letterSpacing: 0, opacity: 0.7 }}>*</sup>
        </h1>

        {/* Badges */}
        <div className="reveal delay-3 hero-badges" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 48 }}>
          {['🕐 24/7 Available', '✅ ISO Certified', "📍 Vijayawada's #1"].map((b) => (
            <span key={b} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 9999, padding: '8px 20px',
              fontFamily: "'Inter', sans-serif", fontSize: '0.78rem',
              color: '#888', letterSpacing: '0.3px',
              transition: 'border-color 0.25s, color 0.25s, background 0.25s',
              cursor: 'default',
            }}
              onMouseEnter={(e) => { const s = e.currentTarget as HTMLSpanElement; s.style.borderColor = 'rgba(208,2,27,0.35)'; s.style.color = '#D0D0D0'; s.style.background = 'rgba(208,2,27,0.05)'; }}
              onMouseLeave={(e) => { const s = e.currentTarget as HTMLSpanElement; s.style.borderColor = 'rgba(255,255,255,0.09)'; s.style.color = '#888'; s.style.background = 'rgba(255,255,255,0.03)'; }}
            >
              {b}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="reveal delay-4 hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 80 }}>
          <button
            onClick={() => window.open(WA_BOOK, '_blank')}
            className="btn-primary"
            style={{ fontSize: '0.85rem', padding: '16px 44px' }}
          >
            Book Now
          </button>
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: 9999, padding: '16px 44px',
              color: 'rgba(240,240,240,0.7)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700, fontSize: '0.85rem',
              letterSpacing: '1.2px', textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'border-color 0.3s, color 0.3s, background 0.3s, transform 0.25s',
            }}
            onMouseEnter={(e) => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.borderColor = 'rgba(255,255,255,0.6)';
              b.style.color = '#F0F0F0';
              b.style.background = 'rgba(255,255,255,0.04)';
              b.style.transform = 'scale(1.03) translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.borderColor = 'rgba(255,255,255,0.25)';
              b.style.color = 'rgba(240,240,240,0.7)';
              b.style.background = 'transparent';
              b.style.transform = 'scale(1) translateY(0)';
            }}
          >
            View Packages
          </button>
        </div>

        {/* Shimmer divider */}
        <div className="reveal delay-5" style={{ marginBottom: 52 }}>
          <div className="shimmer-line" />
        </div>

        {/* Trust badges row — replaces fake stats */}
        <div className="reveal delay-6" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
          {[
            { icon: '⚡', text: '10-Min Delivery' },
            { icon: '🎬', text: 'Pro Cinematographers' },
            { icon: '📍', text: 'Based in Vijayawada' },
          ].map(({ icon, text }, i) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              {i > 0 && <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.07)' }} />}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#666', fontSize: '0.78rem',
                  textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500,
                }}>{text}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
