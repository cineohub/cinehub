import { useEffect, useRef } from 'react';

const WA_BOOK = "https://wa.me/917702521717?text=Hi%20Cineo%20Hub%2C%20I%20want%20to%20book%20a%20shoot!";

function IPhoneMockup() {
  return (
    <div className="hero-iphone" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 220, height: 220, borderRadius: '50%',
        background: 'rgba(255,26,26,0.12)',
        filter: 'blur(60px)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ animation: 'phoneFloat 3s ease-in-out infinite', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: 260, height: 520,
          background: '#111',
          borderRadius: 38,
          border: '2px solid rgba(255,255,255,0.1)',
          boxShadow: '0 32px 64px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.05)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: 76, height: 22, background: '#111',
            borderRadius: '0 0 14px 14px', zIndex: 10,
          }} />

          <div style={{
            flex: 1,
            background: 'linear-gradient(160deg, #1a0000 0%, #0d0d0d 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '42px 16px 24px',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '35%', left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 150, height: 150,
              background: 'radial-gradient(circle, rgba(255,26,26,0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#FF1A1A', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12, position: 'relative', fontWeight: 600 }}>Cineo Hub</span>

            <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F0F0F0', fontWeight: 700, fontSize: '0.95rem', textAlign: 'center', lineHeight: 1.45, marginBottom: 8, position: 'relative' }}>
              Reels Created &<br />Delivered On The Spot
            </p>

            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#555', fontSize: '0.62rem', textAlign: 'center', letterSpacing: '0.4px', marginBottom: 28, position: 'relative' }}>
              Shot on iPhone • Delivered in 10 mins
            </p>

            <div style={{ position: 'relative', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: '2px solid rgba(255,26,26,0.35)', animation: 'recordPing 1.5s ease-out infinite' }} />
              <div style={{ width: 52, height: 52, borderRadius: '50%', border: '2px solid rgba(255,26,26,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#FF1A1A', boxShadow: '0 0 18px rgba(255,26,26,0.55)' }} />
              </div>
            </div>
          </div>

          <div style={{ height: 24, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 68, height: 3, borderRadius: 9999, background: 'rgba(255,255,255,0.18)' }} />
          </div>
        </div>

        <div style={{ position: 'absolute', left: -3, top: 88, width: 3, height: 26, background: 'rgba(255,255,255,0.08)', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -3, top: 124, width: 3, height: 26, background: 'rgba(255,255,255,0.08)', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', right: -3, top: 106, width: 3, height: 46, background: 'rgba(255,255,255,0.08)', borderRadius: '0 2px 2px 0' }} />
      </div>
    </div>
  );
}

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
      minHeight: '100vh', background: '#0d0d0d',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', paddingTop: 90, paddingBottom: 60, overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at 30% 50%, rgba(255,26,26,0.07) 0%, transparent 60%)' }} />

      {/* Desktop: side by side | Mobile: iPhone top, text bottom */}
      <div className="hero-inner" style={{
        width: '100%', maxWidth: 1200, margin: '0 auto',
        padding: '0 32px', display: 'flex', alignItems: 'center',
        gap: 40, position: 'relative', zIndex: 1,
      }}>

        {/* LEFT: text */}
        <div className="hero-text" style={{ flex: '0 0 58%', maxWidth: '58%', paddingLeft: '3%' }}>

          <div className="reveal" style={{ marginBottom: 28 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent', border: '1.5px solid #FF1A1A',
              borderRadius: 9999, padding: '8px 20px',
              fontFamily: "'DM Sans', sans-serif", color: '#ffffff',
              fontSize: '0.78rem', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF1A1A', flexShrink: 0, display: 'block', animation: 'redPulse 2s ease-in-out infinite' }} />
              World's First Quick Content Service
            </span>
          </div>

          <p className="reveal delay-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#ffffff', fontWeight: 500, fontSize: 'clamp(1rem, 2vw, 1.35rem)', letterSpacing: '1px', marginBottom: 4 }}>
            We Shoot • Edit • Deliver Reels in
          </p>

          <h1 className="reveal delay-2" style={{
            fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontStyle: 'normal',
            fontSize: 'clamp(4rem, 13vw, 12rem)', color: '#FF1A1A',
            lineHeight: 1, whiteSpace: 'nowrap', marginBottom: 40,
            textShadow: '0 0 80px rgba(255,26,26,0.5), 0 0 40px rgba(255,26,26,0.3)', letterSpacing: '2px',
          }}>
            10 Minutes
            <sup style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1rem, 1.8vw, 1.8rem)', position: 'relative', top: '-0.55em', letterSpacing: 0, opacity: 0.65, fontStyle: 'normal', fontWeight: 400 }}>*</sup>
          </h1>

          <div className="reveal delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
            {['🕐 24/7 Available', '📍 Based in Guntur', '📱 Shoot on iPhone'].map((b) => (
              <span key={b} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 9999, padding: '7px 18px', fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.76rem', color: '#888', letterSpacing: '0.3px', cursor: 'default',
                transition: 'border-color 0.25s, color 0.25s, background 0.25s',
              }}
                onMouseEnter={(e) => { const s = e.currentTarget as HTMLSpanElement; s.style.borderColor = 'rgba(255,26,26,0.35)'; s.style.color = '#ccc'; s.style.background = 'rgba(255,26,26,0.05)'; }}
                onMouseLeave={(e) => { const s = e.currentTarget as HTMLSpanElement; s.style.borderColor = 'rgba(255,255,255,0.09)'; s.style.color = '#888'; s.style.background = 'rgba(255,255,255,0.03)'; }}
              >{b}</span>
            ))}
          </div>

          <div className="reveal delay-4 hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14, marginBottom: 0 }}>
            <button onClick={() => window.open(WA_BOOK, '_blank')} className="btn-primary" style={{ fontSize: '0.82rem', padding: '15px 40px' }}>
              Book Now
            </button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent', border: '1.5px solid rgba(255,255,255,0.22)',
                borderRadius: 9999, padding: '15px 40px', color: 'rgba(240,240,240,0.65)',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.82rem',
                letterSpacing: '1.2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = 'rgba(255,255,255,0.55)'; b.style.color = '#F0F0F0'; b.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = 'rgba(255,255,255,0.22)'; b.style.color = 'rgba(240,240,240,0.65)'; b.style.background = 'transparent'; }}
            >
              View Packages
            </button>
          </div>
        </div>

        {/* RIGHT: iPhone */}
        <div style={{ flex: '0 0 42%', maxWidth: '42%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 40 }}>
          <IPhoneMockup />
        </div>
      </div>
    </section>
  );
}
