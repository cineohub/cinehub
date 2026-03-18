import { useReveal } from '@/hooks/useReveal';

const services = [
  { emoji: '🎬', title: 'Wedding Reels',          description: 'Cinematic wedding coverage — traditional & modern, delivered on the spot.' },
  { emoji: '🎂', title: 'Birthday Reels',          description: 'Make every birthday unforgettable with a professionally shot & edited reel.' },
  { emoji: '🌟', title: 'All Types of Reels',      description: 'Events, parties, product launches, or casual shoots — we cover it all.' },
  { emoji: '⚡', title: '10-Minute Delivery',      description: 'Shoot, edit, and receive your reel within 10 minutes of wrapping.' },
  { emoji: '👩', title: 'Female Cinematographer',  description: 'Female clients can request a female cinematographer for comfort and safety.' },
  { emoji: '🕐', title: '24/7 Availability',       description: "We're available around the clock — book anytime, shoot anytime." },
  { emoji: '🔒', title: 'Data Safe & Secure',      description: 'Your videos, personal details, and payments are fully encrypted and protected.' },
  { emoji: '🛡️', title: 'Woman Safety First',      description: 'Women can exclusively book a verified female reel maker for a safe and comfortable experience.' },
];

const delays = ['delay-1','delay-2','delay-3','delay-4','delay-5','delay-6','delay-6','delay-6'];

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="section-pad section-bg-page">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow-pill">Why Choose Us</span>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-sub">Everything you need for professional reel creation, delivered fast.</p>
        </div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal ${delays[i]}`}
              style={{
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 14,
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s, background 0.3s',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.borderColor = 'rgba(255,26,26,0.35)';
                d.style.transform = 'translateY(-6px)';
                d.style.boxShadow = '0 16px 40px rgba(0,0,0,0.5)';
                d.style.background = '#181818';
              }}
              onMouseLeave={(e) => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.borderColor = 'rgba(255,255,255,0.06)';
                d.style.transform = 'translateY(0)';
                d.style.boxShadow = 'none';
                d.style.background = '#141414';
              }}
            >
              {/* Top accent line on hover via pseudo — use inline div */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 2,
                background: 'linear-gradient(90deg, #FF1A1A, transparent)',
                opacity: 0.5,
                borderRadius: '14px 14px 0 0',
              }} />

              {/* Emoji badge */}
              <div style={{
                width: 46, height: 46,
                borderRadius: 12,
                background: 'rgba(255,26,26,0.08)',
                border: '1px solid rgba(255,26,26,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', flexShrink: 0,
              }}>
                {s.emoji}
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#ffffff', fontWeight: 700,
                  fontSize: '0.95rem', marginBottom: 6, lineHeight: 1.3,
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#666', fontSize: '0.82rem',
                  lineHeight: 1.65, margin: 0,
                }}>
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
