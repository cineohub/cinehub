import { useReveal } from '@/hooks/useReveal';

const testimonials = [
  {
    id: 1,
    text: 'I booked Cine O Hub for my sister\'s engagement and the reel was ready before the ceremony even ended. Absolutely blown away by the speed and quality!',
    name: 'Priya Reddy',
    role: 'Engagement Shoot · Guntur',
    initials: 'PR',
    color: '#FF1A1A',
  },
  {
    id: 2,
    text: 'We used Cine O Hub for our restaurant launch event. The cinematographer was professional, punctual, and the final reel got 50k views on Instagram. Worth every rupee.',
    name: 'Karthik Naidu',
    role: 'Restaurant Launch · Vijayawada',
    initials: 'KN',
    color: '#D0021B',
  },
  {
    id: 3,
    text: 'As a female client I was nervous, but they arranged a female cinematographer within minutes. Felt completely safe and comfortable throughout the shoot.',
    name: 'Ananya Sharma',
    role: 'Birthday Reel · Guntur',
    initials: 'AS',
    color: '#FF1A1A',
  },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FF1A1A">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-pad section-bg-alt">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow-pill">Testimonials</span>
          <h2 className="section-title">Loved by <span>Real Clients</span></h2>
          <p className="section-sub">Real stories from people who trusted Cine O Hub for their special moments</p>
        </div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`reveal delay-${i + 1}`}
              style={{
                background: '#161616',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16, padding: '28px 24px',
                display: 'flex', flexDirection: 'column',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'rgba(255,26,26,0.3)'; d.style.transform = 'translateY(-5px)'; d.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'; }}
              onMouseLeave={(e) => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'rgba(255,255,255,0.06)'; d.style.transform = 'translateY(0)'; d.style.boxShadow = 'none'; }}
            >
              <Stars />

              <div style={{ fontSize: '2.8rem', color: '#FF1A1A', opacity: 0.25, lineHeight: 0.8, marginBottom: 12, userSelect: 'none', fontFamily: 'Georgia, serif' }}>"</div>

              <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#bbb', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: 24, flex: 1 }}>
                {t.text}
              </p>

              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 18 }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Avatar with initials */}
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
                  background: `rgba(255,26,26,0.15)`,
                  border: `2px solid ${t.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                  fontSize: '0.85rem', color: t.color,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", color: '#F2F2F2', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.2 }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", color: '#555', fontSize: '0.72rem', marginTop: 3 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
