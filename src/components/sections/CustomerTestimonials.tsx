import { useReveal } from '@/hooks/useReveal';

interface Testimonial { id: number; text: string; name: string; role: string; image: string; }

const testimonials: Testimonial[] = [
  { id: 1, text: 'Cine Hub made booking a cinematographer super easy! Great service, skilled creators, and stunning reels. Highly recommend!', name: 'Srikari Galigari',  role: 'Wedding Client',   image: 'https://www.flashoot.com/assets/Srikari-BBlbe1Nx.jpg' },
  { id: 2, text: 'Cine Hub is a game-changer! Quick booking, talented cinematographers, and amazing event coverage. Loved the experience!',   name: 'Lanka Pravallika', role: 'Event Organiser',  image: 'https://www.flashoot.com/assets/Pravallika-BDPEbDkj.jpg' },
  { id: 3, text: 'Seamless booking, professional creators, and stunning reels! Cine Hub made capturing memories effortless and fun.',          name: 'Abhiram Kukunuri', role: 'Brand Shoot',      image: 'https://www.flashoot.com/assets/Abhiram-DB4yJA3y.jpg' },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="star-pop" style={{ animationDelay: `${i * 60}ms` }} width="14" height="14" viewBox="0 0 24 24" fill="#D0021B">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow-pill">Testimonials</span>
          <h2 className="section-title">What Our <span>Customers Say</span></h2>
          <p className="section-sub">Join thousands of satisfied customers who trust Cine Hub</p>
        </div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, maxWidth: 1020, margin: '0 auto' }}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`reveal delay-${i + 1}`}
              style={{
                background: '#161616',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 18, padding: '28px 26px',
                display: 'flex', flexDirection: 'column',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.borderColor = 'rgba(208,2,27,0.25)';
                d.style.transform = 'translateY(-4px)';
                d.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.borderColor = 'rgba(255,255,255,0.06)';
                d.style.transform = 'translateY(0)';
                d.style.boxShadow = 'none';
              }}
            >
              <Stars />

              {/* Large quote */}
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '3.5rem', color: '#D0021B', opacity: 0.35, lineHeight: 0.8, marginBottom: 14, userSelect: 'none' }}>
                "
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", color: '#bbb', fontSize: '0.93rem', lineHeight: 1.75, marginBottom: 24, flex: 1 }}>
                {t.text}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 18 }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img
                  src={t.image} alt={t.name}
                  style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', border: '2px solid #D0021B', flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", color: '#F2F2F2', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.2 }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", color: '#555', fontSize: '0.75rem', marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
