import { useReveal } from '@/hooks/useReveal';

const services = [
  { emoji: '🎬', title: 'Wedding Reels',         description: 'Cinematic wedding coverage — traditional & modern, delivered on the spot.' },
  { emoji: '🎂', title: 'Birthday Reels',         description: 'Make every birthday unforgettable with a professionally shot & edited reel.' },
  { emoji: '🌟', title: 'All Types of Reels',     description: 'Events, parties, product launches, or casual shoots — we cover it all.' },
  { emoji: '⚡', title: '10-Minute Delivery',     description: 'Shoot, edit, and receive your reel within 10 minutes of wrapping.' },
  { emoji: '👩', title: 'Female Cinematographer', description: 'Female clients can request a female cinematographer for comfort and safety.' },
  { emoji: '🕐', title: '24/7 Availability',      description: "We're available around the clock — book anytime, shoot anytime." },
];

const delays = ['delay-1','delay-2','delay-3','delay-4','delay-5','delay-6'];

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="section-pad section-bg-page">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow-pill">Why Choose Us</span>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-sub">Everything you need for professional reel creation, delivered fast.</p>
        </div>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {services.map((s, i) => (
            <div key={i} className={`ch-card reveal ${delays[i]}`} style={{ padding: '28px 24px' }}>
              <div className="emoji-icon">{s.emoji}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#F2F2F2', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: '#888', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
